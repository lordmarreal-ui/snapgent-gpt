# M0 foundation design

Approved direction: incremental modular upgrade, starting M0 on an isolated branch. The owner asked to start the proposed M0; exact filenames and CI matrix below are implementation decisions, not separately approved preferences.

## Goals
Establish durable repository context and a reproducible baseline without modifying runtime behavior. Make subsequent upgrades independently testable and reviewable.

## Approaches
1. Incremental foundation and modular extraction (chosen): preserve provider adapters and current behavior.
2. Replace runtime immediately: defer; baseline and contracts are missing.
3. Rewrite entire project: reject for now; provider compatibility cost is too high.

## Requirements
Keep GPL attribution, no mandatory paid dependency, no direct main modification. Add engineering guide, roadmap, ledger, current/target architecture, algorithm and measurement proposals. CI should run the three existing Python unittest modules and all seven existing JavaScript smoke suites, with pinned Python dependencies and Node 22. Start with Linux Python 3.11 and 3.13; report separately any missing or failing checks. No production code changes in M0 foundation. CI uses read-only repository permissions, no secrets, no publishing. Preserve upstream sources and prebuilt binaries.

## Acceptance
Branch and files verified via GitHub; CI configuration reviewed; actual run results recorded before baseline is declared green; draft PR for review. If connector cannot write workflow files or CI is disabled, document the exact blocker and supply the workflow for owner installation. M1 requires separate spec and failing test first.
