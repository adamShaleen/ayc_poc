// Club data and types

export interface TimelineEvent {
  year: number;
  title: string;
  description: string;
}

export interface BoardMember {
  id: string;
  name: string;
  title: string;
  photo: string;
  bio: string;
  email: string;
  yearsOnBoard: number;
}

export interface ClubStats {
  members: number;
  yearsActive: number;
  racesPerYear: number;
  cruisesPerYear: number;
  reciprocalClubs: number;
}

export const clubStats: ClubStats = {
  members: 150,
  yearsActive: 94,
  racesPerYear: 45,
  cruisesPerYear: 12,
  reciprocalClubs: 25,
};

export const timelineEvents: TimelineEvent[] = [
  {
    year: 1931,
    title: "Club Founded",
    description:
      "A group of sailing enthusiasts establish the Astoria Yacht Club on the banks of the Columbia River.",
  },
  {
    year: 1945,
    title: "Post-War Revival",
    description:
      "After WWII, the club experiences renewed growth with returning veterans joining the sailing community.",
  },
  {
    year: 1958,
    title: "First Clubhouse",
    description:
      "The club builds its first permanent clubhouse on the Astoria waterfront.",
  },
  {
    year: 1972,
    title: "Racing Program Established",
    description:
      "Formal racing program begins with Wednesday night series and weekend regattas.",
  },
  {
    year: 1985,
    title: "Cruising Fleet Formed",
    description:
      "The cruising fleet is formally organized, beginning annual rallies and group cruises.",
  },
  {
    year: 1995,
    title: "Junior Sailing Program",
    description:
      "Launch of youth sailing program to introduce the next generation to sailing.",
  },
  {
    year: 2010,
    title: "Clubhouse Renovation",
    description:
      "Major renovation of clubhouse facilities including new docks and gathering spaces.",
  },
  {
    year: 2020,
    title: "RC Laser Fleet",
    description:
      "Introduction of radio-controlled laser sailing, expanding accessibility to all ages and abilities.",
  },
  {
    year: 2024,
    title: "Digital Transformation",
    description:
      "Launch of new website and online member services to better serve our community.",
  },
];

export const boardMembers: BoardMember[] = [
  {
    id: "commodore",
    name: "James Richardson",
    title: "Commodore",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    bio: "James has been an active sailor for over 30 years and a club member since 2005. He previously served as Vice Commodore and Race Committee Chair. When not on the water, he works as a marine engineer and is passionate about introducing young people to sailing.",
    email: "commodore@astoriayachtclub.org",
    yearsOnBoard: 6,
  },
  {
    id: "vice-commodore",
    name: "Sarah Martinez",
    title: "Vice Commodore",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    bio: "Sarah joined AYC in 2010 and has been racing competitively ever since. She leads our cruising program and has organized numerous successful rallies. She's a certified sailing instructor and helps run our member education programs.",
    email: "vice-commodore@astoriayachtclub.org",
    yearsOnBoard: 4,
  },
  {
    id: "rear-commodore",
    name: "Michael Chen",
    title: "Rear Commodore",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    bio: "Michael is a lifelong sailor who grew up racing dinghies on the Columbia River. He manages our racing programs and serves as principal race officer for major regattas. He's also our liaison with regional sailing associations.",
    email: "rear-commodore@astoriayachtclub.org",
    yearsOnBoard: 3,
  },
  {
    id: "secretary",
    name: "Patricia Williams",
    title: "Secretary",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    bio: "Patricia brings her organizational expertise to the club after retiring from a career in education. She handles all club communications, maintains records, and produces our monthly newsletter. She's been sailing for 15 years.",
    email: "secretary@astoriayachtclub.org",
    yearsOnBoard: 2,
  },
  {
    id: "treasurer",
    name: "Robert Thompson",
    title: "Treasurer",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    bio: "Robert is a CPA who volunteers his financial expertise to keep the club running smoothly. He manages our budget, membership dues, and financial planning. He owns a Catalina 30 and enjoys weekend cruising.",
    email: "treasurer@astoriayachtclub.org",
    yearsOnBoard: 5,
  },
  {
    id: "race-chair",
    name: "David Nakamura",
    title: "Race Committee Chair",
    photo: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400",
    bio: "David coordinates all racing activities, from weekly beer can races to major regattas. A competitive sailor himself, he ensures fair and exciting racing for all participants. He's US Sailing certified as a race officer.",
    email: "racing@astoriayachtclub.org",
    yearsOnBoard: 3,
  },
  {
    id: "cruise-chair",
    name: "Linda Foster",
    title: "Cruising Chair",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400",
    bio: "Linda and her husband have cruised extensively throughout the Pacific Northwest. She organizes club cruises, manages our reciprocity program, and helps new cruisers plan their adventures.",
    email: "cruising@astoriayachtclub.org",
    yearsOnBoard: 4,
  },
  {
    id: "membership-chair",
    name: "Thomas Anderson",
    title: "Membership Chair",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400",
    bio: "Thomas welcomes new members and helps them get connected with club activities. He organizes new member orientations and our mentorship program pairing experienced sailors with newcomers.",
    email: "membership@astoriayachtclub.org",
    yearsOnBoard: 2,
  },
];

