// Navigation types
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  description?: string;
}

// Breadcrumb types
export interface BreadcrumbItem {
  label: string;
  href?: string;
}

// Page template types
export type PageLayout = "standard" | "form" | "grid" | "calendar";

export interface PageMeta {
  title: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
}

// Social media links
export interface SocialLink {
  platform: "facebook" | "youtube" | "instagram";
  url: string;
  label: string;
}

// Contact information
export interface ContactInfo {
  address: string;
  city: string;
  state: string;
  zip: string;
  phone?: string;
  email?: string;
}

// Club event
export interface ClubEvent {
  id: string;
  title: string;
  date: Date;
  description: string;
  location?: string;
  imageUrl?: string;
}

// Component props
export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  asChild?: boolean;
}
