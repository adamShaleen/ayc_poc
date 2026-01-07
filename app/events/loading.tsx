/**
 * Events Page Loading State
 *
 * This file is automatically used by Next.js when the events page is loading.
 * It provides instant visual feedback while the actual content loads.
 *
 * WHY THIS MATTERS:
 * - Improves perceived performance
 * - Prevents Cumulative Layout Shift
 * - Users see structure immediately, not a blank page
 */

import { SkeletonCalendar } from "@/components/ui";

export default function EventsLoading() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero skeleton */}
      <section className="relative bg-navy-800 py-16">
        <div className="container mx-auto px-4">
          <div className="h-12 w-64 animate-pulse rounded-lg bg-white/10" />
          <div className="mt-4 h-6 w-96 animate-pulse rounded-lg bg-white/10" />
        </div>
      </section>

      {/* Calendar skeleton */}
      <section className="container mx-auto px-4 py-12">
        {/* Filters skeleton */}
        <div className="mb-6 flex gap-2">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="h-10 w-24 animate-pulse rounded-full bg-gray-200"
            />
          ))}
        </div>

        <SkeletonCalendar />
      </section>
    </main>
  );
}
