"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Users,
  Search,
  Ship,
  Mail,
  MapPin,
  Filter,
  Anchor,
  ChevronDown,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

interface Member {
  id: string;
  name: string;
  memberSince: number;
  type: "full" | "associate";
  boat: { name: string; type: string } | null;
  location: string;
  interests: string[];
}

// Stubbed member data
const members: Member[] = [
  {
    id: "1",
    name: "Robert & Linda Thompson",
    memberSince: 2018,
    type: "full",
    boat: { name: "Sea Breeze", type: "Catalina 36" },
    location: "Astoria, OR",
    interests: ["Racing", "Cruising"],
  },
  {
    id: "2",
    name: "Michael Chen",
    memberSince: 2020,
    type: "full",
    boat: { name: "Pacific Dream", type: "Hunter 33" },
    location: "Warrenton, OR",
    interests: ["Cruising", "RC Laser"],
  },
  {
    id: "3",
    name: "Sarah Martinez",
    memberSince: 2022,
    type: "full",
    boat: null,
    location: "Astoria, OR",
    interests: ["Racing", "Crew"],
  },
  {
    id: "4",
    name: "James & Patricia Wilson",
    memberSince: 2015,
    type: "full",
    boat: { name: "Windward", type: "J/105" },
    location: "Seaside, OR",
    interests: ["Racing"],
  },
  {
    id: "5",
    name: "David Anderson",
    memberSince: 2019,
    type: "full",
    boat: { name: "Columbia Star", type: "Beneteau 343" },
    location: "Astoria, OR",
    interests: ["Cruising"],
  },
  {
    id: "6",
    name: "Emily Foster",
    memberSince: 2023,
    type: "associate",
    boat: null,
    location: "Long Beach, WA",
    interests: ["Racing", "Crew", "Education"],
  },
  {
    id: "7",
    name: "Richard & Mary Johnson",
    memberSince: 2012,
    type: "full",
    boat: { name: "Tranquility", type: "Island Packet 35" },
    location: "Astoria, OR",
    interests: ["Cruising"],
  },
  {
    id: "8",
    name: "Kevin O'Brien",
    memberSince: 2021,
    type: "full",
    boat: { name: "Irish Mist", type: "C&C 30" },
    location: "Ilwaco, WA",
    interests: ["Racing", "Cruising"],
  },
  {
    id: "9",
    name: "Jennifer Lee",
    memberSince: 2024,
    type: "associate",
    boat: null,
    location: "Astoria, OR",
    interests: ["Education", "Crew"],
  },
  {
    id: "10",
    name: "Thomas & Susan Brown",
    memberSince: 2016,
    type: "full",
    boat: { name: "Osprey", type: "Tartan 37" },
    location: "Warrenton, OR",
    interests: ["Racing", "Cruising"],
  },
  {
    id: "11",
    name: "Christopher Davis",
    memberSince: 2019,
    type: "full",
    boat: { name: "Zephyr", type: "J/24" },
    location: "Astoria, OR",
    interests: ["Racing"],
  },
  {
    id: "12",
    name: "Amanda White",
    memberSince: 2022,
    type: "full",
    boat: null,
    location: "Seaside, OR",
    interests: ["RC Laser", "Social"],
  },
  {
    id: "13",
    name: "Daniel & Karen Miller",
    memberSince: 2014,
    type: "full",
    boat: { name: "Second Wind", type: "Pearson 36" },
    location: "Astoria, OR",
    interests: ["Cruising"],
  },
  {
    id: "14",
    name: "Brian Taylor",
    memberSince: 2020,
    type: "full",
    boat: { name: "Quick Silver", type: "Melges 24" },
    location: "Ilwaco, WA",
    interests: ["Racing"],
  },
  {
    id: "15",
    name: "Rachel Green",
    memberSince: 2023,
    type: "associate",
    boat: null,
    location: "Astoria, OR",
    interests: ["Crew", "Education"],
  },
  {
    id: "16",
    name: "William & Nancy Clark",
    memberSince: 2011,
    type: "full",
    boat: { name: "Legacy", type: "Bristol 40" },
    location: "Astoria, OR",
    interests: ["Cruising"],
  },
];

const interestFilters = [
  "All",
  "Racing",
  "Cruising",
  "Crew",
  "RC Laser",
  "Education",
];

