"use client";

import { useState } from "react";
import { Mail, Send, CheckCircle, Loader2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    // Simulate API call - replace with actual newsletter signup
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setStatus("success");
    setEmail("");

    // Reset after 3 seconds
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section className="section bg-gradient-to-br from-ocean-50 to-gray-50">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          {/* Icon */}
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-ocean-100">
            <Mail className="h-8 w-8 text-ocean-600" />
          </div>

          {/* Heading */}
          <h2 className="mb-4 text-3xl font-bold text-navy-800 md:text-4xl">
            Stay Connected
          </h2>
          <p className="mb-8 text-lg text-gray-600">
            Get the latest news, event updates, and sailing tips delivered to
            your inbox. Join our community of sailors and never miss an
            adventure.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mx-auto max-w-xl">
            <div
              className={cn(
                "flex flex-col gap-3 sm:flex-row",
                "rounded-2xl bg-white p-2 shadow-lg",
                "border border-gray-100",
                "focus-within:border-ocean-300 focus-within:ring-4 focus-within:ring-ocean-100"
              )}
            >
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className={cn(
                    "w-full rounded-xl py-4 pl-12 pr-4",
                    "text-gray-800 placeholder:text-gray-400",
                    "border-0 bg-transparent",
                    "focus:outline-none focus:ring-0"
                  )}
                  disabled={status === "loading" || status === "success"}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={
                  status === "loading" || status === "success" || !email
                }
                className={cn(
                  "inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4",
                  "font-semibold transition-all duration-300",
                  "focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:ring-offset-2",
                  "disabled:cursor-not-allowed",
                  status === "success"
                    ? "bg-green-500 text-white"
                    : "bg-ocean-500 text-white hover:bg-ocean-600 disabled:bg-gray-300"
                )}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>Subscribing...</span>
                  </>
                ) : status === "success" ? (
                  <>
                    <CheckCircle className="h-5 w-5" />
                    <span>Subscribed!</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Subscribe</span>
                  </>
                )}
              </button>
            </div>

            {/* Privacy note */}
            <p className="mt-4 text-sm text-gray-500">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>

          {/* Social proof */}
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-500">
            <div className="flex -space-x-2">
              {/* Placeholder avatars - can be replaced with actual member photos */}
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={cn(
                    "h-8 w-8 rounded-full border-2 border-white",
                    i === 1 && "bg-navy-300",
                    i === 2 && "bg-ocean-300",
                    i === 3 && "bg-brass-300",
                    i === 4 && "bg-navy-400"
                  )}
                />
              ))}
            </div>
            <span>Join 200+ members staying informed</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
