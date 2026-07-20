# Status ledger

The single source of build truth from this commit forward. A stage is done when its ledger line moves, not before. Graded honestly: `built and verified` (with the check that verified it named), or `specified, not built` (named, never implied done).

Stage 0 only. Stages 1 through 6 are specified in `docs/physics-kernel-recon-report.md` Section 6 and are not yet begun.

## Stage 0: the seat

| Item | Status | Verified by |
|---|---|---|
| Recon report landed byte-identical at `docs/physics-kernel-recon-report.md` | built and verified | `md5sum` against the source upload, matched |
| Trellis pair landed byte-identical at `trellis/4_16_main.md`, `trellis/4_16_appendices.md` | built and verified | `md5sum` against the source upload, matched |
| `trellis/README.md`, stating the trellis is read-only authoring source | built and verified | manual read |
| Epistack substrate vendored: `upstream/epistack` pinned submodule, `vendor/` extraction, `upstream/lock.json` | built and verified | `node build/check-substrate.mjs` |
| Two deliberate divergences applied and recorded (`ai-audit` source class, `computation` pack) | built and verified | `node build/check-substrate.mjs` section 5 (divergence is named, motivated, and marked in the vendored file); each divergent code path was also exercised directly against the vendored ESM modules at build time: `makeSourceTable` accepts `source_class: "ai-audit"`, and `validateTransform`/`makeRegister` refuse a `computation` entry that emits `"kernel"` or carries a grade field on output, identically to a `statistics` entry |
| `docs/governing-conventions.md` (checker-identity, Lean, verdict-ladder policy) | built and verified | manual read against recon report Sections 1, 2, 4 |
| Trust-boundary check wired into CI | built and verified | `node build/check-imports.mjs` passes; a synthetic `periphery/` file importing `vendor/kernel/` directly was constructed at build time, confirmed to fail the check (exit 1, edge named), then discarded before commit |
| CI workflow (`check-substrate`, `check-imports` on every push) | built and verified | green run on this repository's Actions tab at the `stage-0` tag |
| `README.md` | unchanged | Stage 0 did not force a change; it already described the vendored-substrate architecture accurately at seating |
| `docs/status-ledger.md` | built and verified | this file |

## Not built at Stage 0 (named, not implied done)

- The kernel root: no scaffolder config, no kind table, no source table, no axioms. Stage 1.
- No `corpora/` tree, no `api/` (our own membrane), no `periphery/` client code. Stage 1 onward.
- No DG claims of any kind entered (no Tier 0 axioms, no standard results, no conjectures). Stage 1-2.
- No transformation entries registered in the `computation` or `statistics` packs; the divergence's runtime behavior is verified by direct exercise against the vendored module, not by a registered corpus transform, because there is no corpus yet.
- `build/check-imports.mjs` currently runs over an import graph with no `periphery/`, `corpora/`, or `api/` (ours) files to violate the boundary; it is wired and tested against a synthetic violation, but has not yet been exercised against real Stage 1+ code.
- The vendored check suite epistack ships in its own `build/` (`check-gate.mjs`, `check-translate.mjs`, `check-compute.mjs`, and the rest) is not run in this repository's CI. Those checks are epistack's own, exercised against epistack's own corpora (covid, math, lhc, eggs); they are not portable to an empty seat with no corpus. This repository's own checks (`check-substrate.mjs`, `check-imports.mjs`) are what verify the vendored tree and the boundary here. Open question for Stage 1: whether any of epistack's own oracles should be re-run against the physics corpus once one exists, or whether this repo's own growing check suite supersedes them.
