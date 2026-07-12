// Site structure: one entry per source Markdown file in content/.
// tier: null for the home page, otherwise groups the nav into Starter/Intermediate/Advanced.
export const pages = [
  { file: '00-README.md', slug: '', navLabel: 'Home', tier: null },

  { file: '01-memory-and-past-chats.md', slug: 'memory-and-past-chats', navLabel: 'Memory and past-chat search', tier: 'Starter' },
  { file: '02-claudes-computer-real-files.md', slug: 'claudes-computer-real-files', navLabel: "Claude's computer: real files", tier: 'Starter' },
  { file: '03-orchestrate-your-work-stack.md', slug: 'orchestrate-your-work-stack', navLabel: 'Orchestrate your work stack', tier: 'Starter' },

  { file: '04-custom-skills-your-voice.md', slug: 'custom-skills-your-voice', navLabel: 'Custom skills: your voice', tier: 'Intermediate' },
  { file: '05-ai-powered-artifacts-claudeception.md', slug: 'ai-powered-artifacts-claudeception', navLabel: 'AI-powered artifacts', tier: 'Intermediate' },
  { file: '06-accessibility-lint-figma-wcag.md', slug: 'accessibility-lint-figma-wcag', navLabel: 'Accessibility lint against WCAG', tier: 'Intermediate' },
  { file: '07-figjam-workshop-synthesis.md', slug: 'figjam-workshop-synthesis', navLabel: 'FigJam workshop synthesis', tier: 'Intermediate' },
  { file: '08-build-figma-slides-decks.md', slug: 'build-figma-slides-decks', navLabel: 'Build Figma Slides decks', tier: 'Intermediate' },
  { file: '09-figma-version-archaeology.md', slug: 'figma-version-archaeology', navLabel: 'Figma version archaeology', tier: 'Intermediate' },

  { file: '10-run-javascript-in-your-figma-file.md', slug: 'run-javascript-in-your-figma-file', navLabel: 'Run JavaScript in your Figma file', tier: 'Advanced' },
  { file: '11-design-token-round-trip-figma-github.md', slug: 'design-token-round-trip-figma-github', navLabel: 'Design token round-trip', tier: 'Advanced' },
  { file: '12-design-code-parity-audit.md', slug: 'design-code-parity-audit', navLabel: 'Design–code parity audit', tier: 'Advanced' },
];

export const tiers = ['Starter', 'Intermediate', 'Advanced'];

export const siteTitle = 'Claude for Designers';
