# Algorithm candidates

Evaluate by measurable improvement, not novelty.

- M1: pure finite-state transitions; reduce implicit flags and test illegal transitions.
- M3: Kahn topological sort (O(V+E)); deterministic ready queue, bounded workers, dependency failure propagation and conflict serialization. Compare against sequential execution; do not parallelize model turns unless provider capability is proven.
- M4: BM25 lexical retrieval first; language-aware symbol index and optional reciprocal rank fusion only if labeled retrieval benchmarks justify them. Prefer local, incremental, dependency-light indexing.
- M5: content hashing, atomic checkpoint writes, versioned state and workspace identity. Reconcile uncertain mutations before retry.
- M6: explicit workflow state and verification evidence rather than relying only on injected instructions.
- M7–M9: capability-based routing and isolated provider task contexts. Model choice is configurable; no fixed provider superiority claims.

Each milestone needs a separate approved spec, fixture tests, baseline comparison where relevant and a rollback strategy.
