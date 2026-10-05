const fs = require('fs');
const path = require('path');

function getHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (file === 'node_modules' || file === '.git' || file === 'details') continue;
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      getHtmlFiles(filePath, fileList);
    } else if (file.endsWith('.html')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const allHtmlFiles = getHtmlFiles(path.join(__dirname, '..'));
console.log(`Starting comprehensive SEO audit across ${allHtmlFiles.length} HTML pages...\n`);

let totalErrors = 0;
let totalWarnings = 0;

const issues = [];

allHtmlFiles.forEach(file => {
  const relPath = path.relative(path.join(__dirname, '..'), file).replace(/\\/g, '/');
  // Skip legacy / temporary html files if any
  if (relPath.startsWith('details/') || relPath === 'social-post.html' || relPath === 'gbp-content.html') {
    return;
  }

  const content = fs.readFileSync(file, 'utf8');

  // 1. Language tag
  if (!content.includes('<html lang="en">') && !content.includes("<html lang='en'>")) {
    issues.push({ file: relPath, type: 'ERROR', msg: 'Missing <html lang="en">' });
    totalErrors++;
  }

  // 2. Title tag
  const titleMatch = content.match(/<title>(.*?)<\/title>/s);
  const title = titleMatch ? titleMatch[1].trim() : '';
  if (!title) {
    issues.push({ file: relPath, type: 'ERROR', msg: 'Missing <title> tag' });
    totalErrors++;
  } else if (title.length >= 60 && relPath !== '404.html') {
    issues.push({ file: relPath, type: 'WARNING', msg: `Title exceeds 59 chars (${title.length}): "${title}"` });
    totalWarnings++;
  }

  // 3. Meta description
  const metaMatch = content.match(/<meta\s+name=["']description["']\s+content=["'](.*?)["']/s);
  const meta = metaMatch ? metaMatch[1].trim() : '';
  if (!meta) {
    issues.push({ file: relPath, type: 'ERROR', msg: 'Missing meta description' });
    totalErrors++;
  } else if (meta.length >= 160) {
    issues.push({ file: relPath, type: 'WARNING', msg: `Meta description exceeds 159 chars (${meta.length}): "${meta}"` });
    totalWarnings++;
  }

  // 4. Meta keywords (should be removed)
  if (content.includes('name="keywords"') || content.includes("name='keywords'")) {
    issues.push({ file: relPath, type: 'ERROR', msg: 'Deprecated <meta name="keywords"> tag found' });
    totalErrors++;
  }

  // 5. H1 heading count
  const h1Matches = content.match(/<h1[\s>]/gi) || [];
  if (h1Matches.length === 0) {
    issues.push({ file: relPath, type: 'ERROR', msg: 'Missing H1 heading' });
    totalErrors++;
  } else if (h1Matches.length > 1) {
    issues.push({ file: relPath, type: 'WARNING', msg: `Multiple H1 headings found (${h1Matches.length})` });
    totalWarnings++;
  }

  // 6. Canonical link
  if (relPath !== '404.html') {
    const canonicalMatch = content.match(/<link\s+rel=["']canonical["']\s+href=["'](.*?)["']/s);
    if (!canonicalMatch) {
      issues.push({ file: relPath, type: 'ERROR', msg: 'Missing canonical link tag' });
      totalErrors++;
    }
  }

  // 7. Old product-detail# link check
  const oldProductDetailLinks = content.match(/href=["']\/product-detail#[^"']+["']/g);
  if (oldProductDetailLinks && relPath !== 'product-detail.html') {
    issues.push({ file: relPath, type: 'ERROR', msg: `Found ${oldProductDetailLinks.length} old /product-detail# links` });
    totalErrors++;
  }

  // 8. Unsplash external hotlink check
  const unsplashLinks = content.match(/src=["']https:\/\/images\.unsplash\.com\/[^"']+["']/g);
  if (unsplashLinks) {
    issues.push({ file: relPath, type: 'ERROR', msg: `Found ${unsplashLinks.length} hotlinked Unsplash images` });
    totalErrors++;
  }
});

console.log('=== AUDIT RESULTS ===');
if (issues.length === 0) {
  console.log('PASSED! 0 errors and 0 warnings found across all pages.');
} else {
  console.log(`Found ${totalErrors} errors and ${totalWarnings} warnings:`);
  issues.forEach(iss => console.log(`[${iss.type}] ${iss.file}: ${iss.msg}`));
}
