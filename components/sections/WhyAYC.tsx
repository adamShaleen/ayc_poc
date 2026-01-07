"use client";

import { Ship, Trophy, Handshake, Heart } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const benefits = [
  {
    icon: Ship,
    title: "No Boat Required",
    description:
      "You don't need to own a boat to be part of our community. Crew opportunities abound for racing and cruising, and our members love sharing their passion for sailing.",
    highlight: "Crew up anytime",
  },
  {
    icon: Trophy,
    title: "Racing & Cruising",
    description:
      "From competitive Wednesday night races to relaxed weekend cruises, we offer something for every style of sailor. Join our racing program or explore the beautiful Columbia River.",
    highlight: "Weekly races",
  },
  {
    icon: Handshake,
    title: "Reciprocity",
    description:
      "Your AYC membership opens doors to yacht clubs around the world. Enjoy reciprocal privileges at partner clubs when you travel, expanding your sailing horizons.",
    highlight: "Global access",
  },
  {
    icon: Heart,
    title: "Community",
    description:
      "More than just a sailing club, we're a family. From potlucks to work parties, our volunteer-run organization thrives on the connections we build on and off the water.",
    highlight: "Since 1931",
  },
];

export function WhyAYC() {
  return (
    <section className="section bg-navy-700 text-white">
      <Container>
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
            Why{" "}
            <span className="bg-gradient-to-r from-ocean-300 to-brass-400 bg-clip-text text-transparent">
              Astoria Yacht Club
            </span>
            ?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            Join a welcoming community of sailors on the magnificent Columbia
            River
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={cn(
                "group relative rounded-2xl bg-white/5 p-6",
                "border border-white/10 backdrop-blur-sm",
                "transition-all duration-300",
                "hover:bg-white/10 hover:border-white/20"
              )}
            >
              {/* Icon */}
              <div
                className={cn(
                  "mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl",
                  "bg-gradient-to-br from-ocean-500 to-ocean-600",
                  "shadow-lg shadow-ocean-500/25",
                  "transition-transform duration-300 group-hover:scale-110"
                )}
              >
                <benefit.icon className="h-7 w-7 text-white" />
              </div>

              {/* Highlight badge */}
              <div className="mb-3 inline-block rounded-full bg-brass-500/20 px-3 py-1 text-xs font-semibold text-brass-400">
                {benefit.highlight}
              </div>

              {/* Content */}
              <h3 className="mb-3 text-xl font-bold text-white">
                {benefit.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-400">
                {benefit.description}
              </p>

              {/* Decorative number */}
              <div className="absolute right-4 top-4 text-4xl font-bold text-white/5">
                0{index + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="mb-6 text-lg text-gray-300">
            Ready to experience the AYC difference?
          </p>
          <a
            href="/membership"
            className={cn(
              "inline-flex items-center gap-2 rounded-xl px-8 py-4",
              "bg-brass-500 font-semibold text-white",
              "shadow-lg shadow-brass-500/25",
              "transition-all duration-300",
              "hover:bg-brass-400 hover:shadow-xl hover:shadow-brass-500/30"
            )}
          >
            Become a Member Today
          </a>
        </div>
      </Container>
    </section>
  );
}
