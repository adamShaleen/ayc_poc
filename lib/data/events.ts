// Event types and mock data

export type EventType = "racing" | "cruising" | "social" | "meeting";

export interface ClubEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  type: EventType;
  description: string;
  location?: string;
  registrationUrl?: string;
  registrationRequired?: boolean;
  recurrence?: string;
}

export const eventTypeConfig: Record<
  EventType,
  { label: string; color: string; bgColor: string; borderColor: string }
> = {
  racing: {
    label: "Racing",
    color: "text-ocean-700",
    bgColor: "bg-ocean-100",
    borderColor: "border-ocean-500",
  },
  cruising: {
    label: "Cruising/Rally",
    color: "text-green-700",
    bgColor: "bg-green-100",
    borderColor: "border-green-500",
  },
  social: {
    label: "Social Event",
    color: "text-brass-700",
    bgColor: "bg-brass-100",
    borderColor: "border-brass-500",
  },
  meeting: {
    label: "Board Meeting",
    color: "text-gray-700",
    bgColor: "bg-gray-100",
    borderColor: "border-gray-500",
  },
};

// Helper to create dates relative to today
const today = new Date();
const getDate = (
  daysOffset: number,
  hour: number = 10,
  minutes: number = 0
) => {
  const date = new Date(today);
  date.setDate(date.getDate() + daysOffset);
  date.setHours(hour, minutes, 0, 0);
  return date;
};

// Mock events data
export const mockEvents: ClubEvent[] = [
  // Racing Events
  {
    id: "race-1",
    title: "Wednesday Night Racing",
    start: getDate(3, 18, 0),
    end: getDate(3, 20, 30),
    type: "racing",
    description:
      "Weekly beer can races open to all members. Skipper's meeting at 5:30 PM, first warning at 6:00 PM. All boats welcome!",
    location: "AYC Starting Line",
    recurrence: "Weekly on Wednesdays",
  },
  {
    id: "race-2",
    title: "Wednesday Night Racing",
    start: getDate(10, 18, 0),
    end: getDate(10, 20, 30),
    type: "racing",
    description:
      "Weekly beer can races open to all members. Skipper's meeting at 5:30 PM, first warning at 6:00 PM. All boats welcome!",
    location: "AYC Starting Line",
    recurrence: "Weekly on Wednesdays",
  },
  {
    id: "race-3",
    title: "Spring Series Race #3",
    start: getDate(6, 10, 0),
    end: getDate(6, 15, 0),
    type: "racing",
    description:
      "Third race of the Spring Series. PHRF and one-design classes. Registration required by Thursday prior.",
    location: "Columbia River - West End Course",
    registrationRequired: true,
    registrationUrl: "/racing/register",
  },
  {
    id: "race-4",
    title: "RC Laser Racing",
    start: getDate(7, 10, 0),
    end: getDate(7, 12, 0),
    type: "racing",
    description:
      "Radio-controlled laser sailing. Bring your own boat or borrow a club boat. Great for all skill levels!",
    location: "AYC Dock",
  },
  {
    id: "race-5",
    title: "Memorial Day Regatta",
    start: getDate(21, 9, 0),
    end: getDate(21, 17, 0),
    type: "racing",
    description:
      "Annual Memorial Day regatta featuring multiple classes. BBQ and awards ceremony to follow. One of our biggest events of the year!",
    location: "Columbia River",
    registrationRequired: true,
    registrationUrl: "/racing/register",
  },
  {
    id: "race-6",
    title: "Wednesday Night Racing",
    start: getDate(17, 18, 0),
    end: getDate(17, 20, 30),
    type: "racing",
    description:
      "Weekly beer can races open to all members. Skipper's meeting at 5:30 PM, first warning at 6:00 PM. All boats welcome!",
    location: "AYC Starting Line",
    recurrence: "Weekly on Wednesdays",
  },

  // Cruising Events
  {
    id: "cruise-1",
    title: "Sunset Cruise Rally",
    start: getDate(5, 17, 0),
    end: getDate(5, 21, 0),
    type: "cruising",
    description:
      "Join fellow members for a leisurely sunset cruise on the Columbia. Meet at the dock at 5 PM. Dinner at anchor.",
    location: "Departing AYC Dock",
    registrationRequired: true,
    registrationUrl: "/events/register",
  },
  {
    id: "cruise-2",
    title: "Paddle & Picnic",
    start: getDate(8, 11, 0),
    end: getDate(8, 15, 0),
    type: "cruising",
    description:
      "Kayaks, SUPs, and small boats welcome! Paddle to Cathlamet and enjoy a group picnic. All skill levels welcome.",
    location: "Meet at AYC Dock",
  },
  {
    id: "cruise-3",
    title: "Weekend Cruise to Ilwaco",
    start: getDate(14, 8, 0),
    end: getDate(16, 17, 0),
    type: "cruising",
    description:
      "Two-night cruise to Ilwaco with stops for sightseeing and group dinners. Great opportunity for newer cruisers to join experienced skippers.",
    location: "Ilwaco Marina",
    registrationRequired: true,
    registrationUrl: "/events/register",
  },

  // Social Events
  {
    id: "social-1",
    title: "First Friday Social",
    start: getDate(2, 17, 30),
    end: getDate(2, 20, 0),
    type: "social",
    description:
      "Monthly social gathering at the clubhouse. Appetizers and drinks provided. Bring a dish to share if you'd like!",
    location: "AYC Clubhouse",
  },
  {
    id: "social-2",
    title: "New Member Welcome BBQ",
    start: getDate(9, 16, 0),
    end: getDate(9, 19, 0),
    type: "social",
    description:
      "Special BBQ to welcome our newest members. Meet the board, learn about club activities, and connect with fellow sailors.",
    location: "AYC Clubhouse & Dock",
  },
  {
    id: "social-3",
    title: "Summer Solstice Party",
    start: getDate(25, 18, 0),
    end: getDate(25, 22, 0),
    type: "social",
    description:
      "Celebrate the longest day of the year with food, music, and sunset views from the dock. Family friendly event!",
    location: "AYC Clubhouse",
  },
  {
    id: "social-4",
    title: "Captain's Dinner",
    start: getDate(30, 18, 0),
    end: getDate(30, 21, 0),
    type: "social",
    description:
      "Formal dinner honoring our racing skippers. Catered meal with awards presentation. RSVP required.",
    location: "AYC Clubhouse",
    registrationRequired: true,
    registrationUrl: "/events/register",
  },

  // Board Meetings
  {
    id: "meeting-1",
    title: "Board of Directors Meeting",
    start: getDate(4, 18, 30),
    end: getDate(4, 20, 0),
    type: "meeting",
    description:
      "Monthly board meeting. All members welcome to attend. Agenda posted one week prior.",
    location: "AYC Clubhouse",
  },
  {
    id: "meeting-2",
    title: "Racing Committee Meeting",
    start: getDate(11, 18, 0),
    end: getDate(11, 19, 30),
    type: "meeting",
    description:
      "Planning meeting for upcoming racing season. Input from all racers welcome.",
    location: "AYC Clubhouse",
  },
  {
    id: "meeting-3",
    title: "Board of Directors Meeting",
    start: getDate(32, 18, 30),
    end: getDate(32, 20, 0),
    type: "meeting",
    description:
      "Monthly board meeting. All members welcome to attend. Agenda posted one week prior.",
    location: "AYC Clubhouse",
  },

  // Past events (negative offset)
  {
    id: "past-1",
    title: "Opening Day Ceremony",
    start: getDate(-10, 10, 0),
    end: getDate(-10, 14, 0),
    type: "social",
    description:
      "Annual opening day celebration with boat parade and blessing of the fleet.",
    location: "AYC Dock",
  },
  {
    id: "past-2",
    title: "Spring Series Race #1",
    start: getDate(-14, 10, 0),
    end: getDate(-14, 15, 0),
    type: "racing",
    description: "First race of the Spring Series.",
    location: "Columbia River",
  },
  {
    id: "past-3",
    title: "Spring Series Race #2",
    start: getDate(-7, 10, 0),
    end: getDate(-7, 15, 0),
    type: "racing",
    description: "Second race of the Spring Series.",
    location: "Columbia River",
  },
];

