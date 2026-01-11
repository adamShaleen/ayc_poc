"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { format } from "date-fns";
import {
  Users,
  Ship,
  Mail,
  Filter,
  X,
  Plus,
  Check,
  User,
  Calendar,
  Sailboat,
  Trophy,
  Compass,
  ChevronRight,
  Anchor,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import {
  CrewListing,
  crewListings,
  experienceLevels,
  availabilityOptions,
} from "@/lib/data/racing";
import { cn } from "@/lib/utils";

type ListingType = "captain" | "crew" | "all";
type ExperienceLevel = "beginner" | "intermediate" | "advanced" | "all";

export default function ResourcesCrewPage() {
  const [listingType, setListingType] = useState<ListingType>("all");
  const [experienceFilter, setExperienceFilter] =
    useState<ExperienceLevel>("all");
  const [contactListing, setContactListing] = useState<CrewListing | null>(
    null
  );

  const filteredListings = useMemo(() => {
    return crewListings.filter((listing) => {
      if (listingType !== "all" && listing.type !== listingType) return false;
      if (experienceFilter !== "all" && listing.experience !== experienceFilter)
        return false;
      return true;
    });
  }, [listingType, experienceFilter]);

  const captains = filteredListings.filter((l) => l.type === "captain");
  const crew = filteredListings.filter((l) => l.type === "crew");

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
            <span className="text-white/80">Crew Connections</span>
          </nav>

          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <Users className="h-10 w-10 text-ocean-400" />
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                  Crew Connections
                </h1>
              </div>
              <p className="max-w-2xl text-lg text-white/80">
                Connect with fellow AYC members to find sailing opportunities.
                Whether you&apos;re looking for crew or a boat to sail on,
                we&apos;ll help you get on the water.
              </p>
            </div>

            <div className="flex gap-3">
              <Button variant="primary" asChild>
                <Link href="/racing/crew#signup">
                  <Plus className="mr-2 h-4 w-4" />
                  Post a Listing
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* How It Works */}
      <section className="border-b border-gray-200 bg-white py-8">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-ocean-100 text-lg font-bold text-ocean-600">
                1
              </div>
              <div>
                <h3 className="font-semibold text-navy-800">Browse Listings</h3>
                <p className="text-sm text-gray-600">
                  Find captains looking for crew or sailors looking for boats
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-ocean-100 text-lg font-bold text-ocean-600">
                2
              </div>
              <div>
                <h3 className="font-semibold text-navy-800">Make Contact</h3>
                <p className="text-sm text-gray-600">
                  Reach out via email to introduce yourself and your interests
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-ocean-100 text-lg font-bold text-ocean-600">
                3
              </div>
              <div>
                <h3 className="font-semibold text-navy-800">Get Sailing!</h3>
                <p className="text-sm text-gray-600">
                  Meet up, go sailing, and enjoy time on the water together
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Activity Types */}
      <section className="py-8">
        <Container>
          <div className="mb-6 flex items-center gap-3">
            <Anchor className="h-5 w-5 text-ocean-500" />
            <h2 className="text-lg font-semibold text-navy-800">
              Find Crew For...
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <Link
              href="/racing/crew"
              className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 transition-all hover:border-ocean-300 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ocean-100">
                <Trophy className="h-6 w-6 text-ocean-600" />
              </div>
              <div>
                <h3 className="font-semibold text-navy-800">Racing</h3>
                <p className="text-sm text-gray-600">
                  Wednesday nights & regattas
                </p>
              </div>
              <ChevronRight className="ml-auto h-5 w-5 text-gray-400" />
            </Link>
            <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
                <Compass className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-navy-800">Cruising</h3>
                <p className="text-sm text-gray-600">Rallies & day sails</p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brass-100">
                <Ship className="h-6 w-6 text-brass-600" />
              </div>
              <div>
                <h3 className="font-semibold text-navy-800">Day Sailing</h3>
                <p className="text-sm text-gray-600">Casual sailing anytime</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Filters */}
      <section className="border-y border-gray-200 bg-white py-4">
        <Container>
          <div className="flex flex-wrap items-center gap-4">
            <Filter className="h-5 w-5 text-gray-400" />

            {/* Listing Type */}
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-600">Show:</span>
              <div className="flex rounded-lg border border-gray-200 bg-gray-50 p-1">
                {[
                  { value: "all", label: "All" },
                  { value: "captain", label: "Captains" },
                  { value: "crew", label: "Crew" },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setListingType(option.value as ListingType)}
                    className={cn(
                      "rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
                      listingType === option.value
                        ? "bg-ocean-500 text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    )}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Experience Level */}
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-600">
                Experience:
              </span>
              <select
                value={experienceFilter}
                onChange={(e) =>
                  setExperienceFilter(e.target.value as ExperienceLevel)
                }
                className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm text-gray-600 focus:border-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-500/20"
              >
                <option value="all">All Levels</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>

            {/* Results count */}
            <div className="ml-auto text-sm text-gray-500">
              {filteredListings.length} listing
              {filteredListings.length !== 1 && "s"}
            </div>
          </div>
        </Container>
      </section>

      {/* Listings */}
      <section className="py-12">
        <Container>
          {filteredListings.length > 0 ? (
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Captains Section */}
              {(listingType === "all" || listingType === "captain") &&
                captains.length > 0 && (
                  <div>
                    <div className="mb-6 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-ocean-100">
                        <Ship className="h-5 w-5 text-ocean-600" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-navy-800">
                          Captains Looking for Crew
                        </h2>
                        <p className="text-sm text-gray-500">
                          {captains.length} listing
                          {captains.length !== 1 && "s"}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      {captains.map((listing) => (
                        <CrewCard
                          key={listing.id}
                          listing={listing}
                          onContact={setContactListing}
                        />
                      ))}
                    </div>
                  </div>
                )}

              {/* Crew Section */}
              {(listingType === "all" || listingType === "crew") &&
                crew.length > 0 && (
                  <div>
                    <div className="mb-6 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
                        <User className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-navy-800">
                          Crew Looking for Boats
                        </h2>
                        <p className="text-sm text-gray-500">
                          {crew.length} listing{crew.length !== 1 && "s"}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      {crew.map((listing) => (
                        <CrewCard
                          key={listing.id}
                          listing={listing}
                          onContact={setContactListing}
                        />
                      ))}
                    </div>
                  </div>
                )}
            </div>
          ) : (
            <div className="rounded-xl border-2 border-dashed border-gray-200 py-12 text-center">
              <Users className="mx-auto mb-4 h-12 w-12 text-gray-300" />
              <h3 className="mb-2 text-lg font-semibold text-gray-700">
                No listings found
              </h3>
              <p className="text-gray-500">
                Try adjusting your filters to see more results
              </p>
            </div>
          )}
        </Container>
      </section>

      {/* Post Listing CTA */}
      <section className="bg-ocean-500 py-12">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Plus className="mx-auto mb-4 h-10 w-10 text-white/80" />
            <h2 className="mb-4 text-2xl font-bold text-white">
              Add Your Listing
            </h2>
            <p className="mb-6 text-white/90">
              Whether you&apos;re a captain looking for crew or a sailor looking
              for a boat, post your listing to connect with other members.
            </p>
            <Button
              variant="primary"
              size="lg"
              className="bg-white text-ocean-600 hover:bg-gray-100"
              asChild
            >
              <Link href="/racing/crew#signup">Post a Listing</Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Tips Section */}
      <section className="py-12">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-2xl font-bold text-navy-800">
              Tips for Success
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <Ship className="mb-3 h-8 w-8 text-ocean-500" />
                <h3 className="mb-2 font-semibold text-navy-800">
                  For Captains
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Be clear about experience level needed</li>
                  <li>• Describe your typical sailing activities</li>
                  <li>• Mention what crew can expect to learn</li>
                  <li>• Respond promptly to inquiries</li>
                </ul>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <User className="mb-3 h-8 w-8 text-green-500" />
                <h3 className="mb-2 font-semibold text-navy-800">For Crew</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Be honest about your experience level</li>
                  <li>• Show enthusiasm and willingness to learn</li>
                  <li>• Be reliable - show up when you commit</li>
                  <li>• Ask questions and stay engaged</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Modal */}
      {contactListing && (
        <ContactModal
          listing={contactListing}
          onClose={() => setContactListing(null)}
        />
      )}
    </main>
  );
}

