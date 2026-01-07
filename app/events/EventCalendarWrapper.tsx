"use client";

import dynamic from "next/dynamic";
import { Loader2 } from "lucide-react";

// Dynamically import calendar with no SSR (react-big-calendar requires window)
const EventCalendar = dynamic(
  () =>
    import("@/components/events/EventCalendar").then(
      (mod) => mod.EventCalendar
    ),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[700px] items-center justify-center rounded-xl border border-gray-200 bg-white">
        <div className="flex flex-col items-center gap-3 text-gray-500">
          <Loader2 className="h-8 w-8 animate-spin" />
          <span>Loading calendar...</span>
        </div>
      </div>
    ),
  }
);

// Import calendar styles
import "@/components/events/calendar-styles.css";

export function EventCalendarWrapper() {
  return <EventCalendar />;
}
