import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({
  title,
  description,
  keywords,
  canonical,
  ogImage = 'https://mirrordesignsialkot.com/og-image.jpg',
  ogType = 'website',
  robots = 'index, follow',
  schemas = []
}) {
  const fullCanonical = canonical
    ? (canonical.startsWith('http') ? canonical : `https://mirrordesignsialkot.com${canonical}`)
    : null;
  const fullOgImage = ogImage ? (ogImage.startsWith('http') ? ogImage : `https://mirrordesignsialkot.com${ogImage.startsWith('/') ? '' : '/'}${ogImage}`) : 'https://mirrordesignsialkot.com/og-image.jpg';

  const defaultKeywords = 'aluminium glass work sialkot, mirror design sialkot, led smart mirrors sialkot, aluminium doors and windows sialkot, glass partitions sialkot, toughened glass balcony railing sialkot, rahman aluminium and glass works';
  const resolvedKeywords = keywords
    ? (Array.isArray(keywords) ? keywords.join(', ') : keywords)
    : defaultKeywords;

  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {resolvedKeywords && <meta name="keywords" content={resolvedKeywords} />}
      <meta name="author" content="Rahman Aluminium & Glass Works Sialkot" />
      <meta name="robots" content={robots} />
      {fullCanonical && <link rel="canonical" href={fullCanonical} />}

      {/* Local SEO / Geo-Targeting for Sialkot, Punjab, Pakistan */}
      <meta name="geo.region" content="PK-PB" />
      <meta name="geo.placename" content="Sialkot, Punjab, Pakistan" />
      <meta name="geo.position" content="32.4945;74.5229" />
      <meta name="ICBM" content="32.4945, 74.5229" />

      {/* Open Graph */}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {fullOgImage && <meta property="og:image" content={fullOgImage} />}
      {fullCanonical && <meta property="og:url" content={fullCanonical} />}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Rahman Aluminium & Glass Works - Mirror Design Sialkot" />
      <meta property="og:locale" content="en_PK" />

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
