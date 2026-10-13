import React, { useState } from 'react';
import SEO from '../components/SEO.jsx';
import AnnouncementBar from '../components/AnnouncementBar.jsx';
import ContactStrip from '../components/ContactStrip.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import FloatingButtons from '../components/FloatingButtons.jsx';
import SearchOverlay from '../components/SearchOverlay.jsx';
import { usePageInteractive } from '../hooks/useAnimations.js';
import rootPages from '../data/root-pages.js';

export default function NotFound() {
  const [searchOpen, setSearchOpen] = useState(false);
  usePageInteractive();
  const pageData = rootPages['NotFound'];

  return (
    <div className="theme-light">
      <SEO
        title={pageData.title}
        description={pageData.metaDesc}
        canonical={null}
        robots="noindex, follow"
        ogImage={pageData.ogImage}
        schemas={pageData.schemas}
      />
      <AnnouncementBar variant="workshop" />
      {pageData.hasContactStrip && <ContactStrip />}
      <Header showSearch={pageData.hasSearch} onOpenSearch={() => setSearchOpen(true)} />
      {pageData.hasSearch && <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />}
      <div dangerouslySetInnerHTML={{ __html: pageData.bodyHtml }} />
      <Footer />
      <FloatingButtons />
    </div>
  );
}
