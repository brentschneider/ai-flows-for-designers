# Guide 03: Teach Claude Your Voice and Your Playbooks with Custom Skills

> Encode your writing voice, document structures, and team conventions as reusable "skills": instruction files Claude loads automatically when the task matches, so output sounds like you instead of like a chatbot.

**Difficulty:** Intermediate · **Time:** 60–90 min for your first skill
**You'll need:** Claude with skills/file-creation capability, and 3–5 strong examples of the thing you want to encode (your best essays, your team's best specs, etc.)

---

## What changes

A skill is a folder containing a `SKILL.md` file: structured instructions plus examples that Claude reads when a matching task comes up. Where a one-off prompt evaporates when the chat ends, a skill persists; it's your prompt engineering, versioned and reusable.

For designers, the highest-value skills tend to be voice and format encodings:

- **Voice skills**: "when writing thought-leadership posts for me, use these sentence rhythms, these openings, never these clichés"
- **Format skills**: "research readouts follow this exact structure, with these section names, findings written in this pattern"
- **Process skills**: "when critiquing a design, evaluate in this order, using this severity language"

The difference in output quality is not subtle. Generic Claude writes competent, forgettable prose. Claude with a well-built voice skill writes drafts you edit rather than rewrite.

## What you need

Skill support varies by Claude surface. Skills are most at home in Claude Code and in claude.ai's file-creation environment, and the feature set evolves quickly, so check current documentation at https://docs.claude.com for where custom skills can be uploaded on your plan. The concepts below transfer everywhere; even where formal skill loading isn't available, the same file works as a Project instruction or a pasted preamble.

Gather your raw material: 3–5 examples of your best work in the target format. The skill's quality is capped by the quality and consistency of these examples.

## First run

1. **Pick one narrow job.** "Write like me" is too broad to encode well. "Write LinkedIn announcement posts in my voice" or "structure usability findings the way our team does" is right-sized. One skill, one job.
2. **Reverse-engineer your own patterns with Claude's help.** Paste your examples and prompt: *"Analyze these five posts I wrote. Describe the voice as concrete, checkable rules: sentence length distribution, how openings work, how I use questions, what I never do, structural moves that repeat. Be specific enough that another writer could imitate me."* You'll learn things about your own writing; correct anything it gets wrong.
3. **Draft the SKILL.md.** Prompt: *"Turn that analysis into a SKILL.md: YAML frontmatter with a name and a description of when to trigger it, then sections for voice rules, structure, a worked example, and an anti-example showing what to avoid."* The *description* matters most; it's how Claude decides when the skill applies, so make it name concrete triggers ("use whenever drafting announcement or launch posts").
4. **Test with a blind comparison.** In a fresh conversation with the skill available, request a post on a new topic. Then request the same post without the skill. If you can't tell which is which (or worse, prefer the generic one), the rules are too vague. Sharpen the most distinctive 3–4 rules; cut the rest.
5. **Add anti-examples.** The fastest quality gains come from "never do this" material: the em-dash habit, the "In today's fast-paced world" opening, the triad-of-adjectives tic. Claude follows prohibitions well when they're specific.
6. **Iterate in use, not in theory.** Every time a skill-generated draft needs the same edit twice, that edit is a missing rule. Add it. Skills converge fast under this loop; most reach "drafts I barely touch" within a couple weeks of real use.

## Example prompts

```
Here are three research readouts our team considers exemplary
[paste]. Extract the structural template as a SKILL.md so any
readout we generate follows it: exact section order, how findings
are phrased, how severity is worded, how recommendations link to
evidence.
```

```
Critique this SKILL.md as if you had to follow it: which rules
are ambiguous, which conflict, and what situations does it not
cover? Then revise it.
```

## Troubleshooting

**The skill doesn't trigger.** The frontmatter description is too abstract. Rewrite it around trigger phrases a user would actually say ("announcement post", "launch thread", "readout").

**Output follows structure but the voice is off.** Structure encodes easily; voice needs examples. Include at least one full worked example in the skill body: rules tell, examples teach.

**The skill fights the request.** Over-constrained. A skill should set defaults, not handcuffs; add a line like "when the user's explicit request conflicts with these rules, the request wins."

**Team members get different results.** They're using different skill versions. Keep skills in a shared repo and treat changes like code review: skills are team infrastructure, not personal stash.

## Where this takes you

Once one voice skill works, build the library: one per recurring document type your practice produces. Skills also pair naturally with AI-powered artifact apps: a skill defines *how* Claude should work, and an artifact wraps that behavior in an interface teammates can use. Together they're the start of a real design-ops toolchain. The skill-creation workflow itself can be encoded as a skill, which is exactly as recursive and as useful as it sounds.
