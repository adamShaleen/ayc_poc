/**
 * CMS Content Type Schemas
 *
 * These TypeScript interfaces define the structure of content managed through
 * a headless CMS like Sanity.io. Each schema represents a content type that
 * club volunteers can create and edit without touching code.
 *
 * WHY HEADLESS CMS:
 * - Content and presentation are separated
 * - Non-technical users get a friendly editing interface
 * - Developers have full control over how content is displayed
 * - Content can be used across multiple platforms (web, mobile, email)
 * - Version history and draft/publish workflow built-in
 *
 * SANITY.IO BENEFITS:
 * - Real-time collaborative editing
 * - Customizable editing interface
 * - Free tier generous for small organizations
 * - Excellent image handling and CDN
 * - Live preview capabilities
 */

// ============================================================================
// Base Types
// ============================================================================

/**
 * Common fields present on all CMS content
 */
export interface CMSDocument {
  _id: string;
  _type: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
}

/**
 * Image reference from CMS (Sanity uses this structure)
 */
export interface CMSImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
  caption?: string;
  hotspot?: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
}

/**
 * Rich text block (Portable Text format used by Sanity)
 */
export interface PortableTextBlock {
  _type: "block";
  _key: string;
  style?: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
  children: Array<{
    _type: "span";
    _key: string;
    text: string;
    marks?: string[];
  }>;
  markDefs?: Array<{
    _type: string;
    _key: string;
    href?: string;
  }>;
}

/**
 * Author/member reference
 */
export interface AuthorReference {
  _type: "reference";
  _ref: string;
}

// ============================================================================
// Event Schema
// ============================================================================

/**
 * Event Content Type
 *
 * Used for club events like races, cruises, social gatherings, and meetings.
 * This is one of the most frequently updated content types.
 *
 * EDITING EXPERIENCE:
 * - Date/time picker for scheduling
 * - Location autocomplete
 * - Rich text editor for description
 * - Image upload with drag-and-drop
 * - Category selection dropdown
 * - Toggle for registration requirements
 */
export interface CMSEvent extends CMSDocument {
  _type: "event";

  // Basic info
  title: string;
  slug: { current: string };
  description: PortableTextBlock[];
  excerpt?: string;

  // Scheduling
  startDate: string; // ISO date string
  endDate?: string;
  allDay?: boolean;
  recurringPattern?: "none" | "weekly" | "monthly" | "yearly";

  // Location
  location: string;
  locationDetails?: string;
  virtualLink?: string; // For hybrid/online events

  // Categorization
  eventType: "racing" | "cruising" | "social" | "meeting" | "education";
  series?: string; // e.g., "Wednesday Night Racing"

  // Media
  featuredImage?: CMSImage;
  gallery?: CMSImage[];

  // Registration
  requiresRegistration?: boolean;
  registrationDeadline?: string;
  maxParticipants?: number;
  registrationLink?: string;

  // Contact
  organizer?: AuthorReference;
  contactEmail?: string;

  // Publishing
  status: "draft" | "published" | "cancelled";
  publishedAt?: string;
}

// ============================================================================
// Member Schema
// ============================================================================

/**
 * Member/Person Content Type
 *
 * Used for board members, committee chairs, and featured members.
 * Can be referenced from events, newsletters, and other content.
 *
 * EDITING EXPERIENCE:
 * - Profile photo upload with cropping
 * - Role selection from predefined list
 * - Bio with rich text formatting
 * - Social links fields
 */
export interface CMSMember extends CMSDocument {
  _type: "member";

  // Basic info
  name: string;
  slug: { current: string };
  email?: string;
  phone?: string;

  // Profile
  photo?: CMSImage;
  bio?: PortableTextBlock[];
  shortBio?: string; // For listings

  // Role in club
  role?:
    | "commodore"
    | "vice-commodore"
    | "rear-commodore"
    | "secretary"
    | "treasurer"
    | "board-member"
    | "committee-chair"
    | "member";
  title?: string; // Custom title
  committees?: string[];
  boardMember?: boolean;
  yearsOnBoard?: number;

  // Sailing info
  boatName?: string;
  boatType?: string;

  // Visibility
  showInDirectory?: boolean;
  showContactInfo?: boolean;
}

// ============================================================================
// Gallery Image Schema
// ============================================================================

/**
 * Gallery Image Content Type
 *
 * Individual photos in the gallery with metadata.
 * Supports albums, tagging, and attribution.
 *
 * EDITING EXPERIENCE:
 * - Drag-and-drop image upload
 * - Bulk upload support
 * - Album assignment dropdown
 * - Auto-extracted EXIF data
 * - Photographer credit field
 */
export interface CMSGalleryImage extends CMSDocument {
  _type: "galleryImage";

  // Image
  image: CMSImage;
  title: string;
  caption?: string;

  // Organization
  album: "racing" | "cruising" | "social" | "clubhouse" | "historical";
  tags?: string[];
  featured?: boolean;

  // Metadata
  dateTaken?: string;
  photographer?: string;
  photographerRef?: AuthorReference;
  event?: AuthorReference; // Link to related event

  // Technical (often auto-populated from EXIF)
  camera?: string;
  location?: string;

  // Publishing
  status: "draft" | "published";
  publishedAt?: string;
}

/**
 * Gallery Album Content Type
 *
 * Album collections for organizing photos.
 */
export interface CMSAlbum extends CMSDocument {
  _type: "album";

  title: string;
  slug: { current: string };
  description?: string;
  coverImage?: CMSImage;
  category: "racing" | "cruising" | "social" | "clubhouse" | "historical";
  featured?: boolean;
  sortOrder?: number;
}

// ============================================================================
// Newsletter Schema
// ============================================================================

