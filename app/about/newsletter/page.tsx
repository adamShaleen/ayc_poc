import { Metadata } from "next";
import Link from "next/link";
import {
  Newspaper,
  Calendar,
  Download,
  Mail,
  ChevronRight,
  FileText,
  Archive,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Newsletter | Astoria Yacht Club",
  description:
    "Stay updated with The Prior Edition, the official newsletter of Astoria Yacht Club. Read past issues and subscribe to receive updates.",
};

// Stubbed newsletter data
const recentNewsletters = [
  {
    id: "2025-01",
    title: "January 2025",
    description:
      "New Year planning, winter maintenance tips, and upcoming spring racing schedule.",
    date: "January 1, 2025",
    highlights: [
      "Commodore's Message",
      "Spring Racing Calendar",
      "Member Spotlight: The Hendersons",
    ],
  },
  {
    id: "2024-12",
    title: "December 2024",
    description:
      "Holiday party recap, year in review, and annual awards recognition.",
    date: "December 1, 2024",
    highlights: [
      "2024 Year in Review",
      "Annual Awards Recipients",
      "Holiday Party Photos",
    ],
  },
  {
    id: "2024-11",
    title: "November 2024",
    description:
      "Board election results, winterization guide, and cruise recap.",
    date: "November 1, 2024",
    highlights: [
      "New Board Members",
      "Boat Winterization Guide",
      "Fall Cruise Photos",
    ],
  },
];

const archiveYears = [2024, 2023, 2022, 2021, 2020];

