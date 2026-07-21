#!/usr/bin/env node
// Role: the DG read-surface build. Inlines the precomputed DG snapshot plus the forked thin-
//   client modules into one standalone dg-navigate.html that opens from file://, mirroring
//   upstream/epistack/build/bundle.js's own inline-and-never-rewrite pattern, reading only
//   parent-repo files.
// Contract: `node build/bundle-dg-navigate.mjs` writes dg-navigate.html at the repo root and
//   exits 0. Reads periphery/dg-navigate/index.template.html and the files its @@INCLUDE@@
//   tokens name, plus api/dg-client-adapter.mjs's buildDgSnapshot() for @@DG_SNAPSHOT@@.
// Invariant: no file under upstream/epistack is read for inlining; the snapshot is computed
//   once in Node (buildKernel, characterizedGaps, the complete path) and frozen into the
//   artifact as static data, since an ESM kernel import cannot run from a file:// script tag.
"use strict";
import { createRequire } from "node:module";
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { buildKernel } from "./dg-build.mjs";
import { buildDgSnapshot } from "../api/dg-client-adapter.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const TEMPLATE = join(ROOT, "periphery/dg-navigate/index.template.html");
const OUT = join(ROOT, "dg-navigate.html");

// build/ may reach any layer (build/check-imports.mjs); it is the caller that assembles built
// and the presentation overlay, the same pattern every buildKernel()-consuming build script uses,
// and passes both into the api-layer adapter, which may import neither corpora nor build itself.
const require = createRequire(import.meta.url);
const { DG_PRESENTATION } = require("../corpora/dg/dg-presentation.js");
const built = buildKernel();

const snapshot = buildDgSnapshot(built, DG_PRESENTATION);
const nodeCount = Object.keys(snapshot.nodes).length;

let tpl = readFileSync(TEMPLATE, "utf8");

tpl = tpl.replace("@@DG_SNAPSHOT@@", `var DG_SNAPSHOT = ${JSON.stringify(snapshot)};`);

const INCLUDE_RE = /@@INCLUDE:([^@]+)@@/g;
const included = [];
tpl = tpl.replace(INCLUDE_RE, (_, rel) => {
  rel = rel.trim();
  const p = join(ROOT, rel);
  included.push(relative(ROOT, p));
  return readFileSync(p, "utf8");
});

writeFileSync(OUT, tpl);
console.log(`wrote ${relative(ROOT, OUT)}: ${nodeCount} DG nodes inlined, ${included.length} module(s) included:`);
for (const f of included) console.log(`  - ${f}`);
