# Guide 09: Figma Version Archaeology (Who Changed This, and When?)

> Use Claude to diff versions of a Figma file, trace a specific change back to the version (and author) that introduced it, and generate human-readable changelogs for design system releases.

**Difficulty:** Intermediate · **Time:** 30–45 min
**You'll need:** Claude and a Figma MCP server that exposes version-history tools; a Figma file with version history (any file that's been edited over time)

---

## What you'll be able to do

Figma quietly keeps a full version history of every file, but the native UI only lets you scrub through visual snapshots. An MCP server that exposes the version history API lets Claude treat that history like a code repository: list versions with authors and timestamps, diff any two versions structurally (what nodes changed, what properties changed), run a "blame" on a specific node to find the exact version that changed it, and write up the difference between two releases as a changelog a human can read.

This turns three common design system pain points into five-minute questions: "who changed the primary button and when," "what actually changed between v2.3 and v2.4 of the library," and "when did this component's padding drift from spec."

## Before you start

**Connect a Figma MCP server.** In Claude, go to **Settings → Connectors** (on Team/Enterprise plans, an Owner adds it under **Organization settings → Connectors** first), click **Add custom connector**, paste the server's URL, and complete any sign-in it requests. Then, in a chat, click the **+** button → **Connectors** and toggle it on for the conversation. Vet any third-party server for trust before connecting it. For this guide specifically, check the server's tool list for version-related capabilities: look for names like "get file versions," "diff versions," "blame node," or "generate changelog." Not every server has them; Figma's REST API exposes version history, so servers built on it often do.

Version history depth depends on your Figma plan (Professional and up retain full history). Named versions, created via **File → Save to version history**, make everything in this guide dramatically more useful, so if your team doesn't name versions at release points, start today.

## Step-by-step

1. **Survey the history.** Prompt: *"List the version history of this Figma file: [link]. Include version labels, descriptions, authors, and dates."* You'll get a timeline; note the version IDs of the two points you care about.
2. **Diff two versions.** Prompt: *"Diff version [A] against version [B]. Summarize by change type: added nodes, deleted nodes, and modified properties. Group by top-level frame."* For a big file, scope it: *"...only within the 'Components' page."*
3. **Blame a specific node.** When you need to know when one thing changed: *"The 'Button/Primary' component's corner radius is now 8. Find the version that changed it, and tell me the author, date, and the version description."* Claude walks the history to isolate the introducing version.
4. **Generate a changelog.** For releases: *"Compare the version labeled 'v2.3 release' with the current version and write a markdown changelog for design system consumers: New, Changed, Deprecated, Fixed. Write it for engineers who consume the library, not for designers."*
5. **Archive the answer.** Ask Claude to save the changelog as a markdown file you can download and drop into your release notes, wiki, or repo. If you post release notes to a docs tool with a connector, Claude can publish it directly.

## Example prompts

```
List every named version of this file from the last 90 days, then
tell me which ones touched anything inside the "Forms" page.
```

```
Someone detached instances somewhere between these two versions
and we don't know who or why. Diff them and list every instance
that became a detached frame, with its page location.
```

```
Write a changelog between [version ID] and now, but split it into
two audiences: a designer-facing summary and an engineer-facing
list of props/variants that changed.
```

## Troubleshooting

**No version tools on your server.** This capability set varies most between servers. If yours lacks it, look for one built on Figma's REST API with version endpoints, or ask Claude to compare two exported snapshots of the file as a manual fallback.

**Diffs are enormous.** Autosaved versions capture every micro-edit. Diff between *named* versions, and scope to a page or frame. Ask Claude to summarize before listing details.

**Blame is slow on old changes.** Walking many versions takes multiple lookups. Give Claude a bracket if you have one: *"It was correct at the March release and wrong by the May release; search between those."*

**Authors show as "unknown."** Autosave versions sometimes attribute poorly. Named versions carry reliable authorship, which is another reason to name releases.

## Going further

The changelog step is the gateway to real design system release governance: name a version at every release, have Claude generate the changelog as part of the ritual, and you accumulate an auditable history for free. It also pairs naturally with design–code drift audits: when an audit finds that a component drifted from spec, version archaeology tells you when it crept in and what else shipped alongside it.

## Portability

This workflow is not Claude-exclusive. It is built on the Model Context Protocol (MCP), an open standard, and the same Figma MCP servers described above work with any MCP-capable client, including Gemini CLI, ChatGPT, Cursor, and others. The example prompts in this guide transfer verbatim; only the connector setup steps differ, so follow your client's documentation for adding an MCP server. Two caveats: MCP support varies by client surface and changes quickly, so verify your client supports remote servers (and desktop-bridge pairing, if your chosen server uses one); and model quality shows most on the longer multi-step operations, so expect to supervise more closely and break work into smaller steps with lighter models.
