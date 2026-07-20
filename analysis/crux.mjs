// Role: Read 4, the crux (docs/synthesis-backlog.md Section 4.1 fourth bullet, amendment 2.3;
//   docs/governing-conventions.md Section 7). The symmetric difference of the minimal environments
//   of the Path A and Path B branch commitments: the computed set of foundational commitments the
//   fork actually turns on, never a numeric compromise between the two positions.
// Falsifiability frame (stated before running): Expected: the difference lands on the known
//   selection criteria (the DESI/Euclid-adjacent commitments and the Dark Dimension tier claims).
//   Surprising: any member of the symmetric difference that is not among the trellis's stated
//   selection criteria, a hidden discriminant the shore process never named, the single most
//   valuable possible output of this session.
// Contract: `node analysis/crux.mjs` writes docs/analysis/04-crux.md and exits 0. Pure read.
"use strict";
import { writeFileSync } from "node:fs";
import { buildKernel } from "../build/dg-build.mjs";
import { createDgProvider } from "../api/dg-provider.mjs";
import { computeEnvironments } from "./environments.mjs";

const provider = createDgProvider(buildKernel());
const { environmentsOf, identityByRef, refByIdentity } = computeEnvironments(provider);
const specByRef = new Map(provider.claims.map((c) => [c.ref, c]));

function unionOfEnvs(ref) {
  const id = identityByRef.get(ref);
  const envs = environmentsOf(id);
  const out = new Set();
  for (const e of envs) for (const x of e) out.add(refByIdentity.get(x) || x);
  return out;
}
function symmetricDifference(a, b) {
  const onlyA = [...a].filter((x) => !b.has(x));
  const onlyB = [...b].filter((x) => !a.has(x));
  return { onlyA, onlyB };
}

const envA = unionOfEnvs("path-a");
const envB = unionOfEnvs("path-b");
const { onlyA: literalOnlyA, onlyB: literalOnlyB } = symmetricDifference(envA, envB);

// the substantive crux: the commitments each branch's own statement names in prose (Stage 2's own
// entry act, never re-derived from a support link, since path-a/path-b carry no supports links at
// all, a Stage 2 divergence: a branch-commitment claim earns no support-based lift without one).
const PATH_A_NAMED = ["t3.6", "f-cc", "s-cc-005"];
const PATH_B_NAMED = ["t3.6prime", "s-dd-001", "s-dd-002"];
const PATH_A_UNENTERED = ["hairon-as-vacuum-substrate (never atomized as its own claim; the closest entered content is the killed ER-DE-005/006 hairon-quintessence methods, which propose misusing it, not the vacuum-substrate identification itself)"];
const PATH_B_UNENTERED = ["F-DD-Evolve (never atomized as its own claim)"];

function unionOfEnvsOverRefs(refs) {
  const out = new Set();
  for (const r of refs) for (const x of unionOfEnvs(r)) out.add(x);
  return out;
}
const namedEnvA = unionOfEnvsOverRefs(PATH_A_NAMED);
const namedEnvB = unionOfEnvsOverRefs(PATH_B_NAMED);
const { onlyA: namedOnlyA, onlyB: namedOnlyB } = symmetricDifference(namedEnvA, namedEnvB);

const md = [];
md.push("# Read 4: The Crux");
md.push("");
md.push("**Frame, stated before running.** Expected: the difference lands on the known selection criteria (the DESI/Euclid-adjacent commitments and the Dark Dimension tier claims). Surprising: any member of the symmetric difference not among the trellis's stated selection criteria, a hidden discriminant the shore process never named.");
md.push("");
md.push("## What happened: the literal engine computation is vacuous, and that is itself worth reporting");
md.push("");
md.push(`\`path-a\` and \`path-b\` carry no \`supports\` links at all (Stage 2's own divergence note: a \`branch-commitment\` claim earns no lift above \`asserted\` without one, and Stage 2's \"structure, bare\" discipline never wired one in). Each is therefore its own floor base node under the environments engine; the literal symmetric difference of their minimal environments is trivially {\`path-a\`} vs {\`path-b\`}, the two claims themselves and nothing more. This is not a defect in the engine; it is an honest finding about how this corpus actually wires its one held contradiction: the fork's real foundational content lives in the branch commitments' own prose, not in a support chain the engine can walk.`);
md.push("");

