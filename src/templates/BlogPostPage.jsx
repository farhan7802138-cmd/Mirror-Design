import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import blogPosts from '../data/blog-posts.js';
import SEO from '../components/SEO.jsx';
import AnnouncementBar from '../components/AnnouncementBar.jsx';
import ContactStrip from '../components/ContactStrip.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import FloatingButtons from '../components/FloatingButtons.jsx';
import SearchOverlay from '../components/SearchOverlay.jsx';
import { usePageInteractive } from '../hooks/useAnimations.js';

export default function BlogPostPage({ post: propPost }) {
  const { slug } = useParams();
  const post = propPost || blogPosts.find((p) => p.slug === slug);
  const [searchOpen, setSearchOpen] = useState(false);
  usePageInteractive();

  if (!post) {
    return (
      <div className="theme-light">
        <AnnouncementBar variant="workshop" />
        <ContactStrip />
        <Header />
        <div style={{ padding: '80px 0', textAlign: 'center' }}>
          <h2>Article Not Found</h2>
          <p>The blog article you are looking for does not exist.</p>
          <Link to="/blog" className="btn btn-primary">Back to Blog</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="theme-light">
      <SEO
        title={post.title}
        description={post.metaDesc}
        canonical={post.canonical || `/blog/${post.slug}`}
        ogImage={post.ogImage || 'https://mirrordesignsialkot.com/og-image.jpg'}
        ogType="article"
        schemas={post.schemas || []}
      />

      {/* 1. ANNOUNCEMENT BAR */}
      <AnnouncementBar variant={post.isWorkshopAnnouncement ? 'workshop' : 'default'} />

      {/* 2. CONTACT STRIP */}
      <ContactStrip />

      {/* 3. MAIN HEADER */}
      <Header
        showSearch={post.hasSearch}
        onOpenSearch={() => setSearchOpen(true)}
        waUrl={post.waUrl}
      />

      {/* Search Overlay if enabled */}
      {post.hasSearch && (
        <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      )}

      {/* 4. EXACT ARTICLE BODY CONTENT */}
      <div dangerouslySetInnerHTML={{ __html: post.bodyHtml }} />

      {/* 5. FOOTER */}
      <Footer />

      {/* 6. FLOATING BUTTONS */}
      <FloatingButtons waUrl={post.waUrl} />
    </div>
  );
}
