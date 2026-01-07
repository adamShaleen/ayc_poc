"use client";

import Link from "next/link";
import { ArrowRight, Trophy, MapPin, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Featured() {
  return (
    <section className="section bg-white">
      <Container>
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brass-100 px-4 py-2 text-sm font-semibold text-brass-700">
            <Trophy className="h-4 w-4" />
            Featured Story
          </div>
          <h2 className="section-heading">Club News & Highlights</h2>
        </div>

        {/* Featured Card */}
        <div className="mx-auto max-w-5xl">
          <div
            className={cn(
              "group overflow-hidden rounded-3xl bg-gradient-to-br from-navy-50 to-ocean-50",
              "border border-gray-100 shadow-lg",
              "transition-all duration-300 hover:shadow-xl"
            )}
          >
            <div className="grid md:grid-cols-2">
              {/* Image Side */}
              {/* TODO: Replace with actual photo of Heidi Brown or club event */}
              <div className="relative min-h-[300px] bg-gradient-to-br from-ocean-400 to-navy-600 md:min-h-[400px]">
                {/* Placeholder sailing imagery */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white/80">
                    <svg
                      className="mx-auto mb-4 h-20 w-20 opacity-50"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="text-sm">Featured Image</p>
                  </div>
                </div>

                {/* Image overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                {/* Badge */}
                <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-navy-700 backdrop-blur-sm">
                  <MapPin className="h-3 w-3" />
                  Clipper Round the World Race
                </div>

                {/*
                <Image
                  src="/images/featured-heidi-brown.jpg"
                  alt="Heidi Brown - Clipper Race"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                */}
              </div>

              {/* Content Side */}
              <div className="flex flex-col justify-center p-8 md:p-10">
                <div className="mb-4 text-sm font-medium text-ocean-600">
                  Member Spotlight
                </div>

                <h3 className="mb-4 text-2xl font-bold text-navy-800 md:text-3xl">
                  Heidi Brown Takes on the Clipper Race
                </h3>

                <p className="mb-6 text-gray-600 leading-relaxed">
                  AYC member Heidi Brown is embarking on an incredible adventure
                  as she competes in the prestigious Clipper Round the World
                  Yacht Race. Follow her journey as she represents our club on
                  the global stage, racing across oceans and pushing the
                  boundaries of what&apos;s possible.
                </p>

                <div className="mb-6 flex flex-wrap gap-3">
                  <span className="rounded-full bg-navy-100 px-3 py-1 text-sm font-medium text-navy-700">
                    Ocean Racing
                  </span>
                  <span className="rounded-full bg-ocean-100 px-3 py-1 text-sm font-medium text-ocean-700">
                    40,000 Miles
                  </span>
                  <span className="rounded-full bg-brass-100 px-3 py-1 text-sm font-medium text-brass-700">
                    11 Months
                  </span>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button variant="primary" size="md" className="group/btn">
                    Follow the Journey
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                  <Link
                    href="https://www.clipperroundtheworld.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold",
                      "text-gray-600 transition-colors hover:text-navy-700"
                    )}
                  >
                    Clipper Race Website
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* More News Link */}
        <div className="mt-10 text-center">
          <Link
            href="/news"
            className={cn(
              "inline-flex items-center gap-2 font-semibold text-ocean-600",
              "transition-colors hover:text-ocean-700"
            )}
          >
            View all club news
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
