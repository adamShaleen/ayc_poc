/**
 * Robots.txt Configuration
 *
 * This file generates the robots.txt for search engine crawlers.
 *
 * WHY THIS MATTERS:
 * - Controls which pages search engines can crawl
 * - Prevents indexing of admin/private pages
 * - Points crawlers to the sitemap
 * - Can improve crawl efficiency
 *
 * Next.js generates this at build time as /robots.txt
 */

import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/", // API routes
          "/admin/", // Admin pages (if any)
          "/_next/", // Next.js internals
          "/private/", // Private pages
        ],
      },
      {
        // Specific rules for Googlebot
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
