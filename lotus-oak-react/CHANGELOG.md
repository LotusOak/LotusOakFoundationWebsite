# Changelog

All notable changes to the Lotus Oak Foundation React website will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Sophisticated scroll/swipe navigation with gesture completion detection
- Cinematic page transitions with soft-close drawer effect
- Staggered fade-in animations for content and visualization
- 1-second navigation lockout to prevent multi-page jumps
- Higher scroll threshold (100) for more deliberate trackpad swipes

### Fixed
- Chapter 4 & 5 styling inconsistencies - now using uniform typography
- CSS Tailwind v4 compatibility issues by removing problematic @apply directives
- Scroll navigation now properly accumulates gestures over 150ms
- TypeScript estree type definition errors

### Changed
- Removed arrow key navigation as per design requirements
- Reduced navigation timeout from 800ms to 500ms for better responsiveness
- Updated package.json to remove --turbopack flag due to compilation issues

## [0.2.0] - 2025-06-14

### Added
- Master craftsman redesign inspired by Rick Rubin's The Way of Code
- Vertical numbering system (00-05) in left sidebar
- Clickable number navigation in sidebar
- Uniform typography throughout (single font size 1.125rem)
- Subtle background contrast zones (gray-50 sidebar, gray-25 content)
- Home (H) and Escape keyboard shortcuts

### Changed
- Complete typography overhaul - removed all varying header sizes
- Redesigned ChapterLayout with two-column structure
- Animation now positioned to the right of content
- Removed typographic hierarchy in favor of disciplined consistency

### Removed
- All font weight variations and size differences
- Decorative elements in favor of minimal restraint

## [0.1.0] - 2025-06-14

### Added
- Initial Next.js 15.3.3 implementation with TypeScript
- LotusOakSwirl generative art component (8000 particles)
- Single-screen chapter design with no scrolling
- Tailwind CSS v4 integration
- Accessibility features (ARIA labels, reduced motion support)
- Five content chapters plus introduction
- The Way of Code inspired aesthetic

### Technical Stack
- Next.js 15.3.3 with App Router
- React 19
- TypeScript
- Tailwind CSS v4
- Canvas-based animations

---

[Unreleased]: https://github.com/LotusOak/LotusOakFoundationWebsite/compare/v0.2.0...HEAD
[0.2.0]: https://github.com/LotusOak/LotusOakFoundationWebsite/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/LotusOak/LotusOakFoundationWebsite/releases/tag/v0.1.0