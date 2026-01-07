import { Metadata } from "next";
import Link from "next/link";
import {
  Check,
  X,
  Ship,
  Users,
  Globe,
  Calendar,
  Award,
  Heart,
  ArrowRight,
  FileText,
  CreditCard,
  Anchor,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "Join the Astoria Yacht Club. Compare membership options and become part of our sailing community.",
};

const membershipTiers = [
  {
    id: "full",
    name: "Full Membership",
    price: 150,
    period: "year",
    description:
      "Complete access to all club activities with full voting rights",
    popular: true,
    features: [
      { name: "Voting rights at club meetings", included: true },
      { name: "Access to all racing programs", included: true },
      { name: "Reciprocity at 200+ yacht clubs", included: true },
      { name: "Newsletter subscription", included: true },
      { name: "Club event discounts", included: true },
      { name: "Crew connection access", included: true },
      { name: "Committee membership eligibility", included: true },
      { name: "Board of Directors eligibility", included: true },
    ],
  },
  {
    id: "associate",
    name: "Associate Membership",
    price: 75,
    period: "year",
    description: "Perfect for new sailors or those exploring the club",
    popular: false,
    features: [
      { name: "Voting rights at club meetings", included: false },
      { name: "Access to all racing programs", included: true },
      { name: "Reciprocity at 200+ yacht clubs", included: false },
      { name: "Newsletter subscription", included: true },
      { name: "Club event discounts", included: true },
      { name: "Crew connection access", included: true },
      { name: "Committee membership eligibility", included: false },
      { name: "Board of Directors eligibility", included: false },
    ],
  },
];

const benefits = [
  {
    icon: Ship,
    title: "No Boat Required",
    description:
      "Connect with boat owners looking for crew. Many members sail without owning a boat.",
  },
  {
    icon: Users,
    title: "Welcoming Community",
    description:
      "Join a friendly group of sailors who love sharing their passion for the water.",
  },
  {
    icon: Globe,
    title: "Global Access",
    description:
      "Full members enjoy reciprocity at yacht clubs around the world.",
  },
  {
    icon: Calendar,
    title: "Year-Round Events",
    description:
      "Racing, cruising, socials, and educational events throughout the year.",
  },
];

const applicationSteps = [
  {
    step: 1,
    title: "Submit Application",
    description: "Complete the online application form with your information",
    icon: FileText,
  },
  {
    step: 2,
    title: "Application Review",
    description: "The membership committee reviews your application",
    icon: Users,
  },
  {
    step: 3,
    title: "Pay Dues",
    description: "Submit payment by check, cash, or credit card",
    icon: CreditCard,
  },
  {
    step: 4,
    title: "Welcome Aboard!",
    description: "Receive your membership packet and start enjoying the club",
    icon: Anchor,
  },
];

const faqItems = [
  {
    id: "1",
    question: "Do I need to own a boat to join?",
    answer: (
      <p>
        No! Many of our members don&apos;t own boats. Our crew connection
        program helps match sailors with boat owners looking for crew. It&apos;s
        a great way to get out on the water while learning from experienced
        sailors.
      </p>
    ),
  },
  {
    id: "2",
    question: "What's the difference between Full and Associate membership?",
    answer: (
      <div className="space-y-2">
        <p>
          <strong>Full Members</strong> have voting rights at club meetings, can
          serve on the Board of Directors, and receive reciprocity privileges at
          200+ yacht clubs worldwide.
        </p>
        <p>
          <strong>Associate Members</strong> can participate in all club
          activities including racing, cruising, and social events, but
          don&apos;t have voting rights or reciprocity access.
        </p>
      </div>
    ),
  },
  {
    id: "3",
    question: "Can I upgrade from Associate to Full membership?",
    answer: (
      <p>
        Yes! You can upgrade at any time by paying the difference in dues.
        Contact our membership committee or simply renew as a Full Member when
        your membership is up for renewal.
      </p>
    ),
  },
  {
    id: "4",
    question: "What is reciprocity and how does it work?",
    answer: (
      <p>
        Reciprocity allows Full Members to visit other yacht clubs around the
        world and use their facilities as a guest. Simply present your AYC
        membership card and most clubs will extend guest privileges. This is a
        fantastic benefit when traveling!
      </p>
    ),
  },
  {
    id: "5",
    question: "How long does the application process take?",
    answer: (
      <p>
        Most applications are processed within 1-2 weeks. The membership
        committee meets regularly to review new applications. You&apos;ll
        receive an email notification once your membership is approved.
      </p>
    ),
  },
  {
    id: "6",
    question: "What payment methods do you accept?",
    answer: (
      <p>
        We accept credit cards (Visa, MasterCard, American Express), checks made
        payable to &quot;Astoria Yacht Club,&quot; and cash. Payment can be
        submitted online or at the clubhouse.
      </p>
    ),
  },
  {
    id: "7",
    question: "Is there a family membership option?",
    answer: (
      <p>
        Yes! A single membership covers the primary member and their immediate
        household family members (spouse/partner and children under 18). Adult
        children or other family members would need their own membership.
      </p>
    ),
  },
];

