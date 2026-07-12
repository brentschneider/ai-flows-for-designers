# Guide 08: Build Figma Slides Decks

> Draft a presentation directly in Figma Slides: Claude creates the slides, places the text and shapes, sets backgrounds and transitions, and reorders the grid, while you art-direct.

**Difficulty:** Intermediate · **Time:** 30 min setup, then real decks in under an hour
**You'll need:** Claude, a Figma MCP server with Figma Slides tools (create slide, add text/shape, set background, reorder), and a Figma Slides file

---

## What you'll be able to do

The usual AI-deck workflow ends with an outline you paste into slides by hand, or a generated deck in a tool your design team doesn't live in. If your MCP server exposes Figma Slides tools, Claude can build the deck *in Figma*, where you can then refine it with every design tool you already know. Claude handles structure and first-draft content (creating slides, placing headline and body text, adding shapes for emphasis, setting backgrounds, ordering the grid, even transitions) and you do what designers do: make it good.

The division of labor matters. Claude is fast at "twelve slides, right content, right order." You're better at hierarchy, rhythm, and craft. This workflow gets you to the craft stage in minutes instead of hours.

## Before you start

**Connect a Figma MCP server with Slides tools.** In Claude, go to **Settings → Connectors** (on Team/Enterprise plans, an Owner adds it under **Organization settings → Connectors** first), click **Add custom connector**, paste the server's URL, and complete any sign-in it requests. Then, in a chat, click the **+** button → **Connectors** and toggle it on. Check the server's tool list for Slides capabilities: "create slide," "add text to slide," "slide grid," "set background," or similar. Slides write access typically comes from community servers that pair with a desktop bridge plugin you run inside Figma; those need your Slides file open and the plugin running. Vet any third-party server for trust before connecting it; a write-capable server can modify your files.

Create a new Figma Slides file (in Figma: **New → Slides**) as your target. Have your raw material ready: an outline, a doc, meeting notes, whatever the deck should be built from. Garbage in, garbage deck.

## Step-by-step

1. **Confirm the connection.** With your Slides file open: *"List the slides in my open Figma Slides file."* An empty or one-slide answer confirms you're paired to the right file.
2. **Agree on the outline before any slides exist.** Prompt: *"Here's my source material: [paste]. Propose a slide-by-slide outline for a 10-minute talk to [audience]: slide title plus one sentence of intent per slide. Don't build anything yet."* Editing an outline is cheap; editing a built deck is not.
3. **Set the visual system.** Prompt: *"Use this system throughout: background #0E0E10, headline text 64px white positioned in the upper third, body text 28px at 80% white, one accent color #7C9CFF for emphasis shapes. Title slide and section dividers get the accent as background."* Stating the system once beats correcting every slide.
4. **Build.** *"Build the deck from the approved outline using the visual system."* Claude creates slides one by one; for long decks, ask for it in batches of five so you can course-correct early.
5. **Review in grid view.** Open Figma Slides' grid view to see the whole deck at once. Give spatial feedback the way you would to a junior designer: *"Slides 4–6 are too text-heavy; cut each to one claim and one supporting line. Move slide 9 before slide 7."* Claude can rewrite text, reorder the grid, and adjust layouts in place.
6. **Polish by hand.** Take over in Figma for final typography, imagery, and spacing. Everything Claude made is ordinary Figma layers: nothing proprietary, everything editable.
7. **Optional flourishes.** Ask for transitions ("dissolve, 300ms, on the section dividers only") and speaker-note drafts per slide if your server supports them.

## Example prompts

```
Turn this project retro doc into an 8-slide readout for execs:
[paste doc]. Outline first. Tone: candid, no jargon, one insight
per slide.
```

```
Duplicate slide 3 twice and adapt the copy for our other two
customer segments. Keep layout identical so they read as a series.
```

```
The deck is done in English. Add a duplicate of the full deck
after slide 12 with all text translated to Spanish, same layouts.
```

## Troubleshooting

**Text lands in awkward positions.** Positioning via API is coordinate-based, and Claude can't literally see the render unless it captures a screenshot. If your server has a screenshot/export tool, ask Claude to capture a slide, look at it, and fix what's off; that closed loop dramatically improves layout quality.

**The deck is generic.** It will be if the input was thin. Feed real source material and a named audience, and state a point of view ("the argument of this deck is X").

**Slides created in the wrong file.** The bridge pairs to your focused file. Keep the target Slides file open and focused during the build.

**No Slides tools on your server.** You can still use Claude for outline + per-slide copy, then build manually, or, with Claude's file-creation feature enabled, produce the deck as a PowerPoint file instead and import it.

## Going further

Save your visual system and outline conventions somewhere reusable (a Claude Project instruction or a standing prompt) and deck production becomes a repeatable pipeline: paste source, approve outline, art-direct. For recurring formats like sprint reviews and research readouts, keep a reference deck and ask Claude to match its structure exactly.

## Portability

This workflow is not Claude-exclusive. It is built on the Model Context Protocol (MCP), an open standard, and the same Figma MCP servers described above work with any MCP-capable client, including Gemini CLI, ChatGPT, Cursor, and others. The example prompts in this guide transfer verbatim; only the connector setup steps differ, so follow your client's documentation for adding an MCP server. Two caveats: MCP support varies by client surface and changes quickly, so verify your client supports remote servers (and desktop-bridge pairing, if your chosen server uses one); and model quality shows most on the longer multi-step operations, so expect to supervise more closely and break work into smaller steps with lighter models.
