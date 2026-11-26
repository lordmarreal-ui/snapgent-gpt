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
- [ ] Add and verify CI workflow.
- [ ] Capture Python and JavaScript baseline suite results.
- [ ] Review M0 diff and record evidence; prepare draft PR.
- [ ] Design M1 and implement its first regression-tested runtime change after baseline verification.

## Evidence and blockers
GitHub branch creation succeeded. Local environment reports Python 3.13.5, Node 22.16.0, websockets 16.0, aiohttp 3.13.3; git ls-remote failed to resolve github.com. No local checkout/worktree or baseline test run is available. Use remote feature branch isolation and GitHub Actions, if allowed. No runtime changes in this foundation commit. No independent reviewer/subagent available in chat mode.

## Rulings
- Start with incremental upgrades, not a rewrite; provider compatibility outweighs immediate internal cleanliness.
- Use GitHub branch isolation rather than a local worktree because direct GitHub DNS access is unavailable.
- Start CI on Linux with Python 3.11/3.13 and Node 22; Windows/macOS and live browser/Electron verification are later explicit gates, not implied by Linux results.
- Keep baseline metrics as a protocol, not invented measurements.
- Use a draft PR until the CI result has been inspected. Do not merge automatically.

## Resume
Read AGENTS.md, this file, ROADMAP.md and docs/superpowers/plans/2026-11-26-m0-foundation.md. Check current branch head and CI. Continue the first unchecked item; update this ledger with actual evidence.
