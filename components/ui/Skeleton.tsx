/**
 * Skeleton Loading Components
 *
 * These components provide visual placeholders while content loads.
 *
 * WHY THIS MATTERS:
 * - Improves perceived performance
 * - Reduces Cumulative Layout Shift (CLS)
 * - Better user experience than spinners for content-heavy pages
 * - Matches the shape of actual content for smoother transitions
 *
 * PERFORMANCE IMPACT:
 * - Prevents layout shifts when content loads (improves CLS score)
 * - Gives users immediate feedback that content is loading
 * - Animation is GPU-accelerated for smooth performance
 */

import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
}

/**
 * Base skeleton component with animated pulse effect
 */
export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-gray-200", className)}
      // aria-hidden prevents screen readers from announcing loading state repeatedly
      aria-hidden="true"
    />
  );
}

/**
 * Text line skeleton - mimics a line of text
 */
export function SkeletonText({ className }: SkeletonProps) {
  return <Skeleton className={cn("h-4 w-full", className)} />;
}

/**
 * Heading skeleton - mimics a heading
 */
export function SkeletonHeading({ className }: SkeletonProps) {
  return <Skeleton className={cn("h-8 w-3/4", className)} />;
}

/**
 * Card skeleton - mimics a content card
 */
export function SkeletonCard({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-gray-200 bg-white p-4",
        className
      )}
    >
      <Skeleton className="mb-4 h-40 w-full rounded-lg" />
      <Skeleton className="mb-2 h-6 w-3/4" />
      <Skeleton className="mb-2 h-4 w-full" />
      <Skeleton className="h-4 w-2/3" />
    </div>
  );
}

/**
 * Avatar skeleton - mimics a user avatar
 */
export function SkeletonAvatar({ className }: SkeletonProps) {
  return <Skeleton className={cn("h-12 w-12 rounded-full", className)} />;
}

/**
 * Button skeleton - mimics a button
 */
export function SkeletonButton({ className }: SkeletonProps) {
  return <Skeleton className={cn("h-10 w-24 rounded-lg", className)} />;
}

/**
 * Image skeleton - mimics an image with aspect ratio
 */
export function SkeletonImage({ className }: SkeletonProps) {
  return (
    <Skeleton className={cn("aspect-video w-full rounded-lg", className)} />
  );
}

/**
 * Table row skeleton - mimics a table row
 */
export function SkeletonTableRow({ columns = 4 }: { columns?: number }) {
  return (
    <div className="flex items-center gap-4 border-b border-gray-100 py-3">
      {Array.from({ length: columns }).map((_, i) => (
        <Skeleton key={i} className="h-4 flex-1" />
      ))}
    </div>
  );
}

/**
 * Gallery grid skeleton - mimics a photo gallery
 */
export function SkeletonGallery({ count = 6 }: { count?: number }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <Skeleton
          key={i}
          className={cn(
            "rounded-lg",
            // Vary heights to mimic masonry layout
            i % 3 === 0 ? "h-64" : i % 3 === 1 ? "h-48" : "h-56"
          )}
        />
      ))}
    </div>
  );
}

/**
 * Event card skeleton - mimics an event card
 */
export function SkeletonEventCard() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4">
      <div className="flex gap-4">
        <Skeleton className="h-16 w-16 flex-shrink-0 rounded-lg" />
        <div className="flex-1">
          <Skeleton className="mb-2 h-5 w-3/4" />
          <Skeleton className="mb-2 h-4 w-1/2" />
          <Skeleton className="h-4 w-full" />
        </div>
      </div>
    </div>
  );
}

/**
 * Calendar skeleton - mimics a calendar grid
 */
export function SkeletonCalendar() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <Skeleton className="h-8 w-32" />
        <div className="flex gap-2">
          <Skeleton className="h-8 w-20" />
          <Skeleton className="h-8 w-20" />
          <Skeleton className="h-8 w-20" />
        </div>
      </div>
      {/* Day headers */}
      <div className="mb-2 grid grid-cols-7 gap-1">
        {Array.from({ length: 7 }).map((_, i) => (
          <Skeleton key={i} className="h-8" />
        ))}
      </div>
      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: 35 }).map((_, i) => (
          <Skeleton key={i} className="h-24 rounded" />
        ))}
      </div>
    </div>
  );
}

/**
 * Stats card skeleton - mimics a statistics card
 */
export function SkeletonStats({ count = 4 }: { count?: number }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="rounded-xl bg-white p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="flex-1">
              <Skeleton className="mb-2 h-6 w-16" />
              <Skeleton className="h-4 w-24" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
