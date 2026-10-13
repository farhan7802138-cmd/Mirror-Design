# Static HTML to React Migration Plan: Rahman Aluminium & Glass Works

## 1. Overview & Objectives
- **Site**: Rahman Aluminium & Glass Works / Mirror Design, Sialkot (https://mirror-design.vercel.app)
- **Primary Goal**: Convert static multi-page HTML site (84 content routes + 404 page) to a high-performance React 18 + Vite application with SSG / Pre-rendering for SEO.
- **Strict Constraint**: Zero visual or content changes. Pixel-identical and word-for-word text-identical. Preserve exact URLs, head metadata, JSON-LD schemas, CSS classes, responsive breakpoints, and interactive behaviors.

---

## 2. Complete Route Inventory (85 Total Routes)
All 84 routes defined in `sitemap.xml` plus `/404`:

### Root Pages (11 + 404)
- `/` (`index.html`) — Home Page
- `/about` (`about.html`) — About Us
- `/services` (`services.html`) — Services Hub
- `/service-areas` (`service-areas.html`) — Service Areas Hub
- `/aluminium` (`aluminium.html`) — Aluminium Work Hub
- `/mirrors` (`mirrors.html`) — Mirrors & Glass Hub
- `/gallery` (`gallery.html`) — Project Gallery
- `/blog` (`blog.html`) — Blog Index
- `/contact` (`contact.html`) — Contact & Consultation
- `/privacy` (`privacy.html`) — Privacy Policy
- `/terms` (`terms.html`) — Terms & Conditions
- `/404` (`404.html`) — Not Found Page

### Service Pages (6) — Template: `ServicePage`
- `/services/aluminium-doors`
- `/services/aluminium-windows`
- `/services/glass-partitions`
- `/services/shower-cabins`
- `/services/led-mirrors`
- `/services/shopfronts`

### Service Area Pages (8) — Template: `ServiceAreaPage`
- `/service-areas/sialkot`
- `/service-areas/sialkot-cantt`
- `/service-areas/daska`
- `/service-areas/sambrial`
- `/service-areas/pasrur`
- `/service-areas/wazirabad-road`
- `/service-areas/jamke-cheema`
- `/service-areas/ugoki`

### Blog Articles (13) — Template: `BlogPostPage`
- `/blog/led-mirror-price-in-sialkot`
- `/blog/aluminium-vs-wooden-doors-windows-pakistan`
- `/blog/glass-partition-shower-cabin-cost-sialkot`
- `/blog/choose-right-mirror-design-bedroom-bathroom-salon`
- `/blog/double-glazed-aluminium-windows-benefits-pakistan`
- `/blog/aluminium-windows-buying-guide-pakistan`
- `/blog/custom-pattern-led-mirrors-sialkot`
- `/blog/glass-partition-vs-wall-offices`
- `/blog/herringbone-geometric-led-mirrors-sialkot`
- `/blog/how-to-care-for-led-mirror-at-home`
- `/blog/how-to-choose-aluminium-door`
- `/blog/led-mirror-trends-sialkot-2026`
- `/blog/top-5-mirror-designs-pakistani-bedrooms`

### Product Pages (46) — Template: `ProductPage`
- 46 individual product routes under `/products/:slug` (all listed in `products-data.js` and `sitemap.xml`)

---

## 3. Shared Components
- `Header` (`src/components/Header.jsx`): Site logo, desktop navigation with services dropdown, search button, WhatsApp CTA, "Get Quote" button, mobile menu toggle.
- `AnnouncementBar` (`src/components/AnnouncementBar.jsx`): Marquee announcement ticker with estimates & callout text.
- `ContactStrip` (`src/components/ContactStrip.jsx`): Email and telephone bar above header.
- `Footer` (`src/components/Footer.jsx`): Supports standard variant (newsletter form, quick links, contact info, social SVGs) and product variant (services, areas, workshop details).
- `FloatingButtons` (`src/components/FloatingButtons.jsx`): Phone call and WhatsApp floating buttons with contextual message generation.
- `SearchOverlay` (`src/components/SearchOverlay.jsx`): Fullscreen search modal searching product catalog with live suggestions and focus control.
- `Breadcrumbs` (`src/components/Breadcrumbs.jsx`): Semantic navigational trail with structured data support.
- `SEO` (`src/components/SEO.jsx`): Full head tags injection: `<title>`, meta description, canonical, robots, Open Graph, Twitter cards, and arbitrary JSON-LD schemas.
- `ProductCard` (`src/components/ProductCard.jsx`): Standard reusable product card with image, category, title, description, and "View Details" button.
- `ContactForm` (`src/components/ContactForm.jsx`): Formspree AJAX submission with loading, success feedback, and WhatsApp fallback.
- `NewsletterForm` (`src/components/NewsletterForm.jsx`): Formspree AJAX subscription with inline success/error handling.
- `FaqAccordion` (`src/components/FaqAccordion.jsx`): Interactive collapsible FAQ list with single-item expansion.
- `CategoryFilter` (`src/components/CategoryFilter.jsx`): Tabbed category filtering for products and gallery items.

---

## 4. Templates & Data Architecture
- `src/data/products.js`: 46 products with full specs, descriptions, images, tags, and category relations.
- `src/data/services.js`: 6 service configurations with headers, descriptions, related products, FAQs, and schemas.
- `src/data/service-areas.js`: 8 location configurations with geospatial data, landmark mentions, specialties, and local copy.
- `src/data/blog-posts.js`: 13 blog articles with publication metadata, read times, categories, full HTML content, FAQs, and author info.
- `src/templates/ProductPage.jsx`: Renders hero gallery with image switcher, technical specs table, service badges, comprehensive description, local service area links, related products grid, and product JSON-LD.
- `src/templates/ServicePage.jsx`: Renders service hero, service details, related products, and FAQ accordion.
- `src/templates/ServiceAreaPage.jsx`: Renders local service area hero, local context, specialties grid, landmarks, and lead generation CTA.
- `src/templates/BlogPostPage.jsx`: Renders blog header, author bio, feature image, rich content body, FAQs, and WhatsApp consultation CTA.

---

## 5. JavaScript Behaviors to Port
- **Header Scroll State**: Adds `scrolled` class when `scrollY > 40px`.
- **Mobile Menu**: Toggle button with animated hamburger, body scroll lock (`overflow: hidden`), sub-menu accordions on <=992px, auto-close on link navigation.
- **Search Overlay**: Searches title and description, renders matching product cards, closes on click outside or Escape key, jumps directly to target item.
- **Category Filtering**: Dynamic filtering for product and gallery cards with active button states.
- **FAQ Accordion**: Expands clicked item, collapses sibling items.
- **Form Submissions**: AJAX submission to Formspree endpoint (`https://formspree.io/f/mlgygblb`), loading spinner, success confirmation card with direct WhatsApp button.
- **Stat Counters**: `IntersectionObserver` triggered numeric animation with duration and step interpolations.
- **Hero Parallax**: Passive scroll listener applying subtle scale and translateY transform on desktop hero backgrounds.
- **GA4 Event Tracking**: Event triggers for `whatsapp_click`, `call_click`, and `form_submission`.
- **Product Gallery Switcher**: Thumbnail click event updates main image and active thumbnail border.

---

## 6. Pre-Rendering (SSG) & Build Pipeline
- Framework: Vite 5/6 + React 18 + React Router v6 + `react-helmet-async`
- Pre-rendering: Node SSG prerender script executing client build + SSR bundle to render all 85 routes into static HTML files (`dist/index.html`, `dist/about.html` / `dist/about/index.html`, etc.).
- Asset Management: Copy images, robots.txt, sitemap.xml, og-image.jpg to public directory. Maintain CSS files (`styles.css`, `details.css`) globally imported.
- Vercel Deployment: Update `vercel.json` with clean URLs, headers for immutable assets, and preservation of all 301 redirects.

---

## 7. Migration Execution Phases
- **Phase 1**: Scaffold Vite React app, import styles.css & details.css, build Header, Footer, AnnouncementBar, ContactStrip, FloatingButtons, Home page.
- **Phase 2**: Port remaining standalone static pages (About, Aluminium, Mirrors, Gallery, Contact, Blog Index, Services Hub, Service Areas Hub, Privacy, Terms, 404).
- **Phase 3**: Extract data and implement templates for Services (6), Service Areas (8), Blog (13), and Products (46).
- **Phase 4**: Implement interactive hooks (scroll header, mobile menu, search overlay, filter, FAQ, form AJAX, image switcher, GA4 tracking).
- **Phase 5**: Build SSG generation pipeline, verify all 85 HTML files, run automated visual & text diff checks against original HTML files, verify JSON-LD & meta tags, and compile `MIGRATION_REPORT.md`.
