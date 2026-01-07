# Astoria Yacht Club Website

A modern, responsive website for the Astoria Yacht Club - a volunteer-run sailing club in Astoria, Oregon, established in 1931.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS with custom nautical theme
- **Icons:** Lucide React
- **Code Quality:** ESLint + Prettier

## Color Palette

| Color    | Hex       | Usage                        |
| -------- | --------- | ---------------------------- |
| Navy     | `#1e3a8a` | Primary brand color          |
| Ocean    | `#0ea5e9` | Secondary/accent elements    |
| Brass    | `#f59e0b` | CTA buttons, highlights      |
| Gray     | `#f8fafc` | Background, subtle textures  |

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout with header/footer
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── layout/             # Layout components (Header, Footer)
│   ├── sections/           # Page sections (Hero, About, CTA)
│   └── ui/                 # Reusable UI components (Button, Container)
├── lib/
│   ├── constants.ts        # Site config, nav items, contact info
│   └── utils.ts            # Utility functions (cn, formatDate)
├── public/
│   └── images/             # Static images
└── types/
    └── index.ts            # TypeScript type definitions
```

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd ayc_poc
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start development server                 |
| `npm run build`   | Build for production                     |
| `npm run start`   | Start production server                  |
| `npm run lint`    | Run ESLint                               |
| `npm run format`  | Format code with Prettier                |

## Features

### Responsive Layout
- Modern navigation header with AYC burgee-style logo
- Sticky header that condenses on scroll
- Mobile-friendly hamburger menu with smooth animations
- Footer with contact info and social links (Facebook, YouTube, Instagram)
- Consistent page container with max-width for readability

### Components
- **Header:** Sticky navigation with scroll detection, mobile menu
- **Footer:** Contact information, navigation links, social media icons
- **Hero:** Full-width hero section with feature cards
- **About:** Club history and values section
- **CallToAction:** Membership CTA section

### Accessibility
- Semantic HTML structure
- Keyboard navigation support
- Focus indicators for interactive elements
- ARIA labels for screen readers

## Customization

### Updating Site Information
Edit `lib/constants.ts` to update:
- Site name and tagline
- Navigation items
- Social media links
- Contact information

### Modifying Colors
Edit `tailwind.config.ts` to customize the color palette:
- `navy` - Primary navy blue shades
- `ocean` - Secondary ocean blue shades
- `brass` - Accent gold/brass shades

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to a Git repository
2. Import the project in Vercel
3. Vercel will detect Next.js and configure the build settings automatically

For other deployment options, see the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## License

This project is proprietary to the Astoria Yacht Club.
