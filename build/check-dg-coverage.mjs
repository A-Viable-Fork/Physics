// Role: the Stage 2 acceptance test. Verifies the manifest (build/dg-coverage-manifest.json) against
//   the real built graph, both ways: every trellis identifier the manifest names resolves to a real
//   claim in corpora/dg/dg-data.js (nothing claimed entered is actually missing), and every claim of
//   a Stage-2-introduced kind (derivation, function, mechanism, prediction, branch-commitment,
//   comment, plus the B-NU-1 observation) appears in the manifest (nothing entered was left
//   unregistered and so invisible to this check). The manifest is authored data; this file contains
//   no physics content of its own, only the mechanical comparison.
// Contract: `node build/check-dg-coverage.mjs` exits non-zero on any failure, naming the identifier
//   or the ref.
// Invariant: coverage is checked against the real refId map buildKernel() produces, not against a
//   re-implementation of it; a manifest entry "resolves" only if build/dg-build.mjs's own ref
//   resolution found it.
"use strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { buildKernel } from "./dg-build.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
let fails = 0;
const ok = (c, m) => { console.log(`${c ? "  ok  " : " FAIL "} ${m}`); if (!c) fails++; };
const H = "=".repeat(80);
console.log(H); console.log("CHECK-DG-COVERAGE: the Stage 2 manifest against the real graph, both ways"); console.log(H);

const manifest = JSON.parse(readFileSync(join(ROOT, "build", "dg-coverage-manifest.json"), "utf8"));
const built = buildKernel();
const refSet = new Set(built.claims.map((c) => c.spec.ref));

console.log(`\n[1] every manifest entry (${manifest.entries.length}) resolves to a real claim`);
for (const e of manifest.entries) {
  ok(refSet.has(e.ref), `${e.trellis_id} -> ref "${e.ref}" exists as a claim`);
}

console.log("\n[2] every manifest ref is unique (no trellis identifier double-counted onto, or silently merged with, another)");
{
  const seen = new Map();
  for (const e of manifest.entries) {
    ok(!seen.has(e.ref), `"${e.ref}" named once (also claimed by "${seen.get(e.ref)}")`);
    seen.set(e.ref, e.trellis_id);
  }
}

console.log("\n[3] every Stage-2-introduced claim appears in the manifest (nothing entered silently drops off the coverage read)");
const STAGE2_KINDS = new Set(["derivation", "function", "mechanism", "prediction", "branch-commitment", "comment"]);
const manifestRefs = new Set(manifest.entries.map((e) => e.ref));
for (const { spec } of built.claims) {
  const inStage2Scope = STAGE2_KINDS.has(spec.kind) || spec.ref === "b-nu-1";
  if (!inStage2Scope) continue;
  ok(manifestRefs.has(spec.ref), `claim "${spec.ref}" (${spec.kind}) is named in the coverage manifest`);
}

console.log("\n[4] the gate does not decline the corpus the manifest claims to cover");
ok(built.receipt.decision === "accepted" || built.receipt.decision === "accepted-with-disagreement",
  `decide() does not decline (got ${built.receipt.decision})`);

console.log("\n" + H);
if (fails === 0) console.log("verified: the coverage manifest and the real graph agree exactly, both directions, over every K, P, F, live contract, prediction, branch, live sorry, and B-NU-1 Stage 2 claims to have entered.");
console.log(fails === 0 ? "check-dg-coverage: OK" : `check-dg-coverage: ${fails} FAILURE(S)`);
console.log(H);
process.exit(fails === 0 ? 0 : 1);
