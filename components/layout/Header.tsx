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
function DesktopDropdown({ item }: { item: NavItem }) {
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
          isActive
            ? "bg-ocean-50 text-ocean-600"
            : "text-navy-700 hover:bg-ocean-50 hover:text-ocean-600"
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

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

  return (
    <header
      className="fixed left-0 right-0 top-0 z-50 bg-white py-2 shadow-md"
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
            className="flex items-center gap-2"
            aria-label="Astoria Yacht Club - Home"
          >
            {/* Burgee-style logo */}
            <div className="relative flex h-8 w-10 items-center justify-center rounded-sm bg-navy-700">
              <div className="absolute inset-0 overflow-hidden rounded-sm">
                <div className="absolute inset-0 bg-gradient-to-r from-navy-700 via-ocean-500 to-navy-700" />
                <div
                  className={cn(
                    "absolute bottom-0 left-1/2 h-0 w-0 -translate-x-1/2",
                    "border-l-[24px] border-r-[24px] border-t-[8px]",
                    "border-l-transparent border-r-transparent border-t-brass-500"
                  )}
                />
              </div>
              <Anchor className="relative z-10 h-4 w-4 text-white" />
            </div>

            {/* Text */}
            <span className="text-base font-bold leading-none text-navy-700">
              {SITE_CONFIG.shortName}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <DesktopDropdown key={item.href} item={item} />
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-md px-4 py-2 font-medium transition-colors",
                    pathname === item.href
                      ? "bg-ocean-50 text-ocean-600"
                      : "text-navy-700 hover:bg-ocean-50 hover:text-ocean-600"
                  )}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* CTA Buttons (Desktop) */}
          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/login"
              className="text-sm font-medium text-navy-700 hover:text-ocean-600"
            >
              Member Login
            </Link>
            <Button variant="primary" size="sm" asChild>
              <Link href="/membership/join">Join the Club</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className={cn(
              "rounded-md p-2 transition-colors lg:hidden",
              "text-navy-700 hover:bg-ocean-50",
              "focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:ring-offset-2"
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
          "fixed inset-x-0 bottom-0 top-[52px] z-40 bg-white lg:hidden",
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

            <div className="mt-6 space-y-3 border-t border-gray-200 pt-6">
              <Link
                href="/login"
                className="block rounded-lg border border-gray-200 px-4 py-3 text-center font-medium text-navy-700 hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Member Login
              </Link>
              <Button variant="primary" size="lg" className="w-full" asChild>
                <Link
                  href="/membership/join"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Join the Club
                </Link>
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
