import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

const OLD_DOMAIN = 'mirror-design.vercel.app';
const NEW_DOMAIN = 'mirrordesignsialkot.com';

const filesToUpdate = [
  'src/components/SEO.jsx',
  'src/templates/ProductPage.jsx',
  'src/templates/ServicePage.jsx',
  'src/templates/ServiceAreaPage.jsx',
  'src/templates/BlogPostPage.jsx',
  'src/data/root-pages.js',
  'src/data/services.js',
  'src/data/service-areas.js',
  'src/data/blog-posts.js',
  'robots.txt',
  'public/robots.txt',
  'sitemap.xml',
  'public/sitemap.xml'
];

let totalReplacements = 0;

for (const relPath of filesToUpdate) {
  const fullPath = path.join(rootDir, relPath);
  if (!fs.existsSync(fullPath)) {
    console.warn(`File not found: ${relPath}`);
    continue;
  }

  let content = fs.readFileSync(fullPath, 'utf8');
  const count = (content.match(new RegExp(OLD_DOMAIN, 'g')) || []).length;

  if (count > 0) {
    content = content.replaceAll(OLD_DOMAIN, NEW_DOMAIN);
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`Updated ${relPath} (${count} occurrences replaced)`);
    totalReplacements += count;
  } else {
    console.log(`No occurrences in ${relPath}`);
  }
}

console.log(`Total occurrences replaced: ${totalReplacements}`);
