"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  ExternalLink,
  Download,
  ChevronRight,
} from "lucide-react";
import { ResourceItem } from "@/lib/data/club";
import { cn } from "@/lib/utils";

interface ResourceAccordionProps {
  title: string;
  icon: React.ReactNode;
  items: ResourceItem[];
}

export function ResourceAccordion({
  title,
  icon,
  items,
}: ResourceAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-4 text-left transition-colors hover:bg-gray-50"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ocean-100 text-ocean-600">
            {icon}
          </div>
          <div>
            <h3 className="font-semibold text-navy-800">{title}</h3>
            <p className="text-sm text-gray-500">{items.length} resources</p>
          </div>
        </div>
        <ChevronDown
          className={cn(
            "h-5 w-5 text-gray-400 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>

      <div
        className={cn(
          "grid transition-all duration-200 ease-in-out",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <div className="border-t border-gray-200 px-4 py-2">
            {items.map((item, index) => (
              <ResourceLink key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ResourceLink({ item }: { item: ResourceItem }) {
  const isExternal = item.type === "external";
  const isPdf = item.type === "pdf";

  const content = (
    <div className="flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-gray-50">
      <div className="flex-1">
        <p className="font-medium text-gray-900">{item.title}</p>
        <p className="text-sm text-gray-500">{item.description}</p>
      </div>
      {isExternal && <ExternalLink className="h-4 w-4 text-gray-400" />}
      {isPdf && <Download className="h-4 w-4 text-gray-400" />}
      {item.type === "page" && (
        <ChevronRight className="h-4 w-4 text-gray-400" />
      )}
    </div>
  );

  if (isExternal) {
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return <Link href={item.href}>{content}</Link>;
}
