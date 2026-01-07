"use client";

/**
 * Mobile Hooks
 *
 * Custom hooks for mobile-specific functionality:
 * - useMobile: Detect if on mobile device or touch screen
 * - useSwipe: Handle swipe gestures
 * - usePullToRefresh: Implement pull-to-refresh behavior
 */

import { useState, useEffect, useCallback, useRef } from "react";

/**
 * Detect mobile device and touch capability
 */
export function useMobile() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isLandscape, setIsLandscape] = useState(false);

  useEffect(() => {
    // Check for touch capability
    const touchCapable =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(touchCapable);

    // Check viewport width
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      setIsLandscape(window.innerWidth > window.innerHeight);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    window.addEventListener("orientationchange", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("orientationchange", checkMobile);
    };
  }, []);

  return { isMobile, isTouchDevice, isLandscape };
}

type SwipeDirection = "left" | "right" | "up" | "down" | null;

interface SwipeState {
  direction: SwipeDirection;
  distance: number;
}

interface UseSwipeOptions {
  threshold?: number;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  onSwipeUp?: () => void;
  onSwipeDown?: () => void;
}

/**
 * Handle swipe gestures
 */
export function useSwipe(options: UseSwipeOptions = {}) {
  const {
    threshold = 50,
    onSwipeLeft,
    onSwipeRight,
    onSwipeUp,
    onSwipeDown,
  } = options;

  const [swipe, setSwipe] = useState<SwipeState>({
    direction: null,
    distance: 0,
  });

  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const handleTouchStart = useCallback((e: TouchEvent) => {
    const touch = e.touches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
  }, []);

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!touchStart.current) return;

      const touch = e.touches[0];
      const deltaX = touch.clientX - touchStart.current.x;
      const deltaY = touch.clientY - touchStart.current.y;

      const absX = Math.abs(deltaX);
      const absY = Math.abs(deltaY);

      if (absX > absY && absX > threshold) {
        setSwipe({
          direction: deltaX > 0 ? "right" : "left",
          distance: absX,
        });
      } else if (absY > absX && absY > threshold) {
        setSwipe({
          direction: deltaY > 0 ? "down" : "up",
          distance: absY,
        });
      }
    },
    [threshold]
  );

  const handleTouchEnd = useCallback(() => {
    if (swipe.direction) {
      switch (swipe.direction) {
        case "left":
          onSwipeLeft?.();
          break;
        case "right":
          onSwipeRight?.();
          break;
        case "up":
          onSwipeUp?.();
          break;
        case "down":
          onSwipeDown?.();
          break;
      }
    }

    touchStart.current = null;
    setSwipe({ direction: null, distance: 0 });
  }, [swipe.direction, onSwipeLeft, onSwipeRight, onSwipeUp, onSwipeDown]);

  const ref = useCallback(
    (node: HTMLElement | null) => {
      if (node) {
        node.addEventListener("touchstart", handleTouchStart, {
          passive: true,
        });
        node.addEventListener("touchmove", handleTouchMove, { passive: true });
        node.addEventListener("touchend", handleTouchEnd);

        return () => {
          node.removeEventListener("touchstart", handleTouchStart);
          node.removeEventListener("touchmove", handleTouchMove);
          node.removeEventListener("touchend", handleTouchEnd);
        };
      }
    },
    [handleTouchStart, handleTouchMove, handleTouchEnd]
  );

  return { ref, swipe };
}

interface UsePullToRefreshOptions {
  onRefresh: () => Promise<void>;
  threshold?: number;
  resistance?: number;
}

/**
 * Implement pull-to-refresh behavior
 */
export function usePullToRefresh(options: UsePullToRefreshOptions) {
  const { onRefresh, threshold = 80, resistance = 2.5 } = options;

  const [isRefreshing, setIsRefreshing] = useState(false);
  const [pullDistance, setPullDistance] = useState(0);
  const touchStartY = useRef<number | null>(null);
  const containerRef = useRef<HTMLElement | null>(null);

  const canPull = useCallback(() => {
    // Only allow pull when at top of scroll container
    if (!containerRef.current) return false;
    return containerRef.current.scrollTop === 0;
  }, []);

  const handleTouchStart = useCallback(
    (e: TouchEvent) => {
      if (canPull()) {
        touchStartY.current = e.touches[0].clientY;
      }
    },
    [canPull]
  );

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (touchStartY.current === null || isRefreshing) return;

      const touchY = e.touches[0].clientY;
      const diff = touchY - touchStartY.current;

      if (diff > 0 && canPull()) {
        // Apply resistance to make it feel natural
        const distance = diff / resistance;
        setPullDistance(Math.min(distance, threshold * 1.5));

        // Prevent default scroll behavior when pulling
        if (diff > 10) {
          e.preventDefault();
        }
      }
    },
    [canPull, isRefreshing, resistance, threshold]
  );

  const handleTouchEnd = useCallback(async () => {
    if (pullDistance >= threshold && !isRefreshing) {
      setIsRefreshing(true);
      try {
        await onRefresh();
      } finally {
        setIsRefreshing(false);
      }
    }

    touchStartY.current = null;
    setPullDistance(0);
  }, [pullDistance, threshold, isRefreshing, onRefresh]);

  const ref = useCallback(
    (node: HTMLElement | null) => {
      containerRef.current = node;

      if (node) {
        node.addEventListener("touchstart", handleTouchStart, {
          passive: true,
        });
        node.addEventListener("touchmove", handleTouchMove, { passive: false });
        node.addEventListener("touchend", handleTouchEnd);

        return () => {
          node.removeEventListener("touchstart", handleTouchStart);
          node.removeEventListener("touchmove", handleTouchMove);
          node.removeEventListener("touchend", handleTouchEnd);
        };
      }
    },
    [handleTouchStart, handleTouchMove, handleTouchEnd]
  );

  const progress = Math.min(pullDistance / threshold, 1);
  const shouldRefresh = pullDistance >= threshold;

  return {
    ref,
    isRefreshing,
    pullDistance,
    progress,
    shouldRefresh,
  };
}

/**
 * Detect if device prefers reduced motion
 */
export function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return prefersReducedMotion;
}

/**
 * Track viewport size for responsive behavior
 */
export function useViewport() {
  const [viewport, setViewport] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
    breakpoint: "mobile" as "mobile" | "tablet" | "desktop" | "large",
  });

  useEffect(() => {
    const updateViewport = () => {
      const width = window.innerWidth;
      let breakpoint: "mobile" | "tablet" | "desktop" | "large" = "mobile";

      if (width >= 1440) breakpoint = "large";
      else if (width >= 1024) breakpoint = "desktop";
      else if (width >= 640) breakpoint = "tablet";

      setViewport({
        width,
        height: window.innerHeight,
        breakpoint,
      });
    };

    updateViewport();
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  return viewport;
}
