"use client";

import { useState, useCallback, useMemo } from "react";
import { Calendar, dateFnsLocalizer, View, Views } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { enUS } from "date-fns/locale";
import {
  ChevronLeft,
  ChevronRight,
  Calendar as CalendarIcon,
} from "lucide-react";
import {
  ClubEvent,
  EventType,
  mockEvents,
  filterEventsByType,
} from "@/lib/data/events";
import { EventModal } from "./EventModal";
import { EventFilters } from "./EventFilters";
import { cn } from "@/lib/utils";

// Setup date-fns localizer
const locales = { "en-US": enUS };

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 0 }),
  getDay,
  locales,
});

// Custom toolbar component
interface CustomToolbarProps {
  date: Date;
  view: View;
  onNavigate: (action: "PREV" | "NEXT" | "TODAY") => void;
  onView: (view: View) => void;
}

function CustomToolbar({ date, view, onNavigate, onView }: CustomToolbarProps) {
  return (
    <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-2">
        <button
          onClick={() => onNavigate("PREV")}
          className="rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100"
          aria-label="Previous"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={() => onNavigate("TODAY")}
          className="rounded-lg px-3 py-1.5 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100"
        >
          Today
        </button>
        <button
          onClick={() => onNavigate("NEXT")}
          className="rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100"
          aria-label="Next"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
        <h2 className="ml-2 text-lg font-semibold text-navy-800">
          {format(date, view === "day" ? "EEEE, MMMM d, yyyy" : "MMMM yyyy")}
        </h2>
      </div>

      <div className="flex rounded-lg border border-gray-200 bg-white p-1">
        {[
          { key: Views.MONTH, label: "Month" },
          { key: Views.WEEK, label: "Week" },
          { key: Views.DAY, label: "Day" },
        ].map(({ key, label }) => (
          <button
            key={key}
            onClick={() => onView(key as View)}
            className={cn(
              "rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
              view === key
                ? "bg-ocean-500 text-white"
                : "text-gray-600 hover:bg-gray-100"
            )}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}

// Custom event component
interface EventComponentProps {
  event: ClubEvent;
}

function EventComponent({ event }: EventComponentProps) {
  return (
    <div
      className={cn(
        "h-full rounded px-2 py-1 text-xs font-medium",
        "overflow-hidden text-ellipsis whitespace-nowrap",
        "cursor-pointer transition-opacity hover:opacity-80",
        event.type === "racing" && "bg-ocean-500 text-white",
        event.type === "cruising" && "bg-green-500 text-white",
        event.type === "social" && "bg-brass-500 text-white",
        event.type === "meeting" && "bg-gray-500 text-white"
      )}
      title={event.title}
    >
      {event.title}
    </div>
  );
}

export function EventCalendar() {
  const [selectedEvent, setSelectedEvent] = useState<ClubEvent | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState<EventType[]>([]);
  const [currentView, setCurrentView] = useState<View>(Views.MONTH);
  const [currentDate, setCurrentDate] = useState(new Date());

  // Filter events based on selected types
  const filteredEvents = useMemo(() => {
    return filterEventsByType(mockEvents, selectedTypes);
  }, [selectedTypes]);

  const handleSelectEvent = useCallback((event: ClubEvent) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  }, []);

  const handleNavigate = useCallback((date: Date) => {
    setCurrentDate(date);
  }, []);

  const handleViewChange = useCallback((view: View) => {
    setCurrentView(view);
  }, []);

  // Custom event style getter
  const eventStyleGetter = useCallback((event: ClubEvent) => {
    let backgroundColor = "#0ea5e9"; // ocean-500 default

    switch (event.type) {
      case "racing":
        backgroundColor = "#0ea5e9";
        break;
      case "cruising":
        backgroundColor = "#22c55e";
        break;
      case "social":
        backgroundColor = "#f59e0b";
        break;
      case "meeting":
        backgroundColor = "#6b7280";
        break;
    }

    return {
      style: {
        backgroundColor,
        borderRadius: "4px",
        opacity: 0.9,
        color: "white",
        border: "none",
        display: "block",
      },
    };
  }, []);

  return (
    <div>
      {/* Filters */}
      <div className="mb-6">
        <EventFilters
          selectedTypes={selectedTypes}
          onTypeChange={setSelectedTypes}
        />
      </div>

      {/* Calendar */}
      <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
        <Calendar
          localizer={localizer}
          events={filteredEvents}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 700 }}
          view={currentView}
          date={currentDate}
          onNavigate={handleNavigate}
          onView={handleViewChange}
          onSelectEvent={handleSelectEvent}
          eventPropGetter={eventStyleGetter}
          components={{
            toolbar: (props) => (
              <CustomToolbar
                date={props.date}
                view={props.view as View}
                onNavigate={props.onNavigate}
                onView={props.onView}
              />
            ),
            event: EventComponent,
          }}
          popup
          selectable={false}
          views={[Views.MONTH, Views.WEEK, Views.DAY]}
        />
      </div>

      {/* Empty state */}
      {filteredEvents.length === 0 && selectedTypes.length > 0 && (
        <div className="mt-8 rounded-xl border-2 border-dashed border-gray-200 p-12 text-center">
          <CalendarIcon className="mx-auto mb-4 h-12 w-12 text-gray-300" />
          <h3 className="mb-2 text-lg font-semibold text-gray-700">
            No events found
          </h3>
          <p className="text-gray-500">
            No events match your current filters. Try selecting different event
            types.
          </p>
        </div>
      )}

      {/* Event Modal */}
      <EventModal
        event={selectedEvent}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}
