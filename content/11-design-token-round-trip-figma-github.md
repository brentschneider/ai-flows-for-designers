# Guide 11: Round-Trip Design Tokens Between Figma and GitHub

> Have Claude export your Figma variables to token files, transform them in a real codebase, and push updated tokens back into Figma: a working token pipeline without writing the plumbing yourself.

**Difficulty:** Advanced · **Time:** 60–90 min first run
**You'll need:** Claude with the code execution / file creation feature enabled, a Figma MCP server with variables read/write access, and a GitHub repository for your tokens

---

## What you'll be able to do

Design tokens live a double life: as Figma variables designers use, and as JSON/CSS/platform files engineers consume. Keeping the two in sync is usually either manual or requires a dedicated tool. Claude can act as the sync layer: it reads variables from Figma through an MCP connector, works on the files using its built-in code environment (where it can run tools like Style Dictionary), and writes results to GitHub, then reverses the flow to push code-side token changes back into Figma as variables.

## Before you start

**Enable code execution.** In Claude, go to **Settings → Features** and turn on the code execution / file creation capability. This gives Claude a sandboxed computer where it can clone repos and run Node or Python.

**Connect Figma.** In Claude, go to **Settings → Connectors** (on Team/Enterprise plans, an Owner adds it under **Organization settings → Connectors** first), click **Add custom connector**, paste the Figma MCP server's URL, and complete any sign-in it requests. Then, in a chat, click the **+** button → **Connectors** and toggle it on. For this workflow the server must support reading *and* writing variables; look for tools with names like "get variables," "export tokens," "import tokens," or "batch create variables" in the server's documentation. Variable write access typically comes from community servers, often paired with a desktop bridge plugin you run inside Figma; vet any third-party server for trust before connecting it, since it will be able to modify your files.

**Prepare GitHub access.** Claude's sandbox can clone public repositories directly. For private repos, the cleanest path is connecting the GitHub connector from Claude's Connectors Directory, or providing a fine-grained personal access token scoped to just your tokens repo (create one at github.com/settings/tokens; treat it like a password and revoke it after your session if you paste it into chat).

**Agree on a token format.** The W3C Design Tokens Community Group (DTCG) format is the emerging standard, and most tools (Style Dictionary v4+, Tokens Studio) speak it. Tell Claude which format your repo uses.

## Step-by-step: Figma → GitHub

1. Open your Figma file containing the variable collections you want to export.
2. Prompt Claude: *"Read all variable collections from my Figma file and show me a summary: collection names, modes, variable counts, and types."* Verify the summary matches reality before going further.
3. Ask for the export: *"Export these as DTCG-format JSON, one file per collection, preserving mode information and aliases."* Claude generates the files in its sandbox.
4. Have Claude run the transform: *"Clone [repo URL], install Style Dictionary, and build CSS custom properties and iOS/Android outputs from these token files. Show me the generated CSS."*
5. Review the diff: *"Show me what changed compared to the token files already in the repo."*
6. Ship it: Claude can commit to a branch and open a pull request via the GitHub connector, or hand you the finished files to download and commit yourself. For your first few runs, take the files and commit manually so you can inspect everything.

## Step-by-step: GitHub → Figma

1. Prompt: *"Fetch the tokens folder from [repo URL] and compare it against the variables currently in my Figma file. List additions, changes, and deletions."*
2. Review the plan. Renames and deletions deserve special attention: a deleted variable can break bindings across a design file.
3. Apply: *"Create the missing variables and update the changed values in Figma. Skip deletions for now."* Batch-create/update tools make this a single operation.
4. Spot-check in Figma: open the variables panel and confirm modes, aliases, and values landed correctly.

## Example prompts

```
Read the "Semantic / Color" collection from my Figma file, export
it as DTCG JSON, then transform it with Style Dictionary into CSS
custom properties using a "--sem-" prefix. Give me both files.
```

```
Here's my repo: [URL]. Compare tokens/color.json against my Figma
variables. Produce a three-column change report: token, value in
code, value in Figma. Don't change anything yet.
```

## Troubleshooting

**Aliases arrive as raw values.** Some export paths flatten aliases. Ask Claude explicitly to *"preserve alias references as DTCG `{group.token}` syntax"* and to verify aliases survived by re-reading a sample.

**Modes don't map cleanly.** DTCG handles theming differently than Figma modes. Decide on a convention (one file per mode is simplest) and state it in your prompt.

**The sandbox can't reach your repo.** Claude's environment reaches common package registries and GitHub, but private networks are off-limits. Use the GitHub connector or paste the token files directly into chat as a fallback.

**Round-trip drift.** Run the comparison prompt (step 1 of GitHub → Figma) as a no-op check after any sync. If the report isn't empty, something transformed lossily; the usual culprits are color formats (hex vs. rgba) or number precision.

## Going further

Once the manual loop works, document your exact prompts and format decisions in a Claude Project or a reusable instruction file so any teammate can run the sync identically. A natural companion workflow: have Claude audit whether shipped code actually *uses* the tokens you're syncing, by comparing component source files against the token set.

## Portability

This workflow is not Claude-exclusive. The Figma side is built on the Model Context Protocol (MCP), an open standard: the same servers work with any MCP-capable client, and the example prompts transfer verbatim. The pipeline side needs a client that can also execute code and reach GitHub; agentic coding environments like Gemini CLI cover both halves in one place, and other MCP-capable assistants work if they pair connector access with a code-execution environment. Only the setup steps differ by client, so follow your client's documentation for adding MCP servers. Expect model quality to matter here: token round-trips are long multi-step runs, so lighter models need closer supervision and smaller steps.
