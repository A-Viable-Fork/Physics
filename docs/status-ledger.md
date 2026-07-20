# Status ledger

The single source of build truth from this commit forward. A stage is done when its ledger line moves, not before. Graded honestly: `built and verified` (with the check that verified it named), or `specified, not built` (named, never implied done).

Stages 0 through 3c Tracks 0-1. Stage 3 is split into three sessions (3a supports, 3b checking records and independence lifts, 3c the reservoir), each with one cause of grade movement so the distribution reviews stay legible. Stage 3c Tracks 2-4 (class blocks, the methods kills, the No-Go Registry emitter) and Stages 4 through 6 are specified in `docs/physics-kernel-recon-report.md` Section 6 and `docs/synthesis-backlog.md`, not yet begun.

**Documentation landing (between Stage 3a and Stage 3b):** `docs/synthesis-backlog.md` (the operator-approved synthesis of six deep-research reports) and the six PK-DR report PDFs under `docs/research/` landed byte-identical, hash-verified against the operator's uploads (`docs/research/MANIFEST.md`). No kernel act: no claims, no source-table rows, no new checks. The reports enter the source table only when a later stage first cites them, expected at Stage 3c.

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

## Stage 2.5: patch and lineage

An interstitial session, four tracks, no grounding work (no supports, no checking records, no withdrawal records, no reservoir entries; those stay Stage 3). Same bare discipline as Stage 2 throughout.

| Item | Status | Verified by |
|---|---|---|
| Track 1: 16 dispositioned stub rows entered (8 default-shaped `mechanism` claims, torsional hair as `comment`, pycnonuclear fusion rates as a parentless `mechanism`, the muonic atom test as `prediction`, 6 Bekenstein-Hawking (4.2) sub-result `mechanism` claims) | built and verified | `node build/check-dg-tier1.mjs` (each earns exactly its declared `asserted`, or `ungraded` for the comment); a `supports` link from the torsional-hair comment was planted and `rejectCommentSupport()` confirmed to throw `comment-support-barred`, then discarded |
| Track 2: K18 and 12 GUT Box occupant/structural-finding `derivation` claims (`gut-box-occupant`, SF-G1/G2/G3, SF-D0/D1/D2, SF-MIX-001/002/003, SF-MM-002/003); base-landscape and toric-fiber-exclusion tables folded into `gut-box-occupant`'s `extensions.trellis_context`; the 7 indeterminate toric fibers carried as an explicit `closing_condition` | built and verified | `node build/check-dg.mjs`, `node build/check-dg-tier1.mjs` |
| Coverage manifest extended to 139 entries (110 at Stage 2 close, plus the 16 Track 1 and 13 Track 2 refs) | built and verified | `node build/check-dg-coverage.mjs`; a manifest entry (`sf-mm-003`) was deleted, the check confirmed to fail and name exactly that ref, restored, re-confirmed green |
| Track 3: `rests_on` populated for 37 of the 182 previously-unlinked Appendix E source rows (50 of 195 total, up from 13) | built and verified | `node build/check-dg.mjs` (source table still builds); `footprintClosure()` computed over two now-linked documents (`cy4-euler-and-flux`, `yukawa-rank-analysis`) that both trace to the same Torus Permutation Check / F-Theory Base Adaptation ancestry, confirmed to share a non-disjoint footprint (3 common ancestors) where each was previously a disjoint singleton |
| Track 4: 29 of the 49 testimony-default source rows reclassified (18 to `ai-audit`, 10 to `preprint`, 1 to `peer-reviewed`); 8 confirmed as genuinely `testimony`; 12 left undetermined, retained `testimony` | built and verified | `node build/check-dg.mjs` (source table still builds under the revised classes); evidence per row in the Track 4 commit message |
| `docs/status-ledger.md`, this section, the grade-distribution table below, the lineage gap list, and the reclassification summary | built and verified | this file |

### Earned-grade distribution, whole corpus, Stage 2.5 close

Recomputed live from `kernel/grounding/earned-grade.mjs` via each claim's real `earnedGrade()` call. 184 claims total (155 at Stage 2 close, plus 16 Track 1 and 13 Track 2); every `declared_grade` equals its earned grade (0 mismatches). The gate's decision over the whole corpus is still `accepted-with-disagreement`, same basis as Stage 2 (the Path A / Path B `contradicts` link); nothing in Stage 2.5 changed the gate's basis for that reading.

| Kind | Earned grade | Count | Change from Stage 2 |
|---|---|---|---|
| axiom | constitutive | 4 | unchanged |
| standard-result | asserted | 15 | unchanged |
| observation | asserted | 20 | unchanged |
| conjecture-adopted | asserted | 7 | unchanged |
| derivation | asserted | 63 | +13 (Track 2: K18 + 12 structural findings) |
| function | asserted | 19 | unchanged |
| mechanism | asserted | 44 | +14 (Track 1: 8 stub rows + 6 Bekenstein-Hawking sub-results) |
| prediction | asserted | 4 | +1 (Track 1: muonic atom discrimination test) |
| branch-commitment | asserted | 2 | unchanged |
| comment | ungraded | 6 | +1 (Track 1: torsional hair) |
| **Total** | | **184** | +29 |

