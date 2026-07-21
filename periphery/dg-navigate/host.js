// Role: the DG artifact's host. Wraps the precomputed snapshot (window.DG_SNAPSHOT, inlined by
//   build/bundle-dg-navigate.mjs from api/dg-client-adapter.mjs's buildDgSnapshot()) into the
//   same resolve/has/decompose/kinds/entry functional shape createDgClientAdapter() exposes in
//   Node, then mounts the single registered client. A simplified fork of the wiring role
//   upstream/epistack/periphery/navigate/render/host.js plays (pin b778f35): that file also
//   builds a multi-client gallery with hash routing and manifest validation, none of which this
//   single fixed DG client needs.
// Contract: boots on DOMContentLoaded. Reads window.DG_SNAPSHOT and DG_CLIENT (both inlined by
//   the bundler), mounts into #app.
// Invariant: no live kernel import runs in the browser; the snapshot was computed once in Node
//   at build time by the complete path (buildKernel, characterizedGaps), never re-derived here.
"use strict";

(function () {
  function makeDgApi(snapshot) {
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

  function applyTokens(tokens) {
    const r = document.documentElement;
    if (tokens) for (const k of Object.keys(tokens)) r.style.setProperty(k, tokens[k]);
  }

  function boot() {
    const mount = document.getElementById("app");
    if (!mount) return;
    const snapshot = typeof DG_SNAPSHOT !== "undefined" ? DG_SNAPSHOT : null;
    if (!snapshot) { mount.textContent = "DG snapshot missing."; return; }
    const api = makeDgApi(snapshot);
    const client = typeof DG_CLIENT !== "undefined" ? DG_CLIENT : { mapping: {}, title: "DG reader" };
    applyTokens(client.tokens);
    renderThin(api, mount, client, {});
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
