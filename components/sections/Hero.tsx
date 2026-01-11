"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

// Tiny blurred placeholder (ocean/sky gradient colors)
const blurDataURL =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iNzUiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZyIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiM2Yjg1YTMiLz48c3RvcCBvZmZzZXQ9IjUwJSIgc3RvcC1jb2xvcj0iIzRhNmY4YSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzJkNGE1ZSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IGZpbGw9InVybCgjZykiIHdpZHRoPSIxMDAiIGhlaWdodD0iNzUiLz48L3N2Zz4=";

export function Hero() {
  const scrollToContent = () => {
    const quickActions = document.getElementById("quick-actions");
    if (quickActions) {
      quickActions.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-[90vh] min-h-[600px] overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/homepage.jpeg"
          alt="Sailing on the Columbia River at Astoria Yacht Club"
          fill
          className="object-cover"
          priority
          quality={80}
          sizes="100vw"
          placeholder="blur"
          blurDataURL={blurDataURL}
        />
      </div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />

      {/* Content */}
      <Container className="relative z-20 flex h-full flex-col items-center justify-center text-center">
        {/* Main Headline */}
        <h1 className="mb-6 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
          <span className="inline-block">Sail</span>
          <span className="mx-4 inline-block text-brass-400">|</span>
          <span className="inline-block">Motor</span>
          <span className="mx-4 inline-block text-brass-400">|</span>
          <span className="inline-block">Paddle</span>
        </h1>

        {/* Subheading */}
        <p className="mb-10 max-w-2xl text-xl text-gray-200 md:text-2xl">
          A volunteer-run sailing club on the lower Columbia River
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button
            variant="primary"
            size="lg"
            className="min-w-[180px] text-lg shadow-xl hover:shadow-2xl"
          >
            Find Crew
          </Button>
          <Button
            variant="outline"
            size="lg"
            className={cn(
              "min-w-[180px] border-2 border-white text-lg text-white",
              "hover:bg-white hover:text-navy-700",
              "shadow-xl hover:shadow-2xl"
            )}
          >
            Join the Club
          </Button>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToContent}
          className={cn(
            "absolute bottom-8 left-1/2 -translate-x-1/2",
            "flex flex-col items-center gap-2 text-white/70 transition-colors",
            "hover:text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
          )}
          aria-label="Scroll to content"
        >
          <span className="text-sm font-medium">Explore</span>
          <ChevronDown className="h-6 w-6" />
        </button>
      </Container>

      {/* Bottom wave decoration */}
      <div className="absolute -bottom-px left-0 right-0 z-20">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          className="block h-[80px] w-full text-background"
          preserveAspectRatio="none"
        >
          <path
            d="M0 40C240 40 240 80 480 80C720 80 720 40 960 40C1200 40 1200 80 1440 80V120H0V40Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}
