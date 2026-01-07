"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { format } from "date-fns";
import {
  Calendar,
  Grid,
  MapPin,
  Clock,
  Tag,
  ChevronDown,
  ChevronUp,
  Download,
  ExternalLink,
  CalendarDays,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import {
  ClubEvent,
  EventType,
  eventTypeConfig,
  mockEvents,
  filterEventsByType,
  getUpcomingEvents,
  getPastEvents,
  generateICSFile,
} from "@/lib/data/events";
import { EventFilters } from "@/components/events/EventFilters";
import { cn } from "@/lib/utils";

function EventCard({ event }: { event: ClubEvent }) {
  const typeConfig = eventTypeConfig[event.type];

  const handleDownloadICS = () => {
    const icsContent = generateICSFile(event);
    const blob = new Blob([icsContent], { type: "text/calendar" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${event.title.replace(/\s+/g, "-").toLowerCase()}.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className={cn(
        "group overflow-hidden rounded-xl border-2 bg-white transition-all hover:shadow-lg",
        event.type === "racing" && "border-ocean-200 hover:border-ocean-400",
        event.type === "cruising" && "border-green-200 hover:border-green-400",
        event.type === "social" && "border-brass-200 hover:border-brass-400",
        event.type === "meeting" && "border-gray-200 hover:border-gray-400"
      )}
    >
      <div className="flex flex-col md:flex-row">
        {/* Date display */}
        <div
          className={cn(
            "flex flex-shrink-0 flex-col items-center justify-center p-4 text-white md:w-28",
            event.type === "racing" && "bg-ocean-500",
            event.type === "cruising" && "bg-green-500",
            event.type === "social" && "bg-brass-500",
            event.type === "meeting" && "bg-gray-500"
          )}
        >
          <span className="text-sm font-medium uppercase opacity-90">
            {format(event.start, "MMM")}
          </span>
          <span className="text-3xl font-bold">{format(event.start, "d")}</span>
          <span className="text-sm opacity-90">
            {format(event.start, "EEE")}
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-5">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium",
                typeConfig.bgColor,
                typeConfig.color
              )}
            >
              <Tag className="h-3 w-3" />
              {typeConfig.label}
            </span>
            {event.registrationRequired && (
              <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-700">
                Registration Required
              </span>
            )}
          </div>

          <h3 className="mb-2 text-lg font-semibold text-navy-800 group-hover:text-ocean-600">
            {event.title}
          </h3>

          <div className="mb-3 flex flex-wrap gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              <span>
                {format(event.start, "h:mm a")} - {format(event.end, "h:mm a")}
              </span>
            </div>
            {event.location && (
              <div className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4" />
                <span>{event.location}</span>
              </div>
            )}
          </div>

          <p className="mb-4 line-clamp-2 text-sm text-gray-600">
            {event.description}
          </p>

          <div className="mt-auto flex flex-wrap gap-2">
            <button
              onClick={handleDownloadICS}
              className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 px-3 py-1.5 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50"
            >
              <Download className="h-3.5 w-3.5" />
              Add to Calendar
            </button>
            {event.registrationRequired && event.registrationUrl && (
              <Link
                href={event.registrationUrl}
                className="inline-flex items-center gap-1.5 rounded-lg bg-ocean-500 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-ocean-600"
              >
                Register
                <ExternalLink className="h-3.5 w-3.5" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function EventsListPage() {
  const [selectedTypes, setSelectedTypes] = useState<EventType[]>([]);
  const [showPastEvents, setShowPastEvents] = useState(false);

  const filteredEvents = useMemo(() => {
    return filterEventsByType(mockEvents, selectedTypes);
  }, [selectedTypes]);

  const upcomingEvents = useMemo(() => {
    return getUpcomingEvents(filteredEvents);
  }, [filteredEvents]);

  const pastEvents = useMemo(() => {
    return getPastEvents(filteredEvents);
  }, [filteredEvents]);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-700 via-navy-800 to-navy-900 pt-24 pb-12 md:pt-28 md:pb-16">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
                <CalendarDays className="h-4 w-4 text-brass-400" />
                <span className="text-sm font-medium text-white">
                  Upcoming Events
                </span>
              </div>

              <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
                Events List
              </h1>
              <p className="max-w-2xl text-lg text-gray-300">
                Browse all upcoming events in a convenient list format. Filter
                by type to find what interests you.
              </p>
            </div>

            <div className="flex gap-3">
              <Button variant="primary" size="md" asChild>
                <Link href="/events" className="flex items-center gap-2">
                  <Grid className="h-4 w-4" />
                  Calendar View
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Filters */}
      <section className="border-b border-gray-200 bg-gray-50 py-4">
        <Container>
          <EventFilters
            selectedTypes={selectedTypes}
            onTypeChange={setSelectedTypes}
          />
        </Container>
      </section>

      {/* Upcoming Events */}
      <section className="py-8 md:py-12">
        <Container>
          <h2 className="mb-6 text-2xl font-bold text-navy-800">
            Upcoming Events
            {upcomingEvents.length > 0 && (
              <span className="ml-2 text-lg font-normal text-gray-500">
                ({upcomingEvents.length})
              </span>
            )}
          </h2>

          {upcomingEvents.length > 0 ? (
            <div className="grid gap-4">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="rounded-xl border-2 border-dashed border-gray-200 p-12 text-center">
              <Calendar className="mx-auto mb-4 h-12 w-12 text-gray-300" />
              <h3 className="mb-2 text-lg font-semibold text-gray-700">
                No upcoming events
              </h3>
              <p className="text-gray-500">
                {selectedTypes.length > 0
                  ? "No events match your current filters. Try selecting different event types."
                  : "Check back soon for new events!"}
              </p>
            </div>
          )}
        </Container>
      </section>

      {/* Past Events */}
      {pastEvents.length > 0 && (
        <section className="border-t border-gray-200 bg-gray-50 py-8">
          <Container>
            <button
              onClick={() => setShowPastEvents(!showPastEvents)}
              className="mb-6 flex w-full items-center justify-between rounded-lg bg-white px-4 py-3 text-left shadow-sm transition-colors hover:bg-gray-50"
            >
              <h2 className="text-xl font-bold text-navy-800">
                Past Events
                <span className="ml-2 text-base font-normal text-gray-500">
                  ({pastEvents.length})
                </span>
              </h2>
              {showPastEvents ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </button>

            {showPastEvents && (
              <div className="grid gap-4">
                {pastEvents.map((event) => (
                  <div key={event.id} className="opacity-75">
                    <EventCard event={event} />
                  </div>
                ))}
              </div>
            )}
          </Container>
        </section>
      )}
    </div>
  );
}
