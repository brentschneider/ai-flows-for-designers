# Guide 10: Run JavaScript Inside Your Live Figma File

> Use Claude to execute code in Figma's plugin context, so repetitive canvas work (renaming layers, generating variables, restructuring components) happens in one pass instead of one click at a time.

**Difficulty:** Advanced · **Time:** 45–60 min first setup, minutes per task after
**You'll need:** Claude (Pro plan or higher recommended), Figma desktop app with edit access to a file, and a Figma MCP server that supports write access

---

## What changes

Figma's plugin API can do almost anything you can do by hand on the canvas: create nodes, set fills, bind variables, rename layers, restructure components. Normally you'd need to write and install a plugin to use it. With a Model Context Protocol (MCP) connector that exposes a code-execution tool, Claude writes and runs that plugin code for you, live, against your open file.

Practical examples designers use this for: renaming hundreds of layers to a naming convention, generating a complete color variable collection with light and dark modes, batch-swapping detached instances back to library components, and applying a text style to every stray text node in a page.

## What you need: connect a Figma MCP server

There are two flavors of Figma MCP server, and the difference matters:

1. **Figma's official MCP server** (`https://mcp.figma.com/mcp`) is primarily built for *reading* design context: great for handing designs to code, limited for writing to the canvas.
2. **Community MCP servers with a desktop bridge** pair a remote server with a small Figma plugin you run locally. The plugin gives the server write access to your open file, including a "run arbitrary JavaScript" tool. Search the web or Claude's Connectors Directory for "Figma MCP" options; evaluate any community server for trustworthiness before connecting, since it will be able to modify your files.

To connect a custom MCP server in Claude:

1. In Claude, go to **Settings → Connectors** (on Team/Enterprise plans, an Owner adds it under **Organization settings → Connectors** first).
2. Click **Add custom connector**, paste the server's URL, and complete any sign-in it requests.
3. In a chat, click the **+** button → **Connectors** and confirm the Figma connector is toggled on for the conversation.
4. If your server uses a desktop bridge, install its companion plugin in Figma (usually via **Plugins → Development** or the Figma Community), open your target file, and run the plugin to pair it with your Claude session. The server's documentation will describe its exact pairing step.

## First run: your first code run

1. Open the Figma file you want to modify and duplicate it first. Treat your first few runs as experiments on a copy, never a source-of-truth file.
2. Start a new Claude chat with the connector enabled and confirm the link: *"Can you read the current page of my open Figma file and tell me what's on it?"* If Claude returns real layer names, you're paired.
3. Describe the outcome, not the code: *"Rename every layer on this page to kebab-case, prefixed with its parent frame name."* Claude will write the plugin JavaScript and execute it.
4. Ask Claude to describe what it's about to do before running anything destructive: *"Show me the plan and how many nodes it will touch before executing."*
5. Check the canvas. If something's off, tell Claude what you see; it can query the file state, diagnose, and re-run.
6. Use Figma's version history (**File → Show version history**) as your undo safety net; save a named version before big batch operations.

## Example prompts

```
Read my open Figma file and list every text node on the current
page that isn't using a text style. Then apply the closest
matching text style from our local styles.
```

```
Create a variable collection called "Color / Primitives" with a
10-step neutral ramp from #FAFAFA to #0A0A0A, in both a Light and
Dark mode. Show me the plan before you run it.
```

```
Find every component instance on this page that has overridden
fills, and generate a report grouped by component name. Don't
change anything yet.
```

## Troubleshooting

**Claude says it can't find a code-execution tool.** Your connected server may be read-only (like the official Figma MCP in some configurations). Check the server's documentation for write support, or add a community server that provides it.

**The connector is added but returns nothing.** The desktop bridge plugin probably isn't running or isn't paired. Re-open the plugin in Figma with your target file focused, and re-run the pairing step.

**The script ran but changed the wrong things.** Selectors in plugin code are literal: "all frames" means *all* frames. Scope prompts explicitly: name the page, the frame, or ask Claude to operate on your current selection only.

**Auth errors mid-conversation.** Remove and re-add the connector in Settings → Connectors, then re-authenticate. Custom connectors can't be edited in place.

## Where this takes you

Once single-file operations feel comfortable, chain them: ask Claude to read your file's existing styles first, then generate variables that match, then re-bind layers to those variables, a three-step migration you'd otherwise do by hand. This same foundation unlocks bigger pipelines, like syncing design tokens between Figma and a codebase, or auditing what changed across a file's version history.

## Portability

This workflow is not Claude-exclusive. It is built on the Model Context Protocol (MCP), an open standard, and the same Figma MCP servers described above work with any MCP-capable client, including Gemini CLI, ChatGPT, Cursor, and others. The example prompts in this guide transfer verbatim; only the connector setup steps differ, so follow your client's documentation for adding an MCP server. Two caveats: MCP support varies by client surface and changes quickly, so verify your client supports remote servers (and desktop-bridge pairing, if your chosen server uses one); and model quality shows most on the longer multi-step operations, so expect to supervise more closely and break work into smaller steps with lighter models.
