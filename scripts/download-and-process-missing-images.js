const fs = require('fs');
const path = require('path');
const https = require('https');
const sharp = require('sharp');

const brainDir = 'C:\\Users\\Farhan Ali\\.gemini\\antigravity-ide\\brain\\770ed455-b7b9-4d06-bcd2-2dc54838430e';

const generatedImages = [
  {
    slug: 'round-anodized-bronze-trim-mirror',
    localFile: path.join(brainDir, 'round_bronze_mirror_1791270681940.jpg')
  },
  {
    slug: 'rectangular-frameless-beveled-mirror',
    localFile: path.join(brainDir, 'rect_beveled_mirror_1791270706251.jpg')
  },
  {
    slug: 'arched-entryway-console-mirror',
    localFile: path.join(brainDir, 'arched_entry_mirror_1791270733249.jpg')
  }
];

const remoteImages = [
  {
    slug: 'antique-bronze-engraved-mirror',
    url: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=85'
  },
  {
    slug: 'sunburst-metal-accent-mirror',
    url: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=85'
  },
  {
    slug: 'hanging-leather-strap-oval-mirror',
    url: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=85'
  },
  {
    slug: 'sunburst-decorative-mirror',
    url: 'https://images.unsplash.com/photo-1592078528550-ba08b97ead10?auto=format&fit=crop&w=1200&q=85'
  },
  {
    slug: 'glass-shower-partition',
    url: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1200&q=85'
  },
  {
    slug: 'office-glass-partition',
    url: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=85'
  },
  {
    slug: 'glass-kitchen-backsplash',
    url: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=1200&q=85'
  },
  {
    slug: 'glass-staircase-railing',
    url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85'
  },
  {
    slug: 'aluminium-sliding-window',
    url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85'
  },
  {
    slug: 'aluminium-casement-window',
    url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85'
  },
  {
    slug: 'aluminium-railing-grills',
    url: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=85'
  },
  {
    slug: 'aluminium-cabinet-frame',
    url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85'
  }
];

function downloadBuffer(url) {
  return new Promise((resolve, reject) => {
    https.get(url, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadBuffer(res.headers.location).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
      }
      const chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => resolve(Buffer.concat(chunks)));
    }).on('error', reject);
  });
}

async function processImage(inputBuffer, slug) {
  const productsTarget = path.join(__dirname, '../images/products', `${slug}-sialkot.webp`);
  const placeholdersTarget = path.join(__dirname, '../images/placeholders', `${slug}-sialkot.webp`);

  const img = sharp(inputBuffer);
  const meta = await img.metadata();
  let pipeline = img.rotate();
  if (meta.width > 1200) {
    pipeline = pipeline.resize({ width: 1200, withoutEnlargement: true });
  }

  const webpBuffer = await pipeline.webp({ quality: 82, effort: 4 }).toBuffer();

  fs.writeFileSync(productsTarget, webpBuffer);
  fs.writeFileSync(placeholdersTarget, webpBuffer);

  const stat = fs.statSync(productsTarget);
  console.log(`Saved ${slug}: ${(stat.size / 1024).toFixed(1)} KB`);
}

async function run() {
  console.log('--- Processing 3 AI Generated Images ---');
  for (const item of generatedImages) {
    if (!fs.existsSync(item.localFile)) {
      console.error(`Local file not found: ${item.localFile}`);
      continue;
    }
    const buf = fs.readFileSync(item.localFile);
    await processImage(buf, item.slug);
  }

  console.log('\n--- Downloading & Processing 12 Remote Images ---');
  for (const item of remoteImages) {
    try {
      console.log(`Fetching ${item.slug}...`);
      const buf = await downloadBuffer(item.url);
      await processImage(buf, item.slug);
    } catch (err) {
      console.error(`Error processing ${item.slug}:`, err.message);
    }
  }

  console.log('\n--- Updating Service & Category Placeholders ---');
  // Copy relevant product photos to service placeholders
  const serviceCopies = [
    { src: 'images/aluminium-doors.webp', dst: 'images/placeholders/aluminium-doors-sialkot.webp' },
    { src: 'images/products/aluminium-sliding-window-sialkot.webp', dst: 'images/placeholders/aluminium-windows-sialkot.webp' },
    { src: 'images/products/office-glass-partition-sialkot.webp', dst: 'images/placeholders/glass-partitions-sialkot.webp' },
    { src: 'images/shopfront-shutters.webp', dst: 'images/placeholders/shopfronts-sialkot.webp' },
    { src: 'images/products/glass-shower-partition-sialkot.webp', dst: 'images/placeholders/shower-cabins-sialkot.webp' }
  ];

  for (const sc of serviceCopies) {
    const srcPath = path.join(__dirname, '..', sc.src);
    const dstPath = path.join(__dirname, '..', sc.dst);
    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, dstPath);
      console.log(`Copied ${sc.src} -> ${sc.dst}`);
    }
  }

  console.log('\nDone processing all missing product images!');
}

run();
