/**
 * Utility to generate LocalBusiness and Organization JSON-LD schemas
 */

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Raju Pachuji Chohan - Awnings & Canopies",
    "image": "https://programmingplaces.github.io/Raju-Pachuji-Chohan/images/hero-bg.png", // placeholder image for schema
    "@id": "https://programmingplaces.github.io/Raju-Pachuji-Chohan/#localbusiness",
    "url": "https://programmingplaces.github.io/Raju-Pachuji-Chohan",
    "telephone": "+919768690579",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "19.0760",
      "longitude": "72.8777"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "20:00"
    },
    "sameAs": [
      // Social links could go here if any
    ],
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Mumbai"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Navi Mumbai"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Thane"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Mira Road"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Vasai"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Virar"
      }
    ]
  };
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Raju Pachuji Chohan - Awnings & Canopies",
    "url": "https://programmingplaces.github.io/Raju-Pachuji-Chohan",
    "logo": "https://programmingplaces.github.io/Raju-Pachuji-Chohan/favicon.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+919768690579",
      "contactType": "customer service",
      "areaServed": ["IN"],
      "availableLanguage": ["English", "Hindi", "Marathi"]
    }
  };
}
