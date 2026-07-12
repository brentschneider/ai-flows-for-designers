# Guide 05: Build AI-Powered Artifacts ("Claudeception")

> Have Claude build you a working app that *contains its own Claude*: a prototype that calls the AI from inside itself, remembers data between sessions, and can even use your connected tools. Functioning AI product demos, no engineering ticket required.

**Difficulty:** Intermediate · **Time:** 45–60 min for your first app
**You'll need:** Claude on claude.ai with Artifacts enabled (Settings → Features); no code knowledge required

---

## What you'll be able to do

Artifacts are interactive apps Claude builds in the chat sidebar. The unlock this guide covers: those artifacts can make calls back to Claude's API from inside themselves, with no API key needed; the platform handles it. That means the thing Claude builds for you can itself be an AI product:

- a **critique companion** where you paste a design rationale and it interrogates it from three stakeholder perspectives
- a **research interview simulator** that plays a configurable user persona for practicing interview technique
- a **copy explorer** that generates twelve tonal variants of any UI string, with a voice-consistency judge
- a **workshop tool** your whole team opens, where AI clusters live input, with persistent storage so data survives between sessions

For a designer, this changes what "prototype" means. Instead of faking AI behavior in a click-through, you hand stakeholders a link to the real interaction and watch how it actually feels.

## Before you start

Turn on Artifacts in **Settings → Features** on claude.ai. That's genuinely the whole setup. If you plan to share the artifact, know your audience will need Claude accounts to use AI-powered features, and their usage draws on their own plan limits.

## Step-by-step

1. **Describe the product, not the code.** Prompt: *"Build me an artifact: a design critique tool. I paste a screenshot description and my design rationale; it responds with critique from three perspectives: a skeptical engineer, a PM focused on scope, and an accessibility specialist. Each critique should end with one question I should be able to answer."* Claude writes and renders the app live.
2. **Use it immediately, then art-direct.** The first version will work and look adequate. Now do your job: *"Make the three critiques visually distinct personas. Add a severity indicator. The tone of the engineer is too hostile; make it firm but collegial."* Iterating on a working app is the same muscle as critiquing a junior's build.
3. **Shape the AI behavior inside the app.** The artifact contains prompts of its own: the instructions it sends to Claude when a user clicks something. Ask to see and tune them: *"Show me the prompt the app sends for the accessibility critique. Rewrite it to cite specific WCAG criteria when relevant."* This is prompt design as a design material, and it's where the craft lives.
4. **Add memory if the app needs it.** Artifacts can persist data between sessions with simple key-value storage: *"Save each critique session so I can revisit past ones from a history list."* For shared tools, data can also be made visible across all users of the artifact. If you do that, the app should tell users their input is shared.
5. **Stress-test the interaction.** Feed it bad input, vague input, hostile input. The failure behavior of an AI feature *is* part of its design: decide what the app does when the AI response is unhelpful, and have Claude build that handling in.
6. **Publish and share.** Use the artifact's share/publish control to get a link. Watch someone use it without you narrating. That observation session is the real deliverable: you're now doing user research on an AI interaction you designed this morning.

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

**The AI features do nothing when shared.** Viewers need to be logged into Claude. Check with your recipient before assuming the artifact is broken.

**Responses inside the app are inconsistent.** The app's internal prompt is underspecified. Ask Claude to show it to you, then tighten it the way you'd tighten any spec: with format requirements and an example of ideal output.

**Data disappears between sessions.** Persistent storage has to be built in deliberately; ask for it explicitly (step 4). Data in ordinary app state resets when the artifact reloads.

**The app forgets earlier conversation turns.** Each internal AI call starts fresh; the app must resend relevant history. Ask Claude to *"include the running conversation history in each request."*

## Going further

The compounding move: combine artifacts with custom skills (reusable instruction files that encode your voice and formats). Skills define how Claude behaves; artifacts wrap that behavior in an interface anyone on your team can use without knowing prompts exist. That pairing of encoded expertise and built interface is a design team quietly shipping its own internal tools. Artifacts can even call the same connectors you use (like Figma), which opens the door to purpose-built mini-tools over your actual design data.