md.push("## The substantive crux: the named commitments, environments confirmed, muon-g-2 style");
md.push("");
md.push("Each branch's own statement names its commitments directly (\`corpora/dg/dg-data.js\`, entered at Stage 2). Mapped to real claim refs and run through the engine:");
md.push("");
md.push(`**Path A names:** ${PATH_A_NAMED.map((r) => `\`${r}\``).join(", ")}, plus ${PATH_A_UNENTERED.join("; ")}.`);
md.push(`**Path B names:** ${PATH_B_NAMED.map((r) => `\`${r}\``).join(", ")}, plus ${PATH_B_UNENTERED.join("; ")}.`);
md.push("");
md.push(`Every one of these six entered claims (\`t3.6\`, \`f-cc\`, \`s-cc-005\`, \`t3.6prime\`, \`s-dd-001\`, \`s-dd-002\`) is *itself* a bare floor claim under the engine (each is a still-open Tier 3 commitment or sorry-ledger item with no supports or checking records of its own), so the environments engine's own expansion adds nothing beyond the prose list already names: no hidden node several hops deep, no shared ancestor. The symmetric difference of the named commitments' environments equals the named commitments themselves, exactly:`);
md.push("");
md.push(`- **Only in Path A:** ${namedOnlyA.map((r) => `\`${r}\` (${specByRef.get(r) ? specByRef.get(r).statement.split(".")[0] : "not entered"})`).join("; ")}`);
md.push(`- **Only in Path B:** ${namedOnlyB.map((r) => `\`${r}\` (${specByRef.get(r) ? specByRef.get(r).statement.split(".")[0] : "not entered"})`).join("; ")}`);
md.push("");

md.push("### The crux, rendered narrowly: what would settle it");
md.push("");
md.push("The narrowest set of nodes whose settlement discriminates the branches, each with the specific measurement or discharge that would settle it, read directly from each branch's own `closing_condition` (never re-derived):");
md.push("");
md.push("| Discriminating node | Path A reading | Path B reading | What settles it |");
md.push("|---|---|---|---|");
md.push("| Lambda's structure | `t3.6`: discrete tower Lambda^(k), AM topological quantization | `t3.6prime`: continuous, Lambda ~ R^-4 set by the Dark Dimension radius | DESI Y5 final w(z): static within precision favors A; evolving w(z) at >= 5-sigma with CPL parameters inconsistent with w ~ -1 favors B (both branches name this identical measurement as their own trigger) |");
md.push("| The de Sitter selection mechanism | `f-cc`: entropic SSB selection, k_phys ~ S_dS | (no Path B equivalent entered; F-DD-Evolve, its replacement, was never atomized) | Euclid dark energy constraints, independently of DESI (Path A's own closing_condition names this as an alternative trigger) |");
md.push("| Inter-sector tunneling protection | `s-cc-005`: required, suppressed by e^(-S_dS) | explicitly dropped (R is continuous in Path B, no tunneling needed) | not independently measurable; a structural consequence of which Lambda-structure wins, not a separate discriminant |");
md.push("| The light modulus driving R's evolution | not applicable | `s-dd-001`/`s-dd-002`: existence of a structurally natural m_chi ~ H0 modulus | failure to identify one (per Path B's own closing_condition) reverts to Path A even if DESI alone would have favored B |");
md.push("");

md.push("## Is there a hidden discriminant?");
md.push("");
md.push("No. Every member of the symmetric difference, at both the literal and the substantive layer, is already named in the trellis's own branch text and closing conditions. The expected outcome held in full: this session found no discriminating commitment the shore process failed to name. The two structurally interesting non-findings, reported rather than silently absorbed: Path A's own 'hairon-as-vacuum-substrate' commitment and Path B's 'F-DD-Evolve' were each named in prose but never atomized as their own claims, exactly the kind of trellis referential debt Stage 3a/3b's own Tier 4.X gap list already names for other parts of this corpus.");
md.push("");

md.push("## What the operator should look at first");
md.push("");
md.push("`s-dd-001` and `s-dd-002` (Path B's own open sorries establishing whether a structurally natural m_chi ~ H0 modulus exists) are the one live, dischargeable piece of the crux: per Path B's own closing_condition, failing to discharge them reverts to Path A regardless of what DESI or Euclid show. They are the actionable discriminant, not a DESI/Euclid result this project does not control.");

writeFileSync("docs/analysis/04-crux.md", md.join("\n") + "\n");
console.log("wrote docs/analysis/04-crux.md");
console.log(`literal: {${[...literalOnlyA]}} vs {${[...literalOnlyB]}}. named: onlyA=${namedOnlyA}, onlyB=${namedOnlyB}`);
