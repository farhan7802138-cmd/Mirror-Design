/* ============================================================
   RAHMAN — Aluminium & Glass Works
   Product Details Dynamic Renderer & Interactive Script
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // === Scroll-based Header State ===
  const header = document.getElementById('site-header');
  if (header) {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // === Mobile Menu Toggle ===
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const mainNav = document.getElementById('main-nav');
  if (menuToggle && mainNav) {
    const navLinks = mainNav.querySelectorAll('a');

    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      mainNav.classList.toggle('active');
      document.body.style.overflow = mainNav.classList.contains('active') ? 'hidden' : '';
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        mainNav.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  // === DYNAMIC PRODUCT DETAIL RENDERER ===
  function renderProduct() {
    const detailContainer = document.getElementById('product-detail-container');
    const relatedContainer = document.getElementById('related-products-container');
    const breadcrumbContainer = document.getElementById('breadcrumb-container');
    
    if (!detailContainer) return;

    // Get current product slug from URL hash
    let slug = window.location.hash.substring(1);
    
    // Fallback if no hash: load the first product
    if (!slug && typeof productsData !== 'undefined' && productsData.length > 0) {
      slug = productsData[0].slug;
      window.location.hash = slug;
      return;
    }

    // Find the product in our database
    let product = null;
    if (typeof productsData !== 'undefined') {
      product = productsData.find(p => p.slug === slug);
    }

    // Handle product not found
    if (!product) {
      document.title = "Product Not Found — Rahman Aluminium & Glass Works";
      detailContainer.innerHTML = `
        <div style="padding: 80px 0; text-align: center;">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" stroke-width="1.5" style="margin-bottom: var(--space-md);"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          <h2 style="font-family: var(--font-display); font-size: var(--fs-2xl); text-transform: uppercase; margin-bottom: var(--space-sm);">Product Not Found</h2>
          <p style="color: var(--color-light-text-secondary); margin-bottom: var(--space-lg);">The product you are looking for does not exist or has been moved.</p>
          <a href="index.html" class="btn btn-primary" style="display: inline-block;">Go Back Home</a>
        </div>
      `;
      if (relatedContainer) relatedContainer.innerHTML = '';
      return;
    }

    // Set page title
    document.title = `${product.title} — Rahman Aluminium & Glass Works`;

    // Render Breadcrumbs
    const categoryLink = product.category === 'aluminium' ? 'aluminium-work' : 'mirrors-glass';
    const categoryTitle = product.category === 'aluminium' ? 'Aluminium Work' : 'Mirrors & Glass';
    breadcrumbContainer.innerHTML = `
      <span class="breadcrumb-item"><a href="index.html">Home</a></span>
      <span class="breadcrumb-separator">◆</span>
      <span class="breadcrumb-item"><a href="index.html#our-best-work">Portfolio</a></span>
      <span class="breadcrumb-separator">◆</span>
      <span class="breadcrumb-item"><a href="index.html#${categoryLink}">${categoryTitle}</a></span>
      <span class="breadcrumb-separator">◆</span>
      <span class="breadcrumb-item active">${product.title}</span>
    `;

    // Update Header active state
    const navAluminium = document.getElementById('nav-link-aluminium');
    const navMirrors = document.getElementById('nav-link-mirrors');
    if (navAluminium && navMirrors) {
      if (product.category === 'aluminium') {
        navAluminium.classList.add('active');
        navMirrors.classList.remove('active');
      } else {
        navAluminium.classList.remove('active');
        navMirrors.classList.add('active');
      }
    }

    // Generate specifications table rows
    let specsRows = '';
    for (const [key, value] of Object.entries(product.specs)) {
      specsRows += `
        <tr>
          <td class="specs-label">${key}</td>
          <td class="specs-value">${value}</td>
        </tr>
      `;
    }

    // Generate Gallery HTML (with thumbnails if multiple images exist)
    let galleryHTML = '';
    if (product.images && product.images.length > 1) {
      let thumbsHTML = '';
      product.images.forEach((img, idx) => {
        const activeClass = idx === 0 ? 'active' : '';
        thumbsHTML += `
          <div class="gallery-thumbnail ${activeClass}" data-large="${img.src}" data-alt="${img.alt}">
            <img src="${img.src}" alt="${img.alt}" loading="lazy">
          </div>
        `;
      });
      galleryHTML = `
        <div class="product-gallery-container">
          <div class="product-main-image-wrapper">
            <img src="${product.mainImage}" alt="${product.title}" id="product-main-image">
          </div>
          <div class="gallery-thumbnails">
            ${thumbsHTML}
          </div>
        </div>
      `;
    } else {
      galleryHTML = `
        <div class="product-gallery-container">
          <div class="product-main-image-wrapper">
            <img src="${product.mainImage}" alt="${product.title}" id="product-main-image">
          </div>
        </div>
      `;
    }

    // Generate WhatsApp CTA message & link
    let waSpecsText = '';
    for (const [key, value] of Object.entries(product.specs)) {
      waSpecsText += `\n- *${key}:* ${value}`;
    }
    const rawMsg = `Hello Rahman Aluminium & Glass,\n\nI am interested in your product:\n*${product.title}*\n\nSpecifications:${waSpecsText}\n\nPlease provide pricing and delivery timeline.`;
    const waMessage = encodeURIComponent(rawMsg);
    const waLink = `https://wa.me/923021054485?text=${waMessage}`;

    // Update Floating WhatsApp link
    const floatWa = document.getElementById('whatsapp-float-link');
    if (floatWa) {
      floatWa.href = waLink;
    }

    // Populate main product grid
    detailContainer.innerHTML = `
      <div class="product-detail-grid">
        
        <!-- Left: Image Gallery -->
        ${galleryHTML}

        <!-- Right: Product Info & CTA -->
        <div class="product-info-container">
          <span class="product-tag">${product.categoryLabel}</span>
          <h1 class="product-detail-title">${product.title}</h1>
          
          <p class="product-detail-desc">${product.description}</p>
          
          <!-- Specs Table -->
          <div class="specs-card">
            <h3 class="specs-title">Technical Specifications</h3>
            <table class="specs-table">
              <tbody>
                ${specsRows}
              </tbody>
            </table>
          </div>

          <!-- Feature Icons -->
          <div class="features-card">
            <div class="features-list">
              <div class="features-item">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                <span>100% Quality Guaranteed</span>
              </div>
              <div class="features-item">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                <span>Fast & Secure Delivery</span>
              </div>
              <div class="features-item">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                <span>Custom Dimensions Option</span>
              </div>
              <div class="features-item">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                <span>Expert Installation Sialkot</span>
              </div>
            </div>
          </div>

          <!-- CTA Box -->
          <div class="cta-card">
            <h4 class="cta-header">Interested in this design?</h4>
            <p>Get a direct, free price estimate for this product by messaging our craftsmen on WhatsApp. We offer custom dimensions and installation services.</p>
            <div class="cta-buttons">
              <a href="${waLink}" target="_blank" rel="noopener" class="btn-whatsapp-large">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Enquire via WhatsApp
              </a>
              <a href="index.html#our-best-work" class="back-to-portfolio-link">← Back to Portfolio</a>
            </div>
          </div>

        </div>
      </div>
    `;

    // Bind Gallery click events
    const mainImage = document.getElementById('product-main-image');
    const thumbnails = document.querySelectorAll('.gallery-thumbnail');
    if (mainImage && thumbnails.length > 0) {
      thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
          thumbnails.forEach(t => t.classList.remove('active'));
          thumbnail.classList.add('active');
          const newSrc = thumbnail.getAttribute('data-large');
          const newAlt = thumbnail.getAttribute('data-alt');
          if (newSrc) mainImage.src = newSrc;
          if (newAlt) mainImage.alt = newAlt;
        });
      });
    }

    // Render Related Products (4 items from same category)
    if (relatedContainer && typeof productsData !== 'undefined') {
      const related = productsData
        .filter(p => p.id !== product.id && p.category === product.category)
        .slice(0, 4);

      let relatedHTML = '';
      related.forEach(rel => {
        relatedHTML += `
          <div class="product-card fade-in visible" data-category="${rel.category}">
            <div class="product-card-image">
              <img src="${rel.mainImage}" alt="${rel.title}" loading="lazy">
            </div>
            <div class="product-card-body">
              <h3>${rel.title}</h3>
              <p class="product-description">${rel.description.substring(0, 90)}...</p>
              <a href="product-detail.html#${rel.slug}" class="btn btn-secondary product-enquire-btn">View Detail</a>
            </div>
          </div>
        `;
      });
      relatedContainer.innerHTML = relatedHTML;
    }

    // Scroll to top of product detail section
    window.scrollTo({
      top: document.querySelector('.breadcrumbs').offsetTop - 20,
      behavior: 'smooth'
    });
  }

  // === RENDER AND RE-RENDER ON HASH CHANGE ===
  renderProduct();
  window.addEventListener('hashchange', renderProduct);

});
