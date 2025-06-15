'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

interface ChapterLayoutProps {
  chapterNumber: string;
  children: ReactNode;
  animation?: ReactNode;
  prevChapter?: string;
  nextChapter?: string;
}

export default function ChapterLayout({ 
  chapterNumber, 
  children, 
  animation,
  prevChapter,
  nextChapter 
}: ChapterLayoutProps) {
  return (
    <div className="fixed inset-0 flex flex-col bg-background">
      {/* Header with chapter number */}
      <header className="absolute top-8 left-0 right-0 z-10">
        <div className="container-full">
          <div className="chapter-number text-center">{chapterNumber}</div>
        </div>
      </header>

      {/* Fixed animation area - always in the same spot */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
        {animation}
      </div>

      {/* Content overlay - text on top of animation */}
      <main className="relative z-10 flex-1 flex items-center justify-center">
        <div className="container-content text-center">
          {children}
        </div>
      </main>

      {/* Navigation */}
      <nav className="absolute bottom-8 left-0 right-0 z-10">
        <div className="container-full flex justify-between items-center">
          {prevChapter ? (
            <Link href={prevChapter} className="text-sm text-muted hover:text-accent transition-all duration-300 hover:transform hover:-translate-y-1">
              ← Previous
            </Link>
          ) : (
            <div />
          )}
          
          <Link href="/" className="text-sm text-muted hover:text-accent transition-all duration-300 hover:transform hover:-translate-y-1">
            Home
          </Link>
          
          {nextChapter ? (
            <Link href={nextChapter} className="text-sm text-muted hover:text-accent transition-all duration-300 hover:transform hover:-translate-y-1">
              Next →
            </Link>
          ) : (
            <div />
          )}
        </div>
      </nav>

      {/* Side navigation dots */}
      <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-20">
        <div className="flex flex-col gap-4">
          {['intro', '01', '02', '03', '04', '05'].map((num) => (
            <Link
              key={num}
              href={num === 'intro' ? '/' : `/chapter-${num}`}
              className={`nav-dot ${
                chapterNumber === num 
                  ? 'active' 
                  : 'inactive'
              }`}
              aria-label={`Chapter ${num}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}