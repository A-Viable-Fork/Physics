// Role: the Stage 1 regression oracle. Verifies the Stage 1 tier commitments (Tier 0 axioms,
//   Tier 1-2 standard results, Tier 2.5 observations, Tier 3 adopted conjectures) remain intact and
//   honestly graded as the corpus grows past Stage 1: their per-kind counts still hold, every claim
//   in the WHOLE corpus (Stage 1 and beyond) is declared at or below what the real gate computes it
//   earns, and axioms still self-ground to constitutive. Stage 2 content (CC-1, K-constraints,
//   functions, contracts, the branch fork, the sorry ledger) is expected and is not asserted absent
//   here; Stage 2's own acceptance test is build/check-dg-coverage.mjs.
// Contract: `node build/check-dg-tier1.mjs` exits non-zero on any failure, naming it.
// Invariant: recomputes every claim's earned grade from the real kernel (kernel/grounding via the
//   gate's own decide, not a re-implementation here); a claim this check calls honest is honest
//   because the gate accepted it, not because this file asserts it.
// DEPARTURE from the Stage 1 form: section [2]'s exact total-claim-count assertion (45) and section
// [5]'s "nothing from Stage 2 yet" assertions are retired now that Stage 2 has properly begun,
// since keeping them would make this check permanently and correctly fail rather than test
// anything live. The Stage 1 per-kind counts and the universal declared-equals-earned check, both
// still meaningful regression tests, are kept.
"use strict";
import { buildKernel } from "./dg-build.mjs";
import { earnedGrade } from "../vendor/kernel/grounding/earned-grade.mjs";

let fails = 0;
const ok = (c, m) => { console.log(`${c ? "  ok  " : " FAIL "} ${m}`); if (!c) fails++; };
const H = "=".repeat(80);
console.log(H); console.log("CHECK-DG-TIER1: the Stage 1 tier commitments, still honestly graded"); console.log(H);

const built = buildKernel();
const { claims, receipt, tables } = built;

console.log("\n[1] the gate accepts the whole current contribution");
ok(receipt.decision === "accepted" || receipt.decision === "accepted-with-disagreement",
  `decide() does not decline (got ${receipt.decision}${receipt.decision_basis ? ", basis: " + receipt.decision_basis.join(",") : ""})`);

console.log("\n[2] the Stage 1 per-kind counts still hold (Stage 2 adds other kinds, not these)");
const EXPECTED = { axiom: 4, "standard-result": 15, observation: 19, "conjecture-adopted": 7 };
const byKind = {};
for (const c of claims) byKind[c.rec.kind] = (byKind[c.rec.kind] || 0) + 1;
for (const [kind, n] of Object.entries(EXPECTED)) ok(byKind[kind] === n, `${kind}: ${n} claims (got ${byKind[kind] || 0})`);

console.log("\n[3] every claim in the whole corpus declares at or below what the gate's own earned-grade rule computes, bare (supports and checking records do not exist anywhere in this corpus yet)");
for (const { rec } of claims) {
  const ceil = tables.kindTable.byKind.get(rec.kind);
  const eg = earnedGrade({ ceiling: ceil.ceiling, constitutive: ceil.ceiling === "constitutive", checkingRecords: rec.checking_records, supports: [] });
  const honest = rec.declared_grade === eg.earned;
  ok(honest, `${rec.kind} "${rec.statement.slice(0, 48)}...": declared ${rec.declared_grade}, earned ${eg.earned}`);
}

console.log("\n[4] the axiom kind still self-grounds to constitutive");
const axiomClaims = claims.filter((c) => c.rec.kind === "axiom");
ok(axiomClaims.length === 4 && axiomClaims.every((c) => c.rec.declared_grade === "constitutive"), "all 4 axiom claims declare constitutive");

console.log("\n[5] no supports link or checking record exists anywhere in the corpus yet (Stage 3 scope)");
ok((built.links || []).every((l) => l.link_kind !== "supports"), "every link in the corpus is structural (depends-on, contradicts), never supports");
ok(claims.every((c) => !c.rec.checking_records || c.rec.checking_records.length === 0), "no claim carries a checking record");

console.log("\n" + H);
if (fails === 0) console.log("verified: the Stage 1 tier commitments remain intact and honestly graded as the corpus has grown, and no support link or checking record has been smuggled in ahead of Stage 3.");
console.log(fails === 0 ? "check-dg-tier1: OK" : `check-dg-tier1: ${fails} FAILURE(S)`);
console.log(H);
process.exit(fails === 0 ? 0 : 1);
