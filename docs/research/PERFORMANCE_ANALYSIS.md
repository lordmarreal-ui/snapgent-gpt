# Baseline measurement protocol

Status: planned; no baseline runtime measurements yet.

Use the same pinned source, fixture repository, model/provider, account settings and machine for baseline and candidate. Record versions and commit. Separate deterministic local timings from variable live model latency.

| Metric | Measurement |
|---|---|
| Tool round trips | Number of executed tools and model feedback submissions per fixed task |
| Local latency | p50/p95 parser, bridge dispatch and tool duration (milliseconds) |
| End-to-end latency | Wall time from task submission to verified completion |
| Reliability | Successful runs / total; timeout, parse error, duplicate mutation and recovery counts |
| Context size | Feedback characters; estimated tokens explicitly labeled as estimates |
| Retrieval quality | Recall@k and reciprocal rank on a fixed manually labeled code-query fixture |

Initial workloads: list/read multiple files; search and inspect symbols; apply a small patch and run tests; simulated malformed reply; simulated reconnect. Use synthetic fixtures, not private project data. Repeat deterministic tests at least 30 times; live runs at least 5 per configuration where provider quotas allow. Report raw counts and environment, and acknowledge noise. Avoid performance thresholds until the baseline is observed.
