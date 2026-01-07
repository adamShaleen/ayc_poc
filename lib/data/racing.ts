// Racing data and types

export interface RaceResult {
  position: number;
  boat: string;
  skipper: string;
  class: string;
  finishTime?: string;
  correctedTime?: string;
  points: number;
}

export interface RaceSeries {
  id: string;
  name: string;
  type: "sailboat" | "rc-laser";
  races: number;
  startDate: Date;
  endDate: Date;
  description: string;
}

export interface ScheduledRace {
  id: string;
  seriesId: string;
  name: string;
  date: Date;
  time: string;
  location: string;
  notes?: string;
  completed: boolean;
}

export interface CrewListing {
  id: string;
  type: "captain" | "crew";
  name: string;
  boatName?: string;
  boatType?: string;
  experience: "beginner" | "intermediate" | "advanced";
  availability: string[];
  description: string;
  lookingFor?: string;
  email: string;
  createdAt: Date;
}

export interface RaceDocument {
  id: string;
  title: string;
  type: "notice" | "instructions" | "results" | "other";
  seriesId?: string;
  url: string;
  date: Date;
}

// Mock race series data
export const raceSeries: RaceSeries[] = [
  {
    id: "spring-2024",
    name: "Spring Series 2024",
    type: "sailboat",
    races: 6,
    startDate: new Date(2024, 3, 6),
    endDate: new Date(2024, 5, 8),
    description:
      "Six-race series held on Saturday afternoons. PHRF handicap scoring.",
  },
  {
    id: "summer-2024",
    name: "Summer Series 2024",
    type: "sailboat",
    races: 8,
    startDate: new Date(2024, 5, 15),
    endDate: new Date(2024, 7, 31),
    description:
      "Our longest series of the year. Mix of weekend and weeknight races.",
  },
  {
    id: "wednesday-night",
    name: "Wednesday Night Racing",
    type: "sailboat",
    races: 20,
    startDate: new Date(2024, 4, 1),
    endDate: new Date(2024, 8, 25),
    description:
      "Weekly beer can races. Informal, fun racing open to all skill levels. No registration required.",
  },
  {
    id: "rc-laser-spring",
    name: "RC Laser Spring Series",
    type: "rc-laser",
    races: 8,
    startDate: new Date(2024, 2, 1),
    endDate: new Date(2024, 4, 31),
    description:
      "Radio-controlled Laser class racing. Perfect for when the weather keeps full-size boats on the dock!",
  },
];

// Helper to create dates
const getDate = (month: number, day: number, year: number = 2024) => {
  return new Date(year, month - 1, day);
};

// Mock race schedule
export const raceSchedule: ScheduledRace[] = [
  // Spring Series
  {
    id: "ss-1",
    seriesId: "spring-2024",
    name: "Spring Series Race #1",
    date: getDate(4, 6),
    time: "10:00 AM",
    location: "West End Course",
    completed: true,
  },
  {
    id: "ss-2",
    seriesId: "spring-2024",
    name: "Spring Series Race #2",
    date: getDate(4, 13),
    time: "10:00 AM",
    location: "West End Course",
    completed: true,
  },
  {
    id: "ss-3",
    seriesId: "spring-2024",
    name: "Spring Series Race #3",
    date: getDate(4, 20),
    time: "10:00 AM",
    location: "West End Course",
    completed: false,
  },
  {
    id: "ss-4",
    seriesId: "spring-2024",
    name: "Spring Series Race #4",
    date: getDate(4, 27),
    time: "10:00 AM",
    location: "West End Course",
    completed: false,
  },
  {
    id: "ss-5",
    seriesId: "spring-2024",
    name: "Spring Series Race #5",
    date: getDate(5, 4),
    time: "10:00 AM",
    location: "West End Course",
    completed: false,
  },
  {
    id: "ss-6",
    seriesId: "spring-2024",
    name: "Spring Series Race #6",
    date: getDate(5, 8),
    time: "10:00 AM",
    location: "West End Course",
    notes: "Final race of series + awards",
    completed: false,
  },
  // RC Laser
  {
    id: "rc-1",
    seriesId: "rc-laser-spring",
    name: "RC Laser Race #1",
    date: getDate(3, 2),
    time: "10:00 AM",
    location: "AYC Dock",
    completed: true,
  },
  {
    id: "rc-2",
    seriesId: "rc-laser-spring",
    name: "RC Laser Race #2",
    date: getDate(3, 16),
    time: "10:00 AM",
    location: "AYC Dock",
    completed: true,
  },
  {
    id: "rc-3",
    seriesId: "rc-laser-spring",
    name: "RC Laser Race #3",
    date: getDate(4, 6),
    time: "10:00 AM",
    location: "AYC Dock",
    completed: false,
  },
];

