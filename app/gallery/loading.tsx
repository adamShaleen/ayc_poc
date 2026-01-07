/**
 * Gallery Page Loading State
 *
 * Shows a skeleton grid while gallery images load.
 * Mimics the masonry layout structure for smooth transitions.
 */

import { SkeletonGallery, Skeleton } from "@/components/ui";

export default function GalleryLoading() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero skeleton */}
      <section className="relative bg-navy-800 py-16">
        <div className="container mx-auto px-4">
          <div className="h-12 w-48 animate-pulse rounded-lg bg-white/10" />
          <div className="mt-4 h-6 w-80 animate-pulse rounded-lg bg-white/10" />
        </div>
      </section>

      {/* Gallery content */}
      <section className="container mx-auto px-4 py-12">
        {/* Filters skeleton */}
        <div className="mb-8 rounded-xl border border-gray-200 bg-white p-4">
          <Skeleton className="mb-4 h-10 w-full rounded-lg" />
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <Skeleton key={i} className="h-8 w-20 rounded-full" />
            ))}
          </div>
        </div>

        {/* Results count skeleton */}
        <Skeleton className="mb-6 h-4 w-32" />

        {/* Gallery grid skeleton */}
        <SkeletonGallery count={9} />
      </section>
    </main>
  );
}
