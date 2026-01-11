"use client";

import { useMemo } from "react";
import Link from "next/link";
import { format } from "date-fns";
import {
  Compass,
  Calendar,
  MapPin,
  Clock,
  ChevronRight,
  Users,
  Anchor,
  Globe,
  Ship,
  Utensils,
  Camera,
  Sun,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { mockEvents, getUpcomingEvents } from "@/lib/data/events";

// Stubbed destination data
const popularDestinations = [
  {
    name: "Ilwaco Marina",
    distance: "15 nm",
    description:
      "Protected harbor near the mouth of the Columbia. Great restaurants and easy access to Long Beach.",
    highlights: ["Full-service marina", "Restaurants nearby", "Whale watching"],
  },
  {
    name: "Cathlamet",
    distance: "25 nm",
    description:
      "Charming small town on the Washington side. Historic downtown with shops and eateries.",
    highlights: ["Guest moorage", "Historic town", "Hiking trails"],
  },
  {
    name: "Westport",
    distance: "45 nm",
    description:
      "Fishing village on the Washington coast. Requires bar crossing - for experienced cruisers.",
    highlights: ["Ocean access", "Fresh seafood", "Maritime museum"],
  },
  {
    name: "Skamokawa",
    distance: "30 nm",
    description:
      "Quiet anchorage in a scenic slough. Perfect for a peaceful overnight stay.",
    highlights: ["Protected anchorage", "Wildlife viewing", "Kayaking"],
  },
];

const cruiseTypes = [
  {
    title: "Day Cruises",
    icon: Sun,
    description:
      "Short afternoon or evening sails, perfect for sunset watching and casual socializing on the water.",
  },
  {
    title: "Weekend Rallies",
    icon: Compass,
    description:
      "Two to three day trips to nearby destinations with group dinners and activities.",
  },
  {
    title: "Extended Cruises",
    icon: Ship,
    description:
      "Week-long adventures to coastal destinations or up the Columbia River system.",
  },
  {
    title: "Raft-Ups",
    icon: Anchor,
    description:
      "Tie up together at anchor for potluck dinners and socializing. No destination required!",
  },
];

export default function EventsCruisingPage() {
  const cruisingEvents = useMemo(() => {
    const upcoming = getUpcomingEvents(mockEvents);
    return upcoming.filter((event) => event.type === "cruising");
  }, []);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-navy-800 py-16 text-white">
        <div className="absolute inset-0 bg-[url('/images/waves-pattern.svg')] opacity-5" />
        <Container className="relative">
          <nav className="mb-4 text-sm">
            <Link href="/events" className="text-white/60 hover:text-white">
              Events
            </Link>
            <span className="mx-2 text-white/40">/</span>
            <span className="text-white/80">Cruising</span>
          </nav>

          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <Compass className="h-10 w-10 text-brass-400" />
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                  Cruising Events
                </h1>
              </div>
              <p className="max-w-2xl text-lg text-white/80">
                Explore the Columbia River and beyond with fellow AYC members.
                From sunset sails to weekend rallies, there&apos;s always an
                adventure waiting.
              </p>
            </div>

            <div className="flex gap-3">
              <Button variant="primary" asChild>
                <Link href="/cruising/reciprocity">
                  Reciprocal Clubs
                  <Globe className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Cruise Types */}
      <section className="border-b border-gray-200 bg-white py-8">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cruiseTypes.map((type) => (
              <div key={type.title} className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-ocean-100">
                  <type.icon className="h-6 w-6 text-ocean-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy-800">{type.title}</h3>
                  <p className="text-sm text-gray-600">{type.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Upcoming Cruises */}
      <section className="py-12">
        <Container>
          <div className="mb-8 flex items-center gap-3">
            <Calendar className="h-6 w-6 text-ocean-500" />
            <h2 className="text-2xl font-bold text-navy-800">
              Upcoming Cruises & Rallies
            </h2>
          </div>

          {cruisingEvents.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {cruisingEvents.map((event) => (
                <CruiseCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="rounded-xl border-2 border-dashed border-gray-200 py-12 text-center">
              <Compass className="mx-auto mb-4 h-12 w-12 text-gray-300" />
              <h3 className="mb-2 text-lg font-semibold text-gray-700">
                No upcoming cruises scheduled
              </h3>
              <p className="text-gray-500">
                Check back soon for new cruise announcements
              </p>
            </div>
          )}

          <div className="mt-8 text-center">
            <Link
              href="/events/calendar"
              className="inline-flex items-center gap-2 text-ocean-600 hover:text-ocean-700"
            >
              View full events calendar
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* Popular Destinations */}
      <section className="bg-white py-12">
        <Container>
          <div className="mb-8 flex items-center gap-3">
            <MapPin className="h-6 w-6 text-ocean-500" />
            <h2 className="text-2xl font-bold text-navy-800">
              Popular Destinations
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {popularDestinations.map((destination) => (
              <div
                key={destination.name}
                className="rounded-xl border border-gray-200 bg-gray-50 p-6"
              >
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-navy-800">
                    {destination.name}
                  </h3>
                  <span className="rounded-full bg-ocean-100 px-3 py-1 text-sm font-medium text-ocean-700">
                    {destination.distance}
                  </span>
                </div>
                <p className="mb-4 text-gray-600">{destination.description}</p>
                <div className="flex flex-wrap gap-2">
                  {destination.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="rounded-full bg-white px-3 py-1 text-xs text-gray-600 border border-gray-200"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* What to Expect */}
      <section className="py-12">
        <Container>
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-2xl font-bold text-navy-800">
              What to Expect on a Club Cruise
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              AYC cruises are relaxed, social events designed for sailors of all
              experience levels. Here&apos;s what a typical cruise looks like.
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-xl border border-gray-200 bg-white p-6 text-center">
                <Users className="mx-auto mb-4 h-10 w-10 text-ocean-500" />
                <h3 className="mb-2 font-semibold text-navy-800">
                  Skipper&apos;s Meeting
                </h3>
                <p className="text-sm text-gray-600">
                  Meet before departure to review the route, weather, and safety
                  considerations. Great time to coordinate with other boats.
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-6 text-center">
                <Ship className="mx-auto mb-4 h-10 w-10 text-ocean-500" />
                <h3 className="mb-2 font-semibold text-navy-800">
                  Sail Together
                </h3>
                <p className="text-sm text-gray-600">
                  Travel as a fleet, maintaining radio contact. Experienced
                  cruisers are always happy to buddy-boat with newcomers.
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-6 text-center">
                <Utensils className="mx-auto mb-4 h-10 w-10 text-ocean-500" />
                <h3 className="mb-2 font-semibold text-navy-800">
                  Social Time
                </h3>
                <p className="text-sm text-gray-600">
                  Group dinners, potlucks, or restaurant outings. The best part
                  of cruising is the camaraderie!
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Reciprocity CTA */}
      <section className="bg-navy-700 py-12 text-white">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <Globe className="mb-4 h-10 w-10 text-ocean-400" />
              <h2 className="mb-4 text-2xl font-bold">
                Explore Beyond the Columbia
              </h2>
              <p className="mb-6 text-white/80">
                Full AYC members enjoy reciprocal privileges at over 200 yacht
                clubs worldwide. Visit other clubs, use their facilities, and
                make connections wherever your adventures take you.
              </p>
              <Button variant="primary" asChild>
                <Link href="/cruising/reciprocity">
                  View Reciprocal Clubs
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-white/10 p-6 text-center backdrop-blur-sm">
                <p className="text-3xl font-bold">25+</p>
                <p className="text-sm text-white/70">Pacific Northwest</p>
              </div>
              <div className="rounded-xl bg-white/10 p-6 text-center backdrop-blur-sm">
                <p className="text-3xl font-bold">50+</p>
                <p className="text-sm text-white/70">West Coast</p>
              </div>
              <div className="rounded-xl bg-white/10 p-6 text-center backdrop-blur-sm">
                <p className="text-3xl font-bold">150+</p>
                <p className="text-sm text-white/70">United States</p>
              </div>
              <div className="rounded-xl bg-white/10 p-6 text-center backdrop-blur-sm">
                <p className="text-3xl font-bold">200+</p>
                <p className="text-sm text-white/70">Worldwide</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Photo Gallery Teaser */}
      <section className="py-12">
        <Container>
          <div className="rounded-xl border border-gray-200 bg-white p-8 text-center">
            <Camera className="mx-auto mb-4 h-10 w-10 text-ocean-500" />
            <h2 className="mb-2 text-xl font-bold text-navy-800">
              Cruise Photo Gallery
            </h2>
            <p className="mb-6 text-gray-600">
              See photos from past cruises and rallies. Members can upload their
              own photos to share with the club.
            </p>
            <Button variant="outline" asChild>
              <Link href="/gallery">
                Browse Gallery
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Join CTA */}
      <section className="bg-ocean-500 py-12">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Anchor className="mx-auto mb-4 h-10 w-10 text-white/80" />
            <h2 className="mb-4 text-2xl font-bold text-white">
              Ready to Join a Cruise?
            </h2>
            <p className="mb-6 text-white/90">
              Don&apos;t have a boat? No problem! Connect with skippers looking
              for crew through our crew connection program, or reach out to the
              cruise committee to find a spot.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="primary"
                className="bg-white text-ocean-600 hover:bg-gray-100"
                asChild
              >
                <Link href="/racing/crew">Find a Boat</Link>
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <a href="mailto:cruising@astoriayachtclub.org">
                  Contact Cruise Committee
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

interface CruiseCardProps {
  event: {
    id: string;
    title: string;
    start: Date;
    end: Date;
    description: string;
    location?: string;
    registrationRequired?: boolean;
    registrationUrl?: string;
  };
}

function CruiseCard({ event }: CruiseCardProps) {
  const isMultiDay =
    event.end.getTime() - event.start.getTime() > 24 * 60 * 60 * 1000;

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-3 flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-2.5 py-1 text-xs font-medium text-green-700">
          <Compass className="h-3 w-3" />
          {isMultiDay ? "Multi-Day" : "Day Cruise"}
        </span>
        {event.registrationRequired && (
          <span className="rounded-full bg-brass-100 px-2 py-1 text-xs font-medium text-brass-700">
            RSVP Required
          </span>
        )}
      </div>

      <h3 className="mb-2 font-semibold text-navy-800">{event.title}</h3>
      <p className="mb-4 text-sm text-gray-600 line-clamp-2">
        {event.description}
      </p>

      <div className="space-y-2 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-gray-400" />
          {isMultiDay ? (
            <span>
              {format(event.start, "MMM d")} -{" "}
              {format(event.end, "MMM d, yyyy")}
            </span>
          ) : (
            <span>{format(event.start, "EEEE, MMMM d, yyyy")}</span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-gray-400" />
          {format(event.start, "h:mm a")}
        </div>
        {event.location && (
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-gray-400" />
            {event.location}
          </div>
        )}
      </div>

      {event.registrationRequired && event.registrationUrl && (
        <div className="mt-4">
          <Link
            href={event.registrationUrl}
            className="inline-flex items-center gap-1 text-sm font-medium text-ocean-600 hover:text-ocean-700"
          >
            Register Now
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      )}
    </div>
  );
}