// Mock race results for Spring Series Race #1
export const springSeriesResults: RaceResult[] = [
  {
    position: 1,
    boat: "Windward",
    skipper: "Mike Thompson",
    class: "PHRF-A",
    finishTime: "1:23:45",
    correctedTime: "1:15:22",
    points: 1,
  },
  {
    position: 2,
    boat: "Sea Spirit",
    skipper: "John Smith",
    class: "PHRF-A",
    finishTime: "1:25:12",
    correctedTime: "1:16:45",
    points: 2,
  },
  {
    position: 3,
    boat: "Columbia Star",
    skipper: "Sarah Chen",
    class: "PHRF-B",
    finishTime: "1:28:33",
    correctedTime: "1:17:10",
    points: 3,
  },
  {
    position: 4,
    boat: "Raven",
    skipper: "Bob Wilson",
    class: "PHRF-A",
    finishTime: "1:27:55",
    correctedTime: "1:18:22",
    points: 4,
  },
  {
    position: 5,
    boat: "Lucky Lady",
    skipper: "Tom Davis",
    class: "PHRF-B",
    finishTime: "1:32:11",
    correctedTime: "1:19:45",
    points: 5,
  },
  {
    position: 6,
    boat: "Zephyr",
    skipper: "Lisa Park",
    class: "PHRF-C",
    finishTime: "1:35:22",
    correctedTime: "1:20:15",
    points: 6,
  },
];

// Mock series standings
export const seriesStandings: RaceResult[] = [
  {
    position: 1,
    boat: "Windward",
    skipper: "Mike Thompson",
    class: "PHRF-A",
    points: 5,
  },
  {
    position: 2,
    boat: "Sea Spirit",
    skipper: "John Smith",
    class: "PHRF-A",
    points: 7,
  },
  {
    position: 3,
    boat: "Columbia Star",
    skipper: "Sarah Chen",
    class: "PHRF-B",
    points: 9,
  },
  {
    position: 4,
    boat: "Lucky Lady",
    skipper: "Tom Davis",
    class: "PHRF-B",
    points: 12,
  },
  {
    position: 5,
    boat: "Raven",
    skipper: "Bob Wilson",
    class: "PHRF-A",
    points: 14,
  },
];

