import { Metadata } from "next";
import Link from "next/link";
import {
  Users,
  Shield,
  Waves,
  GraduationCap,
  FileText,
  ExternalLink,
  Download,
  ChevronRight,
  BookOpen,
  LifeBuoy,
  Anchor,
} from "lucide-react";
import { resourceCategories } from "@/lib/data/club";
import { ResourceAccordion } from "./ResourceAccordion";

export const metadata: Metadata = {
  title: "Resources | Astoria Yacht Club",
  description:
    "Find helpful resources for sailing, safety, weather, and club information at Astoria Yacht Club.",
};

const iconMap: Record<string, React.ReactNode> = {
  Users: <Users className="h-5 w-5" />,
  Shield: <Shield className="h-5 w-5" />,
  Waves: <Waves className="h-5 w-5" />,
  GraduationCap: <GraduationCap className="h-5 w-5" />,
  FileText: <FileText className="h-5 w-5" />,
};

const quickLinks = [
  {
    title: "NOAA Marine Forecast",
    description: "Current weather & conditions",
    href: "https://marine.weather.gov/",
    icon: <Waves className="h-6 w-6" />,
  },
  {
    title: "Coast Guard",
    description: "Emergency & safety info",
    href: "https://www.uscg.mil/",
    icon: <LifeBuoy className="h-6 w-6" />,
  },
  {
    title: "Tide Tables",
    description: "Astoria tide predictions",
    href: "https://tidesandcurrents.noaa.gov/",
    icon: <Anchor className="h-6 w-6" />,
  },
  {
    title: "Racing Rules",
    description: "World Sailing RRS",
    href: "https://www.sailing.org/",
    icon: <BookOpen className="h-6 w-6" />,
  },
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-navy-800 py-16 text-white">
        <div className="absolute inset-0 bg-[url('/images/waves-pattern.svg')] opacity-5" />
        <div className="container relative mx-auto px-4">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Resources
          </h1>
          <p className="max-w-2xl text-lg text-white/80">
            Everything you need to get the most out of your AYC membership —
            from safety information to club documents.
          </p>
        </div>
      </section>

      {/* Quick Links */}
      <section className="relative -mt-8 z-10">
        <div className="container mx-auto px-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {quickLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl bg-white p-4 shadow-lg transition-all hover:shadow-xl"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-ocean-100 text-ocean-600 transition-colors group-hover:bg-ocean-500 group-hover:text-white">
                  {link.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-navy-800">{link.title}</p>
                  <p className="text-sm text-gray-500">{link.description}</p>
                </div>
                <ExternalLink className="h-4 w-4 flex-shrink-0 text-gray-400 group-hover:text-ocean-500" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold text-navy-800">
            Resource Library
          </h2>

          <div className="space-y-4">
            {resourceCategories.map((category) => (
              <ResourceAccordion
                key={category.id}
                title={category.title}
                icon={iconMap[category.icon]}
                items={category.items}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-2xl font-bold text-navy-800">
            Popular Downloads
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <DownloadCard
              title="Member Handbook"
              description="Complete guide to club policies and programs"
              size="2.4 MB"
            />
            <DownloadCard
              title="Float Plan Template"
              description="Leave a float plan for safety"
              size="156 KB"
            />
            <DownloadCard
              title="VHF Radio Guide"
              description="Marine VHF channels for our area"
              size="320 KB"
            />
            <DownloadCard
              title="Sailing Instructions"
              description="Current season racing instructions"
              size="1.1 MB"
            />
            <DownloadCard
              title="Club Bylaws"
              description="Official AYC governance documents"
              size="890 KB"
            />
            <DownloadCard
              title="Anchorages Guide"
              description="Popular anchorages on the lower Columbia"
              size="4.2 MB"
            />
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="rounded-xl border border-gray-200 bg-white p-8 text-center">
            <BookOpen className="mx-auto mb-4 h-10 w-10 text-ocean-500" />
            <h2 className="mb-2 text-xl font-bold text-navy-800">
              Can&apos;t Find What You Need?
            </h2>
            <p className="mb-4 text-gray-600">
              Our board and committee members are here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/about/board"
                className="inline-flex items-center gap-2 rounded-lg bg-ocean-500 px-6 py-3 font-medium text-white transition-colors hover:bg-ocean-600"
              >
                Contact the Board
              </Link>
              <Link
                href="/membership"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-50"
              >
                Member Services
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function DownloadCard({
  title,
  description,
  size,
}: {
  title: string;
  description: string;
  size: string;
}) {
  return (
    <a
      href="#"
      className="group flex items-center gap-4 rounded-xl border border-gray-200 bg-gray-50 p-4 transition-all hover:border-ocean-300 hover:bg-white hover:shadow-md"
    >
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-600">
        <FileText className="h-6 w-6" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-navy-800">{title}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <div className="flex flex-col items-end gap-1">
        <Download className="h-5 w-5 text-gray-400 group-hover:text-ocean-500" />
        <span className="text-xs text-gray-400">{size}</span>
      </div>
    </a>
  );
}
