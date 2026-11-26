# Target architecture (proposed)

Keep provider adapters, bridge protocol and current UI stable while introducing small provider-neutral units.

1. Runtime state machine: explicit idle, waiting, parsing, executing, feedback, paused, stopped, failed states; pure transition tests.
2. Command validation: normalized typed operations, explicit parse errors, backward-compatible read paths, no silent repair of ambiguous writes.
3. Scheduler: DAG validation, deterministic topological ordering, bounded read concurrency and conflict-aware serialization for mutations.
4. Context engine: budget-aware retrieval and feedback, preserve exact tool errors and relevant code.
5. Checkpoint store: workspace/branch-scoped task state, versioned schema, recover uncertain execution without blindly repeating mutations.
6. Workflow engine: skill discovery, plan and verification checkpoints, actual test evidence.
7. Routing: explicit per-task MCP target, capability checks, provider-neutral orchestration.

These are proposals, not implemented interfaces. Define exact contracts and tests in milestone-specific specs before extraction. Do not add mandatory API services or assume provider-native tool APIs.
