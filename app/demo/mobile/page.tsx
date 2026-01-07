import { Metadata } from "next";
import Link from "next/link";
import {
  Smartphone,
  Monitor,
  Menu,
  X,
  ChevronRight,
  Hand,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Calendar,
  Image as ImageIcon,
  FileText,
  Phone,
  Mail,
  MapPin,
  Target,
  Fingerprint,
  RefreshCw,
  Maximize2,
  Minimize2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Mobile Experience Demo | Astoria Yacht Club",
  description:
    "See how the new mobile-first design provides a superior experience on phones and tablets.",
};

export default function MobileDemoPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-800 via-navy-700 to-ocean-800 py-20 text-white">
        <div className="absolute inset-0 bg-[url('/images/waves-pattern.svg')] opacity-5" />
        <div className="container relative mx-auto px-4 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-ocean-500">
            <Smartphone className="h-8 w-8" />
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Mobile-First Design
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-white/80">
            Over 60% of web traffic comes from mobile devices. See how the new
            site delivers a superior experience on every screen size.
          </p>

          {/* Device stats */}
          <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-white/10 p-4">
              <div className="text-3xl font-bold">60%+</div>
              <div className="text-sm text-white/70">Mobile visitors</div>
            </div>
            <div className="rounded-xl bg-white/10 p-4">
              <div className="text-3xl font-bold">3.5s</div>
              <div className="text-sm text-white/70">
                Avg attention span loss
              </div>
            </div>
            <div className="rounded-xl bg-white/10 p-4">
              <div className="text-3xl font-bold">53%</div>
              <div className="text-sm text-white/70">
                Leave slow mobile sites
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem with Wix on Mobile */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-3xl font-bold text-navy-800">
            The Problem with Wix on Mobile
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
            Wix sites are designed desktop-first, then squeezed onto mobile
            screens. The result is a frustrating experience.
          </p>

          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
            {/* Wix Problems */}
            <div className="rounded-xl border-2 border-red-200 bg-red-50 p-6">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                  <XCircle className="h-5 w-5 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-red-800">
                  Wix Mobile Issues
                </h3>
              </div>

              <div className="space-y-4">
                <ProblemItem
                  title="Tiny tap targets"
                  description="Links and buttons too small to tap accurately"
                />
                <ProblemItem
                  title="Horizontal scrolling"
                  description="Content wider than screen, requires side-scrolling"
                />
                <ProblemItem
                  title="Unreadable text"
                  description="Text too small, requires zooming to read"
                />
                <ProblemItem
                  title="Slow loading"
                  description="Heavy scripts and unoptimized images"
                />
                <ProblemItem
                  title="Desktop menus"
                  description="Navigation designed for mouse, not touch"
                />
                <ProblemItem
                  title="Forms don't work"
                  description="Input fields are cramped and hard to use"
                />
              </div>
            </div>

            {/* Our Solution */}
            <div className="rounded-xl border-2 border-green-200 bg-green-50 p-6">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-green-800">
                  Our Mobile-First Approach
                </h3>
              </div>

              <div className="space-y-4">
                <SolutionItem
                  title="Touch-friendly targets"
                  description="All interactive elements minimum 44px"
                />
                <SolutionItem
                  title="Responsive layouts"
                  description="Content flows naturally on any screen size"
                />
                <SolutionItem
                  title="Readable typography"
                  description="Optimized font sizes for mobile reading"
                />
                <SolutionItem
                  title="Lightning fast"
                  description="Optimized images, minimal JavaScript"
                />
                <SolutionItem
                  title="Mobile navigation"
                  description="Thumb-friendly hamburger menu"
                />
                <SolutionItem
                  title="Smart forms"
                  description="Large inputs, proper keyboards, validation"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Side-by-Side Comparisons */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-3xl font-bold text-navy-800">
            Side-by-Side Comparison
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
            See the difference between the old Wix site and the new mobile-first
            design.
          </p>

          <div className="space-y-16">
            {/* Navigation Comparison */}
            <ComparisonSection
              title="Navigation"
              icon={<Menu className="h-6 w-6" />}
              description="How users navigate through the site on mobile"
            >
              <div className="grid gap-6 md:grid-cols-2">
                <PhoneMockup title="Wix Navigation" variant="wix">
                  <WixNavMockup />
                </PhoneMockup>
                <PhoneMockup title="New Navigation" variant="new">
                  <NewNavMockup />
                </PhoneMockup>
              </div>
              <ComparisonNotes
                issues={[
                  "Wix menu items are small and close together",
                  "No clear visual hierarchy",
                  "Hard to close menu once opened",
                ]}
                improvements={[
                  "Large, finger-friendly menu items (48px+)",
                  "Clear sections and visual hierarchy",
                  "Easy-to-reach close button",
                ]}
              />
            </ComparisonSection>

            {/* Calendar Comparison */}
            <ComparisonSection
              title="Events Calendar"
              icon={<Calendar className="h-6 w-6" />}
              description="How events are displayed on mobile screens"
            >
              <div className="grid gap-6 md:grid-cols-2">
                <PhoneMockup title="Wix Calendar" variant="wix">
                  <WixCalendarMockup />
                </PhoneMockup>
                <PhoneMockup title="New Calendar" variant="new">
                  <NewCalendarMockup />
                </PhoneMockup>
              </div>
              <ComparisonNotes
                issues={[
                  "Desktop grid forced onto small screen",
                  "Text is unreadably small",
                  "Requires horizontal scrolling",
                ]}
                improvements={[
                  "Mobile-optimized list view by default",
                  "Swipeable day/week views",
                  "Touch-friendly event cards",
                ]}
              />
            </ComparisonSection>

            {/* Gallery Comparison */}
            <ComparisonSection
              title="Photo Gallery"
              icon={<ImageIcon className="h-6 w-6" />}
              description="How photos are viewed on mobile devices"
            >
              <div className="grid gap-6 md:grid-cols-2">
                <PhoneMockup title="Wix Gallery" variant="wix">
                  <WixGalleryMockup />
                </PhoneMockup>
                <PhoneMockup title="New Gallery" variant="new">
                  <NewGalleryMockup />
                </PhoneMockup>
              </div>
              <ComparisonNotes
                issues={[
                  "Tiny thumbnails hard to see",
                  "No swipe gestures in lightbox",
                  "Slow to load full images",
                ]}
                improvements={[
                  "Masonry layout optimized for mobile",
                  "Swipe left/right in lightbox",
                  "Pinch-to-zoom support",
                ]}
              />
            </ComparisonSection>

            {/* Forms Comparison */}
            <ComparisonSection
              title="Forms & Input"
              icon={<FileText className="h-6 w-6" />}
              description="How users fill out forms on mobile"
            >
              <div className="grid gap-6 md:grid-cols-2">
                <PhoneMockup title="Wix Forms" variant="wix">
                  <WixFormMockup />
                </PhoneMockup>
                <PhoneMockup title="New Forms" variant="new">
                  <NewFormMockup />
                </PhoneMockup>
              </div>
              <ComparisonNotes
                issues={[
                  "Small input fields, hard to tap",
                  "Generic keyboard for all inputs",
                  "Labels disappear when typing",
                ]}
                improvements={[
                  "Large touch targets (44px minimum)",
                  "Smart keyboards (email, phone, etc.)",
                  "Persistent labels and clear errors",
                ]}
              />
            </ComparisonSection>
          </div>
        </div>
      </section>

      {/* Touch-Friendly Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-3xl font-bold text-navy-800">
            Touch-Optimized Features
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
            Every interaction is designed for fingers, not mouse cursors.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <TouchFeatureCard
              icon={<Target className="h-6 w-6" />}
              title="44px Minimum Targets"
              description="All buttons, links, and interactive elements meet Apple's Human Interface Guidelines for touch targets."
            />
            <TouchFeatureCard
              icon={<Hand className="h-6 w-6" />}
              title="Swipe Gestures"
              description="Swipe through gallery photos, calendar days, and carousels naturally with your finger."
            />
            <TouchFeatureCard
              icon={<Maximize2 className="h-6 w-6" />}
              title="Pinch to Zoom"
              description="Zoom into photos and maps using familiar pinch gestures."
            />
            <TouchFeatureCard
              icon={<RefreshCw className="h-6 w-6" />}
              title="Pull to Refresh"
              description="Pull down on the events page to refresh the calendar data."
            />
            <TouchFeatureCard
              icon={<Fingerprint className="h-6 w-6" />}
              title="Haptic Feedback"
              description="Subtle vibration feedback on interactions (where supported)."
            />
            <TouchFeatureCard
              icon={<Minimize2 className="h-6 w-6" />}
              title="Thumb Zone Design"
              description="Important actions placed within easy thumb reach on larger phones."
            />
          </div>
        </div>
      </section>

      {/* Click-to-Action Features */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-3xl font-bold text-navy-800">
            Mobile-Only Features
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
            Take advantage of mobile device capabilities for instant actions.
          </p>

          <div className="mx-auto max-w-3xl space-y-4">
            <MobileActionCard
              icon={<Phone className="h-5 w-5" />}
              title="Click-to-Call"
              description="Tap any phone number to immediately start a call"
              example="+1 (503) 555-1234"
              action="Tap to call"
            />
            <MobileActionCard
              icon={<Mail className="h-5 w-5" />}
              title="Click-to-Email"
              description="Tap any email address to open your mail app"
              example="info@astoriayachtclub.org"
              action="Tap to email"
            />
            <MobileActionCard
              icon={<MapPin className="h-5 w-5" />}
              title="Click-to-Navigate"
              description="Tap addresses to open in your preferred maps app"
              example="1 Basin St, Astoria, OR"
              action="Get directions"
            />
            <MobileActionCard
              icon={<Calendar className="h-5 w-5" />}
              title="Add to Calendar"
              description="Tap to add events directly to your phone's calendar"
              example="Wednesday Night Racing"
              action="Add to calendar"
            />
          </div>
        </div>
      </section>

      {/* Responsive Breakpoints */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-3xl font-bold text-navy-800">
            Responsive Breakpoints
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
            The site adapts seamlessly across all screen sizes.
          </p>

          <div className="mx-auto max-w-4xl">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <BreakpointCard
                name="Mobile"
                range="< 640px"
                icon={<Smartphone className="h-6 w-6" />}
                features={[
                  "Single column layout",
                  "Hamburger navigation",
                  "Stacked content",
                  "Full-width images",
                ]}
              />
              <BreakpointCard
                name="Tablet"
                range="640px - 1024px"
                icon={<Smartphone className="h-6 w-6 rotate-90" />}
                features={[
                  "Two column grids",
                  "Side navigation option",
                  "Larger touch targets",
                  "Expanded cards",
                ]}
              />
              <BreakpointCard
                name="Desktop"
                range="1024px - 1440px"
                icon={<Monitor className="h-6 w-6" />}
                features={[
                  "Full navigation bar",
                  "Multi-column layouts",
                  "Hover interactions",
                  "Sidebar content",
                ]}
              />
              <BreakpointCard
                name="Large Desktop"
                range="> 1440px"
                icon={<Monitor className="h-7 w-7" />}
                features={[
                  "Max-width containers",
                  "Extra whitespace",
                  "Larger typography",
                  "Enhanced visuals",
                ]}
              />
            </div>

            {/* Visual breakpoint demo */}
            <div className="mt-8 overflow-hidden rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="mb-4 text-center font-semibold text-navy-800">
                Current Viewport
              </h3>
              <div className="flex items-center justify-center gap-2">
                <div className="hidden text-sm font-medium text-ocean-600 sm:hidden">
                  Mobile (&lt; 640px)
                </div>
                <div className="hidden text-sm font-medium text-ocean-600 sm:block md:hidden">
                  Small Tablet (640px+)
                </div>
                <div className="hidden text-sm font-medium text-ocean-600 md:block lg:hidden">
                  Tablet (768px+)
                </div>
                <div className="hidden text-sm font-medium text-ocean-600 lg:block xl:hidden">
                  Desktop (1024px+)
                </div>
                <div className="hidden text-sm font-medium text-ocean-600 xl:block 2xl:hidden">
                  Large Desktop (1280px+)
                </div>
                <div className="hidden text-sm font-medium text-ocean-600 2xl:block">
                  Extra Large (1536px+)
                </div>
                <div className="text-sm font-medium text-ocean-600 sm:hidden">
                  Mobile (&lt; 640px)
                </div>
              </div>
              <p className="mt-2 text-center text-sm text-gray-500">
                Resize your browser window to see breakpoint changes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Performance on Mobile */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-3xl font-bold text-navy-800">
            Mobile Performance
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
            Speed matters even more on mobile where connections can be slow.
          </p>

          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-semibold text-navy-800">Wix Mobile</h3>
                <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-700">
                  Slow
                </span>
              </div>
              <div className="space-y-4">
                <MetricBar
                  label="Load Time"
                  value={8.2}
                  max={10}
                  unit="s"
                  bad
                />
                <MetricBar
                  label="Time to Interactive"
                  value={12.5}
                  max={15}
                  unit="s"
                  bad
                />
                <MetricBar
                  label="Page Size"
                  value={4.8}
                  max={6}
                  unit="MB"
                  bad
                />
                <MetricBar
                  label="Lighthouse Score"
                  value={35}
                  max={100}
                  unit=""
                  bad
                />
              </div>
            </div>

            <div className="rounded-xl border-2 border-green-200 bg-green-50 p-6">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-semibold text-navy-800">New Site Mobile</h3>
                <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                  Fast
                </span>
              </div>
              <div className="space-y-4">
                <MetricBar label="Load Time" value={1.2} max={10} unit="s" />
                <MetricBar
                  label="Time to Interactive"
                  value={1.8}
                  max={15}
                  unit="s"
                />
                <MetricBar label="Page Size" value={0.4} max={6} unit="MB" />
                <MetricBar
                  label="Lighthouse Score"
                  value={95}
                  max={100}
                  unit=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-800 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <Smartphone className="mx-auto mb-4 h-12 w-12 text-ocean-400" />
          <h2 className="mb-4 text-3xl font-bold">Try It Yourself</h2>
          <p className="mx-auto mb-8 max-w-xl text-white/80">
            Open this site on your phone to experience the mobile-first design,
            or use your browser&apos;s developer tools to simulate mobile
            devices.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/demo/performance"
              className="inline-flex items-center gap-2 rounded-lg bg-ocean-500 px-6 py-3 font-medium text-white transition-colors hover:bg-ocean-600"
            >
              View Performance Demo
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/demo/cms"
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3 font-medium text-white transition-colors hover:bg-white/10"
            >
              View CMS Demo
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

// ============================================================================
// Components
// ============================================================================

function ProblemItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <XCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-400" />
      <div>
        <div className="font-medium text-red-800">{title}</div>
        <div className="text-sm text-red-700/70">{description}</div>
      </div>
    </div>
  );
}

function SolutionItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
      <div>
        <div className="font-medium text-green-800">{title}</div>
        <div className="text-sm text-green-700/70">{description}</div>
      </div>
    </div>
  );
}

function ComparisonSection({
  title,
  icon,
  description,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ocean-100 text-ocean-600">
          {icon}
        </div>
        <div>
          <h3 className="text-2xl font-bold text-navy-800">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
      {children}
    </div>
  );
}

function PhoneMockup({
  title,
  variant,
  children,
}: {
  title: string;
  variant: "wix" | "new";
  children: React.ReactNode;
}) {
  return (
    <div className="text-center">
      <div
        className={`inline-block rounded-3xl p-2 ${variant === "wix" ? "bg-gray-200" : "bg-navy-800"}`}
      >
        <div className="relative mx-auto h-[480px] w-[240px] overflow-hidden rounded-2xl bg-white">
          {/* Phone notch */}
          <div className="absolute top-0 left-1/2 z-10 h-6 w-24 -translate-x-1/2 rounded-b-xl bg-black" />
          {/* Screen content */}
          <div className="h-full overflow-hidden">{children}</div>
        </div>
      </div>
      <p
        className={`mt-3 font-medium ${variant === "wix" ? "text-gray-600" : "text-navy-800"}`}
      >
        {title}
      </p>
    </div>
  );
}

