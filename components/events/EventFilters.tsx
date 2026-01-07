"use client";

import { EventType, eventTypeConfig } from "@/lib/data/events";
import { cn } from "@/lib/utils";
import { Filter, X } from "lucide-react";

interface EventFiltersProps {
  selectedTypes: EventType[];
  onTypeChange: (types: EventType[]) => void;
}

export function EventFilters({
  selectedTypes,
  onTypeChange,
}: EventFiltersProps) {
  const allTypes: EventType[] = ["racing", "cruising", "social", "meeting"];

  const toggleType = (type: EventType) => {
    if (selectedTypes.includes(type)) {
      onTypeChange(selectedTypes.filter((t) => t !== type));
    } else {
      onTypeChange([...selectedTypes, type]);
    }
  };

  const clearFilters = () => {
    onTypeChange([]);
  };

  const selectAll = () => {
    onTypeChange(allTypes);
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      <div className="mr-2 flex items-center gap-1.5 text-sm font-medium text-gray-600">
        <Filter className="h-4 w-4" />
        <span>Filter:</span>
      </div>

      {allTypes.map((type) => {
        const config = eventTypeConfig[type];
        const isSelected =
          selectedTypes.length === 0 || selectedTypes.includes(type);

        return (
          <button
            key={type}
            onClick={() => toggleType(type)}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium transition-all",
              "border-2",
              isSelected
                ? cn(
                    config.bgColor,
                    config.color,
                    config.borderColor,
                    "opacity-100"
                  )
                : "border-gray-200 bg-gray-50 text-gray-400 opacity-60 hover:opacity-80"
            )}
          >
            <span
              className={cn(
                "h-2 w-2 rounded-full",
                type === "racing" && "bg-ocean-500",
                type === "cruising" && "bg-green-500",
                type === "social" && "bg-brass-500",
                type === "meeting" && "bg-gray-500"
              )}
            />
            {config.label}
          </button>
        );
      })}

      {selectedTypes.length > 0 && selectedTypes.length < allTypes.length && (
        <button
          onClick={clearFilters}
          className="ml-2 inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700"
        >
          <X className="h-3 w-3" />
          Clear
        </button>
      )}

      {selectedTypes.length > 0 && selectedTypes.length < allTypes.length && (
        <button
          onClick={selectAll}
          className="text-xs font-medium text-ocean-600 hover:text-ocean-700"
        >
          Show all
        </button>
      )}
    </div>
  );
}
