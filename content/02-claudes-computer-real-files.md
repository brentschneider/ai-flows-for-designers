# Guide 02: Use Claude's Computer for Real Files, Real Code, Real Deliverables

> Claude can operate an actual Linux machine: clone repositories, install packages, run analysis, and hand you finished Word docs, spreadsheets, slide decks, and PDFs instead of text you have to reassemble yourself.

**Difficulty:** Starter · **Time:** 10 min setup, useful immediately
**You'll need:** Claude with the code execution / file creation feature enabled (Settings → Capabilities on claude.ai; on by default for Free, Pro, and Max)

---

## What changes

When this feature is on, Claude's answers can end in *artifacts you download* rather than text you copy. Behind the scenes Claude gets a sandboxed computer where it can write and run code, install packages, and produce files. For designers, the everyday wins:

- **Documents**: research readouts, case studies, and proposals as formatted Word or PDF files
- **Spreadsheets**: survey analysis, feature matrices, capacity models, delivered as real .xlsx with working formulas
- **Decks**: PowerPoint files built from your outline, ready for final design polish
- **Data work**: drop in a CSV of survey exports or analytics and get charts, statistics, and a written summary
- **Code**: working prototypes of interactions, scripts that batch-process image assets, quick parsers for whatever weird export format your research tool produces

The mental shift: stop asking Claude to *tell* you things and start asking it to *make* things.

## What you need

The **Code execution and file creation** capability lives in **Settings → Capabilities**; it's on by default for Free, Pro, and Max, and Team/Enterprise owners control it org-wide in organization settings. Check current plan availability at https://support.claude.com if you don't see it. That's it; the computer, the packages, and the document tooling are all Claude's problem.

One thing worth knowing about the sandbox: it resets between tasks, and its network access is limited to safe destinations like package registries and GitHub. Your files exist there only for the duration of the work.

## First run: three starter workflows

**A. Survey data → analysis deliverable**

1. Export your survey results as CSV and attach the file to a chat.
2. Prompt: *"Analyze this survey export. Clean obvious junk responses, then give me: response distributions per question, any statistically meaningful differences between user segments, and three charts worth showing stakeholders. Deliver as an Excel workbook (data + pivot summaries) plus a one-page PDF readout."*
3. Interrogate the analysis before trusting it: *"How did you decide what counted as a junk response? Show me the rows you excluded."*

**B. Outline → formatted document**

1. Paste your rough notes or outline.
2. Prompt: *"Turn this into a formatted Word document: title page, headings, a summary table of findings, page numbers. Professional but not sterile."*
3. Iterate on the file like any draft: *"Move the recommendations before the methodology, and tighten the executive summary to 150 words."* Claude edits the actual file and returns a fresh copy.

**C. Repo → understanding**

1. Prompt: *"Clone [public repo URL] and explain how its component library is organized: folder structure, how theming works, and where design tokens live. Write it as an onboarding doc for a designer who reads a little code."*
2. This is the quiet superpower for designers working with engineering: you can ask questions *of the codebase itself* instead of waiting for someone to explain it.

## Example prompts

```
Attached are 40 usability session note files. Merge them, extract
every observation tagged "issue", deduplicate similar ones, and
give me an Excel sheet: issue, frequency, severity, sessions
where observed, representative quote.
```

```
Write a Python script that takes a folder of images and exports
each at 1x/2x/3x with a consistent naming scheme, then run it on
the images I've attached and give me the outputs zipped.
```

```
Build a simple interactive prototype of a drag-to-reorder list
with the physics I describe below, as a single HTML file I can
open locally and put in front of users: [description]
```

## Troubleshooting

**"I don't see the file."** Ask Claude to present the file explicitly. If a task ended with only a description of a file, the last step got skipped; a nudge fixes it.

**The document formatting is fine but bland.** Direct it like you'd direct a designer: reference a structure you like, specify typography weight and restraint, ask for less bolding. Default document styling is conservative on purpose.

**Analysis results you can't verify.** Always ask for the working: which rows were used, what test was run, what assumptions were made. Claude will show the code and intermediate data; reviewing it is the QA step.

**A package or website can't be reached.** The sandbox's network is restricted. Provide the material as an attachment instead, or ask Claude which alternative it can use.

## Where this takes you

This capability is the engine room for more advanced workflows: accessibility audit reports, design-token transforms, and design system changelogs all become downloadable deliverables through it. The habit that compounds: end substantial working sessions with *"package this up"* (analysis, decisions, and artifacts in one file) and you never lose a session's output to chat scroll again.
