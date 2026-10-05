const fs = require('fs');
const path = require('path');

const servicesDir = path.join(__dirname, '../services');

const serviceConfigs = {
  'aluminium-doors.html': {
    slug: 'aluminium-doors',
    title: 'Aluminium Doors Sialkot | Entrance & Sliding | Rahman',
    metaDesc: 'Custom aluminium doors in Sialkot. Main entrance pivot doors, sliding patio doors & French double doors. Free estimate: +92 302 1054485.',
    h1: 'Architectural Aluminium Doors in Sialkot',
    serviceType: 'Aluminium Doors Fabrication & Installation',
    relatedProducts: [
      { slug: 'aluminium-main-door', name: 'Aluminium Main Entrance Door' },
      { slug: 'aluminium-sliding-door', name: 'Aluminium Sliding Patio Door' },
      { slug: 'aluminium-partition-wall', name: 'Aluminium Frame Partition Wall' }
    ],
    faqs: [
      {
        q: 'What is the standard price per square foot for aluminium doors in Sialkot?',
        a: 'Pricing generally ranges from Rs. 850 to Rs. 1,650 per square foot depending on the profile section gauge (1.2mm, 1.6mm, or 2.0mm heavy section), glass specification (single clear vs. double-glazed reflective), and lock hardware. We offer 100% free on-site measurement visits and provide an itemized quote.'
      },
      {
        q: 'How long does fabrication and installation take for custom aluminium doors?',
        a: 'Standard fabrication takes 5 to 7 working days once measurements and finishes are confirmed. On-site installation is completed cleanly in a single day with zero disruption to your household.'
      },
      {
        q: 'What warranty do you provide on aluminium doors and lock hardware?',
        a: 'We provide a 5-year warranty on architectural powder-coated profiles against peeling or fading, and a 1-year warranty on rollers, hinges, and euro-cylinder locking mechanisms.'
      },
      {
        q: 'Can aluminium doors look like authentic wood?',
        a: 'Yes. We specialize in Italian woodgrain sublimation coatings in Dark Walnut, Golden Oak, and Teak. You get the warmth of timber with the structural strength, fire safety, and termite immunity of aluminium.'
      },
      {
        q: 'Do you offer free laser measurement visits in Sialkot Cantt and Daska?',
        a: 'Yes, Master Rahman and our technical team provide complimentary on-site laser surveys throughout Sialkot City, Sialkot Cantt, Daska, Sambrial, Pasrur, and Wazirabad Road.'
      }
    ]
  },
  'aluminium-windows.html': {
    slug: 'aluminium-windows',
    title: 'Aluminium Windows Sialkot | Double Glazed | Rahman',
    metaDesc: 'Double-glazed & sliding aluminium windows in Sialkot. Soundproof, dustproof, energy-saving acoustic frames. Free estimate: +92 302 1054485.',
    h1: 'Double-Glazed & Sliding Aluminium Windows in Sialkot',
    serviceType: 'Aluminium Windows Fabrication & Glazing',
    relatedProducts: [
      { slug: 'aluminium-sliding-window', name: 'Aluminium Sliding Window' },
      { slug: 'aluminium-casement-window', name: 'Aluminium Casement Window' },
      { slug: 'aluminium-sliding-door', name: 'Aluminium Sliding Patio Door' }
    ],
    faqs: [
      {
        q: 'What is the price of double-glazed aluminium windows in Sialkot?',
        a: 'Double-glazed sliding windows typically range from Rs. 950 to Rs. 1,550 per square foot depending on glass thickness (e.g., 5mm+12A+5mm), aluminium section gauge (1.6mm heavy profile), and hardware quality.'
      },
      {
        q: 'How much street noise do double-glazed windows block?',
        a: 'Our hermetically sealed double-glazed units deliver noise attenuation up to 35-38 dB, reducing exterior traffic rumble, horns, and generator hums by more than 70%.'
      },
      {
        q: 'What warranty is offered on the glass seal and aluminium coating?',
        a: 'We provide a 5-year warranty against internal seal clouding or moisture leakage in insulated glass units, and a 10-year warranty on powder coating against weather degradation.'
      },
      {
        q: 'What materials and profile sections do you use for windows?',
        a: 'We exclusively use virgin architectural aluminium extrusion alloys (6063-T5) in 1.2mm to 2.0mm structural wall thicknesses, paired with double-bearing nylon rollers and EPDM compression gaskets.'
      },
      {
        q: 'How quickly can you survey my site for window replacement in Sialkot?',
        a: 'We offer same-day or next-day free laser measurement surveys across Sialkot, Cantt, Ugoki, and surrounding areas. Call or WhatsApp +92 302 1054485 to book.'
      }
    ]
  },
  'glass-partitions.html': {
    slug: 'glass-partitions',
    title: 'Glass Partitions Sialkot | Office Divider Walls | Rahman',
    metaDesc: 'Custom office glass partitions & divider walls in Sialkot. 10mm & 12mm tempered safety glass, acoustic seals. Free estimate: +92 302 1054485.',
    h1: 'Architectural Office Glass Partitions in Sialkot',
    serviceType: 'Commercial Glass Partition Fabrication',
    relatedProducts: [
      { slug: 'office-glass-partition', name: 'Office Glass Partition Wall' },
      { slug: 'aluminium-partition-wall', name: 'Aluminium Frame Partition Wall' },
      { slug: 'glass-shower-partition', name: 'Glass Shower Partition' }
    ],
    faqs: [
      {
        q: 'How much does a commercial office glass partition cost per sq ft in Sialkot?',
        a: 'Turnkey office glass partitions (including 10mm or 12mm Grade-A tempered glass, slim perimeter aluminium U-channels, patch fittings, and installation) range from Rs. 950 to Rs. 1,450 per square foot.'
      },
      {
        q: 'What is the fabrication and installation timeline for office partitions?',
        a: 'Standard turnaround is 5 to 7 days from laser measurement to tempering. On-site installation is completed cleanly over a weekend or overnight to avoid interrupting office operations.'
      },
      {
        q: 'Can frosted branding logos or privacy films be added to the glass?',
        a: 'Yes! We offer computer-plotted frosted vinyl bands, custom company logo cutouts, acid-etched privacy patterns, and full smart switchable privacy glass options.'
      },
      {
        q: 'Is tempered glass safe for commercial offices in Sialkot?',
        a: 'Absolutely. We use thermally toughened Grade-A safety glass certified to withstand strong impacts. In the unlikely event of breakage, it crumbles into small granular pebbles rather than sharp shards.'
      },
      {
        q: 'Do you provide on-site measurement visits along Wazirabad Road and Sambrial?',
        a: 'Yes, our technical team provides complimentary laser surveys for corporate offices, factories, and commercial plazas across Sialkot, Sambrial Dry Port belt, and Wazirabad Road.'
      }
    ]
  },
  'shower-cabins.html': {
    slug: 'shower-cabins',
    title: 'Glass Shower Cabins Sialkot | Frameless Enclosures | Rahman',
    metaDesc: 'Custom tempered glass shower cabins & bathroom enclosures in Sialkot. 10mm frameless glass, Grade 304 hardware. Free estimate: +92 302 1054485.',
    h1: 'Custom Tempered Glass Shower Cabins in Sialkot',
    serviceType: 'Shower Cabin Fabrication & Installation',
    relatedProducts: [
      { slug: 'glass-shower-partition', name: 'Glass Shower Partition Enclosure' },
      { slug: 'smart-backlit-bathroom-vanity-mirror', name: 'Smart Backlit Bathroom Vanity Mirror' },
      { slug: 'octagonal-dual-tone-led-smart-mirror', name: 'Octagonal Dual-Tone LED Smart Mirror' }
    ],
    faqs: [
      {
        q: 'How much does a frameless glass shower cabin cost in Sialkot?',
        a: 'A single walk-in fixed glass screen costs Rs. 18,000 to Rs. 28,000 installed. Full L-shaped or corner shower cubicles with swing or sliding doors range from Rs. 42,000 to Rs. 68,000 including Grade 304 hardware.'
      },
      {
        q: 'What glass thickness is recommended for bathroom shower enclosures?',
        a: 'We recommend 10mm Grade-A safety tempered glass as the optimal balance between structural rigidity, user safety, and smooth hinge movement.'
      },
      {
        q: 'Will the shower hardware rust from Sialkot water?',
        a: 'No. We exclusively install certified Grade 304 anti-rust stainless steel hinges, brackets, and towel bar handles designed specifically to withstand hard water and high humidity.'
      },
      {
        q: 'How do you prevent water from leaking past the shower door?',
        a: 'We install premium magnetic door gaskets, translucent bottom drip sweeps, and slim floor threshold seals that keep 100% of shower spray inside the wet zone.'
      },
      {
        q: 'Can you measure and install custom shower cabins in Sialkot Cantt and Model Town?',
        a: 'Yes, we provide free laser measurements and guaranteed leak-proof installations across Sialkot Cantt, Model Town, Daska, and surrounding residential colonies.'
      }
    ]
  },
  'led-mirrors.html': {
    slug: 'led-mirrors',
    title: 'LED & Smart Mirrors Sialkot | Vanity Mirror Design | Rahman',
    metaDesc: 'Custom LED smart mirrors in Sialkot. Touch sensors, anti-fog demisters, backlit vanity & organic wavy designs. Free estimate: +92 302 1054485.',
    h1: 'Custom LED & Smart Mirrors in Sialkot',
    serviceType: 'Custom LED Mirror Design & Fabrication',
    relatedProducts: [
      { slug: 'wavy-royal-blue-velvet-floor-mirror', name: 'Wavy Royal Blue Velvet Floor Mirror' },
      { slug: 'octagonal-dual-tone-led-smart-mirror', name: 'Octagonal Dual-Tone LED Smart Mirror' },
      { slug: 'arched-backlit-vanity-mirrors-with-cabinets', name: 'Arched Backlit Vanity Mirror Station' }
    ],
    faqs: [
      {
        q: 'What is the price of custom LED mirrors in Sialkot?',
        a: 'Compact powder room LED mirrors start at Rs. 9,500. Dual-tone smart bathroom mirrors with touch sensors and defoggers range from Rs. 16,000 to Rs. 28,000, while full-length wavy velvet floor mirrors range from Rs. 38,000 to Rs. 65,000.'
      },
      {
        q: 'Can you create custom shapes like organic wavy, arched, or capsule?',
        a: 'Yes, 100%. We specialize in custom waterjet-contoured shapes, reverse laser etching, dual-tone neon lighting, and velvet-cushioned borders tailored to your interior design.'
      },
      {
        q: 'How are the mirror electronics protected against bathroom steam?',
        a: 'All our smart mirrors feature IP65-rated moisture-proof LED drivers, sealed touch sensor modules, and silicone-encapsulated wiring that safely isolate all electrical components.'
      },
      {
        q: 'What is the warranty on LED mirror lights and sensors?',
        a: 'We provide a 2-year replacement warranty on internal LED strips, touch sensor switches, and power transformers, backed by our local Sialkot workshop.'
      },
      {
        q: 'Do you deliver and mount mirrors safely at homes in Sialkot and Daska?',
        a: 'Yes, we provide padded transport and professional on-site mounting with heavy-duty French cleats to ensure 100% stability and safety.'
      }
    ]
  },
  'shopfronts.html': {
    slug: 'shopfronts',
    title: 'Aluminium Shopfronts Sialkot | Glass Retail Facades | Rahman',
    metaDesc: 'Commercial aluminium shopfronts & retail glass facades in Sialkot. Heavy-duty sections, safety glass & secure locks. Free estimate: +92 302 1054485.',
    h1: 'Heavy-Duty Commercial Aluminium Shopfronts in Sialkot',
    serviceType: 'Commercial Aluminium Shopfront Fabrication',
    relatedProducts: [
      { slug: 'aluminium-shopfront', name: 'Commercial Aluminium Shopfront' },
      { slug: 'aluminium-main-door', name: 'Aluminium Main Entrance Pivot Door' },
      { slug: 'office-glass-partition', name: 'Office Glass Partition Wall' }
    ],
    faqs: [
      {
        q: 'What is the cost per square foot for commercial aluminium shopfronts in Sialkot?',
        a: 'Commercial shopfronts typically range from Rs. 1,150 to Rs. 1,850 per square foot depending on structural aluminium frame gauge (1.6mm to 2.0mm heavy section), glass thickness (10mm or 12mm tempered safety glass), and security locks.'
      },
      {
        q: 'How secure are aluminium glass shopfronts against forced entry?',
        a: 'We incorporate heavy-gauge structural extrusion profiles, internal steel reinforcement tie-rods, heavy euro-cylinder multi-point floor locks, and high-impact tempered or laminated safety glass.'
      },
      {
        q: 'How fast can a commercial retail shopfront be installed in Sialkot?',
        a: 'We understand that retail downtime costs money. Once precision measurements are taken, off-site fabrication takes 5 to 6 days, and on-site assembly and glazing is completed within 24 to 48 hours.'
      },
      {
        q: 'What finish options are available for shopfront aluminium framing?',
        a: 'We offer matte black powder coating, anodized silver, bronze, champagne, and custom corporate brand colors cured to withstand heavy sunlight and weather.'
      },
      {
        q: 'Do you fabricate shopfronts on Paris Road, Kashmir Road, and Wazirabad Road?',
        a: 'Yes, we have fitted commercial storefronts across major retail belts including Paris Road, Kashmir Road, Defence Road, and Wazirabad Road in Sialkot.'
      }
    ]
  }
};

