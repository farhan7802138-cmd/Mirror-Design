const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, '../service-areas');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const locations = [
  {
    slug: 'sialkot',
    name: 'Sialkot City',
    h1: 'Aluminium Glass Work & LED Mirror Design in Sialkot',
    title: 'Aluminium Glass Work & Mirrors Sialkot | Rahman',
    metaDesc: 'Custom aluminium doors, windows, glass partitions & LED smart mirrors in Sialkot. Free on-site laser measurement visit. Call/WhatsApp: +92 302 1054485.',
    geo: { lat: '32.4945', lng: '74.5229' },
    heroImage: '../images/aluminium-doors.webp',
    intro: `As Sialkot's dedicated architectural aluminium fabricators and bespoke glass craftsmen, Rahman Aluminium & Glass Works delivers precision manufacturing directly from our local workshop. Whether you are constructing a contemporary multi-story home on Kashmir Road, refurbishing an export executive office near Paris Road, or upgrading a commercial retail showroom in Model Town, we offer complete end-to-end service. Our master fabricators handle everything from on-site laser surveying to precision cutting, powder-coating, and dust-free on-site installation.`,
    localContext: `Sialkot is globally celebrated for manufacturing prowess, and local residences demand the same level of industrial precision. From bustling commercial centers around Defense Road and Paris Road to residential developments in Model Town and Shahabpura, our installations are engineered for endurance. In Sialkot's hot summers and humid monsoon seasons, standard wooden fixtures warp, swell, and require recurring repainting. Our heavy-gauge architectural aluminium doors and double-glazed windows provide permanent weather resistance, acoustic insulation from street traffic, and zero maintenance.`,
    specialties: [
      { title: 'Commercial Office Glass Partitions', desc: 'Sleek 10mm and 12mm tempered frameless glass walls with acoustic seals for Sialkot’s surgical, leather, and sports export offices.' },
      { title: 'Custom LED Backlit Vanity Mirrors', desc: 'Handcrafted copper-free silver mirrors with touch sensor defoggers, ideal for modern master bedrooms and luxury dressing rooms.' },
      { title: 'Architectural Aluminium Shopfronts', desc: 'Heavy-gauge powder-coated structural framing and safety glass facades for retail plazas on Paris Road and Kashmir Road.' },
      { title: 'Acoustic Double-Glazed Windows', desc: 'Thermal and sound-insulating sliding and casement windows engineered to keep dust and urban street noise outside.' }
    ],
    landmarkMentions: 'Kashmir Road, Paris Road, Defence Road, Model Town, Shahabpura, Commissioner Road, Small Industrial Estate'
  },
  {
    slug: 'sialkot-cantt',
    name: 'Sialkot Cantt',
    h1: 'Aluminium Doors, Windows & Luxury Mirrors in Sialkot Cantt',
    title: 'Aluminium & Glass Work Sialkot Cantt | Rahman',
    metaDesc: 'Architectural aluminium doors, double-glazed windows & luxury LED mirrors in Sialkot Cantt. Premium fabrication. Call/WhatsApp: +92 302 1054485.',
    geo: { lat: '32.5200', lng: '74.5450' },
    heroImage: '../images/wavy-led-mirror.webp',
    intro: `For homeowners, architects, and estate managers across Sialkot Cantt, Rahman Aluminium & Glass Works provides top-tier architectural fabrication that complements high-end luxury residences and executive bungalows. From expansive thermal-break aluminium patio doors overlooking private lawns to frameless glass shower cabins and bespoke backlit dressing mirrors, we deliver pristine European-grade finishes with local workshop responsiveness.`,
    localContext: `Sialkot Cantt is known for its spacious residential bungalows, colonial-era estate renovations, and newly constructed executive villas along Mall Road, Garrison areas, and adjacent defense housing communities. High architectural standards require flawless alignment, superior profile gauges (1.6mm to 2.0mm heavy sections), and noiseless sliding hardware. Our acoustic double-glazed windows dramatically cut down aircraft and perimeter noise, while maintaining interior thermal comfort during peak winter and summer temperatures.`,
    specialties: [
      { title: 'Heavy Thermal-Break Entrance Doors', desc: 'Custom pivot and French patio entrance doors engineered with multi-point locking and Italian woodgrain powder coating.' },
      { title: 'Frameless Tempered Glass Shower Cabins', desc: '10mm safety tempered enclosures with Grade 304 anti-rust stainless steel brackets and magnetic water barriers.' },
      { title: 'Designer Full-Length Velvet Floor Mirrors', desc: 'Curved organic wavy floor mirrors wrapped in plush royal blue or black velvet, paired with matching vanity ottomans.' },
      { title: 'Soundproof Aluminium Windows', desc: 'Double-glazed hermetically sealed windows with argon gas filling for ultimate tranquility and dust protection.' }
    ],
    landmarkMentions: 'Mall Road, Cantt Board residential zones, Garrison Club vicinity, Tariq Road, Officers Colony'
  },
  {
    slug: 'daska',
    name: 'Daska',
    h1: 'Aluminium Fabricators & Glass Mirror Work in Daska',
    title: 'Aluminium & Glass Works Daska | Rahman Workshop',
    metaDesc: 'Custom aluminium windows, sliding doors, shopfronts & LED mirrors in Daska. Direct workshop prices & free site measurement. WhatsApp: +92 302 1054485.',
    geo: { lat: '32.3242', lng: '74.3503' },
    heroImage: '../images/shopfront-shutters.webp',
    intro: `Serving residential builders, commercial plazas, and homeowners in Daska, Rahman Aluminium & Glass Works brings specialized metal fabrication and glass installation directly to your doorstep. Located just minutes down the highway from our centralized workshop, we offer Daska clients same-day site visits, laser measurements, and direct factory pricing with zero retail middlemen markup.`,
    localContext: `Daska is a bustling industrial, agricultural machinery, and commercial trading center with extensive residential expansion along Nisbat Road, College Road, Gujranwala Road, and Sambrial Road. Commercial properties require heavy-duty aluminium shopfronts and tempered display glass that withstand heavy footfall. Meanwhile, newly built family homes and farmhouses across Daska benefit from modern aluminium sliding windows and elegant custom LED mirrors that elevate everyday living spaces.`,
    specialties: [
      { title: 'Commercial Plaza Shopfronts', desc: 'Durable aluminium framed shop facades and toughened 12mm glass entrances built for Daska market centers.' },
      { title: 'Weatherproof Sliding Windows', desc: 'Heavy-section aluminium sliding windows fitted with wool-pile seals to keep agricultural dust and monsoon rain out.' },
      { title: 'Bathroom & Vanity LED Mirrors', desc: 'Custom-cut bathroom mirrors with integrated defoggers and touch sensors, delivered and installed safely in Daska.' },
      { title: 'Aluminium Security Grill Railings', desc: 'Rustproof powder-coated balcony railings and window security grills providing safety with modern architectural lines.' }
    ],
    landmarkMentions: 'Nisbat Road, College Road, GT Road connector, Civil Hospital Road, Daska Grain Market, Sambrial Road'
  },
  {
    slug: 'sambrial',
    name: 'Sambrial',
    h1: 'Aluminium & Glass Services in Sambrial & Airport Belt',
    title: 'Aluminium & Glass Work Sambrial | Rahman Workshop',
    metaDesc: 'Aluminium doors, windows, industrial glass partitions & shopfronts in Sambrial & Dry Port area. Free site inspection. WhatsApp: +92 302 1054485.',
    geo: { lat: '32.4764', lng: '74.3522' },
    heroImage: '../images/glass-partitions.webp',
    intro: `Conveniently positioned along the Sialkot-Lahore Motorway (M-11) corridor and Sambrial Dry Port belt, Rahman Aluminium & Glass Works is the premier contractor for industrial, commercial, and residential glazing in Sambrial. We specialize in robust aluminium shopfronts, warehouse office partitions, acoustic soundproof windows, and custom vanity mirrors for homes.`,
    localContext: `Sambrial represents a crucial economic gateway for the golden industrial triangle of Gujranwala, Sialkot, and Gujrat. With the Sialkot International Airport and the Sambrial Dry Port nearby, corporate offices, customs clearing agencies, and logistics centers continuously demand structural glass partitions and commercial aluminium doors. In residential developments across Sambrial town, homeowners trust Rahman for high-gauge aluminium windows that withstand highway traffic vibrations and environmental dust.`,
    specialties: [
      { title: 'Dry Port & Logistics Office Partitions', desc: 'Acoustic modular tempered glass divider walls designed for fast installation and modern executive privacy.' },
      { title: 'Airport Road Commercial Showrooms', desc: 'Expansive structural glass facades and aluminium entrance doors for highway retail establishments.' },
      { title: 'Residential Double Glazing', desc: 'High-performance insulated glass units for Sambrial homes facing the main bypass and airport traffic.' },
      { title: 'Custom Smart Mirrors', desc: 'Front-lit and backlit bathroom mirrors fabricated to order with IP65 waterproofing for damp environments.' }
    ],
    landmarkMentions: 'Sambrial Dry Port, Sialkot International Airport Road, M-11 Motorway Interchange, Wazirabad-Sialkot Road'
  },
  {
    slug: 'pasrur',
    name: 'Pasrur',
    h1: 'Aluminium Doors, Windows & Glass Mirror Work in Pasrur',
    title: 'Aluminium & Glass Works Pasrur | Rahman Workshop',
    metaDesc: 'Custom aluminium windows, security doors, glass shower cabins & vanity mirrors in Pasrur. Free laser estimate. Call/WhatsApp: +92 302 1054485.',
    geo: { lat: '32.2683', lng: '74.6675' },
    heroImage: '../images/decorative-mirrors.webp',
    intro: `Homeowners, contractors, and retail shop owners in Pasrur can now access direct architectural aluminium fabrication and high-end mirror craftsmanship without traveling to major metropolitan centers. Rahman Aluminium & Glass Works provides scheduled on-site laser measurements, safe transit of tempered glass, and professional on-site mounting throughout Pasrur.`,
    localContext: `Pasrur is experiencing significant residential construction along Pasrur-Sialkot Road and newly established housing colonies. Traditional timber doors in this region suffer from severe seasonal contraction and expansion, leading to stuck locks and drafty gaps. Our powder-coated aluminium doors and windows offer an airtight, termite-proof, and fire-resistant alternative that retains its showroom finish for decades with zero maintenance.`,
    specialties: [
      { title: 'Termite-Proof Main Entrance Doors', desc: 'Italian woodgrain finish aluminium doors that never warp, rot, or fade under intense Punjab summer heat.' },
      { title: 'Dustproof Sliding Windows', desc: 'Fitted with double weather-strips and interlocking meeting stiles to maintain clean indoor air in Pasrur residences.' },
      { title: 'Tempered Glass Shower Enclosures', desc: 'Modern frameless and semi-framed shower cabins custom sized for compact and master bathrooms.' },
      { title: 'Decorative & Dressing Mirrors', desc: 'Full-length arched, oval, and organic wavy mirrors designed for bridal bedrooms and dressing areas.' }
    ],
    landmarkMentions: 'Pasrur-Sialkot Highway, Main Bazaar Pasrur, Kachehri Road, Railway Road, Model Town Pasrur'
  },
  {
    slug: 'wazirabad-road',
    name: 'Wazirabad Road',
    h1: 'Aluminium Commercial Glazing & Mirrors on Wazirabad Road',
    title: 'Aluminium & Glass Wazirabad Road Sialkot | Rahman',
    metaDesc: 'Commercial shopfronts, industrial aluminium partitions & architectural glass along Wazirabad Road Sialkot. Free estimate: +92 302 1054485.',
    geo: { lat: '32.4836', lng: '74.4300' },
    heroImage: '../images/shopfront-shutters.webp',
    intro: `Wazirabad Road is one of Sialkot's most vital commercial and industrial arteries, lined with manufacturing plants, export showrooms, automobile dealerships, and multi-story commercial plazas. Rahman Aluminium & Glass Works is the preferred partner for heavy structural glazing, commercial entrance systems, and bespoke interior glass installations along this bustling highway corridor.`,
    localContext: `Properties situated on Wazirabad Road face continuous heavy vehicular traffic, industrial particulate matter, and acoustic noise. Standard lightweight commercial aluminium sections quickly rattle and leak air. We deploy 1.6mm and 2.0mm heavy structural aluminium frames paired with laminated safety glass or double-glazed acoustic panels to deliver sound isolation, seismic stability, and maximum security for retail and corporate premises.`,
    specialties: [
      { title: 'Commercial Plaza Curtain Walls', desc: 'Modern structural glass facades that maximize natural light while reflecting solar heat on Wazirabad Road.' },
      { title: 'Industrial Heavy Sliding Entrances', desc: 'Reinforced aluminium track sliding systems capable of supporting large tempered glass panels.' },
      { title: 'Corporate Glass Partitions', desc: 'Floor-to-ceiling glass cubicles and executive conference room walls with custom frosted branding bands.' },
      { title: 'Showroom Display Glazing', desc: 'Optically clear, shatter-resistant tempered display glass for commercial retail outlets.' }
    ],
    landmarkMentions: 'Wazirabad-Sialkot Highway corridor, Small Industrial Estate access, export manufacturing belt, commercial plazas'
  },
  {
    slug: 'jamke-cheema',
    name: 'Jamke Cheema',
    h1: 'Aluminium Doors, Windows & Custom Mirrors in Jamke Cheema',
    title: 'Aluminium & Glass Work Jamke Cheema | Rahman',
    metaDesc: 'Bespoke aluminium doors, sliding windows, shower partitions & LED mirrors in Jamke Cheema. Direct workshop delivery. WhatsApp: +92 302 1054485.',
    geo: { lat: '32.3950', lng: '74.3200' },
    heroImage: '../images/bathroom-mirrors.webp',
    intro: `Serving the community of Jamke Cheema and neighboring rural estates between Daska and Sialkot, Rahman Aluminium & Glass Works provides personalized architectural metalwork and premium glass installations. Whether you are building a new family residence, outfitting an expansive farmhouse haveli, or modernizing bathroom vanities, we provide full on-site measurement and turnkey installation.`,
    localContext: `In Jamke Cheema, spacious private homes and agricultural estates require substantial, secure, and weatherproof architectural elements. Wooden exterior doors frequently rot from irrigation moisture and monsoon storms. Our woodgrain sublimated aluminium doors replicate the grandeur of traditional solid wood while guaranteeing lifetime immunity to termites, rot, and moisture damage.`,
    specialties: [
      { title: 'Farmhouse Villa Entrance Doors', desc: 'Grand double-leaf aluminium entrance doors with decorative frosted glass panels and secure multi-point locks.' },
      { title: 'Airtight Sliding Patio Windows', desc: 'Engineered with double wool piles and heavy track rollers to completely block dust from surrounding fields.' },
      { title: 'Custom Bridal Dressing Mirrors', desc: 'Illuminated LED mirrors and organic wavy velvet-bordered floor mirrors tailored for wedding suites.' },
      { title: 'Tempered Glass Railings & Balconies', desc: 'Stainless steel spigot-mounted glass balcony railings providing unobstructed views and modern safety.' }
    ],
    landmarkMentions: 'Jamke Cheema Main Bazaar, Daska-Jamke Road, Canal bank farmhouses, local residential estates'
  },
  {
    slug: 'ugoki',
    name: 'Ugoki',
    h1: 'Industrial Aluminium & Glass Fabrication in Ugoki Sialkot',
    title: 'Aluminium & Glass Fabrication Ugoki | Rahman Workshop',
    metaDesc: 'Factory glass partitions, soundproof aluminium windows & shopfronts in Ugoki industrial zone Sialkot. Free quote: +92 302 1054485.',
    geo: { lat: '32.5350', lng: '74.4500' },
    heroImage: '../images/arched-floor-mirror.webp',
    intro: `As a central hub for Sialkot's sports goods, leather tanning, and surgical instrument manufacturing, Ugoki requires tough, industrial-strength architectural solutions. Rahman Aluminium & Glass Works engineers heavy-duty aluminium partitions, acoustic double-glazed windows, commercial entrance doors, and durable mirror fixtures tailored to factory offices and residential homes in Ugoki.`,
    localContext: `Factory administrative blocks and quality-assurance laboratories in Ugoki need acoustic isolation from loud machinery operating nearby. Our double-glazed acoustic window units and 12mm tempered glass office partitions deliver up to 38 dB of noise reduction, creating quiet, climate-controlled corporate environments. For local homes in Ugoki, our sleek sliding windows and custom LED mirrors offer unbeatable longevity.`,
    specialties: [
      { title: 'Factory Office Modular Partitions', desc: 'Quick-assembly powder-coated aluminium frames with tempered safety glass for manufacturing management suites.' },
      { title: 'Industrial Acoustic Double Glazing', desc: 'Heavy sound-dampening window assemblies engineered to block heavy industrial vibration and machinery hum.' },
      { title: 'High-Traffic Shopfront Facades', desc: 'Reinforced commercial storefront glazing designed for Ugoki bazaar and commercial market plazas.' },
      { title: 'Durable Residential LED Mirrors', desc: 'Moisture-sealed IP65 vanity mirrors handcrafted for Ugoki residential bathrooms and dressing spaces.' }
    ],
    landmarkMentions: 'Ugoki Railway Station area, Sialkot-Wazirabad Road bypass, industrial manufacturing clusters, Ugoki Main Market'
  }
];

