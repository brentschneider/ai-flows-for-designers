# Guide 08: Lint Your Figma File Against WCAG 2.2

> Run an accessibility and design-quality audit on your actual canvas (contrast ratios, touch targets, text sizes, focus states) and get a formatted report you can hand to stakeholders.

**Difficulty:** Intermediate · **Time:** 30–45 min
**You'll need:** Claude, a Figma MCP server that can read node properties (fills, text, dimensions), and optionally Claude's file creation feature for the report deliverable

---

## What changes

Accessibility review usually happens too late: after build, in an audit of the shipped product. Linting the *design file* moves the check left: Claude reads the actual property values in your Figma file (text fills over their backgrounds, font sizes, component dimensions) and evaluates them against Web Content Accessibility Guidelines (WCAG) 2.2 criteria that are checkable at design time:

- **Contrast** (1.4.3 / 1.4.6 / 1.4.11): text and UI component contrast ratios computed from real fill values, not eyeballed
- **Target size** (2.5.8): interactive elements below the 24×24 CSS pixel minimum
- **Text sizing and spacing** (1.4.4 / 1.4.12): fixed-height text containers that will break under resize
- **Missing states**: components without visible focus styles (2.4.7 / 2.4.11–13)

An important honesty note to keep in the report itself: a design-file lint covers *perceivable* criteria well, but many WCAG criteria (keyboard behavior, reading order, ARIA semantics) only exist in code. This is a first gate, not a full audit.

## What you need

**Connect a Figma MCP server.** Read access suffices for this workflow. In Claude, go to **Settings → Connectors** (on Team/Enterprise plans, an Owner adds it under **Organization settings → Connectors** first), click **Add custom connector**, paste the server's URL, and complete any sign-in it requests. Figma's official MCP server (`https://mcp.figma.com/mcp`) is built for reading design context, which is exactly what a lint needs; community Figma MCP servers work too, but vet any third-party server for trust before connecting it. Then, in a chat, click the **+** button → **Connectors** and toggle the Figma connector on for the conversation.

Some servers ship a dedicated lint or accessibility-audit tool; check for it, because a purpose-built tool is faster than having Claude walk nodes manually. If your server lacks one, Claude can still do the audit by reading the file structure and computing contrast itself; it's just more prompts.

If you want a polished deliverable, enable code execution / file creation in **Settings → Features** so Claude can produce a formatted Word or PDF report at the end.

## First run

1. **Scope the audit.** Whole files are noisy. Pick one flow or page: *"Audit the 'Checkout' page of this file: [link]."*
2. **Run the contrast pass.** Prompt: *"For every text node, identify its effective background (walk up parents to the first solid fill), compute the contrast ratio, and flag anything below 4.5:1 for normal text or 3:1 for large text per WCAG 1.4.3. Show the actual hex pairs and computed ratios."* Demanding the computed ratio keeps the analysis grounded in real values.
3. **Run the target-size pass.** Prompt: *"List every component instance that looks interactive (buttons, icon buttons, checkboxes, links) with rendered dimensions under 24×24, per WCAG 2.5.8. Include the layer path so I can find each one."*
4. **Check states.** Prompt: *"For each interactive component set used on this page, list its variants. Flag any set with no focus variant and any whose focus variant differs from default only by color."*
5. **Compile the report.** Prompt: *"Compile all findings into a report: executive summary, findings table (issue, WCAG criterion, severity, location, recommended fix), and a 'not covered by this audit' section listing code-only criteria. Generate it as a Word document."*
6. **Verify a sample.** Spot-check two or three findings by hand with Figma's own inspect panel. Once you trust the pipeline, you'll stop needing to.

## Example prompts

```
Audit this page for WCAG 1.4.11 non-text contrast: input borders,
icons, and toggle states against their adjacent colors. Table:
element, colors, ratio, pass/fail at 3:1.
```

```
Re-run last week's audit prompts on the same page and tell me
which previous findings are now fixed and what's new.
```

## Troubleshooting

**Contrast results look wrong.** Usually the background detection: text over images, gradients, or semi-transparent fills has no single ratio. Ask Claude to flag those separately as "manual review" rather than pass/fail.

**Too many findings to act on.** Ask Claude to deduplicate by component: one finding per component, with an occurrence count, sorted by severity × frequency.

**Touch-target pass flags decorative elements.** Tell Claude how interactivity is marked in your file (component naming convention, or presence of prototype interactions) so it can filter.

**The report reads as alarmist.** Prompt for tone: findings as opportunities with fixes, severity calibrated (contrast on body text ≠ contrast on placeholder text).

## Where this takes you

Make it a pre-handoff ritual: lint the file before every engineering handoff and attach the report. Then close the loop after build with a design-to-code comparison; the design-time lint plus a code-side check together cover the "designed accessible" and "built as designed" halves of the problem. For the code-only criteria, that's where a real assistive-technology audit still earns its keep.

## Portability

This workflow is not Claude-exclusive. It is built on the Model Context Protocol (MCP), an open standard, and the same Figma MCP servers described above work with any MCP-capable client, including Gemini CLI, ChatGPT, Cursor, and others. The example prompts in this guide transfer verbatim; only the connector setup steps differ, so follow your client's documentation for adding an MCP server. Two caveats: MCP support varies by client surface and changes quickly, so verify your client supports remote servers (and desktop-bridge pairing, if your chosen server uses one); and model quality shows most on the longer multi-step operations, so expect to supervise more closely and break work into smaller steps with lighter models.
