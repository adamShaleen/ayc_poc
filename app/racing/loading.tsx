/**
 * Racing Page Loading State
 *
 * Shows skeleton placeholders for racing schedules and results.
 */

import { Skeleton, SkeletonTableRow } from "@/components/ui";

export default function RacingLoading() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero skeleton */}
      <section className="relative bg-navy-800 py-16">
        <div className="container mx-auto px-4">
          <div className="h-12 w-48 animate-pulse rounded-lg bg-white/10" />
          <div className="mt-4 h-6 w-96 animate-pulse rounded-lg bg-white/10" />
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 py-12">
        {/* Tabs skeleton */}
        <div className="mb-8 flex gap-2">
          <Skeleton className="h-12 w-40 rounded-lg" />
          <Skeleton className="h-12 w-40 rounded-lg" />
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Schedule section */}
          <div className="lg:col-span-2">
            <Skeleton className="mb-4 h-8 w-48" />
            <div className="rounded-xl border border-gray-200 bg-white p-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <SkeletonTableRow key={i} columns={4} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <Skeleton className="mb-4 h-8 w-32" />
            <div className="space-y-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-gray-200 bg-white p-4"
                >
                  <Skeleton className="mb-2 h-5 w-24" />
                  <Skeleton className="h-4 w-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
