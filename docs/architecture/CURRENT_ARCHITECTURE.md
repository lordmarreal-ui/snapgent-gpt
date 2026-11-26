# Current architecture at f3e06ff

## Runtime
Browser extension (Manifest V3): provider-specific content scripts observe chat UI and submit feedback; core/config.js constructs the bootstrap prompt; core/parser.js normalizes text commands; core/main.js manages the agent loop, UI, visibility, recovery, skills and dispatch; core/guard.js contains pure retry/replay/remote-adoption helpers; background.js maintains a loopback WebSocket and pending requests.

Python bridge.py supervises MCP stdio subprocesses, negotiates catalogs, routes JSON-RPC requests and publishes progress events. vscode_mcp.py supplies workspace discovery, file operations, git and subprocess tools. The workspace path checks do not sandbox child processes.

The standalone Electron app is a separate implementation: snapgent-app/src/main.js and preload.js expose a restricted runtime interface to supported providers; bridge-core.js talks to the bundled MCP subprocess; extension code is duplicated. It must be verified separately.

## Execution path
Chatbot response → provider adapter → parse command → main.js guards → background.js → WebSocket → bridge.py → MCP tools/call → local tool → result → provider feedback → next response.

## Constraints and hotspots
Provider DOM changes are unavoidable; preserve provider API contracts. main.js combines UI and state orchestration (~6k lines); start by extracting pure transition logic rather than replacing it wholesale. Serial model feedback rounds dominate likely latency, but measure before claiming improvements. Replay cache is not durable exactly-once delivery. Stop can abandon a wait without cancelling underlying execution. Workspace skills are prompt-driven, not executable workflow state.

Source: pinned upstream commit; static review only. No live browser behavior or runtime measurements asserted.