Matches the stop condition's expectation exactly: new entries land at `asserted`, one new `comment` (`ungraded`), nothing else moves. No claim anywhere in the corpus is `checked`, `independently-rechecked`, or `corroborated`: still Stage 3's job.

### Track 3: the lineage gap list

145 of the 195 Appendix E source rows have no determinable `rests_on` lineage from the corpus index text or the main trellis body. Listed here, not defaulted, per the hard constraint that a visible gap beats a guessed link. Grouped by why the gap exists:

**Root documents** (no earlier corpus document to rest on; the start of an investigation chain): `corpus.paper-0`, `corpus.paper-1`, `corpus.torsion-steps-1-5`, `corpus.stellar-death-paper`, `corpus.trellising`, `corpus.dirac-constraint-report`, `corpus.p11-p8-report`, `corpus.qfi-scaling-derivation`, `corpus.torus-permutation-check`, `corpus.chat-dirac-rescue-pdf-april-2026`, `corpus.chatgpt-s-mm-002-preliminary-report-april-2026`, `corpus.gemini-cc-run-1-april-2026`, `corpus.dg-cft-055`, `corpus.dg-cft-056`, `corpus.dg-cft-057`, `corpus.bedroya-obied-vafa-wu-2025-arxiv-2507-03090`, `corpus.paper-0-extraction-march-2026`, `corpus.dg-cft-050`, `corpus.dg-cft-058`, `corpus.gemini-coupling-uniqueness-audit-april-2026`, and the standalone external literature rows (`corpus.elvang-et-al-2026-arxiv-2601-11705`, `corpus.montero-et-al-2026-arxiv-2512-09052`, `corpus.soker-2026-arxiv-2601-05774`, `corpus.romani-et-al-2026-arxiv-2512-05099`, `corpus.vip-collaboration-2026-arxiv-2601-00651`, `corpus.beasor-et-al-2026-arxiv-2601-05317`, `corpus.sakamura-2025-arxiv-2510-26367`, `corpus.antonini-et-al-2026-arxiv-2602-02670`, `corpus.meluccio-2025`).

