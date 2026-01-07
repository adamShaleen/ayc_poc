/**
 * Sitemap Configuration
 *
 * This file generates the sitemap.xml for search engines.
 *
 * WHY THIS MATTERS:
 * - Helps search engines discover all pages on the site
 * - Indicates page priority and update frequency
 * - Essential for SEO, especially for new sites
 * - Improves indexing speed for new/updated content
 *
 * Next.js generates this at build time as /sitemap.xml
 */

import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  // Base URL for all pages
  const baseUrl = SITE_URL;

  // Current date for lastModified
  const now = new Date();

  // Static pages with their priorities and change frequencies
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0, // Homepage gets highest priority
    },
    // About section
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about/board`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/about/history`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    // Membership section
    {
      url: `${baseUrl}/membership`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/membership/apply`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/membership/renew`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    // Events section
    {
      url: `${baseUrl}/events`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/events/list`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // Racing section
    {
      url: `${baseUrl}/racing`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/racing/crew`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    // Gallery
    {
      url: `${baseUrl}/gallery`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/gallery/upload`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    // Resources
    {
      url: `${baseUrl}/resources`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // Cruising
    {
      url: `${baseUrl}/cruising/reciprocity`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  return staticPages;
}
