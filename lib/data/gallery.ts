// Gallery data and types

export type PhotoAlbum =
  | "racing"
  | "cruising"
  | "social"
  | "clubhouse"
  | "historical";

export interface Photo {
  id: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  title: string;
  caption?: string;
  album: PhotoAlbum;
  date: Date;
  photographer?: string;
}

export const albumConfig: Record<
  PhotoAlbum,
  { label: string; description: string }
> = {
  racing: {
    label: "Racing",
    description: "Action shots from our racing programs",
  },
  cruising: {
    label: "Cruising & Rallies",
    description: "Adventures on the water",
  },
  social: {
    label: "Social Events",
    description: "Club gatherings and celebrations",
  },
  clubhouse: {
    label: "Clubhouse",
    description: "Our home on the waterfront",
  },
  historical: {
    label: "Historical Photos",
    description: "AYC through the years since 1931",
  },
};

// Using Unsplash images with sailing/nautical themes
// These are verified working Unsplash URLs
export const mockPhotos: Photo[] = [
  // Racing Photos
  {
    id: "racing-1",
    src: "https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=1200",
    width: 1200,
    height: 800,
    alt: "Sailboats racing on open water",
    title: "Wednesday Night Racing",
    caption:
      "Boats jockey for position at the start line during our weekly beer can races.",
    album: "racing",
    date: new Date(2024, 3, 10),
    photographer: "Mike Thompson",
  },
  {
    id: "racing-2",
    src: "https://images.unsplash.com/photo-1534854638093-bada1813ca19?w=1200",
    width: 1200,
    height: 1600,
    alt: "Yacht sailing in heavy wind",
    title: "Spring Series Race #2",
    caption: "Columbia Star heeling hard in the spring breeze.",
    album: "racing",
    date: new Date(2024, 3, 13),
    photographer: "Sarah Chen",
  },
  {
    id: "racing-3",
    src: "https://images.unsplash.com/photo-1500930287596-c1ecaa373bb2?w=1200",
    width: 1200,
    height: 800,
    alt: "Fleet of sailboats racing",
    title: "Memorial Day Regatta Start",
    caption:
      "The fleet heads upwind at the start of our annual Memorial Day Regatta.",
    album: "racing",
    date: new Date(2023, 4, 27),
  },
  {
    id: "racing-4",
    src: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=1200",
    width: 1200,
    height: 900,
    alt: "Sailboat crew in action",
    title: "Crew Work",
    caption: "The crew of Windward executes a perfect jibe.",
    album: "racing",
    date: new Date(2024, 2, 15),
  },
  {
    id: "racing-5",
    src: "https://images.unsplash.com/photo-1559825481-12a05cc00344?w=1200",
    width: 1200,
    height: 800,
    alt: "Sailboat at sunset during race",
    title: "Golden Hour Racing",
    caption: "Racing into the sunset during a long summer evening.",
    album: "racing",
    date: new Date(2023, 6, 18),
  },
  {
    id: "racing-6",
    src: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=1200",
    width: 1600,
    height: 1200,
    alt: "Racing marks and boats",
    title: "Rounding the Mark",
    caption: "Tight racing at the windward mark.",
    album: "racing",
    date: new Date(2024, 3, 20),
  },

  // Cruising Photos
  {
    id: "cruising-1",
    src: "https://images.unsplash.com/photo-1500514966906-fe245eea9344?w=1200",
    width: 1200,
    height: 800,
    alt: "Yacht anchored in calm bay",
    title: "Raft-Up at Cathlamet",
    caption: "Club boats gather for a peaceful evening on the water.",
    album: "cruising",
    date: new Date(2023, 7, 5),
  },
  {
    id: "cruising-2",
    src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200",
    width: 1200,
    height: 1600,
    alt: "Sailboat at anchor with mountains",
    title: "Columbia River Gorge Cruise",
    caption: "Sea Spirit anchored with the Gorge as a backdrop.",
    album: "cruising",
    date: new Date(2023, 8, 12),
    photographer: "Tom Davis",
  },
  {
    id: "cruising-3",
    src: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1200",
    width: 1200,
    height: 800,
    alt: "Sunset sailing",
    title: "Sunset Cruise Rally",
    caption: "Perfect conditions for our monthly sunset cruise.",
    album: "cruising",
    date: new Date(2024, 2, 8),
  },
  {
    id: "cruising-4",
    src: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200",
    width: 1200,
    height: 900,
    alt: "Beach and boats",
    title: "Summer Rendezvous",
    caption: "Club boats anchor near the beach during our annual rendezvous.",
    album: "cruising",
    date: new Date(2023, 6, 22),
  },
  {
    id: "cruising-5",
    src: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1200",
    width: 1600,
    height: 1200,
    alt: "Fleet of boats cruising together",
    title: "Weekend Cruise to Ilwaco",
    caption: "The cruising fleet makes its way down the Columbia.",
    album: "cruising",
    date: new Date(2023, 5, 15),
  },

  // Social Events
  {
    id: "social-1",
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200",
    width: 1200,
    height: 800,
    alt: "People gathering at outdoor party",
    title: "Summer Solstice Party",
    caption: "Members celebrate the longest day with food and friends.",
    album: "social",
    date: new Date(2023, 5, 21),
  },
  {
    id: "social-2",
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200",
    width: 1200,
    height: 800,
    alt: "Dinner table setting",
    title: "Captain's Dinner 2023",
    caption: "Annual awards dinner honoring our racing skippers.",
    album: "social",
    date: new Date(2023, 10, 4),
    photographer: "Club Photographer",
  },
  {
    id: "social-3",
    src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=1200",
    width: 1200,
    height: 1600,
    alt: "BBQ and outdoor dining",
    title: "New Member BBQ",
    caption: "Welcoming our newest members with burgers and sailing stories.",
    album: "social",
    date: new Date(2024, 3, 14),
  },
  {
    id: "social-4",
    src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200",
    width: 1200,
    height: 800,
    alt: "Group celebration",
    title: "Opening Day 2024",
    caption: "Club members gather for the traditional Opening Day ceremony.",
    album: "social",
    date: new Date(2024, 4, 1),
  },

  // Clubhouse
  {
    id: "clubhouse-1",
    src: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1200",
    width: 1200,
    height: 800,
    alt: "Marina and dock at sunset",
    title: "AYC Dock at Sunset",
    caption: "Our home on the beautiful Columbia River.",
    album: "clubhouse",
    date: new Date(2023, 7, 15),
  },
  {
    id: "clubhouse-2",
    src: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1200",
    width: 1200,
    height: 900,
    alt: "Boats in marina",
    title: "Morning at the Marina",
    caption: "A peaceful morning at the AYC dock.",
    album: "clubhouse",
    date: new Date(2024, 1, 20),
  },
  {
    id: "clubhouse-3",
    src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1200",
    width: 1600,
    height: 1200,
    alt: "Dock and boats",
    title: "Club Fleet",
    caption: "Member boats ready for a day on the water.",
    album: "clubhouse",
    date: new Date(2023, 5, 1),
  },

  // Historical Photos
  {
    id: "historical-1",
    src: "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=1200",
    width: 1200,
    height: 900,
    alt: "Vintage sailboat",
    title: "Classic Wooden Yachts",
    caption: "The club's early fleet of wooden sailboats, circa 1950s.",
    album: "historical",
    date: new Date(1955, 6, 15),
  },
  {
    id: "historical-2",
    src: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=1200",
    width: 1200,
    height: 800,
    alt: "Old sailing photograph",
    title: "Founding Members Regatta",
    caption: "One of the first club regattas after our founding in 1931.",
    album: "historical",
    date: new Date(1935, 7, 4),
  },
  {
    id: "historical-3",
    src: "https://images.unsplash.com/photo-1498623116890-37e912163d5d?w=1200",
    width: 1200,
    height: 1200,
    alt: "Historic marina",
    title: "Original Clubhouse",
    caption: "The first AYC clubhouse on the Astoria waterfront.",
    album: "historical",
    date: new Date(1940, 3, 10),
  },
  {
    id: "historical-4",
    src: "https://images.unsplash.com/photo-1471958680802-1345a694ba6d?w=1200",
    width: 1200,
    height: 800,
    alt: "Vintage regatta",
    title: "1960s Racing",
    caption: "Competitive racing has always been a cornerstone of AYC.",
    album: "historical",
    date: new Date(1965, 8, 12),
  },
];

// Filter photos by album
export function filterPhotosByAlbum(
  photos: Photo[],
  albums: PhotoAlbum[]
): Photo[] {
  if (albums.length === 0) return photos;
  return photos.filter((photo) => albums.includes(photo.album));
}

// Search photos by title or caption
export function searchPhotos(photos: Photo[], query: string): Photo[] {
  if (!query.trim()) return photos;
  const lowerQuery = query.toLowerCase();
  return photos.filter(
    (photo) =>
      photo.title.toLowerCase().includes(lowerQuery) ||
      photo.caption?.toLowerCase().includes(lowerQuery) ||
      photo.alt.toLowerCase().includes(lowerQuery)
  );
}

// Get photos by album
export function getPhotosByAlbum(album: PhotoAlbum): Photo[] {
  return mockPhotos.filter((photo) => photo.album === album);
}

// Sort photos by date
export function sortPhotosByDate(
  photos: Photo[],
  order: "asc" | "desc" = "desc"
): Photo[] {
  return [...photos].sort((a, b) => {
    const diff = a.date.getTime() - b.date.getTime();
    return order === "asc" ? diff : -diff;
  });
}
