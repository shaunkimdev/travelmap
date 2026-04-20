const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const htmlFiles = [];

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

function inlineScripts(html) {
  const scripts = [];
  const pattern = /<script\b([^>]*)>([\s\S]*?)<\/script>/gi;
  let match;
  while ((match = pattern.exec(html))) {
    if (/\bsrc\s*=/.test(match[1])) continue;
    scripts.push(match[2]);
  }
  return scripts;
}

walk(root);

let failures = 0;
for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  inlineScripts(html).forEach((script, index) => {
    try {
      new vm.Script(script, {
        filename: `${path.relative(root, file)}#inline-script-${index + 1}`,
      });
    } catch (error) {
      failures += 1;
      console.error(`${path.relative(root, file)} inline script ${index + 1}: ${error.message}`);
    }
  });
}

if (failures > 0) {
  process.exitCode = 1;
} else {
  console.log(`Checked ${htmlFiles.length} HTML files.`);
}