const areaLinksHTML = `
  <div style="margin-top: 1.5rem; display: flex; flex-wrap: wrap; gap: 8px;">
    <a href="/service-areas/sialkot" style="background: #201D1A; color: var(--color-gold); padding: 6px 12px; border-radius: 6px; font-size: 0.825rem; text-decoration: none; border: 1px solid rgba(201,162,75,0.2);">Sialkot City</a>
    <a href="/service-areas/sialkot-cantt" style="background: #201D1A; color: var(--color-gold); padding: 6px 12px; border-radius: 6px; font-size: 0.825rem; text-decoration: none; border: 1px solid rgba(201,162,75,0.2);">Sialkot Cantt</a>
    <a href="/service-areas/daska" style="background: #201D1A; color: var(--color-gold); padding: 6px 12px; border-radius: 6px; font-size: 0.825rem; text-decoration: none; border: 1px solid rgba(201,162,75,0.2);">Daska</a>
    <a href="/service-areas/sambrial" style="background: #201D1A; color: var(--color-gold); padding: 6px 12px; border-radius: 6px; font-size: 0.825rem; text-decoration: none; border: 1px solid rgba(201,162,75,0.2);">Sambrial</a>
    <a href="/service-areas/pasrur" style="background: #201D1A; color: var(--color-gold); padding: 6px 12px; border-radius: 6px; font-size: 0.825rem; text-decoration: none; border: 1px solid rgba(201,162,75,0.2);">Pasrur</a>
    <a href="/service-areas/wazirabad-road" style="background: #201D1A; color: var(--color-gold); padding: 6px 12px; border-radius: 6px; font-size: 0.825rem; text-decoration: none; border: 1px solid rgba(201,162,75,0.2);">Wazirabad Road</a>
    <a href="/service-areas/jamke-cheema" style="background: #201D1A; color: var(--color-gold); padding: 6px 12px; border-radius: 6px; font-size: 0.825rem; text-decoration: none; border: 1px solid rgba(201,162,75,0.2);">Jamke Cheema</a>
    <a href="/service-areas/ugoki" style="background: #201D1A; color: var(--color-gold); padding: 6px 12px; border-radius: 6px; font-size: 0.825rem; text-decoration: none; border: 1px solid rgba(201,162,75,0.2);">Ugoki</a>
  </div>
`;

