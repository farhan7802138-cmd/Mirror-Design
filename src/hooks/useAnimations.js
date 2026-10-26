import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function usePageInteractive() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Helper: Reveal elements that are already within or near the initial viewport
    const revealVisibleElements = () => {
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const elements = document.querySelectorAll('.fade-in:not(.visible), .fade-in-left:not(.visible), .fade-in-right:not(.visible)');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // If element is inside the viewport or near the top
        if (rect.top <= windowHeight + 100) {
          el.classList.add('visible');
        }
      });
    };

    // 1. Scroll Reveal Animations with IntersectionObserver
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px 50px 0px',
      threshold: 0.05
    };

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');
    fadeElements.forEach((el) => {
      if (el.classList.contains('visible')) return;
      revealObserver.observe(el);
    });

    // Run immediate check for above-the-fold content
    revealVisibleElements();

    // Secondary checks to handle newly injected HTML or delayed image layout
    const frameId = requestAnimationFrame(() => {
      revealVisibleElements();
    });
    const timerId = setTimeout(() => {
      revealVisibleElements();
    }, 150);

    // 2. Stat Counter Animation
    const statNumbers = document.querySelectorAll('.stat-number');
    function animateCounter(element) {
      if (element.getAttribute('data-animated') === 'true') return;
      element.setAttribute('data-animated', 'true');
      const target = parseInt(element.getAttribute('data-count'), 10);
      if (isNaN(target)) return;
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

    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    statNumbers.forEach((el) => {
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const rect = el.getBoundingClientRect();
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        animateCounter(el);
      } else {
        counterObserver.observe(el);
      }
    });

    // 3. Category Filter Buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    const handleFilterClick = function () {
      const sectionContainer = this.closest('section') || this.closest('.container') || document;
      const siblingBtns = sectionContainer.querySelectorAll('.filter-btn');
      siblingBtns.forEach((b) => b.classList.remove('active'));
      this.classList.add('active');

      const filterValue = (this.getAttribute('data-filter') || 'all').toLowerCase().trim();
      const cards = sectionContainer.querySelectorAll('.product-card, .gallery-card');

      cards.forEach((card) => {
        if (filterValue === 'all') {
          card.style.display = card.classList.contains('gallery-card') ? 'block' : 'flex';
        } else {
          const cardCat = (card.getAttribute('data-category') || '').toLowerCase();
          const categories = cardCat.split(/\s+/);
          const matches = categories.some((cat) => cat.includes(filterValue) || filterValue.includes(cat));
          if (matches) {
            card.style.display = card.classList.contains('gallery-card') ? 'block' : 'flex';
          } else {
            card.style.display = 'none';
          }
        }
      });
    };
    filterButtons.forEach((btn) => btn.addEventListener('click', handleFilterClick));

    // 4. FAQ Accordions
    const faqHeaders = document.querySelectorAll('.faq-header');
    const handleFaqClick = function (e) {
      e.preventDefault();
      const item = this.closest('.faq-item') || this.parentElement;
      if (!item) return;
      const isActive = item.classList.contains('active');
      const container = item.closest('.faq-container') || item.parentElement;
      if (container) {
        container.querySelectorAll('.faq-item').forEach((i) => i.classList.remove('active'));
      }
      if (!isActive) {
        item.classList.add('active');
      }
    };
    faqHeaders.forEach((h) => {
      h.removeEventListener('click', handleFaqClick);
      h.addEventListener('click', handleFaqClick);
    });

    // 5. Hero Parallax
    const heroBg = document.querySelector('.hero-bg img');
    const handleParallax = () => {
      if (!heroBg) return;
      const scrolled = window.scrollY;
      if (scrolled < window.innerHeight) {
        heroBg.style.transform = `scale(1.05) translateY(${scrolled * 0.15}px)`;
      }
    };
    if (heroBg) {
      window.addEventListener('scroll', handleParallax, { passive: true });
    }

    // 6. hCaptcha Mock Toggle
    const captchaBox = document.querySelector('.hcaptcha-checkbox');
    const handleCaptchaClick = () => {
      if (captchaBox) captchaBox.classList.toggle('checked');
    };
    if (captchaBox) {
      captchaBox.addEventListener('click', handleCaptchaClick);
    }

    // 7. Contact Forms AJAX Submission
    const contactForms = document.querySelectorAll('#contact-form, .contact-form');
    const handleFormSubmit = function (e) {
      e.preventDefault();
      const form = this;
      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn ? btn.innerHTML : 'Submit';
      if (btn) {
        btn.innerHTML = 'Sending...';
        btn.disabled = true;
      }
      const actionUrl = form.action || 'https://formspree.io/f/mlgygblb';

      fetch(actionUrl, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form)
      })
        .then((response) => {
          if (response.ok) {
            form.style.display = 'none';
            const success = document.createElement('div');
            success.innerHTML = `
              <div style="text-align:center; padding:40px 20px;">
                <div style="font-size:48px; margin-bottom:16px;">✅</div>
                <h3 style="color:#C9A24B; font-size:22px; margin-bottom:12px;">Message Sent Successfully!</h3>
                <p style="color:#94A3B8; margin-bottom:20px;">Thank you for contacting Rahman. We will get back to you within 24 hours.</p>
                <a href="https://wa.me/923021054485" style="background:#25D366; color:white; padding:12px 28px; border-radius:8px; text-decoration:none; font-weight:600; display:inline-block;">💬 Chat on WhatsApp Instead</a>
              </div>
            `;
            form.parentNode.insertBefore(success, form.nextSibling);
          } else {
            if (btn) {
              btn.innerHTML = originalText;
              btn.disabled = false;
            }
            let error = document.getElementById('form-error');
            if (!error && btn) {
              error = document.createElement('p');
              error.id = 'form-error';
              error.style.cssText = 'color:#ef4444; margin-top:12px; font-size:14px;';
              btn.parentNode.insertBefore(error, btn.nextSibling);
            }
            if (error) error.textContent = '❌ Something went wrong. Please try again or WhatsApp us directly.';
          }
        })
        .catch(() => {
          if (btn) {
            btn.innerHTML = originalText;
            btn.disabled = false;
          }
          let error = document.getElementById('form-error');
          if (!error && btn) {
            error = document.createElement('p');
            error.id = 'form-error';
            error.style.cssText = 'color:#ef4444; margin-top:12px; font-size:14px;';
            btn.parentNode.insertBefore(error, btn.nextSibling);
          }
          if (error) error.textContent = '❌ Connection error. Please WhatsApp us at +92 302 1054485';
        });
    };
    contactForms.forEach((f) => {
      f.removeEventListener('submit', handleFormSubmit);
      f.addEventListener('submit', handleFormSubmit);
    });

    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(timerId);
      fadeElements.forEach((el) => revealObserver.unobserve(el));
      statNumbers.forEach((el) => counterObserver.unobserve(el));
      filterButtons.forEach((btn) => btn.removeEventListener('click', handleFilterClick));
      faqHeaders.forEach((h) => h.removeEventListener('click', handleFaqClick));
      if (heroBg) window.removeEventListener('scroll', handleParallax);
      if (captchaBox) captchaBox.removeEventListener('click', handleCaptchaClick);
      contactForms.forEach((f) => f.removeEventListener('submit', handleFormSubmit));
    };
  }, [location.pathname, location.search]);
}

export { usePageInteractive as useScrollReveal };
