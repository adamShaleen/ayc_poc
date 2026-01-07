"use client";

/**
 * Mobile Action Components
 *
 * These components provide mobile-optimized interactions:
 * - Click-to-call for phone numbers
 * - Click-to-email for email addresses
 * - Click-to-navigate for addresses
 * - Add-to-calendar for events
 *
 * All components use proper link types that mobile devices
 * understand and can act upon natively.
 */

import { Phone, Mail, MapPin, Calendar, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface ClickToCallProps {
  phone: string;
  children?: React.ReactNode;
  className?: string;
  showIcon?: boolean;
  variant?: "link" | "button";
}

/**
 * Click-to-Call Component
 * Renders a phone number that opens the device's phone app when tapped
 */
export function ClickToCall({
  phone,
  children,
  className,
  showIcon = true,
  variant = "link",
}: ClickToCallProps) {
  // Clean the phone number for the tel: protocol
  const cleanPhone = phone.replace(/[^\d+]/g, "");

  const baseStyles =
    variant === "button"
      ? "inline-flex items-center gap-2 rounded-lg bg-ocean-500 px-4 py-3 font-medium text-white transition-colors hover:bg-ocean-600 active:bg-ocean-700 min-h-[44px]"
      : "inline-flex items-center gap-1.5 text-ocean-600 hover:text-ocean-700 active:text-ocean-800 underline-offset-2 hover:underline min-h-[44px]";

  return (
    <a href={`tel:${cleanPhone}`} className={cn(baseStyles, className)}>
      {showIcon && <Phone className="h-4 w-4" />}
      {children || phone}
    </a>
  );
}

interface ClickToEmailProps {
  email: string;
  subject?: string;
  body?: string;
  children?: React.ReactNode;
  className?: string;
  showIcon?: boolean;
  variant?: "link" | "button";
}

/**
 * Click-to-Email Component
 * Renders an email address that opens the device's mail app when tapped
 */
export function ClickToEmail({
  email,
  subject,
  body,
  children,
  className,
  showIcon = true,
  variant = "link",
}: ClickToEmailProps) {
  // Build mailto URL with optional subject and body
  let mailtoUrl = `mailto:${email}`;
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const paramString = params.toString();
  if (paramString) mailtoUrl += `?${paramString}`;

  const baseStyles =
    variant === "button"
      ? "inline-flex items-center gap-2 rounded-lg bg-ocean-500 px-4 py-3 font-medium text-white transition-colors hover:bg-ocean-600 active:bg-ocean-700 min-h-[44px]"
      : "inline-flex items-center gap-1.5 text-ocean-600 hover:text-ocean-700 active:text-ocean-800 underline-offset-2 hover:underline min-h-[44px]";

  return (
    <a href={mailtoUrl} className={cn(baseStyles, className)}>
      {showIcon && <Mail className="h-4 w-4" />}
      {children || email}
    </a>
  );
}

interface ClickToNavigateProps {
  address: string;
  children?: React.ReactNode;
  className?: string;
  showIcon?: boolean;
  variant?: "link" | "button";
}

/**
 * Click-to-Navigate Component
 * Renders an address that opens the device's maps app when tapped
 */
export function ClickToNavigate({
  address,
  children,
  className,
  showIcon = true,
  variant = "link",
}: ClickToNavigateProps) {
  // Encode address for URL
  const encodedAddress = encodeURIComponent(address);
  // Use Google Maps URL which redirects to native app on mobile
  const mapsUrl = `https://maps.google.com/maps?q=${encodedAddress}`;

  const baseStyles =
    variant === "button"
      ? "inline-flex items-center gap-2 rounded-lg bg-ocean-500 px-4 py-3 font-medium text-white transition-colors hover:bg-ocean-600 active:bg-ocean-700 min-h-[44px]"
      : "inline-flex items-center gap-1.5 text-ocean-600 hover:text-ocean-700 active:text-ocean-800 underline-offset-2 hover:underline min-h-[44px]";

  return (
    <a
      href={mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(baseStyles, className)}
    >
      {showIcon && <MapPin className="h-4 w-4" />}
      {children || address}
      {variant === "button" && <ExternalLink className="h-3 w-3" />}
    </a>
  );
}

interface AddToCalendarProps {
  title: string;
  description?: string;
  location?: string;
  startDate: Date;
  endDate?: Date;
  children?: React.ReactNode;
  className?: string;
  variant?: "link" | "button";
}

/**
 * Add-to-Calendar Component
 * Generates a .ics file download for adding events to calendar apps
 */
export function AddToCalendar({
  title,
  description,
  location,
  startDate,
  endDate,
  children,
  className,
  variant = "button",
}: AddToCalendarProps) {
  const handleAddToCalendar = () => {
    const formatDate = (date: Date) => {
      return date.toISOString().replace(/-|:|\.\d{3}/g, "");
    };

    const start = formatDate(startDate);
    const end = formatDate(endDate || new Date(startDate.getTime() + 3600000)); // Default 1 hour

    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "BEGIN:VEVENT",
      `DTSTART:${start}`,
      `DTEND:${end}`,
      `SUMMARY:${title}`,
      description ? `DESCRIPTION:${description.replace(/\n/g, "\\n")}` : "",
      location ? `LOCATION:${location}` : "",
      "END:VEVENT",
      "END:VCALENDAR",
    ]
      .filter(Boolean)
      .join("\r\n");

    const blob = new Blob([icsContent], {
      type: "text/calendar;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${title.replace(/\s+/g, "-").toLowerCase()}.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const baseStyles =
    variant === "button"
      ? "inline-flex items-center gap-2 rounded-lg bg-ocean-500 px-4 py-3 font-medium text-white transition-colors hover:bg-ocean-600 active:bg-ocean-700 min-h-[44px]"
      : "inline-flex items-center gap-1.5 text-ocean-600 hover:text-ocean-700 active:text-ocean-800 underline-offset-2 hover:underline min-h-[44px]";

  return (
    <button onClick={handleAddToCalendar} className={cn(baseStyles, className)}>
      <Calendar className="h-4 w-4" />
      {children || "Add to Calendar"}
    </button>
  );
}

/**
 * Touch Target Wrapper
 * Ensures minimum 44px touch target for accessibility
 */
export function TouchTarget({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative inline-flex min-h-[44px] min-w-[44px] items-center justify-center",
        className
      )}
    >
      {children}
    </div>
  );
}

/**
 * Mobile-optimized contact info block
 * Displays contact information with tap-to-action functionality
 */
export function ContactBlock({
  phone,
  email,
  address,
  className,
}: {
  phone?: string;
  email?: string;
  address?: string;
  className?: string;
}) {
  return (
    <div className={cn("space-y-3", className)}>
      {phone && (
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-ocean-100">
            <Phone className="h-5 w-5 text-ocean-600" />
          </div>
          <ClickToCall phone={phone} showIcon={false} />
        </div>
      )}

      {email && (
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-ocean-100">
            <Mail className="h-5 w-5 text-ocean-600" />
          </div>
          <ClickToEmail email={email} showIcon={false} />
        </div>
      )}

      {address && (
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-ocean-100">
            <MapPin className="h-5 w-5 text-ocean-600" />
          </div>
          <ClickToNavigate address={address} showIcon={false} />
        </div>
      )}
    </div>
  );
}
