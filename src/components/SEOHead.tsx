import React from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonicalUrl?: string;
  structuredData?: object[];
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Kairos AI - Automatisation Acquisition Client | Intelligence Artificielle pour Entreprises",
  description = "Kairos AI automatise votre acquisition client de A à Z. Prospection IA, qualification de leads, nurturing automatisé. ROI garanti en 2-4 mois. +300% de leads qualifiés.",
  keywords = "automatisation acquisition client, intelligence artificielle entreprise, prospection automatique, leads IA, automatisation commerciale, CRM intelligent, prospection digitale, qualification leads automatique, nurturing automatisé, ROI acquisition client, croissance entreprise IA, automation marketing, vente automatisée",
  ogTitle,
  ogDescription,
  ogImage = "https://kairos-ai.fr/og-kairos-ai.png",
  canonicalUrl = "https://kairos-ai.fr/",
  structuredData = []
}) => {
  const finalOgTitle = ogTitle || title;
  const finalOgDescription = ogDescription || description;

  return (
    <>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Kairos AI" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Kairos AI" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={finalOgTitle} />
      <meta property="og:description" content={finalOgDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Kairos AI - Automatisation intelligente de l'acquisition client" />
      <meta property="og:locale" content="fr_FR" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@_kairos_AI_" />
      <meta name="twitter:creator" content="@_kairos_AI_" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={finalOgTitle} />
      <meta name="twitter:description" content={finalOgDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content="Kairos AI - Automatisation intelligente de l'acquisition client" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#FF6B35" />
      <meta name="msapplication-TileColor" content="#FF6B35" />
      <meta name="application-name" content="Kairos AI" />
      <meta name="apple-mobile-web-app-title" content="Kairos AI" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Structured Data */}
      {structuredData.map((data, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </>
  );
};

export default SEOHead; 