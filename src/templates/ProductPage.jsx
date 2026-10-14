import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import products from '../data/products.js';
import SEO from '../components/SEO.jsx';
import AnnouncementBar from '../components/AnnouncementBar.jsx';
import ContactStrip from '../components/ContactStrip.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import FloatingButtons from '../components/FloatingButtons.jsx';

export default function ProductPage({ product: propProduct }) {
  const { slug } = useParams();
  const product = propProduct || products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="theme-light">
        <AnnouncementBar variant="workshop" />
        <ContactStrip />
        <Header />
        <div style={{ padding: '80px 0', textAlign: 'center' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="1.5" style={{ marginBottom: 'var(--space-md)' }}>
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-2xl)', textTransform: 'uppercase', marginBottom: 'var(--space-sm)' }}>Product Not Found</h2>
          <p style={{ color: 'var(--color-light-text-secondary)', marginBottom: 'var(--space-lg)' }}>The product you are looking for does not exist or has been moved.</p>
          <Link to="/" className="btn btn-primary" style={{ display: 'inline-block' }}>Go Back Home</Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Gallery thumbnails
  const allImages = product.images && product.images.length > 0
    ? product.images
    : [{ src: product.mainImage, alt: product.title }];

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const currentImage = allImages[activeImageIndex] || allImages[0];

  // Helper for resolve image path
  const resolveImgSrc = (src) => {
    if (!src) return '/images/og-image.webp';
    if (src.startsWith('http')) return src;
    let clean = src.replace(/^(\.\.\/|\.\/|\/)+/, '');
    return '/' + clean;
  };

  // WhatsApp Message
  const waRawMessage = `Hello Rahman Aluminium & Glass Works,\n\nI am interested in inquiring about your product:\n*${product.title}* (Sialkot Workshop)\nURL: https://mirrordesignsialkot.com/products/${product.slug}\n\nPlease provide price estimation, customization options, and installation timeline for my location in Sialkot / surrounding areas.`;
  const waUrl = `https://wa.me/923021054485?text=${encodeURIComponent(waRawMessage)}`;

  // Related products (4 items in same category or adjacent)
  const related = products
    .filter((p) => p.id !== product.id && (p.category === product.category || p.categoryLabel === product.categoryLabel))
    .slice(0, 4);

  // If less than 4, take other products
  if (related.length < 4) {
    const others = products.filter((p) => p.id !== product.id && !related.some((r) => r.id === p.id)).slice(0, 4 - related.length);
    related.push(...others);
  }

  // Schema.org Product and BreadcrumbList
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    image: `https://mirrordesignsialkot.com${resolveImgSrc(product.mainImage)}`,
    description: product.metaDesc || `Custom ${product.title} in Sialkot. Premium mirror, custom sizes, free estimate. Call/WhatsApp: +92 302 1054485.`,
    brand: {
      '@type': 'Brand',
      name: 'Rahman Aluminium & Glass Works'
    },
    category: product.category === 'aluminium' ? 'Aluminium Work' : (product.category === 'glass' ? 'Glass Partitions & Cabins' : 'Mirrors & Glass'),
    offers: {
      '@type': 'Offer',
      priceCurrency: 'PKR',
      price: 'Enquire for price',
      availability: 'https://schema.org/InStock',
      url: `https://mirrordesignsialkot.com/products/${product.slug}`,
      seller: {
        '@type': 'HomeAndConstructionBusiness',
        name: 'Rahman Aluminium & Glass Works',
        telephone: '+923021054485',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Sialkot, Pakistan',
          addressLocality: 'Sialkot',
          addressRegion: 'Punjab',
          addressCountry: 'PK'
        }
      }
    }
  };

  let breadcrumbCategoryLink = '/mirrors';
  let breadcrumbCategoryName = 'Mirrors & Glass';
  if (product.category === 'aluminium') {
    breadcrumbCategoryLink = '/services/aluminium-doors';
    breadcrumbCategoryName = 'Aluminium Work';
  } else if (product.category === 'glass') {
    breadcrumbCategoryLink = '/services/glass-partitions';
    breadcrumbCategoryName = 'Glass Partitions & Cabins';
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://mirrordesignsialkot.com/'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: breadcrumbCategoryName,
        item: `https://mirrordesignsialkot.com${breadcrumbCategoryLink}`
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: product.title,
        item: `https://mirrordesignsialkot.com/products/${product.slug}`
      }
    ]
  };

  // SEO Title
  let seoTitle = product.seoTitle;
  if (!seoTitle) {
    let cleanName = product.title.replace(/\s*\(Showroom Trio\)\s*/i, '').replace(/\s*Showcase\s*/i, '').trim();
    seoTitle = `${cleanName} Sialkot | Rahman Glass`;
    if (seoTitle.length > 59) seoTitle = `${cleanName} | Rahman Sialkot`;
    if (seoTitle.length > 59) seoTitle = `${cleanName} — Rahman`;
    if (seoTitle.length > 59) seoTitle = seoTitle.substring(0, 56) + '...';
  }

  const metaDesc = product.metaDesc || `Custom ${product.title} in Sialkot. Premium ${product.category === 'mirrors' ? 'mirror' : (product.category === 'glass' ? 'glass work' : 'aluminium')}, custom sizes, free estimate. Call/WhatsApp: +92 302 1054485.`;

  // Split description by paragraphs if needed
  const descParagraphs = product.description.split('\n\n').filter(Boolean);

  return (
    <div className="theme-light">
      <SEO
        title={seoTitle}
        description={metaDesc}
        canonical={`/products/${product.slug}`}
        ogImage={resolveImgSrc(product.mainImage)}
        ogType="product"
        schemas={[productSchema, breadcrumbSchema]}
      />

      {/* 1. ANNOUNCEMENT BAR */}
      <AnnouncementBar variant="workshop" />

      {/* 2. CONTACT STRIP */}
      <ContactStrip />

      {/* 3. MAIN HEADER */}
      <Header waUrl={waUrl} />

      {/* 4. BREADCRUMBS */}
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <div className="container">
          <div className="breadcrumbs-inner">
            <Link to="/" style={{ color: 'var(--color-light-text-secondary)', textDecoration: 'none' }}>Home</Link>
            <span>◆</span>
            <Link to={breadcrumbCategoryLink} style={{ color: 'var(--color-light-text-secondary)', textDecoration: 'none' }}>{breadcrumbCategoryName}</Link>
            <span>◆</span>
            <span style={{ color: 'var(--color-gold)', fontWeight: 500 }} aria-current="page">{product.title}</span>
          </div>
        </div>
      </nav>

      {/* 5. PRODUCT HERO DETAIL */}
      <main className="product-page-main">
        <div className="container">
          <div className="product-hero-grid">
            
            {/* Left Column: Product Gallery */}
            <div className="product-hero-gallery">
              <div className="product-main-img-box">
                <img
                  id="main-product-image"
                  src={resolveImgSrc(currentImage.src)}
                  alt={currentImage.alt || `${product.title} custom made in Sialkot workshop`}
                  width="800"
                  height="600"
                  fetchpriority="high"
                />
              </div>
              {allImages.length > 1 && (
                <div className="product-thumbs-strip">
                  {allImages.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className={`gallery-thumbnail ${activeImageIndex === idx ? 'active' : ''}`}
                      aria-label={`Thumbnail ${idx + 1}`}
                      onClick={() => setActiveImageIndex(idx)}
                    >
                      <img
                        src={resolveImgSrc(img.src)}
                        alt={img.alt || `${product.title} - View ${idx + 1} crafted in Sialkot`}
                        width="72"
                        height="72"
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right Column: Product Overview & Actions */}
            <div className="product-hero-info">
              <span style={{ color: 'var(--color-gold)', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '8px' }}>
                {breadcrumbCategoryName} &bull; Sialkot Workshop
              </span>
              <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 700, color: 'var(--color-light-text)', lineHeight: 1.25, marginBottom: '1.25rem' }}>
                {product.title} in Sialkot
              </h1>
              
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-light-border)', borderLeft: '3px solid var(--color-gold)', padding: '1rem 1.25rem', borderRadius: '0 8px 8px 0', marginBottom: '1.5rem', boxShadow: 'var(--shadow-sm)' }}>
                <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--color-light-text)', lineHeight: 1.6 }}>
                  Custom fabrication available in customized dimensions, profile gauges, glass finishes, and hardware choices across Sialkot &amp; surrounding areas.
                </p>
              </div>

              <div className="product-cta-buttons">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp product-btn-wa"
                >
                  💬 Enquire on WhatsApp
                </a>
                <a href="tel:+923021054485" className="btn btn-primary product-btn-call">
                  📞 Call: 0302 1054485
                </a>
              </div>

              {/* Specifications Table */}
              {product.specs && Object.keys(product.specs).length > 0 && (
                <div className="product-specs-box">
                  <div style={{ background: 'rgba(201,162,75,0.08)', padding: '12px 16px', borderBottom: '1px solid rgba(201,162,75,0.2)' }}>
                    <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.05rem', fontWeight: 600, color: 'var(--color-gold)', margin: 0 }}>
                      Technical Specifications
                    </h2>
                  </div>
                  <div className="product-specs-table-wrap">
                    <table className="product-specs-table">
                      <tbody>
                        {Object.entries(product.specs).map(([label, val]) => (
                          <tr key={label}>
                            <th scope="row" className="specs-label" style={{ textAlign: 'left', padding: '12px 16px', borderBottom: '1px solid var(--color-light-border)', color: 'var(--color-gold)', fontSize: '0.9rem', fontWeight: 600, width: '35%' }}>
                              {label}
                            </th>
                            <td className="specs-value" style={{ padding: '12px 16px', borderBottom: '1px solid var(--color-light-border)', color: '#1A1A1A', fontSize: '0.95rem' }}>
                              {val}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Fast Service Badges */}
              <div className="product-fast-badges">
                <div className="product-fast-badge-item">
                  <span style={{ display: 'block', fontSize: '1.1rem', marginBottom: '4px' }}>📐</span>
                  <span style={{ fontSize: '0.8rem', color: '#1A1A1A', fontWeight: 600 }}>Free Measurement</span>
                  <span style={{ display: 'block', fontSize: '0.72rem', color: '#5A5A5A' }}>Sialkot &amp; Cantt</span>
                </div>
                <div className="product-fast-badge-item">
                  <span style={{ display: 'block', fontSize: '1.1rem', marginBottom: '4px' }}>⚡</span>
                  <span style={{ fontSize: '0.8rem', color: '#1A1A1A', fontWeight: 600 }}>Fast Fabrication</span>
                  <span style={{ display: 'block', fontSize: '0.72rem', color: '#5A5A5A' }}>5-7 Day Delivery</span>
                </div>
                <div className="product-fast-badge-item">
                  <span style={{ display: 'block', fontSize: '1.1rem', marginBottom: '4px' }}>🛡️</span>
                  <span style={{ fontSize: '0.8rem', color: '#1A1A1A', fontWeight: 600 }}>Quality Guarantee</span>
                  <span style={{ display: 'block', fontSize: '0.72rem', color: '#5A5A5A' }}>Direct Workshop Warranty</span>
                </div>
              </div>

            </div>
          </div>

          {/* Comprehensive Original Description Section */}
          <section className="product-overview-section">
            <div style={{ maxWidth: '900px' }}>
              <span style={{ color: 'var(--color-gold)', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '8px' }}>
                Detailed Overview
              </span>
              <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)', color: 'var(--color-light-text)', marginBottom: '1.5rem' }}>
                About Our {product.title} Custom Fabrication
              </h2>
              <div style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--color-light-text)' }}>
                {descParagraphs.map((para, i) => (
                  <p key={i} style={{ marginBottom: '1.25rem' }}>{para}</p>
                ))}
              </div>
            </div>
          </section>

          {/* Local Service Coverage Internal Links */}
          <section className="product-service-areas-box">
            <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.15rem', color: 'var(--color-light-text)', marginBottom: '0.75rem' }}>
              📍 On-Site Measurement &amp; Installation Service Areas
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-light-text-secondary)', lineHeight: 1.6, marginBottom: '1rem' }}>
              We provide doorstep laser measurements, delivery, and full turnkey installation for this {product.title} in all major sectors of Sialkot and adjacent industrial/residential belts:
            </p>
            <div className="product-areas-tags">
              <Link to="/service-areas/sialkot" style={{ background: 'var(--color-light-hero-bg)', color: 'var(--color-gold)', padding: '6px 12px', borderRadius: '6px', fontSize: '0.825rem', textDecoration: 'none', border: '1px solid rgba(201,162,75,0.3)' }}>Sialkot City</Link>
              <Link to="/service-areas/sialkot-cantt" style={{ background: 'var(--color-light-hero-bg)', color: 'var(--color-gold)', padding: '6px 12px', borderRadius: '6px', fontSize: '0.825rem', textDecoration: 'none', border: '1px solid rgba(201,162,75,0.3)' }}>Sialkot Cantt</Link>
              <Link to="/service-areas/daska" style={{ background: 'var(--color-light-hero-bg)', color: 'var(--color-gold)', padding: '6px 12px', borderRadius: '6px', fontSize: '0.825rem', textDecoration: 'none', border: '1px solid rgba(201,162,75,0.3)' }}>Daska</Link>
              <Link to="/service-areas/sambrial" style={{ background: 'var(--color-light-hero-bg)', color: 'var(--color-gold)', padding: '6px 12px', borderRadius: '6px', fontSize: '0.825rem', textDecoration: 'none', border: '1px solid rgba(201,162,75,0.3)' }}>Sambrial</Link>
              <Link to="/service-areas/pasrur" style={{ background: 'var(--color-light-hero-bg)', color: 'var(--color-gold)', padding: '6px 12px', borderRadius: '6px', fontSize: '0.825rem', textDecoration: 'none', border: '1px solid rgba(201,162,75,0.3)' }}>Pasrur</Link>
              <Link to="/service-areas/wazirabad-road" style={{ background: 'var(--color-light-hero-bg)', color: 'var(--color-gold)', padding: '6px 12px', borderRadius: '6px', fontSize: '0.825rem', textDecoration: 'none', border: '1px solid rgba(201,162,75,0.3)' }}>Wazirabad Road</Link>
              <Link to="/service-areas/jamke-cheema" style={{ background: 'var(--color-light-hero-bg)', color: 'var(--color-gold)', padding: '6px 12px', borderRadius: '6px', fontSize: '0.825rem', textDecoration: 'none', border: '1px solid rgba(201,162,75,0.3)' }}>Jamke Cheema</Link>
              <Link to="/service-areas/ugoki" style={{ background: 'var(--color-light-hero-bg)', color: 'var(--color-gold)', padding: '6px 12px', borderRadius: '6px', fontSize: '0.825rem', textDecoration: 'none', border: '1px solid rgba(201,162,75,0.3)' }}>Ugoki</Link>
            </div>
          </section>

          {/* 6. RELATED PRODUCTS SECTION */}
          <section className="product-related-section">
            <div style={{ marginBottom: '2rem' }}>
              <span style={{ color: 'var(--color-gold)', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '6px' }}>
                Explore More
              </span>
              <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.75rem', color: 'var(--color-light-text)', margin: 0 }}>
                Related Designs &amp; Projects
              </h2>
            </div>
            <div className="product-related-grid">
              {related.map((rel) => (
                <div
                  key={rel.slug}
                  className="product-card"
                  style={{ background: '#FFFFFF', border: '1px solid var(--color-light-border)', borderRadius: '12px', overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: 'var(--shadow-sm)' }}
                >
                  <div className="product-card-image" style={{ aspectRatio: '4/3', overflow: 'hidden', background: '#F8F6F2' }}>
                    <img
                      src={resolveImgSrc(rel.mainImage)}
                      alt={`${rel.title} custom work in Sialkot`}
                      width="400"
                      height="300"
                      loading="lazy"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div className="product-card-body" style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.1rem', color: '#1A1A1A', marginBottom: '0.5rem' }}>
                      {rel.title}
                    </h3>
                    <p style={{ fontSize: '0.875rem', color: '#5A5A5A', lineHeight: 1.5, marginBottom: '1rem', flexGrow: 1 }}>
                      {rel.description ? `${rel.description.substring(0, 100)}...` : ''}
                    </p>
                    <Link
                      to={`/products/${rel.slug}`}
                      className="btn btn-secondary"
                      style={{ width: '100%', justifyContent: 'center', fontSize: '0.875rem', padding: '0.5rem 1rem' }}
                    >
                      View Details &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>

      {/* 7. FOOTER */}
      <Footer />

      {/* 8. FLOATING BUTTONS */}
      <FloatingButtons waUrl={waUrl} />
    </div>
  );
}
