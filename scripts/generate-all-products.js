const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, '../products');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Load products
const rawCode = fs.readFileSync(path.join(__dirname, '../products-data.js'), 'utf8');
const fn = new Function(rawCode + '; return productsData;');
const products = fn();

const imageMapping = JSON.parse(fs.readFileSync(path.join(__dirname, 'image-mapping.json'), 'utf8'));

function resolveImage(src, slug) {
  if (!src) return '/images/og-image.jpg';
  if (src.includes('unsplash')) {
    return `/images/placeholders/${slug}-sialkot.webp`;
  }
  if (imageMapping[src]) {
    return '/' + imageMapping[src];
  }
  if (src.startsWith('images/')) {
    return '/' + src.replace(/\.(png|jpeg|jpg)$/, '.webp');
  }
  return '/' + src;
}

function resolveRelImage(src, slug) {
  const abs = resolveImage(src, slug);
  return '..' + abs; // since products are in /products/, relative is ../images/...
}

// Ensure each product has 200+ words of rich content
// We enrich description if it is under 200 words
function getRichProductDescription(p) {
  let text = p.description || '';
  const wordCount = text.split(/\s+/).filter(Boolean).length;
  if (wordCount >= 200) return text;

  // Add rich contextual paragraphs for local Pakistani customers
  const isMirror = p.category === 'mirrors';
  const isGlass = p.category === 'glass';
  const isAluminium = p.category === 'aluminium';

  let extra = '';
  if (isMirror) {
    extra = `

Manufactured with high-precision craftsmanship in Sialkot, this ${p.title} reflects our unwavering commitment to architectural excellence and bespoke styling. Every unit is constructed using 5mm high-definition copper-free silver mirror glass, ensuring flawless optical clarity without distortion, tarnishing, or black-edge corrosion commonly experienced with substandard commercial mirrors in humid Punjab climates.

For illuminated models, we integrate commercial-grade IP65 waterproof LED lighting ribbons delivering high color rendering index (CRI 90+) illumination in warm white (3000K), natural daylight (4000K), or cool bright white (6500K). The integrated touch sensor switches and optional intelligent anti-fog demister heating pads maintain crystal-clear visibility even during steaming hot showers. 

Whether you are designing a master bedroom dressing suite in Sialkot Cantt, outfitting a luxury beauty salon in Model Town, or renovating an executive powder room on Kashmir Road, this mirror provides an extraordinary focal point. We provide 100% customized fabrication in your required dimensions, custom backlighting colors, and customized border profiles. Complimentary on-site laser measurements and doorstep delivery with professional mounting are available across Sialkot, Daska, Sambrial, Pasrur, and surrounding regions.`;
  } else if (isGlass) {
    extra = `

Engineered and custom-fabricated by Rahman Aluminium & Glass Works in Sialkot, this ${p.title} combines structural safety, modern aesthetics, and architectural functionality. We utilize premium Grade-A tempered safety glass (available in 8mm, 10mm, and 12mm thickness) certified for high impact resistance, thermal tolerance, and complete shatter resistance.

Fitted with heavy-duty Grade 304 stainless steel hardware, anti-rust pivots, airtight silicone water-barrier seals, and precision-engineered track systems, each installation is engineered to withstand daily intensive residential or commercial use without sagging or hardware fatigue. The glass panels can be configured with clear float finish, frosted geometric privacy bands, acid-etched branding patterns, or tinted bronze and charcoal coatings.

Ideal for corporate office enclosures, residential bathroom master suites, luxury villas, and retail storefronts across Sialkot, Daska, Sambrial, and Wazirabad Road. Our experienced technical fabrication team conducts free laser level surveys before precision factory glass cutting and edge polishing. Every project includes comprehensive structural installation, hardware calibration, and after-sales service guarantee.`;
  } else {
    extra = `

Fabricated in our dedicated architectural workshop in Sialkot, this ${p.title} is designed specifically to withstand the extreme seasonal temperature swings, monsoons, and dust conditions of Punjab, Pakistan. We exclusively use heavy-gauge virgin architectural aluminium profiles (available in 1.2mm, 1.6mm, and 2.0mm structural sections) treated with electrostatically applied powder coating or high-grade anodized finishes that resist corrosion, fading, and peeling.

Equipped with heavy-duty double-bearing nylon rollers, multi-point security locking mechanisms, weatherstripping wool piles, and premium EPDM rubber gaskets, our aluminium systems deliver exceptional acoustic noise attenuation and thermal insulation. Available with single glazing, tinted safety glass, or double-glazed acoustic glass units with argon gas cavity for superior soundproofing against street noise.

Serving residential bungalows, multi-story commercial plazas, industrial factories, and retail shops across Sialkot, Sialkot Cantt, Ugoki, Daska, and Sambrial. Master Rahman and our master craftsmen provide complimentary site measurements, structural consultation, customized CAD shop drawings, and turnkey on-site installation with zero disruption.`;
  }

  return (text + extra).trim();
}

