"use client";

import { Container } from "@/components/ui/Container";
import { PageHeader } from "./PageHeader";
import { BreadcrumbItem } from "@/types";
import { cn } from "@/lib/utils";

interface GridPageProps {
  title: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
  children: React.ReactNode;
  filters?: React.ReactNode;
  className?: string;
}

export function GridPage({
  title,
  description,
  breadcrumbs,
  children,
  filters,
  className,
}: GridPageProps) {
  return (
    <div>
      <PageHeader
        title={title}
        description={description}
        breadcrumbs={breadcrumbs}
      />

      <Container className={cn("py-12 md:py-16", className)}>
        {filters && (
          <div className="mb-8 flex flex-wrap items-center gap-4">
            {filters}
          </div>
        )}
        {children}
      </Container>
    </div>
  );
}

// Grid layouts
interface CardGridProps {
  children: React.ReactNode;
  columns?: 2 | 3 | 4;
  className?: string;
}

export function CardGrid({ children, columns = 3, className }: CardGridProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={cn("grid gap-6", gridCols[columns], className)}>
      {children}
    </div>
  );
}

// Generic card for grid items
interface GridCardProps {
  title: string;
  description?: string;
  image?: string;
  href?: string;
  meta?: string;
  tags?: string[];
  children?: React.ReactNode;
  className?: string;
}

export function GridCard({
  title,
  description,
  image,
  href,
  meta,
  tags,
  children,
  className,
}: GridCardProps) {
  const CardWrapper = href ? "a" : "div";

  return (
    <CardWrapper
      href={href}
      className={cn(
        "group overflow-hidden rounded-xl bg-white shadow-md",
        "border border-gray-100 transition-all duration-300",
        href && "hover:-translate-y-1 hover:shadow-xl",
        className
      )}
    >
      {/* Image */}
      {image ? (
        <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
          {/* TODO: Replace with Next.js Image component when images are available */}
          <div
            className="h-full w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
            style={{ backgroundImage: `url(${image})` }}
          />
        </div>
      ) : (
        <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-ocean-100 to-navy-100">
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              className="h-12 w-12 text-ocean-300"
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
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-5">
        {meta && (
          <p className="mb-2 text-sm font-medium text-ocean-600">{meta}</p>
        )}

        <h3 className="text-lg font-semibold text-navy-800 group-hover:text-ocean-600">
          {title}
        </h3>

        {description && (
          <p className="mt-2 text-sm text-gray-600 line-clamp-2">
            {description}
          </p>
        )}

        {tags && tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {children}
      </div>
    </CardWrapper>
  );
}

// Filter button component
interface FilterButtonProps {
  active?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

export function FilterButton({ active, onClick, children }: FilterButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full px-4 py-2 text-sm font-medium transition-colors",
        active
          ? "bg-navy-700 text-white"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      )}
    >
      {children}
    </button>
  );
}
