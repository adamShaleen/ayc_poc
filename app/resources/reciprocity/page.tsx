import { Metadata } from "next";
import Link from "next/link";
import {
  Globe,
  Ship,
  Anchor,
  MapPin,
  Phone,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { reciprocityClubs } from "@/lib/data/club";

export const metadata: Metadata = {
  title: "Reciprocity | Astoria Yacht Club",
  description:
    "Access yacht clubs throughout the Pacific Northwest and beyond with your AYC membership through our reciprocity program.",
};

export default function ResourcesReciprocityPage() {
  const clubsByState = reciprocityClubs.reduce(
    (acc, club) => {
      if (!acc[club.state]) {
        acc[club.state] = [];
      }
      acc[club.state].push(club);
      return acc;
    },
    {} as Record<string, typeof reciprocityClubs>
  );

  const states = Object.keys(clubsByState).sort();

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-navy-800 py-16 text-white">
        <div className="absolute inset-0 bg-[url('/images/waves-pattern.svg')] opacity-5" />
        <Container className="relative">
          <nav className="mb-4 text-sm">
            <Link href="/resources" className="text-white/60 hover:text-white">
              Resources
            </Link>
            <span className="mx-2 text-white/40">/</span>
            <span className="text-white/80">Reciprocity</span>
          </nav>

          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <Globe className="h-10 w-10 text-ocean-400" />
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                  Reciprocity
                </h1>
              </div>
              <p className="max-w-2xl text-lg text-white/80">
                Your AYC membership opens doors to yacht clubs throughout the
                Pacific Northwest and beyond. Enjoy guest privileges at{" "}
                {reciprocityClubs.length}+ partner clubs.
              </p>
            </div>

            <div className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 backdrop-blur-sm">
              <Ship className="h-6 w-6 text-ocean-400" />
              <div>
                <p className="text-2xl font-bold">{reciprocityClubs.length}</p>
                <p className="text-sm text-white/70">Reciprocal Clubs</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* How It Works */}
      <section className="border-b border-gray-200 bg-white py-8">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-ocean-500 text-lg font-bold text-white">
                1
              </div>
              <div>
                <h3 className="font-semibold text-navy-800">Carry Your Card</h3>
                <p className="text-sm text-gray-600">
                  Always bring your current AYC membership card when visiting
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-ocean-500 text-lg font-bold text-white">
                2
              </div>
              <div>
                <h3 className="font-semibold text-navy-800">Call Ahead</h3>
                <p className="text-sm text-gray-600">
                  Contact the host club to confirm availability and requirements
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-ocean-500 text-lg font-bold text-white">
                3
              </div>
              <div>
                <h3 className="font-semibold text-navy-800">
                  Enjoy Privileges
                </h3>
                <p className="text-sm text-gray-600">
                  Access facilities, guest moorage, and club amenities
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Important Notes */}
      <section className="py-8">
        <Container>
          <div className="rounded-xl border border-ocean-200 bg-ocean-50 p-6">
            <h3 className="mb-3 font-semibold text-navy-800">
              Important Notes
            </h3>
            <ul className="grid gap-2 text-sm text-gray-600 sm:grid-cols-2">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ocean-500" />
                Reciprocity privileges may vary by club and season
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ocean-500" />
                Some clubs restrict access during major events
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ocean-500" />
                Guest moorage typically limited to 2-3 nights
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ocean-500" />
                Be a good ambassador for AYC — reciprocity works both ways!
              </li>
            </ul>
          </div>
        </Container>
      </section>

      {/* Club Directory */}
      <section className="py-8">
        <Container>
          <div className="mb-8 flex items-center gap-3">
            <MapPin className="h-6 w-6 text-ocean-500" />
            <h2 className="text-2xl font-bold text-navy-800">Club Directory</h2>
          </div>

          <div className="space-y-8">
            {states.map((state) => (
              <div key={state}>
                <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-navy-800">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ocean-100 text-sm font-bold text-ocean-700">
                    {clubsByState[state].length}
                  </span>
                  {state}
                </h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {clubsByState[state].map((club) => (
                    <ClubCard key={club.name} club={club} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Full Directory Link */}
      <section className="bg-white py-8">
        <Container>
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 text-center">
            <Globe className="mx-auto mb-4 h-10 w-10 text-ocean-500" />
            <h2 className="mb-2 text-xl font-bold text-navy-800">
              View Interactive Map
            </h2>
            <p className="mb-6 text-gray-600">
              See all reciprocal clubs on an interactive map with detailed
              information and filtering options.
            </p>
            <Button variant="primary" asChild>
              <Link href="/cruising/reciprocity">
                Open Full Directory
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-navy-700 py-12 text-white">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Anchor className="mx-auto mb-4 h-10 w-10 text-ocean-400" />
            <h2 className="mb-4 text-2xl font-bold">Planning a Cruise?</h2>
            <p className="mb-6 text-white/80">
              Our Cruising Committee can help you plan your trip and make the
              most of our reciprocity network. They can provide introductions
              and tips for visiting specific clubs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="primary"
                className="bg-ocean-500 hover:bg-ocean-600"
                asChild
              >
                <a href="mailto:cruising@astoriayachtclub.org">
                  Contact Cruising Committee
                </a>
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <Link href="/events/cruising">View Cruising Events</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

interface Club {
  name: string;
  location: string;
  state: string;
  phone?: string;
  website?: string;
  amenities: string[];
}

function ClubCard({ club }: { club: Club }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="mb-2 flex items-start justify-between">
        <div>
          <h4 className="font-semibold text-navy-800">{club.name}</h4>
          <p className="text-sm text-gray-500">{club.location}</p>
        </div>
        <Ship className="h-5 w-5 text-ocean-400" />
      </div>

      <div className="mb-3 flex flex-wrap gap-1">
        {club.amenities.slice(0, 3).map((amenity) => (
          <span
            key={amenity}
            className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600"
          >
            {amenity}
          </span>
        ))}
        {club.amenities.length > 3 && (
          <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
            +{club.amenities.length - 3} more
          </span>
        )}
      </div>

      <div className="flex items-center gap-3 text-sm">
        {club.phone && (
          <a
            href={`tel:${club.phone}`}
            className="flex items-center gap-1 text-gray-600 hover:text-ocean-600"
          >
            <Phone className="h-3 w-3" />
            {club.phone}
          </a>
        )}
        {club.website && (
          <a
            href={club.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-ocean-600 hover:text-ocean-700"
          >
            <ExternalLink className="h-3 w-3" />
            Website
          </a>
        )}
      </div>
    </div>
  );
}
