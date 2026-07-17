import { marked } from 'marked';
import { readFileSync, writeFileSync, mkdirSync, cpSync, existsSync, rmSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { pages, tiers, sections, siteTitle } from './pages.config.js';

const rootDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const contentDir = path.join(rootDir, 'content');
const partialsDir = path.join(rootDir, 'partials');
const assetsDir = path.join(rootDir, 'assets');
const distDir = path.join(rootDir, 'dist');

const buildVersion = Date.now();
const headerTemplate = readFileSync(path.join(partialsDir, 'header.html'), 'utf8');
const footerTemplate = readFileSync(path.join(partialsDir, 'footer.html'), 'utf8');

function resolveTier(currentSlug) {
  // Guide page
  const currentPage = pages.find((p) => p.slug === currentSlug);
  if (currentPage) return currentPage.tier;
  // Section landing page
  const sectionEntry = Object.entries(sections).find(([, s]) => s.slug === currentSlug);
  if (sectionEntry) return sectionEntry[0];
  return null;
}

function buildNav(currentSlug, rootPath) {
  const currentTier = resolveTier(currentSlug);
  const homeActive = currentTier === null ? ' class="active"' : '';
  const tierLinks = tiers
    .map((tier) => {
      const { slug } = sections[tier];
      const active = currentTier === tier ? ' class="active"' : '';
      return `    <a${active} href="${rootPath}${slug}/">${tier}</a>`;
    })
    .join('\n');

  return `  <nav class="site-topnav">\n    <a${homeActive} href="${rootPath}">Home</a>\n${tierLinks}\n  </nav>`;
}

function buildBreadcrumb(crumbs) {
  if (!crumbs.length) return '';
  const items = crumbs
    .map(({ label, href }, i) => {
      const isLast = i === crumbs.length - 1;
      const content = isLast || !href
        ? `<span aria-current="page">${label}</span>`
        : `<a href="${href}">${label}</a>`;
      return `    <li>${content}</li>`;
    })
    .join('\n');
  return `  <nav class="breadcrumb" aria-label="Breadcrumb">\n    <ol>\n${items}\n    </ol>\n  </nav>`;
}

function renderPage(page) {
  const markdown = readFileSync(path.join(contentDir, page.file), 'utf8');
  const contentHtml = marked.parse(markdown);
  const rootPath = page.slug === '' ? './' : '../../';
  const assetPath = `${rootPath}assets/`;
  const title =
    page.tier === null ? `${siteTitle} — Twelve Getting-Started Guides` : `${page.navLabel} · ${siteTitle}`;

  const crumbs = page.tier === null ? [] : [
    { label: 'Home', href: rootPath },
    { label: page.tier, href: `${rootPath}${sections[page.tier].slug}/` },
    { label: page.navLabel, href: null },
  ];

  const header = headerTemplate
    .replaceAll('{{TITLE}}', title)
    .replaceAll('{{SITE_TITLE}}', siteTitle)
    .replaceAll('{{ROOT_PATH}}', rootPath)
    .replaceAll('{{ASSET_PATH}}', assetPath)
    .replaceAll('{{BUILD_VERSION}}', buildVersion)
    .replace('<!--#include:nav-->', buildNav(page.slug, rootPath))
    .replace('<!--#include:breadcrumb-->', buildBreadcrumb(crumbs));

  const footer = footerTemplate
    .replaceAll('{{SITE_TITLE}}', siteTitle)
    .replaceAll('{{ROOT_PATH}}', rootPath)
    .replaceAll('{{ASSET_PATH}}', assetPath);

  return `${header}\n    <article class="page-body">\n${contentHtml}\n    </article>\n${footer}`;
}

function buildSectionPage(tier) {
  const { slug, description } = sections[tier];
  const rootPath = '../';
  const assetPath = `${rootPath}assets/`;
  const title = `${tier} · ${siteTitle}`;

  const items = pages.filter((p) => p.tier === tier);
  const guideList = items
    .map((item, i) => {
      const href = `${item.slug}/`;
      return `      <a class="guide-card" href="${href}">
        <span class="guide-card-number">${String(i + 1).padStart(2, '0')}</span>
        <span class="guide-card-label">${item.navLabel}</span>
      </a>`;
    })
    .join('\n');

  const crumbs = [
    { label: 'Home', href: rootPath },
    { label: tier, href: null },
  ];

  const header = headerTemplate
    .replaceAll('{{TITLE}}', title)
    .replaceAll('{{SITE_TITLE}}', siteTitle)
    .replaceAll('{{ROOT_PATH}}', rootPath)
    .replaceAll('{{ASSET_PATH}}', assetPath)
    .replaceAll('{{BUILD_VERSION}}', buildVersion)
    .replace('<!--#include:nav-->', buildNav(slug, rootPath))
    .replace('<!--#include:breadcrumb-->', buildBreadcrumb(crumbs));

  const footer = footerTemplate
    .replaceAll('{{SITE_TITLE}}', siteTitle)
    .replaceAll('{{ROOT_PATH}}', rootPath)
    .replaceAll('{{ASSET_PATH}}', assetPath);

  const body = `    <article class="page-body section-landing">
      <h1>${tier}</h1>
      <p class="section-description">${description}</p>
      <div class="guide-list">
${guideList}
      </div>
    </article>`;

  return `${header}\n${body}\n${footer}`;
}

function main() {
  if (existsSync(distDir)) rmSync(distDir, { recursive: true });
  mkdirSync(distDir, { recursive: true });

  for (const page of pages) {
    const html = renderPage(page);
    const outDir = page.slug === '' ? distDir : path.join(distDir, sections[page.tier]?.slug ?? '', page.slug);
    mkdirSync(outDir, { recursive: true });
    writeFileSync(path.join(outDir, 'index.html'), html, 'utf8');
  }

  for (const tier of tiers) {
    const { slug } = sections[tier];
    const html = buildSectionPage(tier);
    const outDir = path.join(distDir, slug);
    mkdirSync(outDir, { recursive: true });
    writeFileSync(path.join(outDir, 'index.html'), html, 'utf8');
  }

  cpSync(assetsDir, path.join(distDir, 'assets'), { recursive: true });

  console.log(`Built ${pages.length} pages + ${tiers.length} section pages into dist/`);
}

main();
