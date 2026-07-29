# Guide 10: Run a Design–Code Parity Audit

> Answer "does production actually match the design system?" with evidence: Claude pulls a component's spec from Figma, pulls its implementation from your repo, and diffs the two into a drift report.

**Difficulty:** Advanced · **Time:** 60 min for your first component
**You'll need:** Claude with code execution enabled, a Figma MCP server (read access is enough), and access to the codebase implementing your designs

---

## What changes

Every design system accumulates drift: the Figma button uses a 12px radius, the shipped one uses 8px; the spec says `color.text.secondary`, the code hardcodes `#6B7280`. Finding drift manually means eyeballing screens against specs. Claude can instead read the structured truth on both sides (the component's actual properties in Figma and the actual source code) and produce a systematic comparison: spacing, radii, typography, color values, token usage, and states.

This is one of the highest-leverage workflows for design system teams because the output is a concrete, prioritized backlog rather than a vague sense that "things look off."

## What you need

**Connect a Figma MCP server.** Read-only capability is sufficient here. In Claude, go to **Settings → Connectors** (on Team/Enterprise plans, an Owner adds it under **Organization settings → Connectors** first), click **Add custom connector**, paste the server's URL, and complete any sign-in it requests. Then, in a chat, click the **+** button → **Connectors** and toggle it on for the conversation. Figma's official MCP server (`https://mcp.figma.com/mcp`) is a good fit for this guide since extracting development-ready component data is exactly what it's designed for; vet any third-party alternative for trust before connecting it.

Enable Claude's code execution feature in **Settings → Features** so it can clone and search your repository. For private repos, use the GitHub connector or a scoped access token.

Pick one component to start, ideally one you *suspect* has drifted, so the first report proves value. Know where it lives on both sides: the Figma component (have the file open or grab its link) and the source file path or component name in the repo.

## First run

1. **Extract the design truth.** Prompt: *"Get the full development spec for the Button component in my Figma file: all variants, spacing, padding, radii, typography, fills, and any bound variables/tokens. Present it as a structured table."* Review it; if variables show as raw hex, ask Claude to resolve token names too.
2. **Extract the code truth.** Prompt: *"Clone [repo URL] and find the Button implementation. Extract every style-affecting value: padding, radius, font size/weight/line-height, colors, and whether each comes from a design token or a hardcoded value."*
3. **Diff.** Prompt: *"Compare the two. Produce a parity report with columns: property, Figma value, code value, match/drift, severity. Flag hardcoded values that have an available token as their own category."*
4. **Check states and variants.** Visual drift hides in hover, focus, disabled, and error states. Ask: *"Repeat the comparison for each variant and interactive state defined in either source. List states that exist in only one place."* Missing states are often the most important finding.
5. **Turn findings into work.** Prompt: *"Write each drift item as a ticket: title, current vs. expected, file and line reference, suggested fix, estimated blast radius."* Claude can format these for direct paste into your tracker, or file them via a connector if you have one linked.
6. **Repeat and roll up.** Run the same flow across your top 10 components, then ask Claude for a summary: drift rate by component, most common drift type, and token adoption percentage. That roll-up is a compelling artifact for design system health reporting.

## Example prompts

```
Here's a Figma link to our Card component: [link]. And here's our
repo: [URL]. Run a full parity audit: every property, every
variant. I want a table plus a one-paragraph executive summary.
```

```
Focus only on color: which values in src/components are hardcoded
hex/rgb that have an exact or near match (within a shade) in our
token set? Rank by number of occurrences.
```

```
The audit found 14 drift items. Group them into: (a) code should
change, (b) Figma should change, (c) needs a decision. Justify
each grouping in one sentence.
```

## Troubleshooting

**The Figma spec comes back shallow.** Deeply nested components sometimes need explicit depth. Ask Claude to fetch the component's full subtree, or audit one variant at a time.

**Claude can't find the component in code.** Give it a hint: the file path, or a distinctive class name. Component names in Figma and code rarely match exactly.

**Styles are computed, not literal.** If styles come from a theme object or utility classes (Tailwind, CSS-in-JS), tell Claude where the theme is defined so it can resolve final values rather than comparing token names to class names.

**Everything shows as drift.** Usually a unit mismatch (rem vs. px) or a resolved-vs-token comparison. Ask Claude to normalize units and compare resolved values first, token usage second, as separate passes.

## Where this takes you

Schedule this as a recurring ritual: a monthly parity check on your core components catches drift while it's one PR deep instead of one quarter deep. Two natural extensions: a Figma-to-code token sync pipeline, so fixes for token drift ship as an automated flow rather than one-off edits, and Figma version-history diffing, to find out *when* and *where* the drift was introduced.

## Portability

This workflow is not Claude-exclusive. Reading the design side relies on the Model Context Protocol (MCP), an open standard: Figma's official MCP server works with any MCP-capable client, including Gemini CLI, ChatGPT, and Cursor, and the audit prompts in this guide transfer verbatim. The code side needs a client that can clone and search a repository; agentic coding environments handle that natively. Only the connector setup differs by client, so follow your client's documentation. One honest note: the value of a parity audit lives in the quality of the comparison and the judgment about what counts as meaningful drift, which is where model differences are most visible. Whichever assistant you use, verify a sample of findings by hand before trusting the report.