// Mock crew listings
export const crewListings: CrewListing[] = [
  // Captains looking for crew
  {
    id: "captain-1",
    type: "captain",
    name: "Mike Thompson",
    boatName: "Windward",
    boatType: "Catalina 30",
    experience: "advanced",
    availability: ["wednesday-night", "weekends"],
    description:
      "Looking for experienced rail meat for Wednesday night racing. Also need crew for weekend regattas. Competitive but friendly atmosphere.",
    lookingFor:
      "Experienced crew, especially those comfortable with spinnaker work",
    email: "mike.t@email.com",
    createdAt: new Date(2024, 2, 15),
  },
  {
    id: "captain-2",
    type: "captain",
    name: "Sarah Chen",
    boatName: "Columbia Star",
    boatType: "J/24",
    experience: "advanced",
    availability: ["weekends"],
    description:
      "One-design racing on a J/24. We race the Spring and Summer series. Looking for consistent crew members who want to improve their skills.",
    lookingFor: "Crew with some racing experience, willing to learn",
    email: "sarah.c@email.com",
    createdAt: new Date(2024, 2, 20),
  },
  {
    id: "captain-3",
    type: "captain",
    name: "Tom & Linda Davis",
    boatName: "Lucky Lady",
    boatType: "Hunter 31",
    experience: "intermediate",
    availability: ["cruising", "weekends"],
    description:
      "We do some casual racing but mostly cruising on the Columbia and coast. Looking for crew to join us on weekend adventures and the occasional rally.",
    lookingFor: "Friendly folks who enjoy a relaxed pace",
    email: "davis.sailing@email.com",
    createdAt: new Date(2024, 3, 1),
  },
  {
    id: "captain-4",
    type: "captain",
    name: "Bob Wilson",
    boatName: "Raven",
    boatType: "Ranger 26",
    experience: "advanced",
    availability: ["wednesday-night"],
    description:
      "Wednesday night beer can racing. Fun, low-pressure environment. Great way to learn if you're new to racing.",
    lookingFor: "Anyone interested in learning to race",
    email: "bob.wilson@email.com",
    createdAt: new Date(2024, 3, 5),
  },

  // Crew looking for boats
  {
    id: "crew-1",
    type: "crew",
    name: "Alex Rivera",
    experience: "intermediate",
    availability: ["wednesday-night", "weekends"],
    description:
      "Sailed dinghies in college and looking to get back into it. Some keelboat experience but eager to learn more. Strong, athletic, and reliable.",
    email: "alex.r@email.com",
    createdAt: new Date(2024, 3, 10),
  },
  {
    id: "crew-2",
    type: "crew",
    name: "Jennifer Park",
    experience: "beginner",
    availability: ["weekends"],
    description:
      "New to sailing but very enthusiastic! I've taken the basic sailing course at the club and am looking for opportunities to get more time on the water.",
    email: "jen.park@email.com",
    createdAt: new Date(2024, 3, 12),
  },
  {
    id: "crew-3",
    type: "crew",
    name: "David & Maria Gonzalez",
    experience: "intermediate",
    availability: ["cruising", "weekends"],
    description:
      "Couple looking to join cruising rallies. We've done some sailing in the Caribbean and are interested in exploring the Columbia River and coast. Happy to help with provisioning and cooking!",
    email: "gonzalez.family@email.com",
    createdAt: new Date(2024, 3, 8),
  },
  {
    id: "crew-4",
    type: "crew",
    name: "Chris Taylor",
    experience: "advanced",
    availability: ["wednesday-night", "weekends"],
    description:
      "Experienced racer, recently moved to Astoria. Sailed Melges 24s and J/70s competitively on the East Coast. Looking for a regular racing gig.",
    email: "chris.t.sails@email.com",
    createdAt: new Date(2024, 3, 3),
  },
];

// Mock race documents
export const raceDocuments: RaceDocument[] = [
  {
    id: "doc-1",
    title: "2024 Spring Series Notice of Race",
    type: "notice",
    seriesId: "spring-2024",
    url: "/documents/spring-2024-nor.pdf",
    date: new Date(2024, 2, 1),
  },
  {
    id: "doc-2",
    title: "2024 Spring Series Sailing Instructions",
    type: "instructions",
    seriesId: "spring-2024",
    url: "/documents/spring-2024-si.pdf",
    date: new Date(2024, 2, 15),
  },
  {
    id: "doc-3",
    title: "Wednesday Night Racing Instructions",
    type: "instructions",
    seriesId: "wednesday-night",
    url: "/documents/wednesday-night-si.pdf",
    date: new Date(2024, 3, 1),
  },
  {
    id: "doc-4",
    title: "AYC PHRF Handicap List 2024",
    type: "other",
    url: "/documents/phrf-2024.pdf",
    date: new Date(2024, 0, 15),
  },
  {
    id: "doc-5",
    title: "RC Laser Class Rules",
    type: "other",
    seriesId: "rc-laser-spring",
    url: "/documents/rc-laser-rules.pdf",
    date: new Date(2024, 1, 1),
  },
];

// Experience level config
export const experienceLevels = {
  beginner: { label: "Beginner", color: "bg-green-100 text-green-800" },
  intermediate: {
    label: "Intermediate",
    color: "bg-ocean-100 text-ocean-800",
  },
  advanced: { label: "Advanced", color: "bg-purple-100 text-purple-800" },
};

// Availability options
export const availabilityOptions = [
  { value: "wednesday-night", label: "Wednesday Night Racing" },
  { value: "weekends", label: "Weekend Racing" },
  { value: "cruising", label: "Cruising/Rallies" },
];