**Parallel/independent investigations, not sequential** (same topic, different pathway, no citation of each other): the five LUNA mechanism-test reports (`corpus.luna-geometric-dimple`, `corpus.luna-torsion-screening`, `corpus.luna-debye-coherence`, `corpus.luna-laser-stimulation`, `corpus.luna-nonlinear-electron`) and their two synthesis reports (`corpus.luna-screening-v1`, `corpus.luna-screening-v2`); the GUT Box survey family (`corpus.gut-architectures-survey`, `corpus.gut-structural-audit`, `corpus.ps-red-team`, `corpus.gut-bottleneck-investigation`); the three Framework Scout evolving-DE kills (`corpus.dg-cft-055`, `corpus.dg-cft-056`, `corpus.dg-cft-057`); `corpus.fiber-exclusion-sweep` relative to `corpus.del-pezzo-exclusion-sweep` (companion analyses in the same survey, not one built on the other's output).

**Broad syntheses touching most of the corpus** (linking to a single predecessor would be an arbitrary selection among dozens): `corpus.research-roadmap-synthesis`, `corpus.literature-reconnaissance-march-2026`, `corpus.empirical-anomaly-survey-march-2026`, `corpus.qg-funnel-analysis`, `corpus.gauge-sector-derivation-report`.

**No named predecessor in the available text** (the remaining rows; content reads as new investigation or independent analysis with no explicit citation of another cataloged document): the full remaining list is reproducible by running `node -e "const cfg=require('./corpora/dg-config.json'); cfg.sources.forEach((s,i)=>{if(i<195 && !(s.rests_on||[]).length) console.log(s.source_id)})"` against this commit; 145 rows total across all three categories above plus this one. Stage 3 should not assume any of these are independent for footprint-closure purposes; it should treat the absence of a link as "unknown," not "zero."

### Track 4: undetermined source classes

12 rows read closely but left `testimony` because no evidence either way was found in the available text (the corpus index; no fuller underlying document is accessible from this repository): `corpus.qfi-scaling-derivation`, `corpus.objective-collapse-report`, `corpus.peer-review` (explicitly considered for `peer-reviewed`; no journal or venue named anywhere in the text, so not reclassified rather than risk mistaking a simulated or internal review for an actual submission), `corpus.sn-2024afav-chirp-audit`, `corpus.sn-2024afav-empirical-falsification`, `corpus.stellar-cooling-audit`, `corpus.axion-hypothesis-review`, `corpus.lean-4-formalization`, `corpus.lean-4-dirac-bergmann-feasibility`, `corpus.lean-4-phase-space-architecture`, `corpus.lean-4-ns-interface`, `corpus.lean-4-qfi-trellis-modules`. The five Lean rows share one recurring problem: formal-verification code artifacts do not clean-match any of the four positive classes (`ai-audit`, `preprint`, `peer-reviewed`, `dataset`) and have no explicitly-tagged twin elsewhere in the corpus to reason from by analogy. Worth a dedicated look if Stage 3 needs their independence status.

### Divergences from the Stage 2.5 prompt

None. Track 1 through Track 4 were executed as specified; the only judgment calls (the reclassification evidence per row, the lineage-link evidence per row, the exact statement text for the GUT Box occupant and structural findings) are documented inline in the Track 2, 3, and 4 commit messages rather than as divergences from the prompt's own instructions.

## Stage 3a: supports

The first of three Stage 3 sessions. Wires the dependency structure the trellis already encodes as `supports` links: K-constraints and structural proofs from tier commitments and each other, mechanisms from the derivations/observations/tier claims their Evidence columns cite, functions from the mechanisms that satisfy them, predictions from the mechanisms that produce them. No checking records, no independence lifts, no withdrawal records: those are Stage 3b and 3c.

| Item | Status | Verified by |
|---|---|---|
| Track 0: third substrate divergence (`formal-artifact` source class), the 5 Lean rows and `corpus.peer-review` reclassified, `corpus.white-et-al-2026-phys-rev-research-8-013264` audited and confirmed external literature, `docs/governing-conventions.md` Sections 4 (peer-reviewed is external literature only) and 5 (the independence-lift lineage-group policy) | built and verified | `node build/check-substrate.mjs` |
| Track 1a: 28 supports links across K1-K18, P3, P8, P11, topologically ordered | built and verified | `node build/check-dg-tier1.mjs` section 3 (declared equals earned via the real gate `grade_table`, 0 mismatches) |
| Track 1b: 12 supports links across 7 mechanisms | built and verified | same |
| Track 1c: 37 supports links across 16 functions and 2 predictions | built and verified | same |
| `build/dg-build.mjs` extended to return `links` and `supersessions` (previously computed but not exposed) | built and verified | `node build/check-dg-tier1.mjs` section 5 (supports-link count read from the real build) |
| `build/check-dg-tier1.mjs` updated: section 3 reads the real gate `grade_table` instead of reimplementing `earnedGrade()` with supports forced to `[]`; section 5 drops the "no supports anywhere" assertion (retired by this stage) and keeps "no checking record anywhere" | built and verified | this file, run green |
| `docs/status-ledger.md`, this section, the attributed distribution table, the unwireable-provenance gap list | built and verified | this file |

### Earned-grade distribution, whole corpus, Stage 3a close

77 new `supports` links (28 + 12 + 37), 0 new claims (Track 1 adds edges, never nodes, per its own scope). 184 claims total, unchanged from Stage 2.5 close.

| Kind grade | Before Stage 3a | After Stage 3a | Change |
|---|---|---|---|
| constitutive | 4 | 4 | unchanged |
| asserted | 174 | 174 | unchanged |
| ungraded | 6 | 6 | unchanged |

**No claim moved.** This is the honest middle the stage prompt itself anticipates, not a wiring failure. Every real supports link this stage wired resolves, directly or through a chain, into a Tier 1-3 claim (a standard-result, observation, or conjecture) that is itself still bare `asserted`: no checking record exists anywhere in the corpus until Stage 3b. `supportDelivery`'s weakest-of-within-group, strongest-of-across-groups fold cannot lift a claim past what its weakest co-necessary premise delivers, and every premise available to cite in this corpus currently delivers `asserted`. The two verification exercises below confirm this mechanically rather than by assertion: real edges now carry real weight, and that weight is honestly `asserted` today, `asserted` tomorrow until Stage 3b changes what the tier claims themselves earn.

### Verification exercises, planted and observed

**Contamination.** K7's real conjunctive group is `{K1, T3.4, SF-D0}`. In a scratch, in-memory scenario (the real corpus untouched), T3.4 and SF-D0 were hypothetically lifted to `checked`, K1 left at its real `asserted` value: K7's earned grade, recomputed via the real `earnedGrade()`, stayed `asserted`, confirming the weakest member (K1, itself bottoming out at K3, which has no supports) caps the whole conjunctive group regardless of how strong the other two members are. For contrast, lifting all three (including K1) let the group deliver `corroborated`, confirming the cap is real and not a permanent ceiling.

**Conjunctive-group member removal.** K9's real support is a singleton group, `{T1.3}`. In the same scratch scenario, T1.3 was hypothetically lifted to `checked` (K9 would earn `corroborated`), then that one member was removed (K9's supports list emptied): K9's earned grade dropped back to `asserted` (support from nothing is nothing), exactly reversing the elevation.

Both exercises ran entirely in a standalone script's memory against the real vendored `earnedGrade()`; no corpus file was read for writing or modified.

### Unwireable provenance: the gap list

Named per the hard constraint that a bracket citing something not in the graph and not in the source table is a gap, never a guessed edge. Full detail and reasoning live in the Track 1a/1b/1c commit messages; summarized here.

