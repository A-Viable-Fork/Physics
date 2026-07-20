// Role: Read 5, the materiality queue (docs/synthesis-backlog.md Section 4.1, fifth bullet;
//   PK-DR-004 free experiment 2). Ranks under-claimed claims by downstream dependency mass: the
//   operator's audit backlog in priority order, not a demand to audit everything at once.
// Falsifiability frame (stated before running): Expected: tier-adjacent and conjunctive-group
//   members rank highest, since the most-depended-upon claims in a small, deep graph tend to sit
//   near the tier commitments. Surprising, and the one this read is built to catch: K3 surfacing
//   near the top, generalizing Stage 3b's K1 finding (K1 has a real checking record but stays
//   asserted because its conjunctive co-premise K3 is itself unaudited); if K3 carries a large
//   downstream mass while remaining unaudited, the same weak-link pattern recurs one level up.
// Contract: `node analysis/materiality-queue.mjs` writes docs/analysis/05-materiality-queue.md and
//   exits 0. Pure read. "Downstream mass" is a plain count of distinct claims whose minimal
//   environments touch the node, the same ordinal statistic Read 2 uses (docs/governing-
//   conventions.md Section 6: counts, meets, joins, and monotone functions only). "Ceiling gap" is
//   collapsedRank(ceiling) - collapsedRank(declared), an integer difference of ordinal rank
//   *positions* used purely as a sorting key over the fixed confidence order, never a cardinal
//   value combined across claims or asserted as a grade; documented here per the same section's
//   own instruction to name the monotone function chosen wherever a read wants a weight.
"use strict";
import { writeFileSync } from "node:fs";
import { buildKernel } from "../build/dg-build.mjs";
import { createDgProvider } from "../api/dg-provider.mjs";
import { computeEnvironments } from "./environments.mjs";

const provider = createDgProvider(buildKernel());
const { environmentsOf, refByIdentity } = computeEnvironments(provider);
const specByRef = new Map(provider.claims.map((c) => [c.ref, c]));

// downstream mass: reuse the exact "touching" computation Read 2 performs.
const touching = new Map();
for (const c of provider.claims) {
  const envs = environmentsOf(c.identity);
  const seen = new Set();
  for (const e of envs) for (const x of e) seen.add(x);
  for (const x of seen) {
    const key = refByIdentity.get(x) || x;
    if (!touching.has(key)) touching.set(key, new Set());
    touching.get(key).add(c.ref);
  }
}

// Stage 3b's under-claim ledger, named claims (docs/status-ledger.md, "The under-claim ledger").
const UNDER_CLAIM_LEDGER = ["c01", "c02", "c03", "c04", "c06b", "c07a", "c10", "c15", "c18a", "c18b", "c20b", "c20c", "c20d", "c20e", "c20g", "c23", "c23-wgc", "mech.bh-entropy", "mech.bh-area-law-edge-modes", "mech.bh-rt-surface-anchor"];

const gapRows = [];
for (const c of provider.claims) {
  if (!c.ceiling) continue;
  const gap = provider.collapsedRankOf(c.ceiling) - provider.collapsedRankOf(c.declared_grade);
  gapRows.push({ ref: c.ref, kind: c.kind, ceiling: c.ceiling, declared: c.declared_grade, gap });
}
const gapByRef = new Map(gapRows.map((r) => [r.ref, r]));

// candidate pool: every claim in the under-claim ledger, plus every claim whose ceiling gap is
// the maximum possible for its kind (a large, not merely nonzero, gap, per the prompt's own
// "large" qualifier).
const maxGapByKind = new Map();
for (const r of gapRows) maxGapByKind.set(r.kind, Math.max(maxGapByKind.get(r.kind) || 0, r.gap));
const largeGapCandidates = gapRows.filter((r) => r.gap > 0 && r.gap === maxGapByKind.get(r.kind));
const candidateRefs = new Set([...UNDER_CLAIM_LEDGER, ...largeGapCandidates.map((r) => r.ref)]);

const ranked = [...candidateRefs]
  .map((ref) => ({ ref, mass: (touching.get(ref) || new Set()).size, gap: gapByRef.get(ref) }))
  .sort((a, b) => b.mass - a.mass);

