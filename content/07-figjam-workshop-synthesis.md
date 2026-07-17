# Guide 07: Read and Write FigJam Boards for Automated Workshop Synthesis

> After a workshop, have Claude pull every sticky note and connection off the board, synthesize themes, and write the affinity map back onto the board, with sections, stickies, and connectors included.

**Difficulty:** Intermediate · **Time:** 30 min setup, then ~15 min per workshop
**You'll need:** Claude and a Figma MCP server with FigJam tools (read board contents, create stickies/sections/connectors), plus a FigJam board with real content

---

## What changes

Workshop synthesis is the classic "two hours of unglamorous work after the fun part": reading 150 stickies, clustering them, naming themes, writing the summary. If your MCP server exposes FigJam tools, Claude can do the mechanical layer end to end:

- **Read**: pull every sticky, shape, and text node off a board, plus the connector graph (what's linked to what)
- **Synthesize**: cluster by theme, surface tensions and outliers, draft insight statements
- **Write back**: create sections for each theme, generate summary stickies, draw connectors between related clusters, and arrange everything in a tidy grid

The result isn't just a summary in chat; it's a new, organized region *on the board itself*, where your team already works.

## What you need

**Connect a Figma MCP server with FigJam tools.** In Claude, go to **Settings → Connectors** (on Team/Enterprise plans, an Owner adds it under **Organization settings → Connectors** first), click **Add custom connector**, paste the server's URL, and complete any sign-in it requests. Then, in a chat, click the **+** button → **Connectors** and toggle it on for the conversation. Check the server's tool list for FigJam-specific capabilities: reading board contents and creating stickies/sections are the essentials, while connectors and auto-arrange are nice extras. Write access to boards typically comes from community servers that pair with a small desktop bridge plugin you run inside Figma; those need the FigJam board open and the plugin running, and, since a write-capable server can modify your files, vet any third-party server for trust before connecting it.

One prep habit pays off enormously: during the workshop, keep raw input in one region of the board. Synthesis lands in a separate region, so the original data stays intact and auditable.

## First run

1. **Pull the board.** Open the board, then prompt: *"Read everything on my open FigJam board. Give me a count by type (stickies, shapes, sections) and tell me if stickies carry author or color information."* Sticky color often encodes meaning from the workshop (e.g., pink = pain point); tell Claude your color code if you used one.
2. **First-pass clustering.** Prompt: *"Cluster the stickies into themes. For each theme: a name, a one-sentence insight written as a finding (not a category label), the sticky count, and 3 representative verbatims. Also list stickies that don't fit any cluster."* Insist on the outliers list; that's where the interesting stuff hides.
3. **Pressure-test the synthesis.** This is your judgment step, and it's where you earn your facilitator fee: *"Theme 3 feels like two different things; split it and re-sort."* or *"What's the strongest counter-reading of this data?"* Iterate until the themes match your read of the room.
4. **Write it back.** Prompt: *"Create a new region to the right of the raw data titled 'Synthesis'. For each theme, create a section containing a heading sticky with the insight statement and the representative verbatims as stickies beneath it. Use a neutral color so synthesis is visually distinct from raw input."*
5. **Map relationships.** Prompt: *"Draw connectors between theme sections that are causally related, labeled with the relationship (e.g., 'drives', 'blocks')."*
6. **Generate the leave-behind.** Prompt: *"Now write the workshop summary doc: context, method, themes with evidence counts, tensions, open questions, and recommended next steps."* If Claude's file-creation feature is enabled (Settings → Features), have it produce this as a downloadable document for the people who weren't in the room.

## Example prompts

```
Read my open FigJam board. Pink stickies are pain points, yellow
are ideas, blue are questions. Cluster pain points only, and tell
me which ideas map to which pain-point clusters.
```

```
Compare this board against the board from our last session
[link]: which themes recurred, which are new, and which pain
points from last time didn't come up at all?
```

```
Create a 2x2 on the board (effort vs. impact) as four sections,
and place a copy of each idea sticky into the quadrant you'd
assess it into. Mark any you're unsure about with an orange dot.
```

## Troubleshooting

**Claude reads the board but placement is messy.** Ask for a grid arrangement with explicit spacing, or use the server's auto-arrange tool if it has one. Give a starting coordinate ("place the synthesis region starting at x=5000 so it's clear of existing content").

**Sticky text comes back garbled or truncated.** Very dense boards can exceed what one read returns. Read section by section, or ask Claude to paginate.

**The clustering feels generic.** Feed context first: the workshop's guiding question, who attended, what decisions hang on the output. Generic input produces generic themes.

**Write tools missing.** Some servers are read-only for FigJam. You can still do steps 1–3 and 6 (read + synthesize + doc) and paste the synthesis back manually; that's most of the value.

## Where this takes you

Template the whole flow: save your exact prompt sequence (with your color-coding conventions) as a shared document or reusable Claude instruction set so every facilitator on the team runs synthesis identically. For recurring research programs, keep a running "meta-board" where Claude appends each session's themes; longitudinal patterns emerge that no single workshop shows.

## Portability

This workflow is not Claude-exclusive. It is built on the Model Context Protocol (MCP), an open standard, and the same Figma MCP servers described above work with any MCP-capable client, including Gemini CLI, ChatGPT, Cursor, and others. The example prompts in this guide transfer verbatim; only the connector setup steps differ, so follow your client's documentation for adding an MCP server. Two caveats: MCP support varies by client surface and changes quickly, so verify your client supports remote servers (and desktop-bridge pairing, if your chosen server uses one); and model quality shows most on the longer multi-step operations, so expect to supervise more closely and break work into smaller steps with lighter models.
