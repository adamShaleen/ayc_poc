# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start development server at localhost:3000
npm run build        # Build for production
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
npm run format:check # Check formatting without modifying
```

## Architecture

This is a Next.js 14 App Router website for Astoria Yacht Club, using TypeScript with strict mode and Tailwind CSS.

### Key Directories

- `app/` - Next.js App Router pages and layouts
- `components/` - React components organized by purpose:
  - `layout/` - Header, Footer
  - `sections/` - Homepage sections (Hero, QuickActions, Featured, WhyAYC, Newsletter)
  - `templates/` - Page layout templates (ContentPage, FormPage, GridPage, CalendarPage)
  - `ui/` - Reusable components (Button, Container, Accordion, Skeleton)
  - `events/` - Event calendar components using react-big-calendar
  - `gallery/` - Photo gallery with lightbox
- `lib/` - Utilities and data:
  - `constants.ts` - Site config, nav items, social links, contact info
  - `utils.ts` - Utility functions including `cn()` for Tailwind class merging
  - `seo.tsx` - SEO metadata and JSON-LD schema generators
  - `data/` - Mock data for events, gallery, racing, club info
  - `cms/` - CMS client and schemas (prepared for headless CMS integration)
- `types/` - TypeScript type definitions

### Custom Tailwind Colors

The project uses a nautical color palette defined in `tailwind.config.ts`:
- `navy` - Primary brand color (#1e3a8a)
- `ocean` - Secondary/accent (#0ea5e9)
- `brass` - CTA buttons, highlights (#f59e0b)

### Component Patterns

- Button component uses Radix UI Slot for `asChild` prop pattern
- Page templates provide consistent layouts with breadcrumbs and optional sidebars
- Event calendar uses react-big-calendar with date-fns localizer
- Forms use react-hook-form with zod validation

### Path Alias

`@/*` maps to the project root (configured in tsconfig.json)
