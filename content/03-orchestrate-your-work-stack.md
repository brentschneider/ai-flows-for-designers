# Guide 03: Orchestrate Your Whole Work Stack in One Prompt

> Connect Claude to your email, calendar, files, and design tools, then ask questions that span all of them: "prep me for Thursday's design review" becomes one prompt instead of forty browser tabs.

**Difficulty:** Starter–Intermediate · **Time:** 20 min setup, immediate payoff
**You'll need:** Claude (connectors available on all plans; free plans have limits) and accounts on the tools you'll connect, e.g. Google Workspace or Microsoft 365, plus any design tools with connectors

---

## What changes

Individually, each connector is a convenience. Together, they're a different way of working. The compound queries are the point: questions whose answer lives across multiple tools.

- *"Prep me for tomorrow's design review: find the meeting, pull the agenda doc, check email threads about it, and summarize open questions."*
- *"What did stakeholders say about the onboarding redesign across email and comments in the last two weeks? Cluster the feedback by theme."*
- *"Find every doc where we've written down decisions about the navigation pattern, and reconcile them: do they agree?"*

Your inbox is also the quiet aggregator for every design tool you use: Figma comment notifications, GitHub review requests, and ticket updates all land there. That makes the email connector a way to query design-tool activity even for tools you haven't connected directly:

- *"Search my email for Figma comment notifications on the checkout file from this sprint. Which comment threads mention me, and which look unresolved based on the notification trail?"*
- *"Go through my GitHub notification emails from the past week: which pull requests am I requested to review, and which touch the component library?"*
- *"Check the notifications for design ticket DS-142: gather every email about it, list each piece of feedback or requested change, and tell me which ones have a follow-up confirming they were addressed and which are still open."*

Each of those is 30–60 minutes of tab-hopping done in one turn. For a design lead, the synthesis queries (feedback clustering, decision reconciliation) are the sleeper hit; they surface contradictions humans miss because no one person reads everything.

## What you need: connecting your tools

1. In Claude, open the **Connectors Directory** (via Settings → Connectors, or the **+** button in any chat). Each connector's page lists what it can read and do.
2. Connect the ones that hold your working memory. For most designers that's email, calendar, and cloud files (Google Workspace or Microsoft 365 connectors), plus whatever holds your design work (Figma) and team chat if available for your plan.
3. Each connection walks through the tool's own sign-in (OAuth). Claude inherits *your* permissions: it can see what you can see, nothing more, and you can revoke access anytime from Settings → Connectors.
4. In a chat, hit **+ → Connectors** to toggle which tools are live for that conversation. Claude will also bring connected tools into a conversation on its own when the request calls for them.

Two judgment notes worth internalizing before you connect everything: only connect services you trust with your data flowing through them, and remember that "Claude can act on your behalf" includes write actions on some connectors; review what each one is allowed to do.

## First run: your first orchestration

1. **Start with a real, current need**: the meeting you're actually prepping for. Prompt: *"Find my next design review on my calendar, then gather everything relevant: the invite body, any attached or linked docs, and email threads from the last two weeks mentioning it. Then give me: decisions already made, open questions, and who's pushing for what."*
2. **Watch how it works the tools.** Claude will search the calendar, follow the threads, open the docs. If it misses a source, point it there: *"Also check the folder called 'Q3 Navigation' in my Drive."*
3. **Push into synthesis.** Retrieval is table stakes; ask for judgment: *"Based on all of that, what's the most likely point of contention in this review, and what evidence do I have on hand for it?"*
4. **Close the loop with output.** *"Draft a pre-read email to attendees summarizing the open questions, in my usual tone."* Review before anything sends; treat write actions like a colleague's draft, not an autopilot.
5. **Build the habit with recurring rituals.** Weekly reporting, meeting prep, and inbox triage are the natural recurring uses. Save your best orchestration prompts; they're reusable verbatim.

## Example prompts

```
Search my email and files for every piece of stakeholder feedback
on [project] since June 1. Cluster into themes, note who said
what, and flag direct contradictions between stakeholders.
```

```
Pull every notification email about ticket [ID]: Figma comments,
GitHub activity, tracker updates. Build me a checklist: each note
or requested change, who raised it, and whether the thread shows
it was resolved. Flag anything with no follow-up as open.
```

```
Look at my calendar for next week and my current doc drafts.
Which meetings am I unprepared for, and what's missing for each?
```

```
Find the three most recent versions of our design principles doc
across my Drive. Diff them: what changed, and do any decks I've
shared still cite the old wording?
```

## Troubleshooting

**Claude says it can't find something you know exists.** Search terms matter; give it the vocabulary your team actually uses ("the nav spike doc," a person's name, a folder name). Sharing permissions apply: Claude can't see files you can't.

**A connector was working and now errors.** Tokens expire. Disconnect and reconnect it in Settings → Connectors.

**Results feel shallow.** Compound queries need explicit structure. Name the sources to check and the output you want ("check calendar, then email, then Drive; output as: decisions / open questions / risks").

**Notification-based answers look complete but aren't.** Email trails from Figma, GitHub, and trackers only capture what generates a notification: a comment resolved quietly in-tool, or by someone with notifications off, leaves no trace. Treat "still open" findings as a to-verify list, not ground truth, and spot-check in the source tool before reporting status to others.

**Wrong tool for the job.** If a needed connector isn't enabled for the conversation, Claude may improvise poorly. Check the **+ → Connectors** toggles.

## Where this takes you

Orchestration is connective tissue for everything else you do with Claude: it's how a workshop synthesis reaches the calendar invite and the follow-up email, and how an audit becomes tickets and a stakeholder summary in one motion. When a recurring orchestration proves out, save the exact prompt: a documented ritual anyone on the team can run identically.

## Portability

This workflow isn't Claude-exclusive. The orchestration prompts in this guide transfer essentially verbatim to other AI assistants with workspace integrations: Gemini's native Google Workspace integration covers the Gmail, Calendar, and Drive queries especially well (a genuine advantage if your organization is a Google shop), and ChatGPT offers comparable connectors for major work tools. What differs is only the setup: each assistant has its own connection flow, and the set of available integrations varies by vendor and plan. The habits this guide teaches (compound queries, named sources, structured outputs, reviewing write actions before they send) are assistant-agnostic and worth building wherever you land.
