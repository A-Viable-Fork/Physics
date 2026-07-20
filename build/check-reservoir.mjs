// Role: the Stage 3c Track 2 advisory reservoir scanner. Scans every claim's statement text for the
//   trigger phrases named in build/reservoir-blocks.mjs's 21 class-level exclusion ("block") claims,
//   flagging any claim outside a block's own already-known members (the block claim itself, its
//   evidence claim, and the killed claim it directly resulted from, all of which trivially match
//   since the trigger phrases were drawn from their own text) that pattern-matches an excluded scope.
// Contract: `node build/check-reservoir.mjs` always exits 0. It is advisory, not a gate: a match is
//   printed as a WARN line naming the candidate claim and the block it falls inside, for a human (or
//   a later stage's own admission review) to read before treating that claim as live. Unlike every
//   other build/check-*.mjs in this repo, a match here is not a build failure; the reservoir's own
//   withdrawal records and the real gate's WD-UNSATISFIED / WF-SUPERSEDED checks (docs/status-ledger
//   .md, Stage 3c) are the actual enforcement layer. This script is a lightweight, literal-substring
//   heuristic (no NLP, no scoring), named advisory precisely because a substring match is neither
//   necessary nor sufficient for a claim to actually fall inside a block's real scope; false
//   positives and false negatives are both expected, and both are acceptable at an advisory tier.
// Invariant: never declines the build; a scope match is a print, never a process.exit(1). Reads
//   BLOCKS from build/reservoir-blocks.mjs, never re-derives the trigger phrases here.
"use strict";
import { buildKernel } from "./dg-build.mjs";
import { BLOCKS } from "./reservoir-blocks.mjs";

const H = "=".repeat(80);
console.log(H); console.log("CHECK-RESERVOIR: advisory scope-pattern match against the class-level exclusion blocks"); console.log(H);

const built = buildKernel();

console.log(`\nscanning ${built.claims.length} claims against ${BLOCKS.length} block(s)`);
let matches = 0;
for (const { spec } of built.claims) {
  for (const [blockRef, killedRef, label, , triggers] of BLOCKS) {
    const evidenceRef = "ev." + killedRef;
    if (spec.ref === blockRef || spec.ref === killedRef || spec.ref === evidenceRef) continue; // a block's own known members always match; not a candidate violation
    const hay = spec.statement.toLowerCase();
    const hit = triggers.find((t) => hay.includes(t.toLowerCase()));
    if (hit) {
      matches++;
      console.log(` WARN  claim "${spec.ref}" (${spec.kind}) pattern-matches block "${blockRef}" (${label}) on trigger "${hit}"; review before treating as live.`);
    }
  }
}

console.log(`\n${matches} candidate scope match(es) found (advisory only; never a build failure).`);
console.log(H);
console.log("check-reservoir: advisory scan complete (always exits 0)");
console.log(H);
process.exit(0);
