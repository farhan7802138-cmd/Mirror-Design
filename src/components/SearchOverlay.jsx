import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import products from '../data/products.js';

export default function SearchOverlay({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        if (inputRef.current) inputRef.current.focus();
      }, 100);
    } else {
      document.body.style.overflow = '';
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const trimmedQuery = query.toLowerCase().trim();
  const filteredProducts = trimmedQuery.length >= 2
    ? products.filter(p =>
        p.title.toLowerCase().includes(trimmedQuery) ||
        (p.description && p.description.toLowerCase().includes(trimmedQuery)) ||
        (p.categoryLabel && p.categoryLabel.toLowerCase().includes(trimmedQuery))
      )
    : [];

  const handleOverlayClick = (e) => {
    if (e.target.id === 'search-overlay') {
      onClose();
    }
  };

  return (
    <div className={`search-overlay ${isOpen ? 'active' : ''}`} id="search-overlay" onClick={handleOverlayClick}>
      <div className="search-modal">
        <button className="search-close" id="search-close" aria-label="Close search" onClick={onClose}>
          &times;
        </button>
        <form className="search-form" id="search-form" onSubmit={(e) => e.preventDefault()}>
          <input
            ref={inputRef}
            type="text"
            id="search-input"
            placeholder="Search for doors, windows, mirrors..."
            autoComplete="off"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="search-submit-btn" aria-label="Submit search">
            <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </form>
        <div className="search-results-container" id="search-results-container">
          {trimmedQuery.length >= 2 && filteredProducts.length === 0 && (
            <div style={{ padding: '15px', color: 'var(--color-text-secondary)', textAlign: 'center' }}>
              No matching products found.
            </div>
          )}
          {filteredProducts.map((item) => (
            <Link
              key={item.slug}
              to={`/products/${item.slug}`}
              className="search-result-item"
              onClick={onClose}
            >
              {item.mainImage ? (
                <img src={item.mainImage.startsWith('/') ? item.mainImage : `/${item.mainImage}`} alt={item.title} className="search-result-img" />
              ) : (
                <div className="search-result-img" style={{ background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg style={{ width: '20px', height: '20px', stroke: 'var(--color-accent)' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 9h18" />
                    <path d="M9 21V9" />
                  </svg>
                </div>
              )}
              <div className="search-result-info">
                <h4>{item.title}</h4>
                <p>{item.description ? `${item.description.substring(0, 60)}...` : ''}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
