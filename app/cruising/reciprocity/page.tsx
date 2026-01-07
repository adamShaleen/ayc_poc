import { Metadata } from "next";
import Link from "next/link";
import { Ship, Anchor } from "lucide-react";
import { reciprocityClubs } from "@/lib/data/club";
import { ReciprocityContent } from "./ReciprocityContent";

export const metadata: Metadata = {
  title: "Reciprocity | Astoria Yacht Club",
  description:
    "Access yacht clubs throughout the Pacific Northwest with your AYC membership through our reciprocity program.",
};

export default function ReciprocityPage() {
  // Get unique states for filtering
  const states = Array.from(
    new Set(reciprocityClubs.map((club) => club.state))
  ).sort();

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-navy-800 py-16 text-white">
        <div className="absolute inset-0 bg-[url('/images/waves-pattern.svg')] opacity-5" />
        <div className="container relative mx-auto px-4">
          <nav className="mb-4 text-sm">
            <Link href="/events" className="text-white/60 hover:text-white">
              Cruising
            </Link>
            <span className="mx-2 text-white/40">/</span>
            <span className="text-white/80">Reciprocity</span>
          </nav>
          <div className="flex items-center gap-3 text-ocean-400">
            <Ship className="h-8 w-8" />
            <span className="text-lg font-semibold">
              {reciprocityClubs.length} Reciprocal Clubs
            </span>
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Reciprocity Program
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Your AYC membership opens doors to yacht clubs throughout the
            Pacific Northwest and beyond. Enjoy guest privileges at our partner
            clubs.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold text-navy-800">
            How Reciprocity Works
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <HowItWorksCard
              step={1}
              title="Carry Your Card"
              description="Always bring your current AYC membership card when visiting reciprocal clubs."
            />
            <HowItWorksCard
              step={2}
              title="Call Ahead"
              description="Contact the host club before your visit to confirm availability and any specific requirements."
            />
            <HowItWorksCard
              step={3}
              title="Enjoy Privileges"
              description="Present your membership card and enjoy access to facilities, guest moorage, and club amenities."
            />
          </div>

          <div className="mt-8 rounded-xl border border-ocean-200 bg-ocean-50 p-6">
            <h3 className="mb-2 font-semibold text-navy-800">
              Important Notes
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ocean-500" />
                Reciprocity privileges may vary by club and season. Always
                confirm before visiting.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ocean-500" />
                Some clubs may have restrictions on reciprocal access during
                major events.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ocean-500" />
                Guest moorage is typically limited to 2-3 nights. Extended stays
                require advance approval.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ocean-500" />
                Be a good ambassador for AYC — reciprocity works both ways!
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Map and Club List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <ReciprocityContent clubs={reciprocityClubs} states={states} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="rounded-xl bg-navy-800 p-8 text-center text-white">
            <Anchor className="mx-auto mb-4 h-10 w-10 text-ocean-400" />
            <h2 className="mb-2 text-xl font-bold">Planning a Cruise?</h2>
            <p className="mb-6 text-white/80">
              Our Cruising Committee can help you plan your trip and make the
              most of our reciprocity network.
            </p>
            <Link
              href="/about/board"
              className="inline-flex items-center gap-2 rounded-lg bg-ocean-500 px-6 py-3 font-medium text-white transition-colors hover:bg-ocean-600"
            >
              Contact Cruising Chair
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function HowItWorksCard({
  step,
  title,
  description,
}: {
  step: number;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-ocean-500 text-lg font-bold text-white">
        {step}
      </div>
      <div>
        <h3 className="font-semibold text-navy-800">{title}</h3>
        <p className="mt-1 text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}
