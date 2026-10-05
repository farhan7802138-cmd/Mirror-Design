const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../products');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));
console.log('Validating ' + files.length + ' product pages...');

let issues = 0;
files.forEach(f => {
  const content = fs.readFileSync(path.join(dir, f), 'utf8');
  
  // Title
  const titleMatch = content.match(/<title>(.*?)<\/title>/);
  const title = titleMatch ? titleMatch[1] : '';
  if (!title || title.length >= 60) {
    console.log('Title invalid in ' + f + ': (' + (title ? title.length : 0) + ' chars) -> ' + title);
    issues++;
  }
  
  // Meta description
  const metaMatch = content.match(/<meta\s+name=["']description["']\s+content=["'](.*?)["']/);
  const meta = metaMatch ? metaMatch[1] : '';
  if (!meta || meta.length >= 160) {
    console.log('Meta invalid in ' + f + ': (' + (meta ? meta.length : 0) + ' chars) -> ' + meta);
    issues++;
  }

  // H1 count
  const h1Matches = content.match(/<h1[\s>]/g) || [];
  if (h1Matches.length !== 1) {
    console.log('Invalid H1 count in ' + f + ': ' + h1Matches.length);
    issues++;
  }

  // Words count
  const plainText = content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  const words = plainText.split(' ').length;
  if (words < 200) {
    console.log('Low word count in ' + f + ': ' + words);
    issues++;
  }
});

console.log('Validation complete. Total issues found: ' + issues);
