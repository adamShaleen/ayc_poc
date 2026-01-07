"use client";

import Link from "next/link";
import { Users, UserPlus, Calendar, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const actions = [
  {
    title: "Join the Club",
    description:
      "Become a member and unlock access to club facilities, events, racing programs, and a welcoming community of sailors.",
    icon: UserPlus,
    href: "/membership",
    color: "navy" as const,
  },
  {
    title: "Find Crew",
    description:
      "Looking for crew or a boat to sail on? Connect with fellow members for racing, cruising, or day sailing adventures.",
    icon: Users,
    href: "/crew",
    color: "ocean" as const,
  },
  {
    title: "View Events",
    description:
      "Check out our upcoming races, social gatherings, educational seminars, and community events throughout the year.",
    icon: Calendar,
    href: "/events",
    color: "brass" as const,
  },
];

const colorStyles = {
  navy: {
    icon: "bg-navy-100 text-navy-700",
    hover: "group-hover:bg-navy-700 group-hover:text-white",
    border: "group-hover:border-navy-700",
    arrow: "text-navy-700",
  },
  ocean: {
    icon: "bg-ocean-100 text-ocean-700",
    hover: "group-hover:bg-ocean-600 group-hover:text-white",
    border: "group-hover:border-ocean-600",
    arrow: "text-ocean-600",
  },
  brass: {
    icon: "bg-brass-100 text-brass-700",
    hover: "group-hover:bg-brass-500 group-hover:text-white",
    border: "group-hover:border-brass-500",
    arrow: "text-brass-600",
  },
};

export function QuickActions() {
  return (
    <section id="quick-actions" className="section bg-gray-50">
      <Container>
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="section-heading">Get Started</h2>
          <p className="section-subheading mx-auto max-w-2xl">
            Whether you&apos;re an experienced sailor or just getting started,
            there&apos;s a place for you at AYC.
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {actions.map((action) => {
            const styles = colorStyles[action.color];
            return (
              <Link
                key={action.title}
                href={action.href}
                className={cn(
                  "group relative overflow-hidden rounded-2xl bg-white p-8",
                  "border-2 border-gray-100 shadow-md",
                  "transition-all duration-300",
                  "hover:-translate-y-2 hover:shadow-xl",
                  styles.border
                )}
              >
                {/* Icon */}
                <div
                  className={cn(
                    "mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl",
                    "transition-all duration-300",
                    styles.icon,
                    styles.hover
                  )}
                >
                  <action.icon className="h-7 w-7" />
                </div>

                {/* Content */}
                <h3 className="mb-3 text-xl font-bold text-navy-800">
                  {action.title}
                </h3>
                <p className="mb-6 text-gray-600 leading-relaxed">
                  {action.description}
                </p>

                {/* Arrow link */}
                <div
                  className={cn(
                    "inline-flex items-center gap-2 font-semibold",
                    "transition-all duration-300",
                    styles.arrow
                  )}
                >
                  <span>Learn more</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>

                {/* Decorative corner accent */}
                <div
                  className={cn(
                    "absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-0",
                    "transition-all duration-300 group-hover:opacity-10",
                    action.color === "navy" && "bg-navy-700",
                    action.color === "ocean" && "bg-ocean-500",
                    action.color === "brass" && "bg-brass-500"
                  )}
                />
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
