"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Anchor } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { NAV_ITEMS, SITE_CONFIG } from "@/lib/constants";
import { NavItem } from "@/types";

// Desktop dropdown component
function DesktopDropdown({
  item,
  isScrolled,
}: {
  item: NavItem;
  isScrolled: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 150);
  };

  const isActive =
    pathname === item.href || pathname.startsWith(item.href + "/");

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={item.href}
        className={cn(
          "inline-flex items-center gap-1 rounded-md px-4 py-2 font-medium transition-colors",
          isScrolled
            ? isActive
              ? "bg-ocean-50 text-ocean-600"
              : "text-navy-700 hover:bg-ocean-50 hover:text-ocean-600"
            : isActive
              ? "bg-white/20 text-white"
              : "text-white/90 hover:bg-white/10 hover:text-white"
        )}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {item.label}
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </Link>

      {/* Dropdown menu */}
      <div
        className={cn(
          "absolute left-0 top-full z-50 pt-2",
          "transition-all duration-200",
          isOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
        )}
      >
        <div
          className={cn(
            "min-w-[240px] overflow-hidden rounded-xl bg-white p-2",
            "shadow-xl ring-1 ring-black/5"
          )}
        >
          {item.children?.map((child) => {
            const isChildActive = pathname === child.href;
            return (
              <Link
                key={child.href}
                href={child.href}
                className={cn(
                  "block rounded-lg px-4 py-3 transition-colors",
                  isChildActive
                    ? "bg-ocean-50 text-ocean-700"
                    : "hover:bg-gray-50"
                )}
              >
                <div className="font-medium text-navy-800">{child.label}</div>
                {child.description && (
                  <div className="mt-0.5 text-sm text-gray-500">
                    {child.description}
                  </div>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Mobile accordion item
function MobileAccordion({
  item,
  onNavigate,
}: {
  item: NavItem;
  onNavigate: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isActive =
    pathname === item.href || pathname.startsWith(item.href + "/");

  if (!item.children) {
    return (
      <Link
        href={item.href}
        className={cn(
          "block rounded-lg px-4 py-3 text-lg font-medium transition-colors",
          isActive
            ? "bg-ocean-50 text-ocean-600"
            : "text-navy-700 hover:bg-gray-50"
        )}
        onClick={onNavigate}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div>
      <button
        type="button"
        className={cn(
          "flex w-full items-center justify-between rounded-lg px-4 py-3 text-lg font-medium transition-colors",
          isActive
            ? "bg-ocean-50 text-ocean-600"
            : "text-navy-700 hover:bg-gray-50"
        )}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {item.label}
        <ChevronDown
          className={cn(
            "h-5 w-5 transition-transform duration-200",
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
        <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-100 pl-4">
          {item.children.map((child) => {
            const isChildActive = pathname === child.href;
            return (
              <Link
                key={child.href}
                href={child.href}
                className={cn(
                  "block rounded-lg px-3 py-2 transition-colors",
                  isChildActive
                    ? "bg-ocean-50 text-ocean-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-navy-700"
                )}
                onClick={onNavigate}
              >
                <div className="font-medium">{child.label}</div>
                {child.description && (
                  <div className="text-sm text-gray-500">
                    {child.description}
                  </div>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Check if we're on a page with a hero (transparent header)
  const hasHero = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Determine header style
  const showTransparent = hasHero && !isScrolled && !isMobileMenuOpen;

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        showTransparent
          ? "bg-transparent py-4"
          : "bg-white/95 py-2 shadow-md backdrop-blur-sm"
      )}
      role="banner"
    >
      <Container>
        <nav
          className="flex items-center justify-between"
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 transition-all duration-300"
            aria-label="Astoria Yacht Club - Home"
          >
            {/* Burgee-style logo */}
            <div
              className={cn(
                "relative flex items-center justify-center rounded-sm transition-all duration-300",
                showTransparent
                  ? "h-10 w-12 bg-white/20 backdrop-blur-sm"
                  : "h-8 w-10 bg-navy-700"
              )}
            >
              <div className="absolute inset-0 overflow-hidden rounded-sm">
                <div
                  className={cn(
                    "absolute inset-0",
                    showTransparent
                      ? "bg-gradient-to-r from-white/30 via-ocean-400/50 to-white/30"
                      : "bg-gradient-to-r from-navy-700 via-ocean-500 to-navy-700"
                  )}
                />
                <div
                  className={cn(
                    "absolute bottom-0 left-1/2 h-0 w-0 -translate-x-1/2",
                    "border-l-[24px] border-r-[24px] border-t-[8px]",
                    "border-l-transparent border-r-transparent border-t-brass-500"
                  )}
                />
              </div>
              <Anchor
                className={cn(
                  "relative z-10 text-white transition-all duration-300",
                  showTransparent ? "h-5 w-5" : "h-4 w-4"
                )}
              />
            </div>

            {/* Text */}
            <div
              className={cn(
                "flex flex-col transition-all duration-300",
                showTransparent ? "gap-0.5" : "gap-0"
              )}
            >
              <span
                className={cn(
                  "font-bold leading-none transition-all duration-300",
                  showTransparent
                    ? "text-lg text-white drop-shadow-md"
                    : "text-base text-navy-700"
                )}
              >
                {SITE_CONFIG.shortName}
              </span>
              {showTransparent && (
                <span className="text-xs leading-none text-white/80">
                  Est. {SITE_CONFIG.established}
                </span>
              )}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <DesktopDropdown
                  key={item.href}
                  item={item}
                  isScrolled={!showTransparent}
                />
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-md px-4 py-2 font-medium transition-colors",
                    showTransparent
                      ? pathname === item.href
                        ? "bg-white/20 text-white"
                        : "text-white/90 hover:bg-white/10 hover:text-white"
                      : pathname === item.href
                        ? "bg-ocean-50 text-ocean-600"
                        : "text-navy-700 hover:bg-ocean-50 hover:text-ocean-600"
                  )}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* CTA Button (Desktop) */}
          <div className="hidden lg:block">
            <Button
              variant={showTransparent ? "outline" : "primary"}
              size={showTransparent ? "md" : "sm"}
              className={cn(
                showTransparent &&
                  "border-white text-white hover:bg-white hover:text-navy-700"
              )}
            >
              Join the Club
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className={cn(
              "rounded-md p-2 transition-colors lg:hidden",
              "focus:outline-none focus:ring-2 focus:ring-offset-2",
              showTransparent
                ? "text-white hover:bg-white/10 focus:ring-white/50 focus:ring-offset-transparent"
                : "text-navy-700 hover:bg-ocean-50 focus:ring-ocean-500"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-x-0 bottom-0 z-40 bg-white transition-all duration-300 lg:hidden",
          isScrolled || isMobileMenuOpen ? "top-[52px]" : "top-[68px]",
          isMobileMenuOpen
            ? "visible translate-x-0 opacity-100"
            : "invisible translate-x-full opacity-0"
        )}
        aria-hidden={!isMobileMenuOpen}
      >
        <Container className="h-full overflow-y-auto py-6">
          <div className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <MobileAccordion
                key={item.href}
                item={item}
                onNavigate={() => setIsMobileMenuOpen(false)}
              />
            ))}

            <div className="mt-6 border-t border-gray-200 pt-6">
              <Button
                variant="primary"
                size="lg"
                className="w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Join the Club
              </Button>
            </div>
          </div>
        </Container>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/20 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
}
