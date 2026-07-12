# Beyond the Chat Box: Twelve AI Workflows for Designers

Chat is where most designers start with AI. It's not where the leverage is.

These twelve guides move you past the chat box and into workflows that touch your real tools: live Figma files, GitHub repositories, workshop boards, your calendar and inbox, working prototypes.

**Follow the numbers, or follow your deadline.** The numbering is a learning path (Starter first, Advanced last), but each guide stands entirely on its own. If something's due this week, jump straight to its guide. Only have twenty minutes today? Do Guide 02; you'll finish with a real file.

**Every guide has the same shape.** What you'll be able to do. Setup from scratch. A step-by-step first run. Copy-paste prompts. Troubleshooting. Where to take it next.

**Claude is the reference implementation, not a requirement.** Every setup walkthrough uses Claude's actual interface, so you can follow the steps exactly. But the Figma guides run on the open Model Context Protocol (MCP) standard, so those prompts work verbatim from any MCP-capable client. Where a workflow transfers, the guide ends with a short portability section; where it doesn't, the workflow depends on Claude-specific features.

## The twelve guides

### Starter: under an hour of total setup

| # | Guide | What you get |
|---|-------|--------------|
| 01 | [Memory and past-chat search](01-memory-and-past-chats.md) | Continuity: Claude that knows your projects and can retrieve past decisions |
| 02 | [Claude's computer: real files](02-claudes-computer-real-files.md) | Finished Word/Excel/PowerPoint/PDF deliverables and real data analysis |
| 03 | [Orchestrate your work stack](03-orchestrate-your-work-stack.md) | One prompt spanning email, calendar, files, and design tools |

### Intermediate: the leverage tier

| # | Guide | What you get |
|---|-------|--------------|
| 04 | [Custom skills: your voice](04-custom-skills-your-voice.md) | Claude that writes in your voice and follows your team's formats |
| 05 | [AI-powered artifacts ("Claudeception")](05-ai-powered-artifacts-claudeception.md) | Working AI prototypes: apps that contain their own Claude |
| 06 | [Accessibility lint against WCAG 2.2](06-accessibility-lint-figma-wcag.md) | Contrast, target-size, and state audits of the design file, before handoff |
| 07 | [FigJam workshop synthesis](07-figjam-workshop-synthesis.md) | Stickies clustered, themed, and written back onto the board automatically |
| 08 | [Build Figma Slides decks](08-build-figma-slides-decks.md) | First-draft decks built directly in Figma Slides, ready for your polish |
| 09 | [Figma version archaeology](09-figma-version-archaeology.md) | Diffs, blame, and changelogs for design files: who changed what, when |

### Advanced: design system operations

| # | Guide | What you get |
|---|-------|--------------|
| 10 | [Run JavaScript in your Figma file](10-run-javascript-in-your-figma-file.md) | Batch canvas operations (renames, variable generation, restructuring) in one pass |
| 11 | [Design token round-trip: Figma ↔ GitHub](11-design-token-round-trip-figma-github.md) | A working token sync pipeline between design and code |
| 12 | [Design–code parity audit](12-design-code-parity-audit.md) | Evidence-based drift reports: does production match the design system? |

## What these guides assume

Almost nothing.

You need a Claude account (claude.ai). Start on the free plan and upgrade when you hit limits. Usage caps will interrupt longer working sessions, and connector limits matter once you're running multiple custom tools, but hitting those walls is the signal to upgrade, not a prerequisite. Plan features change often; the current specifics live at https://support.claude.com.

No coding ability is required; where code runs, Claude writes and runs it. The Figma guides (06–12) need edit access to a Figma file and an MCP connector, and each includes its own connector setup. There's no prerequisite reading.

One distinction before the Figma tier: Figma's official MCP server reads design context well, while community servers with a desktop-bridge plugin add write access to the canvas. Write access cuts both ways. A connected server can do anything you can do in that file, so vet who maintains it before you connect. And if you work inside an organization, check your tooling policy first: connecting an unapproved service to work files is a call your security team should be part of, not one you make alone.

## Suggested path

The numbering is the default path: work front to back. A real deadline overrides it, because every guide lands harder when it produces something you actually owe someone. Three milestones, each defined by what you walk away with:

**Milestone 1: a deliverable from your real files, in one sitting.** Guides 01–03, no design-tool connectors required. You finish with a document, spreadsheet, or analysis Claude produced from your actual work, and a Claude that remembers your projects going forward. These three also make everything later smoother: memory carries your context, the file tooling produces the reports the later guides generate, and orchestration connects outputs to your calendar, docs, and email.

**Milestone 2: a shipped artifact from your current sprint.** Guides 04–09. Start with 04 and 05. They need no new connectors, and they compound: skills make everything Claude writes sound like you, and artifacts turn your prompting into tools teammates can use. Then pick the Figma guide that matches something due this week, whether that's an accessibility audit before handoff (06), a workshop that needs synthesis (07), a deck draft (08), or a "who changed this" investigation (09). They're sequenced by ascending complexity, but each contains its own setup, so enter wherever your real work points. You've hit this milestone when a guide's output goes to a teammate, not a practice file.

**Milestone 3: a capability your team relies on.** Guides 10–12. The advanced tier produces operational infrastructure: batch canvas operations, a working token pipeline, drift reports your team can act on. Guide 12 is a design-system governance capability, not a demo. Guide 10's code execution is the foundation the other two lean on conceptually. Once you've watched Claude operate directly on canvas data, token pipelines and parity audits become legible as process rather than trick. You've hit this milestone when one of these workflows runs on a schedule or a teammate asks you to run it again.

## Three habits that make all twelve work better

**Duplicate before you mutate.** Any guide that writes to a real file (07, 08, 10, 11) should be practiced on a copy first. Figma's version history and named versions are your safety net; use them.

**Demand the working, not just the answer.** When Claude computes a contrast ratio, excludes survey rows, or claims code drifted from design, ask to see the values and the method. Verifying a sample is the QA step that lets you trust the rest.

**You are the taste.** Every workflow here automates the mechanical layer: extraction, comparison, generation, formatting. The judgment calls (is this theme real, is this drift worth fixing, does this deck argue the right thing) stay yours. The guides are structured to keep you in that seat; stay in it.

## A note on change

AI product features move fast. Where a guide references a specific setting or plan limit, the current word lives at https://support.claude.com (product features) and https://docs.claude.com (technical documentation). If a step doesn't match what you see, check there; the workflow concepts in these guides outlive any individual settings screen.
