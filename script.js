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

  // === Category Filtering Logic ===
  const filterButtons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.product-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      cards.forEach(card => {
        if (filterValue === 'all') {
          card.style.display = 'flex';
        } else {
          const cardCat = card.getAttribute('data-category');
          if (cardCat === filterValue) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        }
      });
    });
  });

  // === Active Navigation Highlighting ===
  const sections = document.querySelectorAll('section[id]');

  const updateActiveNav = () => {
    const scrollPosition = window.scrollY + 180;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', updateActiveNav, { passive: true });

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

  // === Form Redirects to WhatsApp ===
  const contactForm = document.getElementById('contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('form-name').value.trim();
      const phone = document.getElementById('form-phone').value.trim();
      const message = document.getElementById('form-message').value.trim();

      if (!name || !phone || !message) {
        showToast('Please fill in all fields.', 'error');
        return;
      }

      // WhatsApp Message Formatting
      const waMessage = encodeURIComponent(
        `Hello Rahman Aluminium & Glass,\n\nI would like to request an estimate:\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Details:* ${message}`
      );
      const waUrl = `https://wa.me/923021054485?text=${waMessage}`;

      showToast('Redirecting to WhatsApp...', 'success');

      setTimeout(() => {
        window.open(waUrl, '_blank');
      }, 800);

      contactForm.reset();
    });
  }

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
