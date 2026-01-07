import { NavItem, SocialLink, ContactInfo } from "@/types";

export const SITE_CONFIG = {
  name: "Astoria Yacht Club",
  shortName: "AYC",
  tagline: "Sailing the Columbia River Since 1931",
  description:
    "A volunteer-run sailing club in Astoria, Oregon, fostering a love of sailing and community since 1931.",
  established: 1931,
} as const;

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      {
        label: "Our History",
        href: "/about/history",
        description: "Learn about AYC's rich heritage since 1931",
      },
      {
        label: "Board of Directors",
        href: "/about/board",
        description: "Meet our volunteer leadership team",
      },
      {
        label: "Newsletter",
        href: "/about/newsletter",
        description: "Stay updated with The Prior Edition",
      },
    ],
  },
  {
    label: "Membership",
    href: "/membership",
    children: [
      {
        label: "Join the Club",
        href: "/membership/join",
        description: "Become a member of AYC",
      },
      {
        label: "Renew Membership",
        href: "/membership/renew",
        description: "Renew your annual membership",
      },
      {
        label: "Benefits",
        href: "/membership/benefits",
        description: "Explore member privileges and perks",
      },
      {
        label: "Member Roster",
        href: "/membership/roster",
        description: "Connect with fellow members",
      },
    ],
  },
  {
    label: "Events",
    href: "/events",
    children: [
      {
        label: "Calendar",
        href: "/events/calendar",
        description: "View all upcoming club events",
      },
      {
        label: "Racing",
        href: "/events/racing",
        description: "Sailboat racing and RC Laser events",
      },
      {
        label: "Cruising",
        href: "/events/cruising",
        description: "Cruising rallies and group sails",
      },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    children: [
      {
        label: "Crew Connections",
        href: "/resources/crew",
        description: "Find crew or a boat to sail on",
      },
      {
        label: "Education",
        href: "/resources/education",
        description: "Sailing courses and educational series",
      },
      {
        label: "Reciprocity",
        href: "/resources/reciprocity",
        description: "Partner yacht clubs and anchorages",
      },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Shop", href: "/shop" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "facebook",
    url: "https://facebook.com/astoriayachtclub",
    label: "Follow us on Facebook",
  },
  {
    platform: "youtube",
    url: "https://youtube.com/@astoriayachtclub",
    label: "Watch us on YouTube",
  },
  {
    platform: "instagram",
    url: "https://instagram.com/astoriayachtclub",
    label: "Follow us on Instagram",
  },
];

export const CONTACT_INFO: ContactInfo = {
  address: "357 Portway St",
  city: "Astoria",
  state: "OR",
  zip: "97103",
  phone: "(503) 555-1931",
  email: "info@astoriayachtclub.org",
};
