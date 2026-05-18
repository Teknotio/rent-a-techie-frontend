# Rent a Techie - Frontend

A Next.js website for connecting businesses with expert tech professionals. Built with a sketchy wireframe aesthetic that's modern yet approachable.

## Features

- **Landing Page**: Hero section with services overview, features, testimonials
- **How It Works**: Step-by-step process explanation with pricing options
- **Case Studies**: Real project examples with results and testimonials
- **About**: Company story, team, values, and differentiators
- **Contact**: Interactive form for booking consultations

## Tech Stack

- **Framework**: Next.js 16 with App Router & Turbopack
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with custom wireframe styles
- **Fonts**: Google Fonts (Caveat, Architects Daughter, Kalam, JetBrains Mono)

## Design Philosophy

The website uses a unique "sketchy wireframe" aesthetic with:
- Hand-drawn style fonts
- Organic, slightly rotated elements
- Warm color palette (paper background with orange accent)
- Sticky notes, pills, and hand-drawn boxes
- Playful yet professional feel

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm package manager

### Installation

1. Navigate to the project directory:
```bash
cd rent-a-techie-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
rent-a-techie-frontend/
├── app/
│   ├── about/          # About page
│   ├── case-studies/  # Case studies page
│   ├── contact/       # Contact form page
│   ├── how-it-works/  # Process explanation page
│   ├── globals.css    # Global styles with wireframe aesthetics
│   ├── layout.tsx     # Root layout with navigation and footer
│   └── page.tsx       # Landing page
├── components/
│   ├── Navigation.tsx # Header navigation component
│   └── Footer.tsx     # Footer component
└── public/           # Static assets
```

## Customization

### Colors

The color scheme is defined in `app/globals.css`:

```css
:root {
  --paper: #FBF8F2;      /* Background */
  --ink: #1B1B1B;        /* Text */
  --accent: #E66A3A;     /* Brand accent (orange) */
}
```

### Typography

Custom CSS classes for different text styles:
- `.wf-h1`, `.wf-h2`, `.wf-h3` - Headlines
- `.wf-body` - Body text
- `.wf-mono` - Monospace labels

### Components

Wireframe-style components:
- `.wf-box` - Hand-drawn boxes
- `.wf-btn` - Sketchy buttons
- `.wf-pill` - Tag/pill elements
- `.wf-note` - Sticky note style
- `.wf-imgph` - Image placeholders

## Pages Overview

### Landing Page (`/`)
- Hero section with value proposition
- Key features (3 boxes)
- Services grid (4 services)
- Call-to-action
- Testimonials (3 sticky notes)

### How It Works (`/how-it-works`)
- 4-step process explanation
- Pricing options (hourly, daily, project)
- FAQ section
- CTA to book a call

### Case Studies (`/case-studies`)
- Stats showcase
- 5 detailed case studies
- Industry categories
- Results and testimonials

### About (`/about`)
- Mission statement
- Core values
- Team profiles
- Company statistics
- Differentiators

### Contact (`/contact`)
- Interactive booking form
- Contact information
- Alternative contact methods
- Quick FAQ

## Next Steps

To make this production-ready, consider:

1. **Backend Integration**: Connect forms to an API or service like:
   - Formspree
   - EmailJS
   - Custom backend API

2. **Analytics**: Add tracking with:
   - Google Analytics
   - Plausible
   - Mixpanel

3. **SEO**: Enhance with:
   - Meta tags for each page
   - Open Graph images
   - Structured data

4. **Performance**: Optimize with:
   - Image optimization
   - Font loading strategy
   - Code splitting

5. **Testing**: Add:
   - Unit tests (Jest)
   - E2E tests (Playwright)
   - Visual regression tests

## Deployment

This project can be deployed to:

### Vercel (Recommended)
```bash
npm install -g vercel
vercel deploy
```

### Netlify
```bash
npm run build
# Then drag and drop the .next folder to Netlify
```

### Other Platforms
- AWS Amplify
- Digital Ocean
- Docker (build and containerize)

## License

This project is part of the Rent a Techie platform.

## Support

For questions or issues, contact: hello@rentatechie.com