**K-constraints and structural proofs (Track 1a):** 13 of 21 K/P claims cite at least one "Tier 4.X" trellis construction section (K1, K3, K5, K6, K8, K10, K12, K15, K18, P3, P8, P11 all cite one; K6 also cites a bare "Tier 4" with no section number), which is trellis prose describing the physical construction, not a claim or a source-table row, and does not resolve. K11 additionally cites the dead function F13; K17 the dead contract sub-item C13e; K16 the source-table document "Hydrodynamic Swampland Bounds v3" (out of scope for K-constraint supports, which draw only from tier commitments and each other per the Track 1 instruction). K3, K8, P3, P8, and P11 have no resolvable citation at all and so get no supports link.

**Mechanisms (Track 1b):** 37 of 44 mechanisms get no new supports link. This is not the same kind of gap: each one's Evidence or Source column names a source-table document (Paper 0, Half-Sphere Report, Occam Audit, Graceful Exit Report, and others), an external citation never cataloged as a source row (Sukhbold 2016, GRB 060614, Donnelly and Freidel 2016), or a generic technique or derived quantity with no standalone claim (homotopy computations, the Defect Extremal Surface prescription). None of these is a bracket citing something unresolvable; each is evidence that was never atomized into a graph claim, which a `supports` link, requiring two real claim identities, mechanically cannot represent. Two tempting but declined matches, on the record: `mech.pycnonuclear-fusion-rates`'s "LUNA" citation is laboratory d+d screening (B12), a different physical context from crust pycnonuclear rates despite the shared word; `mech.cusp-core-resolution` and `mech.mond-a0-leakage`'s topical proximity to B3 (Dark Matter) was judged too generic to cite without guessing.

**Functions and predictions (Track 1c):** F14, F22, and F-CC have no mechanism in this graph to draw from; their content lives inside a K-constraint's own text (K14, K18/T3.6) or was never atomized into a separate C-numbered contract. The F14 CANNEX prediction and the muonic atom discrimination test get no support for the same reason (F14 has no mechanism; F13, the muonic atom test's parent, is dead).

### Divergences from the Stage 3a prompt

None in substance. Two interpretive choices, documented as judgment calls rather than divergences since the prompt explicitly invites them ("where a genuine judgment call arises... the call and its trellis evidence go in the session notes"):

