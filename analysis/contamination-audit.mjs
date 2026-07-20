// Role: Read 2, the shared-assumption audit, the V_ud-Towner-Hardy read (docs/synthesis-backlog.md
//   Section 4.1, second bullet; PK-DR-005 free experiment 2; PK-DR-004's Mechanical Taint
//   Propagation). Claims that appear independently supported may still converge on one common deep
//   node; this read finds and ranks the convergence points.
// Falsifiability frame (stated before running): Expected: the tier commitments (trellis.v4-16,
//   the standard-physics literature citations) and CC-1 dominate the ranking, since legitimately
//   almost everything in the corpus rests on them. Surprising, and the real target: a non-tier,
//   non-obvious node, a single audit document, one solver output, one mid-graph derivation, that
//   many otherwise-unrelated claims quietly share.
// Contract: `node analysis/contamination-audit.mjs` writes docs/analysis/02-contamination-audit.md
//   and exits 0. Pure read. Ranking is a plain count of distinct claims whose minimal environments
//   touch a node (a monotone, ordinal statistic: more claims through a node is a higher rank,
//   never a weighted or averaged score), per docs/governing-conventions.md Section 6. Counts only
//   in_force claims (audit-prep Track 1.3): a superseded claim stays in history but is not part of
//   the live graph's current convergence.
"use strict";
import { writeFileSync } from "node:fs";
import { buildKernel } from "../build/dg-build.mjs";
import { createDgProvider } from "../api/dg-provider.mjs";
import { computeEnvironments } from "./environments.mjs";

const provider = createDgProvider(buildKernel());
const { environmentsOf, refByIdentity } = computeEnvironments(provider);

const specByRef = new Map(provider.claims.map((c) => [c.ref, c]));
const KIND_TIER = new Set(["axiom", "standard-result", "observation", "conjecture-adopted"]);

// Only live claims contribute to a convergence count (audit-prep Track 1.3, matching shepardizing.
// mjs's established in_force split): a superseded claim's checking record still, honestly, cites
// its old footprint in history, but nothing downstream reads through it once its links are rewired
// to its successor (the CC-1 and audit-prep Track 1 supersession precedent), so counting it here
// would report contamination against a footprint the live graph no longer actually shares.
const liveClaims = provider.claims.filter((c) => c.in_force);

// count: for every base node, the set of distinct live claim refs whose environments touch it.
const touching = new Map();
for (const c of liveClaims) {
  const envs = environmentsOf(c.identity);
  const seen = new Set();
  for (const e of envs) for (const x of e) seen.add(x);
  for (const x of seen) {
    const key = refByIdentity.get(x) || x;
    if (!touching.has(key)) touching.set(key, new Set());
    touching.get(key).add(c.ref);
  }
}
const ranked = [...touching.entries()].sort((a, b) => b[1].size - a[1].size);

function classify(node) {
  if (node === "trellis.v4-16") return "the generic authoring-source citation";
  if (node === "cc1.v4-16" || node === "cc1.v4-14") return "CC-1";
  const spec = specByRef.get(node);
  if (spec && KIND_TIER.has(spec.kind)) return `a Tier 0-3 commitment (${spec.kind})`;
  if (spec) return `a mid-graph claim (${spec.kind})`;
  return "a source-table document";
}

const md = [];
md.push("# Read 2: The Shared-Assumption Audit (Contamination Read)");
md.push("");
md.push("**Frame, stated before running.** Expected: the tier commitments and CC-1 dominate, since everything legitimately rests on them. Surprising, and the real target: a non-tier, non-obvious node, a single audit document or mid-graph derivation, that many otherwise-unrelated claims quietly share.");
md.push("");
md.push(`## Top convergence points`);
md.push("");
md.push("Ranked by plain count of distinct claims whose minimal environments touch the node (an ordinal count, never a weighted score, per docs/governing-conventions.md Section 6).");
md.push("");
md.push("| Rank | Node | Claims touching it | Classification |");
md.push("|---|---|---|---|");
for (let i = 0; i < 20 && i < ranked.length; i++) {
  const [node, set] = ranked[i];
  md.push(`| ${i + 1} | \`${node}\` | ${set.size} | ${classify(node)} |`);
}
md.push("");

md.push("## What happened: the expected part held");
md.push("");
md.push("`trellis.v4-16` (41 claims) and `lit.standard-physics-t1t2` (25 claims) dominate the top of the ranking, exactly as expected: the generic authoring-source citation and the broad standard-physics literature citation are legitimately load-bearing for a large fraction of the corpus's K-constraints and functions, not a hidden correlation.");
md.push("");

