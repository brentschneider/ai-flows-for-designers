# Claude for Designers

A static site publishing twelve practical AI workflow guides for product designers — moving past chat and into real tools: Figma files, GitHub repos, workshop boards, working prototypes.

Live at: https://brentschneider.github.io/AI-for-designers/ *(update with actual URL)*

---

## Guides

### Starter
1. Memory and past-chat search
2. Claude's computer: real files
3. Orchestrate your work stack

### Intermediate
4. Custom skills: your voice
5. AI-powered artifacts ("Claudeception")
6. Accessibility lint against WCAG 2.2
7. FigJam workshop synthesis
8. Build Figma Slides decks
9. Figma version archaeology

### Advanced
10. Run JavaScript in your Figma file
11. Design token round-trip: Figma ↔ GitHub
12. Design–code parity audit

---

## Development

**Install dependencies**

```bash
npm install
```

**Build the site**

```bash
npm run build
```

Output goes to `dist/`. The build script reads each Markdown file from `content/`, wraps it in the HTML partials from `partials/`, and copies `assets/` alongside the generated pages.

**Preview locally**

Serve `dist/` with any static file server, e.g.:

```bash
npx serve dist
```

---

## Project structure

```
content/          # Source Markdown — one file per guide
partials/         # header.html and footer.html templates
assets/
  css/style.css   # Design tokens, layout, light/dark theme
  js/main.js      # Theme toggle (localStorage persistence)
scripts/
  build.js        # Static site generator
  pages.config.js # Page registry: slugs, nav labels, tier groupings
dist/             # Built output (committed; deployed via GitHub Pages)
```

### Adding a guide

1. Add a Markdown file to `content/` following the existing numbering convention.
2. Register it in `scripts/pages.config.js` with a `slug`, `navLabel`, and `tier` (`'Starter'`, `'Intermediate'`, or `'Advanced'`).
3. Run `npm run build`.

---

## Deploy

The site deploys automatically to GitHub Pages on push to `main` via a GitHub Actions workflow. The `dist/` folder is the Pages source.
