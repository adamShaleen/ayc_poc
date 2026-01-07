"use client";

import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  MapPin,
  Clock,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "./PageHeader";
import { BreadcrumbItem } from "@/types";
import { cn } from "@/lib/utils";

interface CalendarEvent {
  id: string;
  title: string;
  date: Date;
  endDate?: Date;
  location?: string;
  description?: string;
  category?: "racing" | "cruising" | "social" | "education" | "meeting";
}

interface CalendarPageProps {
  title: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
  events: CalendarEvent[];
  className?: string;
}

const categoryColors = {
  racing: "bg-red-100 text-red-700 border-red-200",
  cruising: "bg-blue-100 text-blue-700 border-blue-200",
  social: "bg-green-100 text-green-700 border-green-200",
  education: "bg-purple-100 text-purple-700 border-purple-200",
  meeting: "bg-gray-100 text-gray-700 border-gray-200",
};

const categoryLabels = {
  racing: "Racing",
  cruising: "Cruising",
  social: "Social",
  education: "Education",
  meeting: "Meeting",
};

export function CalendarPage({
  title,
  description,
  breadcrumbs,
  events,
  className,
}: CalendarPageProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState<"month" | "list">("month");

  const monthStart = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  const monthEnd = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  );

  const navigateMonth = (direction: "prev" | "next") => {
    setCurrentDate(
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + (direction === "next" ? 1 : -1),
        1
      )
    );
  };

  const monthName = currentDate.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  // Get events for the current month
  const monthEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate >= monthStart && eventDate <= monthEnd;
  });

  // Generate calendar grid
  const calendarDays = generateCalendarDays(currentDate);

  return (
    <div>
      <PageHeader
        title={title}
        description={description}
        breadcrumbs={breadcrumbs}
      />

      <Container className={cn("py-12 md:py-16", className)}>
        {/* Calendar controls */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigateMonth("prev")}
              className="rounded-lg p-2 text-gray-600 hover:bg-gray-100"
              aria-label="Previous month"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <h2 className="text-xl font-semibold text-navy-800">{monthName}</h2>
            <button
              onClick={() => navigateMonth("next")}
              className="rounded-lg p-2 text-gray-600 hover:bg-gray-100"
              aria-label="Next month"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setView("month")}
              className={cn(
                "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                view === "month"
                  ? "bg-navy-700 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              )}
            >
              Month
            </button>
            <button
              onClick={() => setView("list")}
              className={cn(
                "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                view === "list"
                  ? "bg-navy-700 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              )}
            >
              List
            </button>
          </div>
        </div>

        {/* Category legend */}
        <div className="mb-6 flex flex-wrap gap-3">
          {Object.entries(categoryLabels).map(([key, label]) => (
            <div key={key} className="flex items-center gap-2 text-sm">
              <span
                className={cn(
                  "h-3 w-3 rounded-full",
                  categoryColors[key as keyof typeof categoryColors]
                )}
              />
              <span className="text-gray-600">{label}</span>
            </div>
          ))}
        </div>

        {view === "month" ? (
          <MonthView
            days={calendarDays}
            events={events}
            currentDate={currentDate}
          />
        ) : (
          <ListView events={monthEvents} />
        )}
      </Container>
    </div>
  );
}

// Month view component
function MonthView({
  days,
  events,
  currentDate,
}: {
  days: (Date | null)[];
  events: CalendarEvent[];
  currentDate: Date;
}) {
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const today = new Date();

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
      {/* Weekday headers */}
      <div className="grid grid-cols-7 border-b border-gray-200 bg-gray-50">
        {weekdays.map((day) => (
          <div
            key={day}
            className="px-2 py-3 text-center text-sm font-medium text-gray-600"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7">
        {days.map((day, index) => {
          if (!day) {
            return (
              <div
                key={`empty-${index}`}
                className="min-h-[100px] border-b border-r border-gray-100 bg-gray-50 p-2"
              />
            );
          }

          const dayEvents = events.filter((event) => {
            const eventDate = new Date(event.date);
            return eventDate.toDateString() === day.toDateString();
          });

          const isToday = day.toDateString() === today.toDateString();
          const isCurrentMonth = day.getMonth() === currentDate.getMonth();

          return (
            <div
              key={day.toISOString()}
              className={cn(
                "min-h-[100px] border-b border-r border-gray-100 p-2",
                !isCurrentMonth && "bg-gray-50"
              )}
            >
              <div
                className={cn(
                  "mb-1 flex h-7 w-7 items-center justify-center rounded-full text-sm",
                  isToday
                    ? "bg-ocean-500 font-semibold text-white"
                    : isCurrentMonth
                      ? "font-medium text-gray-900"
                      : "text-gray-400"
                )}
              >
                {day.getDate()}
              </div>

              <div className="space-y-1">
                {dayEvents.slice(0, 2).map((event) => (
                  <div
                    key={event.id}
                    className={cn(
                      "truncate rounded px-1.5 py-0.5 text-xs",
                      event.category
                        ? categoryColors[event.category]
                        : "bg-gray-100 text-gray-700"
                    )}
                    title={event.title}
                  >
                    {event.title}
                  </div>
                ))}
                {dayEvents.length > 2 && (
                  <div className="text-xs text-gray-500">
                    +{dayEvents.length - 2} more
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// List view component
function ListView({ events }: { events: CalendarEvent[] }) {
  const sortedEvents = [...events].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  if (sortedEvents.length === 0) {
    return (
      <div className="rounded-xl border border-gray-200 bg-white p-12 text-center">
        <Calendar className="mx-auto h-12 w-12 text-gray-300" />
        <p className="mt-4 text-gray-600">No events scheduled this month</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {sortedEvents.map((event) => (
        <div
          key={event.id}
          className="rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-md"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3">
                {event.category && (
                  <span
                    className={cn(
                      "rounded-full px-2.5 py-0.5 text-xs font-medium",
                      categoryColors[event.category]
                    )}
                  >
                    {categoryLabels[event.category]}
                  </span>
                )}
              </div>

              <h3 className="mt-2 text-lg font-semibold text-navy-800">
                {event.title}
              </h3>

              {event.description && (
                <p className="mt-2 text-gray-600">{event.description}</p>
              )}

              <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {new Date(event.date).toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                    hour: "numeric",
                    minute: "2-digit",
                  })}
                </div>
                {event.location && (
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4" />
                    {event.location}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// Helper function to generate calendar days
function generateCalendarDays(currentDate: Date): (Date | null)[] {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  const days: (Date | null)[] = [];

  // Add empty slots for days before the first day of the month
  for (let i = 0; i < firstDay.getDay(); i++) {
    days.push(null);
  }

  // Add all days of the month
  for (let day = 1; day <= lastDay.getDate(); day++) {
    days.push(new Date(year, month, day));
  }

  // Add empty slots to complete the last week
  while (days.length % 7 !== 0) {
    days.push(null);
  }

  return days;
}
