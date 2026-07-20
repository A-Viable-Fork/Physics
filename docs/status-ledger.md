# Status ledger

The single source of build truth from this commit forward. A stage is done when its ledger line moves, not before. Graded honestly: `built and verified` (with the check that verified it named), or `specified, not built` (named, never implied done).

Stages 0 and 1. Stages 2 through 6 are specified in `docs/physics-kernel-recon-report.md` Section 6 and are not yet begun.

## Stage 0: the seat

| Item | Status | Verified by |
|---|---|---|
| Recon report landed byte-identical at `docs/physics-kernel-recon-report.md` | built and verified | `md5sum` against the source upload, matched |
| Trellis pair landed byte-identical at `trellis/4_16_main.md`, `trellis/4_16_appendices.md` | built and verified | `md5sum` against the source upload, matched |
| `trellis/README.md`, stating the trellis is read-only authoring source | built and verified | manual read |
| Epistack substrate vendored: `upstream/epistack` pinned submodule, `vendor/` extraction, `upstream/lock.json` | built and verified | `node build/check-substrate.mjs` |
| Two deliberate divergences applied and recorded (`ai-audit` source class, `computation` pack) | built and verified | `node build/check-substrate.mjs` section 5; `node build/check-compute-invariants.mjs` (Stage 1) exercises the computation-pack divergence's runtime behavior directly |
| `docs/governing-conventions.md` (checker-identity, Lean, verdict-ladder policy) | built and verified | manual read against recon report Sections 1, 2, 4 |
| Trust-boundary check wired into CI | built and verified | `node build/check-imports.mjs`; a synthetic violation was planted and confirmed to fail the check before being discarded |
| CI workflow (`check-substrate`, `check-imports` on every push) | built and verified | green run on this repository's Actions tab at the `stage-0` tag |
| `README.md` | unchanged | Stage 0 did not force a change |
| `docs/status-ledger.md` | built and verified | this file |

## Stage 1: the kernel root

