"use client";

import Link from "next/link";
import { Anchor } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/lib/constants";

interface LogoProps {
  condensed?: boolean;
  className?: string;
}

export function Logo({ condensed = false, className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-2 transition-all duration-300",
        className
      )}
    >
      {/* Burgee-style logo */}
      <div
        className={cn(
          "relative flex items-center justify-center rounded-sm bg-navy-700 transition-all duration-300",
          condensed ? "h-8 w-10" : "h-10 w-12"
        )}
      >
        {/* Burgee triangle shape */}
        <div className="absolute inset-0 overflow-hidden rounded-sm">
          <div className="absolute inset-0 bg-gradient-to-r from-navy-700 via-ocean-500 to-navy-700" />
          <div className="absolute bottom-0 left-1/2 h-0 w-0 -translate-x-1/2 border-l-[24px] border-r-[24px] border-t-[8px] border-l-transparent border-r-transparent border-t-brass-500" />
        </div>
        <Anchor
          className={cn(
            "relative z-10 text-white transition-all duration-300",
            condensed ? "h-4 w-4" : "h-5 w-5"
          )}
        />
      </div>

      {/* Text */}
      <div
        className={cn(
          "flex flex-col transition-all duration-300",
          condensed ? "gap-0" : "gap-0.5"
        )}
      >
        <span
          className={cn(
            "font-bold leading-none text-navy-700 transition-all duration-300",
            condensed ? "text-base" : "text-lg"
          )}
        >
          {SITE_CONFIG.shortName}
        </span>
        {!condensed && (
          <span className="text-xs leading-none text-ocean-600">
            Est. {SITE_CONFIG.established}
          </span>
        )}
      </div>
    </Link>
  );
}
