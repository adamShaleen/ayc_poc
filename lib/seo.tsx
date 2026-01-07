/**
 * SEO Configuration and Utilities
 *
 * This file centralizes SEO configuration for the entire site.
 * It includes:
 * - Default metadata configuration
 * - JSON-LD structured data generators
 * - Open Graph defaults
 * - Twitter card configuration
 *
 * WHY THIS MATTERS:
 * - Search engines use metadata to understand and rank pages
 * - Structured data enables rich snippets in search results
 * - Open Graph tags control how links appear when shared on social media
 * - Consistent SEO across all pages improves overall site authority
 */

import { Metadata } from "next";
import { SITE_CONFIG, CONTACT_INFO, SOCIAL_LINKS } from "./constants";

// Base URL for the site - used for canonical URLs and OG images
export const SITE_URL = "https://astoriayachtclub.org";

/**
 * Default metadata that applies to all pages
 * Individual pages can override these values
 */
export const defaultMetadata: Metadata = {
  // Base metadata
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_CONFIG.name,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,

  // Keywords help search engines understand page topics
  keywords: [
    "Astoria Yacht Club",
    "AYC",
    "sailing",
    "Oregon",
    "Columbia River",
    "yacht club",
    "sailing club",
    "boat racing",
    "Astoria Oregon",
    "Pacific Northwest sailing",
    "sailboat racing",
    "cruising",
    "learn to sail",
    "sailing community",
  ],

  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,

  // Robots directives
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Open Graph - controls how links appear on Facebook, LinkedIn, etc.
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_CONFIG.name,
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Astoria Yacht Club - Sailing the Columbia River Since 1931",
      },
    ],
  },

  // Twitter Card - controls how links appear on Twitter/X
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: ["/images/og-image.jpg"],
  },

  // Verification codes for search console (placeholder values)
  verification: {
    google: "google-site-verification-code",
  },

  // App-specific metadata
  applicationName: SITE_CONFIG.name,
  category: "Sports",

  // Additional link tags
  alternates: {
    canonical: SITE_URL,
  },
};

/**
 * Generate JSON-LD structured data for Organization
 *
 * WHY THIS MATTERS:
 * - Helps Google understand what your organization is
 * - Can enable Knowledge Panel in search results
 * - Provides consistent business information across search engines
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SportsClub",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_CONFIG.name,
    alternateName: SITE_CONFIG.shortName,
    description: SITE_CONFIG.description,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    image: `${SITE_URL}/images/og-image.jpg`,
    foundingDate: SITE_CONFIG.established.toString(),
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT_INFO.address,
      addressLocality: CONTACT_INFO.city,
      addressRegion: CONTACT_INFO.state,
      postalCode: CONTACT_INFO.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 46.1879,
      longitude: -123.8313,
    },
    telephone: CONTACT_INFO.phone,
    email: CONTACT_INFO.email,
    sameAs: SOCIAL_LINKS.map((link) => link.url),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      description: "Open during scheduled club events",
    },
    memberOf: {
      "@type": "Organization",
      name: "Pacific Northwest Yachting Association",
    },
    sport: "Sailing",
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 46.1879,
        longitude: -123.8313,
      },
      geoRadius: "100 miles",
    },
  };
}

/**
 * Generate JSON-LD for WebSite with search action
 *
 * WHY THIS MATTERS:
 * - Enables sitelinks search box in Google results
 * - Helps Google understand site structure
 */
export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/**
 * Generate JSON-LD for Event pages
 */
export function generateEventSchema(event: {
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  location?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.name,
    description: event.description,
    startDate: event.startDate,
    endDate: event.endDate || event.startDate,
    location: {
      "@type": "Place",
      name: event.location || "Astoria Yacht Club",
      address: {
        "@type": "PostalAddress",
        streetAddress: CONTACT_INFO.address,
        addressLocality: CONTACT_INFO.city,
        addressRegion: CONTACT_INFO.state,
        postalCode: CONTACT_INFO.zip,
      },
    },
    image: event.image || `${SITE_URL}/images/og-image.jpg`,
    organizer: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_URL,
    },
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  };
}

/**
 * Generate JSON-LD for FAQ pages
 */
export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate BreadcrumbList schema
 */
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

/**
 * JSON-LD Script Component
 *
 * Use this component in your pages to add structured data:
 * <JsonLd data={generateOrganizationSchema()} />
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
