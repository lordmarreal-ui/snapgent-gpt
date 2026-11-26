// SPDX-License-Identifier: GPL-3.0-or-later
// Run with: node test-lifecycle.js
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const read = (file) => fs.readFileSync(path.join(__dirname, file), "utf8");
const G = new Function(read("core/guard.js") + "; return ZSGuard;")();
assert.equal(typeof G.transitionLoop, "function", "transitionLoop must be exported by ZSGuard");
const flags = (running, stop, stopping) => ({ running, stop, stopping });
const transition = (state, type, extra = {}) => G.transitionLoop(state, { type, ...extra });
const cases = [
  ["start idle", flags(false, false, false), "start", {}, flags(true, false, false)],
  ["start clears stale stop", flags(false, true, true), "start", {}, flags(true, false, false)],
  ["duplicate start preserves pending stop", flags(true, true, true), "start", {}, flags(true, true, true)],
  ["stop running", flags(true, false, false), "request-stop", {}, flags(true, true, true)],
  ["stop during bootstrap", flags(false, false, false), "request-stop", {}, flags(false, true, true)],
  ["duplicate stop preserves draining", flags(false, false, true), "request-stop", {}, flags(false, false, true)],
  ["finish ordinary loop", flags(true, false, false), "finish", {}, flags(false, false, false)],
  ["finish watchdog stop", flags(true, true, false), "finish", {}, flags(false, false, false)],
  ["finish user stop retains drain flag", flags(true, true, true), "finish", {}, flags(false, false, true)],
  ["provider still draining", flags(false, false, true), "drain", { draining: true }, flags(false, false, true)],
  ["provider quiet", flags(false, false, true), "drain", { draining: false }, flags(false, false, false)],
];
for (const [name, before, event, extra, expected] of cases) {
  const original = { ...before };
  const input = Object.freeze({ ...before, unrelated: "keep out" });
  assert.deepEqual(transition(input, event, extra), expected, name);
  assert.deepEqual(input, { ...original, unrelated: "keep out" }, name + " input unchanged");
  console.log("PASS  " + name);
}
assert.throws(() => transition(flags(false, false, false), "invalid"), RangeError);
const main = read("core/main.js");
for (const event of ["start", "request-stop", "finish", "drain"]) {
  assert.ok(main.includes('ZSGuard.transitionLoop(A, { type: "' + event + '"'), "main.js wires " + event);
}
console.log("PASS  unknown event rejected and all four transition sites wired");
