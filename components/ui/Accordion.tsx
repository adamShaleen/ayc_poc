"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItem {
  id: string;
  question: string;
  answer: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  className?: string;
}

export function Accordion({
  items,
  allowMultiple = false,
  className,
}: AccordionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        if (!allowMultiple) {
          newSet.clear();
        }
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div
      className={cn(
        "divide-y divide-gray-200 rounded-xl border border-gray-200",
        className
      )}
    >
      {items.map((item) => {
        const isOpen = openItems.has(item.id);
        return (
          <div
            key={item.id}
            className="bg-white first:rounded-t-xl last:rounded-b-xl"
          >
            <button
              type="button"
              onClick={() => toggleItem(item.id)}
              className={cn(
                "flex w-full items-center justify-between px-6 py-4 text-left",
                "transition-colors hover:bg-gray-50",
                "focus:outline-none focus:ring-2 focus:ring-inset focus:ring-ocean-500",
                isOpen && "bg-gray-50"
              )}
              aria-expanded={isOpen}
            >
              <span className="font-medium text-navy-800">{item.question}</span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 flex-shrink-0 text-gray-500 transition-transform duration-200",
                  isOpen && "rotate-180"
                )}
              />
            </button>
            <div
              className={cn(
                "overflow-hidden transition-all duration-200",
                isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              )}
            >
              <div className="px-6 pb-4 text-gray-600">{item.answer}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
