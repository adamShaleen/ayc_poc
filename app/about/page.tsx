import { Metadata } from "next";
import Link from "next/link";
import {
  Users,
  Trophy,
  Compass,
  Calendar,
  Anchor,
  Ship,
  MapPin,
  ChevronRight,
  Sailboat,
} from "lucide-react";
import { clubStats, timelineEvents } from "@/lib/data/club";

export const metadata: Metadata = {
  title: "About | Astoria Yacht Club",
  description:
    "Learn about the Astoria Yacht Club, a volunteer-run sailing club on the Columbia River since 1931.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-navy-800 py-20 text-white">
        <div className="absolute inset-0 bg-[url('/images/waves-pattern.svg')] opacity-5" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center gap-3 text-ocean-400">
            <Anchor className="h-8 w-8" />
            <span className="text-lg font-semibold tracking-wide">
              Established 1931
            </span>
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Astoria Yacht Club
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-white/80">
            A volunteer-run sailing community on the lower Columbia River,
            fostering a love of sailing for over 90 years.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-8 z-10">
        <div className="container mx-auto px-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            <StatCard
              icon={<Users className="h-6 w-6" />}
              value={clubStats.members}
              label="Active Members"
            />
            <StatCard
              icon={<Calendar className="h-6 w-6" />}
              value={clubStats.yearsActive}
              label="Years of Sailing"
            />
            <StatCard
              icon={<Trophy className="h-6 w-6" />}
              value={clubStats.racesPerYear}
              label="Races per Year"
            />
            <StatCard
              icon={<Compass className="h-6 w-6" />}
              value={clubStats.cruisesPerYear}
              label="Cruises Annually"
            />
            <StatCard
              icon={<Ship className="h-6 w-6" />}
              value={clubStats.reciprocalClubs}
              label="Reciprocal Clubs"
            />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-navy-800">Our Mission</h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              The Astoria Yacht Club is dedicated to promoting safe, enjoyable
              sailing and boating activities on the Columbia River. We foster a
              welcoming community for sailors of all skill levels, preserve
              maritime traditions, and share our passion for the water with
              future generations.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/membership"
                className="inline-flex items-center gap-2 rounded-lg bg-ocean-500 px-6 py-3 font-medium text-white transition-colors hover:bg-ocean-600"
              >
                Become a Member
                <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                href="/about/board"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-50"
              >
                Meet Our Board
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-navy-800">
            What We Offer
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <OfferCard
              icon={<Trophy className="h-8 w-8" />}
              title="Racing Programs"
              description="From casual Wednesday night beer can races to competitive weekend regattas, we offer racing for all skill levels."
              href="/racing"
            />
            <OfferCard
              icon={<Compass className="h-8 w-8" />}
              title="Cruising & Rallies"
              description="Join group cruises exploring the Columbia River, Pacific Coast, and beyond with fellow adventurers."
              href="/events"
            />
            <OfferCard
              icon={<Users className="h-8 w-8" />}
              title="Crew Connections"
              description="Find crew for your boat or get aboard as crew. Our network matches sailors with opportunities."
              href="/racing/crew"
            />
            <OfferCard
              icon={<Calendar className="h-8 w-8" />}
              title="Social Events"
              description="Monthly gatherings, seasonal celebrations, and post-race gatherings build lasting friendships."
              href="/events"
            />
            <OfferCard
              icon={<Sailboat className="h-8 w-8" />}
              title="Education"
              description="Learn to sail courses, safety seminars, and racing clinics for members at all experience levels."
              href="/resources"
            />
            <OfferCard
              icon={<Ship className="h-8 w-8" />}
              title="Reciprocity"
              description="Access 25+ yacht clubs throughout the Pacific Northwest with your AYC membership."
              href="/cruising/reciprocity"
            />
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-3xl font-bold text-navy-800">
            Our History
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
            From humble beginnings to a thriving sailing community, explore the
            milestones that shaped Astoria Yacht Club.
          </p>

          <div className="relative mx-auto max-w-3xl">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 h-full w-0.5 bg-ocean-200 md:left-1/2 md:-translate-x-0.5" />

            <div className="space-y-8">
              {timelineEvents.map((event, index) => (
                <TimelineItem
                  key={event.year}
                  event={event}
                  isLeft={index % 2 === 0}
                />
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/about/history"
              className="inline-flex items-center gap-2 text-ocean-600 hover:text-ocean-700"
            >
              Read our full history
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-navy-800">
                Our Location
              </h2>
              <p className="mb-6 text-gray-600">
                We&apos;re located in historic Astoria, Oregon, at the mouth of
                the mighty Columbia River. Our unique location offers diverse
                sailing conditions — from protected harbor waters perfect for
                learning to challenging open water for experienced sailors.
              </p>
              <div className="mb-6 flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-ocean-500" />
                <div>
                  <p className="font-medium text-gray-900">
                    Astoria Yacht Club
                  </p>
                  <p className="text-gray-600">
                    357 Portway St
                    <br />
                    Astoria, OR 97103
                  </p>
                </div>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <p>
                  <strong>Clubhouse Hours:</strong> Open during scheduled events
                </p>
                <p>
                  <strong>Marina Access:</strong> 24/7 for members
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="h-80 overflow-hidden rounded-xl border border-gray-200 lg:h-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2751.234567890123!2d-123.831234!3d46.187654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDbCsDExJzE1LjYiTiAxMjPCsDQ5JzUyLjQiVw!5e0!3m2!1sen!2sus!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 320 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Astoria Yacht Club Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy-800 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <Anchor className="mx-auto mb-4 h-12 w-12 text-ocean-400" />
          <h2 className="mb-4 text-3xl font-bold">Join Our Community</h2>
          <p className="mx-auto mb-8 max-w-xl text-white/80">
            Whether you&apos;re an experienced sailor or just starting out,
            there&apos;s a place for you at Astoria Yacht Club.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/membership/apply"
              className="rounded-lg bg-ocean-500 px-8 py-3 font-medium text-white transition-colors hover:bg-ocean-600"
            >
              Apply for Membership
            </Link>
            <Link
              href="/events"
              className="rounded-lg border border-white/30 px-8 py-3 font-medium text-white transition-colors hover:bg-white/10"
            >
              View Upcoming Events
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function StatCard({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: number;
  label: string;
}) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-lg">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ocean-100 text-ocean-600">
          {icon}
        </div>
        <div>
          <p className="text-2xl font-bold text-navy-800">{value}+</p>
          <p className="text-sm text-gray-600">{label}</p>
        </div>
      </div>
    </div>
  );
}

function OfferCard({
  icon,
  title,
  description,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-ocean-300 hover:shadow-lg"
    >
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-ocean-100 text-ocean-600 transition-colors group-hover:bg-ocean-500 group-hover:text-white">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-navy-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Link>
  );
}

function TimelineItem({
  event,
  isLeft,
}: {
  event: { year: number; title: string; description: string };
  isLeft: boolean;
}) {
  return (
    <div
      className={`relative flex items-center ${isLeft ? "md:flex-row-reverse" : ""}`}
    >
      {/* Dot */}
      <div className="absolute left-4 z-10 flex h-4 w-4 items-center justify-center rounded-full border-4 border-ocean-500 bg-white md:left-1/2 md:-translate-x-1/2" />

      {/* Content */}
      <div
        className={`ml-12 w-full md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? "md:mr-auto md:pr-8 md:text-right" : "md:ml-auto md:pl-8"}`}
      >
        <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
          <span className="inline-block rounded-full bg-ocean-100 px-3 py-1 text-sm font-semibold text-ocean-700">
            {event.year}
          </span>
          <h3 className="mt-2 font-semibold text-navy-800">{event.title}</h3>
          <p className="mt-1 text-sm text-gray-600">{event.description}</p>
        </div>
      </div>
    </div>
  );
}
