const cp = require('child_process');
const fs = require('fs');

const oldContent = cp.execSync('git show daabcee~1:products-data.js', { maxBuffer: 10 * 1024 * 1024 }).toString();

// Extract each object
const lines = oldContent.split('\n');
let curId = null;
let curSlug = null;
let curTitle = null;
let curImg = null;

const results = [];

lines.forEach(l => {
  const idM = l.match(/id:\s*(\d+)/);
  if (idM) curId = parseInt(idM[1], 10);
  const slugM = l.match(/slug:\s*["']([^"']+)["']/);
  if (slugM) curSlug = slugM[1];
  const titleM = l.match(/title:\s*["']([^"']+)["']/);
  if (titleM) curTitle = titleM[1];
  const imgM = l.match(/mainImage:\s*["']([^"']+)["']/);
  if (imgM) {
    curImg = imgM[1];
    if (curId && curSlug && curTitle) {
      results.push({ id: curId, slug: curSlug, title: curTitle, image: curImg });
      curId = null;
      curSlug = null;
      curTitle = null;
      curImg = null;
    }
  }
});

console.log('Found', results.length, 'products in old products-data.js:');
results.forEach(r => {
  if (r.image.includes('unsplash')) {
    console.log(`ID ${r.id}: ${r.slug} -> ${r.image}`);
  }
});
