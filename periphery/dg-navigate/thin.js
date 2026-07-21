// Forked from upstream/epistack/periphery/navigate/fat/thin.js (pin b778f35) into the parent
//   repo for the DG read surface, per the fork-out-then-edit pattern. EDITED: the original calls
//   api.motions(focusedId), a fat-only method with no DG analog; this fork instead derives the
//   same shape directly from decompose's own children count, since motions.decompose is the only
//   part renderCard actually reads for a thin client (motions.compare and motions.perturb simply
//   stay absent, which renderCard already handles by falling back to its "given"/"later" states).
// Role: a THIN client. Tokens plus a kind-to-look mapping over the default read path (drill).
//   It restyles the response and nothing more; it covers every node kind, so it renders the
//   whole map.
// Contract: renderThin(api, mount, client, opts) -> void. Uses only api.entry / has / resolve /
//   decompose / kinds; no compare, no dependents, no perturb, no custom composition.
// Invariant: a client of the API, read-only against truth. It carries the render-everything
//   guarantee: its mapping has an entry for every kind in api.kinds().
"use strict";

function renderThin(api, mount, client, opts) {
  opts = opts || {};
  const mapping = client.mapping || {};
  const start = opts.node && api.has(opts.node) ? opts.node : api.entry();
  const state = { path: [start] };

  function focusChild(id) { if (!api.has(id)) return; state.path.push(id); render(); }
  function jumpTo(i) { state.path = state.path.slice(0, i + 1); render(); }
  function layoutFor(node) {
    const m = mapping[node.presentation && node.presentation.type];
    return m && m.layout ? m.layout : node.explain ? "teaching" : "terse";
  }
  // the visual the manifest maps this node's kind to (or none), rendered from presentation.data.
  // DG's own mapping never names a visual (no selection-step/sufficiency-step data exists in
  // this corpus), so this stays inert but is kept for parity with the reference renderer.
  function visualFor(node) {
    const m = mapping[node.presentation && node.presentation.type];
    if (!m || !m.visual || m.visual === "none" || typeof renderVisual !== "function") return null;
    const d = (node.presentation && node.presentation.data) || {};
    return renderVisual(m.visual, d);
  }

  function render() {
    mount.innerHTML = "";
    const pathNodes = state.path.map((id) => api.resolve(id)).filter(Boolean);
    const focusedId = state.path[state.path.length - 1];
    const focused = api.resolve(focusedId);

    const fv = api.decompose(focusedId);
    const motions = { decompose: fv.children.length > 0 };

    mount.appendChild(renderRail(pathNodes, jumpTo, client.title || "DG reader"));
    mount.appendChild(renderCard(focused, { layout: layoutFor(focused), visualEl: visualFor(focused), motions }));

    if (fv.children.length) {
      const wrap = document.createElement("section");
      wrap.className = "children";
      const h = document.createElement("h3"); h.className = "children-head"; h.textContent = "made of";
      wrap.appendChild(h);
      fv.children.forEach((entry) => wrap.appendChild(renderChildCard(entry, focusChild)));
      mount.appendChild(wrap);
    }
    window.scrollTo({ top: 0 });
  }
  render();
}