export default function NewsletterPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-navy-800 py-16 text-white">
        <div className="absolute inset-0 bg-[url('/images/waves-pattern.svg')] opacity-5" />
        <div className="container relative mx-auto px-4">
          <nav className="mb-4 text-sm">
            <Link href="/about" className="text-white/60 hover:text-white">
              About
            </Link>
            <span className="mx-2 text-white/40">/</span>
            <span className="text-white/80">Newsletter</span>
          </nav>
          <div className="flex items-center gap-3">
            <Newspaper className="h-10 w-10 text-ocean-400" />
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              The Prior Edition
            </h1>
          </div>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Our monthly newsletter keeps members informed about club activities,
            upcoming events, racing results, and stories from our sailing
            community.
          </p>
        </div>
      </section>

      {/* Recent Issues Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center gap-3">
            <FileText className="h-6 w-6 text-ocean-500" />
            <h2 className="text-2xl font-bold text-navy-800">Recent Issues</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recentNewsletters.map((newsletter) => (
              <NewsletterCard key={newsletter.id} newsletter={newsletter} />
            ))}
          </div>
        </div>
      </section>

      {/* About the Newsletter */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-bold text-navy-800">
                About The Prior Edition
              </h2>
              <p className="mb-4 text-gray-600">
                Named in honor of our founding commodore, The Prior Edition has
                been keeping AYC members connected since 1952. Published monthly
                from March through November, with a combined winter issue in
                December.
              </p>
              <p className="mb-6 text-gray-600">
                Each issue features the Commodore&apos;s message, upcoming
                events, racing news, cruising stories, member spotlights, and
                maintenance tips from experienced sailors in our community.
              </p>

              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                <h3 className="mb-3 font-semibold text-navy-800">
                  Regular Features
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-ocean-500" />
                    Commodore&apos;s Corner
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-ocean-500" />
                    Racing Report & Results
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-ocean-500" />
                    Cruising Chronicles
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-ocean-500" />
                    Member Spotlight
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-ocean-500" />
                    Galley Recipes
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-ocean-500" />
                    Upcoming Events Calendar
                  </li>
                </ul>
              </div>
            </div>

            {/* Subscribe Card */}
            <div>
              <div className="rounded-xl border border-ocean-200 bg-ocean-50 p-6">
                <Mail className="mb-4 h-10 w-10 text-ocean-500" />
                <h3 className="mb-2 text-xl font-bold text-navy-800">
                  Subscribe to Updates
                </h3>
                <p className="mb-6 text-gray-600">
                  Members automatically receive The Prior Edition via email.
                  Non-members can subscribe to receive a quarterly digest of
                  club news.
                </p>

                <form className="space-y-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1 block text-sm font-medium text-gray-700"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="you@example.com"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-500/20"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-ocean-500 px-6 py-3 font-medium text-white transition-colors hover:bg-ocean-600"
                  >
                    Subscribe
                  </button>
                </form>

                <p className="mt-4 text-xs text-gray-500">
                  By subscribing, you agree to receive email communications from
                  AYC. You can unsubscribe at any time.
                </p>
              </div>

              <div className="mt-6 rounded-xl border border-gray-200 bg-white p-6">
                <h3 className="mb-2 font-semibold text-navy-800">
                  Want to Contribute?
                </h3>
                <p className="mb-4 text-sm text-gray-600">
                  We welcome member submissions! Share your sailing stories,
                  photos, recipes, or tips with our community.
                </p>
                <a
                  href="mailto:newsletter@astoriayachtclub.org"
                  className="inline-flex items-center gap-2 text-ocean-600 hover:text-ocean-700"
                >
                  <Mail className="h-4 w-4" />
                  newsletter@astoriayachtclub.org
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Archive Section */}
      <section className="py-12" id="archive">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center gap-3">
            <Archive className="h-6 w-6 text-ocean-500" />
            <h2 className="text-2xl font-bold text-navy-800">
              Newsletter Archive
            </h2>
          </div>

          <p className="mb-6 text-gray-600">
            Browse past issues of The Prior Edition. Archives are available to
            members in PDF format.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {archiveYears.map((year) => (
              <div
                key={year}
                className="rounded-xl border border-gray-200 bg-white p-4"
              >
                <h3 className="mb-3 text-lg font-semibold text-navy-800">
                  {year}
                </h3>
                <div className="space-y-2">
                  {getMonthsForYear(year).map((month) => (
                    <a
                      key={month}
                      href="#"
                      className="flex items-center justify-between rounded-lg px-2 py-1 text-sm text-gray-600 transition-colors hover:bg-gray-100 hover:text-ocean-600"
                    >
                      <span>{month}</span>
                      <Download className="h-3 w-3" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-gray-500">
            Looking for older issues? Contact our historian at{" "}
            <a
              href="mailto:historian@astoriayachtclub.org"
              className="text-ocean-600 hover:underline"
            >
              historian@astoriayachtclub.org
            </a>
          </p>
        </div>
      </section>

      {/* Publication Schedule */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-8">
            <div className="flex items-center gap-3">
              <Calendar className="h-6 w-6 text-ocean-500" />
              <h2 className="text-xl font-bold text-navy-800">
                Publication Schedule
              </h2>
            </div>
            <p className="mt-4 text-gray-600">
              The Prior Edition is published on the first of each month from
              March through November. The December issue covers
              December–February. Submission deadline is the 25th of the
              preceding month.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec*",
              ].map((month) => (
                <span
                  key={month}
                  className="rounded-full bg-ocean-100 px-3 py-1 text-sm font-medium text-ocean-700"
                >
                  {month}
                </span>
              ))}
            </div>
            <p className="mt-4 text-xs text-gray-500">
              * December issue is a combined winter edition covering
              December–February
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

function NewsletterCard({
  newsletter,
}: {
  newsletter: {
    id: string;
    title: string;
    description: string;
    date: string;
    highlights: string[];
  };
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-3 flex items-center justify-between">
        <span className="rounded-full bg-ocean-100 px-3 py-1 text-sm font-medium text-ocean-700">
          {newsletter.title}
        </span>
        <span className="text-xs text-gray-500">{newsletter.date}</span>
      </div>

      <p className="mb-4 text-gray-600">{newsletter.description}</p>

      <div className="mb-4">
        <p className="mb-2 text-xs font-medium uppercase tracking-wide text-gray-500">
          In This Issue
        </p>
        <ul className="space-y-1">
          {newsletter.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex items-center gap-2 text-sm text-gray-600"
            >
              <ChevronRight className="h-3 w-3 text-ocean-500" />
              {highlight}
            </li>
          ))}
        </ul>
      </div>

      <a
        href="#"
        className="inline-flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200"
      >
        <Download className="h-4 w-4" />
        Download PDF
      </a>
    </div>
  );
}

function getMonthsForYear(year: number): string[] {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();

  const allMonths = [
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  if (year < currentYear) {
    return allMonths;
  }

  // For current year, only show months up to current month
  return allMonths.slice(0, Math.min(currentMonth - 1, allMonths.length));
}
