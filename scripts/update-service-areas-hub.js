const fs = require('fs');
const path = require('path');

const hubPath = path.join(__dirname, '../service-areas.html');
let html = fs.readFileSync(hubPath, 'utf8');

// 1. Remove meta keywords
html = html.replace(/<meta\s+name=["']keywords["']\s+content=["'].*?["']\s*\/?>\r?\n?/gi, '');

// 2. Title & Meta
html = html.replace(/<title>.*?<\/title>/s, '<title>Service Areas Sialkot &amp; Punjab | Rahman Glass Works</title>');
html = html.replace(/<meta\s+name=["']description["']\s+content=["'].*?["']\s*\/?>/s, '<meta name="description" content="Discover Rahman Aluminium &amp; Glass service coverage across Sialkot, Cantt, Daska, Sambrial, Pasrur, Wazirabad Road &amp; Ugoki. Free laser estimate: +92 302 1054485.">');

// 3. Add prominent 8 Localities Cards Grid right after Page Hero
const localitiesGridHTML = `
  <!-- ==================== LOCAL SERVICE PAGES DIRECTORY ==================== -->
  <section style="padding: 3.5rem 0; background: #12100E; border-bottom: 1px solid rgba(255,255,255,0.08);">
    <div class="container">
      <div class="section-header fade-in">
        <span class="section-label">Local Workshops &amp; On-Site Glazing</span>
        <h2 class="section-title">EXPLORE OUR SPECIFIC LOCALITY PAGES</h2>
        <p class="section-subtitle">Dedicated architectural coverage, on-site laser surveys, and custom fabrication across every key sector in Sialkot district:</p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.5rem; margin-top: 2rem;">
        
        <div style="background: #181614; border: 1px solid rgba(201,162,75,0.25); border-radius: 12px; padding: 1.75rem; display: flex; flex-direction: column;">
          <h3 style="font-family: 'Outfit', sans-serif; font-size: 1.25rem; color: #FAF9F7; margin-bottom: 0.5rem;">Sialkot City</h3>
          <p style="font-size: 0.9rem; color: #A8A29E; line-height: 1.6; margin-bottom: 1.25rem; flex-grow: 1;">Commercial plazas, Paris Road offices, Model Town residences &amp; custom LED mirrors.</p>
          <a href="/service-areas/sialkot" class="btn btn-secondary" style="font-size: 0.85rem; padding: 0.5rem 1rem; width: 100%; justify-content: center;">View Sialkot Services &rarr;</a>
        </div>

        <div style="background: #181614; border: 1px solid rgba(201,162,75,0.25); border-radius: 12px; padding: 1.75rem; display: flex; flex-direction: column;">
          <h3 style="font-family: 'Outfit', sans-serif; font-size: 1.25rem; color: #FAF9F7; margin-bottom: 0.5rem;">Sialkot Cantt</h3>
          <p style="font-size: 0.9rem; color: #A8A29E; line-height: 1.6; margin-bottom: 1.25rem; flex-grow: 1;">Luxury residential villas, soundproof acoustic double glazing &amp; frameless shower cubicles.</p>
          <a href="/service-areas/sialkot-cantt" class="btn btn-secondary" style="font-size: 0.85rem; padding: 0.5rem 1rem; width: 100%; justify-content: center;">View Cantt Services &rarr;</a>
        </div>

        <div style="background: #181614; border: 1px solid rgba(201,162,75,0.25); border-radius: 12px; padding: 1.75rem; display: flex; flex-direction: column;">
          <h3 style="font-family: 'Outfit', sans-serif; font-size: 1.25rem; color: #FAF9F7; margin-bottom: 0.5rem;">Daska</h3>
          <p style="font-size: 0.9rem; color: #A8A29E; line-height: 1.6; margin-bottom: 1.25rem; flex-grow: 1;">Heavy-duty sliding aluminium doors, market shopfront glazing &amp; residential windows.</p>
          <a href="/service-areas/daska" class="btn btn-secondary" style="font-size: 0.85rem; padding: 0.5rem 1rem; width: 100%; justify-content: center;">View Daska Services &rarr;</a>
        </div>

        <div style="background: #181614; border: 1px solid rgba(201,162,75,0.25); border-radius: 12px; padding: 1.75rem; display: flex; flex-direction: column;">
          <h3 style="font-family: 'Outfit', sans-serif; font-size: 1.25rem; color: #FAF9F7; margin-bottom: 0.5rem;">Sambrial</h3>
          <p style="font-size: 0.9rem; color: #A8A29E; line-height: 1.6; margin-bottom: 1.25rem; flex-grow: 1;">Airport corridor showrooms, Dry Port corporate glass partitions &amp; warehouse glazing.</p>
          <a href="/service-areas/sambrial" class="btn btn-secondary" style="font-size: 0.85rem; padding: 0.5rem 1rem; width: 100%; justify-content: center;">View Sambrial Services &rarr;</a>
        </div>

        <div style="background: #181614; border: 1px solid rgba(201,162,75,0.25); border-radius: 12px; padding: 1.75rem; display: flex; flex-direction: column;">
          <h3 style="font-family: 'Outfit', sans-serif; font-size: 1.25rem; color: #FAF9F7; margin-bottom: 0.5rem;">Pasrur</h3>
          <p style="font-size: 0.9rem; color: #A8A29E; line-height: 1.6; margin-bottom: 1.25rem; flex-grow: 1;">Termite-proof woodgrain entrance doors, airtight sliding windows &amp; vanity mirrors.</p>
          <a href="/service-areas/pasrur" class="btn btn-secondary" style="font-size: 0.85rem; padding: 0.5rem 1rem; width: 100%; justify-content: center;">View Pasrur Services &rarr;</a>
        </div>

        <div style="background: #181614; border: 1px solid rgba(201,162,75,0.25); border-radius: 12px; padding: 1.75rem; display: flex; flex-direction: column;">
          <h3 style="font-family: 'Outfit', sans-serif; font-size: 1.25rem; color: #FAF9F7; margin-bottom: 0.5rem;">Wazirabad Road</h3>
          <p style="font-size: 0.9rem; color: #A8A29E; line-height: 1.6; margin-bottom: 1.25rem; flex-grow: 1;">High-traffic commercial curtain walls, industrial heavy sliding doors &amp; retail facades.</p>
          <a href="/service-areas/wazirabad-road" class="btn btn-secondary" style="font-size: 0.85rem; padding: 0.5rem 1rem; width: 100%; justify-content: center;">View Wazirabad Road &rarr;</a>
        </div>

        <div style="background: #181614; border: 1px solid rgba(201,162,75,0.25); border-radius: 12px; padding: 1.75rem; display: flex; flex-direction: column;">
          <h3 style="font-family: 'Outfit', sans-serif; font-size: 1.25rem; color: #FAF9F7; margin-bottom: 0.5rem;">Jamke Cheema</h3>
          <p style="font-size: 0.9rem; color: #A8A29E; line-height: 1.6; margin-bottom: 1.25rem; flex-grow: 1;">Farmhouse haveli entrance systems, weatherproof patio sliders &amp; dressing mirrors.</p>
          <a href="/service-areas/jamke-cheema" class="btn btn-secondary" style="font-size: 0.85rem; padding: 0.5rem 1rem; width: 100%; justify-content: center;">View Jamke Cheema &rarr;</a>
        </div>

        <div style="background: #181614; border: 1px solid rgba(201,162,75,0.25); border-radius: 12px; padding: 1.75rem; display: flex; flex-direction: column;">
          <h3 style="font-family: 'Outfit', sans-serif; font-size: 1.25rem; color: #FAF9F7; margin-bottom: 0.5rem;">Ugoki</h3>
          <p style="font-size: 0.9rem; color: #A8A29E; line-height: 1.6; margin-bottom: 1.25rem; flex-grow: 1;">Industrial modular factory office partitions, acoustic double glazing &amp; shopfronts.</p>
          <a href="/service-areas/ugoki" class="btn btn-secondary" style="font-size: 0.85rem; padding: 0.5rem 1rem; width: 100%; justify-content: center;">View Ugoki Services &rarr;</a>
        </div>

      </div>
    </div>
  </section>
`;

if (!html.includes('EXPLORE OUR SPECIFIC LOCALITY PAGES')) {
  html = html.replace('<!-- ==================== 6. COVERAGE STATS ==================== -->', localitiesGridHTML + '\n<!-- ==================== 6. COVERAGE STATS ==================== -->');
}

// 4. Update footer text & NAP
html = html.replace(/across Pakistan\./gi, 'serving Sialkot and surrounding areas (including Sialkot Cantt, Daska, Sambrial, Pasrur, Ugoki, and Wazirabad Road).');
html = html.replace(/Small Industrial Estate, Sialkot, Punjab, Pakistan/gi, '[ADD FULL ADDRESS], Sialkot, Punjab, Pakistan');

// 5. Add GA4 snippet
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

fs.writeFileSync(hubPath, html, 'utf8');

// Also sync services-area.html (in case it is used)
const altHubPath = path.join(__dirname, '../services-area.html');
if (fs.existsSync(altHubPath)) {
  fs.writeFileSync(altHubPath, html, 'utf8');
}

console.log('Successfully updated service-areas.html with 8 locality links and SEO fixes!');
