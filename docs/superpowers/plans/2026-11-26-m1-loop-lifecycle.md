# M1a Loop Lifecycle Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: use superpowers:executing-plans with test-driven-development.

**Goal:** Extract existing loop lifecycle transitions into a pure reducer, preserving current behavior.
**Architecture:** Existing guard.js exports transitionLoop; main.js applies it only at four lifecycle checkpoints. Remaining flag writers stay unchanged.
**Tech Stack:** JavaScript, Node assert, GitHub Actions.
**Spec:** docs/superpowers/specs/2026-11-26-m1-loop-lifecycle-design.md

## Global constraints
No provider, MCP, Electron, UI or permission behavior change. Work on feat/m1-loop-lifecycle stacked on M0; do not merge. Evidence before completion.

## Review focus
Duplicate start; duplicate stop; stale stopping after bootstrap; watchdog stop without a user stop; provider still generating after cleanup. Preserve provider drain probe order and non-lifecycle state.

## Task 1: RED
- [x] Add snapgent-extension/test-lifecycle.js with pure transition assertions and four wiring checks.
- [x] Run node test-lifecycle.js via CI; expect explicit assertion that transitionLoop is missing (not infrastructure failure).
- [x] Record red commit/run evidence: `1b2f2d2`, [CI run 45840222890](https://github.com/lordmarreal-ui/snapgent-gpt/actions/runs/45840222890). Both Python jobs passed; Node failed at the intended assertion: transitionLoop must be exported by ZSGuard (actual undefined, expected function, exit 1).

## Task 2: GREEN
- [x] Add transitionLoop(flags,event) to core/guard.js; expose it in exported ZSGuard.
- [x] Replace only loop start, user stop, finally reset and drain assignment in core/main.js with Object.assign(A, ZSGuard.transitionLoop(A, {type: ...})).
- [x] Run all Python and JavaScript CI suites: 3/3 jobs successful at `0aa4b09`; [CI run 45840408120](https://github.com/lordmarreal-ui/snapgent-gpt/actions/runs/45840408120). Node logs confirm all 11 transition cases, immutability assertions, unknown-event rejection and four wiring checks passed.
- [x] Review diff (author self-review, no independent subagent), update ledger, open [draft PR #2](https://github.com/lordmarreal-ui/snapgent-gpt/pull/2) against dev/m0-foundation. Remaining limitation: live-browser behavior not exercised by static wiring checks; other lifecycle writers and Electron unchanged.
