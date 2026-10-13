import React from 'react';
import { Link, useParams } from 'react-router-dom';
import serviceAreas from '../data/service-areas.js';
import SEO from '../components/SEO.jsx';
import AnnouncementBar from '../components/AnnouncementBar.jsx';
import ContactStrip from '../components/ContactStrip.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import FloatingButtons from '../components/FloatingButtons.jsx';
import { usePageInteractive } from '../hooks/useAnimations.js';

export default function ServiceAreaPage({ area: propArea }) {
  const { slug } = useParams();
  const area = propArea || serviceAreas.find((a) => a.slug === slug);
  usePageInteractive();

  if (!area) {
    return (
      <div className="theme-light">
        <AnnouncementBar variant="workshop" />
        <ContactStrip />
        <Header />
        <div style={{ padding: '80px 0', textAlign: 'center' }}>
          <h2>Service Area Not Found</h2>
          <p>The requested service area could not be found.</p>
          <Link to="/service-areas" className="btn btn-primary">All Service Areas</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="theme-light">
      <SEO
        title={area.title}
        description={area.metaDesc}
        canonical={area.canonical || `/service-areas/${area.slug}`}
        ogImage={area.ogImage || 'https://mirror-design.vercel.app/og-image.jpg'}
        ogType="website"
        schemas={area.schemas || []}
      />

      {/* 1. ANNOUNCEMENT BAR */}
      <AnnouncementBar city={area.city} />

      {/* 2. CONTACT STRIP */}
      <ContactStrip />

      {/* 3. MAIN HEADER */}
      <Header waUrl={area.waUrl} />

      {/* 4. EXACT MAIN CONTENT */}
      <div dangerouslySetInnerHTML={{ __html: area.bodyHtml }} />

      {/* 5. FOOTER */}
      <Footer />

      {/* 6. FLOATING BUTTONS */}
      <FloatingButtons waUrl={area.waUrl} />
    </div>
  );
}
