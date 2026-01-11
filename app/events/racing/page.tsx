"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { format } from "date-fns";
import {
  Trophy,
  Calendar,
  MapPin,
  Clock,
  ChevronRight,
  Ship,
  Radio,
  Users,
  FileText,
  Check,
  Circle,
  Filter,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { raceSeries, raceSchedule, raceDocuments } from "@/lib/data/racing";
import { cn } from "@/lib/utils";

type RaceType = "all" | "sailboat" | "rc-laser";

export default function EventsRacingPage() {
  const [raceTypeFilter, setRaceTypeFilter] = useState<RaceType>("all");

  const filteredSchedule = useMemo(() => {
    if (raceTypeFilter === "all") return raceSchedule;

    const seriesOfType = raceSeries
      .filter((s) => s.type === raceTypeFilter)
      .map((s) => s.id);

    return raceSchedule.filter((race) => seriesOfType.includes(race.seriesId));
  }, [raceTypeFilter]);

  const upcomingRaces = filteredSchedule
    .filter((race) => !race.completed)
    .sort((a, b) => a.date.getTime() - b.date.getTime());

  const completedRaces = filteredSchedule
    .filter((race) => race.completed)
    .sort((a, b) => b.date.getTime() - a.date.getTime());

  const getSeriesName = (seriesId: string) => {
    return raceSeries.find((s) => s.id === seriesId)?.name || seriesId;
  };

  const getSeriesType = (seriesId: string) => {
    return raceSeries.find((s) => s.id === seriesId)?.type || "sailboat";
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-navy-800 py-16 text-white">
        <div className="absolute inset-0 bg-[url('/images/waves-pattern.svg')] opacity-5" />
        <Container className="relative">
          <nav className="mb-4 text-sm">
            <Link href="/events" className="text-white/60 hover:text-white">
              Events
            </Link>
            <span className="mx-2 text-white/40">/</span>
            <span className="text-white/80">Racing</span>
          </nav>

          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <Trophy className="h-10 w-10 text-brass-400" />
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                  Racing Events
                </h1>
              </div>
              <p className="max-w-2xl text-lg text-white/80">
                View upcoming races, check results, and find your next
                opportunity to compete on the Columbia River.
              </p>
            </div>

            <div className="flex gap-3">
              <Button variant="primary" asChild>
                <Link href="/racing">
                  Full Racing Program
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-navy-800"
                asChild
              >
                <Link href="/racing/crew">Find Crew</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Quick Stats */}
      <section className="border-b border-gray-200 bg-white py-6">
        <Container>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-navy-800">
                {upcomingRaces.length}
              </p>
              <p className="text-sm text-gray-600">Upcoming Races</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-navy-800">
                {raceSeries.length}
              </p>
              <p className="text-sm text-gray-600">Active Series</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-navy-800">
                {raceSeries.reduce((acc, s) => acc + s.races, 0)}
              </p>
              <p className="text-sm text-gray-600">Races This Season</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-navy-800">
                {raceDocuments.length}
              </p>
              <p className="text-sm text-gray-600">Race Documents</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Filters */}
      <section className="border-b border-gray-200 bg-white py-4">
        <Container>
          <div className="flex items-center gap-4">
            <Filter className="h-5 w-5 text-gray-400" />
            <span className="text-sm font-medium text-gray-700">
              Filter by:
            </span>
            <div className="flex gap-2">
              {[
                { value: "all", label: "All Racing", icon: Trophy },
                { value: "sailboat", label: "Sailboat", icon: Ship },
                { value: "rc-laser", label: "RC Laser", icon: Radio },
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => setRaceTypeFilter(option.value as RaceType)}
                  className={cn(
                    "flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                    raceTypeFilter === option.value
                      ? "bg-ocean-100 text-ocean-700"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  )}
                >
                  <option.icon className="h-4 w-4" />
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Upcoming Races */}
      <section className="py-12">
        <Container>
          <div className="mb-8 flex items-center gap-3">
            <Calendar className="h-6 w-6 text-ocean-500" />
            <h2 className="text-2xl font-bold text-navy-800">Upcoming Races</h2>
          </div>

          {upcomingRaces.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {upcomingRaces.map((race) => (
                <RaceCard
                  key={race.id}
                  race={race}
                  seriesName={getSeriesName(race.seriesId)}
                  seriesType={getSeriesType(race.seriesId)}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-xl border-2 border-dashed border-gray-200 py-12 text-center">
              <Calendar className="mx-auto mb-4 h-12 w-12 text-gray-300" />
              <h3 className="mb-2 text-lg font-semibold text-gray-700">
                No upcoming races
              </h3>
              <p className="text-gray-500">
                {raceTypeFilter !== "all"
                  ? "Try selecting a different filter"
                  : "Check back soon for new race announcements"}
              </p>
            </div>
          )}
        </Container>
      </section>

      {/* Race Series Overview */}
      <section className="bg-white py-12">
        <Container>
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Trophy className="h-6 w-6 text-ocean-500" />
              <h2 className="text-2xl font-bold text-navy-800">Race Series</h2>
            </div>
            <Link
              href="/racing"
              className="flex items-center gap-1 text-sm font-medium text-ocean-600 hover:text-ocean-700"
            >
              View full program
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {raceSeries
              .filter(
                (s) => raceTypeFilter === "all" || s.type === raceTypeFilter
              )
              .map((series) => (
                <div
                  key={series.id}
                  className="rounded-xl border border-gray-200 bg-gray-50 p-6"
                >
                  <div className="mb-3 flex items-center gap-3">
                    {series.type === "sailboat" ? (
                      <Ship className="h-5 w-5 text-ocean-600" />
                    ) : (
                      <Radio className="h-5 w-5 text-ocean-600" />
                    )}
                    <h3 className="font-semibold text-navy-800">
                      {series.name}
                    </h3>
                  </div>
                  <p className="mb-4 text-sm text-gray-600">
                    {series.description}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {format(series.startDate, "MMM d")} -{" "}
                      {format(series.endDate, "MMM d")}
                    </span>
                    <span className="flex items-center gap-1">
                      <Trophy className="h-4 w-4" />
                      {series.races} races
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </Container>
      </section>

      {/* Recent Results */}
      {completedRaces.length > 0 && (
        <section className="py-12">
          <Container>
            <div className="mb-8 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Check className="h-6 w-6 text-green-500" />
                <h2 className="text-2xl font-bold text-navy-800">
                  Recent Results
                </h2>
              </div>
              <Link
                href="/racing"
                className="flex items-center gap-1 text-sm font-medium text-ocean-600 hover:text-ocean-700"
              >
                View all results
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left text-sm font-semibold text-navy-800">
                      Race
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-navy-800">
                      Date
                    </th>
                    <th className="hidden px-4 py-3 text-left text-sm font-semibold text-navy-800 sm:table-cell">
                      Series
                    </th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-navy-800">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {completedRaces.slice(0, 5).map((race) => (
                    <tr key={race.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          {getSeriesType(race.seriesId) === "sailboat" ? (
                            <Ship className="h-4 w-4 text-gray-400" />
                          ) : (
                            <Radio className="h-4 w-4 text-gray-400" />
                          )}
                          <span className="font-medium text-navy-800">
                            {race.name}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        {format(race.date, "MMM d, yyyy")}
                      </td>
                      <td className="hidden px-4 py-3 text-sm text-gray-600 sm:table-cell">
                        {getSeriesName(race.seriesId)}
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                          <Check className="h-3 w-3" />
                          Complete
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Container>
        </section>
      )}

      {/* Documents */}
      <section className="bg-white py-12">
        <Container>
          <div className="mb-8 flex items-center gap-3">
            <FileText className="h-6 w-6 text-ocean-500" />
            <h2 className="text-2xl font-bold text-navy-800">Race Documents</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {raceDocuments.slice(0, 6).map((doc) => (
              <a
                key={doc.id}
                href={doc.url}
                className="flex items-center gap-4 rounded-xl border border-gray-200 bg-gray-50 p-4 transition-colors hover:border-ocean-300 hover:bg-white"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-ocean-100">
                  <FileText className="h-5 w-5 text-ocean-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="truncate font-medium text-navy-800">
                    {doc.title}
                  </p>
                  <p className="text-sm text-gray-500">
                    {format(doc.date, "MMM d, yyyy")}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* Crew CTA */}
      <section className="bg-ocean-500 py-12">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Users className="mx-auto mb-4 h-10 w-10 text-white/80" />
            <h2 className="mb-4 text-2xl font-bold text-white">
              Want to Race but Don&apos;t Have a Boat?
            </h2>
            <p className="mb-6 text-white/90">
              Our Crew Connection program matches sailors with boats looking for
              crew. It&apos;s the perfect way to get racing experience!
            </p>
            <Button
              variant="primary"
              className="bg-white text-ocean-600 hover:bg-gray-100"
              asChild
            >
              <Link href="/racing/crew">Browse Crew Listings</Link>
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}

interface RaceCardProps {
  race: (typeof raceSchedule)[0];
  seriesName: string;
  seriesType: "sailboat" | "rc-laser";
}

function RaceCard({ race, seriesName, seriesType }: RaceCardProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-3 flex items-center justify-between">
        <span
          className={cn(
            "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium",
            seriesType === "sailboat"
              ? "bg-ocean-100 text-ocean-700"
              : "bg-purple-100 text-purple-700"
          )}
        >
          {seriesType === "sailboat" ? (
            <Ship className="h-3 w-3" />
          ) : (
            <Radio className="h-3 w-3" />
          )}
          {seriesType === "sailboat" ? "Sailboat" : "RC Laser"}
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-ocean-100 px-2 py-1 text-xs font-medium text-ocean-700">
          <Circle className="h-3 w-3" />
          Upcoming
        </span>
      </div>

      <h3 className="mb-1 font-semibold text-navy-800">{race.name}</h3>
      <p className="mb-4 text-sm text-gray-500">{seriesName}</p>

      <div className="space-y-2 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-gray-400" />
          {format(race.date, "EEEE, MMMM d, yyyy")}
        </div>
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-gray-400" />
          {race.time}
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-gray-400" />
          {race.location}
        </div>
      </div>

      {race.notes && (
        <p className="mt-3 rounded-lg bg-brass-50 px-3 py-2 text-xs text-brass-700">
          {race.notes}
        </p>
      )}
    </div>
  );
}
