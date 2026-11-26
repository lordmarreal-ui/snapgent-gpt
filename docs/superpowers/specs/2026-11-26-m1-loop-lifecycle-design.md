# M1a — extract loop lifecycle transitions

## Intent
The existing main.js uses three interdependent flags (running, stop, stopping) for loop entry, stop request and cleanup. Extract these transitions into a deterministic provider-neutral reducer while retaining current behavior and provider interfaces. This is the first increment of M1, not a replacement of the entire agent loop.

## Approaches
- Chosen: small pure transition reducer in core/guard.js, already loaded by every extension provider. Existing flags remain compatibility projection.
- Defer: full state machine for waiting/parsing/executing/feedback. Requires more runtime fixtures and migration of other flag writers.
- Reject for now: rewrite main.js or change Electron's separate runtime.

## Contract
`transitionLoop(flags, event)` returns only the three lifecycle flags, never mutates input. Unknown events throw RangeError. Events:
- start: if already running, preserve flags; otherwise running=true, stop=false, stopping=false (stale stop reset).
- request-stop: if already stopping, preserve flags; otherwise set stop=true and stopping=true, preserve running (supports bootstrap/native UI).
- finish: running=false, stop=false, preserve stopping until provider drain check.
- drain: preserve running/stop, set stopping to Boolean(event.draining).

Use the reducer at the existing start, user stop and finally/drain assignments in main.js. Preserve guard conditions, order of provider calls, diagnostics, input lock and all existing external writers; no new permissions, transport changes or cancellation promise. No changes to Electron in this increment.

## Verification
Test every transition, including stale stop, duplicate start/stop, watchdog stop, bootstrap stop, drain and input immutability. Add a static wiring check for the four event call sites. Observe red before implementation; run all existing CI suites after green. Existing Linux smoke tests do not prove live provider behavior. No performance improvement claim for this refactor.
