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
- [ ] Add snapgent-extension/test-lifecycle.js with pure transition assertions and four wiring checks.
- [ ] Run node test-lifecycle.js via CI; expect explicit assertion that transitionLoop is missing (not infrastructure failure).
- [ ] Record red commit/run evidence.

## Task 2: GREEN
- [ ] Add transitionLoop(flags,event) to core/guard.js; expose it in exported ZSGuard.
- [ ] Replace only loop start, user stop, finally reset and drain assignment in core/main.js with Object.assign(A, ZSGuard.transitionLoop(A, {type: ...})).
- [ ] Run all Python and JavaScript CI suites; expect green.
- [ ] Review diff, update ledger, open draft PR against dev/m0-foundation.
