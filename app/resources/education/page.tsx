import { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  Calendar,
  Clock,
  Users,
  Award,
  Compass,
  Anchor,
  Ship,
  ChevronRight,
  Check,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Education | Astoria Yacht Club",
  description:
    "Sailing courses, workshops, and educational programs at Astoria Yacht Club. Learn to sail or advance your skills.",
};

// Stubbed course data
const upcomingCourses = [
  {
    id: "basic-sailing",
    title: "Basic Keelboat Sailing",
    description:
      "Learn the fundamentals of sailing in this comprehensive beginner course. Covers sail trim, points of sail, basic maneuvers, and safety.",
    dates: "Saturdays, March 15 - April 5",
    time: "9:00 AM - 1:00 PM",
    duration: "4 weeks",
    level: "Beginner",
    instructor: "Captain Mike Thompson",
    price: "$250",
    spotsLeft: 4,
  },
  {
    id: "coastal-navigation",
    title: "Coastal Navigation",
    description:
      "Master chart reading, plotting courses, using GPS and radar, and understanding tides and currents for coastal cruising.",
    dates: "Wednesdays, April 9 - May 7",
    time: "6:30 PM - 8:30 PM",
    duration: "5 weeks",
    level: "Intermediate",
    instructor: "Sarah Chen",
    price: "$175",
    spotsLeft: 8,
  },
  {
    id: "racing-tactics",
    title: "Racing Tactics & Strategy",
    description:
      "Improve your racing performance with this course covering starts, mark roundings, tactics, and rules of the road.",
    dates: "Saturday, April 19",
    time: "9:00 AM - 4:00 PM",
    duration: "1 day",
    level: "Intermediate",
    instructor: "Bob Wilson",
    price: "$95",
    spotsLeft: 6,
  },
];

const ongoingPrograms = [
  {
    title: "Wednesday Night Learn-to-Race",
    description:
      "Join experienced skippers for informal racing instruction during our weekly beer can races. Perfect for those wanting to try racing.",
    schedule: "Wednesdays, May - September",
    icon: Ship,
  },
  {
    title: "Junior Sailing Program",
    description:
      "Summer program teaching kids ages 8-16 the joy of sailing in Optimist dinghies and Club 420s.",
    schedule: "June - August (summer sessions)",
    icon: Users,
  },
  {
    title: "Cruising Seminars",
    description:
      "Monthly presentations on cruising topics including weather, anchoring, provisioning, and destination planning.",
    schedule: "First Tuesday of each month",
    icon: Compass,
  },
];

const certifications = [
  {
    name: "US Sailing Basic Keelboat",
    description:
      "Nationally recognized certification for sailing small keelboats",
    requirements: [
      "Complete Basic Keelboat course",
      "Pass written exam",
      "Demonstrate sailing skills",
    ],
  },
  {
    name: "US Sailing Basic Cruising",
    description: "Certification for bareboat charter and coastal cruising",
    requirements: [
      "Basic Keelboat certification",
      "Navigation course",
      "Multi-day cruise experience",
    ],
  },
  {
    name: "US Powerboating Safety",
    description: "Required certification for operating club powerboats",
    requirements: ["Complete safety course", "Pass practical exam"],
  },
];