export default function RosterPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [interestFilter, setInterestFilter] = useState("All");
  const [showBoatOwners, setShowBoatOwners] = useState(false);

  const filteredMembers = useMemo(() => {
    return members.filter((member) => {
      // Search filter
      const matchesSearch =
        searchQuery === "" ||
        member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.boat?.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.location.toLowerCase().includes(searchQuery.toLowerCase());

      // Interest filter
      const matchesInterest =
        interestFilter === "All" || member.interests.includes(interestFilter);

      // Boat owner filter
      const matchesBoatOwner = !showBoatOwners || member.boat !== null;

      return matchesSearch && matchesInterest && matchesBoatOwner;
    });
  }, [searchQuery, interestFilter, showBoatOwners]);

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
            <span className="text-white/80">Member Roster</span>
          </nav>

          <div className="flex items-center gap-4">
            <Users className="h-10 w-10 text-ocean-400" />
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Member Roster
              </h1>
              <p className="mt-2 text-lg text-white/80">
                Connect with fellow AYC members
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Members Only Notice */}
      <section className="border-b border-amber-200 bg-amber-50">
        <Container className="py-4">
          <div className="flex items-center gap-3 text-amber-800">
            <Anchor className="h-5 w-5 flex-shrink-0" />
            <p className="text-sm">
              <strong>Members Only:</strong> Contact information is available to
              logged-in members. This preview shows limited information.
            </p>
          </div>
        </Container>
      </section>

      {/* Search and Filters */}
      <section className="border-b border-gray-200 bg-white py-6">
        <Container>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Search */}
            <div className="relative max-w-md flex-1">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, boat, or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-gray-300 py-2.5 pl-10 pr-4 text-gray-900 placeholder:text-gray-400 focus:border-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-500/20"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-gray-600">Filter:</span>
              </div>

              {/* Interest Filter */}
              <div className="relative">
                <select
                  value={interestFilter}
                  onChange={(e) => setInterestFilter(e.target.value)}
                  className="appearance-none rounded-lg border border-gray-300 bg-white py-2 pl-3 pr-8 text-sm text-gray-700 focus:border-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-500/20"
                >
                  {interestFilters.map((filter) => (
                    <option key={filter} value={filter}>
                      {filter === "All" ? "All Interests" : filter}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              </div>

              {/* Boat Owner Toggle */}
              <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-gray-300 px-3 py-2 text-sm transition-colors hover:bg-gray-50">
                <input
                  type="checkbox"
                  checked={showBoatOwners}
                  onChange={(e) => setShowBoatOwners(e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300 text-ocean-600 focus:ring-ocean-500"
                />
                <Ship className="h-4 w-4 text-gray-500" />
                <span className="text-gray-700">Boat Owners</span>
              </label>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredMembers.length} of {members.length} members
          </div>
        </Container>
      </section>

      {/* Member Grid */}
      <section className="py-12">
        <Container>
          {filteredMembers.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredMembers.map((member) => (
                <MemberCard key={member.id} member={member} />
              ))}
            </div>
          ) : (
            <div className="rounded-xl border-2 border-dashed border-gray-200 py-16 text-center">
              <Users className="mx-auto mb-4 h-12 w-12 text-gray-300" />
              <h3 className="mb-2 text-lg font-semibold text-gray-700">
                No members found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search or filters
              </p>
            </div>
          )}
        </Container>
      </section>

      {/* Contact CTA */}
      <section className="bg-white py-12">
        <Container>
          <div className="mx-auto max-w-2xl rounded-xl border border-gray-200 bg-gray-50 p-8 text-center">
            <Mail className="mx-auto mb-4 h-10 w-10 text-ocean-500" />
            <h2 className="mb-2 text-xl font-bold text-navy-800">
              Looking for Someone?
            </h2>
            <p className="mb-6 text-gray-600">
              Can&apos;t find who you&apos;re looking for? Contact the
              membership committee and we&apos;ll help connect you.
            </p>
            <a
              href="mailto:membership@astoriayachtclub.org"
              className="inline-flex items-center gap-2 rounded-lg bg-ocean-500 px-6 py-3 font-medium text-white transition-colors hover:bg-ocean-600"
            >
              <Mail className="h-4 w-4" />
              Contact Membership
            </a>
          </div>
        </Container>
      </section>
    </main>
  );
}

function MemberCard({ member }: { member: Member }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
      {/* Header */}
      <div className="mb-4 flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ocean-100">
          <Users className="h-6 w-6 text-ocean-600" />
        </div>
        <span
          className={cn(
            "rounded-full px-2.5 py-0.5 text-xs font-medium",
            member.type === "full"
              ? "bg-green-100 text-green-700"
              : "bg-gray-100 text-gray-600"
          )}
        >
          {member.type === "full" ? "Full Member" : "Associate"}
        </span>
      </div>

      {/* Name */}
      <h3 className="mb-1 font-semibold text-navy-800">{member.name}</h3>
      <p className="mb-3 text-sm text-gray-500">
        Member since {member.memberSince}
      </p>

      {/* Location */}
      <div className="mb-3 flex items-center gap-2 text-sm text-gray-600">
        <MapPin className="h-4 w-4 text-gray-400" />
        {member.location}
      </div>

      {/* Boat */}
      {member.boat && (
        <div className="mb-3 flex items-start gap-2 rounded-lg bg-ocean-50 p-2.5">
          <Ship className="mt-0.5 h-4 w-4 text-ocean-600" />
          <div>
            <p className="text-sm font-medium text-ocean-800">
              {member.boat.name}
            </p>
            <p className="text-xs text-ocean-600">{member.boat.type}</p>
          </div>
        </div>
      )}

      {/* Interests */}
      <div className="flex flex-wrap gap-1.5">
        {member.interests.map((interest) => (
          <span
            key={interest}
            className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600"
          >
            {interest}
          </span>
        ))}
      </div>
    </div>
  );
}
