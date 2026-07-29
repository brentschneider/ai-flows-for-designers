# Guide 06: Build AI-Powered Artifacts ("Claudeception")

> Have Claude build you a working app that *contains its own Claude*: a prototype that calls the AI from inside itself, remembers data between sessions, and can even use your connected tools. Functioning AI product demos, no engineering required.

**Difficulty:** Intermediate · **Time:** 20–30 min for your first app

**You'll need:** Claude.ai with **Code execution and file creation** enabled; no coding knowledge required. Persistent storage and connected tools need a Pro, Max, Team, or Enterprise plan.

---

## What changes

Artifacts are interactive apps Claude builds in the chat sidebar. 

The unlock this guide covers: those artifacts can make calls back to Claude's API from inside themselves, with no API key needed; the platform handles it. That means the thing Claude builds for you can itself be an AI product:

- a **critique companion** where you paste a design rationale and it interrogates it from three stakeholder perspectives
- a **research interview simulator** that plays a configurable user persona for practicing interview technique
- a **copy explorer** that generates twelve tonal variants of any UI string, with a voice-consistency judge
- a **workshop tool** your whole team opens, where AI clusters live input, with persistent storage so data survives between sessions

For a designer, this changes what "prototype" means. Instead of faking AI behavior in a click-through, you hand stakeholders a link to the real interaction and observe how it actually feels.

## What you need

Enable it once: **Settings → Capabilities**, toggle **Code execution and file creation** on. (On a Team or Enterprise seat, an org Owner enables this org-wide under Organization settings → Capabilities.) 

That's the whole setup — AI-powered behavior, memory, and connectors all run through the same toggle; you don't enable them separately.

Two things worth knowing before you build:

- **Viewers don't need an account to try the artifact.** Anyone with a published link can view and interact with basic functionality. They're only prompted to sign in for the AI-powered parts — at which point usage draws on *their* plan, not yours.
- **Memory and connectors are plan-gated.** Persistent storage and MCP connections require Pro, Max, Team, or Enterprise. If you're building for a Free-plan audience, the AI conversation will work but nothing will be remembered between visits.

## First run

1. **Describe the product, not the code.** Prompt: *"Build me an artifact: a design critique tool. I paste a screenshot description and my design rationale; it responds with critique from three perspectives: a skeptical engineer, a PM focused on scope, and an accessibility specialist. Each critique should end with one question I should be able to answer."* Claude writes and renders the app live.
2. **Use it immediately, then art-direct.** The first version will work and look adequate. Now do your job: *"Make the three critiques visually distinct personas. Add a severity indicator. The tone of the engineer is too hostile; make it firm but collegial."* Iterating on a working app is the same muscle as critiquing a junior's build.
3. **Shape the AI behavior inside the app.** The artifact contains prompts of its own: the instructions it sends to Claude when a user clicks something. Ask to see and tune them: *"Show me the prompt the app sends for the accessibility critique. Rewrite it to cite specific WCAG criteria when relevant."* This is prompt design as a design material, and it's where the craft lives.
4. **Publish early if the app needs memory.** Persistent storage only activates on a published artifact — it silently no-ops during testing. If step 6 is memory-dependent, publish now, then keep iterating on the published version: *"Save each critique session so I can revisit past ones from a history list."* Storage holds up to 20 MB of text per artifact (no images or files). Choose personal storage (each user sees only their own data) or shared storage (everyone sees the same data, like a leaderboard) — if you use shared storage, the app must tell users their input is visible to others; Claude shows them a confirmation the first time they interact.
5. **Stress-test the interaction.** Feed it bad input, vague input, hostile input. The failure behavior of an AI feature *is* part of its design: decide what the app does when the AI response is unhelpful, and have Claude build that handling in.
6. **Publish or share, and watch someone use it.** On Free, Pro, or Max, click **Publish** — this makes the artifact publicly viewable at a link, no sign-in required to try it. On Team or Enterprise, the control is **Share** instead: it makes the artifact available inside your org only, and it can't be made public on those plans. Either way, watch someone use it without you narrating. That observation session is the real deliverable: you're now doing user research on an AI interaction you designed this morning.

## Example prompts

```
Build an artifact: "interview practice partner." I configure a
persona (role, attitude, talkativeness), then conduct a user
interview by chat. It stays in character. Afterward, a "debrief"
button critiques my questions: leading questions, missed
follow-ups, talk-time ratio.
```

```
Build a UX-copy workbench: I enter a string and context, it
returns variants across a formality x brevity grid, and flags any
variant that drifts from the voice rules I've saved in the app's
settings.
```

```
The response takes a while. Add a thoughtful loading state, and
stream partial results if possible. Empty states and errors
should feel designed, not default.
```

## Troubleshooting

**The AI features do nothing when shared.** Viewers don't need an account to open the artifact, but they do need to sign into Claude for anything AI-powered — that's the point where they're prompted. If someone reports the whole thing is dead on arrival, confirm they got to the sign-in prompt at all rather than assuming the artifact is broken.

**Responses inside the app are inconsistent.** The app's internal prompt is underspecified. Ask Claude to show it to you, then tighten it the way you'd tighten any spec: with format requirements and an example of ideal output.

**Data disappears between sessions.** Two likely causes: the artifact isn't published yet (storage only works post-publish — see step 4), or you unpublished it. Unpublishing an artifact permanently deletes all its stored data, personal and shared, and you can't republish that same artifact afterward — you'd start a new one. Data held only in ordinary app state, not storage, resets on every reload regardless.

**The app forgets earlier conversation turns.** Each internal AI call starts fresh; the app must resend relevant history. Ask Claude to *"include the running conversation history in each request."*

## Where this takes you

The compounding move: combine artifacts with custom skills (reusable instruction files that encode your voice and formats). Skills define how Claude behaves; artifacts wrap that behavior in an interface anyone on your team can use without knowing prompts exist. That pairing of encoded expertise and built interface is a design team quietly shipping its own internal tools. Artifacts can also connect to external tools via MCP — Anthropic's own integrations (Asana, Google Calendar, Slack) plus any custom MCP server you've set up — which opens the door to purpose-built mini-tools over your actual data. If your team runs a Figma MCP connector, that's fair game too: the artifact will prompt each user to authorize it on first use.
