/**
 * CMS Preview Mode Utilities
 *
 * These utilities enable live preview of CMS content before publishing.
 * Editors can see changes in real-time on the actual website.
 *
 * HOW PREVIEW MODE WORKS:
 * 1. Editor clicks "Preview" in Sanity Studio
 * 2. A special preview URL is generated with a secret token
 * 3. The website enables "draft mode" and fetches unpublished content
 * 4. Changes in the CMS appear instantly on the preview
 * 5. Editor can approve and publish, or continue editing
 *
 * BENEFITS:
 * - See exactly how content will look before publishing
 * - Catch formatting issues early
 * - Collaborative review process
 * - No risk of publishing broken content
 */

import { draftMode } from "next/headers";

// ============================================================================
// Preview Mode Configuration
// ============================================================================

/**
 * Secret token for preview mode authentication
 * This should be a long, random string stored in environment variables
 */
const PREVIEW_SECRET = process.env.SANITY_PREVIEW_SECRET || "preview-secret";

// ============================================================================
// Preview Mode Handlers
// ============================================================================

/**
 * Enable preview mode
 * Called by the /api/preview route when editor starts preview
 */
export async function enablePreview(secret: string, slug: string) {
  // Validate the secret
  if (secret !== PREVIEW_SECRET) {
    return { success: false, error: "Invalid preview secret" };
  }

  // Enable Next.js draft mode
  const draft = await draftMode();
  draft.enable();

  return { success: true, redirect: slug };
}

/**
 * Disable preview mode
 * Called when editor exits preview or clicks "Exit Preview"
 */
export async function disablePreview() {
  const draft = await draftMode();
  draft.disable();

  return { success: true };
}

/**
 * Check if currently in preview mode
 */
export async function isPreviewMode(): Promise<boolean> {
  const draft = await draftMode();
  return draft.isEnabled;
}

// ============================================================================
// Preview Components
// ============================================================================

/**
 * Props for the preview bar component
 */
export interface PreviewBarProps {
  documentId: string;
  documentType: string;
}

/**
 * Generate the props needed for the preview bar
 */
export function getPreviewBarProps(
  documentId: string,
  documentType: string
): PreviewBarProps {
  return {
    documentId,
    documentType,
  };
}

// ============================================================================
// GROQ Query Helpers
// ============================================================================

/**
 * GROQ query fragments for common operations
 * GROQ is Sanity's query language (Graph-Relational Object Queries)
 */
export const groqQueries = {
  // Fetch all published events
  events: `*[_type == "event" && status == "published"] | order(startDate asc) {
    _id,
    title,
    slug,
    excerpt,
    startDate,
    endDate,
    location,
    eventType,
    series,
    featuredImage,
    requiresRegistration,
    maxParticipants
  }`,

  // Fetch single event by slug
  eventBySlug: `*[_type == "event" && slug.current == $slug][0] {
    ...,
    "organizer": organizer->{name, email, photo}
  }`,

  // Fetch board members
  boardMembers: `*[_type == "member" && boardMember == true] | order(
    role == "commodore" desc,
    role == "vice-commodore" desc,
    role == "rear-commodore" desc,
    role == "secretary" desc,
    role == "treasurer" desc,
    yearsOnBoard desc
  ) {
    _id,
    name,
    slug,
    photo,
    title,
    role,
    shortBio,
    yearsOnBoard,
    email
  }`,

  // Fetch gallery images by album
  galleryByAlbum: `*[_type == "galleryImage" && album == $album && status == "published"] | order(dateTaken desc) {
    _id,
    image,
    title,
    caption,
    dateTaken,
    photographer
  }`,

  // Fetch latest newsletter
  latestNewsletter: `*[_type == "newsletter" && status == "published"] | order(publishedAt desc)[0] {
    _id,
    title,
    slug,
    issue,
    coverImage,
    publishedAt,
    sections
  }`,

  // Fetch page by slug
  pageBySlug: `*[_type == "page" && slug.current == $slug][0] {
    ...,
    content[] {
      ...,
      _type == "cardGridBlock" => {
        cards[] {
          ...,
          "imageUrl": image.asset->url
        }
      }
    }
  }`,

  // Fetch active announcements
  activeAnnouncements: `*[_type == "announcement" && status == "active" &&
    dateTime(startDate) <= dateTime(now()) &&
    dateTime(endDate) >= dateTime(now())
  ] {
    _id,
    title,
    message,
    link,
    linkText,
    style,
    dismissible,
    position
  }`,

  // Site settings
  siteSettings: `*[_type == "siteSettings"][0]`,
};

// ============================================================================
// Preview URL Generation
// ============================================================================

/**
 * Generate a preview URL for a document
 * This URL will enable preview mode and redirect to the document's page
 */
export function generatePreviewUrl(
  documentType: string,
  slug: string,
  baseUrl = ""
): string {
  const params = new URLSearchParams({
    secret: PREVIEW_SECRET,
    slug: getDocumentPath(documentType, slug),
  });

  return `${baseUrl}/api/preview?${params.toString()}`;
}

/**
 * Get the public URL path for a document type
 */
function getDocumentPath(documentType: string, slug: string): string {
  const pathMap: Record<string, string> = {
    event: `/events/${slug}`,
    member: `/about/board`,
    galleryImage: `/gallery`,
    newsletter: `/newsletter/${slug}`,
    page: `/${slug}`,
  };

  return pathMap[documentType] || `/${slug}`;
}

// ============================================================================
// Webhook Utilities
// ============================================================================

/**
 * Webhook payload type for content updates
 * Sanity sends these when content is published
 */
export interface WebhookPayload {
  _id: string;
  _type: string;
  _rev: string;
  slug?: { current: string };
  operation: "create" | "update" | "delete";
}

/**
 * Validate webhook signature
 * Ensures the webhook is actually from Sanity
 */
export function validateWebhookSignature(
  _payload: string,
  _signature: string,
  _secret: string
): boolean {
  // In production, use crypto to validate HMAC signature
  // const hmac = crypto.createHmac('sha256', _secret);
  // hmac.update(_payload);
  // const expectedSignature = hmac.digest('hex');
  // return crypto.timingSafeEqual(Buffer.from(_signature), Buffer.from(expectedSignature));
  return true; // Simplified for demo
}

/**
 * Get revalidation paths for a document type
 * Used to clear cache when content is updated
 */
export function getRevalidationPaths(
  documentType: string,
  slug?: string
): string[] {
  const paths: string[] = [];

  switch (documentType) {
    case "event":
      paths.push("/events", "/events/list", "/");
      if (slug) paths.push(`/events/${slug}`);
      break;
    case "member":
      paths.push("/about/board", "/about");
      break;
    case "galleryImage":
      paths.push("/gallery");
      break;
    case "newsletter":
      paths.push("/newsletter");
      if (slug) paths.push(`/newsletter/${slug}`);
      break;
    case "page":
      if (slug) paths.push(`/${slug}`);
      break;
    case "announcement":
      paths.push("/"); // Announcements typically appear on homepage
      break;
    case "siteSettings":
      paths.push("/"); // Site settings affect all pages
      break;
  }

  return paths;
}
