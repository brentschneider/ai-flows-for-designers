export const pages = [
  { file: '00-README.md', slug: '', navLabel: 'Home', tier: null },

  { file: '01-memory-and-past-chats.md', slug: 'memory-and-past-chats', navLabel: 'Memory and past-chat search', tier: 'Foundations' },
  { file: '02-claudes-computer-real-files.md', slug: 'claudes-computer-real-files', navLabel: "Claude's computer: real files", tier: 'Foundations' },
  { file: '04-custom-skills-your-voice.md', slug: 'custom-skills-your-voice', navLabel: 'Custom skills: your voice', tier: 'Foundations' },
  { file: '03-orchestrate-your-work-stack.md', slug: 'orchestrate-your-work-stack', navLabel: 'Orchestrate your work stack', tier: 'Foundations' },

  { file: '07-figjam-workshop-synthesis.md', slug: 'figjam-workshop-synthesis', navLabel: 'FigJam workshop synthesis', tier: 'Building' },
  { file: '05-ai-powered-artifacts-claudeception.md', slug: 'ai-powered-artifacts-claudeception', navLabel: 'AI-powered artifacts', tier: 'Building' },
  { file: '08-build-figma-slides-decks.md', slug: 'build-figma-slides-decks', navLabel: 'Build Figma Slides decks', tier: 'Building' },

  { file: '06-accessibility-lint-figma-wcag.md', slug: 'accessibility-lint-figma-wcag', navLabel: 'Accessibility lint against WCAG', tier: 'Scaling' },
  { file: '09-figma-version-archaeology.md', slug: 'figma-version-archaeology', navLabel: 'Figma version archaeology', tier: 'Scaling' },
  { file: '12-design-code-parity-audit.md', slug: 'design-code-parity-audit', navLabel: 'Design–code parity audit', tier: 'Scaling' },
  { file: '11-design-token-round-trip-figma-github.md', slug: 'design-token-round-trip-figma-github', navLabel: 'Design token round-trip', tier: 'Scaling' },
  { file: '10-run-javascript-in-your-figma-file.md', slug: 'run-javascript-in-your-figma-file', navLabel: 'Run JavaScript in your Figma file', tier: 'Scaling' },
];

export const tiers = ['Foundations', 'Building', 'Scaling'];

export const sections = {
  Foundations: {
    slug: 'foundations',
    description: 'Set up your AI practice. These guides cover how Claude remembers you, what it can touch on your machine, and how to wire it into your tools and voice before you start building.',
  },
  Building: {
    slug: 'building',
    description: 'Make things with AI inside your design tools. From synthesizing workshop output to generating Figma slides and interactive artifacts — guides for when you\'re actively producing.',
  },
  Scaling: {
    slug: 'scaling',
    description: 'Systemize, audit, and automate. These guides push into engineering-adjacent territory — quality checks, design system pipelines, version archaeology, and cross-discipline handoff.',
  },
};

export const siteTitle = 'AI for Designers';