| Item | Status | Verified by |
|---|---|---|
| Scaffolder config `corpora/dg-config.json`: kernel id `dg`, 4 adopted shared kinds, 12 local kinds with ceilings | built and verified | `node build/check-dg.mjs` section 1 (every adopted hash matches the vendored shared subtree; every local kind's ceiling is a valid confidence-order position) |
| Source table: 225 rows, seeded from the trellis Appendix E corpus index (195 rows, mechanically extracted) plus the external literature Tier 0-3 cites (27 rows, hand-curated) plus 3 bundled/self-grounding rows the corpus index and tier text left open | built and verified | `node build/check-dg.mjs` section 2 (the source table builds; `makeSourceTable` throws on a bad `source_class`, and it did not) |
| `build/new-kernel.mjs`, adapted from `vendor/scaffolder/new-kernel.mjs` for the vendored layout | built and verified | ran it against the config; it emitted `corpora/dg/tables.js`, `corpora/dg/dg-data.js`, `build/dg-build.mjs`, `build/check-dg.mjs` and reported the generated check green |
| The empty `dg` kernel, generated and gate-verified | built and verified | `node build/check-dg.mjs` (committed on its own before any claim was entered, per the Stage 1 milestone discipline) |
| 45 Tier 0-3 claims entered (4 axiom, 15 standard-result, 19 observation, 7 conjecture-adopted) | built and verified | `node build/check-dg-tier1.mjs`: exact per-kind counts, the whole contribution accepted by the real gate, and every claim's `declared_grade` recomputed against `kernel/grounding/earned-grade.mjs` and confirmed equal, not merely `<=` |
| Grading discipline: axioms self-ground to `constitutive` by their kind's ceiling; every other Stage 1 claim declares `asserted`, the honest floor with no support links or checking records yet | built and verified | `node build/check-dg-tier1.mjs` section 4; a synthetic claim declared above its earned grade (`standard-result` at `checked` with no support) was planted at build time and confirmed to be declined by the real gate with `GM-ABOVE`, then discarded |
| `check-imports.mjs` exercised against real Stage 1 code (`corpora/dg/`, `build/dg-build.mjs`, `build/new-kernel.mjs`) | built and verified | `node build/check-imports.mjs`; a synthetic `periphery/` file importing `vendor/kernel/` directly was planted and confirmed to fail before being discarded (this is a second, independent plant from the Stage 0 one, run against the now-real corpus tree) |
| The oracle policy (below), naming which vendored oracles run in CI and why | built and verified | this section |
| `build/check-gate.mjs`, `build/check-type-hash.mjs`, `build/check-compute-invariants.mjs`: the three substrate-behavior oracles the policy names | built and verified | each runs green; `check-gate.mjs` and `check-type-hash.mjs` are adapted, path-only, from the vendored originals (diffable against `upstream/epistack/build/` at the pinned commit to confirm no assertion changed); `check-compute-invariants.mjs` is hand-written locally since the vendored `check-compute.mjs` is corpus-bound (see the oracle policy) |
| CI workflow extended to run all Stage 1 checks on every push | built and verified | green run on this repository's Actions tab at the `stage-1` tag |
| `docs/status-ledger.md` | built and verified | this file |

### A bug the Stage 1 build caught in Stage 0's own work

`build/check-gate.mjs` (added this stage) failed once before it passed: its D.4 assertion scans each vendored v3 kernel file's source text for anything that looks like a non-relative, non-`node:` import (`from "..."`). The Stage 0 divergence comment in `vendor/kernel/schema/tables.mjs` read "...a grounding source distinct from "testimony", per..." which contains the literal substring `from "testimony"` and false-positived the scanner. The comment was reworded (`distinct in kind from the "testimony" class`) to remove the accidental match; `upstream/lock.json`'s hash for that file was recomputed and updated; `check-substrate.mjs` and `check-gate.mjs` both re-verified green. Named here because it is exactly the kind of interaction a later oracle can catch in an earlier stage's prose, and pretending Stage 0 was untouched by Stage 1 would misstate the history.

## Oracle policy

Standing policy on which of the vendored substrate's own oracles run in this repository's CI, and why:

- **Substrate-behavior oracles run in CI permanently.** `build/check-gate.mjs` (canonical form, records, the confidence order, the earned-grade rule, the gate's accept/decline computation, apply/chain/supersession/decay, the verifier), `build/check-type-hash.mjs` (canonical-form content-addressing of a shared type bundle), and `build/check-compute-invariants.mjs` (the compute register's no-standing rule and mandatory assumptions manifest, including the `computation` pack divergence) are what substrate non-drift means beyond hash matching: `check-substrate.mjs` proves the vendored bytes match the lock, these three prove the vendored *behavior* still holds. The first two are adapted, path-only, from `upstream/epistack/build/`; the third is written locally because `check-compute.mjs` is corpus-bound (it imports `corpora/compute/stats-pack.js` and `build/covid-build.mjs`, neither vendored here) and so is not portable to a seat with no corpus yet.
- **`check-translate.mjs` is not adopted.** It tests the case-graph dialect the vendored `build/translate-trellis.mjs` consumes, not the DG trellis dialect this repository authors from. A DG-dialect translator, if Stage 2 builds one, carries its own acceptance oracle; running the vendored translator's oracle here would verify a pipeline this repository does not use.
- **Corpus-level checks over the DG graph are this repository's own and arrive with the corpus.** `build/check-dg.mjs` (substrate coherence over whatever `corpora/dg/dg-data.js` currently holds) and `build/check-dg-tier1.mjs` (the Stage 1 tier-commitment content, exactly specified) are the first of these; Stage 2 onward will add more as CC-1, the K-constraints, the functions and contracts, the sorry ledger, and the exclusion reservoir enter the graph.

## Not built at Stage 1 (named, not implied done)

- The DG region proper: CC-1, K1-K17, the structural proofs, the live functions, the surviving contracts, both cosmology branch commitments (Path A / Path B) with their `contradicts` link, every live sorry as a claim with its `closing_condition`. Stage 2.
- `B-NU-1` (the neutrino mass sector friction breakdown named "new, v4.13"), deliberately not entered at Stage 1: it is entangled with the DESI reclassification narrative and the Path A/B branch-commitment structure, both Stage 2 scope. Named here so its absence is not mistaken for an oversight.
- No `supports`, `depends-on`, `contradicts`, or other links of any kind; zero checking records. Every Stage 1 claim sits at its bare floor. Stage 3 attaches the dependency structure and the derivation-audit checking records per the checker-identity policy.
- No `api/` (our own membrane) or `periphery/` client code. Stage 5.
- No transformation entries registered in the `computation` pack against real physics data (the pole-condition arithmetic, the exhaust race, the OoM-deficit calculator); `check-compute-invariants.mjs` exercises the register's rules with synthetic fixtures, not a real transform. Stage 4.
- The source table's `rests_on` chains are populated only for the small set of corpus-index entries whose lineage is explicit in the Appendix E text itself (13 links); full footprint-closure lineage across all 195 corpus-index rows is unbuilt. This does not affect Stage 1's own claims (none of them cite a corpus-index row whose independence depends on the closure), but Stage 3's derivation-audit checking records will need it for the DG region's `independently-rechecked` lifts, and it should be finished before those are attached.
- Roughly a third of the 195 Appendix-E-derived source rows (49 of 195) default to `source_class: "testimony"` because the corpus-index text does not explicitly name an AI system, a journal, or an arXiv id for them; a manual pass against the underlying documents (not just the trellis's index-table description of them) would likely reclassify some of these to `ai-audit` or `peer-reviewed`. Not blocking for Stage 1; worth doing before Stage 3 leans on these for independence lifts.
