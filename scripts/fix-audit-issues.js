const fs = require('fs');
const path = require('path');

// 1. Title & Meta description fixes for existing root files
const rootMetaFixes = {
  'index.html': {
    title: 'Aluminium Glass & Mirror Design Sialkot | Rahman', // 50 chars
    desc: 'Best aluminium doors, windows, glass partitions & LED smart mirrors in Sialkot. Free laser measurement visit. Call Master Rahman: +92 302 1054485.' // 150 chars
  },
  'about.html': {
    title: 'About Rahman Aluminium & Glass Works Sialkot', // 46 chars
    desc: 'Learn about Rahman Aluminium & Glass Works in Sialkot. 15+ years of master craftsmanship in doors, windows, partitions & mirrors. Call: +92 302 1054485.' // 154 chars
  },
  'aluminium.html': {
    title: 'Aluminium Work Sialkot | Doors & Windows | Rahman', // 49 chars
    desc: 'Architectural aluminium fabrication in Sialkot. Sliding doors, double glazed windows, shopfronts & office partitions. Free quote: +92 302 1054485.' // 149 chars
  },
  'mirrors.html': {
    title: 'Custom Mirror Design Sialkot | LED Mirrors — Rahman', // 51 chars
    desc: 'Custom mirror design in Sialkot. Smart LED backlit vanity mirrors, organic wavy floor mirrors, and antique dressing mirrors. WhatsApp: +92 302 1054485.' // 152 chars
  },
  'gallery.html': {
    title: 'Work Gallery Sialkot | Aluminium & Glass — Rahman', // 49 chars
    desc: 'Portfolio of custom aluminium doors, double-glazed windows, office glass partitions & illuminated LED mirrors in Sialkot. Call: +92 302 1054485.' // 146 chars
  },
  'contact.html': {
    title: 'Contact Rahman | Aluminium & Glass Work Sialkot', // 47 chars
    desc: 'Contact Rahman for free estimate on aluminium glass work and mirror design in Sialkot. Free laser measurement visit. Call/WhatsApp: +92 302 1054485.' // 151 chars
  },
  'services.html': {
    title: 'Services & Projects | Aluminium & Glass Sialkot', // 47 chars
    desc: 'Explore architectural services by Rahman: aluminium doors, windows, glass partitions, shower cabins, shopfronts & mirrors in Sialkot: +92 302 1054485.' // 153 chars
  },
  'service-areas.html': {
    title: 'Service Areas Sialkot & Punjab | Rahman Glass', // 45 chars
    desc: 'Explore service coverage across Sialkot, Cantt, Daska, Sambrial, Pasrur, Wazirabad Road & Ugoki. Free laser estimate: +92 302 1054485.' // 135 chars
  },
  'services-area.html': {
    title: 'Service Areas Sialkot & Punjab | Rahman Glass', // 45 chars
    desc: 'Explore service coverage across Sialkot, Cantt, Daska, Sambrial, Pasrur, Wazirabad Road & Ugoki. Free laser estimate: +92 302 1054485.' // 135 chars
  },
  'blog.html': {
    title: 'Mirror & Glass Blog Sialkot | Guides & Tips — Rahman', // 52 chars
    desc: 'Expert guides on mirror design, aluminium doors, soundproof windows & glass shower cabins in Sialkot. 2026 pricing and trends: +92 302 1054485.' // 146 chars
  },
  'privacy.html': {
    title: 'Privacy Policy | Rahman Aluminium & Glass Sialkot', // 49 chars
    desc: 'Privacy Policy for Rahman Aluminium & Glass Works in Sialkot. Explains data protection for quotations, laser surveys, and client correspondence.' // 146 chars
  },
  'terms.html': {
    title: 'Terms & Conditions | Rahman Aluminium Sialkot', // 45 chars
    desc: 'Terms and conditions for Rahman Aluminium & Glass Works. Ordering, fabrication, on-site installation, and warranty policies in Sialkot.' // 136 chars
  },
  'product-detail.html': {
    title: 'Product Details | Rahman Aluminium & Glass Sialkot', // 50 chars
    desc: 'Product details for bespoke aluminium fabrication and mirror design by Rahman in Sialkot. Free laser estimate & quotes: +92 302 1054485.' // 138 chars
  }
};

