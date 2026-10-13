import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header({ showSearch = false, onOpenSearch, waUrl = 'https://wa.me/923021054485' }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu on route change
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    document.body.style.overflow = '';
  }, [currentPath]);

  const toggleMobileMenu = () => {
    const nextState = !mobileMenuOpen;
    setMobileMenuOpen(nextState);
    document.body.style.overflow = nextState ? 'hidden' : '';
  };

  const handleServicesToggle = (e) => {
    if (window.innerWidth <= 992) {
      e.preventDefault();
      setServicesDropdownOpen(!servicesDropdownOpen);
    }
  };

  const isActive = (path) => {
    if (path === '/') return currentPath === '/';
    return currentPath === path || currentPath.startsWith(path + '/');
  };

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`} id="site-header">
      <div className="container header-inner">
        {/* Logo */}
        <Link to="/" className="logo" id="logo">
          <span>Rahman</span>
        </Link>

        {/* Navigation */}
        <nav className={`main-nav ${mobileMenuOpen ? 'active' : ''}`} id="main-nav">
          <Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link>
          <Link to="/about" className={isActive('/about') ? 'active' : ''}>About Us</Link>
          <div className={`nav-dropdown ${servicesDropdownOpen ? 'open' : ''}`}>
            <Link
              to="/services"
              className={`dropdown-toggle ${isActive('/services') ? 'active' : ''}`}
              id="services-dropdown-toggle"
              onClick={handleServicesToggle}
            >
              Services <span className="dropdown-arrow">▾</span>
            </Link>
            <div className="nav-dropdown-menu">
              <Link to="/services">All Services</Link>
              <Link to="/services/aluminium-doors">Aluminium Doors</Link>
              <Link to="/services/aluminium-windows">Aluminium Windows</Link>
              <Link to="/services/glass-partitions">Glass Partitions</Link>
              <Link to="/services/shower-cabins">Shower Cabins</Link>
              <Link to="/services/led-mirrors">LED &amp; Smart Mirrors</Link>
              <Link to="/services/shopfronts">Aluminium Shopfronts</Link>
            </div>
          </div>
          <Link to="/service-areas" className={isActive('/service-areas') ? 'active' : ''}>Service Areas</Link>
          <Link to="/aluminium" className={isActive('/aluminium') ? 'active' : ''}>Aluminium Work</Link>
          <Link to="/mirrors" className={isActive('/mirrors') ? 'active' : ''}>Mirrors &amp; Glass</Link>
          <Link to="/gallery" className={isActive('/gallery') ? 'active' : ''}>Gallery</Link>
          <Link to="/blog" className={isActive('/blog') ? 'active' : ''}>Blog</Link>
          <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>Contact</Link>
        </nav>

        {/* Header Actions */}
        <div className="header-actions">
          {showSearch && (
            <button
              className="header-icon-btn"
              id="search-btn"
              aria-label="Search"
              onClick={onOpenSearch}
            >
              <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          )}

          {/* WhatsApp Link */}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="header-whatsapp"
            id="header-whatsapp-link"
            aria-label="Chat on WhatsApp"
          >
            <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>

          {/* Get Quote Button */}
          <Link to="/contact" className="btn btn-primary header-quote-btn" id="header-quote-btn">
            Get Quote
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
            id="mobile-menu-toggle"
            aria-label="Toggle navigation"
            onClick={toggleMobileMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
