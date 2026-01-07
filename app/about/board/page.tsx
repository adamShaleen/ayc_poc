import { Metadata } from "next";
import Link from "next/link";
import { Users, Calendar, Mail, ChevronRight, Anchor } from "lucide-react";
import { boardMembers, boardMeetings } from "@/lib/data/club";
import { BoardMemberCard } from "./BoardMemberCard";

export const metadata: Metadata = {
  title: "Board of Directors | Astoria Yacht Club",
  description:
    "Meet the volunteer leaders who guide Astoria Yacht Club. Learn about our board members and how to get involved.",
};

export default function BoardPage() {
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
            <span className="text-white/80">Board of Directors</span>
          </nav>
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Board of Directors
          </h1>
          <p className="max-w-2xl text-lg text-white/80">
            Meet the volunteer leaders who guide our club. Our board members
            donate their time and expertise to keep AYC thriving.
          </p>
        </div>
      </section>

      {/* Board Members Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center gap-3">
            <Users className="h-6 w-6 text-ocean-500" />
            <h2 className="text-2xl font-bold text-navy-800">
              Current Board Members
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {boardMembers.map((member) => (
              <BoardMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Meetings Section */}
      <section className="bg-white py-12" id="meetings">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Meeting Schedule */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <Calendar className="h-6 w-6 text-ocean-500" />
                <h2 className="text-2xl font-bold text-navy-800">
                  Board Meetings
                </h2>
              </div>
              <p className="mb-6 text-gray-600">
                Board meetings are held monthly and are open to all club
                members. Come share your ideas and stay informed about club
                business.
              </p>

              <div className="rounded-xl border border-gray-200 bg-gray-50">
                <div className="border-b border-gray-200 bg-gray-100 px-4 py-3">
                  <h3 className="font-semibold text-navy-800">
                    Upcoming Meetings
                  </h3>
                </div>
                <div className="divide-y divide-gray-200">
                  {boardMeetings.map((meeting, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between px-4 py-3"
                    >
                      <div>
                        <p className="font-medium text-gray-900">
                          {meeting.date}
                        </p>
                        <p className="text-sm text-gray-500">
                          {meeting.location}
                        </p>
                      </div>
                      <span className="rounded-full bg-ocean-100 px-3 py-1 text-xs font-medium text-ocean-700">
                        7:00 PM
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Get Involved */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <Anchor className="h-6 w-6 text-ocean-500" />
                <h2 className="text-2xl font-bold text-navy-800">
                  Get Involved
                </h2>
              </div>
              <p className="mb-6 text-gray-600">
                AYC is entirely volunteer-run. There are many ways to contribute
                and help shape the future of our club.
              </p>

              <div className="space-y-4">
                <InvolvementCard
                  title="Join a Committee"
                  description="Racing, cruising, social events, facilities - we have committees for every interest."
                />
                <InvolvementCard
                  title="Run for the Board"
                  description="Board elections are held annually in November. Consider running for a position."
                />
                <InvolvementCard
                  title="Volunteer at Events"
                  description="Help with race committee, social events, or club maintenance work parties."
                />
                <InvolvementCard
                  title="Share Your Skills"
                  description="From web design to boat maintenance, your professional skills can help the club."
                />
              </div>

              <div className="mt-6">
                <Link
                  href="/membership"
                  className="inline-flex items-center gap-2 text-ocean-600 hover:text-ocean-700"
                >
                  Learn about membership
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="rounded-xl border border-gray-200 bg-white p-8 text-center">
            <Mail className="mx-auto mb-4 h-10 w-10 text-ocean-500" />
            <h2 className="mb-2 text-xl font-bold text-navy-800">
              Contact the Board
            </h2>
            <p className="mb-4 text-gray-600">
              Have questions or suggestions for the board?
            </p>
            <a
              href="mailto:board@astoriayachtclub.org"
              className="inline-flex items-center gap-2 rounded-lg bg-ocean-500 px-6 py-3 font-medium text-white transition-colors hover:bg-ocean-600"
            >
              <Mail className="h-4 w-4" />
              Email the Board
            </a>
          </div>
        </div>
      </section>

      {/* Meeting Minutes */}
      <section className="bg-white py-12" id="minutes">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-2xl font-bold text-navy-800">
            Meeting Minutes
          </h2>
          <p className="mb-6 text-gray-600">
            Access past meeting minutes to stay informed about club business and
            decisions.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "December 2024",
              "November 2024",
              "October 2024",
              "September 2024",
            ].map((month) => (
              <a
                key={month}
                href="#"
                className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 p-4 transition-colors hover:bg-gray-100"
              >
                <span className="font-medium text-gray-900">{month}</span>
                <span className="text-sm text-ocean-600">View PDF</span>
              </a>
            ))}
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Older minutes available upon request from the Secretary.
          </p>
        </div>
      </section>
    </main>
  );
}

function InvolvementCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
      <h3 className="mb-1 font-semibold text-navy-800">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}
