"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContent = () => {
    const quickActions = document.getElementById("quick-actions");
    if (quickActions) {
      quickActions.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 z-0 scale-110"
        style={{
          transform: `translateY(${scrollY * 0.4}px)`,
        }}
      >
        <Image
          src="/images/homepage.jpeg"
          alt="Sailing on the Columbia River at Astoria Yacht Club"
          fill
          className="object-cover"
          priority
          quality={90}
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
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </button>
      </Container>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          className="w-full text-background"
          preserveAspectRatio="none"
        >
          <path
            d="M0 80L60 74.7C120 69 240 59 360 53.3C480 48 600 48 720 53.3C840 59 960 69 1080 69.3C1200 69 1320 59 1380 53.3L1440 48V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}
