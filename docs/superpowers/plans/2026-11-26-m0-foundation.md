# M0 Foundation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task in chat mode. Steps use checkbox syntax for tracking.

**Goal:** Establish repository-level project context and automated regression baseline without changing runtime behavior.

**Architecture:** Keep existing extension, Electron and Python source intact. Use an isolated GitHub branch and repository ledger; CI runs existing suites.
**Tech Stack:** GitHub, Markdown, GitHub Actions, Python unittest, Node.js 22.
**Spec:** docs/superpowers/specs/2026-11-26-m0-foundation-design.md

## Global Constraints
No production source changes; no main merge; keep GPL attribution and API-key-free architecture. CI read-only token, no secrets or release jobs. Evidence before completion.

## Review Focus
- Missing workflow permissions: retain docs and report exact error.
- Missing Actions runs: report pending/disabled rather than claiming pass.
- Failed Python dependencies or version incompatibilities: retain exact failure and investigate.
- JavaScript failure in any suite: propagate nonzero status; do not skip.
- Baseline on Linux is not evidence of Windows, macOS or live provider compatibility.

## Task 1: Isolate and document
- [x] Confirm fork parent and baseline commit.
- [x] Create dev/m0-foundation from f3e06ff.
- [ ] Commit AGENTS.md, ROADMAP.md, PROJECT_STATE.md, architecture/research docs, spec and plan.
- [ ] Fetch commit and confirm changed paths are documentation only.

## Task 2: Reproducible CI
- [ ] Confirm baseline tree has no CI workflow and identify existing test dependencies and scripts.
- [ ] Add .github/workflows/ci.yml using Python 3.11/3.13 and Node 22, pinned websockets/aiohttp, python -m unittest discover -v and all test-*.js in extension directory.
- [ ] Validate workflow syntax and inspect file after commit. Expected: read-only permissions, pull_request and push events, all tests included, no deployment.
- [ ] If workflow write is rejected, preserve exact error and give owner workflow contents.

## Task 3: Baseline and handoff
- [ ] Open draft PR from dev/m0-foundation to fork main (never upstream).
- [ ] Inspect CI jobs and record commit, results, or blocker in PROJECT_STATE.md; do not report green without evidence.
- [ ] Review diff and identify remaining live-provider/platform coverage gaps.
- [ ] Prepare M1 state machine spec after baseline; do not change runtime in this plan.

No product code is written by this plan; red/green TDD applies to the subsequent runtime milestones. Remote branch is used in lieu of a local worktree because git DNS fails in chat runtime.