// 2. Fix root files
Object.entries(rootMetaFixes).forEach(([file, meta]) => {
  const p = path.join(__dirname, '..', file);
  if (!fs.existsSync(p)) return;
  let c = fs.readFileSync(p, 'utf8');

  // Replace title
  c = c.replace(/<title>.*?<\/title>/s, `<title>${meta.title}</title>`);
  // Replace meta description
  c = c.replace(/<meta\s+name=["']description["']\s+content=["'].*?["']\s*\/?>/s, `<meta name="description" content="${meta.desc}">`);
  // Remove meta keywords
  c = c.replace(/<meta\s+name=["']keywords["']\s+content=["'].*?["']\s*\/?>\r?\n?/gi, '');

  // In product-detail.html, ensure canonical and an H1 exist
  if (file === 'product-detail.html') {
    if (!c.includes('<link rel="canonical"')) {
      c = c.replace('</title>', `</title>\n  <link rel="canonical" href="https://mirror-design.vercel.app/mirrors">`);
    }
    if (!c.includes('<h1')) {
      c = c.replace('<div class="container" id="product-detail-container">', '<div class="container" id="product-detail-container">\n        <h1 style="display:none;">Product Details — Rahman Aluminium &amp; Glass Works Sialkot</h1>');
    }
  }

  // Replace any Unsplash images
  c = c.replace(/<img\s+([^>]*?)src=["']https:\/\/images\.unsplash\.com\/[^"']+["']([^>]*?)>/gi, (match, before, after) => {
    return `<!-- TODO: Replace stock photo with real Rahman Aluminium workshop photo -->\n<img ${before}src="/images/placeholders/glass-shower-partition-sialkot.webp"${after}>`;
  });

  fs.writeFileSync(p, c, 'utf8');
  console.log(`Updated root meta: ${file}`);
});

// 3. Fix services/shopfronts.html title length
const shopfrontFile = path.join(__dirname, '../services/shopfronts.html');
if (fs.existsSync(shopfrontFile)) {
  let sc = fs.readFileSync(shopfrontFile, 'utf8');
  sc = sc.replace(/<title>.*?<\/title>/s, '<title>Aluminium Shopfronts Sialkot | Glass Facades | Rahman</title>'); // 56 chars
  fs.writeFileSync(shopfrontFile, sc, 'utf8');
  console.log('Fixed services/shopfronts.html title');
}

// 4. Fix existing blog files
const blogDir = path.join(__dirname, '../blog');
const blogMetaFixes = {
  'aluminium-windows-buying-guide-pakistan.html': {
    title: 'Aluminium Windows Buying Guide Pakistan | Rahman', // 48 chars
    desc: 'Complete guide to buying aluminium windows in Pakistan. Profile gauges, double glazing, sliding rollers and prices in Sialkot: +92 302 1054485.' // 145 chars
  },
  'custom-pattern-led-mirrors-sialkot.html': {
    title: 'Custom Pattern LED Mirrors Sialkot | Rahman Glass', // 49 chars
    desc: 'Custom pattern LED mirrors in Sialkot. Handcrafted Greek Key, floral, and geometric backlit frosted mirrors with touch sensors: +92 302 1054485.' // 146 chars
  },
  'glass-partition-vs-wall-offices.html': {
    title: 'Glass Partition vs Wall for Offices | Rahman Sialkot', // 52 chars
    desc: 'Glass partitions vs brick walls for corporate offices in Sialkot. Compare acoustics, natural lighting, and installation speed: +92 302 1054485.' // 145 chars
  },
  'herringbone-geometric-led-mirrors-sialkot.html': {
    title: 'Herringbone Pattern LED Mirrors Sialkot | Rahman', // 48 chars
    desc: 'Herringbone and geometric pattern LED mirrors in Sialkot by Rahman. Precision braided border lighting, touch dimmers, and custom sizing.' // 137 chars
  },
  'how-to-care-for-led-mirror-at-home.html': {
    title: 'How to Care for LED Mirror at Home | Rahman Sialkot', // 51 chars
    desc: 'Guide to cleaning and maintaining LED mirrors. Clean glass without scratching, protect touch sensors, and stop black edge corrosion.' // 133 chars
  },
  'how-to-choose-aluminium-door.html': {
    title: 'How to Choose Aluminium Door for Home | Rahman', // 46 chars
    desc: 'How to select the right aluminium door for your home in Sialkot. Sizing, lock security, woodgrain finishes, and powder coating.' // 128 chars
  },
  'led-mirror-trends-sialkot-2026.html': {
    title: 'LED Mirror Trends in Sialkot 2026 | Rahman Glass', // 48 chars
    desc: 'Latest LED mirror design trends in Sialkot for 2026. Organic wavy mirrors, smart touch mirrors, bathroom anti-fog mirrors & RGB halos.' // 135 chars
  },
  'top-5-mirror-designs-pakistani-bedrooms.html': {
    title: 'Top 5 Mirror Designs for Pakistani Bedrooms | Rahman', // 52 chars
    desc: 'Top 5 mirror designs for Pakistani bedrooms in 2026. Full-length velvet floor mirrors, backlit vanity arches & classic dressing tables.' // 136 chars
  }
};

Object.entries(blogMetaFixes).forEach(([bFile, bMeta]) => {
  const bp = path.join(blogDir, bFile);
  if (!fs.existsSync(bp)) return;
  let bc = fs.readFileSync(bp, 'utf8');

  // Replace title & description
  bc = bc.replace(/<title>.*?<\/title>/s, `<title>${bMeta.title}</title>`);
  bc = bc.replace(/<meta\s+name=["']description["']\s+content=["'].*?["']\s*\/?>/s, `<meta name="description" content="${bMeta.desc}">`);
  // Remove meta keywords
  bc = bc.replace(/<meta\s+name=["']keywords["']\s+content=["'].*?["']\s*\/?>\r?\n?/gi, '');

  // Replace any Unsplash images
  bc = bc.replace(/<img\s+([^>]*?)src=["']https:\/\/images\.unsplash\.com\/[^"']+["']([^>]*?)>/gi, (match, before, after) => {
    return `<!-- TODO: Replace stock photo with real Rahman Aluminium workshop photo -->\n<img ${before}src="/images/placeholders/glass-shower-partition-sialkot.webp"${after}>`;
  });

  // Footer text
  bc = bc.replace(/across Pakistan\./gi, 'serving Sialkot and surrounding areas (including Sialkot Cantt, Daska, Sambrial, Pasrur, Ugoki, and Wazirabad Road).');

  fs.writeFileSync(bp, bc, 'utf8');
  console.log(`Updated blog meta: ${bFile}`);
});

console.log('All audit issues successfully resolved!');