locations.forEach(loc => {
  const fullUrl = `https://mirror-design.vercel.app/service-areas/${loc.slug}`;

  const specialtiesHTML = loc.specialties.map(spec => `
        <div class="location-specialty-card">
          <div style="color: var(--color-gold); font-size: 1.25rem; margin-bottom: 0.5rem;">✦</div>
          <h3 style="font-family: 'Outfit', sans-serif; font-size: 1.15rem; color: var(--color-light-text); margin-bottom: 0.5rem;">${spec.title}</h3>
          <p style="font-size: 0.9rem; color: var(--color-light-text-secondary); line-height: 1.6; margin: 0;">${spec.desc}</p>
        </div>`).join('');

  const otherLocations = locations
    .filter(l => l.slug !== loc.slug)
    .map(l => `<a href="/service-areas/${l.slug}" style="background: var(--color-light-hero-bg); color: var(--color-gold); padding: 8px 16px; border-radius: 8px; font-size: 0.875rem; text-decoration: none; border: 1px solid rgba(201,162,75,0.3);">${l.name}</a>`)
    .join('');

  const waMessage = encodeURIComponent(`Hello Rahman Aluminium & Glass Works,

I am located in ${loc.name} and would like to request a free on-site measurement / estimate for:
- Service Area: ${loc.name}
- Services of interest: Aluminium doors / windows / glass partitions / mirrors

Please let me know when your technical team can visit.`);

  const waLink = `https://wa.me/923021054485?text=${waMessage}`;

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${loc.title}</title>
  <meta name="description" content="${loc.metaDesc}">
  <meta name="author" content="Rahman Aluminium &amp; Glass Works">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="${fullUrl}">

  <!-- Open Graph -->
  <meta property="og:title" content="${loc.title}">
  <meta property="og:description" content="${loc.metaDesc}">
  <meta property="og:image" content="https://mirror-design.vercel.app/og-image.jpg">
  <meta property="og:url" content="${fullUrl}">
  <meta property="og:type" content="website">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${loc.title}">
  <meta name="twitter:description" content="${loc.metaDesc}">
  <meta name="twitter:image" content="https://mirror-design.vercel.app/og-image.jpg">

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

  <!-- LocalBusiness Schema with AreaServed -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Rahman Aluminium & Glass Works - ${loc.name}",
    "image": "https://mirror-design.vercel.app/og-image.jpg",
    "telephone": "+923021054485",
    "email": "rahmanaluminiumworker@gmail.com",
    "url": "${fullUrl}",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Small Industrial Estate",
      "addressLocality": "Sialkot",
      "addressRegion": "Punjab",
      "addressCountry": "PK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "${loc.geo.lat}",
      "longitude": "${loc.geo.lng}"
    },
    "areaServed": {
      "@type": "City",
      "name": "${loc.name}"
    },
    "openingHours": "Mo-Sa 09:00-19:00",
    "priceRange": "PKR"
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
        "name": "Service Areas",
        "item": "https://mirror-design.vercel.app/service-areas"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "${loc.name}",
        "item": "${fullUrl}"
      }
    ]
  }
  </script>
