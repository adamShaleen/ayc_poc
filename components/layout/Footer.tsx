"use client";

import Link from "next/link";
import {
  Facebook,
  Youtube,
  Instagram,
  MapPin,
  Phone,
  Mail,
  Anchor,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import {
  SITE_CONFIG,
  NAV_ITEMS,
  SOCIAL_LINKS,
  CONTACT_INFO,
} from "@/lib/constants";
import { cn } from "@/lib/utils";

const socialIcons = {
  facebook: Facebook,
  youtube: Youtube,
  instagram: Instagram,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-700 text-white">
      {/* Wave decoration */}
      <div className="relative h-16 overflow-hidden bg-gray-50">
        <svg
          className="absolute bottom-0 w-full text-navy-700"
          viewBox="0 0 1440 48"
          fill="currentColor"
          preserveAspectRatio="none"
        >
          <path d="M0,48 C240,16 480,0 720,16 C960,32 1200,48 1440,32 L1440,48 L0,48 Z" />
        </svg>
      </div>

      <Container className="py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About Section */}
          <div className="lg:col-span-1">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-12 items-center justify-center rounded-sm bg-white/10">
                <Anchor className="h-5 w-5 text-brass-400" />
              </div>
              <div>
                <h3 className="font-bold text-white">{SITE_CONFIG.name}</h3>
                <p className="text-xs text-ocean-300">
                  Est. {SITE_CONFIG.established}
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-300">
              {SITE_CONFIG.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-semibold text-brass-400">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-300 transition-colors hover:text-brass-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 font-semibold text-brass-400">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-ocean-400" />
                <span className="text-sm text-gray-300">
                  {CONTACT_INFO.address}
                  <br />
                  {CONTACT_INFO.city}, {CONTACT_INFO.state} {CONTACT_INFO.zip}
                </span>
              </li>
              {CONTACT_INFO.phone && (
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 flex-shrink-0 text-ocean-400" />
                  <a
                    href={`tel:${CONTACT_INFO.phone.replace(/\D/g, "")}`}
                    className="text-sm text-gray-300 transition-colors hover:text-brass-400"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                </li>
              )}
              {CONTACT_INFO.email && (
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 flex-shrink-0 text-ocean-400" />
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-sm text-gray-300 transition-colors hover:text-brass-400"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="mb-4 font-semibold text-brass-400">Follow Us</h4>
            <p className="mb-4 text-sm text-gray-300">
              Stay connected with the latest news, events, and sailing
              adventures.
            </p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((link) => {
                const Icon = socialIcons[link.platform];
                return (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-full",
                      "bg-white/10 text-white transition-all duration-200",
                      "hover:bg-brass-500 hover:text-white hover:scale-110"
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link
              href="/privacy"
              className="transition-colors hover:text-brass-400"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="transition-colors hover:text-brass-400"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
