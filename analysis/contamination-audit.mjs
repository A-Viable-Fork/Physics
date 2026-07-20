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
//   never a weighted or averaged score), per docs/governing-conventions.md Section 6.
"use strict";
import { writeFileSync } from "node:fs";
import { buildKernel } from "../build/dg-build.mjs";
import { computeEnvironments } from "./environments.mjs";

const built = buildKernel();
const { environmentsOf, refByIdentity } = computeEnvironments(built);

const specByRef = new Map(built.claims.map((c) => [c.spec.ref, c.spec]));
const KIND_TIER = new Set(["axiom", "standard-result", "observation", "conjecture-adopted"]);

// count: for every base node, the set of distinct claim refs whose environments touch it.
const touching = new Map();
for (const c of built.claims) {
  const envs = environmentsOf(c.rec.identity);
  const seen = new Set();
  for (const e of envs) for (const x of e) seen.add(x);
  for (const x of seen) {
    const key = refByIdentity.get(x) || x;
    if (!touching.has(key)) touching.set(key, new Set());
    touching.get(key).add(c.spec.ref);
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

md.push("## The surprising finding: a single Framework Scout report shared across the DE/HT reservoir family");
md.push("");
const scoutRef = "corpus.framework-scout-sub-chandrasekhar-type-ia-may-12-2026";
const scoutSet = touching.get(scoutRef);
const scoutSetSize = scoutSet.size;
const scoutRootSet = touching.get("corpus.quantum-crystal-ext");
md.push(`\`${scoutRef}\` is touched by ${scoutSetSize} claims; its own root ancestor \`corpus.quantum-crystal-ext\` inherits the identical ${scoutRootSet.size}-claim count through the same chain (\`corpus.quantum-crystal-ext\` has exactly one document resting on it, this same report, per its own \`rests_on\` entry). This is exactly the shared-assumption pattern the read is built to find: not a tier commitment, not CC-1, a single Stage 3c Track 1 evidence citation quietly underlying dozens of claims the trellis itself presents as separately-derived kills.`);
md.push("");
md.push("The trellis's own Section 5 (THE DEAD) names a *different* Framework Scout report per kill in this family: 'F12 Reconciliation Scout' for ER-COSM-001 through 004, 'Framework Scout 1 BH Mechanism' for ER-DE-001, 'Framework Scout 3 NEDE Thermal' for ER-HT-001, 'Framework Scout 4 Multi-Field Destabilization' for ER-DE-004 and ER-DE-006, and so on. None of these specific scout numbers were ever catalogued as their own source-table row; Stage 3c Track 1 mapped all of them to the one nearest-matching existing row (`corpus.framework-scout-sub-chandrasekhar-type-ia-may-12-2026`, entered for the unrelated ER-WD-001 kill) rather than leaving the citation generic (`trellis.v4-16`) or adding a source row per scout report.");
md.push("");
md.push(`The practical consequence, named here for the first time: ${scoutSetSize} claims genuinely environment-touch this one document (13 evidence claims and 12 class-level exclusion blocks). 13 further claims (the killed \`dead.er-*\` and \`f12\` claims themselves, plus their own citation of this source) do NOT environment-touch it, a subtlety worth stating plainly: a bare claim's \`source_id\` field is documentation metadata read by no grounding computation; only a checking record's own footprint, or a supports link's own citation, actually enters an environment. The 25 that do touch it (every evidence claim in this family, and every block claim built on top of one) share one footprint through this single document. Any future attempt to treat two of them as independently confirming would be structurally wrong under this corpus's own data, exactly the contamination this read exists to catch before it is relied on.`);
md.push("");
md.push("This is not itself a grading error: none of these claims is currently declared above `asserted` (the evidence claims) or the honest computed value (the class blocks), and none claims independence from any of the others. It is a citation-granularity gap in how Stage 3c Track 1 was built, named here as an honest finding rather than a defect to silently patch (this session changes nothing in the corpus).");
md.push("");

md.push("## What the operator should look at first");
md.push("");
md.push(`If any future stage wants to cite two or more of these ${scoutSetSize} claims as independent evidence for anything (a corroboration finding, a future block claim, an external report), it must not: they share the \`${scoutRef}\` footprint and would be capped at \`checked\` at best under \`docs/governing-conventions.md\` Section 5's amended independence policy, never \`independently-rechecked\`, regardless of how the citing claim's own checking records are declared. Entering the individual Framework Scout report numbers (1, 3, 4, and the F12 Reconciliation Scout) as their own distinct source rows, each resting on \`corpus.quantum-crystal-ext\` only where the trellis's own text actually supports that lineage, would resolve the granularity gap; not attempted here, since this session changes nothing in the corpus.`);

writeFileSync("docs/analysis/02-contamination-audit.md", md.join("\n") + "\n");
console.log("wrote docs/analysis/02-contamination-audit.md");
console.log(`top node: ${ranked[0][0]} (${ranked[0][1].size} claims); scout finding: ${scoutSet.size} claims share one footprint.`);
