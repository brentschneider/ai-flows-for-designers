# Twelve AI Workflows for Designers

Working alongside designers daily, I kept seeing the same pattern: the struggle wasn't with AI tools, they struggled to see their value in the AI workflow. 

These guides are built around a simple idea: you are the taste. AI handles the mechanics; designers bring the judgment.

Don't know how to move past chat and into workflows that touch real tools: live Figma files, GitHub repos, workshop boards, your calendar, inbox, slack, and working prototypes?

**Follow the numbers, or follow your deadline.** The numbering is a learning path (Foundations first, Scaling last), but each guide stands entirely on its own. If something's due this week, jump straight to its guide. Only have twenty minutes today? Do Guide 02; you'll finish with a real file.

**Every guide has the same shape.** What changes. What you need. First run. Copy-paste prompts. Troubleshooting. Where this takes you.

**Claude is the reference implementation, not a requirement.** Every setup walkthrough uses Claude's actual interface, so you can follow the steps exactly. But the Figma guides run on the open Model Context Protocol (MCP) standard, so those prompts work verbatim in any MCP-capable client. 

Where a workflow transfers, the guide ends with a short portability section; where it doesn't, the workflow depends on Claude-specific features.

## The twelve guides

### Foundations: set up your AI practice

| # | Guide | What you get |
|---|-------|--------------|
| 01 | [Memory and past-chat search](foundations/memory-and-past-chats/) <span class="pill pill-starter">Starter</span> | Continuity: Claude that knows your projects and can retrieve past decisions |
| 02 | [Claude's computer: real files](foundations/claudes-computer-real-files/) <span class="pill pill-starter">Starter</span> | Finished Word/Excel/PowerPoint/PDF deliverables and real data analysis |
| 03 | [Custom skills: your voice](foundations/custom-skills-your-voice/) <span class="pill pill-intermediate">Intermediate</span> | Claude that writes in your voice and follows your team's formats |
| 04 | [Orchestrate your work stack](foundations/orchestrate-your-work-stack/) <span class="pill pill-starter">Starter</span> | One prompt spanning email, calendar, files, and design tools |

### Building: make things with AI

| # | Guide | What you get |
|---|-------|--------------|
| 05 | [FigJam workshop synthesis](building/figjam-workshop-synthesis/) <span class="pill pill-intermediate">Intermediate</span> | Stickies clustered, themed, and written back onto the board automatically |
| 06 | [AI-powered artifacts ("Claudeception")](building/ai-powered-artifacts-claudeception/) <span class="pill pill-intermediate">Intermediate</span> | Working AI prototypes: apps that contain their own Claude |
| 07 | [Build Figma Slides decks](building/build-figma-slides-decks/) <span class="pill pill-intermediate">Intermediate</span> | First-draft decks built directly in Figma Slides, ready for your polish |

### Scaling: systemize, audit, automate

| # | Guide | What you get |
|---|-------|--------------|
| 08 | [Accessibility lint against WCAG 2.2](scaling/accessibility-lint-figma-wcag/) <span class="pill pill-intermediate">Intermediate</span> | Contrast, target-size, and state audits of the design file, before handoff |
| 09 | [Figma version archaeology](scaling/figma-version-archaeology/) <span class="pill pill-intermediate">Intermediate</span> | Diffs, blame, and changelogs for design files: who changed what, when |
| 10 | [Design–code parity audit](scaling/design-code-parity-audit/) <span class="pill pill-advanced">Advanced</span> | Evidence-based drift reports: does production match the design system? |
| 11 | [Design token round-trip: Figma ↔ GitHub](scaling/design-token-round-trip-figma-github/) <span class="pill pill-advanced">Advanced</span> | A working token sync pipeline between design and code |
| 12 | [Run JavaScript in your Figma file](scaling/run-javascript-in-your-figma-file/) <span class="pill pill-advanced">Advanced</span> | Batch canvas operations (renames, variable generation, restructuring) in one pass |

## What these guides assume

Almost nothing.

The walkthroughs use Claude as the reference implementation — it's what the steps follow. Gemini and ChatGPT cover the same ground for most workflows; where something is Claude-specific, the guide says so. Check each platform's current plan limits before you start. (caps and connector availability change often.)

No coding ability is required; where code runs, the AI writes and runs it. The Figma guides (06–12) need edit access to a Figma file and an MCP connector, and each includes its own connector setup. 

- Claude: claude.ai
- Gemini: gemini.google.com
- ChatGPT: chatgpt.com

A note on Figma MCP servers: the official server reads design context. Community servers add write access, meaning a connected server can do anything you can do in that file. And if you work inside an organization, check your tooling policy first: connecting an unapproved service to work files is a call your security team should be part of, not one you make alone.


## Suggested path

Work front to back, or skip to what's due this week. Every guide stands alone. Three stopping points worth knowing:

**Guides 01–03: something real, in one sitting.** No Figma connectors needed. You finish with a deliverable Claude made from your actual files — and a Claude that remembers your projects from here on.

**Guides 04–09: something shipped this sprint.** Start with 04 and 05 — no new connectors, and they make everything Claude writes sound like you. Then pick whichever Figma guide matches real work due this week. You've landed this one when the output goes to a teammate, not a practice file.

**Guides 10–12: something your team runs again.** Operational stuff — a token pipeline, a parity audit, batch canvas operations. You're done when a teammate asks you to run it again.

## Three habits that make all twelve work better

**Duplicate before you mutate.** Any guide that writes to a real file (07, 08, 10, 11) should be practiced on a copy first. Figma's version history and named versions are your safety net; use them.

**Demand the working, not just the answer.** When Claude computes a contrast ratio, excludes survey rows, or claims code drifted from design, ask to see the values and the method. Verifying a sample is the QA step that lets you trust the rest.

**You are the taste.** Every workflow here automates the mechanical layer: extraction, comparison, generation, formatting. The judgment calls (is this theme real, is this drift worth fixing, does this deck argue the right thing) stay yours. The guides are structured to keep you in that seat; stay in it.

## A note on change

AI product features move fast. If a step doesn't match what you see, check the platform's own help docs — the workflow concepts here outlive any individual settings screen.
