"use client";

import { ArrowRight, Waves } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-ocean-500 py-16 md:py-24">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-white blur-3xl" />
        <div className="absolute -right-10 bottom-10 h-40 w-40 rounded-full bg-brass-400 blur-3xl" />
      </div>

      {/* Wave decoration */}
      <Waves className="absolute right-10 top-10 h-24 w-24 text-white/10" />
      <Waves className="absolute bottom-10 left-10 h-24 w-24 rotate-180 text-white/10" />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Ready to Set Sail?
          </h2>
          <p className="mb-8 text-lg text-white/90">
            Join our community of sailing enthusiasts. Whether you&apos;re
            looking to learn, race, or simply enjoy the water, there&apos;s a
            place for you at the Astoria Yacht Club.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              variant="primary"
              size="lg"
              className="group w-full sm:w-auto"
            >
              Join the Club
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full border-white text-white hover:bg-white hover:text-ocean-600 sm:w-auto"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
