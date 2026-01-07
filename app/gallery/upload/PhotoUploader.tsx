"use client";

import { useState, useCallback, useRef } from "react";
import Image from "next/image";
import {
  Upload,
  X,
  ImagePlus,
  Check,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { PhotoAlbum, albumConfig } from "@/lib/data/gallery";
import { cn } from "@/lib/utils";

interface UploadedPhoto {
  id: string;
  file: File;
  preview: string;
  title: string;
  caption: string;
  album: PhotoAlbum;
  status: "pending" | "uploading" | "success" | "error";
}

const albums: PhotoAlbum[] = [
  "racing",
  "cruising",
  "social",
  "clubhouse",
  "historical",
];

export function PhotoUploader() {
  const [photos, setPhotos] = useState<UploadedPhoto[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFiles = useCallback((files: FileList | null) => {
    if (!files) return;

    const newPhotos: UploadedPhoto[] = [];

    Array.from(files).forEach((file) => {
      // Only accept images
      if (!file.type.startsWith("image/")) return;

      const id = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      const preview = URL.createObjectURL(file);

      // Generate a default title from filename
      const title = file.name
        .replace(/\.[^/.]+$/, "") // Remove extension
        .replace(/[-_]/g, " ") // Replace dashes and underscores with spaces
        .replace(/\b\w/g, (l) => l.toUpperCase()); // Capitalize words

      newPhotos.push({
        id,
        file,
        preview,
        title,
        caption: "",
        album: "social",
        status: "pending",
      });
    });

    setPhotos((prev) => [...prev, ...newPhotos]);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      handleFiles(e.dataTransfer.files);
    },
    [handleFiles]
  );

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      handleFiles(e.target.files);
    },
    [handleFiles]
  );

  const removePhoto = useCallback((id: string) => {
    setPhotos((prev) => {
      const photo = prev.find((p) => p.id === id);
      if (photo) {
        URL.revokeObjectURL(photo.preview);
      }
      return prev.filter((p) => p.id !== id);
    });
  }, []);

  const updatePhoto = useCallback(
    (id: string, updates: Partial<UploadedPhoto>) => {
      setPhotos((prev) =>
        prev.map((p) => (p.id === id ? { ...p, ...updates } : p))
      );
    },
    []
  );

  const handleSubmit = useCallback(async () => {
    if (photos.length === 0) return;

    setIsSubmitting(true);

    // Simulate upload process
    for (const photo of photos) {
      updatePhoto(photo.id, { status: "uploading" });
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate upload time
      updatePhoto(photo.id, { status: "success" });
    }

    setIsSubmitting(false);
    setSubmitSuccess(true);
  }, [photos, updatePhoto]);

  if (submitSuccess) {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <Check className="h-8 w-8 text-green-600" />
        </div>
        <h2 className="mb-2 text-xl font-bold text-gray-900">
          Photos Submitted!
        </h2>
        <p className="mb-6 text-gray-600">
          Your {photos.length} photo{photos.length > 1 ? "s have" : " has"} been
          submitted for review. You&apos;ll be notified when they&apos;re added
          to the gallery.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/gallery"
            className="rounded-lg bg-ocean-500 px-6 py-2 font-medium text-white transition-colors hover:bg-ocean-600"
          >
            Back to Gallery
          </a>
          <button
            onClick={() => {
              setPhotos([]);
              setSubmitSuccess(false);
            }}
            className="rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            Upload More
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Drop zone */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={cn(
          "cursor-pointer rounded-xl border-2 border-dashed p-12 text-center transition-all",
          isDragging
            ? "border-ocean-500 bg-ocean-50"
            : "border-gray-300 bg-white hover:border-ocean-400 hover:bg-gray-50"
        )}
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/*"
          onChange={handleFileSelect}
          className="hidden"
        />

        <div
          className={cn(
            "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full transition-colors",
            isDragging ? "bg-ocean-100" : "bg-gray-100"
          )}
        >
          {isDragging ? (
            <Upload className="h-8 w-8 text-ocean-500" />
          ) : (
            <ImagePlus className="h-8 w-8 text-gray-400" />
          )}
        </div>

        <h3 className="mb-2 text-lg font-semibold text-gray-900">
          {isDragging ? "Drop photos here" : "Drag & drop photos"}
        </h3>
        <p className="text-gray-500">
          or{" "}
          <span className="font-medium text-ocean-500">browse your files</span>
        </p>
        <p className="mt-2 text-sm text-gray-400">
          Supports JPG, PNG, and WebP up to 10MB each
        </p>
      </div>

      {/* Photo list */}
      {photos.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">
            {photos.length} photo{photos.length > 1 ? "s" : ""} to upload
          </h3>

          <div className="space-y-4">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="relative rounded-xl border border-gray-200 bg-white p-4"
              >
                <div className="flex gap-4">
                  {/* Preview */}
                  <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
                    <Image
                      src={photo.preview}
                      alt={photo.title}
                      fill
                      className="object-cover"
                    />
                    {photo.status === "uploading" && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                        <Loader2 className="h-6 w-6 animate-spin text-white" />
                      </div>
                    )}
                    {photo.status === "success" && (
                      <div className="absolute inset-0 flex items-center justify-center bg-green-500/80">
                        <Check className="h-6 w-6 text-white" />
                      </div>
                    )}
                    {photo.status === "error" && (
                      <div className="absolute inset-0 flex items-center justify-center bg-red-500/80">
                        <AlertCircle className="h-6 w-6 text-white" />
                      </div>
                    )}
                  </div>

                  {/* Form fields */}
                  <div className="flex-1 space-y-3">
                    <input
                      type="text"
                      value={photo.title}
                      onChange={(e) =>
                        updatePhoto(photo.id, { title: e.target.value })
                      }
                      placeholder="Photo title"
                      disabled={photo.status !== "pending"}
                      className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-500/20 disabled:bg-gray-50 disabled:text-gray-500"
                    />

                    <div className="flex gap-3">
                      <input
                        type="text"
                        value={photo.caption}
                        onChange={(e) =>
                          updatePhoto(photo.id, { caption: e.target.value })
                        }
                        placeholder="Add a caption (optional)"
                        disabled={photo.status !== "pending"}
                        className="flex-1 rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-500/20 disabled:bg-gray-50 disabled:text-gray-500"
                      />

                      <select
                        value={photo.album}
                        onChange={(e) =>
                          updatePhoto(photo.id, {
                            album: e.target.value as PhotoAlbum,
                          })
                        }
                        disabled={photo.status !== "pending"}
                        className="rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-500/20 disabled:bg-gray-50 disabled:text-gray-500"
                      >
                        {albums.map((album) => (
                          <option key={album} value={album}>
                            {albumConfig[album].label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Remove button */}
                  {photo.status === "pending" && (
                    <button
                      onClick={() => removePhoto(photo.id)}
                      className="flex-shrink-0 rounded-full p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
                      aria-label="Remove photo"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Submit button */}
      {photos.length > 0 && !photos.every((p) => p.status === "success") && (
        <div className="flex justify-end gap-4">
          <button
            onClick={() => {
              photos.forEach((p) => URL.revokeObjectURL(p.preview));
              setPhotos([]);
            }}
            disabled={isSubmitting}
            className="rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Clear All
          </button>
          <button
            onClick={handleSubmit}
            disabled={isSubmitting || photos.some((p) => !p.title.trim())}
            className="flex items-center gap-2 rounded-lg bg-ocean-500 px-6 py-2 font-medium text-white transition-colors hover:bg-ocean-600 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Uploading...
              </>
            ) : (
              <>
                <Upload className="h-4 w-4" />
                Submit {photos.length} Photo{photos.length > 1 ? "s" : ""}
              </>
            )}
          </button>
        </div>
      )}

      {/* Guidelines */}
      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <h3 className="mb-3 font-semibold text-gray-900">Upload Guidelines</h3>
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="flex items-start gap-2">
            <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
            Photos should be from AYC events or related activities
          </li>
          <li className="flex items-start gap-2">
            <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
            High-resolution images (at least 1200px wide) work best
          </li>
          <li className="flex items-start gap-2">
            <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
            Add descriptive titles and captions to help others find your photos
          </li>
          <li className="flex items-start gap-2">
            <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
            Ensure you have permission to share photos of people
          </li>
        </ul>
      </div>
    </div>
  );
}
