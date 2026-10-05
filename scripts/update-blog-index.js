const fs = require('fs');
const path = require('path');

const blogHtmlPath = path.join(__dirname, '../blog.html');
let html = fs.readFileSync(blogHtmlPath, 'utf8');

// 1. Remove meta keywords
html = html.replace(/<meta\s+name=["']keywords["']\s+content=["'].*?["']\s*\/?>\r?\n?/gi, '');

// 2. Canonical & OG
html = html.replace(/<link\s+rel=["']canonical["']\s+href=["'].*?["']\s*\/?>/s, '<link rel="canonical" href="https://mirror-design.vercel.app/blog">');
html = html.replace(/<meta\s+property=["']og:url["']\s+content=["'].*?["']\s*\/?>/s, '<meta property="og:url" content="https://mirror-design.vercel.app/blog">');

// 3. New 5 featured article cards
const newArticlesHTML = `
        <!-- New Article 1: LED Mirror Price Guide -->
        <article class="blog-card fade-in">
          <a href="/blog/led-mirror-price-in-sialkot" class="blog-card-media" aria-label="Read LED Mirror Price in Sialkot: Cost Guide 2026">
            <img src="/images/products/octagonal-dual-tone-led-smart-mirror-sialkot.webp" alt="LED Mirror Price in Sialkot - Cost Guide" loading="lazy" width="600" height="400">
          </a>
          <div class="blog-card-content">
            <span class="blog-category-badge">Buying Guides</span>
            <h2 class="blog-card-title">
              <a href="/blog/led-mirror-price-in-sialkot">LED Mirror Price in Sialkot: What Affects the Cost (2026 Guide)</a>
            </h2>
            <div class="blog-card-meta">
              <span>📅 October 5, 2026</span>
              <span>•</span>
              <span>⏱️ 6 min read</span>
            </div>
            <p class="blog-card-excerpt">
              Discover what determines custom LED mirror prices in Sialkot. From copper-free silver glass and waterproof IP65 drivers to smart touch dimmers and anti-fog heating pads...
            </p>
            <a href="/blog/led-mirror-price-in-sialkot" class="blog-card-link">Read Guide &rarr;</a>
          </div>
        </article>

        <!-- New Article 2: Aluminium vs Wood -->
        <article class="blog-card fade-in">
          <a href="/blog/aluminium-vs-wooden-doors-windows-pakistan" class="blog-card-media" aria-label="Read Aluminium vs Wooden Doors and Windows in Pakistan">
            <img src="/images/aluminium-doors.webp" alt="Aluminium vs Wooden Doors and Windows in Pakistan" loading="lazy" width="600" height="400">
          </a>
          <div class="blog-card-content">
            <span class="blog-category-badge">Material Guides</span>
            <h2 class="blog-card-title">
              <a href="/blog/aluminium-vs-wooden-doors-windows-pakistan">Aluminium vs Wooden Doors and Windows: Which is Better for Pakistani Weather?</a>
            </h2>
            <div class="blog-card-meta">
              <span>📅 October 5, 2026</span>
              <span>•</span>
              <span>⏱️ 7 min read</span>
            </div>
            <p class="blog-card-excerpt">
              Comparing structural aluminium and traditional solid timber for Punjab's intense monsoon and 46°C summers. Termite immunity, woodgrain finishes, and lifecycle savings...
            </p>
            <a href="/blog/aluminium-vs-wooden-doors-windows-pakistan" class="blog-card-link">Read Guide &rarr;</a>
          </div>
        </article>

        <!-- New Article 3: Glass Partition & Shower Cabin Cost -->
        <article class="blog-card fade-in">
          <a href="/blog/glass-partition-shower-cabin-cost-sialkot" class="blog-card-media" aria-label="Read Glass Partition and Shower Cabin Cost in Sialkot">
            <img src="/images/placeholders/glass-shower-partition-sialkot.webp" alt="Glass Partition and Shower Cabin Cost Sialkot" loading="lazy" width="600" height="400">
          </a>
          <div class="blog-card-content">
            <span class="blog-category-badge">Cost Guides</span>
            <h2 class="blog-card-title">
              <a href="/blog/glass-partition-shower-cabin-cost-sialkot">How Much Does a Glass Partition or Shower Cabin Cost in Sialkot?</a>
            </h2>
            <div class="blog-card-meta">
              <span>📅 October 5, 2026</span>
              <span>•</span>
              <span>⏱️ 6 min read</span>
            </div>
            <p class="blog-card-excerpt">
              Detailed price guide for 8mm, 10mm, and 12mm tempered safety glass, Grade 304 stainless steel hinges, sliding rollers, and office wall installation costs in Sialkot...
            </p>
            <a href="/blog/glass-partition-shower-cabin-cost-sialkot" class="blog-card-link">Read Guide &rarr;</a>
          </div>
        </article>

        <!-- New Article 4: How to Choose Mirror Design -->
        <article class="blog-card fade-in">
          <a href="/blog/choose-right-mirror-design-bedroom-bathroom-salon" class="blog-card-media" aria-label="Read How to Choose the Right Mirror Design for Bedroom, Bathroom and Salon">
            <img src="/images/products/wavy-royal-blue-velvet-floor-mirror-sialkot.webp" alt="How to Choose the Right Mirror Design for Bedroom, Bathroom and Salon" loading="lazy" width="600" height="400">
          </a>
          <div class="blog-card-content">
            <span class="blog-category-badge">Design Guides</span>
            <h2 class="blog-card-title">
              <a href="/blog/choose-right-mirror-design-bedroom-bathroom-salon">How to Choose the Right Mirror Design for Bedroom, Bathroom and Salon</a>
            </h2>
            <div class="blog-card-meta">
              <span>📅 October 5, 2026</span>
              <span>•</span>
              <span>⏱️ 7 min read</span>
            </div>
            <p class="blog-card-excerpt">
              Expert advice on selecting mirror shapes, front-lit vs backlit LEDs, moisture resistance, and high-CRI lighting for bridal suites, master bathrooms, and commercial salons...
            </p>
            <a href="/blog/choose-right-mirror-design-bedroom-bathroom-salon" class="blog-card-link">Read Guide &rarr;</a>
          </div>
        </article>

        <!-- New Article 5: Double Glazed Windows -->
        <article class="blog-card fade-in">
          <a href="/blog/double-glazed-aluminium-windows-benefits-pakistan" class="blog-card-media" aria-label="Read Double-Glazed Aluminium Windows: Benefits for Noise and Heat in Pakistan">
            <img src="/images/placeholders/aluminium-sliding-window-sialkot.webp" alt="Double-Glazed Aluminium Windows Benefits in Pakistan" loading="lazy" width="600" height="400">
          </a>
          <div class="blog-card-content">
            <span class="blog-category-badge">Energy Guides</span>
            <h2 class="blog-card-title">
              <a href="/blog/double-glazed-aluminium-windows-benefits-pakistan">Double-Glazed Aluminium Windows: Benefits for Noise and Heat in Pakistan</a>
            </h2>
            <div class="blog-card-meta">
              <span>📅 October 5, 2026</span>
              <span>•</span>
              <span>⏱️ 7 min read</span>
            </div>
            <p class="blog-card-excerpt">
              Learn how double-glazed insulated glass units (IGUs) cut electricity bills by up to 35%, eliminate winter condensation, and provide 38 dB of sound insulation against street noise...
            </p>
            <a href="/blog/double-glazed-aluminium-windows-benefits-pakistan" class="blog-card-link">Read Guide &rarr;</a>
          </div>
        </article>
`;

// Insert new articles right inside <div class="blog-grid">
html = html.replace('<div class="blog-grid">', '<div class="blog-grid">\n' + newArticlesHTML);

// 4. Update image references in existing articles to webp
html = html.replace(/images\s+8\/([a-zA-Z0-9_-]+)\.(jpeg|jpg|png)/g, 'images/products/$1.webp');
html = html.replace(/images\s+7\/([a-zA-Z0-9_-]+)\.(jpeg|jpg|png)/g, 'images/products/$1.webp');
html = html.replace(/images\/([a-zA-Z0-9_-]+)\.(png|jpeg|jpg)/g, 'images/$1.webp');

// 5. Update footer text & NAP
html = html.replace(/across Pakistan\./gi, 'serving Sialkot and surrounding areas (including Sialkot Cantt, Daska, Sambrial, Pasrur, Ugoki, and Wazirabad Road).');
html = html.replace(/Small Industrial Estate, Sialkot, Punjab, Pakistan/gi, '[ADD FULL ADDRESS], Sialkot, Punjab, Pakistan');

// 6. Replace # social links
html = html.replace(/href=["']#["']\s*(aria-label=["'](Facebook|Instagram)["'])/gi, 'href="[$2 URL]" $1');

// 7. Add GA4 snippet
if (!html.includes('gtag/js?id=G-[GA4-ID]')) {
  const gaSnippet = `
  <!-- Google Analytics 4 -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-[GA4-ID]"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-[GA4-ID]');
  </script>`;
  html = html.replace('</head>', `${gaSnippet}\n</head>`);
}

fs.writeFileSync(blogHtmlPath, html, 'utf8');
console.log('Successfully updated blog.html with 5 new articles, WebP images, and SEO fixes!');
