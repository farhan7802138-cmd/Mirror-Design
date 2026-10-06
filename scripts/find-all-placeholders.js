const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    if (file === 'node_modules' || file === '.git' || file === 'scratch') return;
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(fullPath));
    } else if (file.endsWith('.html') || file.endsWith('.js') || file.endsWith('.json')) {
      results.push(fullPath);
    }
  });
  return results;
}

const allFiles = walk('.');
console.log('Total files inspected:', allFiles.length);

const placeholderUsage = {};

allFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const matches = content.match(/images\/placeholders\/[a-zA-Z0-9_-]+\.webp/g);
  if (matches) {
    placeholderUsage[file] = matches;
  }
});

console.log('Files referencing images/placeholders:');
for (const [file, matches] of Object.entries(placeholderUsage)) {
  const rel = path.relative('.', file).replace(/\\/g, '/');
  console.log(`- ${rel}: ${matches.length} occurrences (${[...new Set(matches)].join(', ')})`);
}
