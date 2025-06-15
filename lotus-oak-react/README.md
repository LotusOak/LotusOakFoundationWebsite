# Lotus Oak Foundation Website

A contemplative, single-screen website for the Lotus Oak Foundation built with Next.js and inspired by The Way of Code's elegant design philosophy.

## Overview

This Next.js application replaces the previous Jekyll site with a modern, interactive experience that blends traditional philanthropy messaging with innovative design. The site features a unique chapter-based navigation system where each page is constrained to a single screen with no scrolling.

## Design Philosophy

- **Single-screen pages**: No scrolling, each chapter fits within the viewport
- **Contemplative aesthetic**: Inspired by The Way of Code's literary design
- **Consistent animation**: LotusOakSwirl generative art maintains fixed position across all pages
- **Typography-focused**: Crimson Text serif for headings, Inter for body text
- **Micro-interactions**: Sophisticated hover states and transitions throughout

## Technology Stack

- **Framework**: Next.js 15.3.3 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with custom utility classes
- **Runtime**: React 19
- **Fonts**: Crimson Text (serif), Inter (sans-serif)
- **Animation**: Custom Canvas-based generative art

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── chapter-01/         # Philosophy chapter
│   ├── chapter-02/         # Mission chapter
│   ├── chapter-03/         # Focus Areas chapter
│   ├── chapter-04/         # Approach chapter
│   ├── chapter-05/         # Future Vision chapter
│   ├── globals.css         # Global styles and custom utilities
│   ├── layout.tsx          # Root layout with font configuration
│   └── page.tsx            # Homepage (intro)
├── components/
│   ├── ChapterLayout.tsx   # Consistent page template
│   └── LotusOakSwirl.tsx   # Generative art component
└── ...
```

## Key Components

### LotusOakSwirl
Generative art component featuring 8000 particles in two systems:
- **Oak particles**: Sage green, stable, representing endurance
- **Lotus particles**: Pink-gray, ethereal, representing ephemerality

### ChapterLayout
Provides consistent single-screen layout with:
- Fixed animation positioning
- Chapter navigation (Previous/Next/Home)
- Responsive content container
- Viewport constraints (no scrolling)

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd lotus-oak-react

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the site.

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Design System

### Colors
- **Primary**: #2a2a2a (Deep charcoal)
- **Secondary**: #666666 (Medium gray)
- **Accent**: #3a5f4a (Deep sage - oak)
- **Lotus**: #a88e88 (Lotus pink-gray)
- **Background**: #fefefe (Pure white)

### Typography
- **Headings**: Crimson Text serif, 600 weight
- **Body**: Crimson Text serif, 400 weight
- **UI Elements**: Inter sans-serif

### Spacing
- **Section**: 8rem (128px)
- **Chapter**: 6rem (96px)
- **Prose**: 4rem (64px)

## Development Workflow

### Branching Strategy
- `main`: Production Jekyll site (legacy)
- `development`: Active Next.js development
- `staging`: Pre-production testing
- `feature/*`: Individual feature branches

### Issue-Driven Development
1. Create GitHub issue for each feature/fix
2. Create feature branch: `feature/issue-number-description`
3. Implement changes following existing patterns
4. Update documentation
5. Create pull request with issue reference

## Deployment

The site is designed to replace the existing Jekyll site at lotusoak.org. Deployment process:

1. Merge changes to `staging` branch
2. Test thoroughly
3. Create production build
4. Deploy to hosting platform (TBD)

## Customization

### Adding New Chapters
1. Create new directory in `src/app/chapter-XX/`
2. Add `page.tsx` using ChapterLayout template
3. Update navigation in adjacent chapters
4. Follow single-screen constraint

### Modifying Animation
The LotusOakSwirl component can be customized:
- Particle count (currently 8000)
- Color schemes for oak/lotus particles
- Animation speed and motion patterns
- Canvas size and positioning

### Styling
All styles use Tailwind CSS with custom utilities defined in `globals.css`. Key utility classes:
- `.font-serif`, `.font-sans`: Font family utilities
- `.poetry`: Special styling for poetic content
- `.chapter-title`: Consistent chapter heading style
- `.hover-*`: Custom hover effect utilities

## Contributing

1. Follow the issue-driven development process
2. Maintain single-screen page constraints
3. Test on multiple screen sizes
4. Ensure animation consistency across pages
5. Update documentation for architectural changes

## License

[Add appropriate license information]

---

**Last Updated**: 2025-06-15
**Version**: 1.0.0 (Phase 1: Visual Refinements Complete)