function gradeBucket(refs) {
  const buckets = {};
  for (const r of refs) {
    const spec = specByRef.get(r);
    const g = spec ? spec.declared_grade : "source-row";
    buckets[g] = (buckets[g] || 0) + 1;
  }
  return Object.entries(buckets).map(([g, n]) => `${n} ${g}`).join(", ");
}

const md = [];
md.push("# Read 5: The Materiality Queue");
md.push("");
md.push("**Frame, stated before running.** Expected: tier-adjacent and conjunctive-group members rank highest. Surprising, and the one this read is built to catch: K3 surfacing near the top, generalizing Stage 3b's K1 finding, if a heavily-depended-upon claim remains unaudited the same way.");
md.push("");
md.push("**Monotone function used for ranking, stated here per docs/governing-conventions.md Section 6.** Downstream mass is a plain count of distinct claims whose minimal environments touch the candidate (identical to Read 2's statistic). Ceiling gap is `collapsedRank(ceiling) - collapsedRank(declared)`, an integer difference of ordinal rank positions used only as a sorting key, never combined across claims or treated as a grade value in its own right.");
md.push("");
md.push(`## Candidate pool`);
md.push("");
md.push(`${UNDER_CLAIM_LEDGER.length} named claims from Stage 3b's under-claim ledger, plus ${largeGapCandidates.length} claims whose ceiling gap equals the maximum possible for their own kind (a genuinely large gap, not merely nonzero), pooled and deduplicated to ${candidateRefs.size} candidates, ranked by downstream mass.`);
md.push("");
md.push("## Top fifteen, by downstream mass");
md.push("");
md.push("| Rank | Claim | Downstream mass | Ceiling gap | Kind | Declared | Ceiling | Downstream grade mix |");
md.push("|---|---|---|---|---|---|---|---|");
for (let i = 0; i < 15 && i < ranked.length; i++) {
  const r = ranked[i];
  const downstreamRefs = [...(touching.get(r.ref) || new Set())].filter((x) => x !== r.ref);
  md.push(`| ${i + 1} | \`${r.ref}\` | ${r.mass} | ${r.gap ? r.gap.gap : "n/a"} | ${r.gap ? r.gap.kind : "-"} | ${r.gap ? r.gap.declared : "-"} | ${r.gap ? r.gap.ceiling : "-"} | ${gradeBucket(downstreamRefs)} |`);
}
md.push("");

md.push("## The K3 check");
md.push("");
const k3Mass = (touching.get("k3") || new Set()).size;
const k3Rank = ranked.findIndex((r) => r.ref === "k3") + 1;
md.push(`\`k3\` carries a downstream mass of ${k3Mass}, ranking ${k3Rank > 0 ? `#${k3Rank} of ${ranked.length}` : "outside the candidate pool"} in this queue. K1's own Stage 3b finding (a real checking record, still capped at \`asserted\` because its conjunctive co-premise K3 is itself unaudited) generalizes here: ${k3Rank > 0 && k3Rank <= 15 ? "K3 does surface near the top, exactly the surprising pattern this read is built to catch: an audit of K3 would not just lift K3 itself, it would clear the weak-link drag on every claim conjunctively depending on it, K1 foremost among them." : "K3 does not rank in the top fifteen; the K1 pattern is real for K1 specifically but has not yet generalized to a broader queue-topping position at this corpus's current size."}`);
md.push("");

md.push("## What the operator should look at first");
md.push("");
md.push(`\`${ranked[0].ref}\` (downstream mass ${ranked[0].mass}) is the single highest-leverage audit target in the corpus: auditing it moves the most other claims' grades at once, more than any other candidate in this queue. ${k3Rank > 0 && k3Rank <= 5 ? "K3 sits in the top five and deserves specific attention for the reason named above: it is both heavily depended upon and the direct cause of K1's own stuck grade." : ""}`);

writeFileSync("docs/analysis/05-materiality-queue.md", md.join("\n") + "\n");
console.log("wrote docs/analysis/05-materiality-queue.md");
console.log(`top: ${ranked[0].ref} (mass ${ranked[0].mass}); k3 rank: ${k3Rank}, mass: ${k3Mass}`);
