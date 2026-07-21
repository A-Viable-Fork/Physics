// Role: the DG client-facing read adapter (DG read-surface build, Part B). Implements the
//   thin-client contract (resolve, has, decompose, kinds, entry; upstream/epistack/api/api.js,
//   upstream/epistack/docs/api.md) over DG's own graph, read through the complete path
//   (buildKernel, characterizedGaps), never api/dg-provider.mjs's provider.claims, which strips
//   closing_condition and full checking-record content a sorry view needs.
// Contract: buildDgSnapshot(built, presentation) -> { kinds, entry, nodes: {ref: node},
//   children: {ref: [ref,...]} }, a plain, precomputed snapshot. `built` is build/dg-build.mjs's
//   buildKernel() return value and `presentation` is corpora/dg/dg-presentation.js's own
//   DG_PRESENTATION map, both supplied by the caller, never constructed here, the same pattern
//   api/dg-provider.mjs already establishes (api may not import build or corpora directly,
//   build/check-imports.mjs's own trust-boundary table). createDgClientAdapter(built,
//   presentation) -> { resolve, has, decompose, kinds, entry }, the same contract as functions.
// Invariant: read-only against truth, like every client ("read through the API, never touch the
//   store"). No grade is computed or asserted here; every earned_grade is buildKernel's own real
//   gate output, read, never re-derived. corpora/dg/dg-data.js is never edited; the presentation
//   type comes from the additive overlay, corpora/dg/dg-presentation.js, passed in by the caller.
"use strict";
import { characterizedGaps } from "../vendor/kernel/analysis/characterized-gaps.mjs";

// The closed node-kind set a client may render. Copied by value, a read-only reference to
// upstream/epistack/kernel/schema/schema.js's PRESENTATION_TYPES, never imported live: the forked
// client stays fully independent of the submodule at build time and at runtime.
const PRESENTATION_TYPES = [
  "question",
  "selection-step",
  "sufficiency-step",
  "transformation",
  "primitive",
  "observation",
  "prediction",
  "comparison",
  "assumption",
  "claim",
];

// The chosen entry point: a real characterized gap, well exercised across this build's own
// sessions, its own closing_condition already carrying real content to render. Overridable by
// editing this one constant; DG has no designated case-entry claim of its own.
const ENTRY_REF = "s-k3-backreact";

// a short label from a DG statement: most DG statements open "REF: Title. Body...";
// take through the first period after a leading short colon-title, else truncate.
function deriveLabel(statement) {
  const colon = statement.indexOf(":");
  if (colon > 0 && colon < 40) {
    const period = statement.indexOf(".", colon);
    if (period > 0 && period < colon + 90) return statement.slice(0, period);
    return statement.slice(0, colon + 60);
  }
  return statement.length > 80 ? statement.slice(0, 80) + "..." : statement;
}

