import { Metadata } from "next";
import Link from "next/link";
import { Calendar, List, Info } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { EventCalendarWrapper } from "./EventCalendarWrapper";

export const metadata: Metadata = {
  title: "Events Calendar",
  description:
    "View upcoming Astoria Yacht Club events including racing, cruising, social events, and meetings.",
};

export default function EventsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-700 via-navy-800 to-navy-900 pt-24 pb-12 md:pt-28 md:pb-16">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
                <Calendar className="h-4 w-4 text-brass-400" />
                <span className="text-sm font-medium text-white">
                  Events Calendar
                </span>
              </div>

              <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
                Club Events
              </h1>
              <p className="max-w-2xl text-lg text-gray-300">
                Stay connected with all Astoria Yacht Club activities. From
                weekly racing to social gatherings, there&apos;s always
                something happening on the water.
              </p>
            </div>

            <div className="flex gap-3">
              <Button variant="primary" size="md" asChild>
                <Link href="/events/list" className="flex items-center gap-2">
                  <List className="h-4 w-4" />
                  List View
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Legend */}
      <section className="border-b border-gray-200 bg-gray-50 py-4">
        <Container>
          <div className="flex flex-wrap items-center gap-6">
            <span className="text-sm font-medium text-gray-600">
              Event Types:
            </span>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-ocean-500" />
                <span className="text-sm text-gray-700">Racing</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-green-500" />
                <span className="text-sm text-gray-700">Cruising/Rally</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-brass-500" />
                <span className="text-sm text-gray-700">Social</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-gray-500" />
                <span className="text-sm text-gray-700">Meeting</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Calendar Section */}
      <section className="py-8 md:py-12">
        <Container>
          <EventCalendarWrapper />
        </Container>
      </section>

      {/* Quick Links */}
      <section className="border-t border-gray-200 bg-gray-50 py-12">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-center text-2xl font-bold text-navy-800">
              Quick Links
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              <Link
                href="/racing"
                className="group flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 transition-all hover:border-ocean-300 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-ocean-100">
                  <Calendar className="h-6 w-6 text-ocean-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy-800 group-hover:text-ocean-600">
                    Racing Schedule
                  </h3>
                  <p className="text-sm text-gray-600">
                    View race series & results
                  </p>
                </div>
              </Link>

              <Link
                href="/racing/crew"
                className="group flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 transition-all hover:border-ocean-300 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                  <List className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy-800 group-hover:text-ocean-600">
                    Crew Connections
                  </h3>
                  <p className="text-sm text-gray-600">Find crew or a boat</p>
                </div>
              </Link>

              <Link
                href="/contact"
                className="group flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 transition-all hover:border-ocean-300 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brass-100">
                  <Info className="h-6 w-6 text-brass-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy-800 group-hover:text-ocean-600">
                    Contact Us
                  </h3>
                  <p className="text-sm text-gray-600">
                    Questions about events
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
