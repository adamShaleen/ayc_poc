"use client";

import { Fragment } from "react";
import { format } from "date-fns";
import {
  X,
  Calendar,
  MapPin,
  Clock,
  Tag,
  Download,
  ExternalLink,
  Repeat,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ClubEvent, eventTypeConfig, generateICSFile } from "@/lib/data/events";
import { cn } from "@/lib/utils";

interface EventModalProps {
  event: ClubEvent | null;
  isOpen: boolean;
  onClose: () => void;
}

export function EventModal({ event, isOpen, onClose }: EventModalProps) {
  if (!event || !isOpen) return null;

  const typeConfig = eventTypeConfig[event.type];
  const isSameDay =
    format(event.start, "yyyy-MM-dd") === format(event.end, "yyyy-MM-dd");

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
    <Fragment>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl"
          role="dialog"
          aria-modal="true"
          aria-labelledby="event-title"
        >
          {/* Header with colored bar */}
          <div
            className={cn(
              "border-b-4 px-6 py-4",
              event.type === "racing" && "border-ocean-500 bg-ocean-50",
              event.type === "cruising" && "border-green-500 bg-green-50",
              event.type === "social" && "border-brass-500 bg-brass-50",
              event.type === "meeting" && "border-gray-500 bg-gray-50"
            )}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span
                  className={cn(
                    "mb-2 inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium",
                    typeConfig.bgColor,
                    typeConfig.color
                  )}
                >
                  <Tag className="h-3 w-3" />
                  {typeConfig.label}
                </span>
                <h2
                  id="event-title"
                  className="text-xl font-bold text-navy-800"
                >
                  {event.title}
                </h2>
              </div>
              <button
                onClick={onClose}
                className="rounded-lg p-1.5 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="px-6 py-5">
            {/* Date & Time */}
            <div className="mb-4 flex items-start gap-3">
              <Calendar className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-400" />
              <div>
                <p className="font-medium text-navy-800">
                  {isSameDay
                    ? format(event.start, "EEEE, MMMM d, yyyy")
                    : `${format(event.start, "MMM d")} - ${format(event.end, "MMM d, yyyy")}`}
                </p>
                <p className="text-sm text-gray-600">
                  {format(event.start, "h:mm a")} -{" "}
                  {format(event.end, "h:mm a")}
                </p>
              </div>
            </div>

            {/* Location */}
            {event.location && (
              <div className="mb-4 flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-400" />
                <p className="text-gray-700">{event.location}</p>
              </div>
            )}

            {/* Recurrence */}
            {event.recurrence && (
              <div className="mb-4 flex items-start gap-3">
                <Repeat className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-400" />
                <p className="text-sm text-gray-600">{event.recurrence}</p>
              </div>
            )}

            {/* Description */}
            <div className="mb-6">
              <p className="leading-relaxed text-gray-700">
                {event.description}
              </p>
            </div>

            {/* Registration notice */}
            {event.registrationRequired && (
              <div className="mb-6 rounded-lg bg-amber-50 p-4">
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600" />
                  <div>
                    <p className="font-medium text-amber-800">
                      Registration Required
                    </p>
                    <p className="text-sm text-amber-700">
                      Please register in advance to attend this event.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-wrap gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={handleDownloadICS}
                className="flex items-center gap-2"
              >
                <Download className="h-4 w-4" />
                Add to Calendar
              </Button>

              {event.registrationRequired && event.registrationUrl && (
                <Button variant="primary" size="sm" asChild>
                  <a
                    href={event.registrationUrl}
                    className="flex items-center gap-2"
                  >
                    Register Now
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