function ComparisonNotes({
  issues,
  improvements,
}: {
  issues: string[];
  improvements: string[];
}) {
  return (
    <div className="mt-6 grid gap-4 md:grid-cols-2">
      <div className="rounded-lg bg-red-50 p-4">
        <h4 className="mb-2 font-semibold text-red-800">Issues</h4>
        <ul className="space-y-1 text-sm text-red-700">
          {issues.map((issue, i) => (
            <li key={i} className="flex items-start gap-2">
              <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
              {issue}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-lg bg-green-50 p-4">
        <h4 className="mb-2 font-semibold text-green-800">Improvements</h4>
        <ul className="space-y-1 text-sm text-green-700">
          {improvements.map((imp, i) => (
            <li key={i} className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0" />
              {imp}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Phone screen mockups
function WixNavMockup() {
  return (
    <div className="h-full bg-gray-100 pt-8">
      {/* Cramped header */}
      <div className="flex items-center justify-between bg-white px-2 py-2">
        <div className="h-6 w-16 rounded bg-gray-300" />
        <Menu className="h-4 w-4 text-gray-400" />
      </div>
      {/* Cramped menu */}
      <div className="bg-white p-2">
        <div className="space-y-1">
          {[
            "Home",
            "About Us",
            "Events",
            "Racing",
            "Membership",
            "Contact",
          ].map((item) => (
            <div
              key={item}
              className="rounded px-2 py-1.5 text-[10px] text-gray-600"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      {/* Tiny close button */}
      <div className="absolute top-10 right-2">
        <X className="h-3 w-3 text-gray-400" />
      </div>
    </div>
  );
}

function NewNavMockup() {
  return (
    <div className="h-full bg-navy-800 pt-8">
      {/* Proper header */}
      <div className="flex items-center justify-between bg-navy-800 px-4 py-3">
        <div className="h-8 w-20 rounded bg-white/20" />
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
          <X className="h-5 w-5 text-white" />
        </div>
      </div>
      {/* Touch-friendly menu */}
      <div className="p-4">
        <div className="space-y-2">
          {["Home", "About", "Events", "Racing", "Membership", "Contact"].map(
            (item) => (
              <div
                key={item}
                className="flex items-center justify-between rounded-lg bg-white/10 px-4 py-3"
              >
                <span className="text-sm font-medium text-white">{item}</span>
                <ChevronRight className="h-4 w-4 text-white/50" />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

function WixCalendarMockup() {
  return (
    <div className="h-full bg-white pt-8">
      <div className="p-2">
        <div className="mb-2 text-center text-[8px] font-bold">
          January 2025
        </div>
        {/* Tiny calendar grid */}
        <div className="grid grid-cols-7 gap-0.5 text-[6px]">
          {["S", "M", "T", "W", "T", "F", "S"].map((d) => (
            <div key={d} className="text-center text-gray-400">
              {d}
            </div>
          ))}
          {Array.from({ length: 31 }, (_, i) => (
            <div
              key={i}
              className={`py-0.5 text-center ${i === 14 ? "rounded bg-blue-100 text-[5px]" : ""}`}
            >
              {i + 1}
            </div>
          ))}
        </div>
        {/* Unreadable event text */}
        <div className="mt-2 rounded bg-gray-100 p-1">
          <div className="text-[6px] text-gray-500">Wed Night Racing...</div>
        </div>
      </div>
    </div>
  );
}

function NewCalendarMockup() {
  return (
    <div className="h-full bg-gray-50 pt-8">
      {/* Mobile-friendly header */}
      <div className="bg-white px-4 py-3">
        <div className="text-sm font-bold text-navy-800">January 2025</div>
        <div className="mt-2 flex gap-2">
          <span className="rounded-full bg-ocean-500 px-3 py-1 text-[10px] text-white">
            Month
          </span>
          <span className="rounded-full bg-gray-100 px-3 py-1 text-[10px] text-gray-600">
            Week
          </span>
          <span className="rounded-full bg-gray-100 px-3 py-1 text-[10px] text-gray-600">
            List
          </span>
        </div>
      </div>
      {/* Touch-friendly event cards */}
      <div className="p-3 space-y-2">
        <div className="rounded-lg bg-white p-3 shadow-sm">
          <div className="text-[10px] text-ocean-600">Wed, Jan 15</div>
          <div className="text-xs font-medium text-navy-800">
            Wednesday Night Racing
          </div>
          <div className="text-[10px] text-gray-500">6:00 PM - AYC</div>
        </div>
        <div className="rounded-lg bg-white p-3 shadow-sm">
          <div className="text-[10px] text-ocean-600">Sat, Jan 18</div>
          <div className="text-xs font-medium text-navy-800">
            New Member Social
          </div>
          <div className="text-[10px] text-gray-500">2:00 PM - Clubhouse</div>
        </div>
      </div>
    </div>
  );
}

function WixGalleryMockup() {
  return (
    <div className="h-full bg-white pt-8">
      <div className="p-2">
        {/* Tiny grid */}
        <div className="grid grid-cols-3 gap-0.5">
          {Array.from({ length: 9 }, (_, i) => (
            <div key={i} className="aspect-square bg-gray-200" />
          ))}
        </div>
        {/* Desktop-style pagination */}
        <div className="mt-2 flex justify-center gap-1">
          {[1, 2, 3, 4, 5].map((n) => (
            <span
              key={n}
              className={`text-[8px] ${n === 1 ? "text-blue-500" : "text-gray-400"}`}
            >
              {n}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function NewGalleryMockup() {
  return (
    <div className="h-full bg-gray-50 pt-8">
      {/* Filter tabs */}
      <div className="flex gap-2 overflow-x-auto px-3 py-2">
        <span className="rounded-full bg-ocean-500 px-3 py-1 text-[10px] text-white whitespace-nowrap">
          All
        </span>
        <span className="rounded-full bg-white px-3 py-1 text-[10px] text-gray-600 whitespace-nowrap">
          Racing
        </span>
        <span className="rounded-full bg-white px-3 py-1 text-[10px] text-gray-600 whitespace-nowrap">
          Social
        </span>
      </div>
      {/* Masonry-style grid */}
      <div className="grid grid-cols-2 gap-1 p-2">
        <div className="aspect-square rounded-lg bg-gray-300" />
        <div className="aspect-[3/4] rounded-lg bg-gray-300" />
        <div className="aspect-[4/3] rounded-lg bg-gray-300" />
        <div className="aspect-square rounded-lg bg-gray-300" />
      </div>
      {/* Swipe indicator */}
      <div className="mt-2 text-center text-[8px] text-gray-400">
        <Hand className="mx-auto h-3 w-3" />
        Swipe to browse
      </div>
    </div>
  );
}

function WixFormMockup() {
  return (
    <div className="h-full bg-white pt-8">
      <div className="p-2">
        <div className="text-[10px] font-bold">Contact Us</div>
        {/* Cramped form fields */}
        <div className="mt-2 space-y-1">
          <input
            className="w-full rounded border border-gray-200 px-1 py-0.5 text-[8px]"
            placeholder="Name"
            readOnly
          />
          <input
            className="w-full rounded border border-gray-200 px-1 py-0.5 text-[8px]"
            placeholder="Email"
            readOnly
          />
          <input
            className="w-full rounded border border-gray-200 px-1 py-0.5 text-[8px]"
            placeholder="Phone"
            readOnly
          />
          <textarea
            className="w-full rounded border border-gray-200 px-1 py-0.5 text-[8px]"
            placeholder="Message"
            rows={2}
            readOnly
          />
          <button className="w-full rounded bg-blue-500 py-1 text-[8px] text-white">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

function NewFormMockup() {
  return (
    <div className="h-full bg-gray-50 pt-8">
      <div className="p-3">
        <div className="text-sm font-bold text-navy-800">Contact Us</div>
        {/* Touch-friendly form fields */}
        <div className="mt-3 space-y-3">
          <div>
            <label className="text-[10px] text-gray-500">Full Name</label>
            <div className="mt-1 rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs">
              John Smith
            </div>
          </div>
          <div>
            <label className="text-[10px] text-gray-500">Email</label>
            <div className="mt-1 rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs">
              john@email.com
            </div>
          </div>
          <div>
            <label className="text-[10px] text-gray-500">Phone</label>
            <div className="mt-1 rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs">
              (503) 555-1234
            </div>
          </div>
          <button className="w-full rounded-lg bg-ocean-500 py-3 text-xs font-medium text-white">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}

function TouchFeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-ocean-100 text-ocean-600">
        {icon}
      </div>
      <h3 className="mb-2 font-semibold text-navy-800">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

function MobileActionCard({
  icon,
  title,
  description,
  example,
  action,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  example: string;
  action: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4">
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-ocean-100 text-ocean-600">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="font-semibold text-navy-800">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        <div className="mt-1 flex items-center gap-2">
          <code className="text-xs text-ocean-600">{example}</code>
          <span className="text-xs text-gray-400">→ {action}</span>
        </div>
      </div>
    </div>
  );
}

function BreakpointCard({
  name,
  range,
  icon,
  features,
}: {
  name: string;
  range: string;
  icon: React.ReactNode;
  features: string[];
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4">
      <div className="mb-3 flex items-center gap-2 text-ocean-600">{icon}</div>
      <h3 className="font-semibold text-navy-800">{name}</h3>
      <p className="mb-3 text-sm text-gray-500">{range}</p>
      <ul className="space-y-1">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-xs text-gray-600">
            <div className="h-1 w-1 rounded-full bg-ocean-400" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function MetricBar({
  label,
  value,
  max,
  unit,
  bad = false,
}: {
  label: string;
  value: number;
  max: number;
  unit: string;
  bad?: boolean;
}) {
  const percentage = (value / max) * 100;

  return (
    <div>
      <div className="mb-1 flex justify-between text-sm">
        <span className="text-gray-600">{label}</span>
        <span className={bad ? "text-red-600" : "text-green-600"}>
          {value}
          {unit}
        </span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-gray-200">
        <div
          className={`h-full rounded-full ${bad ? "bg-red-500" : "bg-green-500"}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
