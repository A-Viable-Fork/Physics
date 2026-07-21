// Role: the DG thin client's own descriptor, one manifest over the DG read contract
//   (api/dg-client-adapter.mjs), forked in shape from upstream/epistack/periphery/navigate's
//   client descriptor pattern (upstream/epistack/periphery/navigate/clients/clients.js, pin
//   b778f35), authored fresh for DG rather than copied, since DG needs its own kind mapping.
// Contract: exports DG_CLIENT = { id, kind: "client", tier: "thin", renderer: "thin", title,
//   tokens, mapping }. mapping covers every presentation type in the closed set (the thin-
//   client render-everything guarantee), including selection-step and sufficiency-step, which
//   DG never emits but the mapping must still name per docs/thin-clients.md's own validation.
// Invariant: pure descriptor data, no truth field, no store reference.
"use strict";

const TOKENS = {
  "--paper": "#e7eaec", "--paper-2": "#dfe3e6", "--ink": "#1a2026", "--ink-soft": "#48555f",
  "--ink-faint": "#8995a0", "--rule": "#cdd3d8", "--lamp": "#e8a33d", "--lamp-deep": "#c9852a",
  "--slate": "#647682", "--night": "#141a1f", "--danger": "#c5604b",
};

// question renders as "teaching" so the sorry's hook/intuition/in_words (drawn from its
// closing_condition) actually show; every other kind renders as the compact terse card.
const MAPPING = {
  question: { layout: "teaching" },
  "selection-step": { layout: "terse" },
  "sufficiency-step": { layout: "terse" },
  transformation: { layout: "terse" },
  primitive: { layout: "terse" },
  observation: { layout: "terse" },
  prediction: { layout: "terse" },
  comparison: { layout: "terse" },
  assumption: { layout: "terse" },
  claim: { layout: "terse" },
};

const DG_CLIENT = {
  id: "client.dg-thin",
  kind: "client",
  tier: "thin",
  renderer: "thin",
  title: "Displacement Geometry reader",
  tokens: TOKENS,
  mapping: MAPPING,
};

if (typeof module !== "undefined" && module.exports) module.exports = { DG_CLIENT };
