import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  defaultMetadata,
  generateOrganizationSchema,
  generateWebsiteSchema,
  JsonLd,
} from "@/lib/seo";

/**
 * Font Loading Optimization
 *
 * Using next/font for optimal font loading:
 * - Fonts are self-hosted (no external requests)
 * - Automatic font subsetting reduces file size
 * - CSS font-display: swap prevents invisible text
 * - Preloaded at build time for instant availability
 */
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap", // Prevents invisible text during font load
  preload: true,
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
  preload: true,
});

/**
 * Metadata Export
 *
 * Next.js automatically generates all necessary meta tags from this config.
 * This replaces the need for manual <meta> tags in the document head.
 */
export const metadata: Metadata = defaultMetadata;

/**
 * Viewport Configuration
 *
 * Separated from metadata for better control over viewport behavior.
 * - width=device-width ensures proper mobile scaling
 * - initial-scale=1 prevents zoom issues on mobile
 * - theme-color provides browser chrome coloring on mobile
 */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5, // Allows zoom for accessibility
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1e3a8a" }, // navy-800
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/*
          JSON-LD Structured Data

          WHY THIS MATTERS:
          - Helps search engines understand the site content
          - Enables rich snippets in search results
          - Can improve click-through rates from search

          We include Organization and WebSite schemas on every page
          for maximum SEO benefit.
        */}
        <JsonLd data={generateOrganizationSchema()} />
        <JsonLd data={generateWebsiteSchema()} />

        {/*
          Preconnect to external resources

          WHY THIS MATTERS:
          - Establishes early connections to known external origins
          - Reduces latency for fonts, images, and API calls
          - Critical for performance on slower connections
        */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />

        {/* Favicon configuration */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col antialiased`}
      >
        {/*
          Skip to Content Link

          WHY THIS MATTERS:
          - Essential for keyboard and screen reader users
          - Allows bypassing repetitive navigation
          - WCAG 2.1 Level A requirement
          - Hidden by default, visible on focus
        */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-ocean-500 focus:px-4 focus:py-2 focus:text-white focus:outline-none focus:ring-2 focus:ring-ocean-300"
        >
          Skip to main content
        </a>

        <Header />

        {/*
          Main Content Area

          The id="main-content" is the target for the skip link.
          tabIndex="-1" allows programmatic focus without tab stop.
        */}
        <main id="main-content" className="flex-1" tabIndex={-1}>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
