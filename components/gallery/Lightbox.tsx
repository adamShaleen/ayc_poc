"use client";

import { useEffect, useCallback, useState } from "react";
import Image from "next/image";
import { format } from "date-fns";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Download,
  Share2,
  Calendar,
  Camera,
  Loader2,
} from "lucide-react";
import { Photo } from "@/lib/data/gallery";
import { cn } from "@/lib/utils";

interface LightboxProps {
  photos: Photo[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function Lightbox({
  photos,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}: LightboxProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [showInfo, setShowInfo] = useState(true);

  const currentPhoto = photos[currentIndex];
  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < photos.length - 1;

  const goToPrevious = useCallback(() => {
    if (hasPrevious) {
      setIsLoading(true);
      onNavigate(currentIndex - 1);
    }
  }, [currentIndex, hasPrevious, onNavigate]);

  const goToNext = useCallback(() => {
    if (hasNext) {
      setIsLoading(true);
      onNavigate(currentIndex + 1);
    }
  }, [currentIndex, hasNext, onNavigate]);

  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          goToPrevious();
          break;
        case "ArrowRight":
          goToNext();
          break;
        case "i":
          setShowInfo((prev) => !prev);
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, goToPrevious, goToNext]);

  // Reset loading state when photo changes
  useEffect(() => {
    setIsLoading(true);
  }, [currentIndex]);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: currentPhoto.title,
          text: currentPhoto.caption,
          url: window.location.href,
        });
      } catch {
        // User cancelled or error
      }
    } else {
      // Fallback: copy URL to clipboard
      await navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = currentPhoto.src;
    link.download = `${currentPhoto.title.replace(/\s+/g, "-").toLowerCase()}.jpg`;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isOpen || !currentPhoto) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      {/* Loading spinner */}
      {isLoading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <Loader2 className="h-12 w-12 animate-spin text-white/50" />
        </div>
      )}

      {/* Main image */}
      <div
        className="relative h-full w-full cursor-pointer"
        onClick={() => setShowInfo((prev) => !prev)}
      >
        <Image
          src={currentPhoto.src}
          alt={currentPhoto.alt}
          fill
          className={cn(
            "object-contain transition-opacity duration-300",
            isLoading ? "opacity-0" : "opacity-100"
          )}
          sizes="100vw"
          priority
          onLoad={() => setIsLoading(false)}
        />
      </div>

      {/* Top bar */}
      <div
        className={cn(
          "absolute inset-x-0 top-0 z-20 bg-gradient-to-b from-black/70 to-transparent p-4 transition-opacity duration-300",
          showInfo ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex items-center justify-between">
          <div className="text-sm text-white/80">
            {currentIndex + 1} / {photos.length}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="rounded-full p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Share photo"
            >
              <Share2 className="h-5 w-5" />
            </button>
            <button
              onClick={handleDownload}
              className="rounded-full p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Download photo"
            >
              <Download className="h-5 w-5" />
            </button>
            <button
              onClick={onClose}
              className="ml-2 rounded-full p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Close lightbox"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom info bar */}
      <div
        className={cn(
          "absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/80 to-transparent p-6 transition-opacity duration-300",
          showInfo ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-2 text-xl font-semibold text-white">
            {currentPhoto.title}
          </h2>
          {currentPhoto.caption && (
            <p className="mb-3 text-white/80">{currentPhoto.caption}</p>
          )}
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/60">
            <div className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              <span>{format(currentPhoto.date, "MMMM d, yyyy")}</span>
            </div>
            {currentPhoto.photographer && (
              <div className="flex items-center gap-1.5">
                <Camera className="h-4 w-4" />
                <span>{currentPhoto.photographer}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      {hasPrevious && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            goToPrevious();
          }}
          className={cn(
            "absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/30 p-3 text-white/80 backdrop-blur-sm transition-all hover:bg-black/50 hover:text-white",
            showInfo ? "opacity-100" : "opacity-0 hover:opacity-100"
          )}
          aria-label="Previous photo"
        >
          <ChevronLeft className="h-8 w-8" />
        </button>
      )}

      {hasNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            goToNext();
          }}
          className={cn(
            "absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/30 p-3 text-white/80 backdrop-blur-sm transition-all hover:bg-black/50 hover:text-white",
            showInfo ? "opacity-100" : "opacity-0 hover:opacity-100"
          )}
          aria-label="Next photo"
        >
          <ChevronRight className="h-8 w-8" />
        </button>
      )}

      {/* Keyboard hints */}
      <div
        className={cn(
          "absolute bottom-4 right-4 z-20 text-xs text-white/40 transition-opacity duration-300",
          showInfo ? "opacity-100" : "opacity-0"
        )}
      >
        <span className="hidden sm:inline">
          Press <kbd className="rounded bg-white/10 px-1.5 py-0.5">←</kbd>{" "}
          <kbd className="rounded bg-white/10 px-1.5 py-0.5">→</kbd> to
          navigate, <kbd className="rounded bg-white/10 px-1.5 py-0.5">ESC</kbd>{" "}
          to close, <kbd className="rounded bg-white/10 px-1.5 py-0.5">i</kbd>{" "}
          to toggle info
        </span>
      </div>
    </div>
  );
}
