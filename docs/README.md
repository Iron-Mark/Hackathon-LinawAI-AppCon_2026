# Linaw AI

**Clarify the format. Preserve the meaning.**

Linaw AI is an adaptive information platform: a web app and Chrome companion that presents important messages the way you prefer—detail, wording, and delivery—then runs a **Meaning Check** so critical facts, conditions, and relationships are less likely to change silently.

The public site is [https://linawai.tech](https://linawai.tech). The privacy policy is [https://linawai.tech/privacy](https://linawai.tech/privacy). AppCon 2026 ended on 25 September 2026. This repository is the product that continues after that contest.

This repository is a single Next.js app at the root. `POST /api/adapt` tries Gemini, then the OpenAI-compatible gateway, then the offline fixture. A successful model answer is cached in server memory. The extension asks `https://linawai.tech` first, then the previous Vercel address, then a local app. If every origin is down, the panel uses the in-browser fixture and does not replace the page. No model key is committed to git. Do not add other API routes.

## Team and assigned theme

Lumière, team code TEAM-011, built Linaw. The portal roster, the assigned theme, the 100-point rubric, and the final leaderboard are in [`docs/team.md`](./team.md). Lumière placed 7th with 73.3 points, and scored 24/30 in Technology, the strongest technical score on the board.

## Competition brief

The brief asks for an Adaptive Information Communication System: people prefer detailed text, listening, or concise conclusions, and rewriting by hand is slow and still drops meaning. Linaw answers that with preferences, not diagnosis. Onboarding sets detail (Full vs Key Points), wording (original vs Plain Language), and delivery (Read vs Listen). Meaning Check and Show original (one action away) keep important meaning consistent across formats. One paste on the web or one selection in the extension produces the other views, so the sender does not rewrite the notice three times. There is no cognitive profile, diagnosis, or accessibility mode.

## Product context

Canonical product decisions live in:

[`docs/LINAW_AI_INITIAL-DRAFT_PROJECT_CONTEXT.md`](./LINAW_AI_INITIAL-DRAFT_PROJECT_CONTEXT.md)

That file wins on product questions. For what this MVP slice implements, follow `spec/` (start at [`spec/AGENTS.md`](../spec/AGENTS.md), then [`spec/spec-01-initial_scaffold/README.md`](../spec/spec-01-initial_scaffold/README.md)).

Research notes under [`docs/A1-AppCon-Research/`](./A1-AppCon-Research/) are an archive of the contest. The event is over. Do not treat that folder as the current plan.

AI development workflow (tracks, ports, hooks, campus-pilot sample): [`docs/ai-workflow.md`](./ai-workflow.md).

## Prerequisites

- Node.js 20+ (LTS recommended)
- npm

## Run the web app

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Useful scripts:

| Script | Purpose |
| --- | --- |
| `npm run dev` | Next.js dev server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run test` | Vitest, including the fidelity eval corpus (24 sources; fixture/deterministic checks, not a hosted NLI score) |
| `npm run typecheck` | TypeScript check |

## Using the app

Onboarding finishes by taking you to `/read`. Preferences stay on your device (local storage). With no model key, Meaning Check runs against the fixture.

## Do not turn Gemini on

`POST /api/adapt` already exists. It stays on the fixture until `GEMINI_API_KEY` or the gateway env in [`.env.example`](../.env.example) is set. A live call spends tokens. Do not add a key, and do not add any other `app/api` route. Details: [`spec/spec-02-gemini-adapt`](../spec/spec-02-gemini-adapt/).

## Specs

- Spec manager (index and rules): [`spec/AGENTS.md`](../spec/AGENTS.md)
- Current phase: [`spec/spec-01-initial_scaffold/`](../spec/spec-01-initial_scaffold/)
- Gemini adapter, off unless a key is set: [`spec/spec-02-gemini-adapt/`](../spec/spec-02-gemini-adapt/)

Do not put loose notes or code in `spec/` itself—only numbered phase folders.

## Extension

Build from the **repository root** (after `npm install`):

```bash
node extension/build.mjs
```

Then in Chrome: open `chrome://extensions` → enable Developer mode → **Load unpacked** → select the `extension/` folder (the one with `manifest.json`).

Auto-Clarify stays off until you turn it on. The first time the panel would send a notice, it shows what is sent and waits for **Agree and clarify**. A store listing may be in review. Load unpacked still works. More detail: [`extension/README.md`](../extension/README.md).

## Development sample

Local fixture work uses a campus-pilot source with a deadline, two groups, two times, and a written-approval exception. Seeded bad adaptation: “All members arrive at 8:30 AM.” Full text and ownership: [`spec/spec-01-initial_scaffold/05-client-port.md`](../spec/spec-01-initial_scaffold/05-client-port.md).

## Extending the app

- Prefer a numbered phase under `spec/` (see [`spec/AGENTS.md`](../spec/AGENTS.md)) before large feature work.
- UI should call `adapt()` from `lib/adapt` and the preference store—never import `fixture.ts` or `http.ts` directly.
- `lib/adapt/http.ts` is already the client: it posts to `/api/adapt` and falls back to the fixture. `lib/adapt/index.ts` re-exports that client. Domain Zod types stay stable. Do not add other API routes; keep the model off unless the team sets a key (see **Do not turn Gemini on**).
- Parallel tracks own fixed directories listed in [`docs/AGENTS.md`](./AGENTS.md).

## What is connected

Server status is listed in the app at [`/todo`](http://localhost:3000/todo) (link: “What is connected”) and in [`spec/spec-01-initial_scaffold/09-backend-todo.md`](../spec/spec-01-initial_scaffold/09-backend-todo.md).

## For coding agents

If you are using a coding agent in this repo, start with:

- [`docs/AGENTS.md`](./AGENTS.md) — agent rules, track ownership, non-negotiables
- [`spec/AGENTS.md`](../spec/AGENTS.md) — before any work under `spec/`
