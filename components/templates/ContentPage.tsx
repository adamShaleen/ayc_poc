"use client";

import { Container } from "@/components/ui/Container";
import { PageHeader } from "./PageHeader";
import { BreadcrumbItem } from "@/types";
import { cn } from "@/lib/utils";

interface ContentPageProps {
  title: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
  children: React.ReactNode;
  sidebar?: React.ReactNode;
  className?: string;
}

export function ContentPage({
  title,
  description,
  breadcrumbs,
  children,
  sidebar,
  className,
}: ContentPageProps) {
  return (
    <div>
      <PageHeader
        title={title}
        description={description}
        breadcrumbs={breadcrumbs}
      />

      <Container className={cn("py-12 md:py-16", className)}>
        {sidebar ? (
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main content */}
            <div className="lg:col-span-2">
              <article className="prose prose-lg max-w-none prose-headings:text-navy-800 prose-a:text-ocean-600 prose-a:no-underline hover:prose-a:underline">
                {children}
              </article>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">{sidebar}</div>
            </aside>
          </div>
        ) : (
          <article className="prose prose-lg mx-auto max-w-3xl prose-headings:text-navy-800 prose-a:text-ocean-600 prose-a:no-underline hover:prose-a:underline">
            {children}
          </article>
        )}
      </Container>
    </div>
  );
}

// Sidebar card component for use with ContentPage
interface SidebarCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function SidebarCard({ title, children, className }: SidebarCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-gray-100 bg-white p-6 shadow-sm",
        className
      )}
    >
      <h3 className="mb-4 font-semibold text-navy-800">{title}</h3>
      {children}
    </div>
  );
}
