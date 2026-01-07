"use client";

import { useState, useMemo } from "react";
import {
  Search,
  X,
  MapPin,
  Phone,
  Globe,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import {
  ReciprocityClub,
  filterReciprocityClubs,
  searchReciprocityClubs,
} from "@/lib/data/club";
import { cn } from "@/lib/utils";

interface ReciprocityContentProps {
  clubs: ReciprocityClub[];
  states: string[];
}

export function ReciprocityContent({ clubs, states }: ReciprocityContentProps) {
  const [selectedStates, setSelectedStates] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedClub, setExpandedClub] = useState<string | null>(null);

  // Filter and search clubs
  const filteredClubs = useMemo(() => {
    let result = clubs;
    result = filterReciprocityClubs(result, selectedStates);
    result = searchReciprocityClubs(result, searchQuery);
    return result;
  }, [clubs, selectedStates, searchQuery]);

  const toggleState = (state: string) => {
    setSelectedStates((prev) =>
      prev.includes(state) ? prev.filter((s) => s !== state) : [...prev, state]
    );
  };

  const clearFilters = () => {
    setSelectedStates([]);
    setSearchQuery("");
  };

  const hasFilters = selectedStates.length > 0 || searchQuery.length > 0;

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {/* Map */}
      <div className="order-2 lg:order-1">
        <div className="sticky top-4">
          <h2 className="mb-4 text-xl font-bold text-navy-800">
            Club Locations
          </h2>
          <div className="h-[500px] overflow-hidden rounded-xl border border-gray-200 bg-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2800000!2d-122.5!3d46.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Reciprocal Club Locations"
            />
          </div>
          <p className="mt-2 text-sm text-gray-500">
            Map shows approximate locations of reciprocal clubs.
          </p>
        </div>
      </div>

      {/* Club List */}
      <div className="order-1 lg:order-2">
        {/* Search and Filters */}
        <div className="mb-6 space-y-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search clubs by name or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-gray-200 bg-white py-2.5 pl-10 pr-10 text-gray-900 placeholder:text-gray-400 focus:border-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-500/20"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>

          {/* State Filters */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium text-gray-600">Filter:</span>
            {states.map((state) => (
              <button
                key={state}
                onClick={() => toggleState(state)}
                className={cn(
                  "rounded-full px-3 py-1 text-sm font-medium transition-all",
                  selectedStates.includes(state)
                    ? "bg-ocean-500 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                )}
              >
                {state}
              </button>
            ))}
            {hasFilters && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-1 rounded-full px-3 py-1 text-sm font-medium text-gray-500 hover:bg-gray-100"
              >
                <X className="h-4 w-4" />
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Results count */}
        <p className="mb-4 text-sm text-gray-600">
          {filteredClubs.length} club{filteredClubs.length !== 1 ? "s" : ""}{" "}
          found
        </p>

        {/* Club Cards */}
        <div className="space-y-3">
          {filteredClubs.map((club) => (
            <ClubCard
              key={club.id}
              club={club}
              isExpanded={expandedClub === club.id}
              onToggle={() =>
                setExpandedClub(expandedClub === club.id ? null : club.id)
              }
            />
          ))}

          {filteredClubs.length === 0 && (
            <div className="rounded-xl border-2 border-dashed border-gray-200 p-8 text-center">
              <MapPin className="mx-auto mb-3 h-10 w-10 text-gray-300" />
              <p className="font-medium text-gray-700">No clubs found</p>
              <p className="mt-1 text-sm text-gray-500">
                Try adjusting your search or filters.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ClubCard({
  club,
  isExpanded,
  onToggle,
}: {
  club: ReciprocityClub;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between p-4 text-left transition-colors hover:bg-gray-50"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ocean-100 text-ocean-600">
            <MapPin className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-semibold text-navy-800">{club.name}</h3>
            <p className="text-sm text-gray-500">{club.location}</p>
          </div>
        </div>
        {isExpanded ? (
          <ChevronUp className="h-5 w-5 text-gray-400" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-400" />
        )}
      </button>

      {isExpanded && (
        <div className="border-t border-gray-100 bg-gray-50 p-4">
          {/* Amenities */}
          <div className="mb-4">
            <p className="mb-2 text-sm font-medium text-gray-700">Amenities</p>
            <div className="flex flex-wrap gap-2">
              {club.amenities.map((amenity) => (
                <span
                  key={amenity}
                  className="rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-600 border border-gray-200"
                >
                  {amenity}
                </span>
              ))}
            </div>
          </div>

          {/* Notes */}
          {club.notes && (
            <p className="mb-4 text-sm text-gray-600 italic">{club.notes}</p>
          )}

          {/* Contact */}
          <div className="flex flex-wrap gap-3">
            {club.phone && (
              <a
                href={`tel:${club.phone}`}
                className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100"
              >
                <Phone className="h-4 w-4" />
                {club.phone}
              </a>
            )}
            {club.website && (
              <a
                href={club.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100"
              >
                <Globe className="h-4 w-4" />
                Website
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
