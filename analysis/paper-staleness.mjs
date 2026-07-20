// Role: the Paper 0 staleness read (landing-1 Track 5), the second half of the first staleness
//   pass. Reads docs/paper0-manifest.json (analysis/paper-manifest.mjs's output) and flags every
//   bound section whose claim_refs contain a superseded, decayed, or withdrawn claim against the
//   current built corpus.
// Contract: `node analysis/paper-staleness.mjs` writes docs/analysis/paper0-staleness.md and exits
//   0. Pure read: no claim, link, or record is created or mutated, and no paper text is generated
//   or modified, only the flagging report.
// Invariant: touches only the plain data api/dg-provider.mjs exposes (analysis/ is periphery, per
//   build/check-imports.mjs's layer table: it reads through the api or the store's public read
//   surface only, never vendor/kernel directly); decayedIdentities is api/dg-provider.mjs's own
//   plain-data read of the vendored decay computation.
"use strict";
import { readFileSync, writeFileSync } from "node:fs";
import { buildKernel } from "../build/dg-build.mjs";
import { createDgProvider } from "../api/dg-provider.mjs";

const manifest = JSON.parse(readFileSync("docs/paper0-manifest.json", "utf8"));
const built = buildKernel();
const provider = createDgProvider(built);

const supersededRefs = new Set([...provider.supersededIdentities].map((id) => provider.refByIdentity.get(id)));
const withdrawnRefs = new Set([...provider.withdrawnIdentities].map((id) => provider.refByIdentity.get(id)));
const decayedRefs = new Set([...provider.decayedIdentities].map((id) => provider.refByIdentity.get(id)));

function staleReasonsFor(ref) {
  const reasons = [];
  if (supersededRefs.has(ref)) reasons.push("superseded");
  if (withdrawnRefs.has(ref)) reasons.push("withdrawn");
  if (decayedRefs.has(ref)) reasons.push("decayed");
  return reasons;
}

const flagged = [];
for (const section of manifest.sections) {
  if (!section.bound) continue;
  const hits = [];
  for (const ref of section.claim_refs) {
    const reasons = staleReasonsFor(ref);
    if (reasons.length) hits.push({ ref, reasons });
  }
  if (hits.length) flagged.push({ section, hits });
}

const md = [];
md.push("# Paper 0 Staleness Read");
md.push("");
md.push(`Emitted by \`analysis/paper-staleness.mjs\` against \`docs/paper0-manifest.json\` (${manifest.sections.length} sections, ${manifest.sections.filter((s) => s.bound).length} bound) and the current built corpus. Pure read: no paper text is generated or modified, only the flagging below.`);
md.push("");
md.push(`**Expected first output, this is the demonstration this track exists for:** II.B should flag stale by the K3 supersession (landing-1 Track 3): its bound claim_refs include \`k3\`, now superseded by \`k3-prime\`.`);
md.push("");

if (flagged.length === 0) {
  md.push("No bound section currently flags stale. (This would itself be a surprising result immediately after a K3-style supersession; verify the manifest actually binds the superseded ref before trusting a clean report.)");
} else {
  md.push(`## ${flagged.length} section(s) flagged`);
  md.push("");
  for (const { section, hits } of flagged) {
    md.push(`### ${section.section_id}: ${section.title}`);
    md.push("");
    for (const { ref, reasons } of hits) {
      md.push(`- \`${ref}\`: ${reasons.join(", ")}`);
    }
    md.push("");
  }
}

md.push("## Every bound section, for completeness");
md.push("");
md.push("| Section | Title | Claim refs | Status |");
md.push("|---|---|---|---|");
for (const section of manifest.sections) {
  if (!section.bound) continue;
  const hits = flagged.find((f) => f.section === section);
  const status = hits ? `STALE (${hits.hits.map((h) => h.ref).join(", ")})` : "current";
  md.push(`| ${section.section_id} | ${section.title} | ${section.claim_refs.join(", ")} | ${status} |`);
}
md.push("");

writeFileSync("docs/analysis/paper0-staleness.md", md.join("\n") + "\n");
console.log(`wrote docs/analysis/paper0-staleness.md: ${flagged.length} section(s) flagged of ${manifest.sections.filter((s) => s.bound).length} bound.`);
