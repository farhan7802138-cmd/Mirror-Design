import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.jsx';
import './styles/styles.css';
import './styles/details.css';

// Client Analytics Tracking
if (typeof window !== 'undefined') {
  document.addEventListener('click', (e) => {
    const waLink = e.target.closest('a[href*="wa.me"], a[href*="whatsapp"]');
    if (waLink && typeof window.gtag === 'function') {
      window.gtag('event', 'whatsapp_click', {
        event_category: 'Contact',
        event_label: waLink.href,
        transport_type: 'beacon'
      });
    }

    const callLink = e.target.closest('a[href^="tel:"]');
    if (callLink && typeof window.gtag === 'function') {
      window.gtag('event', 'call_click', {
        event_category: 'Contact',
        event_label: callLink.href,
        transport_type: 'beacon'
      });
    }
  });

  document.addEventListener('submit', (e) => {
    const form = e.target;
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'form_submission', {
        event_category: 'Lead',
        event_label: form.id || form.action || 'generic_form'
      });
    }
  });
}

const rootElement = document.getElementById('root');
const app = (
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrateRoot(rootElement, app);
} else {
  ReactDOM.createRoot(rootElement).render(app);
}
