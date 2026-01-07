"use client";

import { useState } from "react";
import Link from "next/link";
import { format } from "date-fns";
import {
  Ship,
  Users,
  FileText,
  Download,
  Sailboat,
  Radio,
  Check,
  Circle,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import {
  raceSeries,
  raceSchedule,
  springSeriesResults,
  seriesStandings,
  raceDocuments,
} from "@/lib/data/racing";
import { cn } from "@/lib/utils";

type RacingTab = "sailboat" | "rc-laser";

export default function RacingPage() {
  const [activeTab, setActiveTab] = useState<RacingTab>("sailboat");

  const sailboatSeries = raceSeries.filter((s) => s.type === "sailboat");
  const rcLaserSeries = raceSeries.filter((s) => s.type === "rc-laser");

  const sailboatSchedule = raceSchedule.filter((r) =>
    sailboatSeries.some((s) => s.id === r.seriesId)
  );
  const rcLaserSchedule = raceSchedule.filter((r) =>
    rcLaserSeries.some((s) => s.id === r.seriesId)
  );

  const sailboatDocs = raceDocuments.filter(
    (d) => !d.seriesId || sailboatSeries.some((s) => s.id === d.seriesId)
  );
  const rcLaserDocs = raceDocuments.filter(
    (d) => d.seriesId && rcLaserSeries.some((s) => s.id === d.seriesId)
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-700 via-navy-800 to-navy-900 pt-24 pb-12 md:pt-28 md:pb-16">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
                <Ship className="h-4 w-4 text-brass-400" />
                <span className="text-sm font-medium text-white">
                  Racing Program
                </span>
              </div>

              <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
                Racing at AYC
              </h1>
              <p className="max-w-2xl text-lg text-gray-300">
                From casual beer can races to competitive series, AYC offers
                racing for all skill levels. No boat? No problem — join our crew
                connection program!
              </p>
            </div>

            <div className="flex gap-3">
              <Button variant="primary" size="md" asChild>
                <Link href="/racing/crew" className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Find Crew
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Tab Navigation */}
      <section className="border-b border-gray-200 bg-white">
        <Container>
          <div className="flex gap-1">
            <button
              onClick={() => setActiveTab("sailboat")}
              className={cn(
                "flex items-center gap-2 border-b-2 px-6 py-4 text-sm font-medium transition-colors",
                activeTab === "sailboat"
                  ? "border-ocean-500 text-ocean-600"
                  : "border-transparent text-gray-600 hover:border-gray-300 hover:text-gray-900"
              )}
            >
              <Sailboat className="h-5 w-5" />
              Sailboat Racing
            </button>
            <button
              onClick={() => setActiveTab("rc-laser")}
              className={cn(
                "flex items-center gap-2 border-b-2 px-6 py-4 text-sm font-medium transition-colors",
                activeTab === "rc-laser"
                  ? "border-ocean-500 text-ocean-600"
                  : "border-transparent text-gray-600 hover:border-gray-300 hover:text-gray-900"
              )}
            >
              <Radio className="h-5 w-5" />
              RC Laser Racing
            </button>
          </div>
        </Container>
      </section>

      {/* Tab Content */}
      <section className="py-8 md:py-12">
        <Container>
          {activeTab === "sailboat" ? (
            <SailboatRacingContent
              series={sailboatSeries}
              schedule={sailboatSchedule}
              documents={sailboatDocs}
            />
          ) : (
            <RCLaserContent
              series={rcLaserSeries}
              schedule={rcLaserSchedule}
              documents={rcLaserDocs}
            />
          )}
        </Container>
      </section>

      {/* Crew CTA */}
      <section className="bg-gradient-to-r from-ocean-500 to-ocean-600 py-12">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Users className="mx-auto mb-4 h-12 w-12 text-white/80" />
            <h2 className="mb-4 text-3xl font-bold text-white">
              Need Crew? Looking to Race?
            </h2>
            <p className="mb-8 text-lg text-white/90">
              Our Crew Connection program matches skippers with crew and helps
              sailors find boats. It&apos;s the perfect way to get on the water!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="primary"
                size="lg"
                className="bg-white text-ocean-600 hover:bg-gray-100"
                asChild
              >
                <Link href="/racing/crew">Browse Crew Listings</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-ocean-600"
                asChild
              >
                <Link href="/racing/crew#signup">Post a Listing</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

// Sailboat Racing Content
function SailboatRacingContent({
  series,
  schedule,
  documents,
}: {
  series: typeof raceSeries;
  schedule: typeof raceSchedule;
  documents: typeof raceDocuments;
}) {
  return (
    <div className="space-y-12">
      {/* Overview */}
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="mb-4 text-2xl font-bold text-navy-800">
            Sailboat Racing Program
          </h2>
          <div className="prose prose-gray max-w-none">
            <p>
              AYC hosts sailing races throughout the season, from informal
              Wednesday night beer can races to competitive weekend series. Our
              racing program welcomes sailors of all experience levels, from
              first-time racers to seasoned competitors.
            </p>
            <p>
              Races are scored using PHRF handicapping, allowing boats of
              different sizes and types to compete fairly. Whether you sail a
              classic cruiser or a modern racer, there&apos;s a place for you on
              the starting line.
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
          <h3 className="mb-4 font-semibold text-navy-800">Quick Stats</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Active Series</span>
              <span className="font-semibold text-navy-800">
                {series.length}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Races This Season</span>
              <span className="font-semibold text-navy-800">
                {series.reduce((acc, s) => acc + s.races, 0)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Next Race</span>
              <span className="font-semibold text-navy-800">
                {schedule.find((r) => !r.completed)
                  ? format(schedule.find((r) => !r.completed)!.date, "MMM d")
                  : "TBD"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Race Schedule */}
      <div>
        <h2 className="mb-6 text-2xl font-bold text-navy-800">Race Schedule</h2>
        <div className="overflow-hidden rounded-xl border border-gray-200">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-3 text-left text-sm font-semibold text-navy-800">
                  Race
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-navy-800">
                  Date
                </th>
                <th className="hidden px-4 py-3 text-left text-sm font-semibold text-navy-800 md:table-cell">
                  Time
                </th>
                <th className="hidden px-4 py-3 text-left text-sm font-semibold text-navy-800 sm:table-cell">
                  Location
                </th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-navy-800">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {schedule.map((race) => (
                <tr key={race.id} className="bg-white hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <div className="font-medium text-navy-800">{race.name}</div>
                    {race.notes && (
                      <div className="text-xs text-gray-500">{race.notes}</div>
                    )}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">
                    {format(race.date, "MMM d, yyyy")}
                  </td>
                  <td className="hidden px-4 py-3 text-sm text-gray-600 md:table-cell">
                    {race.time}
                  </td>
                  <td className="hidden px-4 py-3 text-sm text-gray-600 sm:table-cell">
                    {race.location}
                  </td>
                  <td className="px-4 py-3 text-center">
                    {race.completed ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                        <Check className="h-3 w-3" />
                        Complete
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 rounded-full bg-ocean-100 px-2 py-1 text-xs font-medium text-ocean-700">
                        <Circle className="h-3 w-3" />
                        Upcoming
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Results */}
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="mb-4 text-xl font-bold text-navy-800">
            Latest Race Results
          </h2>
          <p className="mb-4 text-sm text-gray-600">
            Spring Series Race #2 -{" "}
            {format(new Date(2024, 3, 13), "MMMM d, yyyy")}
          </p>
          <div className="overflow-hidden rounded-xl border border-gray-200">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-3 py-2 text-left text-xs font-semibold text-navy-800">
                    Pos
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-semibold text-navy-800">
                    Boat
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-semibold text-navy-800">
                    Skipper
                  </th>
                  <th className="hidden px-3 py-2 text-left text-xs font-semibold text-navy-800 sm:table-cell">
                    Corrected
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {springSeriesResults.slice(0, 5).map((result) => (
                  <tr key={result.position} className="bg-white">
                    <td className="px-3 py-2">
                      <span
                        className={cn(
                          "inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold",
                          result.position === 1 &&
                            "bg-yellow-100 text-yellow-700",
                          result.position === 2 && "bg-gray-100 text-gray-700",
                          result.position === 3 &&
                            "bg-orange-100 text-orange-700",
                          result.position > 3 && "bg-gray-50 text-gray-600"
                        )}
                      >
                        {result.position}
                      </span>
                    </td>
                    <td className="px-3 py-2 text-sm font-medium text-navy-800">
                      {result.boat}
                    </td>
                    <td className="px-3 py-2 text-sm text-gray-600">
                      {result.skipper}
                    </td>
                    <td className="hidden px-3 py-2 text-sm text-gray-600 sm:table-cell">
                      {result.correctedTime}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-xl font-bold text-navy-800">
            Series Standings
          </h2>
          <p className="mb-4 text-sm text-gray-600">
            Spring Series 2024 (2 races completed)
          </p>
          <div className="overflow-hidden rounded-xl border border-gray-200">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-3 py-2 text-left text-xs font-semibold text-navy-800">
                    Pos
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-semibold text-navy-800">
                    Boat
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-semibold text-navy-800">
                    Skipper
                  </th>
                  <th className="px-3 py-2 text-right text-xs font-semibold text-navy-800">
                    Points
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {seriesStandings.map((result) => (
                  <tr key={result.position} className="bg-white">
                    <td className="px-3 py-2">
                      <span
                        className={cn(
                          "inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold",
                          result.position === 1 &&
                            "bg-yellow-100 text-yellow-700",
                          result.position === 2 && "bg-gray-100 text-gray-700",
                          result.position === 3 &&
                            "bg-orange-100 text-orange-700",
                          result.position > 3 && "bg-gray-50 text-gray-600"
                        )}
                      >
                        {result.position}
                      </span>
                    </td>
                    <td className="px-3 py-2 text-sm font-medium text-navy-800">
                      {result.boat}
                    </td>
                    <td className="px-3 py-2 text-sm text-gray-600">
                      {result.skipper}
                    </td>
                    <td className="px-3 py-2 text-right text-sm font-semibold text-navy-800">
                      {result.points}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Documents */}
      <div>
        <h2 className="mb-6 text-2xl font-bold text-navy-800">
          Race Documents
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {documents.map((doc) => (
            <a
              key={doc.id}
              href={doc.url}
              className="group flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 transition-all hover:border-ocean-300 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-ocean-100">
                <FileText className="h-6 w-6 text-ocean-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-navy-800 group-hover:text-ocean-600">
                  {doc.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {format(doc.date, "MMM d, yyyy")}
                </p>
              </div>
              <Download className="h-5 w-5 text-gray-400 group-hover:text-ocean-600" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

// RC Laser Content
function RCLaserContent({
  series: _series,
  schedule,
  documents,
}: {
  series: typeof raceSeries;
  schedule: typeof raceSchedule;
  documents: typeof raceDocuments;
}) {
  return (
    <div className="space-y-12">
      {/* Overview */}
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="mb-4 text-2xl font-bold text-navy-800">
            RC Laser Racing
          </h2>
          <div className="prose prose-gray max-w-none">
            <p>
              RC Laser racing offers all the tactics and excitement of full-size
              sailing in a portable, radio-controlled format. Race your 1-meter
              model sailboat from the dock — no crew required!
            </p>
            <p>
              Our RC Laser fleet is perfect for days when the weather is too
              rough for full-size boats, or for sailors who want to sharpen
              their tactical skills without leaving the dock. Club boats are
              available for new members to try.
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
          <h3 className="mb-4 font-semibold text-navy-800">Get Involved</h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
              Club boats available to borrow
            </li>
            <li className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
              No sailing experience required
            </li>
            <li className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
              Great for all ages
            </li>
            <li className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
              Race from the dock
            </li>
          </ul>
        </div>
      </div>

      {/* Schedule */}
      <div>
        <h2 className="mb-6 text-2xl font-bold text-navy-800">
          RC Laser Schedule
        </h2>
        <div className="overflow-hidden rounded-xl border border-gray-200">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-3 text-left text-sm font-semibold text-navy-800">
                  Race
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-navy-800">
                  Date
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-navy-800">
                  Time
                </th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-navy-800">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {schedule.map((race) => (
                <tr key={race.id} className="bg-white hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-navy-800">
                    {race.name}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">
                    {format(race.date, "MMM d, yyyy")}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">
                    {race.time}
                  </td>
                  <td className="px-4 py-3 text-center">
                    {race.completed ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                        <Check className="h-3 w-3" />
                        Complete
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 rounded-full bg-ocean-100 px-2 py-1 text-xs font-medium text-ocean-700">
                        <Circle className="h-3 w-3" />
                        Upcoming
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Documents */}
      {documents.length > 0 && (
        <div>
          <h2 className="mb-6 text-2xl font-bold text-navy-800">Documents</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {documents.map((doc) => (
              <a
                key={doc.id}
                href={doc.url}
                className="group flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 transition-all hover:border-ocean-300 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-ocean-100">
                  <FileText className="h-6 w-6 text-ocean-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-navy-800 group-hover:text-ocean-600">
                    {doc.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {format(doc.date, "MMM d, yyyy")}
                  </p>
                </div>
                <Download className="h-5 w-5 text-gray-400 group-hover:text-ocean-600" />
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
