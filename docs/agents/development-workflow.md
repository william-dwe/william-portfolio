# Development Workflow

End-to-end flow for agent-assisted development in this repo, integrating GitHub Issues, pi skills, and the pi-kanban dashboard.

## Overview

```
GitHub Issues          pi session (TUI)           pi-kanban / Plannotator (browser)
─────────────         ────────────────           ─────────────────────────────────
bugs/requests  ─┐
                ├──→  /triage                    (not involved yet)
self-created   ─┘         │
                          ▼
                     /grill-with-docs            (not involved yet)
                          │
                    ┌─────┴─────┐
                    │           │
               SMALL WORK   LARGE WORK
                    │           │
                    ▼           ▼
              /plannotator   /to-prd → plan.md ──→ bind_plan → renders plan
                    │           │
                    │           ▼
                    │      /to-issues → GH Issues (issues visible in dashboard)
                    │           │
                    │      ─────┼──────────
                    │      │    │    │    │
                    │      ▼    ▼    ▼    ▼
                    │    /plannotator per issue ──→ pinned sessions, todos, cost
                    │           │
                    ▼           ▼
              approve in     approve in
              browser UI     browser UI
                    │           │
                    ▼           ▼
              agent executes  agent executes
                    │           │
                    ▼           ▼
               commit + PR ──────────────────────→ session completes
```

## Phases

### 1. Intake — GitHub Issues

Work enters via GitHub Issues (`gh` CLI). External bug reports and feature requests land with `needs-triage`. Self-created issues from `/to-issues` arrive pre-labeled `ready-for-agent`.

See `docs/agents/issue-tracker.md` and `docs/agents/triage-labels.md`.

### 2. Triage — `/triage`

Process incoming issues. Outcome: each issue gets one of `ready-for-agent`, `ready-for-human`, `needs-info`, or `wontfix`. Only triage issues you didn't create — issues from `/to-issues` skip this step.

### 3. Design — `/grill-with-docs`

Pick a `ready-for-agent` issue. Sharpen it through interview. This phase updates `CONTEXT.md` and may produce ADRs. Stay in one context window through steps 3–5.

### 4. Decide: small or large work?

After grilling, ask: **can this be done in one context window?**

| Signal | Path |
|---|---|
| One feature, one area of code, < ~2 hours of agent work | **Small** — go to step 5a |
| Multiple files/systems, needs parallel sessions, multi-day | **Large** — go to step 5b |
| Trivial (one-file edit, config change) | **Skip Plannotator** — just do it directly |

### 5a. Small work — `/plannotator` directly

Toggle plan mode (`/plannotator` or `Ctrl+Alt+P`). The agent:

1. Explores the codebase (read-only)
2. Writes a markdown plan with checkboxes
3. Submits for review — browser UI opens
4. You **approve**, **deny with annotations**, or **approve with notes**
5. On approval, agent executes with full tool access
6. Progress tracked via `[DONE:n]` markers

No PRD, no issues, no session splitting. The plan IS the spec.

### 5b. Large work — `/to-prd` → `/to-issues` → Plannotator per issue

#### 5b-i. Plan — `/to-prd` + `bind_plan`

Turn the refined idea into a PRD markdown file. Then bind it to the session:

```
# agent writes plan.md, then:
bind_plan("plan.md")
```

The plan is now visible in the pi-kanban dashboard under the current session. Use `/kanban session open` to view it in the browser.

#### 5b-ii. Split — `/to-issues`

Break the PRD into independently-implementable GitHub Issues. Each one is self-contained enough for a fresh agent session.

#### 5b-iii. Implement — fresh sessions with Plannotator

Start a **new pi session per issue**. In each session:

1. Pin it: `/kanban session pin` (or `/kanban session sticky-pin` for long-running work)
2. Toggle `/plannotator` — agent plans against the specific issue
3. Review and approve in browser UI
4. Agent executes; progress shows as kanban columns if `rpiv-todo` is installed
5. Subagents (if spawned) appear nested under the parent session
6. Commit and PR closes the GitHub Issue

### 6. Observe — pi-kanban dashboard

The dashboard (`/kanban open web`) provides:

- **Session list** — all active/recent sessions, pinned sessions at top
- **Plan view** — the bound PRD rendered in the browser
- **Plannotator progress** — checklist completion during execution
- **Todo columns** — task states from `rpiv-todo` shown as kanban
- **Subagents** — nested sessions from `pi-subagents`
- **Token/cost** — burn rate and total cost per session

## Command reference

### pi-kanban

| Command | When to use |
|---|---|
| `/kanban start` | Beginning of a work day — starts the dashboard server |
| `/kanban open web` | Open dashboard in browser |
| `/kanban session pin` | Pin current implementation session for easy access |
| `/kanban session sticky-pin` | Pin that survives server restarts (long-running work) |
| `/kanban session unpin` | Done with this session |
| `/kanban session link-doc <file>` | Attach a doc to view in dashboard |
| `bind_plan("plan.md")` | Agent tool — attach plan after writing it |
| `/kanban stop` | End of work day |

### Plannotator

| Command | When to use |
|---|---|
| `/plannotator` | Toggle plan mode (agent plans before executing) |
| `Ctrl+Alt+P` | Same as above (keyboard shortcut) |
| `pi --plan` | Start pi already in plan mode |
| `/plannotator-review` | Review current git changes in browser diff UI |
| `/plannotator-annotate <file>` | Annotate any markdown file in browser |
| `/plannotator-last` | Annotate the agent's last response |

## Companion extensions

```bash
pi install npm:pi-kanban                  # session dashboard (already installed)
pi install npm:@plannotator/pi-extension  # plan mode + review UI (already installed)
pi install npm:pi-subagents               # subagent spawning
pi install npm:@juicesharp/rpiv-todo      # task tracking → kanban columns
```

## When to skip the ceremony

- **Skip Plannotator** — trivial or high-confidence tasks where you'd rubber-stamp the plan anyway
- **Skip pi-kanban** — single-session work where you don't need async observability
- **Skip `/to-prd` + `/to-issues`** — work that fits in one context window (use Plannotator directly)
- **Skip everything** — one-line fixes, config changes, favicon swaps