// Utility to generate .ics file content
export function generateICSFile(event: ClubEvent): string {
  const formatDate = (date: Date): string => {
    return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  };

  const escapeText = (text: string): string => {
    return text.replace(/[,;\\]/g, "\\$&").replace(/\n/g, "\\n");
  };

  return `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Astoria Yacht Club//Events//EN
BEGIN:VEVENT
UID:${event.id}@astoriayachtclub.org
DTSTART:${formatDate(event.start)}
DTEND:${formatDate(event.end)}
SUMMARY:${escapeText(event.title)}
DESCRIPTION:${escapeText(event.description)}
LOCATION:${event.location ? escapeText(event.location) : ""}
END:VEVENT
END:VCALENDAR`;
}

// Filter events by type
export function filterEventsByType(
  events: ClubEvent[],
  types: EventType[]
): ClubEvent[] {
  if (types.length === 0) return events;
  return events.filter((event) => types.includes(event.type));
}

// Get upcoming events
export function getUpcomingEvents(events: ClubEvent[]): ClubEvent[] {
  const now = new Date();
  return events
    .filter((event) => event.start >= now)
    .sort((a, b) => a.start.getTime() - b.start.getTime());
}

// Get past events
export function getPastEvents(events: ClubEvent[]): ClubEvent[] {
  const now = new Date();
  return events
    .filter((event) => event.start < now)
    .sort((a, b) => b.start.getTime() - a.start.getTime());
}
