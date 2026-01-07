"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";
import { BreadcrumbItem } from "@/types";

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("flex items-center text-sm", className)}
    >
      <ol
        className="flex items-center gap-1"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {/* Home link */}
        <li
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
        >
          <Link
            href="/"
            className={cn(
              "flex items-center gap-1 rounded-md px-2 py-1",
              "text-gray-500 transition-colors hover:text-navy-700"
            )}
            itemProp="item"
          >
            <Home className="h-4 w-4" />
            <span className="sr-only" itemProp="name">
              Home
            </span>
          </Link>
          <meta itemProp="position" content="1" />
        </li>

        {items.map((item, index) => (
          <li
            key={item.href || item.label}
            className="flex items-center gap-1"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <ChevronRight
              className="h-4 w-4 text-gray-400"
              aria-hidden="true"
            />
            {item.href ? (
              <Link
                href={item.href}
                className={cn(
                  "rounded-md px-2 py-1",
                  "text-gray-500 transition-colors hover:text-navy-700"
                )}
                itemProp="item"
              >
                <span itemProp="name">{item.label}</span>
              </Link>
            ) : (
              <span
                className="px-2 py-1 font-medium text-navy-700"
                itemProp="name"
                aria-current="page"
              >
                {item.label}
              </span>
            )}
            <meta itemProp="position" content={String(index + 2)} />
          </li>
        ))}
      </ol>
    </nav>
  );
}
