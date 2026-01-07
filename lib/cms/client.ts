/**
 * CMS Client Configuration
 *
 * This file configures the connection to Sanity.io CMS.
 * In production, you would install @sanity/client and configure it here.
 *
 * SETUP STEPS:
 * 1. Create a Sanity project at sanity.io
 * 2. Install: npm install @sanity/client @sanity/image-url
 * 3. Add environment variables to .env.local
 * 4. Uncomment the client configuration below
 *
 * The mock client below simulates CMS responses for demo purposes.
 */

import {
  CMSEvent,
  CMSMember,
  CMSGalleryImage,
  CMSNewsletter,
  CMSPage,
  CMSAnnouncement,
} from "./schemas";

// ============================================================================
// Configuration
// ============================================================================

/**
 * Sanity project configuration
 * These would come from environment variables in production
 */
export const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your-project-id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: process.env.NODE_ENV === "production",
};

// ============================================================================
// Real Sanity Client (uncomment when ready to use)
// ============================================================================

/*
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const sanityClient = createClient({
  projectId: sanityConfig.projectId,
  dataset: sanityConfig.dataset,
  apiVersion: sanityConfig.apiVersion,
  useCdn: sanityConfig.useCdn,
  token: process.env.SANITY_API_TOKEN, // For write operations
});

// Image URL builder
const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}

// Preview client (bypasses CDN cache)
export const previewClient = createClient({
  ...sanityConfig,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

// Get the appropriate client based on preview mode
export function getClient(preview = false) {
  return preview ? previewClient : sanityClient;
}
*/

// ============================================================================
// Mock Client (for demo purposes)
// ============================================================================

/**
 * Mock data fetching functions
 * These simulate what the real Sanity client would return
 */

export async function fetchEvents(): Promise<CMSEvent[]> {
  // In production: return sanityClient.fetch(`*[_type == "event"] | order(startDate asc)`)
  return mockEvents;
}

export async function fetchEventBySlug(slug: string): Promise<CMSEvent | null> {
  // In production: return sanityClient.fetch(`*[_type == "event" && slug.current == $slug][0]`, { slug })
  return mockEvents.find((e) => e.slug.current === slug) || null;
}

export async function fetchMembers(): Promise<CMSMember[]> {
  // In production: return sanityClient.fetch(`*[_type == "member" && boardMember == true]`)
  return mockMembers;
}

export async function fetchGalleryImages(): Promise<CMSGalleryImage[]> {
  // In production: return sanityClient.fetch(`*[_type == "galleryImage" && status == "published"]`)
  return mockGalleryImages;
}

export async function fetchNewsletters(): Promise<CMSNewsletter[]> {
  // In production: return sanityClient.fetch(`*[_type == "newsletter" && status == "published"] | order(publishedAt desc)`)
  return mockNewsletters;
}

export async function fetchPageBySlug(slug: string): Promise<CMSPage | null> {
  // In production: return sanityClient.fetch(`*[_type == "page" && slug.current == $slug][0]`, { slug })
  return mockPages.find((p) => p.slug.current === slug) || null;
}

export async function fetchActiveAnnouncements(): Promise<CMSAnnouncement[]> {
  // In production: return sanityClient.fetch(`*[_type == "announcement" && status == "active"]`)
  return mockAnnouncements;
}

// ============================================================================
// Mock Data
// ============================================================================