export const boardMeetings = [
  { date: "January 15, 2025", location: "Clubhouse" },
  { date: "February 19, 2025", location: "Clubhouse" },
  { date: "March 19, 2025", location: "Clubhouse" },
  { date: "April 16, 2025", location: "Clubhouse" },
  { date: "May 21, 2025", location: "Clubhouse" },
  { date: "June 18, 2025", location: "Clubhouse" },
];

export interface ReciprocityClub {
  id: string;
  name: string;
  location: string;
  state: string;
  website?: string;
  phone?: string;
  coordinates: { lat: number; lng: number };
  amenities: string[];
  notes?: string;
}

export const reciprocityClubs: ReciprocityClub[] = [
  {
    id: "coyc",
    name: "Columbia River Yacht Club",
    location: "Portland, OR",
    state: "OR",
    website: "https://www.cryc.org",
    phone: "(503) 555-0101",
    coordinates: { lat: 45.5874, lng: -122.7645 },
    amenities: ["Guest slips", "Showers", "Clubhouse", "Restaurant"],
    notes: "Call ahead for guest slip availability",
  },
  {
    id: "royc",
    name: "Rose City Yacht Club",
    location: "Portland, OR",
    state: "OR",
    website: "https://www.rosecityyc.org",
    phone: "(503) 555-0102",
    coordinates: { lat: 45.5712, lng: -122.7234 },
    amenities: ["Guest slips", "Showers", "Clubhouse"],
  },
  {
    id: "pvyc",
    name: "Portland Yacht Club",
    location: "Portland, OR",
    state: "OR",
    website: "https://www.portlandyc.com",
    phone: "(503) 555-0103",
    coordinates: { lat: 45.5521, lng: -122.6823 },
    amenities: ["Guest slips", "Showers", "Clubhouse", "Pool"],
  },
  {
    id: "wsyc",
    name: "Willamette Sailing Club",
    location: "Portland, OR",
    state: "OR",
    coordinates: { lat: 45.4934, lng: -122.6712 },
    amenities: ["Guest moorage", "Showers"],
  },
  {
    id: "lwyc",
    name: "Longview Yacht Club",
    location: "Longview, WA",
    state: "WA",
    phone: "(360) 555-0104",
    coordinates: { lat: 46.1382, lng: -122.9376 },
    amenities: ["Guest slips", "Clubhouse"],
  },
  {
    id: "tcyc",
    name: "Tacoma Yacht Club",
    location: "Tacoma, WA",
    state: "WA",
    website: "https://www.tacomayc.com",
    coordinates: { lat: 47.2634, lng: -122.4567 },
    amenities: ["Guest slips", "Showers", "Clubhouse", "Restaurant", "Pool"],
    notes: "Premier reciprocity destination in Puget Sound",
  },
  {
    id: "siyc",
    name: "Seattle Yacht Club",
    location: "Seattle, WA",
    state: "WA",
    website: "https://www.seattleyachtclub.org",
    coordinates: { lat: 47.6454, lng: -122.3012 },
    amenities: [
      "Guest slips",
      "Showers",
      "Clubhouse",
      "Restaurant",
      "Outstation",
    ],
  },
  {
    id: "cwyc",
    name: "Corinthian Yacht Club of Seattle",
    location: "Seattle, WA",
    state: "WA",
    coordinates: { lat: 47.6512, lng: -122.4089 },
    amenities: ["Guest moorage", "Clubhouse"],
  },
  {
    id: "ebyc",
    name: "Edmonds Yacht Club",
    location: "Edmonds, WA",
    state: "WA",
    phone: "(425) 555-0105",
    coordinates: { lat: 47.8107, lng: -122.3876 },
    amenities: ["Guest slips", "Showers", "Clubhouse"],
  },
  {
    id: "bhyc",
    name: "Bellingham Yacht Club",
    location: "Bellingham, WA",
    state: "WA",
    website: "https://www.bellinghamyachtclub.org",
    coordinates: { lat: 48.7519, lng: -122.4787 },
    amenities: ["Guest slips", "Showers", "Clubhouse", "Restaurant"],
    notes: "Gateway to San Juan Islands",
  },
  {
    id: "sjyc",
    name: "San Juan Island Yacht Club",
    location: "Friday Harbor, WA",
    state: "WA",
    coordinates: { lat: 48.5343, lng: -123.0167 },
    amenities: ["Guest moorage", "Clubhouse"],
    notes: "Limited availability in summer",
  },
  {
    id: "rvyc",
    name: "Royal Vancouver Yacht Club",
    location: "Vancouver, BC",
    state: "BC",
    website: "https://www.royalvan.com",
    coordinates: { lat: 49.2945, lng: -123.1567 },
    amenities: ["Guest slips", "Showers", "Clubhouse", "Restaurant", "Marina"],
    notes: "International reciprocity - bring passport",
  },
  {
    id: "evyc",
    name: "Everett Yacht Club",
    location: "Everett, WA",
    state: "WA",
    phone: "(425) 555-0106",
    coordinates: { lat: 47.9812, lng: -122.2234 },
    amenities: ["Guest slips", "Showers", "Clubhouse"],
  },
  {
    id: "opyc",
    name: "Olympia Yacht Club",
    location: "Olympia, WA",
    state: "WA",
    website: "https://www.olympiayachtclub.org",
    coordinates: { lat: 47.0534, lng: -122.9012 },
    amenities: ["Guest slips", "Showers", "Clubhouse", "Restaurant"],
  },
  {
    id: "giyc",
    name: "Gig Harbor Yacht Club",
    location: "Gig Harbor, WA",
    state: "WA",
    coordinates: { lat: 47.3312, lng: -122.5823 },
    amenities: ["Guest moorage", "Clubhouse"],
  },
  {
    id: "sbyc",
    name: "Santa Barbara Yacht Club",
    location: "Santa Barbara, CA",
    state: "CA",
    website: "https://www.sbyc.org",
    coordinates: { lat: 34.4012, lng: -119.6856 },
    amenities: ["Guest slips", "Showers", "Clubhouse", "Restaurant", "Pool"],
    notes: "Popular winter cruising destination",
  },
  {
    id: "sdyc",
    name: "San Diego Yacht Club",
    location: "San Diego, CA",
    state: "CA",
    website: "https://www.sdyc.org",
    coordinates: { lat: 32.7234, lng: -117.2312 },
    amenities: ["Guest slips", "Showers", "Clubhouse", "Restaurant", "Pool"],
    notes: "America's Cup history",
  },
  {
    id: "sfyc",
    name: "San Francisco Yacht Club",
    location: "Belvedere, CA",
    state: "CA",
    website: "https://www.sfyc.org",
    coordinates: { lat: 37.8723, lng: -122.4645 },
    amenities: ["Guest slips", "Showers", "Clubhouse", "Restaurant"],
  },
  {
    id: "rcyc",
    name: "Richmond Yacht Club",
    location: "Richmond, CA",
    state: "CA",
    coordinates: { lat: 37.9123, lng: -122.3512 },
    amenities: ["Guest slips", "Showers", "Clubhouse"],
  },
  {
    id: "hiyc",
    name: "Hawaii Yacht Club",
    location: "Honolulu, HI",
    state: "HI",
    website: "https://www.hawaiiyachtclub.org",
    coordinates: { lat: 21.2867, lng: -157.8456 },
    amenities: ["Guest slips", "Showers", "Clubhouse", "Restaurant"],
    notes: "Pacific crossing destination",
  },
];

