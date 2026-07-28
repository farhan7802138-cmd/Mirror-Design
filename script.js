/* ============================================================
   RAHMAN — Aluminium & Glass Works
   Interactive JavaScript
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // === Scroll-based Header State ===
  const header = document.getElementById('site-header');
  let lastScrollY = 0;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    lastScrollY = currentScrollY;
  };

  window.addEventListener('scroll', handleScroll, { passive: true });

  // === Mobile Menu Toggle ===
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const mainNav = document.getElementById('main-nav');
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

  // === Search Modal Overlay & Logic ===
  const searchBtn = document.getElementById('search-btn');
  const searchOverlay = document.getElementById('search-overlay');
  const searchClose = document.getElementById('search-close');
  const searchInput = document.getElementById('search-input');
  const searchResultsContainer = document.getElementById('search-results-container');
  const searchForm = document.getElementById('search-form');

  // List of searchable items (from our best sellers grid)
  const productCards = document.querySelectorAll('.product-card');
  const searchableProducts = Array.from(productCards).map((card, index) => {
    const title = card.querySelector('h3').textContent;
    const desc = card.querySelector('.product-description')?.textContent || '';
    const img = card.querySelector('img')?.getAttribute('src') || '';
    // Assign a unique ID or element reference
    card.id = `product-item-${index}`;
    return {
      id: card.id,
      title: title,
      description: desc,
      image: img
    };
  });

  const openSearch = () => {
    searchOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    setTimeout(() => searchInput.focus(), 100);
  };

  const closeSearch = () => {
    searchOverlay.classList.remove('active');
    document.body.style.overflow = '';
    searchInput.value = '';
    searchResultsContainer.innerHTML = '';
  };

  searchBtn.addEventListener('click', openSearch);
  searchClose.addEventListener('click', closeSearch);

  // Close search on clicking outside modal content
  searchOverlay.addEventListener('click', (e) => {
    if (e.target === searchOverlay) {
      closeSearch();
    }
  });

  // Handle Search Input Typing
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    searchResultsContainer.innerHTML = '';

    if (query.length < 2) return;

    const filtered = searchableProducts.filter(item => 
      item.title.toLowerCase().includes(query) || 
      item.description.toLowerCase().includes(query)
    );

    if (filtered.length === 0) {
      const noResults = document.createElement('div');
      noResults.style.padding = '15px';
      noResults.style.color = 'var(--color-text-secondary)';
      noResults.style.textAlign = 'center';
      noResults.textContent = 'No matching products found.';
      searchResultsContainer.appendChild(noResults);
      return;
    }

    filtered.forEach(item => {
      const itemEl = document.createElement('a');
      itemEl.href = `#${item.id}`;
      itemEl.className = 'search-result-item';
      
      const imgHtml = item.image ? `<img src="${item.image}" alt="${item.title}" class="search-result-img">` : `
        <div class="search-result-img" style="background:#111; display:flex; align-items:center; justify-content:center;">
          <svg style="width:20px; height:20px; stroke:var(--color-accent);" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
        </div>`;

      itemEl.innerHTML = `
        ${imgHtml}
        <div class="search-result-info">
          <h4>${item.title}</h4>
          <p>${item.description.substring(0, 60)}...</p>
        </div>
      `;

      itemEl.addEventListener('click', (ev) => {
        closeSearch();
        // Reset category filter to 'all' so target card is visible before scrolling
        const allFilterBtn = document.querySelector('.filter-btn[data-filter="all"]');
        if (allFilterBtn) {
          allFilterBtn.click();
        }
      });

      searchResultsContainer.appendChild(itemEl);
    });
  });

  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
  });

  // === Category Filtering Logic (Works for Products & Gallery) ===
  const filterButtons = document.querySelectorAll('.filter-btn');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const sectionContainer = this.closest('section') || this.closest('.container') || document;
      const siblingBtns = sectionContainer.querySelectorAll('.filter-btn');

      siblingBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      const filterValue = (this.getAttribute('data-filter') || 'all').toLowerCase().trim();
      const cards = sectionContainer.querySelectorAll('.product-card, .gallery-card');

      cards.forEach(card => {
        if (filterValue === 'all') {
          card.style.display = card.classList.contains('gallery-card') ? 'block' : 'flex';
        } else {
          const cardCat = (card.getAttribute('data-category') || '').toLowerCase();
          const categories = cardCat.split(/\s+/);

          const matches = categories.some(cat => cat.includes(filterValue) || filterValue.includes(cat));

          if (matches) {
            card.style.display = card.classList.contains('gallery-card') ? 'block' : 'flex';
          } else {
            card.style.display = 'none';
          }
        }
      });
    });
  });

  // === Multi-Page Active Navigation Highlighting ===
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref === currentPath || (currentPath === '' && linkHref === 'index.html')) {
      link.classList.add('active');
    } else if (!linkHref.includes('.html') && linkHref.startsWith('#')) {
      // Single page hash support if any
    } else {
      link.classList.remove('active');
    }
  });

  // === FAQ Accordion Toggle ===
  const faqHeaders = document.querySelectorAll('.faq-header');
  faqHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const isActive = item.classList.contains('active');
      
      // Close all other active items
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));

      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // === hCaptcha Mock Checkbox Toggle ===
  const captchaBox = document.querySelector('.hcaptcha-checkbox');
  if (captchaBox) {
    captchaBox.addEventListener('click', () => {
      captchaBox.classList.toggle('checked');
    });
  }

  // === Scroll Reveal Animations ===
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.1
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right').forEach(el => {
    revealObserver.observe(el);
  });

  // === Form Redirects & Submissions (AJAX No-Redirect) ===
  const contactForms = document.querySelectorAll('#contact-form, .contact-form');
  contactForms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const btn = this.querySelector('button[type="submit"]');
      const originalText = btn.innerHTML;
      
      btn.innerHTML = 'Sending...';
      btn.disabled = true;

      const actionUrl = this.action || 'https://formspree.io/f/mlgygblb';

      fetch(actionUrl, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(this)
      })
      .then(response => {
        if (response.ok) {
          // Hide form
          this.style.display = 'none';
          
          // Show success message
          const success = document.createElement('div');
          success.innerHTML = `
            <div style="text-align:center; padding:40px 20px;">
              <div style="font-size:48px; margin-bottom:16px;">✅</div>
              <h3 style="color:#C9A24B; font-size:22px; 
                         margin-bottom:12px;">
                Message Sent Successfully!
              </h3>
              <p style="color:#94A3B8; margin-bottom:20px;">
                Thank you for contacting Rahman. We will get 
                back to you within 24 hours.
              </p>
              <a href="https://wa.me/923021054485" 
                 style="background:#25D366; color:white; 
                        padding:12px 28px; border-radius:8px; 
                        text-decoration:none; font-weight:600;
                        display:inline-block;">
                💬 Chat on WhatsApp Instead
              </a>
            </div>
          `;
          this.parentNode.insertBefore(success, this.nextSibling);
        } else {
          btn.innerHTML = originalText;
          btn.disabled = false;
          
          // Show error message
          let error = document.getElementById('form-error');
          if (!error) {
            error = document.createElement('p');
            error.id = 'form-error';
            error.style.cssText = 'color:#ef4444; margin-top:12px; font-size:14px;';
            btn.parentNode.insertBefore(error, btn.nextSibling);
          }
          error.textContent = '❌ Something went wrong. Please try again or WhatsApp us directly.';
        }
      })
      .catch(() => {
        btn.innerHTML = originalText;
        btn.disabled = false;
        
        let error = document.getElementById('form-error');
        if (!error) {
          error = document.createElement('p');
          error.id = 'form-error';
          error.style.cssText = 'color:#ef4444; margin-top:12px; font-size:14px;';
          btn.parentNode.insertBefore(error, btn.nextSibling);
        }
        error.textContent = '❌ Connection error. Please WhatsApp us at +92 302 1054485';
      });
    });
  });

  // === Toast Message System ===
  function showToast(message, type = 'success') {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;

    if (type === 'success') {
      toast.style.borderColor = 'rgba(37, 211, 102, 0.4)';
    } else if (type === 'error') {
      toast.style.borderColor = 'rgba(220, 53, 69, 0.4)';
    }

    document.body.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  // === Counter Animation for Stats ===
  const statNumbers = document.querySelectorAll('.stat-number');

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(el => counterObserver.observe(el));

  function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-count'), 10);
    const suffix = element.getAttribute('data-suffix') || '';
    const duration = 2000;
    const steps = 50;
    const stepDuration = duration / steps;
    let current = 0;
    const increment = target / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      element.textContent = Math.round(current) + suffix;
    }, stepDuration);
  }

  // === Parallax Effect on Hero ===
  const heroBg = document.querySelector('.hero-bg img');
  if (heroBg) {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      if (scrolled < window.innerHeight) {
        heroBg.style.transform = `scale(1.05) translateY(${scrolled * 0.15}px)`;
      }
    }, { passive: true });
  }

  // === Smooth Scroll for Anchors ===
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Initial Checkups
  handleScroll();
  updateActiveNav();

  // === Newsletter Form — Formspree AJAX Submission ===
  const newsletterForm = document.querySelector('#newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const form = this;
      const btn = form.querySelector('button[type="submit"]');
      btn.textContent = 'Subscribing...';
      btn.disabled = true;

      fetch(form.action, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form)
      })
      .then(response => {
        if (response.ok) {
          form.innerHTML = '<p style="color:#C9A24B; font-size:15px; font-weight:600;">✓ Subscribed! Thank you for joining us.</p>';
        } else {
          btn.textContent = 'SUBSCRIBE';
          btn.disabled = false;
          alert('Something went wrong. Please try again.');
        }
      })
      .catch(() => {
        btn.textContent = 'SUBSCRIBE';
        btn.disabled = false;
        alert('Something went wrong. Please try again.');
      });
    });
  }
});