Object.entries(serviceConfigs).forEach(([fileName, cfg]) => {
  const filePath = path.join(servicesDir, fileName);
  if (!fs.existsSync(filePath)) {
    console.warn('Service file not found:', fileName);
    return;
  }

  let html = fs.readFileSync(filePath, 'utf8');

  // 1. Update Title tag
  html = html.replace(/<title>.*?<\/title>/s, `<title>${cfg.title}</title>`);

  // 2. Update Meta Description
  html = html.replace(/<meta\s+name=["']description["']\s+content=["'].*?["']\s*\/?>/s, `<meta name="description" content="${cfg.metaDesc}">`);

  // 3. Remove Meta Keywords
  html = html.replace(/<meta\s+name=["']keywords["']\s+content=["'].*?["']\s*\/?>\r?\n?/gi, '');

  // 4. Update canonical
  const canonicalUrl = `https://mirror-design.vercel.app/services/${cfg.slug}`;
  html = html.replace(/<link\s+rel=["']canonical["']\s+href=["'].*?["']\s*\/?>/s, `<link rel="canonical" href="${canonicalUrl}">`);
  html = html.replace(/<meta\s+property=["']og:url["']\s+content=["'].*?["']\s*\/?>/s, `<meta property="og:url" content="${canonicalUrl}">`);
  html = html.replace(/<meta\s+property=["']og:title["']\s+content=["'].*?["']\s*\/?>/s, `<meta property="og:title" content="${cfg.title}">`);
  html = html.replace(/<meta\s+property=["']og:description["']\s+content=["'].*?["']\s*\/?>/s, `<meta property="og:description" content="${cfg.metaDesc}">`);

  // 5. Replace Unsplash images in this page
  // Look for any https://images.unsplash.com/...
  // We'll replace them with local placeholders with descriptive alt and TODO comments
  const unsplashRegex = /<img\s+([^>]*?)src=["']https:\/\/images\.unsplash\.com\/[^"']+["']([^>]*?)>/gi;
  html = html.replace(unsplashRegex, (match, before, after) => {
    return `<!-- TODO: Replace stock photo with real Rahman Aluminium workshop photo: ${cfg.h1} -->\n<img ${before}src="/images/placeholders/${cfg.slug}-sialkot.webp"${after}>`;
  });

  // Also replace any ../images/...png with ../images/...webp
  html = html.replace(/\.\.\/images\/([a-zA-Z0-9_-]+)\.(png|jpeg|jpg)/g, '../images/$1.webp');

  // 6. Update old product-detail# links to new /products/ links
  html = html.replace(/href=["']\/product-detail#([a-zA-Z0-9_-]+)["']/g, 'href="/products/$1"');

  // 7. Replace FAQ section with complete 5 real questions and FAQPage JSON-LD schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": cfg.faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": cfg.h1,
    "serviceType": cfg.serviceType,
    "provider": {
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
    },
    "areaServed": [
      { "@type": "City", "name": "Sialkot" },
      { "@type": "City", "name": "Sialkot Cantt" },
      { "@type": "City", "name": "Daska" },
      { "@type": "City", "name": "Sambrial" },
      { "@type": "City", "name": "Pasrur" },
      { "@type": "City", "name": "Wazirabad Road" },
      { "@type": "City", "name": "Jamke Cheema" },
      { "@type": "City", "name": "Ugoki" }
    ],
    "url": canonicalUrl
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mirror-design.vercel.app/" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://mirror-design.vercel.app/services" },
      { "@type": "ListItem", "position": 3, "name": cfg.h1, "item": canonicalUrl }
    ]
  };

  const schemasHTML = `
  <!-- Structured Data (Service, FAQ, Breadcrumbs) -->
  <script type="application/ld+json">
  ${JSON.stringify(serviceSchema, null, 2)}
  </script>
  <script type="application/ld+json">
  ${JSON.stringify(faqSchema, null, 2)}
  </script>
  <script type="application/ld+json">
  ${JSON.stringify(breadcrumbSchema, null, 2)}
  </script>
  <!-- Google Analytics 4 -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-[GA4-ID]"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-[GA4-ID]');
  </script>
  `;

  // Inject Schemas before </head> if not already present
  if (!html.includes('"@type": "FAQPage"')) {
    html = html.replace('</head>', `${schemasHTML}\n</head>`);
  }

  // Build FAQ DOM items
  const faqItemsHTML = cfg.faqs.map((f, idx) => `
          <div class="faq-item fade-in${idx === 0 ? ' active' : ''}">
            <div class="faq-header">
              <h4 style="font-size:1.05rem; color:#FFFFFF; margin:0; font-family:'Outfit', sans-serif;">${f.q}</h4>
              <div class="faq-icon">${idx === 0 ? '-' : '+'}</div>
            </div>
            <div class="faq-body"${idx === 0 ? ' style="display:block;"' : ''}>
              <p style="margin:0;">${f.a}</p>
            </div>
          </div>`).join('');

  // Replace FAQ container contents
  html = html.replace(/<div class="faq-container fade-in">[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/, `
      <div class="faq-container fade-in">
${faqItemsHTML}
      </div>
      
      <!-- Area coverage internal links -->
      <div style="margin-top: 3rem; padding: 2rem; background: #181614; border: 1px solid rgba(255,255,255,0.06); border-radius: 12px;">
        <h3 style="font-family: 'Outfit', sans-serif; font-size: 1.15rem; color: #FAF9F7; margin-bottom: 0.5rem;">
          📍 On-Site Measurement &amp; Installation Service Areas
        </h3>
        <p style="font-size: 0.9rem; color: #A8A29E; line-height: 1.6; margin-bottom: 0.75rem;">
          Our technicians provide free laser measurement visits and professional installation across Sialkot district:
        </p>
        ${areaLinksHTML}
      </div>

    </div>
  </section>`);

  // 8. Fix footer text & NAP
  html = html.replace(/across Pakistan\./gi, 'serving Sialkot and surrounding areas (including Sialkot Cantt, Daska, Sambrial, Pasrur, Ugoki, and Wazirabad Road).');
  html = html.replace(/Small Industrial Estate, Sialkot, Punjab, Pakistan/gi, '[ADD FULL ADDRESS], Sialkot, Punjab, Pakistan');
  
  // Replace social links
  html = html.replace(/href=["']#["']\s*(aria-label=["'](Facebook|Instagram)["'])/gi, 'href="[$2 URL]" $1');

  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`Updated service page: services/${fileName}`);
});

console.log('All 6 service pages successfully updated!');