export default function MembershipPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-700 via-navy-800 to-navy-900 pt-24 pb-16 md:pt-28 md:pb-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <Heart className="h-4 w-4 text-brass-400" />
              <span className="text-sm font-medium text-white">
                Join Our Community
              </span>
            </div>

            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">
              Become a Member
            </h1>
            <p className="mb-8 text-xl text-gray-300">
              Join a welcoming community of sailors on the beautiful Columbia
              River. Whether you own a boat or not, there&apos;s a place for you
              at AYC.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="primary" size="lg" className="group" asChild>
                <Link href="/membership/apply">
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-navy-700"
                asChild
              >
                <Link href="#compare">Compare Options</Link>
              </Button>
            </div>
          </div>
        </Container>

        {/* Wave decoration */}
        <div className="relative mt-12">
          <svg
            viewBox="0 0 1440 60"
            fill="none"
            className="w-full text-gray-50"
            preserveAspectRatio="none"
          >
            <path
              d="M0 60L60 55C120 50 240 40 360 35C480 30 600 30 720 35C840 40 960 50 1080 52C1200 54 1320 48 1380 45L1440 42V60H0Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="bg-gray-50 py-16 md:py-20">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-navy-800">
              Why Join AYC?
            </h2>
            <p className="text-lg text-gray-600">
              Membership comes with benefits that extend far beyond the dock
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-xl bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg"
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

      {/* Comparison Table */}
      <section id="compare" className="scroll-mt-20 py-16 md:py-20">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-navy-800">
              Choose Your Membership
            </h2>
            <p className="text-lg text-gray-600">
              Select the option that best fits your needs
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-2">
            {membershipTiers.map((tier) => (
              <div
                key={tier.id}
                className={cn(
                  "relative overflow-hidden rounded-2xl border-2 bg-white p-8",
                  tier.popular
                    ? "border-ocean-500 shadow-xl"
                    : "border-gray-200 shadow-md"
                )}
              >
                {tier.popular && (
                  <div className="absolute right-0 top-0 rounded-bl-xl bg-ocean-500 px-4 py-1 text-sm font-medium text-white">
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-navy-800">
                    {tier.name}
                  </h3>
                  <p className="mt-2 text-gray-600">{tier.description}</p>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-navy-800">
                    ${tier.price}
                  </span>
                  <span className="text-gray-500">/{tier.period}</span>
                </div>

                <ul className="mb-8 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature.name} className="flex items-center gap-3">
                      {feature.included ? (
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100">
                          <Check className="h-3 w-3 text-green-600" />
                        </div>
                      ) : (
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-100">
                          <X className="h-3 w-3 text-gray-400" />
                        </div>
                      )}
                      <span
                        className={cn(
                          "text-sm",
                          feature.included ? "text-gray-700" : "text-gray-400"
                        )}
                      >
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={tier.popular ? "primary" : "outline"}
                  size="lg"
                  className="w-full"
                  asChild
                >
                  <Link href={`/membership/apply?type=${tier.id}`}>
                    Select {tier.name}
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Application Process Timeline */}
      <section className="bg-navy-700 py-16 md:py-20">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">How to Join</h2>
            <p className="text-lg text-gray-300">
              Getting started is easy — here&apos;s what to expect
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="relative">
              {/* Connection line */}
              <div className="absolute left-8 top-0 hidden h-full w-0.5 bg-white/20 md:left-1/2 md:block md:-translate-x-1/2" />

              {applicationSteps.map((step, index) => (
                <div
                  key={step.step}
                  className={cn(
                    "relative mb-8 flex items-start gap-6 last:mb-0 md:mb-12",
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  )}
                >
                  {/* Step number */}
                  <div
                    className={cn(
                      "relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full",
                      "bg-gradient-to-br from-ocean-500 to-ocean-600 shadow-lg"
                    )}
                  >
                    <step.icon className="h-7 w-7 text-white" />
                  </div>

                  {/* Content */}
                  <div
                    className={cn(
                      "flex-1 rounded-xl bg-white/10 p-6 backdrop-blur-sm",
                      "md:max-w-xs",
                      index % 2 === 0 ? "md:text-left" : "md:text-right"
                    )}
                  >
                    <div className="mb-1 text-sm font-medium text-brass-400">
                      Step {step.step}
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button variant="primary" size="lg" asChild>
              <Link href="/membership/apply">Start Your Application</Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-navy-800">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Have questions? We&apos;ve got answers.
              </p>
            </div>

            <Accordion items={faqItems} />

            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Still have questions?{" "}
                <Link
                  href="/contact"
                  className="font-medium text-ocean-600 hover:underline"
                >
                  Contact us
                </Link>{" "}
                and we&apos;ll be happy to help.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-ocean-500 to-ocean-600 py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Award className="mx-auto mb-6 h-12 w-12 text-white/80" />
            <h2 className="mb-4 text-3xl font-bold text-white">
              Ready to Join?
            </h2>
            <p className="mb-8 text-lg text-white/90">
              Become part of our sailing community today. We can&apos;t wait to
              welcome you aboard!
            </p>
            <Button
              variant="primary"
              size="lg"
              className="bg-white text-ocean-600 hover:bg-gray-100"
              asChild
            >
              <Link href="/membership/apply">Apply for Membership</Link>
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