function CrewCard({
  listing,
  onContact,
}: {
  listing: CrewListing;
  onContact: (listing: CrewListing) => void;
}) {
  const expConfig = experienceLevels[listing.experience];

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {listing.type === "captain" ? (
            <>
              <Ship className="h-4 w-4 text-ocean-600" />
              <span className="text-sm font-medium text-ocean-700">
                Captain
              </span>
            </>
          ) : (
            <>
              <User className="h-4 w-4 text-green-600" />
              <span className="text-sm font-medium text-green-700">Crew</span>
            </>
          )}
        </div>
        <span
          className={cn(
            "rounded-full px-2.5 py-0.5 text-xs font-medium",
            expConfig.color
          )}
        >
          {expConfig.label}
        </span>
      </div>

      <h3 className="mb-1 font-semibold text-navy-800">{listing.name}</h3>

      {listing.type === "captain" && listing.boatName && (
        <div className="mb-2 flex items-center gap-2 text-sm text-gray-600">
          <Sailboat className="h-4 w-4" />
          <span>
            {listing.boatName} ({listing.boatType})
          </span>
        </div>
      )}

      <p className="mb-3 text-sm text-gray-600 line-clamp-2">
        {listing.description}
      </p>

      <div className="mb-3 flex flex-wrap gap-1.5">
        {listing.availability.map((avail) => {
          const option = availabilityOptions.find((o) => o.value === avail);
          return (
            <span
              key={avail}
              className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600"
            >
              {option?.label || avail}
            </span>
          );
        })}
      </div>

      <div className="flex items-center justify-between">
        <span className="flex items-center gap-1 text-xs text-gray-500">
          <Calendar className="h-3 w-3" />
          {format(listing.createdAt, "MMM d, yyyy")}
        </span>
        <Button variant="outline" size="sm" onClick={() => onContact(listing)}>
          <Mail className="mr-1 h-3 w-3" />
          Contact
        </Button>
      </div>
    </div>
  );
}

function ContactModal({
  listing,
  onClose,
}: {
  listing: CrewListing;
  onClose: () => void;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(listing.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-navy-800">
              Contact {listing.name}
            </h2>
            <button
              onClick={onClose}
              className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <p className="mb-6 text-gray-600">
            Send an email to connect with {listing.name.split(" ")[0]} about
            sailing opportunities.
          </p>

          <div className="mb-6 flex items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 p-4">
            <Mail className="h-5 w-5 flex-shrink-0 text-gray-400" />
            <span className="flex-1 font-medium text-navy-800">
              {listing.email}
            </span>
            <button
              onClick={handleCopyEmail}
              className={cn(
                "rounded-lg px-3 py-1.5 text-sm font-medium transition-colors",
                copied
                  ? "bg-green-100 text-green-700"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              )}
            >
              {copied ? (
                <>
                  <Check className="mr-1 inline h-4 w-4" />
                  Copied!
                </>
              ) : (
                "Copy"
              )}
            </button>
          </div>

          <div className="flex gap-3">
            <Button variant="primary" className="flex-1" asChild>
              <a href={`mailto:${listing.email}`}>
                <Mail className="mr-2 h-4 w-4" />
                Send Email
              </a>
            </Button>
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
