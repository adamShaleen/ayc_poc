import { Metadata } from "next";
import { PhotoUploader } from "./PhotoUploader";

export const metadata: Metadata = {
  title: "Upload Photos | Astoria Yacht Club",
  description: "Share your photos from Astoria Yacht Club events.",
};

export default function UploadPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero section */}
      <section className="relative bg-navy-800 py-12 text-white">
        <div className="absolute inset-0 bg-[url('/images/waves-pattern.svg')] opacity-5" />
        <div className="container relative mx-auto px-4">
          <nav className="mb-4">
            <a
              href="/gallery"
              className="text-sm text-white/60 transition-colors hover:text-white"
            >
              ← Back to Gallery
            </a>
          </nav>
          <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Upload Photos
          </h1>
          <p className="max-w-2xl text-lg text-white/80">
            Share your photos from club events with the AYC community. Photos
            will be reviewed before being added to the gallery.
          </p>
        </div>
      </section>

      {/* Upload form */}
      <section className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-3xl">
          <PhotoUploader />
        </div>
      </section>
    </main>
  );
}
