# Attestation: PK-AUD-K3B-001/002/003 and PK-XEXAM-K3B-001 provenance

Four artifacts landed under `docs/audits/` byte-identical to the files the operator provided (SHA-256 below); none is edited. This document is the operator's provenance correction and run-order assignment, recorded by annotation, never by editing an artifact itself. Authorized by the landing-2 prompt (`docs/audits/PK-AUD-K3B.md`, the audit prompt itself, landed alongside these per its own read-order instruction).

## Hashes (SHA-256, of the files as landed)

- `docs/audits/PK-AUD-K3B-001.md` (DeepSeek Expert): `e25ceb96525fc9cd654815d634bf10618ff6865f09147101c40049efdcd658e2`
- `docs/audits/PK-AUD-K3B-002.pdf` (GPT-5.6 Thinking): `8c5a646caf8398dbb82ffc52eb5a682e95a65abba3d1d9f58cdaf5c36d58bd93`
- `docs/audits/PK-AUD-K3B-003.md` (Kimi K3): `8687d8bb862ddfe8a9012eb85346a0d51caffe414198d39483159f5394c767ec`
- `docs/audits/PK-XEXAM-K3B-001.md` (architect cross-examination and arbitration record): `7b491d9877a094f80b752b4dac3dcdba83a878115a7e298d394e5b67d6899dfa`
- `docs/audits/PK-AUD-K3B.md` (the audit prompt itself): `86571e35e8aefb9a6b99b30d481d27279923ec7ad741b9e93d266d4f02b3cc34`

## Assigned run order, against each artifact's own self-label

Three self-labeling systems audited the same target (`docs/shores/SF-K3B-001.md`); their own internal self-labels collide (two both self-label "PK-AUD-K3B-002"). The operator's assigned run order below is the corpus's own designation and governs every checker identity and source row this landing enters; it does not correct or dispute any artifact's own text, which stays exactly as submitted.

| Assigned run | System | Self-label | Landed as |
|---|---|---|---|
| 001 | DeepSeek Expert | PK-AUD-K3B-002 | `docs/audits/PK-AUD-K3B-001.md` |
| 002 | GPT-5.6 Thinking (OpenAI ChatGPT) | PK-AUD-K3B-001 | `docs/audits/PK-AUD-K3B-002.pdf` |
| 003 | Kimi K3 (Moonshot AI) | PK-AUD-K3B-002, with an explicit relabel provision in its own header ("If this artifact lands first, relabel to PK-AUD-K3B-001; content is unaffected") | `docs/audits/PK-AUD-K3B-003.md` |

**DeepSeek's checker identity is self-assigned.** `docs/audits/PK-AUD-K3B-001.md` line 3 states "Checker identity: Audit-Gamma-2026-07-20," chosen by the system itself, not assigned by the operator or this repository's own checker-identity policy (`docs/governing-conventions.md` Section 1). This store's own checking records for run 001 use `checker:deepseek-expert`, matching this repository's standing naming convention for external systems, not the artifact's own self-chosen string; the self-chosen string is recorded here for provenance, not adopted as the graph's own identity.

**Kimi's header date reads 2026-07-21 per its own system clock.** `docs/audits/PK-AUD-K3B-003.md` line 5 states "Date: 2026-07-21," one day after DeepSeek's 2026-07-20 and GPT-5.6's 20 July 2026. Recorded here as a genuine provenance fact (three runs, not necessarily launched in the same minute), not a discrepancy requiring correction; nothing in this landing depends on the three runs having been simultaneous, only on their being independent (no shared drafts, per each artifact's own independence statement and `PK-XEXAM-K3B-001.md`'s own convergent-findings section).

## PK-XEXAM-K3B-001 (the cross-examination and arbitration record)

Same-family with the shore's own generation pipeline (its own header states this explicitly: "the examining instance... is same-family with the shore's generation pipeline; every check below is non-authoritative and lifts standing for nothing"). Landed for exactly the reason its own role line states: an arbitration record, not an independent audit, existing so every disposition in this landing has a locatable rationale. It contributes no checking record and no independence lift; every lift in this landing descends from the three external artifacts only, never from the cross-exam record.

## What this attestation does not do

It does not alter any of the four artifacts' content, verdicts, algebra, or bibliography. It does not itself constitute a checking record; Tracks B and C's checking records cite the three audit artifacts directly, with `checker_id` set per the assigned-run-order table above, never re-deriving checker identity from an artifact's own self-label where that self-label collides with another artifact's.