const mockEvents: CMSEvent[] = [
  {
    _id: "event-1",
    _type: "event",
    _createdAt: "2024-12-01T00:00:00Z",
    _updatedAt: "2024-12-15T00:00:00Z",
    _rev: "abc123",
    title: "Wednesday Night Racing",
    slug: { current: "wednesday-night-racing-jan-15" },
    description: [
      {
        _type: "block",
        _key: "block1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "span1",
            text: "Join us for our weekly beer can racing series!",
            marks: [],
          },
        ],
      },
    ],
    excerpt: "Weekly racing series for all skill levels",
    startDate: "2025-01-15T18:00:00Z",
    endDate: "2025-01-15T21:00:00Z",
    location: "AYC Starting Line",
    eventType: "racing",
    series: "Wednesday Night Racing",
    requiresRegistration: false,
    status: "published",
    publishedAt: "2024-12-15T00:00:00Z",
  },
  {
    _id: "event-2",
    _type: "event",
    _createdAt: "2024-12-01T00:00:00Z",
    _updatedAt: "2024-12-15T00:00:00Z",
    _rev: "def456",
    title: "New Member Orientation",
    slug: { current: "new-member-orientation-jan-20" },
    description: [
      {
        _type: "block",
        _key: "block1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "span1",
            text: "Learn about club facilities, programs, and how to get involved.",
            marks: [],
          },
        ],
      },
    ],
    excerpt: "Welcome new members to the club",
    startDate: "2025-01-20T14:00:00Z",
    endDate: "2025-01-20T16:00:00Z",
    location: "AYC Clubhouse",
    eventType: "social",
    requiresRegistration: true,
    maxParticipants: 30,
    status: "published",
    publishedAt: "2024-12-15T00:00:00Z",
  },
];

const mockMembers: CMSMember[] = [
  {
    _id: "member-1",
    _type: "member",
    _createdAt: "2024-01-01T00:00:00Z",
    _updatedAt: "2024-12-01T00:00:00Z",
    _rev: "mem123",
    name: "James Richardson",
    slug: { current: "james-richardson" },
    email: "commodore@astoriayachtclub.org",
    role: "commodore",
    title: "Commodore",
    boardMember: true,
    yearsOnBoard: 6,
    shortBio: "30+ years of sailing experience, leading AYC since 2019.",
    showInDirectory: true,
    showContactInfo: true,
  },
];

const mockGalleryImages: CMSGalleryImage[] = [
  {
    _id: "gallery-1",
    _type: "galleryImage",
    _createdAt: "2024-06-01T00:00:00Z",
    _updatedAt: "2024-06-01T00:00:00Z",
    _rev: "gal123",
    image: {
      _type: "image",
      asset: { _ref: "image-abc123", _type: "reference" },
      alt: "Sailboats racing on the Columbia River",
    },
    title: "Summer Regatta Start",
    caption: "The fleet heads upwind at the start of the Memorial Day Regatta",
    album: "racing",
    dateTaken: "2024-05-27",
    photographer: "Mike Thompson",
    status: "published",
    publishedAt: "2024-06-01T00:00:00Z",
  },
];

const mockNewsletters: CMSNewsletter[] = [
  {
    _id: "newsletter-1",
    _type: "newsletter",
    _createdAt: "2024-12-01T00:00:00Z",
    _updatedAt: "2024-12-15T00:00:00Z",
    _rev: "news123",
    title: "The Prior Edition - January 2025",
    slug: { current: "january-2025" },
    issue: "January 2025",
    issueNumber: 145,
    sections: [],
    status: "published",
    publishedAt: "2025-01-01T00:00:00Z",
  },
];

const mockPages: CMSPage[] = [];

const mockAnnouncements: CMSAnnouncement[] = [
  {
    _id: "announce-1",
    _type: "announcement",
    _createdAt: "2024-12-20T00:00:00Z",
    _updatedAt: "2024-12-20T00:00:00Z",
    _rev: "ann123",
    title: "2025 Membership Renewal",
    message: "Renew your membership by January 31st to maintain your benefits!",
    link: "/membership/renew",
    linkText: "Renew Now",
    style: "info",
    dismissible: true,
    position: "banner",
    startDate: "2025-01-01T00:00:00Z",
    endDate: "2025-01-31T00:00:00Z",
    showOn: ["all"],
    status: "active",
  },
];

// ============================================================================
// URL Helpers
// ============================================================================

/**
 * Generate CMS edit URL for a document
 * Links directly to the editing interface in Sanity Studio
 */
export function getCMSEditUrl(documentId: string, type: string): string {
  const { projectId } = sanityConfig;
  return `https://${projectId}.sanity.studio/desk/${type};${documentId}`;
}

/**
 * Generate Studio URL
 */
export function getStudioUrl(): string {
  const { projectId } = sanityConfig;
  return `https://${projectId}.sanity.studio`;
}