</head>
<body class="theme-light">

  <!-- 1. TOP ANNOUNCEMENT BAR -->
  <div class="announcement-bar">
    <div class="announcement-slider">
      <div class="announcement-track">
        <span class="announcement-item">Free Estimates on All Orders | Quality Aluminium &amp; Glass Work ${loc.name}</span>
        <span class="announcement-item">🔥 Call Master Rahman: +92 302 1054485 🔥</span>
        <span class="announcement-item">Free Estimates on All Orders | Quality Aluminium &amp; Glass Work ${loc.name}</span>
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
        <a href="/service-areas" class="active">Service Areas</a>
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
  <nav class="breadcrumbs" aria-label="Breadcrumb" style="padding: 1.25rem 0; background: var(--color-light-bg); border-bottom: 1px solid var(--color-light-border);">
    <div class="container">
      <div style="font-size: 0.875rem; color: var(--color-light-text-secondary); display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
        <a href="/" style="color: var(--color-light-text-secondary); text-decoration: none;">Home</a>
        <span>◆</span>
        <a href="/service-areas" style="color: var(--color-light-text-secondary); text-decoration: none;">Service Areas</a>
        <span>◆</span>
        <span style="color: var(--color-gold); font-weight: 500;" aria-current="page">${loc.name}</span>
      </div>
    </div>
  </nav>

  <!-- 5. LOCATION HERO BANNER -->
  <section class="page-hero">
    <div class="page-hero-bg">
      <img src="${loc.heroImage}" alt="${loc.name} Aluminium and Glass Works">
    </div>
    <div class="container page-hero-content fade-in">
      <div class="hero-label">Direct Workshop Service &bull; ${loc.name}</div>
      <h1 class="page-hero-title">${loc.h1}</h1>
      <p class="page-hero-subtitle">${loc.intro}</p>
      <div class="page-hero-actions">
        <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp" style="font-size: 1rem; padding: 0.85rem 1.75rem;">
          💬 Book Free Site Visit in ${loc.name}
        </a>
        <a href="tel:+923021054485" class="btn btn-primary" style="font-size: 1rem; padding: 0.85rem 1.5rem;">
          📞 Call: 0302 1054485
        </a>
      </div>
    </div>
  </section>

  <main class="location-page-main">
    <div class="container">

      <!-- Local Architectural Context Section (300+ Words) -->
      <section class="location-context-box">
        <span style="color: var(--color-gold); font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; display: block; margin-bottom: 8px;">Regional Expertise</span>
        <h2 style="font-family: 'Outfit', sans-serif; font-size: 1.75rem; color: var(--color-light-text); margin-bottom: 1.25rem;">
          Architectural Fabrication Tailored to ${loc.name}
        </h2>
        <div style="font-size: 1.05rem; line-height: 1.8; color: var(--color-light-text); margin-bottom: 1.5rem;">
          <p style="margin-bottom: 1.25rem;">${loc.localContext}</p>
          <p style="margin: 0;">Our mobile laser measurement team regularly visits properties across <strong>${loc.landmarkMentions}</strong>, ensuring accurate millimeter-level sizing before our factory begins extrusion cutting, glass tempering, or electrical LED wiring.</p>
        </div>
      </section>

      <!-- Services Offered in This Location -->
      <section style="margin-bottom: 4rem;">
        <div style="margin-bottom: 2rem;">
          <span style="color: var(--color-gold); font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; display: block; margin-bottom: 6px;">Turnkey Solutions</span>
          <h2 style="font-family: 'Outfit', sans-serif; font-size: 1.75rem; color: var(--color-light-text); margin: 0;">
            Our Specializations in ${loc.name}
          </h2>
        </div>
        <div class="location-specialties-grid">
          ${specialtiesHTML}
        </div>
      </section>

      <!-- Direct Links to Our 6 Core Service Pages -->
      <section style="background: var(--color-white); border: 1px solid var(--color-light-border); border-radius: 16px; padding: 2.5rem; margin-bottom: 4rem; box-shadow: var(--shadow-sm);">
        <h2 style="font-family: 'Outfit', sans-serif; font-size: 1.5rem; color: var(--color-light-text); margin-bottom: 1rem;">
          Explore Our Complete Fabrication Services
        </h2>
        <p style="font-size: 0.95rem; color: var(--color-light-text-secondary); line-height: 1.6; margin-bottom: 1.5rem;">
          Every service is backed by our master craftsman guarantee, high-grade hardware, and precision installation:
        </p>
        <div class="location-services-grid">
          <a href="/services/aluminium-doors" class="location-service-link-card">
            <h4 style="color: var(--color-gold); margin: 0 0 0.25rem 0; font-size: 1rem;">Aluminium Doors &rarr;</h4>
            <p style="font-size: 0.8rem; color: var(--color-light-text-secondary); margin: 0;">Entrance, sliding &amp; French patio systems</p>
          </a>
          <a href="/services/aluminium-windows" class="location-service-link-card">
            <h4 style="color: var(--color-gold); margin: 0 0 0.25rem 0; font-size: 1rem;">Aluminium Windows &rarr;</h4>
            <p style="font-size: 0.8rem; color: var(--color-light-text-secondary); margin: 0;">Double glazed &amp; acoustic sliding windows</p>
          </a>
          <a href="/services/glass-partitions" class="location-service-link-card">
            <h4 style="color: var(--color-gold); margin: 0 0 0.25rem 0; font-size: 1rem;">Glass Partitions &rarr;</h4>
            <p style="font-size: 0.8rem; color: var(--color-light-text-secondary); margin: 0;">Office enclosures &amp; tempered divider walls</p>
          </a>
          <a href="/services/shower-cabins" class="location-service-link-card">
            <h4 style="color: var(--color-gold); margin: 0 0 0.25rem 0; font-size: 1rem;">Shower Cabins &rarr;</h4>
            <p style="font-size: 0.8rem; color: var(--color-light-text-secondary); margin: 0;">Frameless 10mm glass cubicles &amp; screens</p>
          </a>
          <a href="/services/led-mirrors" class="location-service-link-card">
            <h4 style="color: var(--color-gold); margin: 0 0 0.25rem 0; font-size: 1rem;">LED &amp; Smart Mirrors &rarr;</h4>
            <p style="font-size: 0.8rem; color: var(--color-light-text-secondary); margin: 0;">Touch sensors, defoggers &amp; custom silhouettes</p>
          </a>
          <a href="/services/shopfronts" class="location-service-link-card">
            <h4 style="color: var(--color-gold); margin: 0 0 0.25rem 0; font-size: 1rem;">Aluminium Shopfronts &rarr;</h4>
            <p style="font-size: 0.8rem; color: var(--color-light-text-secondary); margin: 0;">Heavy-duty retail &amp; commercial facades</p>
          </a>
        </div>
      </section>

      <!-- Surrounding Service Areas -->
      <section style="padding-top: 2rem; border-top: 1px solid var(--color-light-border);">
        <h3 style="font-family: 'Outfit', sans-serif; font-size: 1.15rem; color: var(--color-light-text); margin-bottom: 1rem;">
          Other Nearby Service Areas in Sialkot District
        </h3>
        <div class="location-nearby-tags">
          ${otherLocations}
        </div>
      </section>

    </div>
  </main>

  <!-- FOOTER -->
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

  <!-- FLOATING CALL & WHATSAPP BUTTONS -->
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
</body>
</html>`;

  fs.writeFileSync(path.join(outputDir, `${loc.slug}.html`), html, 'utf8');
  console.log(`Generated location page: service-areas/${loc.slug}.html`);
});

console.log('All 8 location pages successfully generated!');
