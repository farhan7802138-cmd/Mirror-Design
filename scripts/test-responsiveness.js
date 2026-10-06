const fs = require('fs');
const path = require('path');

const dirs = ['products', 'service-areas', 'services', 'blog'];
let issues = [];

dirs.forEach(d => {
  const dirPath = path.join(__dirname, '..', d);
  if (!fs.existsSync(dirPath)) return;
  const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.html'));
  
  files.forEach(f => {
    const filePath = path.join(dirPath, f);
    const content = fs.readFileSync(filePath, 'utf8');

    // 1. Check for missing or placeholder images
    const imgMatches = [...content.matchAll(/<img[^>]+src=["']([^"']+)["']/g)];
    imgMatches.forEach(m => {
      const src = m[1];
      if (src.startsWith('http://') || src.startsWith('https://')) {
        // remote url
        if (src.includes('unsplash')) {
          issues.push(`[${d}/${f}] Still contains unsplash image: ${src}`);
        }
      } else {
        // local path
        let resolvedLocal = decodeURIComponent(src);
        if (resolvedLocal.startsWith('../')) {
          resolvedLocal = path.join(__dirname, '..', resolvedLocal.replace('../', ''));
        } else if (resolvedLocal.startsWith('/')) {
          resolvedLocal = path.join(__dirname, '..', resolvedLocal.substring(1));
        } else {
          resolvedLocal = path.join(dirPath, resolvedLocal);
        }
        if (!fs.existsSync(resolvedLocal)) {
          issues.push(`[${d}/${f}] Broken local image link: ${src} -> ${resolvedLocal}`);
        }
      }
    });

    // 2. Check for inline fixed widths > 320px that could cause horizontal scroll
    const fixedWidthMatches = [...content.matchAll(/style=["'][^"']*(?<!max-|min-)width:\s*(\d+)px[^"']*["']/g)];
    fixedWidthMatches.forEach(m => {
      const w = parseInt(m[1], 10);
      if (w > 320) {
        issues.push(`[${d}/${f}] Potential overflow: inline style fixed width: ${w}px`);
      }
    });

    // 3. Check for minmax(320px or higher) inline grid templates
    const minmaxMatches = [...content.matchAll(/minmax\((\d+)px/g)];
    minmaxMatches.forEach(m => {
      const w = parseInt(m[1], 10);
      if (w >= 320) {
        issues.push(`[${d}/${f}] Minmax breakpoint may overflow on 320px mobile: minmax(${w}px)`);
      }
    });
  });
});

console.log('--- RESPONSIVE AUDIT RESULTS ---');
if (issues.length === 0) {
  console.log('✅ All checks passed! Zero broken images, zero rigid minmax overflows.');
} else {
  console.log(`Found ${issues.length} potential issues:`);
  issues.slice(0, 30).forEach(i => console.log(' - ' + i));
  if (issues.length > 30) {
    console.log(` ... and ${issues.length - 30} more.`);
  }
}
