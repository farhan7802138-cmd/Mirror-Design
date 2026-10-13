import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

function getHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir, { withFileTypes: true });
  list.forEach(file => {
    const full = path.join(dir, file.name);
    if (file.isDirectory()) {
      results = results.concat(getHtmlFiles(full));
    } else if (file.name.endsWith('.html')) {
      results.push(full);
    }
  });
  return results;
}

const htmlFiles = getHtmlFiles(distDir);
console.log(`Checking internal links and images across ${htmlFiles.length} HTML files in dist/...`);

let checkedLinks = 0;
let checkedImages = 0;
const brokenLinks = [];
const brokenImages = [];

htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const relPath = path.relative(distDir, file);

  // 1. Check Images
  const imgMatches = [...content.matchAll(/<img[^>]+src=["']([^"']+)["']/gi)].map(m => m[1]);
  imgMatches.forEach(src => {
    checkedImages++;
    if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('data:')) return;

    let targetPath = decodeURIComponent(src.split('?')[0].split('#')[0]);
    if (targetPath.startsWith('/')) targetPath = targetPath.slice(1);

    const fullPath = path.join(distDir, targetPath);
    if (!fs.existsSync(fullPath)) {
      brokenImages.push({ inPage: relPath, image: src, resolvedPath: fullPath });
    }
  });

  // 2. Check internal links
  const linkMatches = [...content.matchAll(/<a[^>]+href=["']([^"']+)["']/gi)].map(m => m[1]);
  linkMatches.forEach(href => {
    if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#') || href.startsWith('[') || href.startsWith('javascript:')) return;

    checkedLinks++;
    let cleanHref = href.split('?')[0].split('#')[0];
    if (cleanHref.endsWith('.html')) cleanHref = cleanHref.slice(0, -5);
    if (cleanHref.startsWith('/')) cleanHref = cleanHref.slice(1);

    // Checks: dist/cleanHref.html or dist/cleanHref/index.html or dist/index.html if empty
    const check1 = path.join(distDir, cleanHref ? `${cleanHref}.html` : 'index.html');
    const check2 = path.join(distDir, cleanHref, 'index.html');

    if (!fs.existsSync(check1) && !fs.existsSync(check2)) {
      brokenLinks.push({ inPage: relPath, link: href });
    }
  });
});

console.log(`\nVerification Results:`);
console.log(`Checked Images: ${checkedImages}`);
console.log(`Broken Images: ${brokenImages.length}`);
if (brokenImages.length > 0) {
  console.log('Broken Images details:', brokenImages.slice(0, 10));
}

console.log(`Checked Internal Links: ${checkedLinks}`);
console.log(`Broken Internal Links: ${brokenLinks.length}`);
if (brokenLinks.length > 0) {
  console.log('Broken Links details:', brokenLinks.slice(0, 10));
}
