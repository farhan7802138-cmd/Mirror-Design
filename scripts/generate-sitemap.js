const fs = require('fs');
const path = require('path');

const baseUrl = 'https://mirror-design.vercel.app';
const currentDate = '2026-10-05';

const sitemapEntries = [];

function addUrl(loc, priority = '0.8', changefreq = 'weekly') {
  sitemapEntries.push({
    loc: `${baseUrl}${loc}`,
    lastmod: currentDate,
    changefreq,
    priority
  });
}

// 1. Core pages
addUrl('', '1.0', 'weekly');
addUrl('/about', '0.9', 'monthly');
addUrl('/services', '0.9', 'weekly');
addUrl('/service-areas', '0.9', 'weekly');
addUrl('/aluminium', '0.9', 'weekly');
addUrl('/mirrors', '0.9', 'weekly');
addUrl('/gallery', '0.9', 'weekly');
addUrl('/blog', '0.9', 'weekly');
addUrl('/contact', '0.9', 'weekly');
addUrl('/privacy', '0.5', 'monthly');
addUrl('/terms', '0.5', 'monthly');

// 2. Services
const servicesDir = path.join(__dirname, '../services');
if (fs.existsSync(servicesDir)) {
  fs.readdirSync(servicesDir)
    .filter(f => f.endsWith('.html'))
    .forEach(f => {
      const slug = f.replace('.html', '');
      addUrl(`/services/${slug}`, '0.85', 'weekly');
    });
}

// 3. Location pages
const areasDir = path.join(__dirname, '../service-areas');
if (fs.existsSync(areasDir)) {
  fs.readdirSync(areasDir)
    .filter(f => f.endsWith('.html'))
    .forEach(f => {
      const slug = f.replace('.html', '');
      addUrl(`/service-areas/${slug}`, '0.85', 'weekly');
    });
}

// 4. Products
const productsDir = path.join(__dirname, '../products');
if (fs.existsSync(productsDir)) {
  fs.readdirSync(productsDir)
    .filter(f => f.endsWith('.html'))
    .forEach(f => {
      const slug = f.replace('.html', '');
      addUrl(`/products/${slug}`, '0.8', 'weekly');
    });
}

// 5. Blog Posts
const blogDir = path.join(__dirname, '../blog');
if (fs.existsSync(blogDir)) {
  fs.readdirSync(blogDir)
    .filter(f => f.endsWith('.html'))
    .forEach(f => {
      const slug = f.replace('.html', '');
      addUrl(`/blog/${slug}`, '0.8', 'monthly');
    });
}

console.log(`Generating sitemap with ${sitemapEntries.length} total URLs...`);

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries.map(e => `  <url>
    <loc>${e.loc}</loc>
    <lastmod>${e.lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`).join('\n')}
</urlset>
`;

fs.writeFileSync(path.join(__dirname, '../sitemap.xml'), xml, 'utf8');
console.log('sitemap.xml successfully generated!');
