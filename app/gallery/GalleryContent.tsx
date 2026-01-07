"use client";

import { useState, useMemo } from "react";
import { ImageOff } from "lucide-react";
import {
  Photo,
  PhotoAlbum,
  mockPhotos,
  filterPhotosByAlbum,
  searchPhotos,
  sortPhotosByDate,
} from "@/lib/data/gallery";
import { GalleryFilters } from "@/components/gallery/GalleryFilters";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";

export function GalleryContent() {
  const [selectedAlbums, setSelectedAlbums] = useState<PhotoAlbum[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter and sort photos
  const filteredPhotos = useMemo(() => {
    let photos: Photo[] = mockPhotos;

    // Apply album filter
    photos = filterPhotosByAlbum(photos, selectedAlbums);

    // Apply search filter
    photos = searchPhotos(photos, searchQuery);

    // Sort by date (newest first)
    photos = sortPhotosByDate(photos, "desc");

    return photos;
  }, [selectedAlbums, searchQuery]);

  const hasFilters = selectedAlbums.length > 0 || searchQuery.length > 0;

  return (
    <div>
      {/* Filters */}
      <div className="mb-8 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
        <GalleryFilters
          selectedAlbums={selectedAlbums}
          onAlbumChange={setSelectedAlbums}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
      </div>

      {/* Results count */}
      <div className="mb-6 flex items-center justify-between">
        <p className="text-sm text-gray-600">
          {filteredPhotos.length} photo{filteredPhotos.length !== 1 ? "s" : ""}
          {hasFilters ? " found" : " in gallery"}
        </p>
      </div>

      {/* Gallery grid */}
      {filteredPhotos.length > 0 ? (
        <GalleryGrid photos={filteredPhotos} />
      ) : (
        <div className="rounded-xl border-2 border-dashed border-gray-200 p-12 text-center">
          <ImageOff className="mx-auto mb-4 h-12 w-12 text-gray-300" />
          <h3 className="mb-2 text-lg font-semibold text-gray-700">
            No photos found
          </h3>
          <p className="text-gray-500">
            {searchQuery
              ? `No photos match "${searchQuery}". Try a different search term.`
              : "No photos match your current filters. Try selecting different albums."}
          </p>
        </div>
      )}
    </div>
  );
}
