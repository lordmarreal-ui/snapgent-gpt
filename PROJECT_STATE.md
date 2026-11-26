# Project state

Updated: 2026-11-26
Repository: lordmarreal-ui/snapgent-gpt
Upstream: herdodp/snapgent-connector
Baseline: f3e06ffacc79299eadfee8e796ab971158337c69
Working branch: dev/m0-foundation
Active milestone: M0 — development foundation

## Ledger
- [x] Inspect upstream and fork; confirm parent and baseline.
- [x] Create isolated remote development branch.
- [x] Record project rules, architecture, roadmap, metrics and M0 spec/plan.
- [x] Add CI workflow; fetch and inspect committed configuration. Actions triggered.
- [x] Capture Python and JavaScript baseline suite results (3/3 CI jobs passed).
- [x] Inspect initial two-commit diff (10 additions, no runtime changes); open draft PR #1.
- [ ] Design M1 and implement its first regression-tested runtime change after baseline verification.

## Evidence and blockers
- Baseline CI verified for commit `d6780943c3a42761ff4feb1a02968784595ab55c`: PR run https://github.com/lordmarreal-ui/snapgent-gpt/actions/runs/45839733740 completed successfully. Python 3.11: 47 tests, OK (5.063s); Python 3.13: 47 tests, OK (4.911s). Node 22: all extension smoke suites step succeeded. Job logs inspected. Push run 45839690327 also succeeded.
- M0 baseline acceptance met for the Linux CI matrix only. PR remains draft and unmerged. M1 spec and runtime changes not started; keep main unchanged pending owner review.

- Foundation commit `5ef3d5f360b0e4dfa0c01e6aae98a9d4f6538636`; CI commit `d6780943c3a42761ff4feb1a02968784595ab55c`.
- Draft PR: https://github.com/lordmarreal-ui/snapgent-gpt/pull/1 . Main verified unchanged at baseline.
- CI push run https://github.com/lordmarreal-ui/snapgent-gpt/actions/runs/45839690327 observed in progress; PR run https://github.com/lordmarreal-ui/snapgent-gpt/actions/runs/45839733740 observed queued. These were the original observations; superseded by the completed runs above. Ledger updates trigger additional runs.
- Workflow syntax was inspected and GitHub accepted and scheduled it; no separate YAML lint run. Static self-review only; live provider/platform and Electron tests remain outside this initial CI matrix.

GitHub branch creation succeeded. Local environment reports Python 3.13.5, Node 22.16.0, websockets 16.0, aiohttp 3.13.3; git ls-remote failed to resolve github.com. No local checkout/worktree is available; remote CI now provides baseline test evidence. Use remote feature branch isolation and GitHub Actions, if allowed. No runtime changes in this foundation commit. No independent reviewer/subagent available in chat mode.

## Rulings
- Start with incremental upgrades, not a rewrite; provider compatibility outweighs immediate internal cleanliness.
- Use GitHub branch isolation rather than a local worktree because direct GitHub DNS access is unavailable.
- Start CI on Linux with Python 3.11/3.13 and Node 22; Windows/macOS and live browser/Electron verification are later explicit gates, not implied by Linux results.
- Keep baseline metrics as a protocol, not invented measurements.
- Use a draft PR until the CI result has been inspected. Do not merge automatically.

## Resume
Read AGENTS.md, this file, ROADMAP.md and docs/superpowers/plans/2026-11-26-m0-foundation.md. Check current branch head and CI. Continue the first unchecked item; update this ledger with actual evidence.
