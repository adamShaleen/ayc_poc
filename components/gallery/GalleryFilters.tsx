"use client";

import { Search, X } from "lucide-react";
import { PhotoAlbum, albumConfig } from "@/lib/data/gallery";
import { cn } from "@/lib/utils";

interface GalleryFiltersProps {
  selectedAlbums: PhotoAlbum[];
  onAlbumChange: (albums: PhotoAlbum[]) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const albums: PhotoAlbum[] = [
  "racing",
  "cruising",
  "social",
  "clubhouse",
  "historical",
];

export function GalleryFilters({
  selectedAlbums,
  onAlbumChange,
  searchQuery,
  onSearchChange,
}: GalleryFiltersProps) {
  const toggleAlbum = (album: PhotoAlbum) => {
    if (selectedAlbums.includes(album)) {
      onAlbumChange(selectedAlbums.filter((a) => a !== album));
    } else {
      onAlbumChange([...selectedAlbums, album]);
    }
  };

  const clearFilters = () => {
    onAlbumChange([]);
    onSearchChange("");
  };

  const hasActiveFilters = selectedAlbums.length > 0 || searchQuery.length > 0;

  return (
    <div className="space-y-4">
      {/* Search bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search photos by title or caption..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full rounded-lg border border-gray-200 bg-white py-2.5 pl-10 pr-10 text-gray-900 placeholder:text-gray-400 focus:border-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-500/20"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            aria-label="Clear search"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {/* Album filters */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm font-medium text-gray-600">Albums:</span>
        {albums.map((album) => {
          const isSelected = selectedAlbums.includes(album);
          return (
            <button
              key={album}
              onClick={() => toggleAlbum(album)}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm font-medium transition-all",
                isSelected
                  ? "bg-ocean-500 text-white shadow-sm"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              )}
              aria-pressed={isSelected}
            >
              {albumConfig[album].label}
            </button>
          );
        })}

        {/* Clear all button */}
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="ml-2 flex items-center gap-1 rounded-full px-3 py-1.5 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700"
          >
            <X className="h-4 w-4" />
            Clear all
          </button>
        )}
      </div>

      {/* Active filter count */}
      {selectedAlbums.length > 0 && (
        <p className="text-sm text-gray-500">
          Showing photos from {selectedAlbums.length} album
          {selectedAlbums.length > 1 ? "s" : ""}
        </p>
      )}
    </div>
  );
}