// buildDgSnapshot: the one place DG's flat claim-plus-supports graph becomes the shaped node
// tree the client contract expects. Every field marked DEFAULT below has no direct DG source and
// is a mechanically derived, documented placeholder, never invented physics content; every field
// not marked DEFAULT is DG's own real data, only reshaped or reused, never altered.
export function buildDgSnapshot(built, presentation) {
  const graph = { entries: built.state.entries, links: built.state.links, tables: built.tables };
  const gapByIdentity = new Map(characterizedGaps(graph).map((g) => [g.identity, g]));
  const gradeByIdentity = new Map(built.receipt.grade_table.map((g) => [g.identity, g]));
  const refByIdentity = new Map(built.claims.map((c) => [c.rec.identity, c.spec.ref]));

  // children(N): the from-nodes of every supports link whose to-node is N, that is, the claims
  // N's own claim grounds on. A supports link is wired from_identity (the grounding claim) to
  // to_identity (the claim it supports), the same direction kernel/store/decay.mjs's own
  // derivedGrade() reads supports in; confirmed against corpora/dg/dg-data.js's own link shape.
  const childIdentitiesOf = new Map();
  for (const l of (built.links || []).filter((x) => x.link_kind === "supports")) {
    if (!childIdentitiesOf.has(l.to_identity)) childIdentitiesOf.set(l.to_identity, []);
    childIdentitiesOf.get(l.to_identity).push(l.from_identity);
  }

  const nodes = {};
  const children = {};

  for (const c of built.claims) {
    const ref = c.spec.ref;
    const identity = c.rec.identity;
    const statement = c.rec.statement;
    const overlay = presentation[ref];
    if (!overlay) throw new Error(`dg-client-adapter: no presentation overlay entry for ref '${ref}'`);
    const type = overlay.type;

    const childIdentities = childIdentitiesOf.get(identity) || [];
    const childRefs = childIdentities.map((id) => refByIdentity.get(id));
    children[ref] = childRefs;

    const grade = gradeByIdentity.get(identity);
    const node = {
      id: ref,
      kind: type,
      label: deriveLabel(statement),
      statement,
      declared_grade: c.rec.declared_grade,
      earned_grade: grade ? grade.earned_grade : null,
      status: overlay.status,
      presentation: { type, data: {} },
      // real: every node carries its own decompose children count here regardless of type, since
      // the card's "made of N steps" motion label reads node.children directly (card.js's own
      // renderMotions), not decompose's separate return value; only transformation additionally
      // repeats this as its own REQUIRED_FIELDS 'children' entry below.
      children: childRefs,
    };
    if (overlay.tier) node.tier = overlay.tier;

    if (type === "claim") {
      node.role = "DG kind: " + c.spec.kind; // DEFAULT: DG has no narrative 'role' field
      node.position = "terminal"; // DEFAULT: a claim-mapped node reads as a terminal assertion
      node.terminal_type = "derivation"; // DEFAULT: nearest generic TERMINALS bucket
    } else if (type === "transformation") {
      node.role = "DG kind: " + c.spec.kind; // DEFAULT
      node.takes = childRefs; // real: the supports-graph children
      node.produces = [ref]; // real: the claim's own ref
      node.composition = childRefs.length > 1 ? "conjunction" : "none"; // derived from real structure
      node.function = "derive"; // DEFAULT: DG does not distinguish derive/constrain/cancel
      node.math = statement; // real: the terse plain-string form; DG has no separate math field
      node.formal_status = "nl"; // DEFAULT: not Lean-formalized
      node.load_bearing = true; // DEFAULT: an entered claim is load-bearing by construction
    } else if (type === "primitive") {
      node.role = "DG kind: " + c.spec.kind; // DEFAULT
      const locator = c.spec.extensions && c.spec.extensions.locator;
      node.citation = { source: locator || c.rec.source_id }; // real: locator if present, else source_id
    } else if (type === "assumption") {
      node.position = "hypothesis"; // DEFAULT: a working, perturbable premise
    } else if (type === "observation") {
      node.world_value = statement; // real
    } else if (type === "prediction") {
      node.value = statement; // real
      node.produced_by = childRefs.length ? childRefs.join(", ") : "the framework's own derivation chain"; // DEFAULT if childless
    } else if (type === "comparison") {
      node.test = statement; // real
      node.state = "consistent"; // DEFAULT: no per-claim contradiction signal for this kind
    } else if (type === "question") {
      node.explain = {
        hook: statement.length > 100 ? statement.slice(0, 100) + "..." : statement, // real, truncated
      };
      const gap = gapByIdentity.get(identity);
      if (gap && gap.closing_condition) {
        node.explain.intuition = gap.closing_condition.system || ""; // real
        node.explain.in_words = gap.closing_condition.target || ""; // real
        node.closing_condition = gap.closing_condition; // full object, complete path, never stripped
      }
      // symbols, scenario, stakes intentionally omitted: no real DG source for them, and
      // fabricating narrative teaching content for a sorry is out of scope; see the build report.
    }
    nodes[ref] = node;
  }

  return { kinds: PRESENTATION_TYPES.slice(), entry: ENTRY_REF, nodes, children };
}

// createDgClientAdapter: the same contract as a set of functions, for Node-side use (tests, the
// bundler). The browser artifact instead inlines buildDgSnapshot()'s own output and wraps it with
// the small shim in periphery/dg-navigate/host.js, since an ESM kernel import cannot run from a
// file:// script tag.
export function createDgClientAdapter(built, presentation) {
  const snapshot = buildDgSnapshot(built, presentation);
  return {
    kinds: () => snapshot.kinds.slice(),
    has: (id) => !!snapshot.nodes[id],
    resolve: (id) => snapshot.nodes[id],
    decompose: (id) => {
      const node = snapshot.nodes[id];
      if (!node) return { node: undefined, children: [] };
      const childRefs = snapshot.children[id] || [];
      return {
        node,
        children: childRefs.map((cref) => {
          const cnode = snapshot.nodes[cref];
          return { node: cnode, kind: cnode.presentation.type, expandable: (snapshot.children[cref] || []).length > 0 };
        }),
      };
    },
    entry: () => snapshot.entry,
  };
}
