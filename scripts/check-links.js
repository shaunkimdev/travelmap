const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const htmlFiles = [];
const failures = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === 'node_modules' || entry.name.startsWith('.')) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      htmlFiles.push(fullPath);
    }
  }
}

function existsAsFileOrDirectory(target) {
  if (fs.existsSync(target)) return true;
  if (fs.existsSync(`${target}.html`)) return true;
  if (fs.existsSync(path.join(target, 'index.html'))) return true;
  return false;
}

function checkReference(file, attr, rawValue) {
  const value = rawValue.split('#')[0].trim();
  if (value.includes('${')) return;
  if (!value || value.startsWith('http:') || value.startsWith('https:') || value.startsWith('mailto:') || value.startsWith('tel:')) {
    return;
  }
  if (value.startsWith('data:') || value.startsWith('javascript:')) return;

  const target = path.resolve(path.dirname(file), value);
  if (!target.startsWith(root) || existsAsFileOrDirectory(target)) return;

  failures.push(`${path.relative(root, file)} ${attr}="${rawValue}"`);
}

walk(root);

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  const pattern = /\b(href|src)\s*=\s*["']([^"']+)["']/gi;
  let match;
  while ((match = pattern.exec(html))) {
    checkReference(file, match[1], match[2]);
  }
}

if (failures.length > 0) {
  console.error('Broken internal references:');
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`Checked internal links in ${htmlFiles.length} HTML files.`);
