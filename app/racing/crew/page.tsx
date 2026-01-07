"use client";

import { useState, useMemo } from "react";
import { format } from "date-fns";
import {
  Users,
  Ship,
  Mail,
  Filter,
  X,
  ChevronDown,
  ChevronUp,
  Plus,
  Check,
  User,
  Calendar,
  Sailboat,
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

function CrewCard({
  listing,
  onContact,
}: {
  listing: CrewListing;
  onContact: (listing: CrewListing) => void;
}) {
  const expConfig = experienceLevels[listing.experience];

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white transition-all hover:shadow-lg">
      {/* Header with type indicator */}
      <div
        className={cn(
          "px-5 py-3",
          listing.type === "captain"
            ? "bg-ocean-50 border-b border-ocean-100"
            : "bg-green-50 border-b border-green-100"
        )}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {listing.type === "captain" ? (
              <>
                <Ship className="h-5 w-5 text-ocean-600" />
                <span className="font-semibold text-ocean-700">
                  Captain Seeking Crew
                </span>
              </>
            ) : (
              <>
                <User className="h-5 w-5 text-green-600" />
                <span className="font-semibold text-green-700">
                  Crew Seeking Boat
                </span>
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
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="mb-1 text-lg font-semibold text-navy-800">
          {listing.name}
        </h3>

        {listing.type === "captain" && listing.boatName && (
          <div className="mb-3 flex items-center gap-2 text-sm text-gray-600">
            <Sailboat className="h-4 w-4" />
            <span>
              {listing.boatName} ({listing.boatType})
            </span>
          </div>
        )}

        <p className="mb-4 text-sm text-gray-600">{listing.description}</p>

        {listing.lookingFor && (
          <div className="mb-4 rounded-lg bg-gray-50 p-3">
            <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
              Looking for:
            </p>
            <p className="text-sm text-gray-700">{listing.lookingFor}</p>
          </div>
        )}

        {/* Availability */}
        <div className="mb-4">
          <p className="mb-2 text-xs font-medium uppercase tracking-wide text-gray-500">
            Available for:
          </p>
          <div className="flex flex-wrap gap-1.5">
            {listing.availability.map((avail) => {
              const option = availabilityOptions.find((o) => o.value === avail);
              return (
                <span
                  key={avail}
                  className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700"
                >
                  {option?.label || avail}
                </span>
              );
            })}
          </div>
        </div>

        {/* Posted date */}
        <div className="mb-4 flex items-center gap-1.5 text-xs text-gray-500">
          <Calendar className="h-3.5 w-3.5" />
          <span>Posted {format(listing.createdAt, "MMM d, yyyy")}</span>
        </div>

        {/* Contact button */}
        <Button
          variant="primary"
          size="sm"
          className="w-full"
          onClick={() => onContact(listing)}
        >
          <Mail className="mr-2 h-4 w-4" />
          Contact {listing.name.split(" ")[0]}
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
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
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
            Send an email to connect with {listing.name.split(" ")[0]} about{" "}
            {listing.type === "captain"
              ? "crewing opportunities"
              : "finding a boat"}
            .
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

function SignupForm() {
  const [formType, setFormType] = useState<"captain" | "crew">("crew");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="rounded-xl border-2 border-green-200 bg-green-50 p-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <Check className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="mb-2 text-xl font-bold text-green-800">
          Listing Submitted!
        </h3>
        <p className="text-green-700">
          Your listing has been submitted and will be reviewed shortly. You
          should see it appear on this page within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Type selection */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          I am a...
        </label>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setFormType("captain")}
            className={cn(
              "rounded-lg border-2 p-4 text-left transition-all",
              formType === "captain"
                ? "border-ocean-500 bg-ocean-50"
                : "border-gray-200 hover:border-gray-300"
            )}
          >
            <Ship className="mb-2 h-6 w-6 text-ocean-600" />
            <p className="font-semibold text-navy-800">Captain</p>
            <p className="text-sm text-gray-600">Looking for crew</p>
          </button>
          <button
            type="button"
            onClick={() => setFormType("crew")}
            className={cn(
              "rounded-lg border-2 p-4 text-left transition-all",
              formType === "crew"
                ? "border-ocean-500 bg-ocean-50"
                : "border-gray-200 hover:border-gray-300"
            )}
          >
            <User className="mb-2 h-6 w-6 text-green-600" />
            <p className="font-semibold text-navy-800">Crew</p>
            <p className="text-sm text-gray-600">Looking for a boat</p>
          </button>
        </div>
      </div>

      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          Your Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          required
          className="block w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-500/20"
          placeholder="John Smith"
        />
      </div>

      {/* Boat info (captain only) */}
      {formType === "captain" && (
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="boatName"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Boat Name
            </label>
            <input
              type="text"
              id="boatName"
              className="block w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-500/20"
              placeholder="Sea Spirit"
            />
          </div>
          <div>
            <label
              htmlFor="boatType"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Boat Type
            </label>
            <input
              type="text"
              id="boatType"
              className="block w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-500/20"
              placeholder="Catalina 27"
            />
          </div>
        </div>
      )}

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          required
          className="block w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-500/20"
          placeholder="you@example.com"
        />
      </div>

      {/* Experience */}
      <div>
        <label
          htmlFor="experience"
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          Experience Level <span className="text-red-500">*</span>
        </label>
        <select
          id="experience"
          required
          className="block w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-500/20"
        >
          <option value="">Select...</option>
          <option value="beginner">Beginner - New to sailing</option>
          <option value="intermediate">Intermediate - Some experience</option>
          <option value="advanced">Advanced - Experienced sailor</option>
        </select>
      </div>

      {/* Availability */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Availability <span className="text-red-500">*</span>
        </label>
        <div className="space-y-2">
          {availabilityOptions.map((option) => (
            <label
              key={option.value}
              className="flex items-center gap-3 rounded-lg border border-gray-200 p-3 transition-colors hover:bg-gray-50"
            >
              <input
                type="checkbox"
                name="availability"
                value={option.value}
                className="h-4 w-4 rounded border-gray-300 text-ocean-600 focus:ring-ocean-500"
              />
              <span className="text-sm text-gray-700">{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Description */}
      <div>
        <label
          htmlFor="description"
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          Tell us about yourself <span className="text-red-500">*</span>
        </label>
        <textarea
          id="description"
          required
          rows={4}
          className="block w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-500/20"
          placeholder={
            formType === "captain"
              ? "Describe your boat, racing style, and what you're looking for in crew members..."
              : "Describe your sailing experience and what kind of opportunities you're looking for..."
          }
        />
      </div>

      {/* What you're looking for */}
      <div>
        <label
          htmlFor="lookingFor"
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          {formType === "captain"
            ? "What are you looking for in crew?"
            : "What kind of boat/sailing are you looking for?"}
        </label>
        <input
          type="text"
          id="lookingFor"
          className="block w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-500/20"
          placeholder={
            formType === "captain"
              ? "e.g., Experienced foredeck, good with spinnaker"
              : "e.g., Casual cruising, weekend racing"
          }
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
            Submitting...
          </>
        ) : (
          <>
            <Plus className="mr-2 h-4 w-4" />
            Submit Listing
          </>
        )}
      </Button>
    </form>
  );
}

export default function CrewConnectionsPage() {
  const [listingType, setListingType] = useState<ListingType>("all");
  const [experienceFilter, setExperienceFilter] =
    useState<ExperienceLevel>("all");
  const [contactListing, setContactListing] = useState<CrewListing | null>(
    null
  );
  const [showFilters, setShowFilters] = useState(false);

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
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-700 via-navy-800 to-navy-900 pt-24 pb-12 md:pt-28 md:pb-16">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
                <Users className="h-4 w-4 text-brass-400" />
                <span className="text-sm font-medium text-white">
                  Crew Connections
                </span>
              </div>

              <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
                Find Your Crew
              </h1>
              <p className="max-w-2xl text-lg text-gray-300">
                Connect with skippers looking for crew, or find a boat to sail
                on. Our crew connection program helps sailors get on the water!
              </p>
            </div>

            <div className="flex gap-3">
              <Button variant="primary" size="md" asChild>
                <a href="#signup" className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Post a Listing
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Filters */}
      <section className="border-b border-gray-200 bg-gray-50 py-4">
        <Container>
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 md:hidden"
            >
              <Filter className="h-4 w-4" />
              Filters
              {showFilters ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </button>

            <div
              className={cn(
                "flex w-full flex-wrap gap-4 md:w-auto md:flex-nowrap",
                !showFilters && "hidden md:flex"
              )}
            >
              {/* Listing Type */}
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-600">Show:</span>
                <div className="flex rounded-lg border border-gray-200 bg-white p-1">
                  {[
                    { value: "all", label: "All" },
                    { value: "captain", label: "Captains" },
                    { value: "crew", label: "Crew" },
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() =>
                        setListingType(option.value as ListingType)
                      }
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
                  className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-600 focus:border-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-500/20"
                >
                  <option value="all">All Levels</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>
            </div>

            {/* Results count */}
            <div className="ml-auto text-sm text-gray-500">
              {filteredListings.length} listing
              {filteredListings.length !== 1 && "s"} found
            </div>
          </div>
        </Container>
      </section>

      {/* Listings */}
      <section className="py-8 md:py-12">
        <Container>
          {filteredListings.length > 0 ? (
            <div className="grid gap-12 lg:grid-cols-2">
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
                    <div className="grid gap-4">
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
                    <div className="grid gap-4">
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
            <div className="rounded-xl border-2 border-dashed border-gray-200 p-12 text-center">
              <Users className="mx-auto mb-4 h-12 w-12 text-gray-300" />
              <h3 className="mb-2 text-lg font-semibold text-gray-700">
                No listings found
              </h3>
              <p className="text-gray-500">
                No listings match your current filters. Try adjusting your
                criteria.
              </p>
            </div>
          )}
        </Container>
      </section>

      {/* Signup Form */}
      <section id="signup" className="scroll-mt-20 border-t bg-gray-50 py-12">
        <Container>
          <div className="mx-auto max-w-2xl">
            <div className="mb-8 text-center">
              <h2 className="mb-4 text-3xl font-bold text-navy-800">
                Add Your Listing
              </h2>
              <p className="text-lg text-gray-600">
                Whether you&apos;re a captain looking for crew or a sailor
                looking for a boat, add your listing to connect with others.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
              <SignupForm />
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
    </div>
  );
}
