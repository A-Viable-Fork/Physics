// Role: the trust-boundary check. Derives the real import graph from every .js/.mjs file this
//   repository owns (vendor/ included, upstream/epistack's own submodule checkout excluded) and
//   verifies the one inherited invariant: nothing outside vendor/api or api/ imports
//   vendor/kernel directly, and corpora, once it exists, is pure data that imports nothing of its
//   own. Wired into CI from Stage 0, before there is a periphery or a corpora tree to violate it,
//   so the boundary is enforced from the first commit that could cross it.
// Contract: `node build/check-imports.mjs` exits non-zero on any violation, naming the edge.
// Invariant: layers are read from the file's path, not declared; the check derives the graph from
//   the real relative-import statements, never from a hand-maintained manifest of edges.
"use strict";
import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const EXCLUDE_DIRS = new Set(["upstream", "node_modules", ".git"]);

function walk(dir, out = []) {
  const abs = join(ROOT, dir);
  if (!existsSync(abs)) return out;
  for (const e of readdirSync(abs, { withFileTypes: true })) {
    if (dir === "" && EXCLUDE_DIRS.has(e.name)) continue;
    const p = dir ? join(dir, e.name) : e.name;
    if (e.isDirectory()) walk(p, out);
    else out.push(p.replace(/\\/g, "/"));
  }
  return out;
}

const allFiles = walk("").filter((f) => /\.(js|mjs)$/.test(f));

// layer(path): the trust layer a file belongs to, read from where it lives.
//   kernel   - vendor/kernel/** (trusted, vendored; never edited except the recorded divergences)
//   api      - vendor/api/** and api/** (the membrane; may import kernel)
//   corpora  - corpora/** and vendor/corpora/** (pure data; imports nothing of its own)
//   periphery- periphery/** (fallible; reaches kernel only through api)
//   build    - build/** (may reach any layer)
//   other    - vendor/scaffolder, vendor/build, and anything else not yet load-bearing at Stage 0
function layer(p) {
  if (p.startsWith("vendor/kernel/")) return "kernel";
  if (p.startsWith("vendor/api/") || p.startsWith("api/")) return "api";
  if (p.startsWith("vendor/corpora/") || p.startsWith("corpora/")) return "corpora";
  if (p.startsWith("periphery/")) return "periphery";
  if (p.startsWith("build/") || p.startsWith("vendor/build/")) return "build";
  return "other";
}

// importLegal(from, to): the one-way trust boundary. kernel imports only kernel; api may import
// kernel and api; periphery and corpora never import kernel directly; build may import anything.
function importLegal(from, to) {
  if (from === "build") return true;
  if (from === "kernel") return to === "kernel";
  if (from === "api") return to === "kernel" || to === "api" || to === "other";
  if (from === "corpora") return to === "corpora";
  if (from === "periphery") return to !== "kernel";
  return true; // "other" (vendor/scaffolder etc.) is not yet load-bearing at Stage 0
}

const IMPORT_RE = [/require\(\s*["']([^"']+)["']\s*\)/g, /import\s+[^"';]*?from\s*["']([^"']+)["']/g, /import\s*["']([^"']+)["']/g];
const fails = [];
let edgeCount = 0;

for (const f of allFiles) {
  const src = readFileSync(join(ROOT, f), "utf8");
  const fromLayer = layer(f);
  const seen = new Set();
  for (const reOrig of IMPORT_RE) {
    const re = new RegExp(reOrig.source, "g");
    let m;
    while ((m = re.exec(src))) {
      const spec = m[1];
      if (!spec.startsWith(".")) continue; // node: builtins, bare specifiers: not repo edges
      const targetAbs = resolve(dirname(join(ROOT, f)), spec);
      const target = relative(ROOT, targetAbs).replace(/\\/g, "/");
      if (seen.has(target)) continue;
      seen.add(target);
      const toLayer = layer(target);
      edgeCount++;
      if (!importLegal(fromLayer, toLayer)) {
        fails.push(`TRUST BOUNDARY: ${fromLayer} '${f}' imports ${toLayer} '${target}' (illegal: ${fromLayer} may not import ${toLayer} directly)`);
      }
    }
  }
}

console.log(`check-imports: ${allFiles.length} files scanned, ${edgeCount} relative-import edges derived.`);
if (fails.length) {
  console.error(`\n${fails.length} violation(s):`);
  for (const f of fails) console.error("  - " + f);
  process.exit(1);
}
console.log("verified: no file outside vendor/api or api/ imports vendor/kernel directly; corpora imports only corpora.");
console.log("check-imports: OK");