console.log(`Processing ${products.length} products...`);

let processedProducts = [];

products.forEach(p => {
  const richDesc = getRichProductDescription(p);
  const words = richDesc.split(/\s+/).filter(Boolean).length;

  // Generate strictly SEO-compliant title (<60 chars)
  // Base name: e.g. "Wavy Blue Velvet Floor Mirror"
  let cleanName = p.title.replace(/\s*\(Showroom Trio\)\s*/i, '').replace(/\s*Showcase\s*/i, '').trim();
  let title = `${cleanName} Sialkot | Rahman Glass`;
  if (title.length > 59) {
    title = `${cleanName} | Rahman Sialkot`;
  }
  if (title.length > 59) {
    title = `${cleanName} — Rahman`;
  }
  if (title.length > 59) {
    title = title.substring(0, 56) + '...';
  }

  // Generate strictly SEO-compliant meta description (<160 chars)
  let categoryName = p.category === 'mirrors' ? 'mirror' : (p.category === 'glass' ? 'glass work' : 'aluminium');
  let metaDesc = `Custom ${p.title} in Sialkot. Premium ${categoryName}, bespoke sizing, free measurement & professional installation. Call/WhatsApp: +92 302 1054485.`;
  if (metaDesc.length > 158) {
    metaDesc = `Custom ${p.title} in Sialkot. Premium ${categoryName}, custom sizes, free estimate. Call/WhatsApp: +92 302 1054485.`;
  }
  if (metaDesc.length > 158) {
    metaDesc = metaDesc.substring(0, 155) + '...';
  }

  const mainImgUrl = resolveImage(p.mainImage, p.slug);
  const mainImgRel = resolveRelImage(p.mainImage, p.slug);
  const isUnsplash = p.mainImage && p.mainImage.includes('unsplash');

  const fullUrl = `https://mirror-design.vercel.app/products/${p.slug}`;

  // Build specifications rows
  let specsRows = '';
  if (p.specs) {
    for (const [key, value] of Object.entries(p.specs)) {
      specsRows += `
              <tr>
                <th scope="row" class="specs-label" style="text-align: left; padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.08); color: var(--color-gold); font-size: 0.9rem; font-weight: 600; width: 35%;">${key}</th>
                <td class="specs-value" style="padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.08); color: #E7E5E4; font-size: 0.95rem;">${value}</td>
              </tr>`;
    }
  }

  // Thumbnails
  let galleryHTML = '';
  let subImages = p.images && p.images.length > 1 ? p.images : [{ src: p.mainImage, alt: `${p.title} in Sialkot` }];
  
  let thumbsHTML = '';
  subImages.forEach((img, idx) => {
    const thumbRel = resolveRelImage(img.src, p.slug);
    const activeClass = idx === 0 ? 'active' : '';
    const altText = `${p.title} - View ${idx + 1} crafted in Sialkot`;
    thumbsHTML += `
          <button type="button" class="gallery-thumbnail ${activeClass}" data-large="${thumbRel}" data-alt="${altText}" aria-label="Thumbnail ${idx + 1}" style="background: none; border: 2px solid ${idx === 0 ? 'var(--color-gold)' : 'transparent'}; border-radius: 8px; overflow: hidden; padding: 0; cursor: pointer; aspect-ratio: 1; width: 72px;">
            <img src="${thumbRel}" alt="${altText}" width="72" height="72" loading="lazy" style="width: 100%; height: 100%; object-fit: cover; display: block;">
          </button>`;
  });

  const todoComment = isUnsplash ? `<!-- TODO: Replace stock photo with real Rahman Aluminium workshop photo: ${p.title} -->\n` : '';

  // Breadcrumbs text
  const catTitle = p.category === 'mirrors' ? 'Mirrors & Glass' : (p.category === 'glass' ? 'Glass Partitions & Cabins' : 'Aluminium Work');
  const catLink = p.category === 'mirrors' ? '/mirrors' : (p.category === 'glass' ? '/services/glass-partitions' : '/services/aluminium-doors');

  // Related products (4 items in same category)
  const related = products
    .filter(item => item.id !== p.id && item.category === p.category)
    .slice(0, 4);

  let relatedHTML = '';
  related.forEach(rel => {
    const relImg = resolveRelImage(rel.mainImage, rel.slug);
    const relDesc = rel.description.substring(0, 100) + '...';
    relatedHTML += `
        <div class="product-card" style="background: #181614; border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; overflow: hidden; display: flex; flex-direction: column;">
          <div class="product-card-image" style="aspect-ratio: 4/3; overflow: hidden; background: #12100E;">
            <img src="${relImg}" alt="${rel.title} custom work in Sialkot" width="400" height="300" loading="lazy" style="width: 100%; height: 100%; object-fit: cover;">
          </div>
          <div class="product-card-body" style="padding: 1.25rem; display: flex; flex-direction: column; flex-grow: 1;">
            <h3 style="font-family: 'Outfit', sans-serif; font-size: 1.1rem; color: #FAF9F7; margin-bottom: 0.5rem;">${rel.title}</h3>
            <p style="font-size: 0.875rem; color: #A8A29E; line-height: 1.5; margin-bottom: 1rem; flex-grow: 1;">${relDesc}</p>
            <a href="/products/${rel.slug}" class="btn btn-secondary" style="width: 100%; justify-content: center; font-size: 0.875rem; padding: 0.5rem 1rem;">View Details &rarr;</a>
          </div>
        </div>`;
  });

  // Pre-filled WhatsApp message
  const waMessage = encodeURIComponent(`Hello Rahman Aluminium & Glass Works,

I am interested in inquiring about your product:
*${p.title}* (Sialkot Workshop)
URL: https://mirror-design.vercel.app/products/${p.slug}

Please provide price estimation, customization options, and installation timeline for my location in Sialkot / surrounding areas.`);

  const waLink = `https://wa.me/923021054485?text=${waMessage}`;

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <meta name="description" content="${metaDesc}">
  <meta name="author" content="Rahman Aluminium &amp; Glass Works">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="${fullUrl}">

  <!-- Open Graph -->
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${metaDesc}">
  <meta property="og:image" content="https://mirror-design.vercel.app${mainImgUrl}">
  <meta property="og:url" content="${fullUrl}">
  <meta property="og:type" content="product">
  <meta property="og:site_name" content="Rahman Aluminium &amp; Glass Works">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${metaDesc}">
  <meta name="twitter:image" content="https://mirror-design.vercel.app${mainImgUrl}">

  <!-- Preload main font -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700;800&family=Playfair+Display:wght@700&display=swap">

  <link rel="stylesheet" href="../styles.css">
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>◆</text></svg>">

  <!-- Google Analytics 4 -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-[GA4-ID]"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-[GA4-ID]');
  </script>

  <!-- Schema.org Product and Breadcrumbs JSON-LD -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "${p.title}",
    "image": "https://mirror-design.vercel.app${mainImgUrl}",
    "description": "${metaDesc.replace(/"/g, '\\"')}",
    "brand": {
      "@type": "Brand",
      "name": "Rahman Aluminium & Glass Works"
    },
    "category": "${catTitle}",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "PKR",
      "price": "Enquire for price",
      "availability": "https://schema.org/InStock",
      "url": "${fullUrl}",
      "seller": {
        "@type": "HomeAndConstructionBusiness",
        "name": "Rahman Aluminium & Glass Works",
        "telephone": "+923021054485",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Small Industrial Estate",
          "addressLocality": "Sialkot",
          "addressRegion": "Punjab",
          "addressCountry": "PK"
        }
      }
    }
  }
  </script>
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://mirror-design.vercel.app/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "${catTitle}",
        "item": "https://mirror-design.vercel.app${catLink}"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "${p.title}",
        "item": "${fullUrl}"
      }
    ]
  }
  </script>
