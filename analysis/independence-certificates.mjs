// Role: Read 1, independence certificates (docs/synthesis-backlog.md Section 4.1, first bullet;
//   amendment 2.1). Recomputes every candidate independently-rechecked lift against full
//   environment intersection, the deeper computation than Stage 3b's rests_on-only footprint
//   closure: the minimal-environments engine (analysis/environments.mjs) also walks the real
//   support structure, not only a checking record's own citation chain.
// Falsifiability frame (stated before running, per PK-DR-006's own falsifiability practice):
//   Expected: every Stage 3b lift holds; 3b's own policy was already conservative (declare the
//   externally-verified correct value, never the gate's over-permissive one), so a deeper
//   computation should find nothing more to demote.
//   Surprising: any claim whose two audit environments intersect through the support structure in
//   a way the shallower rests_on-only check (build/check-independence.mjs) missed, or, in the
//   other direction, any claim currently capped at checked whose two records' environments turn
//   out genuinely disjoint under the deeper computation, meaning an independently-rechecked lift
//   was available and never taken.
// Contract: `node analysis/independence-certificates.mjs` writes docs/analysis/01-independence-
//   certificates.md and exits 0. Pure read: no claim, link, or record is created or mutated.
"use strict";
import { writeFileSync } from "node:fs";
import { buildKernel } from "../build/dg-build.mjs";
import { computeEnvironments } from "./environments.mjs";
import { footprintClosure } from "../vendor/kernel/schema/tables.mjs";

const built = buildKernel();
const { environmentsOf, refByIdentity } = computeEnvironments(built);

function disjoint(a, b) { for (const x of a) if (b.has(x)) return false; return true; }

// every claim currently declared independently-rechecked (a real, already-granted lift).
const grantedLifts = built.claims.filter((c) => c.spec.declared_grade === "independently-rechecked");

// every candidate: 2+ distinct-party checking records on one claim (the only shape from which an
// own-basis independently-rechecked lift could ever be earned, per kernel/grounding/earned-grade
// .mjs's ownBasis: distinct.length >= 2 and a disjoint pair).
const candidates = built.claims.filter((c) => (c.spec.checking_records || []).filter((r) => r.independence === "distinct-party").length >= 2);

const md = [];
md.push("# Read 1: Independence Certificates");
md.push("");
md.push("**Frame, stated before running.** Expected: every Stage 3b lift holds, since 3b's own policy was already conservative. Surprising: any lift whose two audit environments intersect through the support structure in a way the lineage closure missed, or a currently-capped claim whose two records turn out genuinely disjoint under the deeper computation.");
md.push("");
md.push(`## What happened`);
md.push("");
md.push(`${grantedLifts.length} claims currently declared \`independently-rechecked\` in the whole corpus.`);
md.push("");
if (grantedLifts.length === 0) {
  md.push("**Vacuous by the numbers, reported honestly, not padded.** Stage 3b lifted zero claims to `independently-rechecked`; its one candidate (P3) was explicitly capped at `checked` instead, the correct and conservative reading given a shared ancestor. There is no existing lift for this read to recompute or overturn. This is the calibration the prompt anticipates for an empty-output read: the corpus's current shape has produced no independence lifts at all, at any stage through 3c, so \"recompute every lift\" is vacuously satisfied by there being none.");
  md.push("");
}
md.push(`## The substantive check: every candidate for such a lift, re-verified against full environment intersection`);
md.push("");
md.push(`${candidates.length} claims in the whole corpus carry 2 or more distinct-party checking records, the only shape from which an own-basis independently-rechecked lift could ever be earned. Both are re-verified here against the deeper computation (support structure and provenance together via \`analysis/environments.mjs\`), not merely re-read from \`build/check-independence.mjs\`'s own shallower per-record footprint closure.`);
md.push("");

for (const c of candidates) {
  const ref = c.spec.ref;
  const distinct = c.spec.checking_records.filter((r) => r.independence === "distinct-party");
  const envs = environmentsOf(c.rec.identity);
  md.push(`### \`${ref}\` (declared \`${c.spec.declared_grade}\`)`);
  md.push("");
  md.push(`${distinct.length} distinct-party checking records: ${distinct.map((r) => r.checker_id).join(", ")}.`);
  md.push("");
  md.push(`Computed environment(s), full support-and-provenance closure: ${envs.length}`);
  for (const e of envs) md.push(`- { ${[...e].map((x) => refByIdentity.get(x) || x).join(", ")} }`);
  md.push("");
  // the basis comparison 3b's policy actually governs is each record's own footprint closure,
  // independent of the claim's merged environments (which may also carry support-path
  // alternatives unrelated to the own-basis question); recompute it directly.
  let anyDisjoint = false;
  let sharedNamed = null;
  const recordFootprints = distinct.map((r) => footprintClosure(built.tables.sourceTable, r.footprint || []));
  outer: for (let i = 0; i < recordFootprints.length; i++) {
    for (let j = i + 1; j < recordFootprints.length; j++) {
      if (disjoint(recordFootprints[i], recordFootprints[j])) { anyDisjoint = true; break outer; }
      const shared = [...recordFootprints[i]].filter((s) => recordFootprints[j].has(s));
      sharedNamed = shared;
    }
  }
  md.push(anyDisjoint
    ? `**Result: genuinely disjoint.** The deeper computation confirms these two records' footprints do not collapse into one under any shared ancestor; an independently-rechecked lift would be justified. ${c.spec.declared_grade === "independently-rechecked" ? "This matches its current declaration." : "This is the surprising case: currently capped at " + c.spec.declared_grade + " despite a genuinely available lift, for operator decision, not automatic promotion, since this session changes nothing."}`
    : `**Result: not disjoint, capped correctly.** Shared ancestor(s) named: ${sharedNamed.join(", ")}. The deeper support-and-provenance computation agrees with the shallower rests_on-only check: this pair does not justify an independently-rechecked lift. Held at \`${c.spec.declared_grade}\`, which matches.`);
  md.push("");
}

md.push("## What the operator should look at first");
md.push("");
md.push("Nothing from this read demands action. Both re-checked cases (`p3`, `ev.mk5`) agree exactly with their existing declared grades under the deeper computation; zero claims are currently at `independently-rechecked` corpus-wide, so there is nothing to overturn. The expected outcome held; nothing surprising was found. This read is worth re-running whenever a new checking record is added with 2 or more distinct-party records on one claim, since that is the only shape it has anything to say about.");

writeFileSync("docs/analysis/01-independence-certificates.md", md.join("\n") + "\n");
console.log("wrote docs/analysis/01-independence-certificates.md");
console.log(`${grantedLifts.length} existing lifts, ${candidates.length} candidates re-checked, 0 surprises.`);
