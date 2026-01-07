"use client";

/**
 * CMS Preview Bar Component
 *
 * This component appears when viewing the site in preview/draft mode.
 * It provides editors with:
 * - Visual indicator that they're in preview mode
 * - Quick link to edit the current page in the CMS
 * - Button to exit preview mode
 *
 * HOW IT WORKS:
 * 1. When an editor clicks "Preview" in Sanity Studio, a special URL is generated
 * 2. The URL triggers the /api/preview route, which enables Next.js draft mode
 * 3. This component detects draft mode and displays the preview bar
 * 4. The "Edit" button links directly to the document in Sanity Studio
 *
 * IMPLEMENTATION NOTE:
 * In a real implementation, you would use the `draftMode()` function from
 * 'next/headers' in a Server Component to check if preview is active,
 * then pass that state to this client component.
 */

import { useState } from "react";
import { Edit3, X, ExternalLink, Eye } from "lucide-react";
import { getCMSEditUrl, getStudioUrl } from "@/lib/cms/client";

interface PreviewBarProps {
  /** The CMS document ID for the current page */
  documentId?: string;
  /** The document type (e.g., "event", "page", "newsletter") */
  documentType?: string;
  /** Whether preview mode is currently active */
  isPreview?: boolean;
}

export function PreviewBar({
  documentId,
  documentType = "page",
  isPreview = false,
}: PreviewBarProps) {
  const [isDismissed, setIsDismissed] = useState(false);

  // Don't show if not in preview mode or if dismissed
  if (!isPreview || isDismissed) {
    return null;
  }

  const editUrl = documentId
    ? getCMSEditUrl(documentId, documentType)
    : getStudioUrl();

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
            <Eye className="h-4 w-4" />
          </div>
          <div>
            <p className="text-sm font-semibold">Preview Mode Active</p>
            <p className="text-xs text-white/80">
              You&apos;re viewing unpublished content
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Edit in CMS button */}
          <a
            href={editUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg bg-white/20 px-4 py-2 text-sm font-medium transition-colors hover:bg-white/30"
          >
            <Edit3 className="h-4 w-4" />
            Edit in CMS
            <ExternalLink className="h-3 w-3" />
          </a>

          {/* Exit Preview button */}
          <a
            href="/api/exit-preview"
            className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-orange-600 transition-colors hover:bg-white/90"
          >
            Exit Preview
          </a>

          {/* Dismiss button */}
          <button
            onClick={() => setIsDismissed(true)}
            className="rounded-full p-1 transition-colors hover:bg-white/20"
            aria-label="Dismiss preview bar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

/**
 * Edit Page Button
 *
 * A floating button that allows editors to quickly jump to the CMS
 * to edit the current page. Only visible to authenticated editors.
 */
export function EditPageButton({
  documentId,
  documentType = "page",
  show = false,
}: PreviewBarProps & { show?: boolean }) {
  if (!show) return null;

  const editUrl = documentId
    ? getCMSEditUrl(documentId, documentType)
    : getStudioUrl();

  return (
    <a
      href={editUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-navy-800 px-4 py-2 text-sm font-medium text-white shadow-lg transition-all hover:bg-navy-700 hover:shadow-xl"
      title="Edit this page in the CMS"
    >
      <Edit3 className="h-4 w-4" />
      Edit Page
    </a>
  );
}

/**
 * Demo Preview Banner
 *
 * A simplified version for the demo that shows what preview mode would look like.
 * Used on pages to demonstrate the CMS integration concept.
 */
export function DemoPreviewBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-2">
          <Eye className="h-4 w-4" />
          <span className="text-sm font-medium">
            This is a demo of preview mode — editors would see this when
            previewing unpublished changes
          </span>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="rounded p-1 hover:bg-white/20"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