export function filterReciprocityClubs(
  clubs: ReciprocityClub[],
  states: string[]
): ReciprocityClub[] {
  if (states.length === 0) return clubs;
  return clubs.filter((club) => states.includes(club.state));
}

export function searchReciprocityClubs(
  clubs: ReciprocityClub[],
  query: string
): ReciprocityClub[] {
  if (!query.trim()) return clubs;
  const lowerQuery = query.toLowerCase();
  return clubs.filter(
    (club) =>
      club.name.toLowerCase().includes(lowerQuery) ||
      club.location.toLowerCase().includes(lowerQuery)
  );
}

export interface ResourceItem {
  title: string;
  description: string;
  href: string;
  type: "page" | "pdf" | "external";
}

export interface ResourceCategory {
  id: string;
  title: string;
  icon: string;
  items: ResourceItem[];
}

export const resourceCategories: ResourceCategory[] = [
  {
    id: "new-member",
    title: "New Member Resources",
    icon: "Users",
    items: [
      {
        title: "Welcome Guide",
        description: "Everything you need to know about getting started at AYC",
        href: "/resources/welcome-guide",
        type: "page",
      },
      {
        title: "Member Handbook",
        description:
          "Complete guide to club policies, facilities, and programs",
        href: "/documents/member-handbook.pdf",
        type: "pdf",
      },
      {
        title: "Mentorship Program",
        description:
          "Connect with experienced sailors to accelerate your learning",
        href: "/racing/crew",
        type: "page",
      },
      {
        title: "Club Tour Request",
        description: "Schedule a tour of our facilities",
        href: "/membership/apply",
        type: "page",
      },
    ],
  },
  {
    id: "safety",
    title: "Safety & Weather Resources",
    icon: "Shield",
    items: [
      {
        title: "NOAA Marine Forecast",
        description:
          "Current weather and marine conditions for the Columbia River",
        href: "https://marine.weather.gov/MapClick.php?lat=46.1879&lon=-123.8313",
        type: "external",
      },
      {
        title: "Coast Guard Astoria",
        description: "US Coast Guard Sector Columbia River",
        href: "https://www.atlanticarea.uscg.mil/Our-Organization/District-13/Units/Sector-Columbia-River/",
        type: "external",
      },
      {
        title: "Bar Conditions",
        description: "Columbia River Bar real-time conditions and webcams",
        href: "https://www.wrh.noaa.gov/pqr/marine/",
        type: "external",
      },
      {
        title: "VHF Radio Guide",
        description: "Marine VHF channels and usage for our area",
        href: "/documents/vhf-guide.pdf",
        type: "pdf",
      },
      {
        title: "Float Plan Template",
        description: "Leave a float plan for safety",
        href: "/documents/float-plan.pdf",
        type: "pdf",
      },
    ],
  },
  {
    id: "columbia-river",
    title: "Columbia River Information",
    icon: "Waves",
    items: [
      {
        title: "River Charts & Navigation",
        description: "NOAA charts and navigation resources",
        href: "https://www.charts.noaa.gov/OnLineViewer/PacificCoastViewerTable.shtml",
        type: "external",
      },
      {
        title: "Tide Tables",
        description: "NOAA tide predictions for Astoria",
        href: "https://tidesandcurrents.noaa.gov/stationhome.html?id=9439040",
        type: "external",
      },
      {
        title: "River Levels & Flow",
        description: "US Army Corps of Engineers river data",
        href: "https://www.nwd-wc.usace.army.mil/dd/common/dataquery/www/",
        type: "external",
      },
      {
        title: "Anchorages Guide",
        description: "Popular anchorages on the lower Columbia",
        href: "/documents/anchorages-guide.pdf",
        type: "pdf",
      },
    ],
  },
  {
    id: "education",
    title: "Educational Materials",
    icon: "GraduationCap",
    items: [
      {
        title: "Learn to Sail Resources",
        description: "US Sailing and ASA certification information",
        href: "https://www.ussailing.org/education/adult/",
        type: "external",
      },
      {
        title: "Racing Rules of Sailing",
        description: "Current World Sailing racing rules",
        href: "https://www.sailing.org/inside-world-sailing/rules-regulations/racing-rules-of-sailing/",
        type: "external",
      },
      {
        title: "Racing Tactics Videos",
        description: "Video library of racing tactics and strategies",
        href: "/resources/racing-videos",
        type: "page",
      },
      {
        title: "Knot Tying Guide",
        description: "Essential sailing knots illustrated guide",
        href: "/documents/knots-guide.pdf",
        type: "pdf",
      },
    ],
  },
  {
    id: "documents",
    title: "Club Documents",
    icon: "FileText",
    items: [
      {
        title: "Club Bylaws",
        description: "Official AYC bylaws and governance",
        href: "/documents/bylaws.pdf",
        type: "pdf",
      },
      {
        title: "Racing Instructions",
        description: "Current season sailing instructions",
        href: "/documents/sailing-instructions.pdf",
        type: "pdf",
      },
      {
        title: "Club Policies",
        description: "Facility usage, safety, and conduct policies",
        href: "/documents/policies.pdf",
        type: "pdf",
      },
      {
        title: "Meeting Minutes",
        description: "Board and general meeting minutes archive",
        href: "/about/board#minutes",
        type: "page",
      },
    ],
  },
];
