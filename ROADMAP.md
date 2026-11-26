# Snapgent GPT roadmap

Goal: improve the API-key-free agent harness for real local development and automation. These are fork milestones, not upstream release promises.

| Milestone | Outcome | Exit gate |
|---|---|---|
| M0 | Foundation, CI, baseline and durable planning | Existing suites run; failures documented; baseline metrics protocol |
| M1 | Extract provider-neutral runtime state machine | Transition tests; unchanged public behavior |
| M2 | Explicit command parsing and validation | Corpus regression tests; no unintended mutation from incomplete commands |
| M3 | Dependency-aware scheduling and read batching | Cycle detection, stable ordering, bounded concurrency, serialized conflicting writes |
| M4 | Code retrieval and context budgeting | Benchmark relevance and context usage against existing search |
| M5 | Project memory and resumable checkpoints | Restore tests; workspace/branch identity and stale-state handling |
| M6 | Superpowers workflow lifecycle | Skill activation, plan, test and verification checkpoints |
| M7 | Multi-MCP orchestration | Explicit routing and capability boundaries |
| M8 | Performance and robustness | Repeatable comparison against M0 metrics |
| M9 | Optional multi-provider orchestration | Provider capability matrix and isolated task ownership |
| M10 | Production packaging and release | Cross-platform smoke tests, license and reproducible release notes |

## Constraints
Maintain compatibility first. Retain provider adapters, current bridge protocol and GPL attribution. Prefer small modules with a stable interface over a rewrite. Security features are not the primary product scope, but existing safeguards must not regress.

## Near-term order
M0 first, then M1's pure state machine before scheduling. Do not introduce parallel writes, embeddings, persistent autonomous loops or multi-provider coordination without a specific spec and evidence of value.
