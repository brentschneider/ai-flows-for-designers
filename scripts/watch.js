import { watch } from 'node:fs';
import { execSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

function build() {
  try {
    execSync('node scripts/build.js', { cwd: rootDir, stdio: 'inherit' });
  } catch {
    console.error('Build failed');
  }
}

let debounceTimer = null;
function onChange(filename) {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    console.log(`\nChanged: ${filename} — rebuilding...`);
    build();
  }, 100);
}

build();

for (const dir of ['content', 'partials', 'assets']) {
  watch(path.join(rootDir, dir), { recursive: true }, (_, filename) => onChange(`${dir}/${filename}`));
}

watch(path.join(rootDir, 'scripts', 'pages.config.js'), () => onChange('scripts/pages.config.js'));

console.log('Watching for changes (Ctrl+C to stop)...');
