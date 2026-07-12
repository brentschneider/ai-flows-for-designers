import { marked } from 'marked';
import { readFileSync, writeFileSync, mkdirSync, cpSync, existsSync, rmSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { pages, tiers, siteTitle } from './pages.config.js';

const rootDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const contentDir = path.join(rootDir, 'content');
const partialsDir = path.join(rootDir, 'partials');
const assetsDir = path.join(rootDir, 'assets');
const distDir = path.join(rootDir, 'dist');

const headerTemplate = readFileSync(path.join(partialsDir, 'header.html'), 'utf8');
const footerTemplate = readFileSync(path.join(partialsDir, 'footer.html'), 'utf8');

function buildNav(currentSlug, rootPath) {
  const homeItem = pages.find((p) => p.tier === null);
  const homeHref = rootPath;
  const homeClass = currentSlug === homeItem.slug ? ' class="active"' : '';

  const groups = tiers
    .map((tier) => {
      const items = pages.filter((p) => p.tier === tier);
      const links = items
        .map((item) => {
          const href = `${rootPath}${item.slug}/`;
          const active = item.slug === currentSlug ? ' class="active"' : '';
          return `        <li><a${active} href="${href}">${item.navLabel}</a></li>`;
        })
        .join('\n');
      return `      <section class="nav-group">\n        <h3>${tier}</h3>\n        <ul>\n${links}\n        </ul>\n      </section>`;
    })
    .join('\n');

  return `  <nav class="site-nav">\n    <a${homeClass} href="${homeHref}">Home</a>\n${groups}\n  </nav>`;
}

function renderPage(page) {
  const markdown = readFileSync(path.join(contentDir, page.file), 'utf8');
  const contentHtml = marked.parse(markdown);
  const rootPath = page.slug === '' ? './' : '../';
  const assetPath = `${rootPath}assets/`;
  const title =
    page.tier === null ? `${siteTitle} — Twelve Getting-Started Guides` : `${page.navLabel} · ${siteTitle}`;

  const header = headerTemplate
    .replaceAll('{{TITLE}}', title)
    .replaceAll('{{SITE_TITLE}}', siteTitle)
    .replaceAll('{{ROOT_PATH}}', rootPath)
    .replaceAll('{{ASSET_PATH}}', assetPath)
    .replace('<!--#include:nav-->', buildNav(page.slug, rootPath));

  const footer = footerTemplate
    .replaceAll('{{SITE_TITLE}}', siteTitle)
    .replaceAll('{{ROOT_PATH}}', rootPath)
    .replaceAll('{{ASSET_PATH}}', assetPath);

  return `${header}\n    <article class="page-body">\n${contentHtml}\n    </article>\n${footer}`;
}

function main() {
  if (existsSync(distDir)) rmSync(distDir, { recursive: true });
  mkdirSync(distDir, { recursive: true });

  for (const page of pages) {
    const html = renderPage(page);
    const outDir = page.slug === '' ? distDir : path.join(distDir, page.slug);
    mkdirSync(outDir, { recursive: true });
    writeFileSync(path.join(outDir, 'index.html'), html, 'utf8');
  }

  cpSync(assetsDir, path.join(distDir, 'assets'), { recursive: true });

  console.log(`Built ${pages.length} pages into dist/`);
}

main();
