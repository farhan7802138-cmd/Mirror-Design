const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Ensure directories
const dirsToEnsure = [
  path.join(__dirname, '../images/products'),
  path.join(__dirname, '../images/placeholders')
];

dirsToEnsure.forEach(d => {
  if (!fs.existsSync(d)) {
    fs.mkdirSync(d, { recursive: true });
  }
});

// Mapping of image files to clean, lowercase, hyphenated SEO-friendly names
// We will process images from images, images 2, Images 3, images 4, images 5, images 6, images 7, images 8
async function processAllImages() {
  console.log('--- Processing All Images to WebP (<150KB) ---');

  // 1. Process root images folder png/jpeg to webp
  const rootImagesDir = path.join(__dirname, '../images');
  const rootFiles = fs.readdirSync(rootImagesDir);
  for (const file of rootFiles) {
    const fullPath = path.join(rootImagesDir, file);
    if (fs.statSync(fullPath).isFile() && (file.endsWith('.png') || file.endsWith('.jpeg') || file.endsWith('.jpg'))) {
      const baseName = path.parse(file).name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
      const outPath = path.join(rootImagesDir, `${baseName}.webp`);
      
      try {
        const image = sharp(fullPath);
        const meta = await image.metadata();
        let pipeline = image.rotate(); // auto-rotate from EXIF
        if (meta.width > 1600) {
          pipeline = pipeline.resize({ width: 1600, withoutEnlargement: true });
        }
        await pipeline
          .webp({ quality: 82, effort: 4 })
          .toFile(outPath);
        
        const stat = fs.statSync(outPath);
        console.log(`Converted root: ${file} -> ${baseName}.webp (${(stat.size / 1024).toFixed(1)} KB)`);
      } catch (err) {
        console.error(`Error converting ${file}:`, err.message);
      }
    }
  }

  // 2. Map of specific product images from numbered folders
  // We'll define a comprehensive lookup mapping old relative path -> new relative path
  const mapping = {};

  // Helper to convert and save into images/products
  async function convertToProductWebp(srcDir, srcFilename, targetSlugName) {
    const fullSrc = path.join(__dirname, '..', srcDir, srcFilename);
    if (!fs.existsSync(fullSrc)) {
      console.warn(`File not found: ${fullSrc}`);
      return null;
    }
    const targetFilename = `${targetSlugName}.webp`;
    const targetPath = path.join(__dirname, '../images/products', targetFilename);

    try {
      const img = sharp(fullSrc);
      const meta = await img.metadata();
      let pipeline = img.rotate();
      if (meta.width > 1400) {
        pipeline = pipeline.resize({ width: 1400, withoutEnlargement: true });
      }
      await pipeline
        .webp({ quality: 82, effort: 4 })
        .toFile(targetPath);

      const stat = fs.statSync(targetPath);
      console.log(`Converted product img: [${srcDir}/${srcFilename}] -> images/products/${targetFilename} (${(stat.size / 1024).toFixed(1)} KB)`);
      return `images/products/${targetFilename}`;
    } catch (e) {
      console.error(`Failed to convert ${srcFilename}:`, e.message);
      return null;
    }
  }

  // Detailed image conversions for all WhatsApp images
  const conversions = [
    // images 2
    { dir: 'images 2', file: 'mirror 2.jpeg', target: 'octagonal-dual-tone-led-smart-mirror-sialkot' },
    { dir: 'images 2', file: 'WhatsApp Image 2026-06-23 at 7.29.16 PM (1).jpeg', target: 'wavy-royal-blue-velvet-floor-mirror-sialkot' },
    { dir: 'images 2', file: 'WhatsApp Image 2026-06-23 at 7.29.17 PM (3).jpeg', target: 'wavy-black-velvet-floor-mirror-sialkot' },
    { dir: 'images 2', file: 'WhatsApp Image 2026-06-23 at 7.30.55 PM (1).jpeg', target: 'wavy-backlit-showroom-trio-sialkot' },
    { dir: 'images 2', file: 'WhatsApp Image 2026-06-23 at 7.30.55 PM.jpeg', target: 'arched-backlit-vanity-station-sialkot' },
    { dir: 'images 2', file: 'WhatsApp Image 2026-06-23 at 7.30.58 PM (1).jpeg', target: 'organic-velvet-pebble-wall-mirror-sialkot' },
    { dir: 'images 2', file: 'WhatsApp Image 2026-06-23 at 7.30.58 PM.jpeg', target: 'custom-wavy-led-floor-mirrors-pentad-sialkot' },
    { dir: 'images 2', file: 'WhatsApp Image 2026-06-23 at 7.31.01 PM (2).jpeg', target: 'spiral-frosted-led-smart-mirror-sialkot' },
    { dir: 'images 2', file: 'WhatsApp Image 2026-06-23 at 7.31.01 PM (3).jpeg', target: 'greek-key-backlit-smart-mirror-sialkot' },
    { dir: 'images 2', file: 'WhatsApp Image 2026-06-23 at 7.31.01 PM.jpeg', target: 'rgb-neon-arched-floor-mirrors-sialkot' },
    { dir: 'images 2', file: 'WhatsApp Image 2026-06-23 at 7.31.02 PM.jpeg', target: 'oval-sunburst-backlit-smart-mirror-sialkot' },
    { dir: 'images 2', file: 'WhatsApp Image 2026-06-23 at 7.31.03 PM (3).jpeg', target: 'ornate-floral-neon-wavy-floor-mirror-magenta-sialkot' },
    { dir: 'images 2', file: 'WhatsApp Image 2026-06-23 at 7.31.03 PM.jpeg', target: 'braided-rope-led-round-mirror-sialkot' },
    { dir: 'images 2', file: 'WhatsApp Image 2026-06-23 at 7.31.04 PM.jpeg', target: 'ornate-floral-neon-wavy-floor-mirror-cyan-sialkot' },

    // Images 3
    { dir: 'Images 3', file: 'WhatsApp Image 2026-06-23 at 7.29.16 PM (1).jpeg', target: 'wavy-velvet-mirror-blue-angle-sialkot' },
    { dir: 'Images 3', file: 'WhatsApp Image 2026-06-23 at 7.29.16 PM (2).jpeg', target: 'wavy-purple-velvet-floor-mirror-sialkot' },
    { dir: 'Images 3', file: 'WhatsApp Image 2026-06-23 at 7.29.17 PM (2).jpeg', target: 'wavy-black-velvet-floor-mirror-detail-sialkot' },

    // images 4
    { dir: 'images 4', file: 'WhatsApp Image 2026-06-23 at 7.31.01 PM (3).jpeg', target: 'octagonal-dual-tone-led-mirror-detail-sialkot' },
    { dir: 'images 4', file: 'WhatsApp Image 2026-06-23 at 7.31.02 PM.jpeg', target: 'octagonal-dual-tone-led-mirror-alt-sialkot' },

    // images 5
    { dir: 'images 5', file: 'WhatsApp Image 2026-06-23 at 7.29.17 PM.jpeg', target: 'wavy-backlit-velvet-mirror-detail-sialkot' },
    { dir: 'images 5', file: 'WhatsApp Image 2026-06-23 at 7.29.18 PM.jpeg', target: 'wavy-backlit-velvet-mirror-backlight-sialkot' },

    // images 6
    { dir: 'images 6', file: 'WhatsApp Image 2026-06-23 at 7.31.01 PM (1).jpeg', target: 'arched-vanity-station-drawers-sialkot' },
    { dir: 'images 6', file: 'WhatsApp Image 2026-06-23 at 7.31.01 PM.jpeg', target: 'arched-vanity-station-shelves-sialkot' },
    { dir: 'images 6', file: 'WhatsApp Image 2026-06-23 at 7.31.03 PM (3).jpeg', target: 'arched-vanity-station-room-view-sialkot' },
    { dir: 'images 6', file: 'WhatsApp Image 2026-06-23 at 7.31.04 PM.jpeg', target: 'arched-vanity-station-backlit-glow-sialkot' },

    // images 7
    { dir: 'images 7', file: 'baroque-scrollwork-led-mirror-sialkot.jpeg', target: 'baroque-scrollwork-led-mirror-sialkot' },
    { dir: 'images 7', file: 'capsule-arch-scallop-led-mirror-sialkot.jpeg', target: 'capsule-arch-scallop-led-mirror-sialkot' },
    { dir: 'images 7', file: 'geometric-mosaic-border-led-mirror-sialkot.jpeg', target: 'geometric-mosaic-border-led-mirror-sialkot' },
    { dir: 'images 7', file: 'greek-key-dual-lit-led-mirror-sialkot.jpeg', target: 'greek-key-dual-lit-led-mirror-sialkot' },
    { dir: 'images 7', file: 'greek-key-warm-backlit-mirror-sialkot.jpeg', target: 'greek-key-warm-backlit-mirror-sialkot' },
    { dir: 'images 7', file: 'laurel-wreath-etched-led-mirror-sialkot.jpeg', target: 'laurel-wreath-etched-led-mirror-sialkot' },
    { dir: 'images 7', file: 'WhatsApp Image 2026-09-27 at 10.25.29 PM (1).jpeg', target: 'modern-backlit-bathroom-mirror-1-sialkot' },
    { dir: 'images 7', file: 'WhatsApp Image 2026-09-27 at 10.25.29 PM (2).jpeg', target: 'modern-backlit-bathroom-mirror-2-sialkot' },
    { dir: 'images 7', file: 'WhatsApp Image 2026-09-27 at 10.25.29 PM (3).jpeg', target: 'modern-backlit-bathroom-mirror-3-sialkot' },
    { dir: 'images 7', file: 'WhatsApp Image 2026-09-27 at 10.25.30 PM (1).jpeg', target: 'custom-frosted-pattern-led-mirror-1-sialkot' },
    { dir: 'images 7', file: 'WhatsApp Image 2026-09-27 at 10.25.30 PM (2).jpeg', target: 'custom-frosted-pattern-led-mirror-2-sialkot' },
    { dir: 'images 7', file: 'WhatsApp Image 2026-09-27 at 10.25.30 PM.jpeg', target: 'custom-frosted-pattern-led-mirror-3-sialkot' },
    { dir: 'images 7', file: 'WhatsApp Image 2026-09-27 at 10.25.31 PM (1).jpeg', target: 'scalloped-pattern-led-mirror-sialkot' },
    { dir: 'images 7', file: 'WhatsApp Image 2026-09-27 at 10.25.40 PM (1).jpeg', target: 'geometric-frame-smart-mirror-sialkot' },
    { dir: 'images 7', file: 'WhatsApp Image 2026-09-27 at 10.25.43 PM (1).jpeg', target: 'illuminated-vanity-mirror-luxury-sialkot' },
    { dir: 'images 7', file: 'WhatsApp Image 2026-09-27 at 10.25.43 PM (2).jpeg', target: 'illuminated-vanity-mirror-ambiance-sialkot' },

    // images 8
    { dir: 'images 8', file: 'capsule-bathroom-vanity-led-mirror-sialkot.jpeg', target: 'capsule-bathroom-vanity-led-mirror-sialkot' },
    { dir: 'images 8', file: 'geometric-diamond-frosted-led-mirror-sialkot.jpeg', target: 'geometric-diamond-frosted-led-mirror-sialkot' },
    { dir: 'images 8', file: 'herringbone-braided-led-mirror-sialkot.jpeg', target: 'herringbone-braided-led-mirror-sialkot' },
    { dir: 'images 8', file: 'tree-of-life-etched-led-mirror-sialkot.jpeg', target: 'tree-of-life-etched-led-mirror-sialkot' },
    { dir: 'images 8', file: 'triple-border-warm-led-mirror-sialkot.jpeg', target: 'triple-border-warm-led-mirror-sialkot' },
    { dir: 'images 8', file: 'WhatsApp Image 2026-09-27 at 10.25.29 PM.jpeg', target: 'designer-accent-smart-mirror-1-sialkot' },
    { dir: 'images 8', file: 'WhatsApp Image 2026-09-27 at 10.25.41 PM.jpeg', target: 'designer-accent-smart-mirror-2-sialkot' },
    { dir: 'images 8', file: 'WhatsApp Image 2026-09-27 at 10.25.43 PM.jpeg', target: 'designer-accent-smart-mirror-3-sialkot' },
    { dir: 'images 8', file: 'WhatsApp Image 2026-09-27 at 10.25.45 PM (1).jpeg', target: 'arch-curve-led-mirror-1-sialkot' },
    { dir: 'images 8', file: 'WhatsApp Image 2026-09-27 at 10.25.45 PM (2).jpeg', target: 'arch-curve-led-mirror-2-sialkot' },
    { dir: 'images 8', file: 'WhatsApp Image 2026-09-27 at 10.25.45 PM.jpeg', target: 'arch-curve-led-mirror-3-sialkot' },
    { dir: 'images 8', file: 'WhatsApp Image 2026-09-27 at 10.25.46 PM (1).jpeg', target: 'custom-etched-smart-mirror-1-sialkot' },
    { dir: 'images 8', file: 'WhatsApp Image 2026-09-27 at 10.25.46 PM (2).jpeg', target: 'custom-etched-smart-mirror-2-sialkot' }
  ];

  for (const item of conversions) {
    const newRelPath = await convertToProductWebp(item.dir, item.file, item.target);
    if (newRelPath) {
      // Store relative mapping
      mapping[`${item.dir}/${item.file}`] = newRelPath;
      mapping[`../${item.dir}/${item.file}`] = `../${newRelPath}`;
      mapping[`/${item.dir}/${item.file}`] = `/${newRelPath}`;
    }
  }

  // 3. Generate placeholders for the 15 Unsplash stock photo items
  console.log('\n--- Generating Branded WebP Placeholders for Unsplash Items ---');
  const unsplashItems = [
    { slug: 'glass-shower-partition', title: 'Glass Shower Partition Enclosure', category: 'Glass Works' },
    { slug: 'office-glass-partition', title: 'Office Glass Partition Walls', category: 'Glass Works' },
    { slug: 'glass-kitchen-backsplash', title: 'Tempered Glass Kitchen Backsplash', category: 'Glass Works' },
    { slug: 'glass-staircase-railing', title: 'Architectural Glass Staircase Railing', category: 'Glass Works' },
    { slug: 'tempered-glass-table-top', title: 'Tempered Glass Table Top', category: 'Glass Works' },
    { slug: 'aluminium-sliding-window', title: 'Aluminium Sliding Windows', category: 'Aluminium Work' },
    { slug: 'aluminium-casement-window', title: 'Aluminium Casement Windows', category: 'Aluminium Work' },
    { slug: 'aluminium-sliding-door', title: 'Aluminium Sliding Patio Doors', category: 'Aluminium Work' },
    { slug: 'aluminium-main-door', title: 'Aluminium Main Entrance Pivot Door', category: 'Aluminium Work' },
    { slug: 'aluminium-railing-grills', title: 'Aluminium Railing & Balcony Grills', category: 'Aluminium Work' },
    { slug: 'aluminium-shopfront', title: 'Commercial Aluminium Shopfront Facade', category: 'Aluminium Work' },
    { slug: 'aluminium-partition-wall', title: 'Aluminium Frame Partition Wall', category: 'Aluminium Work' },
    { slug: 'aluminium-cabinet-frame', title: 'Aluminium Kitchen Cabinet Profile', category: 'Aluminium Work' },
    { slug: 'round-anodized-bronze-trim-mirror', title: 'Round Anodized Bronze Trim Mirror', category: 'Mirrors & Glass' },
    { slug: 'rectangular-frameless-beveled-mirror', title: 'Rectangular Frameless Beveled Mirror', category: 'Mirrors & Glass' },
    { slug: 'arched-entryway-console-mirror', title: 'Arched Entryway Console Accent Mirror', category: 'Mirrors & Glass' },
    { slug: 'antique-bronze-engraved-mirror', title: 'Antique Bronze Engraved Accent Mirror', category: 'Mirrors & Glass' },
    { slug: 'sunburst-metal-accent-mirror', title: 'Sunburst Metal Frame Accent Mirror', category: 'Mirrors & Glass' },
    { slug: 'hanging-leather-strap-oval-mirror', title: 'Hanging Leather Strap Oval Mirror', category: 'Mirrors & Glass' },
    { slug: 'sunburst-decorative-mirror', title: 'Sunburst Decorative Wall Mirror', category: 'Mirrors & Glass' },
    { slug: 'shower-cabin-corner-unit', title: 'Corner Tempered Glass Shower Cabin', category: 'Shower Cabins' },
    { slug: 'retail-storefront-facade', title: 'Retail Storefront Safety Glass Facade', category: 'Aluminium Shopfronts' }
  ];

  function escapeXml(str) {
    return (str || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  for (const item of unsplashItems) {
    const titleEscaped = escapeXml(item.title);
    const categoryEscaped = escapeXml(item.category);
    const svg = `
<svg width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#141210"/>
      <stop offset="50%" stop-color="#1E1B18"/>
      <stop offset="100%" stop-color="#100F0E"/>
    </linearGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#D4AF37"/>
      <stop offset="50%" stop-color="#F3E5AB"/>
      <stop offset="100%" stop-color="#AA771C"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#bgGrad)"/>
  <rect x="25" y="25" width="750" height="550" fill="none" stroke="#C9A24B" stroke-width="1.5" stroke-dasharray="10 6" opacity="0.6"/>
  <rect x="35" y="35" width="730" height="530" fill="none" stroke="#2D2925" stroke-width="1"/>
  
  <!-- Icon Frame -->
  <circle cx="400" cy="220" r="54" fill="#181614" stroke="url(#goldGrad)" stroke-width="2"/>
  <path d="M375 220 L425 220 M400 195 L400 245" stroke="#C9A24B" stroke-width="3" stroke-linecap="round"/>
  <circle cx="400" cy="220" r="14" fill="none" stroke="#F3E5AB" stroke-width="2"/>
  
  <!-- Texts -->
  <text x="400" y="320" font-family="'Outfit', 'Inter', sans-serif" font-size="24" font-weight="700" fill="#FAF9F7" text-anchor="middle" letter-spacing="0.5">${titleEscaped}</text>
  <text x="400" y="355" font-family="'Inter', sans-serif" font-size="15" font-weight="600" fill="url(#goldGrad)" text-anchor="middle" letter-spacing="1.5">RAHMAN ALUMINIUM &amp; GLASS WORKS — SIALKOT</text>
  <text x="400" y="395" font-family="'Inter', sans-serif" font-size="13" fill="#A8A29E" text-anchor="middle">Category: ${categoryEscaped} | Custom Fabrication &amp; Installation</text>
  
  <!-- Placeholder badge -->
  <rect x="230" y="430" width="340" height="38" rx="19" fill="#24201C" stroke="#C9A24B" stroke-width="1"/>
  <text x="400" y="454" font-family="'Inter', sans-serif" font-size="12" font-weight="500" fill="#E7E5E4" text-anchor="middle">📷 Real Workshop Project Photo Slot</text>
  <text x="400" y="500" font-family="'Inter', sans-serif" font-size="12" fill="#78716C" text-anchor="middle">Call / WhatsApp: +92 302 1054485 for custom order or site visit</text>
</svg>`;

    const placeholderTarget = path.join(__dirname, '../images/placeholders', `${item.slug}-sialkot.webp`);
    await sharp(Buffer.from(svg))
      .webp({ quality: 85 })
      .toFile(placeholderTarget);

    const stat = fs.statSync(placeholderTarget);
    console.log(`Generated placeholder: images/placeholders/${item.slug}-sialkot.webp (${(stat.size / 1024).toFixed(1)} KB)`);
  }

  // Save the mapping table to disk
  fs.writeFileSync(path.join(__dirname, 'image-mapping.json'), JSON.stringify(mapping, null, 2), 'utf8');
  console.log('\nImage mapping saved to scripts/image-mapping.json');
}

processAllImages().then(() => console.log('Image processing completed!'));
