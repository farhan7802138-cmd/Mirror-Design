const fs = require('fs');
const path = require('path');

const rootPages = [
  'index.html',
  'services.html',
  'aluminium.html',
  'mirrors.html',
  'gallery.html',
  'about.html',
  'contact.html',
  'privacy.html',
  'terms.html',
  'product-detail.html'
];

const gaSnippet = `
  <!-- Google Analytics 4 -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-[GA4-ID]"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-[GA4-ID]');
  </script>`;

rootPages.forEach(fileName => {
  const filePath = path.join(__dirname, '..', fileName);
  if (!fs.existsSync(filePath)) return;

  let html = fs.readFileSync(filePath, 'utf8');

  // 1. Remove meta name="keywords"
  html = html.replace(/<meta\s+name=["']keywords["']\s+content=["'].*?["']\s*\/?>\r?\n?/gi, '');

  // 2. Replace /product-detail#slug with /products/slug
  html = html.replace(/href=["']\/product-detail#([a-zA-Z0-9_-]+)["']/g, 'href="/products/$1"');

  // 3. Update image references to webp where applicable
  html = html.replace(/images\/([a-zA-Z0-9_-]+)\.(png|jpeg|jpg)/g, 'images/$1.webp');

  // Replace Unsplash images in services.html or other root files
  if (fileName === 'services.html') {
    html = html.replace(/<img\s+([^>]*?)src=["']https:\/\/images\.unsplash\.com\/[^"']+["']([^>]*?)>/gi, (match, before, after) => {
      return `<!-- TODO: Replace stock photo with real Rahman Aluminium workshop photo -->\n<img ${before}src="/images/placeholders/glass-shower-partition-sialkot.webp"${after}>`;
    });
  }

  // 4. Update footer text: across Pakistan -> Sialkot and surrounding areas
  html = html.replace(/across Pakistan\./gi, 'serving Sialkot and surrounding areas (including Sialkot Cantt, Daska, Sambrial, Pasrur, Ugoki, and Wazirabad Road).');
  html = html.replace(/across Pakistan/gi, 'in Sialkot and surrounding areas');
  html = html.replace(/Small Industrial Estate, Sialkot, Punjab, Pakistan/gi, '[ADD FULL ADDRESS], Sialkot, Punjab, Pakistan');

  // 5. Replace # placeholder social links
  html = html.replace(/href=["']#["']\s*(aria-label=["'](Facebook|Instagram)["'])/gi, 'href="[$2 URL]" $1');

  // 6. Ensure GA4 snippet is present
  if (!html.includes('gtag/js?id=G-[GA4-ID]')) {
    html = html.replace('</head>', `${gaSnippet}\n</head>`);
  }

  // 7. Testimonials note on index.html
  if (fileName === 'index.html') {
    if (!html.includes('NOTE: Must match real Google reviews')) {
      html = html.replace(/<section class="testimonials/i, '<!-- NOTE: Must match real Google reviews from Google Business Profile. Do not invent reviews. -->\n  <section class="testimonials');
    }

    // Ensure hero image is eager loaded with high priority
    html = html.replace(/(<img[^>]*class=["'][^"']*hero[^"']*["'][^>]*)/i, (m) => {
      let updated = m.replace(/loading=["']lazy["']/i, '');
      if (!updated.includes('fetchpriority=')) {
        updated = updated.replace('<img', '<img fetchpriority="high"');
      }
      return updated;
    });

    // Update LocalBusiness schema with full details
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "HomeAndConstructionBusiness",
      "name": "Rahman Aluminium & Glass Works",
      "alternateName": "Glass & Mirror Design Sialkot",
      "description": "Premium Aluminium Glass Work and bespoke Mirror Design in Sialkot, Punjab, Pakistan. Aluminium doors, windows, glass partitions, shower cabins, shopfronts, and LED mirrors.",
      "url": "https://mirror-design.vercel.app",
      "telephone": "+923021054485",
      "email": "rahmanaluminiumworker@gmail.com",
      "image": "https://mirror-design.vercel.app/og-image.jpg",
      "logo": "https://mirror-design.vercel.app/og-image.jpg",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "[ADD FULL ADDRESS]",
        "addressLocality": "Sialkot",
        "addressRegion": "Punjab",
        "postalCode": "51310",
        "addressCountry": "PK"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "32.4836",
        "longitude": "74.3776"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "19:00"
        }
      ],
      "priceRange": "PKR",
      "areaServed": [
        "Sialkot",
        "Sialkot Cantt",
        "Daska",
        "Sambrial",
        "Pasrur",
        "Wazirabad Road",
        "Jamke Cheema",
        "Ugoki",
        "Model Town",
        "Kashmir Road"
      ],
      "sameAs": [
        "https://wa.me/923021054485",
        "https://maps.google.com/?cid=1006432529ce0ff",
        "[FACEBOOK URL]",
        "[INSTAGRAM URL]"
      ]
    };

    html = html.replace(/<script type="application\/ld\+json">[\s\S]*?"@type":\s*"LocalBusiness"[\s\S]*?<\/script>/, `
  <script type="application/ld+json">
  ${JSON.stringify(localBusinessSchema, null, 2)}
  </script>`);
  }

  // 8. Client-side hash redirect on product-detail.html
  if (fileName === 'product-detail.html') {
    const redirectScript = `
  <script>
    // Client-side 301-equivalent redirect for legacy #hash links
    if (window.location.hash) {
      var rawHash = window.location.hash.substring(1);
      var cleanSlug = rawHash.replace(/[^a-zA-Z0-9_-]/g, '');
      if (cleanSlug) {
        window.location.replace('/products/' + cleanSlug);
      }
    }
  </script>`;
    if (!html.includes('Client-side 301-equivalent redirect')) {
      html = html.replace('<head>', `<head>\n${redirectScript}`);
    }
  }

  // 9. Ensure accurate Google Maps embed on contact.html
  if (fileName === 'contact.html') {
    html = html.replace(/https:\/\/www\.google\.com\/maps\/embed\?pb=!1m18!1m12!1m3!1d108253[^"']*/g, 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d215397.9401374347!2d74.37758229548984!3d32.483581202516746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6fd4fbfee65737bd%3A0xe006432529ce0ff!2sGlass%20%26%20Mirror%20Design%20Sialkot!5e0!3m2!1sen!2s!4v1782987411183!5m2!1sen!2s');
  }

  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`Updated root page: ${fileName}`);
});

console.log('All main site pages successfully updated!');