/**
 * Newsletter Content Type
 *
 * Club newsletters (The Prior Edition) with articles and announcements.
 *
 * EDITING EXPERIENCE:
 * - WYSIWYG editor for content
 * - Section organization with drag-and-drop
 * - Author selection
 * - Schedule publishing
 * - Preview before sending
 */
export interface CMSNewsletter extends CMSDocument {
  _type: "newsletter";

  // Basic info
  title: string;
  slug: { current: string };
  issue: string; // e.g., "January 2025"
  issueNumber?: number;

  // Content
  introduction?: PortableTextBlock[];
  sections: CMSNewsletterSection[];

  // Cover
  coverImage?: CMSImage;
  featuredArticle?: AuthorReference;

  // Authors
  editor?: AuthorReference;
  contributors?: AuthorReference[];

  // Publishing
  status: "draft" | "scheduled" | "published";
  publishedAt?: string;
  scheduledFor?: string;

  // Distribution
  sendToMailingList?: boolean;
  pdfVersion?: {
    _type: "file";
    asset: { _ref: string };
  };
}

/**
 * Newsletter Section
 */
export interface CMSNewsletterSection {
  _type: "newsletterSection";
  _key: string;
  title: string;
  content: PortableTextBlock[];
  image?: CMSImage;
  author?: AuthorReference;
  category?:
    | "commodore-message"
    | "racing"
    | "cruising"
    | "social"
    | "announcements"
    | "classifieds";
}

// ============================================================================
// Page Content Schema
// ============================================================================

/**
 * Page Content Type
 *
 * Generic pages with flexible content blocks.
 * Used for About, Membership info, Resources, etc.
 *
 * EDITING EXPERIENCE:
 * - Drag-and-drop content blocks
 * - Multiple block types (text, image, CTA, etc.)
 * - SEO fields
 * - Preview mode
 */
export interface CMSPage extends CMSDocument {
  _type: "page";

  // Basic info
  title: string;
  slug: { current: string };

  // SEO
  seo?: {
    title?: string;
    description?: string;
    image?: CMSImage;
    noIndex?: boolean;
  };

  // Hero section
  hero?: {
    title: string;
    subtitle?: string;
    image?: CMSImage;
    cta?: {
      text: string;
      link: string;
    };
  };

  // Content blocks (modular)
  content?: CMSContentBlock[];

  // Settings
  status: "draft" | "published";
  publishedAt?: string;
  template?: "default" | "landing" | "sidebar";
}

/**
 * Content Block Types
 *
 * Modular content blocks that editors can combine to build pages.
 */
export type CMSContentBlock =
  | CMSTextBlock
  | CMSImageBlock
  | CMSCalloutBlock
  | CMSCardGridBlock
  | CMSAccordionBlock
  | CMSEmbedBlock;

export interface CMSTextBlock {
  _type: "textBlock";
  _key: string;
  content: PortableTextBlock[];
}

export interface CMSImageBlock {
  _type: "imageBlock";
  _key: string;
  image: CMSImage;
  caption?: string;
  size: "small" | "medium" | "large" | "full";
}

export interface CMSCalloutBlock {
  _type: "calloutBlock";
  _key: string;
  title: string;
  content: string;
  type: "info" | "warning" | "success";
  cta?: {
    text: string;
    link: string;
  };
}

export interface CMSCardGridBlock {
  _type: "cardGridBlock";
  _key: string;
  title?: string;
  cards: Array<{
    _key: string;
    title: string;
    description: string;
    image?: CMSImage;
    link?: string;
  }>;
  columns: 2 | 3 | 4;
}

export interface CMSAccordionBlock {
  _type: "accordionBlock";
  _key: string;
  title?: string;
  items: Array<{
    _key: string;
    question: string;
    answer: PortableTextBlock[];
  }>;
}

export interface CMSEmbedBlock {
  _type: "embedBlock";
  _key: string;
  embedType: "youtube" | "map" | "form" | "calendar";
  embedCode?: string;
  url?: string;
}

// ============================================================================
// Announcement Schema
// ============================================================================

/**
 * Announcement Content Type
 *
 * Short-term announcements that appear on homepage or site-wide.
 *
 * EDITING EXPERIENCE:
 * - Simple text input
 * - Date range picker
 * - Priority/style selection
 * - One-click dismiss
 */
export interface CMSAnnouncement extends CMSDocument {
  _type: "announcement";

  title: string;
  message: string;
  link?: string;
  linkText?: string;

  // Display
  style: "info" | "warning" | "urgent" | "success";
  dismissible?: boolean;
  position: "banner" | "popup" | "sidebar";

  // Scheduling
  startDate: string;
  endDate: string;

  // Targeting
  showOn?: ("home" | "events" | "racing" | "all")[];

  status: "draft" | "active" | "expired";
}

// ============================================================================
// Site Settings Schema
// ============================================================================

/**
 * Site Settings (Singleton)
 *
 * Global site configuration managed by admins.
 *
 * EDITING EXPERIENCE:
 * - Tab-organized settings
 * - Logo/favicon upload
 * - Social links
 * - Contact info
 */
export interface CMSSiteSettings extends CMSDocument {
  _type: "siteSettings";

  // Branding
  siteName: string;
  tagline: string;
  logo?: CMSImage;
  favicon?: CMSImage;

  // Contact
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  email: string;

  // Social
  socialLinks?: Array<{
    platform: "facebook" | "instagram" | "youtube" | "twitter";
    url: string;
  }>;

  // SEO defaults
  defaultSeo?: {
    title: string;
    description: string;
    image?: CMSImage;
  };

  // Features
  maintenanceMode?: boolean;
  maintenanceMessage?: string;
}