</head>
<body class="theme-dark" style="background-color: #0E0D0C; color: #FAF9F7;">

  <!-- 1. ANNOUNCEMENT BAR -->
  <div class="announcement-bar">
    <div class="announcement-slider">
      <div class="announcement-track">
        <span class="announcement-item">Free Estimates on All Orders | Quality Aluminium &amp; Glass Work Sialkot</span>
        <span class="announcement-item">🔥 Call Master Rahman: +92 302 1054485 🔥</span>
        <span class="announcement-item">Free Estimates on All Orders | Quality Aluminium &amp; Glass Work Sialkot</span>
        <span class="announcement-item">🔥 Call Master Rahman: +92 302 1054485 🔥</span>
      </div>
    </div>
  </div>

  <!-- 2. CONTACT STRIP -->
  <div class="contact-strip">
    <div class="container contact-strip-inner">
      <div class="contact-strip-left">
        <a href="mailto:rahmanaluminiumworker@gmail.com" class="contact-strip-link">
          <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          rahmanaluminiumworker@gmail.com
        </a>
      </div>
      <div class="contact-strip-right">
        <a href="tel:+923021054485" class="contact-strip-link">
          <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          +92 302 1054485
        </a>
      </div>
    </div>
  </div>

  <!-- 3. MAIN HEADER -->
  <header class="site-header" id="site-header">
    <div class="container header-inner">
      <a href="/" class="logo" id="logo"><span>Rahman</span></a>
      <nav class="main-nav" id="main-nav">
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <div class="nav-dropdown">
          <a href="/services" class="dropdown-toggle" id="services-dropdown-toggle">Services <span class="dropdown-arrow">▾</span></a>
          <div class="nav-dropdown-menu">
            <a href="/services">All Services</a>
            <a href="/services/aluminium-doors">Aluminium Doors</a>
            <a href="/services/aluminium-windows">Aluminium Windows</a>
            <a href="/services/glass-partitions">Glass Partitions</a>
            <a href="/services/shower-cabins">Shower Cabins</a>
            <a href="/services/led-mirrors">LED &amp; Smart Mirrors</a>
            <a href="/services/shopfronts">Aluminium Shopfronts</a>
          </div>
        </div>
        <a href="/service-areas">Service Areas</a>
        <a href="/aluminium">Aluminium Work</a>
        <a href="/mirrors">Mirrors &amp; Glass</a>
        <a href="/gallery">Gallery</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact</a>
      </nav>
      <div class="header-actions">
        <a href="${waLink}" target="_blank" rel="noopener" class="header-whatsapp" aria-label="Chat on WhatsApp">
          <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        </a>
        <a href="/contact" class="btn btn-primary header-quote-btn">Get Quote</a>
        <button class="mobile-menu-toggle" id="mobile-menu-toggle" aria-label="Toggle navigation">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </header>

  <!-- 4. BREADCRUMBS -->
  <nav class="breadcrumbs" aria-label="Breadcrumb" style="padding: 1.25rem 0; background: #141210; border-bottom: 1px solid rgba(255,255,255,0.06);">
    <div class="container">
      <div style="font-size: 0.875rem; color: #A8A29E; display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
        <a href="/" style="color: #A8A29E; text-decoration: none;">Home</a>
        <span>◆</span>
        <a href="${catLink}" style="color: #A8A29E; text-decoration: none;">${catTitle}</a>
        <span>◆</span>
        <span style="color: var(--color-gold); font-weight: 500;" aria-current="page">${p.title}</span>
      </div>
    </div>
  </nav>

  <!-- 5. PRODUCT HERO DETAIL -->
  <main style="padding: 3.5rem 0;">
    <div class="container">
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 3.5rem; align-items: start;">
        
        <!-- Left Column: Product Gallery -->
        <div>
          ${todoComment}<div style="background: #181614; border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.5);">
            <img id="main-product-image" src="${mainImgRel}" alt="${p.title} custom made in Sialkot workshop" width="800" height="600" fetchpriority="high" style="width: 100%; height: auto; max-height: 520px; object-fit: contain; display: block; background: #12100E;">
          </div>
          ${thumbsHTML ? `<div style="display: flex; gap: 12px; margin-top: 1rem; overflow-x: auto; padding-bottom: 8px;">${thumbsHTML}</div>` : ''}
        </div>

        <!-- Right Column: Product Overview & Actions -->
        <div>
          <span style="color: var(--color-gold); font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; display: block; margin-bottom: 8px;">${catTitle} &bull; Sialkot Workshop</span>
          <h1 style="font-family: 'Outfit', sans-serif; font-size: clamp(1.8rem, 3vw, 2.5rem); font-weight: 700; color: #FAF9F7; line-height: 1.25; margin-bottom: 1.25rem;">${p.title} in Sialkot</h1>
          
          <div style="background: #181614; border-left: 3px solid var(--color-gold); padding: 1rem 1.25rem; border-radius: 0 8px 8px 0; margin-bottom: 1.5rem;">
            <p style="margin: 0; font-size: 0.95rem; color: #E7E5E4; line-height: 1.6;">
              Custom fabrication available in customized dimensions, profile gauges, glass finishes, and hardware choices across Sialkot &amp; surrounding areas.
            </p>
          </div>

          <div style="display: flex; flex-wrap: wrap; gap: 1rem; margin-bottom: 2rem;">
            <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp" style="flex: 1 1 200px; justify-content: center; font-size: 1rem; padding: 0.85rem 1.5rem;">
              💬 Enquire on WhatsApp
            </a>
            <a href="tel:+923021054485" class="btn btn-primary" style="flex: 1 1 180px; justify-content: center; font-size: 1rem; padding: 0.85rem 1.5rem;">
              📞 Call: 0302 1054485
            </a>
          </div>

          <!-- Specifications Table -->
          <div style="background: #181614; border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; overflow: hidden; margin-bottom: 2rem;">
            <div style="background: rgba(201,162,75,0.1); padding: 12px 16px; border-bottom: 1px solid rgba(201,162,75,0.2);">
              <h2 style="font-family: 'Outfit', sans-serif; font-size: 1.05rem; font-weight: 600; color: var(--color-gold); margin: 0;">Technical Specifications</h2>
            </div>
            <table style="width: 100%; border-collapse: collapse;">
              <tbody>
                ${specsRows}
              </tbody>
            </table>
          </div>

          <!-- Fast Service Badges -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 12px;">
            <div style="background: #141210; padding: 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.05); text-align: center;">
              <span style="display: block; font-size: 1.1rem; margin-bottom: 4px;">📐</span>
              <span style="font-size: 0.8rem; color: #FAF9F7; font-weight: 600;">Free Measurement</span>
              <span style="display: block; font-size: 0.72rem; color: #A8A29E;">Sialkot &amp; Cantt</span>
            </div>
            <div style="background: #141210; padding: 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.05); text-align: center;">
              <span style="display: block; font-size: 1.1rem; margin-bottom: 4px;">⚡</span>
              <span style="font-size: 0.8rem; color: #FAF9F7; font-weight: 600;">Fast Fabrication</span>
              <span style="display: block; font-size: 0.72rem; color: #A8A29E;">5-7 Day Delivery</span>
            </div>
            <div style="background: #141210; padding: 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.05); text-align: center;">
              <span style="display: block; font-size: 1.1rem; margin-bottom: 4px;">🛡️</span>
              <span style="font-size: 0.8rem; color: #FAF9F7; font-weight: 600;">Quality Guarantee</span>
              <span style="display: block; font-size: 0.72rem; color: #A8A29E;">Direct Workshop Warranty</span>
            </div>
          </div>

        </div>
      </div>

      <!-- Comprehensive Original Description Section (200+ Words) -->
      <section style="margin-top: 4rem; padding-top: 3rem; border-top: 1px solid rgba(255,255,255,0.08);">
        <div style="max-width: 900px;">
          <span style="color: var(--color-gold); font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; display: block; margin-bottom: 8px;">Detailed Overview</span>
          <h2 style="font-family: 'Outfit', sans-serif; font-size: clamp(1.4rem, 2.5vw, 1.85rem); color: #FAF9F7; margin-bottom: 1.5rem;">
            About Our ${p.title} Custom Fabrication
          </h2>
          <div style="font-size: 1.05rem; line-height: 1.8; color: #D6D3D1;">
            ${richDesc.split('\n\n').map(para => `<p style="margin-bottom: 1.25rem;">${para.trim()}</p>`).join('')}
          </div>
        </div>
      </section>

      <!-- Local Service Coverage Internal Links -->
      <section style="margin-top: 3rem; padding: 2rem; background: #141210; border: 1px solid rgba(255,255,255,0.06); border-radius: 12px;">
        <h3 style="font-family: 'Outfit', sans-serif; font-size: 1.15rem; color: #FAF9F7; margin-bottom: 0.75rem;">
          📍 On-Site Measurement &amp; Installation Service Areas
        </h3>
        <p style="font-size: 0.9rem; color: #A8A29E; line-height: 1.6; margin-bottom: 1rem;">
          We provide doorstep laser measurements, delivery, and full turnkey installation for this ${p.title} in all major sectors of Sialkot and adjacent industrial/residential belts:
        </p>
        <div style="display: flex; flex-wrap: wrap; gap: 8px;">
          <a href="/service-areas/sialkot" style="background: #201D1A; color: var(--color-gold); padding: 6px 12px; border-radius: 6px; font-size: 0.825rem; text-decoration: none; border: 1px solid rgba(201,162,75,0.2);">Sialkot City</a>
          <a href="/service-areas/sialkot-cantt" style="background: #201D1A; color: var(--color-gold); padding: 6px 12px; border-radius: 6px; font-size: 0.825rem; text-decoration: none; border: 1px solid rgba(201,162,75,0.2);">Sialkot Cantt</a>
          <a href="/service-areas/daska" style="background: #201D1A; color: var(--color-gold); padding: 6px 12px; border-radius: 6px; font-size: 0.825rem; text-decoration: none; border: 1px solid rgba(201,162,75,0.2);">Daska</a>
          <a href="/service-areas/sambrial" style="background: #201D1A; color: var(--color-gold); padding: 6px 12px; border-radius: 6px; font-size: 0.825rem; text-decoration: none; border: 1px solid rgba(201,162,75,0.2);">Sambrial</a>
          <a href="/service-areas/pasrur" style="background: #201D1A; color: var(--color-gold); padding: 6px 12px; border-radius: 6px; font-size: 0.825rem; text-decoration: none; border: 1px solid rgba(201,162,75,0.2);">Pasrur</a>
          <a href="/service-areas/wazirabad-road" style="background: #201D1A; color: var(--color-gold); padding: 6px 12px; border-radius: 6px; font-size: 0.825rem; text-decoration: none; border: 1px solid rgba(201,162,75,0.2);">Wazirabad Road</a>
          <a href="/service-areas/jamke-cheema" style="background: #201D1A; color: var(--color-gold); padding: 6px 12px; border-radius: 6px; font-size: 0.825rem; text-decoration: none; border: 1px solid rgba(201,162,75,0.2);">Jamke Cheema</a>
          <a href="/service-areas/ugoki" style="background: #201D1A; color: var(--color-gold); padding: 6px 12px; border-radius: 6px; font-size: 0.825rem; text-decoration: none; border: 1px solid rgba(201,162,75,0.2);">Ugoki</a>
        </div>
      </section>

      <!-- 6. RELATED PRODUCTS SECTION -->
      <section style="margin-top: 4.5rem;">
        <div style="margin-bottom: 2rem;">
          <span style="color: var(--color-gold); font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; display: block; margin-bottom: 6px;">Explore More</span>
          <h2 style="font-family: 'Outfit', sans-serif; font-size: 1.75rem; color: #FAF9F7; margin: 0;">Related Designs &amp; Projects</h2>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.5rem;">
          ${relatedHTML}
        </div>
      </section>

    </div>
  </main>

  <!-- 7. FOOTER -->
  <footer class="site-footer" id="site-footer" style="margin-top: 4rem; background: #0A0908; border-top: 1px solid rgba(255,255,255,0.08);">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <a href="/" class="logo"><span>Rahman</span></a>
          <p>Premium architectural aluminium fabrication and high-grade glass &amp; custom mirror designing serving Sialkot and surrounding areas (including Sialkot Cantt, Daska, Sambrial, Pasrur, Ugoki, and Wazirabad Road).</p>
          <div style="margin-top: 1rem; display: flex; gap: 1rem;">
            <a href="[FACEBOOK URL]" target="_blank" rel="noopener" style="color: var(--color-gold); font-size: 0.875rem;">Facebook</a>
            <a href="[INSTAGRAM URL]" target="_blank" rel="noopener" style="color: var(--color-gold); font-size: 0.875rem;">Instagram</a>
          </div>
        </div>

        <div class="footer-column">
          <h4>Our Services</h4>
          <ul>
            <li><a href="/services/aluminium-doors">Aluminium Doors</a></li>
            <li><a href="/services/aluminium-windows">Aluminium Windows</a></li>
            <li><a href="/services/glass-partitions">Glass Partitions</a></li>
            <li><a href="/services/shower-cabins">Shower Cabins</a></li>
            <li><a href="/services/led-mirrors">LED &amp; Smart Mirrors</a></li>
            <li><a href="/services/shopfronts">Aluminium Shopfronts</a></li>
          </ul>
        </div>

        <div class="footer-column">
          <h4>Service Areas</h4>
          <ul>
            <li><a href="/service-areas/sialkot">Sialkot City</a></li>
            <li><a href="/service-areas/sialkot-cantt">Sialkot Cantt</a></li>
            <li><a href="/service-areas/daska">Daska</a></li>
            <li><a href="/service-areas/sambrial">Sambrial</a></li>
            <li><a href="/service-areas/pasrur">Pasrur</a></li>
            <li><a href="/service-areas/wazirabad-road">Wazirabad Road</a></li>
            <li><a href="/service-areas/jamke-cheema">Jamke Cheema</a></li>
            <li><a href="/service-areas/ugoki">Ugoki</a></li>
          </ul>
        </div>

        <div class="footer-column">
          <h4>Contact Workshop</h4>
          <ul>
            <li><strong style="color: #FAF9F7;">Rahman Aluminium &amp; Glass Works</strong></li>
            <li>Workshop: [ADD FULL ADDRESS], Sialkot, Punjab, Pakistan</li>
            <li><a href="tel:+923021054485" class="footer-contact-link">+92 302 1054485</a></li>
            <li><a href="mailto:rahmanaluminiumworker@gmail.com" class="footer-contact-link">rahmanaluminiumworker@gmail.com</a></li>
            <li><span style="color: var(--color-text-secondary); font-size: 0.875rem;">Mon – Sat: 9:00 AM – 7:00 PM (Sun Closed)</span></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2026 Rahman Aluminium &amp; Glass Works (Glass &amp; Mirror Design Sialkot). All Rights Reserved.</p>
        <p>Premium Aluminium Glass Work &amp; Mirror Design — Sialkot, Punjab, Pakistan</p>
      </div>
    </div>
  </footer>

  <!-- 8. FLOATING CALL & WHATSAPP BUTTONS -->
  <div class="floating-contact-buttons">
    <a href="tel:+923021054485" class="float-btn phone-float" aria-label="Call Us">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    </a>
    <a href="${waLink}" target="_blank" rel="noopener" class="float-btn whatsapp-float" aria-label="Chat on WhatsApp">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
    </a>
  </div>

  <script src="../script.js" defer></script>
  <script>
    // Thumbnail switcher
    document.querySelectorAll('.gallery-thumbnail').forEach(btn => {
      btn.addEventListener('click', () => {
        const large = btn.getAttribute('data-large');
        const alt = btn.getAttribute('data-alt');
        const mainImg = document.getElementById('main-product-image');
        if (mainImg && large) {
          mainImg.src = large;
          if (alt) mainImg.alt = alt;
        }
        document.querySelectorAll('.gallery-thumbnail').forEach(b => {
          b.style.borderColor = 'transparent';
          b.classList.remove('active');
        });
        btn.style.borderColor = 'var(--color-gold)';
        btn.classList.add('active');
      });
    });
  </script>
</body>
</html>`;

  fs.writeFileSync(path.join(outputDir, `${p.slug}.html`), html, 'utf8');

  processedProducts.push({
    ...p,
    title: p.title,
    seoTitle: title,
    metaDesc: metaDesc,
    description: richDesc,
    wordCount: words,
    mainImage: mainImgUrl.substring(1), // remove leading slash
    images: subImages.map(img => ({
      src: resolveImage(img.src, p.slug).substring(1),
      alt: img.alt && !img.alt.includes('Sialkot') ? `${img.alt} Sialkot` : (img.alt || `${p.title} Sialkot`)
    }))
  });
});

console.log(`Successfully generated ${products.length} product pages in /products!`);

// Write updated products-data.js
const updatedProductsDataContent = `/* ============================================================
   RAHMAN — Aluminium & Glass Works
   Product Catalog Database (Optimized for Local SEO Sialkot)
   ============================================================ */

const productsData = ${JSON.stringify(processedProducts, null, 2)};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = productsData;
}
`;

fs.writeFileSync(path.join(__dirname, '../products-data.js'), updatedProductsDataContent, 'utf8');
console.log('Updated products-data.js with new WebP images, rich 200+ word descriptions, and clean paths.');
