# Lumière

Linaw was built by **Lumière**, AppCon 2026 team code **TEAM-011**. The contest assigned the theme on 23 September 2026 at 10:02 AM. The contest ended on 25 September 2026. The same team still runs the app at [https://linawai.tech](https://linawai.tech).

OTis organized AppCon. OTis does not run Linaw and does not receive notices.

The public About page lists this roster: [https://linawai.tech/about](https://linawai.tech/about).

## Roster

Membership was set by the organizers. The Team Portal roster is read-only.

| Name | Role | GitHub | Commits | Lines added | Lines removed |
| --- | --- | --- | --- | --- | --- |
| Mark Angelo D. Siazon | Team leader, multi-role | [Iron-Mark](https://github.com/Iron-Mark) | 48 | 45,121 | 14,973 |
| Alexander Oro | Developer, Gemini and Meaning Check | [bhimlex13](https://github.com/bhimlex13) | 13 | 10,043 | 104 |
| Salvador Vincent Javier | Research and UI/UX | [slvdrvncntjvr](https://github.com/slvdrvncntjvr) | 13 | 2,494 | 568 |
| John Kurt M. Tapada | Browser extension | [choookieee-dev](https://github.com/choookieee-dev) | 6 | 1,846 | 596 |
| Franchezca Natividad Banayad | Logo, pitch deck, web app | [chezca-v](https://github.com/chezca-v) | 4 | 258 | 112 |

Commits, lines added, and lines removed are GitHub’s contributor stats for [Iron-Mark/Hackathon-LinawAI-AppCon_2026](https://github.com/Iron-Mark/Hackathon-LinawAI-AppCon_2026), read on 29 September 2026. GitHub assigns those lines to the author of the commit. The totals include lockfiles, images, and data files, not only handwritten product code. Mark has the most commits, the most lines added, and the most lines removed. GitHub profile names are shorter or different. Use the names in this table.

Two kinds of facts are kept separate below. **Team account** is what Lumière reported and is not a commit subject. **Commit record** is what that person’s commits and the files in them show.

Every commit by these five people in this history is dated 23 or 24 September 2026, inside the contest. Awarding was 25 September 2026. ImgBotApp also has 4 commits on the repository. That account is a bot, not a member of Lumière.

## How the work landed

The histories overlap. Read them in this order so one person’s lines are not counted as the whole feature.

1. **23 September.** Alexander scaffolds the early app under `web/`, the adapt route, Gemini, and the DeBERTa check, then adds the local NLI service. John Kurt sets up the extension: Manifest V3, storage, content script, background worker, and the overlay. Mark makes the initial commit, folds that adapt pipeline into the single-repo app, and builds the reading scaffold, landing, onboarding, and fidelity checks. Salvador integrates the landing sections into the main app.
2. **24 September.** Alexander adds the NLI benchmark, method notes, and reviewed tuning candidates. John Kurt fixes the overlay color, text, and UI. Salvador spends the day on the extension side panel. Franchezca adds the logo files, the MIT license, and the README screens. Mark ships the live model path, the provider order, page reading in the extension, the Taglish fidelity pass, the screenshots, and the submission commit. He also brings Alexander’s NLI verifier into the single repo without restoring the old `web/` app.

## What each person built

### Mark Angelo D. Siazon

Team leader. Multi-role. GitHub [Iron-Mark](https://github.com/Iron-Mark). 48 commits, 45,121 lines added, 14,973 lines removed. Span: 23–24 September 2026.

**Team account.** The idea started in the team brainstorm. The team approved it, then refined it. He started the web app design, helped build the extension, connected the fallback so a notice still gets a clarification when Gemini does not answer, and managed the project.

**Commit record.** On 23 September his subjects are the initial commit, folding the adapt pipeline into one repo, the reading scaffold with landing, onboarding, and Ray, the landing story, deterministic fidelity checks, the app shell, and the branch model. On 24 September his subjects are the reading views (glance, focus, saved notes), the live model path, memory cache, prompts and Taglish wording, the model provider order, a reading path that posts without waiting on Gemini, extension page reading and reading comfort, wiring `NLI_ENDPOINT`, the 20-notice live pilot script, screenshots, the submission README, and `FINAL COMMIT: Appcon 2026`.

The files in those commits cover `app/`, `components/landing`, `components/onboarding`, `components/read`, `components/sindi`, `lib/adapt`, `lib/fidelity`, `evals/`, `spec/`, `docs/`, and parts of `extension/`. The extension files under his name are the later layer: origins, page reading, and reading comfort, on top of John Kurt’s setup and beside Salvador’s side panel. The NLI files under his name are the copy he brought in from the evals branch. Alexander’s commits are the ones that created that service.

### Alexander Oro

Developer. GitHub [bhimlex13](https://github.com/bhimlex13). 13 commits, 10,043 lines added, 104 lines removed. Span: 23–24 September 2026. Eleven commit subjects are unique. Two subjects were each used twice: “Add reviewed NLI tuning candidates for first two categories” and “Document NLI tuning data methodology.”

**Team account.** He focused on Gemini and on training the meaning-check model the team used.

**Commit record.** On 23 September, in order: scaffold the Next.js app, AI SDK, Zod, and `/api/adapt` under `web/`; align schemas and set `maxDuration`; integrate non-blocking DeBERTa verification; upgrade the route to `gemini-3.8-flash`; add a preference-aware fidelity baseline; make the verifier follow `NLI_ENDPOINT`; add the local FastAPI service in `nli-service/app.py`. On 24 September: the dev benchmark and evaluation tooling, the tuning method notes, and the reviewed tuning candidates in `nli-service/data/tuning/`.

The largest single addition in his commits is `web/package-lock.json`, about 6,899 lines. The product work in the same commits is the adapt route, Gemini, the DeBERTa check, the eval runner, and the tuning set. The commit record shows a checker, a tuning set, and method notes. It does not show a finished training log.

### Salvador Vincent Javier

Research and UI/UX. GitHub [slvdrvncntjvr](https://github.com/slvdrvncntjvr). 13 commits, 2,494 lines added, 568 lines removed. Span: 23–24 September 2026. One commit is on 23 September. The other twelve are on 24 September.

**Team account.** He focused on the paper, the research, the references, and UI/UX. Those paper and reference files are not in this repository, so they do not appear in the commit stats.

**Commit record.** The 23 September commit is “Integrate landing page sections into the main app.” The files are the landing hero, how it works, features, playground, verification, FAQ, navbar, and footer. The 24 September commits are all extension interface work: stabilize the content script and keep Taglish preferences, explain offline mode, keep the clarified words on the page, a calmer panel layout, the context menu, side-panel header and footer, contrast, button-like controls, and tagging pending text with its origin. He also ignores the rebuilt extension zip so it is not committed on every build.

### John Kurt M. Tapada

Browser extension. GitHub [choookieee-dev](https://github.com/choookieee-dev). 6 commits, 1,846 lines added, 596 lines removed. Span: 23–24 September 2026.

**Commit record.** All six subjects are `feat(extension)`. On 23 September: Manifest V3 and the storage layer; the content script and background worker; the companion overlay matched to the design. On 24 September: UI, color, and text fixes. Every file in those commits is under `extension/`. Salvador’s side-panel commits and Mark’s page-reading commits come after this setup and change the same extension. John’s subjects do not leave `extension/`.

### Franchezca Natividad Banayad

Logo, pitch deck, and web app. GitHub [chezca-v](https://github.com/chezca-v). 4 commits, 258 lines added, 112 lines removed. All four are on 24 September 2026.

**Team account.** She designed the logo and the pitch deck, and helped on the web app. The pitch deck is not in this repository.

**Commit record.** In commit order: add `public/sunray.png`; add the MIT `LICENSE`; revise the README for product screenshots and demo links; replace logo text with the image in the nav and sidebar. The image files in those commits are `public/sunray.png`, `public/linaw-logo-transparent.png`, and `public/linaw-logo-white.png`. The web-app files are landing sections, `components/shell/AppShell.tsx`, `components/shell/AppSidebar.tsx`, and `components/sindi/SunMark.tsx`.

## Assigned theme

**Adaptive Information Communication System.** Status at assignment: Assigned. The theme cannot be redrawn.

Develop a software product or tool that addresses reception disparities caused by cognitive characteristics. People absorb information differently: some prefer detailed text, some listening, and others concise conclusions. Converting information manually into multiple formats consumes time and can still lead to misunderstandings and disconnected organizational knowledge.

**Problem.** A single communication format does not work equally well for everyone. Information may be ignored or misunderstood when its presentation does not match the recipient's preferred way of processing information. Develop a system that adapts information into appropriate formats while preserving its intended meaning.

**Constraints.**

- Important meaning and context should remain consistent across formats.
- The system should support different information-consumption preferences.
- Media conversion should reduce rather than increase the sender's workload.

Linaw answers this with reader preferences, not a diagnosis of the person. The product canon is [`LINAW_AI_INITIAL-DRAFT_PROJECT_CONTEXT.md`](./LINAW_AI_INITIAL-DRAFT_PROJECT_CONTEXT.md).

## How it was judged

Event-wide rubric. Category totals sum to 100.

| Category | Points | Criterion | Points |
| --- | --- | --- | --- |
| Product | 35 | Relevance | 5 |
| | | Impact & Value | 10 |
| | | UI/UX Design | 10 |
| | | Maintainability and Sustainability | 10 |
| Technology | 30 | Functionality | 15 |
| | | Technical Innovation | 15 |
| Creativity | 20 | Originality | 10 |
| | | Innovation in Design | 10 |
| Presentation | 15 | Clarity & Storytelling | 10 |
| | | Demo & Delivery | 5 |

Pre-event notes on that rubric live in [`A1-AppCon-Research/`](./A1-AppCon-Research/). That folder is an archive. It is not this roster, and it is not the plan for Linaw now.

## Final leaderboard

Official results for AppCon Online Hackathon 2026: AI Matsuri. Lumière, Team #11, project **LINAW — Layered Intelligence for Narrative Adaptation & Watching**, ranked **#7** with **73.3** points. In the Technology category, Lumière scored **24/30**, the strongest technical score on the board. The next highest Technology score is Sisa PH at 23.3/30. The results screen showed the name as “LumièreYou” because it appended “You” to the team name. The team name is Lumière.

| Rank | Team | Code | Project | Product | Technology | Creativity | Presentation | Score |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| #1 Grand Winner | 4 Brothers and a Wedding | Team #6 | Kith | 27.7/35 | 21.7/30 | 16/20 | 11.7/15 | 77 |
| #2 | Team-03 | Team #3 | Himmel — To live is to be known and remembered by others. | 28.7/35 | 19/30 | 17.7/20 | 11.3/15 | 76.7 |
| #3 Best in Pitching | Cheezcribe | Team #8 | Paperazzi | 28/35 | 20/30 | 15.7/20 | 12.3/15 | 76 |
| #4 | Team-05 | Team #5 | Sisa PH | 24.7/35 | 23.3/30 | 16/20 | 12/15 | 76 |
| #5 | Team Trie Code | Team #4 | KainTabe — AI-Powered Food Rescue Before the Clock Runs Out | 26.7/35 | 20/30 | 16/20 | 11.7/15 | 74.3 |
| #6 | 2Big | Team #2 | WAVE — Water Adaptation & Vulnerability Engine | 26.3/35 | 20.3/30 | 15.3/20 | 11.7/15 | 73.7 |
| #7 | Lumière | Team #11 | LINAW — Layered Intelligence for Narrative Adaptation & Watching | 24.7/35 | 24/30 | 13.7/20 | 11/15 | 73.3 |
| #8 | Seventh Stack | Team #7 | Freshly | 26.7/35 | 21/30 | 15.7/20 | 9.7/15 | 73 |
| #9 | Code Titans | Team #10 | SpecMatch | 24.3/35 | 19.3/30 | 14/20 | 10.3/15 | 68 |
| #10 | Appsembly | Team #9 | LifeSim.ai | 24.3/35 | 20.7/30 | 15/20 | 7.7/15 | 67.7 |
| #11 | CodeBlooded | Team #1 | Wayfarer: Never a stranger on any road | 24.7/35 | 17/30 | 14.3/20 | 10.7/15 | 66.7 |

Rosters published with the official winners:

**4 Brothers and a Wedding (Kith, Team #6).** Hannah Moriah L. Tayzon, multi role. Ewan Rafael A. Escano, developer. Julius Noel Miranda, developer. Kenneth Gonzales, UI/UX. Mark Jason U. Manlapaz, product designer.

**Cheezcribe (Paperazzi, Team #8).** Vince Anjo Villar, multi role. Paul Henry M. Dacalan, developer. Adriel Magalona, developer. Ashley Nicole S. Fullero, UI/UX. Johna Mae Baligod, product designer.
