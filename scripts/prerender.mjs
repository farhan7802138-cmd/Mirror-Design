import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

// Import data lists
import products from '../src/data/products.js';
import blogPosts from '../src/data/blog-posts.js';
import serviceAreas from '../src/data/service-areas.js';
import services from '../src/data/services.js';

const routes = [
  // Root pages
  '/',
  '/about',
  '/services',
  '/service-areas',
  '/aluminium',
  '/mirrors',
  '/gallery',
  '/blog',
  '/contact',
  '/privacy',
  '/terms',
  '/404',

  // Dynamic services (6)
  ...services.map(s => `/services/${s.slug}`),

  // Dynamic service areas (8)
  ...serviceAreas.map(a => `/service-areas/${a.slug}`),

  // Dynamic blog articles (13)
  ...blogPosts.map(b => `/blog/${b.slug}`),

  // Dynamic products (46)
  ...products.map(p => `/products/${p.slug}`)
];

async function prerender() {
  console.log(`Starting SSG Pre-rendering for ${routes.length} routes...`);

  const templatePath = path.join(rootDir, 'dist/index.html');
  if (!fs.existsSync(templatePath)) {
    throw new Error('dist/index.html not found. Please run client build first.');
  }
  const template = fs.readFileSync(templatePath, 'utf8');

  const serverEntryPath = path.join(rootDir, 'dist-ssr/entry-server.js');
  if (!fs.existsSync(serverEntryPath)) {
    throw new Error('dist-ssr/entry-server.js not found. Please run server build first.');
  }

  // Import SSR entry
  const { render } = await import(pathToFileURL(serverEntryPath).href);

  let successCount = 0;

  for (const route of routes) {
    try {
      const { html, helmet } = render(route);

      const headTags = [
        helmet.title?.toString() || '',
        helmet.meta?.toString() || '',
        helmet.link?.toString() || '',
        helmet.script?.toString() || ''
      ].filter(Boolean).join('\n  ');

      let renderedHtml = template
        .replace('<!--head-tags-->', headTags)
        .replace('<!--app-html-->', html);

      if (route === '/') {
        fs.writeFileSync(path.join(rootDir, 'dist/index.html'), renderedHtml, 'utf8');
      } else if (route === '/404') {
        fs.writeFileSync(path.join(rootDir, 'dist/404.html'), renderedHtml, 'utf8');
        const dir = path.join(rootDir, 'dist/404');
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(path.join(dir, 'index.html'), renderedHtml, 'utf8');
      } else {
        // e.g. /about -> dist/about.html AND dist/about/index.html
        // e.g. /services/aluminium-doors -> dist/services/aluminium-doors.html AND dist/services/aluminium-doors/index.html
        const cleanRoute = route.startsWith('/') ? route.slice(1) : route;
        const htmlFilePath = path.join(rootDir, 'dist', `${cleanRoute}.html`);
        const htmlDir = path.dirname(htmlFilePath);
        if (!fs.existsSync(htmlDir)) fs.mkdirSync(htmlDir, { recursive: true });
        fs.writeFileSync(htmlFilePath, renderedHtml, 'utf8');

        const indexDir = path.join(rootDir, 'dist', cleanRoute);
        if (!fs.existsSync(indexDir)) fs.mkdirSync(indexDir, { recursive: true });
        fs.writeFileSync(path.join(indexDir, 'index.html'), renderedHtml, 'utf8');
      }

      successCount++;
    } catch (err) {
      console.error(`Failed to pre-render route ${route}:`, err);
    }
  }

  console.log(`Successfully pre-rendered ${successCount} / ${routes.length} routes to static HTML!`);

  // Clean up dist-ssr directory
  const ssrDir = path.join(rootDir, 'dist-ssr');
  if (fs.existsSync(ssrDir)) {
    fs.rmSync(ssrDir, { recursive: true, force: true });
  }
}

prerender().catch(err => {
  console.error('SSG Pre-rendering failed:', err);
  process.exit(1);
});
