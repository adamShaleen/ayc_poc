import { Metadata } from "next";
import Link from "next/link";
import {
  Trophy,
  Users,
  Globe,
  Calendar,
  Ship,
  Anchor,
  BookOpen,
  Utensils,
  Wrench,
  Mail,
  ChevronRight,
  Check,
  Star,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Member Benefits | Astoria Yacht Club",
  description:
    "Explore the benefits of Astoria Yacht Club membership including racing programs, reciprocity access, social events, and more.",
};

const benefitCategories = [
  {
    id: "on-water",
    title: "On the Water",
    description: "Get out sailing with our active programs",
    icon: Ship,
    benefits: [
      {
        title: "Racing Programs",
        description:
          "Participate in Wednesday night beer can races, weekend regattas, and seasonal series. All skill levels welcome.",
        icon: Trophy,
      },
      {
        title: "Cruising Rallies",
        description:
          "Join group cruises exploring the Columbia River, coastal destinations, and overnight anchorages.",
        icon: Anchor,
      },
      {
        title: "Crew Connections",
        description:
          "Find opportunities to crew on member boats or recruit crew for your own vessel through our matching program.",
        icon: Users,
      },
      {
        title: "RC Laser Fleet",
        description:
          "Race radio-controlled sailboats with our active RC Laser fleet. Club boats available for newcomers.",
        icon: Ship,
      },
    ],
  },
  {
    id: "community",
    title: "Community & Social",
    description: "Connect with fellow sailors and make lasting friendships",
    icon: Users,
    benefits: [
      {
        title: "Monthly Socials",
        description:
          "First Friday gatherings, seasonal parties, and post-race celebrations at the clubhouse.",
        icon: Calendar,
      },
      {
        title: "Annual Events",
        description:
          "Opening Day ceremony, summer solstice party, holiday celebration, and annual awards banquet.",
        icon: Star,
      },
      {
        title: "Galley Access",
        description:
          "Use the clubhouse kitchen for events and enjoy potlucks with fellow members.",
        icon: Utensils,
      },
      {
        title: "Member Directory",
        description:
          "Connect with other members through our online directory and stay in touch with the sailing community.",
        icon: Users,
      },
    ],
  },
  {
    id: "education",
    title: "Education & Development",
    description: "Learn new skills and advance your sailing knowledge",
    icon: BookOpen,
    benefits: [
      {
        title: "Sailing Courses",
        description:
          "Access to learn-to-sail programs, racing clinics, and advanced seamanship courses.",
        icon: BookOpen,
      },
      {
        title: "Safety Seminars",
        description:
          "Regular workshops on marine safety, weather, navigation, and emergency procedures.",
        icon: Anchor,
      },
      {
        title: "Guest Speakers",
        description:
          "Monthly presentations from experienced sailors, marine professionals, and adventure cruisers.",
        icon: Users,
      },
      {
        title: "Mentorship Program",
        description:
          "New sailors can be paired with experienced members for guidance and on-water learning.",
        icon: Star,
      },
    ],
  },
  {
    id: "facilities",
    title: "Facilities & Resources",
    description: "Access club resources and amenities",
    icon: Wrench,
    benefits: [
      {
        title: "Clubhouse Access",
        description:
          "Use our waterfront clubhouse for meetings, events, and gatherings with fellow members.",
        icon: Anchor,
      },
      {
        title: "Equipment Library",
        description:
          "Borrow sailing books, charts, instructional videos, and reference materials.",
        icon: BookOpen,
      },
      {
        title: "Work Parties",
        description:
          "Participate in club maintenance days and learn boat care skills from experienced sailors.",
        icon: Wrench,
      },
      {
        title: "Newsletter",
        description:
          "Receive The Prior Edition monthly with club news, sailing tips, and community updates.",
        icon: Mail,
      },
    ],
  },
];

const reciprocityHighlights = [
  { region: "Pacific Northwest", clubs: "25+ clubs" },
  { region: "West Coast", clubs: "50+ clubs" },
  { region: "National", clubs: "150+ clubs" },
  { region: "International", clubs: "200+ clubs worldwide" },
];

const comparisonFeatures = [
  { feature: "Racing Programs", full: true, associate: true },
  { feature: "Cruising Rallies", full: true, associate: true },
  { feature: "Social Events", full: true, associate: true },
  { feature: "Newsletter Subscription", full: true, associate: true },
  { feature: "Crew Connections", full: true, associate: true },
  { feature: "Educational Programs", full: true, associate: true },
  { feature: "Clubhouse Access", full: true, associate: true },
  { feature: "Voting Rights", full: true, associate: false },
  { feature: "Reciprocity Privileges", full: true, associate: false },
  { feature: "Committee Membership", full: true, associate: false },
  { feature: "Board Eligibility", full: true, associate: false },
];

