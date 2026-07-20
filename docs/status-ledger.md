# Status ledger

The single source of build truth from this commit forward. A stage is done when its ledger line moves, not before. Graded honestly: `built and verified` (with the check that verified it named), or `specified, not built` (named, never implied done).

Stages 0 through 2. Stages 3 through 6 are specified in `docs/physics-kernel-recon-report.md` Section 6 and are not yet begun.

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

## Stage 2: DG bare

The DG region entered structurally, bare: faithful statements, structural links only (`depends-on`, `contradicts`), no supports, no checking records. LLM-assisted manual entry under generate-and-verify, no translator built (per the Stage 2 prompt's own pre-made decision).

| Item | Status | Verified by |
|---|---|---|
| CC-1 v4.14 form, v4.16 cumulant-form restatement, and the supersession record between them | built and verified | `node build/check-dg.mjs`; the supersession's live effect was exercised (below) |
| `WF-SUPERSEDED` exercised | built and verified | a draft claim with a `depends-on` link citing the superseded v4.14 identity was planted against the real built state and `decide()` confirmed to return `declined` with `["WF-SUPERSEDED", "WF-DEPENDS"]`, then discarded |
| K1 through K17 (20 derivation claims: 17 constraints plus P3, P8, P11, the only structural proofs that actually carry a P-number in the trellis) | built and verified | `node build/check-dg-coverage.mjs`; every provenance bracket resolvable to an already-entered claim is a real `depends-on` link (24 links) |
| 19 live function claims, 30 surviving mechanism claims (contracts), 3 prediction claims with falsification conditions | built and verified | `node build/check-dg-coverage.mjs`; 91 `depends-on` links wire function to constraint, mechanism to parent function, prediction to parent |
| The branch fork: Path A, Path B, their `contradicts` link, DESI Y5 / Euclid selection criteria as `closing_condition` on each; `B-NU-1` entered depending on Path A | built and verified | `node build/check-dg-coverage.mjs`; the `contradicts` link moves the gate's decision to `accepted-with-disagreement`, verified as the honest non-decline reading, not a failure |
| Branch-commitment ceiling cap exercised | built and verified | a bare `branch-commitment` claim declared at its ceiling (`corroborated`) with no support was planted and confirmed `declined` with `GM-ABOVE`; both real branch commitments declare `asserted` instead, the grade the gate actually computes, not the ceiling the Stage 2 prompt anticipated (see the divergence note below) |
| 28 live sorries as `derivation` claims with `closing_condition` and status/priority/gating in `extensions`; 5 speculation-tier entries as `comment` claims | built and verified | `node build/check-dg-coverage.mjs` |
| Comment non-citability exercised | built and verified | a `supports` link from a comment claim was planted and `rejectCommentSupport()` confirmed to throw `comment-support-barred` naming both identities, then discarded |
| `build/check-dg-coverage.mjs` and its manifest (110 entries: every K, P, F, live mechanism, prediction, branch, `B-NU-1`, live sorry, and speculation comment Stage 2 claims to have entered) | built and verified | verified non-vacuous: one manifest entry was deleted, the check confirmed to fail and name it, restored, re-confirmed green; joined to CI |
| `docs/status-ledger.md`, this section, and the grade-distribution table below | built and verified | this file |

### Earned-grade distribution, whole corpus, Stage 2 close

Recomputed live from `kernel/grounding/earned-grade.mjs` via each claim's real `earnedGrade()` call, not asserted by hand. 155 claims total; every `declared_grade` equals its earned grade (0 mismatches). The gate's decision over the whole corpus is `accepted-with-disagreement`, basis `SEC-6-contradiction` (the Path A / Path B `contradicts` link), never a decline.

| Kind | Earned grade | Count |
|---|---|---|
| axiom | constitutive | 4 |
| standard-result | asserted | 15 |
| observation | asserted | 20 |
| conjecture-adopted | asserted | 7 |
| derivation | asserted | 50 |
| function | asserted | 19 |
| mechanism | asserted | 30 |
| prediction | asserted | 3 |
| branch-commitment | asserted | 2 |
| comment | ungraded | 5 |
| **Total** | | **155** |

`derivation` (50) is CC-1 (2 claims) + K1-K17 (17) + P3/P8/P11 (3) + the 28 live sorries. Every non-axiom, non-comment claim in the corpus sits at `asserted`, the honest bare floor: nothing but a constitutive-mode kind can earn above it without a support link or a checking record, and this stage adds neither. The single `constitutive` cluster is the 4 Tier 0 axioms, self-grounding by their kind's ceiling since Stage 1. No claim anywhere in the corpus is `checked`, `independently-rechecked`, or `corroborated`: that lift is Stage 3's job.

### Divergences from the Stage 2 prompt, corrected against the trellis or the kernel

- **"P1 through P3" names structural proofs that do not exist under those labels.** The trellis's own "Structural Proofs" table carries exactly three P-numbered rows: P3 (DOF count), P8 (KSS bound), P11 (diffeomorphism invariance). There is no P1 or P2. Entered the three real labels; the count (three) matches what the prompt asked for even though the labels do not.
- **The branch commitments do not earn above `asserted` under Stage 2's own constraints.** The prompt names them a structural exception, self-grounding through their entry act. Under the real gate, a `branch-commitment` claim's kind ceiling is `corroborated`, not `constitutive`; without a `constitutive`-mode kind, a support link, or a checking record (all excluded by Stage 2's own "structure, bare" rule), nothing lifts a claim above `asserted`. Verified by planting a bare claim declared at `corroborated` and watching the real gate decline it with `GM-ABOVE`. Declared both branch commitments `asserted`, trusting the decline over the prompt's expectation, the same discipline Stage 1 already established.

## Not built at Stage 1 (named, not implied done)

- No `api/` (our own membrane) or `periphery/` client code. Stage 5.
- No transformation entries registered in the `computation` pack against real physics data (the pole-condition arithmetic, the exhaust race, the OoM-deficit calculator); `check-compute-invariants.mjs` exercises the register's rules with synthetic fixtures, not a real transform. Stage 4.
- The source table's `rests_on` chains are populated only for the small set of corpus-index entries whose lineage is explicit in the Appendix E text itself (13 links); full footprint-closure lineage across all 195 corpus-index rows is unbuilt. Stage 3's derivation-audit checking records will need it for the DG region's `independently-rechecked` lifts, and it should be finished before those are attached.
- Roughly a third of the 195 Appendix-E-derived source rows (49 of 195) default to `source_class: "testimony"` because the corpus-index text does not explicitly name an AI system, a journal, or an arXiv id for them; a manual pass against the underlying documents would likely reclassify some to `ai-audit` or `peer-reviewed`. Worth doing before Stage 3 leans on these for independence lifts.

## Not built at Stage 2 (named, not implied done)

- **K18** is in the trellis (v4.8, trans-Planckian VEV suppresses aperiodic tilts) but out of scope: the Stage 2 prompt bounds entry to K1 through K17. A handful of already-entered claims (F20, F-CC, S-NS-018) name K18 in their trellis provenance text without a live `depends-on` link, since there is no K18 claim yet to link to.
- **The GUT Box occupant model** (the F-theory Dark Dimension Pati-Salam specification table, the three structural findings SF-G1/G2/G3, the base-landscape and toric-fiber-exclusion tables) and **the compute-layer structural findings** (SF-D0, SF-D1, SF-D2, SF-MIX-001/002/003, SF-MM-002/003) are real trellis content supporting K10 through K12's occupant instantiation, but are not among K1-K17, P1-P3, functions, contracts, the branch fork, or the sorry ledger as Stage 2's seven build items enumerate them. Not entered. A future stage should decide whether these enter as further `derivation` claims, a new local kind, or stay as prose the K-constraint claims merely cite.
- **Ten thin one-line stub rows** in the trellis's Suggestive and Plausible contract tables (hemispheric power asymmetry, cusp-core resolution, tear/puncture afterglow decay indices, the GRB energy chain restatement, universality of `E_snap`, pycnonuclear fusion rate underestimate, KK graviton relic density, the stale cosmological-coincidence cross-reference to retracted F12, MOND `a_0` leakage, and the speculative torsional-hair note) are not entered as separate `mechanism` claims: each is a placeholder with no fuller statement anywhere in the trellis, and their content, where not already covered by an entered function or mechanism, is a backlog item, not a defensible atomization.
- **The exclusion reservoir**: no kills, withdrawal records, or reinstatement conditions. Every dead function (F05, F12, F13, F13.2, F19, F21) and every struck contract that depended on them is named as excluded in the relevant commit, never entered as a claim. Stage 3.
- **No `supports` links or checking records anywhere in the corpus.** Every Stage 2 claim sits at its bare floor exactly as Stage 1's did; `check-dg-tier1.mjs` section 5 asserts this holds across the whole corpus, not just the Stage 1 claims. Stage 3 attaches the dependency structure (per the trellis provenance brackets already preserved in statement text and `depends-on` links) and the derivation-audit checking records, per the checker-identity policy in `docs/governing-conventions.md`.
- **The `rests_on` lineage session** the Stage 1 ledger already flagged (full footprint-closure lineage across the 195-row Appendix E corpus index, and the testimony-default reclassification pass) remains unbuilt and is now more clearly a prerequisite: Stage 3's `independently-rechecked` lifts on the DG region's derivations will read the footprint closure directly, so unresolved lineage there will under-count independence rather than merely being an approximation.
