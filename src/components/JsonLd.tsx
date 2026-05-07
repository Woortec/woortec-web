export function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Woortec",
    url: "https://woortec.com",
    logo: "https://woortec.com/logos/logo.png",
    description:
      "Digital Platform for Optimizing Ads Investments. We simplify and organize the advertising investment process.",
    sameAs: [
      "https://www.facebook.com/woortecc",
      "https://www.youtube.com/@Woortec-plat",
      "https://www.instagram.com/woortec/",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "info@woortec.com",
      contactType: "customer service",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function WebsiteJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Woortec",
    url: "https://woortec.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://woortec.com/highlights?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function SoftwareApplicationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Woortec",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: [
      {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        name: "Starter",
      },
      {
        "@type": "Offer",
        price: "29.99",
        priceCurrency: "USD",
        name: "Basic",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "6",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
