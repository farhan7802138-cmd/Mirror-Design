import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Footer({ variant = 'standard' }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState('idle'); // idle | loading | success | error

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterStatus('loading');

    fetch('https://formspree.io/f/mlgygblb', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        _subject: 'New Newsletter Subscriber — Rahman',
        email: newsletterEmail
      })
    })
      .then((res) => {
        if (res.ok) {
          setNewsletterStatus('success');
        } else {
          setNewsletterStatus('error');
        }
      })
      .catch(() => {
        setNewsletterStatus('error');
      });
  };

  if (variant === 'product') {
    return (
      <footer className="site-footer" id="site-footer" style={{ marginTop: '4rem', background: '#0A0908', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <Link to="/" className="logo"><span>Rahman</span></Link>
              <p>Premium architectural aluminium fabrication and high-grade glass &amp; custom mirror designing serving Sialkot and surrounding areas (including Sialkot Cantt, Daska, Sambrial, Pasrur, Ugoki, and Wazirabad Road).</p>
              <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
                <a href="[FACEBOOK URL]" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-gold)', fontSize: '0.875rem' }}>Facebook</a>
                <a href="[INSTAGRAM URL]" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-gold)', fontSize: '0.875rem' }}>Instagram</a>
              </div>
            </div>

            <div className="footer-column">
              <h4>Our Services</h4>
              <ul>
                <li><Link to="/services/aluminium-doors">Aluminium Doors</Link></li>
                <li><Link to="/services/aluminium-windows">Aluminium Windows</Link></li>
                <li><Link to="/services/glass-partitions">Glass Partitions</Link></li>
                <li><Link to="/services/shower-cabins">Shower Cabins</Link></li>
                <li><Link to="/services/led-mirrors">LED &amp; Smart Mirrors</Link></li>
                <li><Link to="/services/shopfronts">Aluminium Shopfronts</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Service Areas</h4>
              <ul>
                <li><Link to="/service-areas/sialkot">Sialkot City</Link></li>
                <li><Link to="/service-areas/sialkot-cantt">Sialkot Cantt</Link></li>
                <li><Link to="/service-areas/daska">Daska</Link></li>
                <li><Link to="/service-areas/sambrial">Sambrial</Link></li>
                <li><Link to="/service-areas/pasrur">Pasrur</Link></li>
                <li><Link to="/service-areas/wazirabad-road">Wazirabad Road</Link></li>
                <li><Link to="/service-areas/jamke-cheema">Jamke Cheema</Link></li>
                <li><Link to="/service-areas/ugoki">Ugoki</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Contact Workshop</h4>
              <ul>
                <li><strong style={{ color: '#FAF9F7' }}>Rahman Aluminium &amp; Glass Works</strong></li>
                <li>Workshop: [ADD FULL ADDRESS], Sialkot, Punjab, Pakistan</li>
                <li><a href="tel:+923021054485" className="footer-contact-link">+92 302 1054485</a></li>
                <li><a href="mailto:rahmanaluminiumworker@gmail.com" className="footer-contact-link">rahmanaluminiumworker@gmail.com</a></li>
                <li><span style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>Mon – Sat: 9:00 AM – 7:00 PM (Sun Closed)</span></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2026 Rahman Aluminium &amp; Glass Works (Glass &amp; Mirror Design Sialkot). All Rights Reserved.</p>
            <p>Premium Aluminium Glass Work &amp; Mirror Design — Sialkot, Punjab, Pakistan</p>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="site-footer" id="site-footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand Info */}
          <div className="footer-brand">
            <Link to="/" className="logo"><span>Rahman</span></Link>
            <p>Premium architectural <strong>Aluminium Glass Sialkot</strong> fabrication and high-grade custom
              <strong>Mirror Design Sialkot</strong> serving Sialkot and surrounding areas (including Sialkot Cantt, Daska, Sambrial, Pasrur, Ugoki, and Wazirabad Road).
            </p>
            <div className="footer-social">
              {/* Facebook */}
              <a href="[Facebook URL]" aria-label="Facebook" id="footer-facebook">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="[Instagram URL]" aria-label="Instagram" id="footer-instagram">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="none" stroke="currentColor" strokeWidth="2" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </a>
              {/* WhatsApp */}
              <a href="https://wa.me/923021054485" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" id="footer-whatsapp">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/service-areas">Service Areas</Link></li>
              <li><Link to="/aluminium">Aluminium Work</Link></li>
              <li><Link to="/mirrors">Mirrors &amp; Glass</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms &amp; Conditions</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="footer-column footer-newsletter">
            <h4>Newsletter</h4>
            <p>Subscribe for updates and offers</p>
            {newsletterStatus === 'success' ? (
              <p style={{ color: '#C9A24B', fontSize: '15px', fontWeight: 600 }}>✓ Subscribed! Thank you for joining us.</p>
            ) : (
              <form className="newsletter-form" id="newsletter-form" onSubmit={handleNewsletterSubmit}>
                <input type="hidden" name="_subject" value="New Newsletter Subscriber — Rahman" />
                <input
                  type="email"
                  id="newsletter-email"
                  name="email"
                  placeholder="Your email address"
                  required
                  autoComplete="off"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  disabled={newsletterStatus === 'loading'}
                />
                <button type="submit" className="btn btn-primary btn-newsletter" id="newsletter-submit" disabled={newsletterStatus === 'loading'}>
                  <span className="btn-text">{newsletterStatus === 'loading' ? 'Subscribing...' : 'Subscribe'}</span>
                  <span className="btn-spinner" style={{ display: 'none' }}></span>
                </button>
              </form>
            )}
            {newsletterStatus === 'error' && (
              <div className="newsletter-msg" id="newsletter-msg" style={{ color: '#ef4444', fontSize: '14px', marginTop: '8px' }}>
                Something went wrong. Please try again.
              </div>
            )}
          </div>

          {/* Contact details */}
          <div className="footer-column">
            <h4>Get In Touch</h4>
            <ul>
              <li><a href="tel:+923021054485" className="footer-contact-link">+92 302 1054485</a></li>
              <li><a href="mailto:rahmanaluminiumworker@gmail.com" className="footer-contact-link">rahmanaluminiumworker@gmail.com</a></li>
              <li><span style={{ color: '#D1D5DB', fontSize: '0.875rem', display: 'block', marginTop: '4px' }}>🕒 Mon – Sat: 9am – 7pm</span></li>
              <li><span style={{ color: '#9CA3AF', fontSize: '0.825rem', display: 'block', marginTop: '4px', lineHeight: '1.5' }}>📍 Sialkot, Pakistan</span></li>
              <li style={{ marginTop: '8px' }}>
                <a href="https://wa.me/923021054485" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-gold)', fontSize: '0.85rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  💬 Chat on WhatsApp &rarr;
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Rahman. All Rights Reserved.</p>
          <p>Premium Aluminium Glass Work &amp; Mirror Design — Sialkot, Punjab, Pakistan</p>
        </div>
      </div>
    </footer>
  );
}
