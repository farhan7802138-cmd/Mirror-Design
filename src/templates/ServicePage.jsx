import React from 'react';
import { Link, useParams } from 'react-router-dom';
import services from '../data/services.js';
import SEO from '../components/SEO.jsx';
import AnnouncementBar from '../components/AnnouncementBar.jsx';
import ContactStrip from '../components/ContactStrip.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import FloatingButtons from '../components/FloatingButtons.jsx';
import { usePageInteractive } from '../hooks/useAnimations.js';

export default function ServicePage({ service: propService }) {
  const { slug } = useParams();
  const service = propService || services.find((s) => s.slug === slug);
  usePageInteractive();

  if (!service) {
    return (
      <div className="theme-light">
        <AnnouncementBar variant="default" />
        <ContactStrip />
        <Header />
        <div style={{ padding: '80px 0', textAlign: 'center' }}>
          <h2>Service Not Found</h2>
          <p>The requested service could not be found.</p>
          <Link to="/services" className="btn btn-primary">All Services</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="theme-light">
      <SEO
        title={service.title}
        description={service.metaDesc}
        canonical={service.canonical || `/services/${service.slug}`}
        ogImage={service.ogImage || 'https://mirror-design.vercel.app/og-image.jpg'}
        ogType="website"
        schemas={service.schemas || []}
      />

      {/* 1. ANNOUNCEMENT BAR */}
      <AnnouncementBar variant="default" />

      {/* 2. CONTACT STRIP */}
      <ContactStrip />

      {/* 3. MAIN HEADER */}
      <Header waUrl={service.waUrl} />

      {/* 4. EXACT MAIN CONTENT */}
      <div dangerouslySetInnerHTML={{ __html: service.bodyHtml }} />

      {/* 5. FOOTER */}
      <Footer />

      {/* 6. FLOATING BUTTONS */}
      <FloatingButtons waUrl={service.waUrl} />
    </div>
  );
}
