import { Metadata } from "next";
import { CalendarPage } from "@/components/templates";

export const metadata: Metadata = {
  title: "Event Calendar",
  description: "View all upcoming events at the Astoria Yacht Club.",
};

// Sample events data - in a real app, this would come from a CMS or database
const sampleEvents = [
  {
    id: "1",
    title: "Wednesday Night Racing",
    date: new Date(2025, 0, 8, 18, 0),
    location: "AYC Marina",
    description: "Weekly racing series. All skill levels welcome.",
    category: "racing" as const,
  },
  {
    id: "2",
    title: "New Member Orientation",
    date: new Date(2025, 0, 11, 10, 0),
    location: "AYC Clubhouse",
    description: "Welcome session for new and prospective members.",
    category: "social" as const,
  },
  {
    id: "3",
    title: "Winter Cruising Rally",
    date: new Date(2025, 0, 18, 9, 0),
    location: "Various",
    description: "Weekend cruise to partner marinas.",
    category: "cruising" as const,
  },
  {
    id: "4",
    title: "Navigation Safety Seminar",
    date: new Date(2025, 0, 22, 19, 0),
    location: "AYC Clubhouse",
    description: "Learn essential navigation and safety techniques.",
    category: "education" as const,
  },
  {
    id: "5",
    title: "Board Meeting",
    date: new Date(2025, 0, 25, 18, 30),
    location: "AYC Clubhouse",
    description: "Monthly board of directors meeting. Members welcome.",
    category: "meeting" as const,
  },
  {
    id: "6",
    title: "RC Laser Racing",
    date: new Date(2025, 0, 26, 13, 0),
    location: "AYC Marina",
    description: "Radio-controlled Laser sailboat racing.",
    category: "racing" as const,
  },
  {
    id: "7",
    title: "Monthly Potluck",
    date: new Date(2025, 0, 31, 18, 0),
    location: "AYC Clubhouse",
    description: "Bring a dish to share! Great way to meet other members.",
    category: "social" as const,
  },
];

export default function CalendarPageRoute() {
  return (
    <CalendarPage
      title="Event Calendar"
      description="View all upcoming races, social events, and club activities"
      breadcrumbs={[
        { label: "Events", href: "/events" },
        { label: "Calendar" },
      ]}
      events={sampleEvents}
    />
  );
}