export default function BenefitsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-navy-800 py-16 text-white">
        <div className="absolute inset-0 bg-[url('/images/waves-pattern.svg')] opacity-5" />
        <Container className="relative">
          <nav className="mb-4 text-sm">
            <Link href="/membership" className="text-white/60 hover:text-white">
              Membership
            </Link>
            <span className="mx-2 text-white/40">/</span>
            <span className="text-white/80">Benefits</span>
          </nav>

          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Member Benefits
          </h1>
          <p className="max-w-2xl text-lg text-white/80">
            Discover everything that comes with your AYC membership. From racing
            and cruising to social events and worldwide reciprocity.
          </p>
        </Container>
      </section>

      {/* Quick Stats */}
      <section className="relative -mt-8 z-10">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard value="40+" label="Races per Year" />
            <StatCard value="12+" label="Cruises Annually" />
            <StatCard value="200+" label="Reciprocal Clubs" />
            <StatCard value="24+" label="Social Events" />
          </div>
        </Container>
      </section>

      {/* Benefit Categories */}
      {benefitCategories.map((category, index) => (
        <section
          key={category.id}
          id={category.id}
          className={`py-16 ${index % 2 === 1 ? "bg-white" : ""}`}
        >
          <Container>
            <div className="mb-10 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-ocean-100">
                <category.icon className="h-7 w-7 text-ocean-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-navy-800">
                  {category.title}
                </h2>
                <p className="text-gray-600">{category.description}</p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {category.benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-ocean-50">
                      <benefit.icon className="h-5 w-5 text-ocean-600" />
                    </div>
                    <h3 className="font-semibold text-navy-800">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      ))}

      {/* Reciprocity Section */}
      <section className="bg-navy-700 py-16 text-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <Globe className="mb-4 h-10 w-10 text-ocean-400" />
              <h2 className="mb-4 text-3xl font-bold">
                Worldwide Reciprocity Access
              </h2>
              <p className="mb-6 text-white/80">
                Full members enjoy reciprocal privileges at over 200 yacht clubs
                around the world. Simply present your AYC membership card and
                enjoy guest access to facilities, restaurants, and moorage at
                participating clubs.
              </p>
              <p className="text-white/80">
                This is one of the most valuable benefits of full membership —
                whether you&apos;re cruising the coast or traveling
                internationally, you&apos;ll find a welcoming port.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {reciprocityHighlights.map((item) => (
                <div
                  key={item.region}
                  className="rounded-xl bg-white/10 p-6 backdrop-blur-sm"
                >
                  <p className="text-2xl font-bold text-white">{item.clubs}</p>
                  <p className="text-white/70">{item.region}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/cruising/reciprocity"
              className="inline-flex items-center gap-2 text-ocean-300 hover:text-ocean-200"
            >
              View reciprocal club directory
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* Comparison Table */}
      <section className="py-16">
        <Container>
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-3xl font-bold text-navy-800">
              Compare Membership Levels
            </h2>
            <p className="text-lg text-gray-600">
              See what&apos;s included with each membership type
            </p>
          </div>

          <div className="mx-auto max-w-3xl overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="grid grid-cols-3 border-b border-gray-200 bg-gray-50">
              <div className="p-4">
                <span className="font-medium text-gray-700">Benefit</span>
              </div>
              <div className="border-l border-gray-200 p-4 text-center">
                <span className="font-semibold text-navy-800">Full</span>
                <p className="text-sm text-gray-500">$150/year</p>
              </div>
              <div className="border-l border-gray-200 p-4 text-center">
                <span className="font-semibold text-navy-800">Associate</span>
                <p className="text-sm text-gray-500">$75/year</p>
              </div>
            </div>

            {comparisonFeatures.map((item, index) => (
              <div
                key={item.feature}
                className={`grid grid-cols-3 ${
                  index < comparisonFeatures.length - 1
                    ? "border-b border-gray-100"
                    : ""
                }`}
              >
                <div className="p-4 text-sm text-gray-700">{item.feature}</div>
                <div className="flex items-center justify-center border-l border-gray-100 p-4">
                  {item.full ? (
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                  ) : (
                    <span className="text-gray-300">—</span>
                  )}
                </div>
                <div className="flex items-center justify-center border-l border-gray-100 p-4">
                  {item.associate ? (
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                  ) : (
                    <span className="text-gray-300">—</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-ocean-500 py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Anchor className="mx-auto mb-4 h-12 w-12 text-white/80" />
            <h2 className="mb-4 text-3xl font-bold text-white">
              Ready to Enjoy These Benefits?
            </h2>
            <p className="mb-8 text-lg text-white/90">
              Join the Astoria Yacht Club and start taking advantage of
              everything membership has to offer.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="primary"
                size="lg"
                className="bg-white text-ocean-600 hover:bg-gray-100"
                asChild
              >
                <Link href="/membership/apply">Apply Now</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <Link href="/membership">Learn More</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-lg">
      <p className="text-3xl font-bold text-navy-800">{value}</p>
      <p className="text-sm text-gray-600">{label}</p>
    </div>
  );
}
