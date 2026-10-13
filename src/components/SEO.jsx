import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({
  title,
  description,
  canonical,
  ogImage = 'https://mirror-design.vercel.app/og-image.jpg',
  ogType = 'website',
  robots = 'index, follow',
  schemas = []
}) {
  const fullCanonical = canonical
    ? (canonical.startsWith('http') ? canonical : `https://mirror-design.vercel.app${canonical}`)
    : null;
  const fullOgImage = ogImage ? (ogImage.startsWith('http') ? ogImage : `https://mirror-design.vercel.app${ogImage.startsWith('/') ? '' : '/'}${ogImage}`) : 'https://mirror-design.vercel.app/og-image.jpg';

  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      <meta name="author" content="Rahman Aluminium & Glass Works" />
      <meta name="robots" content={robots} />
      {fullCanonical && <link rel="canonical" href={fullCanonical} />}

      {/* Open Graph */}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {fullOgImage && <meta property="og:image" content={fullOgImage} />}
      {fullCanonical && <meta property="og:url" content={fullCanonical} />}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Rahman Aluminium & Glass Works" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      {fullOgImage && <meta name="twitter:image" content={fullOgImage} />}

      {/* Structured Data */}
      {schemas && schemas.map((schema, idx) => (
        <script key={idx} type="application/ld+json">
          {typeof schema === 'string' ? schema : JSON.stringify(schema, null, 2)}
        </script>
      ))}
    </Helmet>
  );
}
