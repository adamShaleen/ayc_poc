"use client";

import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { BreadcrumbItem } from "@/types";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
  children?: React.ReactNode;
  className?: string;
}

export function PageHeader({
  title,
  description,
  breadcrumbs,
  children,
  className,
}: PageHeaderProps) {
  return (
    <div
      className={cn(
        "bg-gradient-to-br from-navy-700 via-navy-800 to-navy-900 pt-24 pb-12 md:pt-28 md:pb-16",
        className
      )}
    >
      <Container>
        {breadcrumbs && breadcrumbs.length > 0 && (
          <Breadcrumbs
            items={breadcrumbs}
            className="mb-4 [&_a]:text-white/60 [&_a:hover]:text-white [&_span]:text-white [&_svg]:text-white/40"
          />
        )}

        <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
          {title}
        </h1>

        {description && (
          <p className="mt-4 max-w-2xl text-lg text-gray-300">{description}</p>
        )}

        {children && <div className="mt-6">{children}</div>}
      </Container>

      {/* Bottom wave decoration */}
      <div className="relative mt-8">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          className="w-full text-background"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60L60 55C120 50 240 40 360 35C480 30 600 30 720 35C840 40 960 50 1080 52C1200 54 1320 48 1380 45L1440 42V60H0Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
}
