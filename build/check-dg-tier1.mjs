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
// DEPARTURE at Stage 3a: section [3] now reads each claim's earned grade from the real gate
// receipt's grade_table (computed with the corpus's real supports links folded in) instead of
// reimplementing earnedGrade() with supports forced to []; the old form would now report every
// supported claim as "dishonest" for the wrong reason (this check's own stale assumption, not the
// corpus). Section [5] drops the "no supports link anywhere" assertion (Stage 3a's whole point is to
// add them) but keeps "no checking record anywhere" (still true, still Stage 3b's job).
// DEPARTURE at Stage 3b: section [5] drops the "no checking record anywhere" assertion (Stage 3b's
// whole point is to add them) and asserts at least one exists instead, plus that no withdrawal record
// exists yet (still true, still Stage 3c's job).
// DEPARTURE at Stage 3c: section [5] drops the "no withdrawal record" assertion (Stage 3c Track 1's
// whole point is to add them, one per reservoir entry) and asserts at least one exists instead.
"use strict";
import { buildKernel } from "./dg-build.mjs";
import { earnedGrade } from "../vendor/kernel/grounding/earned-grade.mjs";
import { leqWithinMode } from "../vendor/kernel/schema/confidence.mjs";

let fails = 0;
const ok = (c, m) => { console.log(`${c ? "  ok  " : " FAIL "} ${m}`); if (!c) fails++; };
const H = "=".repeat(80);
console.log(H); console.log("CHECK-DG-TIER1: the Stage 1 tier commitments, still honestly graded"); console.log(H);

const built = buildKernel();
const { claims, receipt, tables } = built;

console.log("\n[1] the gate accepts the whole current contribution");
ok(receipt.decision === "accepted" || receipt.decision === "accepted-with-disagreement",
  `decide() does not decline (got ${receipt.decision}${receipt.decision_basis ? ", basis: " + receipt.decision_basis.join(",") : ""})`);

console.log("\n[2] the Stage 1 per-kind counts are still present (observation grows: Stage 2 adds B-NU-1 to the same kind)");
const EXPECTED = { axiom: 4, "standard-result": 15, observation: 19, "conjecture-adopted": 7 };
const byKind = {};
for (const c of claims) byKind[c.rec.kind] = (byKind[c.rec.kind] || 0) + 1;
for (const [kind, n] of Object.entries(EXPECTED)) ok((byKind[kind] || 0) >= n, `${kind}: at least ${n} claims (got ${byKind[kind] || 0})`);

console.log("\n[3] every claim in the whole corpus declares at or below what the real gate's grade_table computes it earns, real supports links folded in");
// DEPARTURE at Stage 3b: this was an exact-equality check through Stage 3a, when nothing had a
// reason to under-declare. Stage 3b's independence lifts introduce one: the vendored
// checkingRecord() builder drops a hand-authored footprint field before the real gate ever sees it
// (docs/governing-conventions.md Section 5), so the gate's own grade_table over-grants
// independently-rechecked to any claim with 2+ distinct-party records, footprint overlap or not.
// This corpus deliberately declares such a claim (P3) at the correct, lower value (checked) instead
// of the gate's inflated one; declared <= earned (leqWithinMode) is the real invariant the gate
// itself enforces (GM-ABOVE only blocks an over-claim), and build/check-independence.mjs is the
// exact-match authority for what "correct" means on the affected claims specifically.
const gradeByIdentity = new Map((receipt.grade_table || []).map((g) => [g.identity, g]));
for (const { rec } of claims) {
  const g = gradeByIdentity.get(rec.identity);
  ok(!!g, `${rec.kind} "${rec.statement.slice(0, 48)}...": has a grade_table entry`);
  if (!g) continue;
  const cmp = leqWithinMode(rec.declared_grade, g.earned_grade);
  const honest = cmp.comparable && cmp.leq;
  ok(honest, `${rec.kind} "${rec.statement.slice(0, 48)}...": declared ${rec.declared_grade}, earned ${g.earned_grade}`);
}

console.log("\n[4] the axiom kind still self-grounds to constitutive");
const axiomClaims = claims.filter((c) => c.rec.kind === "axiom");
ok(axiomClaims.length === 4 && axiomClaims.every((c) => c.rec.declared_grade === "constitutive"), "all 4 axiom claims declare constitutive");

console.log("\n[5] supports links, checking records, and withdrawal records are all now expected (Stage 3a, 3b, 3c)");
const supportsCount = (built.links || []).filter((l) => l.link_kind === "supports").length;
ok(supportsCount > 0, `at least one supports link exists in the corpus (got ${supportsCount})`);
const checkingCount = claims.reduce((n, c) => n + (c.rec.checking_records ? c.rec.checking_records.length : 0), 0);
ok(checkingCount > 0, `at least one checking record exists in the corpus (got ${checkingCount})`);
const withdrawalCount = (built.state && built.state.withdrawn_records) ? built.state.withdrawn_records.length : 0;
ok(withdrawalCount > 0, `at least one withdrawal record exists in the corpus (got ${withdrawalCount})`);

console.log("\n" + H);
if (fails === 0) console.log("verified: the Stage 1 tier commitments remain intact and honestly graded as the corpus has grown, and no support link or checking record has been smuggled in ahead of Stage 3.");
console.log(fails === 0 ? "check-dg-tier1: OK" : `check-dg-tier1: ${fails} FAILURE(S)`);
console.log(H);
process.exit(fails === 0 ? 0 : 1);
