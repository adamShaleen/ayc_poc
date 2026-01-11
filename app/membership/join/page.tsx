import { Metadata } from "next";
import Link from "next/link";
import {
  Anchor,
  Users,
  Trophy,
  Globe,
  Calendar,
  Ship,
  ChevronRight,
  Check,
  Heart,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Join the Club | Astoria Yacht Club",
  description:
    "Join the Astoria Yacht Club and become part of our sailing community on the Columbia River. No boat required.",
};

const quickBenefits = [
  {
    icon: Ship,
    title: "No Boat Required",
    description:
      "Many members sail without owning a boat through our crew connection program.",
  },
  {
    icon: Users,
    title: "Welcoming Community",
    description:
      "Join sailors of all skill levels who share a love of the water.",
  },
  {
    icon: Trophy,
    title: "Racing & Cruising",
    description:
      "Weekly races, weekend regattas, and group cruises throughout the year.",
  },
  {
    icon: Globe,
    title: "Reciprocity Access",
    description: "Full members can visit 200+ yacht clubs worldwide.",
  },
];

const membershipOptions = [
  {
    name: "Full Membership",
    price: 150,
    popular: true,
    highlights: [
      "Voting rights at club meetings",
      "Reciprocity at 200+ yacht clubs",
      "All racing and cruising programs",
      "Board eligibility",
    ],
  },
  {
    name: "Associate Membership",
    price: 75,
    popular: false,
    highlights: [
      "Access to all club events",
      "Racing and cruising programs",
      "Newsletter subscription",
      "Crew connection access",
    ],
  },
];

const testimonials = [
  {
    quote:
      "I joined without a boat and within a month I was crewing on Wednesday night races. The community here is incredibly welcoming.",
    author: "Sarah M.",
    role: "Member since 2022",
  },
  {
    quote:
      "AYC has been my sailing home for over a decade. The friendships I've made here are just as valuable as the time on the water.",
    author: "Mike T.",
    role: "Member since 2013",
  },
];

export default function JoinPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-navy-800 py-20 text-white">
        <div className="absolute inset-0 bg-[url('/images/waves-pattern.svg')] opacity-5" />
        <Container className="relative">
          <nav className="mb-6 text-sm">
            <Link href="/membership" className="text-white/60 hover:text-white">
              Membership
            </Link>
            <span className="mx-2 text-white/40">/</span>
            <span className="text-white/80">Join the Club</span>
          </nav>

          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2">
              <Heart className="h-4 w-4 text-brass-400" />
              <span className="text-sm font-medium">Welcome to AYC</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Join Our Sailing Community
            </h1>
            <p className="mb-8 text-xl text-white/80">
              Whether you&apos;re an experienced sailor or just getting started,
              there&apos;s a place for you at Astoria Yacht Club. Join us on the
              beautiful Columbia River.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="primary" size="lg" asChild>
                <Link href="/membership/apply">
                  Start Application
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-navy-800"
                asChild
              >
                <Link href="#membership-options">View Options</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Quick Benefits */}
      <section className="py-16">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {quickBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-ocean-100">
                  <benefit.icon className="h-6 w-6 text-ocean-600" />
                </div>
                <h3 className="mb-2 font-semibold text-navy-800">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Membership Options */}
      <section
        id="membership-options"
        className="scroll-mt-20 bg-gray-50 py-16"
      >
        <Container>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-navy-800">
              Choose Your Membership
            </h2>
            <p className="text-lg text-gray-600">
              Select the option that fits your needs
            </p>
          </div>

          <div className="mx-auto grid max-w-3xl gap-8 md:grid-cols-2">
            {membershipOptions.map((option) => (
              <div
                key={option.name}
                className={`relative rounded-2xl border-2 bg-white p-8 ${
                  option.popular
                    ? "border-ocean-500 shadow-xl"
                    : "border-gray-200 shadow-md"
                }`}
              >
                {option.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-ocean-500 px-4 py-1 text-sm font-medium text-white">
                    Most Popular
                  </div>
                )}

                <div className="mb-6 text-center">
                  <h3 className="text-xl font-bold text-navy-800">
                    {option.name}
                  </h3>
                  <div className="mt-2">
                    <span className="text-4xl font-bold text-navy-800">
                      ${option.price}
                    </span>
                    <span className="text-gray-500">/year</span>
                  </div>
                </div>

                <ul className="mb-8 space-y-3">
                  {option.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-3">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-sm text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={option.popular ? "primary" : "outline"}
                  className="w-full"
                  asChild
                >
                  <Link
                    href={`/membership/apply?type=${option.name === "Full Membership" ? "full" : "associate"}`}
                  >
                    Select & Apply
                  </Link>
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/membership#compare"
              className="inline-flex items-center gap-2 text-ocean-600 hover:text-ocean-700"
            >
              Compare all features
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-navy-800">
              What Members Say
            </h2>
          </div>

          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-200 bg-white p-6"
              >
                <p className="mb-4 text-gray-600 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ocean-100">
                    <Users className="h-5 w-5 text-ocean-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy-800">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* What to Expect */}
      <section className="bg-navy-700 py-16 text-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Calendar className="mx-auto mb-4 h-10 w-10 text-ocean-400" />
            <h2 className="mb-4 text-2xl font-bold">What Happens Next?</h2>
            <p className="mb-8 text-white/80">
              After you submit your application, our membership committee will
              review it within 1-2 weeks. Once approved, you&apos;ll receive a
              welcome packet and can start participating in club events right
              away.
            </p>

            <div className="grid gap-6 text-left sm:grid-cols-3">
              <div className="rounded-xl bg-white/10 p-6">
                <div className="mb-3 text-2xl font-bold text-brass-400">1</div>
                <h3 className="mb-2 font-semibold">Apply Online</h3>
                <p className="text-sm text-white/70">
                  Complete the simple application form with your information.
                </p>
              </div>
              <div className="rounded-xl bg-white/10 p-6">
                <div className="mb-3 text-2xl font-bold text-brass-400">2</div>
                <h3 className="mb-2 font-semibold">Get Approved</h3>
                <p className="text-sm text-white/70">
                  Our committee reviews applications and welcomes new members.
                </p>
              </div>
              <div className="rounded-xl bg-white/10 p-6">
                <div className="mb-3 text-2xl font-bold text-brass-400">3</div>
                <h3 className="mb-2 font-semibold">Start Sailing</h3>
                <p className="text-sm text-white/70">
                  Join your first event and meet your new sailing community.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Anchor className="mx-auto mb-4 h-12 w-12 text-ocean-500" />
            <h2 className="mb-4 text-3xl font-bold text-navy-800">
              Ready to Come Aboard?
            </h2>
            <p className="mb-8 text-lg text-gray-600">
              Join the Astoria Yacht Club and start your sailing adventure on
              the Columbia River.
            </p>
            <Button variant="primary" size="lg" asChild>
              <Link href="/membership/apply">
                Start Your Application
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <p className="mt-4 text-sm text-gray-500">
              Questions?{" "}
              <Link
                href="/membership#faq"
                className="text-ocean-600 hover:underline"
              >
                Check our FAQ
              </Link>{" "}
              or{" "}
              <a
                href="mailto:membership@astoriayachtclub.org"
                className="text-ocean-600 hover:underline"
              >
                contact us
              </a>
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}
