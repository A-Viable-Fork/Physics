// Role: the substrate-coherence oracle for the dg kernel. Verifies the config produces a coherent
//   kernel regardless of what corpora/dg/dg-data.js currently holds: every adopted kind is in the
//   vendored shared subtree and its pinned hash matches, the source table and kind table build (the
//   real kernel throws on a bad source class or ceiling), and the gate accepts the current store as
//   a contribution against the empty prior state. The scaffolder holds no rules; this check is the
//   real enforcer.
// Contract: `node build/check-dg.mjs` exits non-zero on any failure.
// Invariant: the adopted hashes, the tables, and the gate decision are all real, computed over
//   whatever corpora/dg/dg-data.js currently holds; this check makes no assertion about the claim
//   count, since that grows stage by stage. Content-specific assertions (claim counts, per-tier
//   kind distribution, declared-versus-earned per claim) live in build/check-dg-tier1.mjs and later
//   stage-specific checks, not here.
// DEPARTURE from build/new-kernel.mjs's generated form: the original generated assertion
// "the empty kernel has zero claims" was true only for the Stage 0/Stage 1 milestone commit before
// corpora/dg/dg-data.js was hand-filled; it is removed here since keeping a permanently-failing
// assertion in the suite is dishonest, not because the generator's rule-checking was wrong.
"use strict";
import { createRequire } from "node:module";
import { hashTypeBundle } from "../vendor/kernel/schema/type-hash.mjs";

const require = createRequire(import.meta.url);
const { KINDS, SOURCES, ADOPTED, ADOPTED_HASHES } = require("../corpora/dg/tables.js");
const { COMMON_TYPE_HASHES } = require("../vendor/corpora/_shared/common-types.js");

let fails = 0;
const ok = (c, m) => { console.log(`${c ? "  ok  " : " FAIL "} ${m}`); if (!c) fails++; };
const H = "=".repeat(80);
console.log(H); console.log("CHECK-DG: substrate coherence over the current dg kernel state"); console.log(H);

console.log("\n[1] every adopted kind is in the vendored shared subtree and its pinned hash matches");
for (const name of ADOPTED) {
  const shared = COMMON_TYPE_HASHES[name];
  ok(shared !== undefined, `adopts common kind '${name}', which is present in the shared subtree`);
  if (shared !== undefined) {
    ok(ADOPTED_HASHES[name] === shared, `the pinned hash for '${name}' still matches the shared subtree`);
    const row = KINDS.find((k) => k.kind === name);
    ok(!!row && hashTypeBundle({ kind: row.kind, ceiling: row.ceiling, compatibility_rule_id: null, atlas_refs: [] }) === shared, `the '${name}' kind row implies the adopted hash`);
  }
}

console.log("\n[2] the source table and kind table build, and the gate accepts the current store");
let built = null;
try {
  const mod = await import("./dg-build.mjs");
  built = mod.buildKernel();
  ok(true, "the kernel builds: source table, kind table, and the store all valid");
} catch (e) {
  ok(false, `the kernel fails to build: ${e.message}`);
}
if (built) {
  // "accepted-with-disagreement" is not a failure: it is the gate's honest reading of a real
  // registered disagreement (Path A contradicts Path B), never a decline.
  ok(built.receipt.decision === "accepted" || built.receipt.decision === "accepted-with-disagreement",
    `the current contribution is not declined by the real gate (got ${built.receipt.decision})`);
}

console.log("\n" + H);
if (fails === 0) console.log("verified: the config produces a coherent dg kernel; adopted hashes valid, tables built, gate accepts the current store.");
console.log(fails === 0 ? "check-dg: OK" : `check-dg: ${fails} FAILURE(S)`);
console.log(H);
process.exit(fails === 0 ? 0 : 1);