export default function EducationPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-navy-800 py-16 text-white">
        <div className="absolute inset-0 bg-[url('/images/waves-pattern.svg')] opacity-5" />
        <Container className="relative">
          <nav className="mb-4 text-sm">
            <Link href="/resources" className="text-white/60 hover:text-white">
              Resources
            </Link>
            <span className="mx-2 text-white/40">/</span>
            <span className="text-white/80">Education</span>
          </nav>

          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <BookOpen className="h-10 w-10 text-ocean-400" />
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                  Education
                </h1>
              </div>
              <p className="max-w-2xl text-lg text-white/80">
                From beginner sailing courses to advanced navigation seminars,
                AYC offers educational opportunities for sailors at every level.
              </p>
            </div>

            <Button variant="primary" asChild>
              <a href="#courses">
                View Upcoming Courses
                <ChevronRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </Container>
      </section>

      {/* Quick Stats */}
      <section className="border-b border-gray-200 bg-white py-6">
        <Container>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-navy-800">15+</p>
              <p className="text-sm text-gray-600">Courses Per Year</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-navy-800">200+</p>
              <p className="text-sm text-gray-600">Students Taught</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-navy-800">8</p>
              <p className="text-sm text-gray-600">Certified Instructors</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-navy-800">3</p>
              <p className="text-sm text-gray-600">US Sailing Certifications</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Upcoming Courses */}
      <section id="courses" className="scroll-mt-20 py-12">
        <Container>
          <div className="mb-8 flex items-center gap-3">
            <Calendar className="h-6 w-6 text-ocean-500" />
            <h2 className="text-2xl font-bold text-navy-800">
              Upcoming Courses
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {upcomingCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Don&apos;t see what you&apos;re looking for?{" "}
              <a
                href="mailto:education@astoriayachtclub.org"
                className="text-ocean-600 hover:underline"
              >
                Contact our Education Committee
              </a>{" "}
              to suggest a course.
            </p>
          </div>
        </Container>
      </section>

      {/* Ongoing Programs */}
      <section className="bg-white py-12">
        <Container>
          <div className="mb-8 flex items-center gap-3">
            <Users className="h-6 w-6 text-ocean-500" />
            <h2 className="text-2xl font-bold text-navy-800">
              Ongoing Programs
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {ongoingPrograms.map((program) => (
              <div
                key={program.title}
                className="rounded-xl border border-gray-200 bg-gray-50 p-6"
              >
                <program.icon className="mb-4 h-8 w-8 text-ocean-500" />
                <h3 className="mb-2 font-semibold text-navy-800">
                  {program.title}
                </h3>
                <p className="mb-4 text-sm text-gray-600">
                  {program.description}
                </p>
                <div className="flex items-center gap-2 text-sm text-ocean-600">
                  <Calendar className="h-4 w-4" />
                  {program.schedule}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Certifications */}
      <section className="py-12">
        <Container>
          <div className="mb-8 flex items-center gap-3">
            <Award className="h-6 w-6 text-ocean-500" />
            <h2 className="text-2xl font-bold text-navy-800">Certifications</h2>
          </div>

          <p className="mb-8 max-w-3xl text-gray-600">
            AYC is a US Sailing certified training center. Complete our courses
            to earn nationally recognized certifications that are accepted at
            charter companies and sailing schools worldwide.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="rounded-xl border border-gray-200 bg-white p-6"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brass-100">
                  <Award className="h-6 w-6 text-brass-600" />
                </div>
                <h3 className="mb-2 font-semibold text-navy-800">
                  {cert.name}
                </h3>
                <p className="mb-4 text-sm text-gray-600">{cert.description}</p>
                <div className="space-y-2">
                  <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                    Requirements
                  </p>
                  {cert.requirements.map((req) => (
                    <div
                      key={req}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                      {req}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Instructors */}
      <section className="bg-white py-12">
        <Container>
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-2xl font-bold text-navy-800">
              Our Instructors
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Our volunteer instructors are experienced sailors with a passion
              for teaching. All instructors are US Sailing certified and bring
              decades of combined experience.
            </p>
          </div>

          <div className="mx-auto max-w-3xl rounded-xl border border-gray-200 bg-gray-50 p-8">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="mb-4 font-semibold text-navy-800">
                  Instructor Qualifications
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    US Sailing Instructor Certification
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    First Aid & CPR Training
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    Background Check Verified
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    5+ Years Sailing Experience
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 font-semibold text-navy-800">
                  Want to Teach?
                </h3>
                <p className="mb-4 text-sm text-gray-600">
                  We&apos;re always looking for experienced sailors to join our
                  instructor team. Share your knowledge and help grow our
                  sailing community.
                </p>
                <a
                  href="mailto:education@astoriayachtclub.org"
                  className="inline-flex items-center gap-2 text-sm font-medium text-ocean-600 hover:text-ocean-700"
                >
                  Contact Education Committee
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-ocean-500 py-12">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Anchor className="mx-auto mb-4 h-10 w-10 text-white/80" />
            <h2 className="mb-4 text-2xl font-bold text-white">
              Ready to Start Learning?
            </h2>
            <p className="mb-6 text-white/90">
              Whether you&apos;re a complete beginner or looking to refine your
              skills, we have a course for you. Members receive discounted rates
              on all courses.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="primary"
                className="bg-white text-ocean-600 hover:bg-gray-100"
                asChild
              >
                <a href="mailto:education@astoriayachtclub.org">
                  Register for a Course
                </a>
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <Link href="/membership/join">Become a Member</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

interface Course {
  id: string;
  title: string;
  description: string;
  dates: string;
  time: string;
  duration: string;
  level: string;
  instructor: string;
  price: string;
  spotsLeft: number;
}

function CourseCard({ course }: { course: Course }) {
  return (
    <div className="flex flex-col rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="flex-1 p-6">
        <div className="mb-3 flex items-center justify-between">
          <span
            className={`rounded-full px-2.5 py-1 text-xs font-medium ${
              course.level === "Beginner"
                ? "bg-green-100 text-green-700"
                : course.level === "Intermediate"
                  ? "bg-ocean-100 text-ocean-700"
                  : "bg-purple-100 text-purple-700"
            }`}
          >
            {course.level}
          </span>
          <span className="text-lg font-bold text-navy-800">
            {course.price}
          </span>
        </div>

        <h3 className="mb-2 text-lg font-semibold text-navy-800">
          {course.title}
        </h3>
        <p className="mb-4 text-sm text-gray-600">{course.description}</p>

        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-gray-400" />
            {course.dates}
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-gray-400" />
            {course.time} ({course.duration})
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-gray-400" />
            Instructor: {course.instructor}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100 p-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">
            {course.spotsLeft} spots left
          </span>
          <Button variant="primary" size="sm" asChild>
            <a
              href={`mailto:education@astoriayachtclub.org?subject=Register: ${course.title}`}
            >
              Register
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
