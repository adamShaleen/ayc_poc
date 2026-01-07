import { Metadata } from "next";
import { GalleryContent } from "./GalleryContent";

export const metadata: Metadata = {
  title: "Photo Gallery | Astoria Yacht Club",
  description:
    "Browse photos from racing events, cruises, social gatherings, and our beautiful clubhouse at Astoria Yacht Club.",
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero section */}
      <section className="relative bg-navy-800 py-16 text-white">
        <div className="absolute inset-0 bg-[url('/images/waves-pattern.svg')] opacity-5" />
        <div className="container relative mx-auto px-4">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Photo Gallery
          </h1>
          <p className="max-w-2xl text-lg text-white/80">
            Explore our collection of photos from racing events, cruising
            adventures, social gatherings, and over 90 years of club history.
          </p>
        </div>
      </section>

      {/* Gallery content */}
      <section className="container mx-auto px-4 py-12">
        <GalleryContent />
      </section>

      {/* Upload CTA */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-2xl font-bold text-navy-800">
            Have Photos to Share?
          </h2>
          <p className="mx-auto mb-6 max-w-xl text-gray-600">
            Members can upload their photos from club events to share with the
            community.
          </p>
          <a
            href="/gallery/upload"
            className="inline-flex items-center gap-2 rounded-lg bg-ocean-500 px-6 py-3 font-medium text-white transition-colors hover:bg-ocean-600"
          >
            Upload Photos
          </a>
        </div>
      </section>
    </main>
  );
}
