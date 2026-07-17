# Guide 01: Memory and Past-Chat Search

> Turn on Claude's memory and past-conversation search so it knows your projects, your stack, and your preferences, and can pull up "that decision we made in March" on demand.

**Difficulty:** Starter · **Time:** 10 min setup, compounds forever
**You'll need:** Claude on claude.ai or the mobile app; memory features are enabled in Settings (availability varies by plan)

---

## What changes

Without memory, every conversation starts with you re-explaining your context: your role, your project, your tools, the decision history. With memory and past-chat search on, two things change:

1. **Continuity by default.** Claude carries forward who you are and what you're working on. "Draft the follow-up for the stakeholder review" doesn't need a paragraph of setup; it knows which review, roughly who's involved, and how you like to write.
2. **Your conversation history becomes a searchable archive.** Months of thinking-out-loud with Claude (explorations, drafts, decisions) is retrievable: *"What did we conclude about the navigation pattern back in the spring?"* pulls up the actual thread.

For designers this quietly solves a real problem: so much design rationale lives nowhere. It gets discussed, decided, and evaporates. If you work through decisions with Claude, the rationale is captured as a side effect.

## What you need

In **Settings**, look for the memory-related toggles (generating memory from chat history, and searching/referencing past chats) and turn on what you want. A few things worth understanding about how it behaves:

- Memory is **derived from your conversations** and updates periodically in the background; very recent chats may not be reflected yet.
- **You're in control**: you can view and edit what Claude remembers, tell it to remember or forget specific things, and deleting conversations removes their derived memories over time.
- **Incognito/private chats** don't touch memory; use them for anything you don't want carried forward.
- If you use **Projects**, memory and past-chat search scope to the project: conversations inside a project stay searchable within it. This is a feature; one project per client or workstream keeps contexts from bleeding together.

## First run

1. **Seed it deliberately.** Rather than waiting for memory to accrete, tell Claude the durable facts once: *"Remember: I'm a product designer at [org], working mainly in Figma and [stack]. My current focus is [project]. I prefer direct feedback and drafts without corporate filler."* Explicit beats inferred.
2. **Check what it holds.** Ask: *"What do you remember about me and my work?"* Correct anything stale: *"I've rolled off the checkout project. Forget that; my focus is now the design system."*
3. **Practice retrieval.** Reference past work the way you would with a colleague: *"Pull up what we explored about onboarding empty states last month and let's continue."* Notice you don't have to remember which chat it was in; describing the topic is enough.
4. **Adopt the decision-log habit.** At the end of a substantive working session, add one message: *"To summarize what we decided today: [decisions]."* You're writing to your future self; those summaries make later retrieval sharp.
5. **Structure with Projects.** Create a project per major workstream. Inside each, memory and search stay relevant to that work, and project instructions (standing context you write once) stack with memory nicely.
6. **Prune quarterly.** Ask what Claude remembers, and clear out finished projects and outdated preferences. Memory is only as useful as it is current.

## Example prompts

```
Search our past conversations about the pricing page redesign.
What options did we consider for the comparison table, and why
did we park the toggle idea?
```

```
Based on everything you know about my work, what have I been
circling around for the last two months without resolving?
```

```
Remember that all client-facing docs should use the phrase
"service blueprint" not "journey map"; that's a standing
terminology decision.
```

## Troubleshooting

**Claude doesn't recall something recent.** Memory updates lag by design. For just-finished work, point at it directly ("in yesterday's chat about X..."); past-chat search finds it even before memory reflects it.

**It remembers something wrong or outdated.** Just tell it: *"Forget X"* or *"Update: it's Y now."* You can also review and edit memory in Settings.

**Retrieval misses a conversation you know happened.** Search works on the words used at the time. Retry with the vocabulary from that era of the project ("hamburger nav spike," a codename). Also check scope: project conversations aren't searchable from outside the project.

**Worried about sensitive topics surfacing.** Use incognito chats for anything you don't want retained, and prune memory of anything you'd rather it not carry. Client-confidential work may belong in a dedicated project, or outside these features entirely, per your org's policy.

## Where this takes you

Memory stacks with everything else. Custom instructions encode how you work, memory encodes what you're working on, and connected tools reach the live state of it. Together: the difference between a chatbot and a collaborator with context.

One caution: Claude's recall is a tool, not a teammate. Keep humans the primary place decisions get communicated. Let this be the searchable backup.
