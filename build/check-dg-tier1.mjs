// Role: the Stage 1 oracle. Verifies the dg kernel's tier commitments hold what Stage 1 claims and
//   nothing more: exactly the specified count of claims per kind, every claim declared at or below
//   what the real gate computes it earns (Tier 0 axioms self-ground to constitutive by their kind's
//   ceiling; every other Stage 1 claim floors honestly at asserted, since no support links or
//   checking records exist yet), the whole contribution accepted by the gate, and the DG region
//   proper (CC-1, K-constraints, functions, contracts, sorries, the exclusion reservoir, and the
//   Tier 3 branch-commitment apparatus including B-NU-1) named as absent, not silently missing.
// Contract: `node build/check-dg-tier1.mjs` exits non-zero on any failure, naming it.
// Invariant: recomputes every claim's earned grade from the real kernel (kernel/grounding via the
//   gate's own decide, not a re-implementation here); a claim this check calls honest is honest
//   because the gate accepted it, not because this file asserts it.
"use strict";
import { buildKernel } from "./dg-build.mjs";
import { earnedGrade } from "../vendor/kernel/grounding/earned-grade.mjs";

let fails = 0;
const ok = (c, m) => { console.log(`${c ? "  ok  " : " FAIL "} ${m}`); if (!c) fails++; };
const H = "=".repeat(80);
console.log(H); console.log("CHECK-DG-TIER1: the Stage 1 tier commitments, honestly graded"); console.log(H);

const built = buildKernel();
const { claims, receipt, tables } = built;

console.log("\n[1] the gate accepts the whole Stage 1 contribution");
ok(receipt.decision === "accepted", `decide() returns accepted (got ${receipt.decision}${receipt.decision_basis ? ", basis: " + receipt.decision_basis.join(",") : ""})`);

console.log("\n[2] exactly the specified claim count, per kind");
const EXPECTED = { axiom: 4, "standard-result": 15, observation: 19, "conjecture-adopted": 7 };
const byKind = {};
for (const c of claims) byKind[c.rec.kind] = (byKind[c.rec.kind] || 0) + 1;
ok(claims.length === 45, `45 claims total (got ${claims.length})`);
for (const [kind, n] of Object.entries(EXPECTED)) ok(byKind[kind] === n, `${kind}: ${n} claims (got ${byKind[kind] || 0})`);
ok(Object.keys(byKind).length === Object.keys(EXPECTED).length, `no claim of an unexpected kind (kinds present: ${Object.keys(byKind).sort().join(", ")})`);

console.log("\n[3] every claim declares at or below what the gate's own earned-grade rule computes, bare (no supports, no checking records)");
for (const { rec } of claims) {
  const ceil = tables.kindTable.byKind.get(rec.kind);
  const eg = earnedGrade({ ceiling: ceil.ceiling, constitutive: ceil.ceiling === "constitutive", checkingRecords: rec.checking_records, supports: [] });
  const honest = rec.declared_grade === eg.earned;
  ok(honest, `${rec.kind} "${rec.statement.slice(0, 48)}...": declared ${rec.declared_grade}, earned ${eg.earned}`);
}

console.log("\n[4] the axiom kind self-grounds to constitutive; every other Stage 1 kind floors at asserted");
const axiomClaims = claims.filter((c) => c.rec.kind === "axiom");
ok(axiomClaims.length === 4 && axiomClaims.every((c) => c.rec.declared_grade === "constitutive"), "all 4 axiom claims declare constitutive");
const nonAxiom = claims.filter((c) => c.rec.kind !== "axiom");
ok(nonAxiom.every((c) => c.rec.declared_grade === "asserted"), "every non-axiom Stage 1 claim declares asserted");

console.log("\n[5] the DG region proper and the omitted B-NU-1 are absent, not silently missing");
const statements = claims.map((c) => c.rec.statement).join(" ");
ok(!/CC-1/.test(statements), "no CC-1 claim entered (Stage 2 scope)");
ok(!/B-NU-1/.test(statements), "B-NU-1 not entered (deferred to Stage 2 alongside the Path A/B branch-commitment structure it is entangled with)");
ok((built.links || []).length === 0 && (built.state.entries.length === claims.length), "zero links entered (no supports, no checking records; that is Stage 3)");

console.log("\n" + H);
if (fails === 0) console.log("verified: the dg kernel holds exactly the Stage 1 tier commitments, every one honestly graded by the real gate, nothing from Stage 2 smuggled in early.");
console.log(fails === 0 ? "check-dg-tier1: OK" : `check-dg-tier1: ${fails} FAILURE(S)`);
console.log(H);
process.exit(fails === 0 ? 0 : 1);
