# Lotus Oak Foundation Website

A contemplative, single-screen website for the Lotus Oak Foundation built with Next.js and inspired by The Way of Code's elegant design philosophy.

## Overview

This Next.js application replaces the previous Jekyll site with a modern, interactive experience that blends traditional philanthropy messaging with innovative design. The site features a unique chapter-based navigation system where each page is constrained to a single screen with no scrolling.

## Design Philosophy

- **Single-screen pages**: No scrolling, each chapter fits within the viewport
- **Master craftsman aesthetic**: Inspired by Rick Rubin's disciplined, uniform approach
- **Consistent animation**: LotusOakSwirl generative art maintains fixed position across all pages
- **Uniform typography**: Single font size (1.125rem) throughout - no hierarchical variations
- **Minimal navigation**: Vertical numbering system (00-05) with subtle interactions
- **Cinematic transitions**: Soft-close drawer effect with staggered fade-ins

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
- Fixed animation positioning on the right
- Vertical number navigation in left sidebar (clickable)
- Scroll/swipe gesture navigation (with sophisticated gesture detection)
- Keyboard shortcuts (H/Home for intro, Escape to return)
- Cinematic page transitions with cascading animations
- Two-column layout with content left, animation right

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
- **All text**: Crimson Text serif, 400 weight, 1.125rem
- **No variations**: Uniform size throughout (master craftsman principle)
- **UI Elements**: Inter sans-serif (navigation numbers only)

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

## Navigation

### User Interactions
- **Click numbers**: Click any number in left sidebar (00-05) to navigate
- **Scroll/Swipe**: Use trackpad or mouse wheel to navigate between chapters
- **Keyboard**: Press `H` or `Home` for intro, `Escape` to return to intro
- **Touch**: Swipe up/down on touch devices (mobile/tablet)

### Navigation Implementation
- Gesture accumulation over 150ms for accurate swipe detection
- 1-second lockout between navigations to prevent multi-page jumps
- Higher threshold (100) for deliberate trackpad swipes
- Cinematic transitions with soft-close drawer effect

## Known Issues & Considerations

### Development Environment
- **macOS Screen Timers**: Can shut down Node.js processes at scheduled times (e.g., 10pm)
- **Solution**: Disable screen timers during development or be aware of time-based shutdowns

### Technical Considerations
- **Tailwind CSS v4**: Some utility classes cause errors (e.g., `@apply font-serif`)
- **Turbopack**: Disabled due to compilation issues - using standard Next.js build
- **TypeScript**: Requires `@types/estree` for proper type checking

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
**Version**: 0.3.0 (Navigation Improvements & Master Craftsman Design)