- **A supports link's own `declared_grade`.** The substrate does not police a link's declared grade against anything (only a claim's `declared_grade` is checked against its earned grade, via `GM-MODE`/`GM-ABOVE`); nothing stops a link from being declared arbitrarily high. This build declares every supports link at an honest snapshot of its source claim's real earned grade at the moment the link is wired (computed via the real `earnedGrade()`, in topological order within each region), never invented or inflated. Mechanically this is equivalent to declaring every link at a uniform high ceiling and letting `meet()` floor it to the truth regardless, but the chosen convention keeps the raw data self-explanatory without requiring a reader to trust that the floor operation saves an overclaim.
- **Two predictions' producing claims are K-constraints, not C-numbered mechanisms.** C-RD-1 and Lambda_1.4 name no mechanism directly; C-RD-1's own text derives its result by equating a threshold to F_Q,crit (K7's own quantity), and Lambda_1.4's parent function F02 has exactly one mechanism, C02, whose two-channel physics the modified TOV solver runs on. Read "the mechanisms that produce them" to include the K-constraint or the parent function's sole mechanism where the prediction's own text names no C-numbered contract directly.

## Stage 3b: checking records and lifts

The second of three Stage 3 sessions. Where Stage 3a wired the dependency structure without moving a single grade, Stage 3b is where the corpus first earns above its floor: real checking records, cited to real artifacts, propagated through the existing supports structure to a fixed point.

| Item | Status | Verified by |
|---|---|---|
| Track 0: three governing-conventions amendments landed from `docs/synthesis-backlog.md` (independence computed via footprint intersection, ordinal-only lattice discipline, crux resolution for held contradictions) | built and verified | `node build/check-substrate.mjs`, full suite unaffected (documentation only) |
| Track 1: 4 new source rows (GRB 060614, Sukhbold et al. 2016, RHIC/LHC KSS data, Donnelly and Freidel 2016); 22 of the 37 Stage-3a-unwired mechanisms had their `source_id` corrected from the generic `trellis.v4-16` to the specific document their Evidence column names; 9 left uncorrected (no single-document citation available); 6 (the Bekenstein-Hawking sub-results) needed nothing further | built and verified | `node build/check-dg.mjs` |
| Track 2: 40 checking records entered in two bands. Band 1: one real citation each for all 15 standard-results and all 20 observations (`checker:literature` or `checker:gemini-dr` for B12). Band 2: P3 (two audits, genuinely sharing ancestry), P8, P11, K1 (one real audit each) | built and verified | `node build/check-independence.mjs`; `node build/check-dg-tier1.mjs` section 3 (declared at or below the real gate's earned value, `leqWithinMode`) |
| A corrected, externally-computed independence discipline, since the vendored `checkingRecord()` builder drops a hand-authored `footprint` field the real gate's `ownBasis()` would otherwise need; declared grades follow the correct computation, not the gate's over-permissive one | built and verified | `node build/check-independence.mjs` |
| Track 3: `build/check-independence.mjs`, wired into CI as the ninth check; both required paths exercised | built and verified | the check itself, run green; the two scratch exercises below |
| Track 4: the 12 dangling "Tier 4.X" provenance references reconciled (attempted); 0 resolve to a new confident link | built and verified (as an honest null result, not a failure) | manual read against `trellis/4_16_main.md` Section 1.6, recorded below |
| `docs/status-ledger.md`, this section, the attributed distribution table, the under-claim ledger | built and verified | this file |

### Earned-grade distribution, whole corpus, Stage 3b close

184 claims total, unchanged (Stage 3b adds checking records and source-row corrections, no new claims). Before Stage 3b: 4 constitutive, 174 asserted, 6 ungraded (Stage 3a's flat floor). After: 4 constitutive, 118 asserted, 38 checked, 18 corroborated, 6 ungraded.

**Every claim that moved, with the cause:**

*Own-basis lift to `checked` (Band 1, one real citation each, no propagation needed):* all 15 standard-results (T1.1 through T2.9) and all 20 observations (B1 through B19, B-NU-1).

*Own-basis lift to `checked` (Band 2, one real audit each):* P8 (P11/P8 Report), P11 (P11/P8 Report).

*Own-basis capped at `checked`, not `independently-rechecked` (Band 2, two audits sharing ancestry):* P3 (Gemini's Dirac Constraint Report and DeepSeek's cross-examination of that same report; shared ancestor `corpus.dirac-constraint-report`).

*Propagation to `corroborated` (a conjunctive group's weakest member reached `checked`, so the group's delivery, capped at `corroborated` absent a claim's own settled basis, cleared the kind ceiling):* K4 (supports T2.7, T2.8, both now checked), K6 (T1.5), K9 (T1.3), K11 (T2.7, K4), K12 (K6, T2.2), K14 (K4, T2.8), K5 (P3, now checked), C20a (P3), F06 (its alternative group containing C06a, itself lifted), F07 (C07b), F09 (C09), F11 (mech.stellar-cooling-kk), F16 (mech.cold-spot-isw), C06a and C09 (B15, Failed Supernovae, now checked), C07b (B14, Lower Mass Gap), mech.cold-spot-isw (B16, CMB Cold Spot), mech.stellar-cooling-kk (B19, Exotic Stellar Cooling).

**A finding worth reporting rather than absorbing silently: K1 has a real checking record (Band 2, the Half-Sphere Report) but stays at `asserted`.** This is not a bug; it is the earned-grade rule's settled-not-inherited discipline, the same mechanism Stage 3a's contamination exercise demonstrated, now observed for real. K1 also has a real conjunctive support from K3 (K3 itself still unaudited, asserted); a settled own basis does not rescue a claim when a co-necessary premise stays weak and the support delivery has not itself reached `corroborated`. An audit of one part of a conjunctive derivation does not lift the whole conjunction while another necessary part is unaudited.

### Verification exercises, planted and observed

**Blocked path (real corpus data).** P3's two real checking records, Gemini's own audit of its Dirac Constraint Report and DeepSeek's cross-examination of that same report, have footprints `{corpus.dirac-constraint-report}` and `{corpus.deepseek-cross-examination-april-2026, corpus.dirac-constraint-report}`. The shared ancestor is named; the computation correctly caps P3 at `checked`, matching its actual declared grade.

**Passing path (scratch, synthetic).** Two distinct-party records with footprints closing over `corpus.paper-0` and `corpus.half-sphere-report` respectively (both root, no `rests_on` between them) are genuinely disjoint; the same computation grants `independently-rechecked`, confirmed to flow correctly through the real `earnedGrade()` for a derivation-kind ceiling. No corpus file was touched; the synthetic footprints existed only in the exercise script's own memory.

### Track 4: provenance reconciliation, the Tier 4.X references

12 of the 21 K-constraint and structural-proof claims cite at least one "Tier 4.X" trellis construction section in their own provenance bracket (K1 Section 4.4, K3 Section 4.2, K5 Section 4.7, K6 a bare "Tier 4", K8 Section 4.7, K10 Section 4.5, K12 Section 4.1, K15 Section 4.7, K18 "Tier 4 Section 4.4", P3/P8/P11 Section 4.7). Attempted to map each to an entered claim by reading the actual section content (`trellis/4_16_main.md` Section 1.6, "Tier 4: The Specific Construction", subsections 4.1 The Arena, 4.2 The Brane, 4.3 The Brane Action, 4.4 Symmetry Breaking and the AM Potential, 4.5 Operator Uniqueness and the gamma Coefficient, 4.6 The KK Tower, 4.7 The Structural Proofs).

**0 resolve to a new confident support link.** The reason is structural, not an oversight: Tier 4 was never atomized into its own claims at any stage (Stage 1 entered only Tier 0 through 3; the K-constraints and structural proofs themselves are Tier 4's atomization). Each of these 12 references is either self-referential (K3 cites Section 4.2, the very section K3 itself atomizes; P3/P8/P11 cite Section 4.7, the very section that enumerates them) or names a subsection whose content (checked directly, not assumed) does not match any other already-entered claim closely enough to cite without guessing: K1's citation of Section 4.4 (Symmetry Breaking and the AM Potential) does not obviously establish K1's own two-channel stress-energy decomposition, and CC-1's own statement (checked) does not mention a two-channel decomposition either, so no substitute was available. K6's bare "Tier 4" names the whole construction generically, too broad to pin to one subsection.

**One case is resolved in substance without a new link.** K5 cites both "Tier 4.7" and "P3"; P3 is a specifically-named member of the very section 4.7 names generically, and K5's supports link to P3 (wired at Stage 3a) already carries the substantive content the section-level citation gestures at. No new link was added since P3 already represents it.

All 12 stay named as trellis referential debt, not silently dropped: a future stage that decides to atomize Tier 4 itself (as its own claim set) would resolve most of these at once; short of that, they remain honest, permanent gaps in the provenance graph, exactly as before this track, now with the attempt and its reasoning on record rather than merely asserted absent.

### The under-claim ledger

Per the stage's own instruction: the honest gap between the trellis's confidence and the graph's evidence, read as the audit backlog, not a failure.

**Plausible artifacts located but not entered this stage** (Band 2 focused on the four highest-confidence cases; this is not an exhaustive sweep of the corpus's ~120 AI-audit reports):
- SF-D0 (species-enhanced heat-kernel coefficients): `corpus.dg-cft-053` (the Adjudication Document) genuinely resolves which of two competing gamma formulas is correct, and SF-D0's own statement matches its resolution. Not entered; a real candidate for a follow-up pass.
- K18 (trans-Planckian VEV suppression): `corpus.gemini-cc-radiative-stability-april-2026` (Gemini CC Radiative Stability Report) explicitly establishes K18 by name in its own content. Not entered.
- SF-G1, SF-G2, SF-G3 (GUT Box structural findings): the Torus Permutation Check, F-Theory Base Adaptation, and Avenue B Kill reports respectively are each the specific document that performed the finding, not merely background. Not entered.
- C23-SDC, C23-WGC: the HSB Karch-Randall Moduli Geometry Scout and GUT Population Survey provide real evaluative content, but C23-SDC is explicitly conditional on S-CC-002 (an open sorry); entering a checking record ahead of that resolution was judged premature. Declined, not merely deferred by oversight.

**Trellis-graded-highly claims that stay floored for lack of a locatable, entered artifact:** 20 claims carry a trellis verdict of Confirmed or Strongly Supported in their own `extensions.verdict` (C01 through C04, C06b, C07a, C10, C15, C18a, C18b, C20b through C20e, C20g, C23, C23-WGC, and the Bekenstein-Hawking parent plus three of its sub-results), yet remain `asserted` in this graph. Most now correctly cite their real source document (Track 1's corrections), but a claim's own source_id is not itself a checking record: a genuine audit artifact, distinct from the document that originated the claim, would still need to be located and entered. This list is exactly the backlog a dedicated audit pass should read from first.

### Divergences from the Stage 3b prompt

None in substance. The independence-computation correction (declaring below what the real gate's own `grade_table` would permit, per the `checkingRecord()` footprint-drop finding) is documented as a substrate finding in `docs/governing-conventions.md` Section 5 and the Track 2/3 commit messages, not treated as a divergence from the prompt's own instructions, since the prompt's own discipline ("when in doubt, floor and ledger") is exactly what this correction applies.

## Stage 3c: the reservoir

The third of three Stage 3 sessions. Where 3a wired the dependency structure and 3b earned real grades, 3c enters the trellis's negative knowledge, every killed mechanism, struck contract, and dead function, as first-class graph content: real withdrawal records with typed reinstatement conditions, not silent omission.

| Item | Status | Verified by |
|---|---|---|
| Track 0: checking records entered for the five under-claim-ledger artifacts named at Stage 3b close (SF-D0, K18, SF-G1, SF-G2, SF-G3), one real audit each | built and verified | `node build/check-independence.mjs` |
| Track 1: every reservoir entry (87 THE DEAD table rows including all 22 ER-numbered entries, 13 STRUCK contracts, 6 dead functions, the Section 4.6 KBC-void row) entered as three typed acts: an evidence claim (`computation` kind, one real checking record citing the artifact its own "Killed By"/"Source" column names), the killed claim itself (bare floor, `mechanism` or `function` kind matching the original), and a withdrawal record with a typed reinstatement condition | built and verified | `node build/check-dg-tier1.mjs`, `node build/check-dg-coverage.mjs` (manifest extended by 107 entries), `node build/check-independence.mjs` |
| `build/dg-build.mjs` extended: `STORE.withdrawals` resolves `claim_ref` and `reinstatement_condition.target_ref` through the same `refId` map as links and supersessions, passed to `apply()` as `withdrawn_records`, never through `decide()`'s contribution (a withdrawal is a structural record, like a supersession, not itself a graded claim) | built and verified | `node build/check-gate.mjs`, the three gate exercises below |
| `check-independence.mjs`'s `CEILING` map extended for the `computation`, `theorem`, and `block` kinds (the first two now populated, `block` reserved for Track 2) | built and verified | `node build/check-independence.mjs` |
| One new source row, `corpus.warp-factor-calc` (the only reservoir citation with no existing source-table row; every other citation, all ~100 of them, resolved to a source row Appendix E lineage work had already populated) | built and verified | `node build/check-dg.mjs` |
| `docs/status-ledger.md`, this section | built and verified | this file |

### Earned-grade distribution, whole corpus, Stage 3c Track 0-1 close

398 claims total (184 before Stage 3c, +214: 107 evidence claims and 107 killed claims). Distribution: 4 constitutive, 120 checked (+82: the reservoir's distinct-party-audited evidence claims), 250 asserted (+132: the reservoir's killed claims, all bare floor, plus the self-checked-only evidence claims), 18 corroborated, 6 ungraded. 107 withdrawal records, one per reservoir entry, none present before this stage.

**Reinstatement condition typing, by policy (`docs/governing-conventions.md` Section 8):** 74 entries carry `entry-at-grade` against the withdrawn claim's own identity requiring `minimum_grade: "checked"`, a real, mechanically permanent decline (a `mechanism`/`function` claim's kind ceiling, `corroborated`, structurally cannot reach the settled-tier `checked`), used wherever the trellis states no reactivation path, "structurally none," "not contemplated," or names no candidate. 33 entries carry `entry-of-kind` requiring a `derivation`-kind entry, the nearest typed approximation available in `CONDITION_KINDS`, used wherever the trellis names a concrete future discovery or demonstration that would lift the kill. The schema has no clause for "and it must show X"; the specific content every `entry-of-kind` condition elides is named verbatim in each withdrawal's `reason` field and is the honest gap this track ledgers rather than smooths over. Two entries (ER-CC-003, ER-MIX-003) sit close to permanent in the trellis's own language ("appears... mutually exclusive," "highly speculative; no such structure exists") but are typed `entry-of-kind` rather than forced to `permanent`, since the trellis does not foreclose them categorically the way it does the 74; the nuance is named in their own `reason` text rather than erased by the typing choice.

**A structural nuance surfaced by the gate exercises, not by this build's own claims:** `WD-UNSATISFIED` and `WF-SUPERSEDED` are two independent checks. A restatement link pointed at a withdrawn identity trips `WF-SUPERSEDED` (Boundary 1: any reference to an out-of-force identity default-declines, naming the successor) regardless of whether the reinstatement condition it also triggers is satisfied. Genuine reinstatement therefore does not restatement-link back to the dead claim's own identity; it stands as a fresh, unlinked entry of the required kind or grade, verified in Exercise 2 below. This is the gate's own design (Section 7's reinstatement machinery and Section 5's binding rule are deliberately orthogonal), not a workaround.

### Verification exercises, planted and observed

**Exercise 1 (WD-UNSATISFIED on plain re-entry).** A synthetic `mechanism` claim restating `dead.geff-amplification` (a `permanent`-typed withdrawal), restatement-linked to it, is submitted against the built store's real view. `decide()` declines with `WD-UNSATISFIED` in its basis (alongside `WF-SUPERSEDED`, from the same restatement link); `withdrawn_matches` reports `satisfaction: "unsatisfied"`, `failing_condition_field: "minimum_grade"`, exactly the permanent condition's own unmeetable clause.

**Exercise 2 (admitted reinstatement).** A fresh `derivation`-kind claim, not restatement-linked to anything, satisfying the `entry-of-kind` condition on `dead.er-mix001-dbi-pi-chi-mixing`'s withdrawal, is submitted alone. `decide()` returns `accepted`, basis `all-checks-clean`. Submitted instead with a restatement link back to the withdrawn identity (a second run), `satisfiesReinstatement` reports `"satisfied"` in `withdrawn_matches`, but the overall receipt still declines on the unrelated `WF-SUPERSEDED` check, the structural nuance above.

**Exercise 3 (restatement closure catches a rephrasing).** A reworded restatement of `dead.thooft-naturalness-lambda` (no new reinstating content, just different words for the same mechanism), restatement-linked to it, is submitted. The restatement closure correctly unions the new identity with the withdrawn one (`restatement_closures` contains both); `decide()` declines with `WD-UNSATISFIED`, confirming the closure catches a rephrasing, not merely an exact byte-identical resubmission.

No corpus file was touched by any exercise; all three exist only in their own script's memory, discarded on exit.

### The missing-artifact list

None. Every one of the 107 reservoir entries' cited sources (the DEAD table's "Source" column, the STRUCK contracts' and dead functions' cited reports) resolved to a source-table row Appendix E lineage work (Stage 2.5 Track 3, Stage 3b Track 1) had already populated, with one exception: "Warp-factor calc" (the tree-level warp-factor alpha(z_0) cancellation row), entered as the one new source row this stage adds, `corpus.warp-factor-calc`.

### Track 2: class blocks and the advisory reservoir scanner

21 of the 107 Track 1 reservoir entries carry an explicit "Block scope:" sentence in the trellis (every entry tagged Class Block, Point Block, or a bare parenthetical "(Block)", plus every entry whose own text states a scope beyond its single specific instance): ER-CC-001, ER-CC-002, ER-MM-001 through ER-MM-003, ER-MIX-001 through ER-MIX-003, ER-WD-001, ER-COSM-001 through ER-COSM-004, ER-WGC-001, ER-DE-001 through ER-DE-006, ER-HT-001. Each enters as a `block`-kind claim (`build/reservoir-blocks.mjs`, the authored data; the ceiling `corroborated` was already present in `corpora/dg-config.json`'s local kind table since Stage 1's own scaffold, unused until now), supported by its corresponding Track 1 evidence claim (a `supports` link, an honest snapshot of that evidence claim's real earned grade). 14 of the 21 (backed by a distinct-party-audited evidence claim, earning `checked`) reach the full `corroborated` ceiling via the settled-S-caps-at-corroborated rule (`earnedGrade`'s second row: a settled support delivery becomes `corroborated`, never inherited past it); the remaining 7 (the DE/HT family, self-checked-only evidence) stay at `asserted`, the honest, computed value in both cases, not a blind declaration.

`build/check-reservoir.mjs` (advisory, wired into CI as the tenth check) scans every claim's statement for the trigger phrases named in each block's own scope sentence (`build/reservoir-blocks.mjs`'s `triggers` field, hand-picked substrings, no NLP, no scoring), flagging any claim outside a block's own known members (the block claim, its evidence claim, the killed claim itself) that pattern-matches an excluded scope. Unlike every other `check-*.mjs` in this repo, it always exits 0: a match is a WARN line for human review, never a build failure, since a substring match is neither necessary nor sufficient for a claim to actually fall inside a block's real scope. Run against the real corpus (419 claims, 21 blocks), it surfaces 19 candidate matches, all benign cross-references between related reservoir entries sharing vocabulary (e.g. `cc1.v4-14` and `k7` both mention "DLRO" in their own architectural language; `block.er-cosm002` and `block.er-cosm003` both mention "DLRO" since they are structurally related kills), none an actual undetected violation.

**Exercise (planted, non-vacuous).** A scratch claim ("a propagating bulk scalar field with kinetic terms in the topological bulk stabilizes the Karch-Randall radion") is run through the exact matching logic `check-reservoir.mjs` itself runs; it is correctly flagged against `block.er-cc001` on the trigger "karch-randall radion" (an equally valid match against `block.er-cc002`'s "propagating bulk scalar" trigger would also have fired, had iteration order reached it first; either confirms the mechanism). No corpus file was touched; the scratch claim existed only in the exercise script's own memory.

## Not built at Stage 1 (named, not implied done)

- No `api/` (our own membrane) or `periphery/` client code. Stage 5.
- No transformation entries registered in the `computation` pack against real physics data (the pole-condition arithmetic, the exhaust race, the OoM-deficit calculator); `check-compute-invariants.mjs` exercises the register's rules with synthetic fixtures, not a real transform. Stage 4.
- The source table's `rests_on` chains were populated only for 13 corpus-index entries at Stage 1 close. **Partially closed at Stage 2.5**: Track 3 brought this to 50 of 195; 145 rows remain an explicit gap, listed in the Stage 2.5 section above, not defaulted.
- 49 of the 195 Appendix-E-derived source rows defaulted to `source_class: "testimony"` at Stage 1 close. **Partially closed at Stage 2.5**: Track 4 reclassified 29, confirmed 8 as genuinely testimony, and left 12 undetermined (listed in the Stage 2.5 section above).

## Not built at Stage 2 (named, not implied done)

- ~~**K18** is in the trellis... but out of scope~~. **Entered at Stage 2.5** (Track 2).
- ~~**The GUT Box occupant model**... and **the compute-layer structural findings**... Not entered.~~ **Entered at Stage 2.5** (Track 2), as `derivation` claims.
- ~~**Ten thin one-line stub rows**... are not entered as separate `mechanism` claims~~. **Entered at Stage 2.5** (Track 1), per the operator's stub-row disposition.
- **The exclusion reservoir**: no kills, withdrawal records, or reinstatement conditions. Every dead function (F05, F12, F13, F13.2, F19, F21) and every struck contract that depended on them is named as excluded in the relevant commit, never entered as a claim. Still Stage 3; Stage 2.5 explicitly did not touch this (the KBC-void row and every STRUCK row stayed out, per the Stage 2.5 prompt).
- **No `supports` links or checking records anywhere in the corpus.** Every Stage 2 and Stage 2.5 claim sits at its bare floor; `check-dg-tier1.mjs` section 5 asserts this holds across the whole corpus. Stage 3 attaches the dependency structure and the derivation-audit checking records, per the checker-identity policy in `docs/governing-conventions.md`.
- ~~**The `rests_on` lineage session**... remains unbuilt~~. **Partially built at Stage 2.5** (Track 3: 50 of 195 rows now linked; 145 remain an explicit gap) and **partially built** (Track 4: 29 of 49 testimony rows reclassified; 12 remain undetermined). See the Stage 2.5 section above for both gap lists. Stage 3's `independently-rechecked` lifts should read the footprint closure as it now stands, treating the 145 unlinked rows as unknown, not independent.