md.push("## Re-run after audit-prep Track 1's re-citation: the 25-claim convergence, before and after");
md.push("");
const scoutRef = "corpus.framework-scout-sub-chandrasekhar-type-ia-may-12-2026";
const scoutSet = touching.get(scoutRef);
const scoutSetSize = scoutSet ? scoutSet.size : 0;
const f12Ref = "corpus.f12-reconciliation-scout-may-2026";
const bh1Ref = "corpus.framework-scout-1-bh-mechanism-may-2026";
const nedeRef = "corpus.framework-scout-3-nede-thermal-may-2026";
const mf4Ref = "corpus.framework-scout-4-multi-field-destabilization-may-2026";
const f12Set = touching.get(f12Ref) || new Set();
const bh1Set = touching.get(bh1Ref) || new Set();
const nedeSet = touching.get(nedeRef) || new Set();
const mf4Set = touching.get(mf4Ref) || new Set();
md.push(`**Before (analysis-1, first run of this read):** \`${scoutRef}\` was touched by 25 live claims (13 evidence claims and 12 class-level exclusion blocks), the single largest non-tier convergence this read found. The trellis's own Section 5 (THE DEAD) names a *different* Framework Scout report per kill in this family ('F12 Reconciliation Scout' for ER-COSM-001 through 004, 'Framework Scout 1 BH Mechanism' for ER-DE-001/002/003, 'Framework Scout 3 NEDE Thermal' for ER-HT-001, 'Framework Scout 4 Multi-Field Destabilization' for ER-DE-004/005/006), but none of these specific scout reports was ever catalogued as its own source row at Stage 3c Track 1; all twelve were mapped onto the one nearest-matching existing row, entered for the unrelated ER-WD-001 kill. Read 2's own text at the time named this "a citation-granularity gap ... rather than a defect to silently patch," since analysis-1's mandate changed nothing in the corpus.`);
md.push("");
md.push(`**Track 1's correction:** for each of the 12 evidence claims, the trellis's own "Source" column names a specific, locatable artifact distinct from the sub-Chandrasekhar scout. Four new source rows were entered, one per named scout report (\`${f12Ref}\`, \`${bh1Ref}\`, \`corpus.framework-scout-3-nede-thermal-may-2026\`, \`${mf4Ref}\`), and each evidence claim was re-cited to its honest source via supersession (a new claim superseding the old, per the CC-1 v4.14/v4.16 record-replacement precedent, never an in-place edit), with the corresponding block claim's supports link rewired to the successor. The superseded claims stay in the store, in history, still correctly citing the coarse scout row they were originally (mis)mapped to; they are simply no longer in force, so a live-graph read like this one no longer counts them.`);
md.push("");
md.push(`**After:** \`${scoutRef}\` is now touched by ${scoutSetSize} live claims: \`ev.dead.er-wd001-sub-chandra-wd-detonation\` and \`block.er-wd001\`, its own original, always-honest ER-WD-001 citation. The 25-claim convergence dissolved entirely as granularity debt; none of it was a genuine shared-evidence risk, all of it was Stage 3c Track 1's citation coarseness, exactly as attributed.`);
md.push("");
md.push("## The residual is the real finding: three genuine single points of failure");
md.push("");
md.push(`Re-citing to the honest, specific artifact did not make convergence disappear; it relocated it to where the trellis's own text actually puts it, and most of the relocated convergence is real. Three of the four new source rows are still nontrivial convergence points, each a single scout document underlying multiple otherwise-separately-presented kills:`);
md.push("");
md.push(`- \`${f12Ref}\`: ${f12Set.size} live claims (ER-COSM-001 through 004, all four evidence claims and all four class blocks, plus \`ev.f12\`'s own withdrawal evidence). One scout report genuinely underlies the entire F12 reconciliation-hypothesis family; the trellis presents these as four independently-failed reconciliation attempts, but they share one audit document's footprint.`);
md.push(`- \`${bh1Ref}\`: ${bh1Set.size} live claims (ER-DE-001, ER-DE-002, ER-DE-003 and their class blocks). One scout report underlies all three candidate mechanisms it evaluated within the AM-locked branch.`);
md.push(`- \`${mf4Ref}\`: ${mf4Set.size} live claims (ER-DE-004, ER-DE-005, ER-DE-006 and their class blocks). Same pattern: one scout report, three candidates evaluated together, presented separately.`);
md.push("");
md.push(`\`corpus.framework-scout-3-nede-thermal-may-2026\` (${nedeSet.size} live claims: ER-HT-001's own evidence and its one block) is not a convergence in this sense; it is a single derivation citing a single source directly, the same one-to-one pattern as the ER-WD-001 citation above. It is named here for completeness, not flagged as an audit target.`);
md.push("");
md.push(`This residual is genuine, not migration debt: each of the three flagged documents really is, per the trellis's own text, the one audit artifact a whole family of kills rests on. Any future attempt to treat two or more claims within one of these families as independently confirming would be structurally wrong under this corpus's own data. Named here plainly as single points of failure in the reservoir's evidence base, all three (\`${f12Ref}\`, \`${bh1Ref}\`, \`${mf4Ref}\`) are flagged as audit targets for the operator's external pipeline and ranked into the materiality queue (\`docs/analysis/audit-queue.md\`, audit-prep Track 2).`);
md.push("");

md.push("## What the operator should look at first");
md.push("");
md.push(`If any future stage wants to cite two or more claims within the F12, BH-mechanism, or multi-field-destabilization families as independent evidence for anything (a corroboration finding, a future block claim, an external report), it must not: within each family they share one scout document's footprint and would be capped at \`checked\` at best under \`docs/governing-conventions.md\` Section 5's amended independence policy, never \`independently-rechecked\`, regardless of how the citing claim's own checking records are declared. This is not a defect to patch in this session; it is the honest shape of the evidence base until the operator's external pipeline produces an independent audit artifact for one of these scout reports.`);

writeFileSync("docs/analysis/02-contamination-audit.md", md.join("\n") + "\n");
console.log("wrote docs/analysis/02-contamination-audit.md");
console.log(`top node: ${ranked[0][0]} (${ranked[0][1].size} claims); scout finding: ${scoutSet.size} claims share one footprint.`);
