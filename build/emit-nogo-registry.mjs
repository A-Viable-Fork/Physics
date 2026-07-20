// Role: the Stage 3c Track 4 No-Go Registry emitter. A pure read over the real built kernel: no
//   claim, link, or withdrawal record is created here, only a markdown rendering of what Stage 3c
//   Tracks 1-3 already entered. Coleman-Mandula-style per-kill fields (barrier, assumptions, known
//   evasions), cascades rendered as chains, class-level exclusion blocks as their own section.
// Contract: `node build/emit-nogo-registry.mjs [outfile]` writes the registry to `outfile` (default
//   `docs/no-go-registry.md`) and exits 0. Never exits non-zero on content; a malformed corpus (a
//   withdrawal naming an identity absent from the built claim set) is the only failure mode, and it
//   throws loudly rather than emitting a silently incomplete registry.
// Invariant: reads only; `built.state`/`built.claims`/`built.withdrawals` as buildKernel() returns
//   them, never re-derives grading or reinstatement-satisfaction logic already owned by
//   kernel/gate/gate.mjs and kernel/grounding/earned-grade.mjs.
"use strict";
import { writeFileSync } from "node:fs";
import { buildKernel } from "./dg-build.mjs";
import { BLOCKS } from "./reservoir-blocks.mjs";

const OUTFILE = process.argv[2] || "docs/no-go-registry.md";
const built = buildKernel();

const specByRef = new Map(built.claims.map((c) => [c.spec.ref, c.spec]));
const refByIdentity = new Map(built.claims.map((c) => [c.rec.identity, c.spec.ref]));
const withdrawalByRef = new Map((built.withdrawals || []).map((w, i) => {
  const ref = refByIdentity.get(w.claim_identity);
  return [ref, { rec: w, raw: (built.state.withdrawn_records || [])[i] }];
}));

function evidenceFor(killedRef) {
  return specByRef.get("ev." + killedRef);
}

function renderCondition(cond) {
  if (cond.condition_kind === "entry-of-kind") return `reactivation requires a new entry of kind \`${cond.required_kind}\``;
  if (cond.condition_kind === "entry-at-grade") {
    const targetRef = refByIdentity.get(cond.target_identity) || cond.target_identity;
    return `reactivation requires \`${targetRef}\` to reach grade \`${cond.minimum_grade}\` (structurally unmeetable for a claim ceilinged below that grade: permanent decline)`;
  }
  if (cond.condition_kind === "citation-into-class") return `reactivation requires a citation into source class \`${cond.required_source_class}\``;
  return "(unrecognized condition kind)";
}

function renderKill(ref) {
  const killed = specByRef.get(ref);
  const evidence = evidenceFor(ref);
  const withdrawal = withdrawalByRef.get(ref);
  if (!killed || !evidence || !withdrawal) throw new Error(`incomplete reservoir triple for ${ref}`);
  const checkers = (evidence.checking_records || []).map((r) => r.checker_id).join(", ");
  const lines = [];
  lines.push(`#### \`${ref}\``);
  lines.push("");
  lines.push(`**Attempted mechanism:** ${killed.statement}`);
  lines.push("");
  lines.push(`**Mechanism of death (evidence, declared \`${evidence.declared_grade}\`, checked by ${checkers || "(none)"}):** ${evidence.statement.replace(/^Evidence for the withdrawal of "[^"]+": /, "")}`);
  lines.push("");
  lines.push(`**Typed evasion condition:** ${renderCondition(withdrawal.rec.reinstatement_condition)}`);
  if (withdrawal.rec.reason) lines.push("");
  if (withdrawal.rec.reason) lines.push(`**Reason (verbatim, including any gap this typing elides):** ${withdrawal.rec.reason}`);
  lines.push("");
  return lines.join("\n");
}

const allWithdrawnRefs = [...withdrawalByRef.keys()].sort();

// hand-authored cascades: chains of withdrawals sharing one upstream parent, never inferred from
// free text (the reservoir's own statements name the parent in prose, but a parsed guess risks
// silently mis-chaining an entry; these four chains are read directly from Track 1's own data).
const CASCADES = [
  { parent: "f12", label: "F12 retraction (v4.13, Cosmological-Sector Contraction Shore)", members: ["c12a", "c12b", "c12c", "c23-ds"] },
  { parent: "f13-2", label: "F13.2 reservoir (v4.15, matter-sector exclusion record)", members: ["c13a", "c13b", "c13c", "c13d", "c13e", "c13sub"] },
  { parent: "f21", label: "F21 reservoir (v4.15, matter-sector exclusion record)", members: ["c21a", "c21b", "c21c"] },
];
const cascadeMembers = new Set(CASCADES.flatMap((c) => [c.parent, ...c.members]));

const md = [];
md.push("# No-Go Registry");
md.push("");
md.push("Emitted by `build/emit-nogo-registry.mjs`, a pure read over the built kernel (`node build/dg-build.mjs`'s `buildKernel()`). Every entry below already exists in `corpora/dg/dg-data.js` as a killed claim, an evidence claim, and a withdrawal record with a typed reinstatement condition (Stage 3c Tracks 1-3); this file adds no claim of its own, only a rendering.");
md.push("");
md.push(`${allWithdrawnRefs.length} withdrawal records total. ${CASCADES.reduce((n, c) => n + c.members.length + 1, 0)} entries chain into ${CASCADES.length} cascades (below); ${BLOCKS.length} class-level exclusion blocks stand separately; the remainder are independent kills.`);
md.push("");
md.push("## Cascades");
md.push("");
for (const { parent, label, members } of CASCADES) {
  md.push(`### ${label}`);
  md.push("");
  md.push(renderKill(parent));
  md.push("Downstream, struck with this retraction:");
  md.push("");
  for (const m of members) md.push(renderKill(m));
}

md.push("## Class-level exclusion blocks");
md.push("");
md.push("A block claim generalizes one or more specific kills into a standing scope no future contribution should re-enter without a real reactivation. `build/check-reservoir.mjs` (advisory, CI's tenth check) pattern-matches new claim statements against these scopes.");
md.push("");
for (const [blockRef, killedRef, label] of BLOCKS) {
  const block = specByRef.get(blockRef);
  md.push(`#### \`${blockRef}\` (${label})`);
  md.push("");
  md.push(`**Scope (declared \`${block.declared_grade}\`):** ${block.statement.replace(/^Class-level exclusion \([^)]*\), from the withdrawal of "[^"]+": /, "")}`);
  md.push("");
  md.push(`Derived from the withdrawal of \`${killedRef}\`.`);
  md.push("");
}

md.push("## Full registry");
md.push("");
md.push("Every reservoir withdrawal not already listed above under a cascade.");
md.push("");
for (const ref of allWithdrawnRefs) {
  if (cascadeMembers.has(ref)) continue;
  md.push(renderKill(ref));
}

writeFileSync(OUTFILE, md.join("\n") + "\n");
console.log(`wrote ${OUTFILE}: ${allWithdrawnRefs.length} withdrawals rendered, ${BLOCKS.length} blocks, ${CASCADES.length} cascades.`);
process.exit(0);
