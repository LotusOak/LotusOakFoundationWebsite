'use client';

import Link from 'next/link';
import { ReactNode, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';

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
  const router = useRouter();
  
  // Keyboard navigation handler
  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    // Don't interfere with form inputs or when modifiers are pressed
    if (event.target instanceof HTMLInputElement || 
        event.target instanceof HTMLTextAreaElement ||
        event.ctrlKey || event.metaKey || event.altKey) {
      return;
    }
    
    switch (event.key) {
      case 'ArrowRight':
      case ' ':
      case 'n':
      case 'N':
        event.preventDefault();
        if (nextChapter) {
          router.push(nextChapter);
        }
        break;
        
      case 'ArrowLeft':
      case 'p':
      case 'P':
        event.preventDefault();
        if (prevChapter) {
          router.push(prevChapter);
        }
        break;
        
      case 'h':
      case 'H':
      case 'Home':
        event.preventDefault();
        router.push('/');
        break;
        
      case 'Escape':
        event.preventDefault();
        router.push('/');
        break;
    }
  }, [router, nextChapter, prevChapter]);
  
  // Set up keyboard event listeners
  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);
  
  return (
    <div className="fixed inset-0 flex flex-col bg-background" role="main">
      {/* Skip to content link for screen readers */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-accent focus:text-background focus:px-4 focus:py-2 focus:rounded"
      >
        Skip to content
      </a>
      
      {/* Header with chapter number */}
      <header className="absolute top-8 left-0 right-0 z-10">
        <div className="container-full">
          <div className="chapter-number text-center" aria-label={`Chapter ${chapterNumber}`}>
            {chapterNumber}
          </div>
        </div>
      </header>

      {/* Fixed animation area - always in the same spot */}
      <div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"
        aria-hidden="true"
        role="presentation"
      >
        {animation}
      </div>

      {/* Content overlay - text on top of animation */}
      <main 
        id="main-content"
        className="relative z-10 flex-1 flex items-center justify-center"
        tabIndex={-1}
      >
        <div className="container-content text-center">
          {children}
        </div>
      </main>

      {/* Navigation */}
      <nav className="absolute bottom-8 left-0 right-0 z-10" aria-label="Chapter navigation">
        <div className="container-full flex justify-between items-center">
          {prevChapter ? (
            <Link 
              href={prevChapter} 
              className="text-sm text-muted hover:text-accent focus:text-accent transition-all duration-300 hover:transform hover:-translate-y-1 focus:transform focus:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50 rounded px-2 py-1"
              aria-label={`Go to previous chapter`}
            >
              ← Previous
            </Link>
          ) : (
            <div />
          )}
          
          <Link 
            href="/" 
            className="text-sm text-muted hover:text-accent focus:text-accent transition-all duration-300 hover:transform hover:-translate-y-1 focus:transform focus:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50 rounded px-2 py-1"
            aria-label="Go to homepage"
          >
            Home
          </Link>
          
          {nextChapter ? (
            <Link 
              href={nextChapter} 
              className="text-sm text-muted hover:text-accent focus:text-accent transition-all duration-300 hover:transform hover:-translate-y-1 focus:transform focus:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50 rounded px-2 py-1"
              aria-label={`Go to next chapter`}
            >
              Next →
            </Link>
          ) : (
            <div />
          )}
        </div>
      </nav>

      {/* Side navigation dots - desktop */}
      <nav 
        className="fixed left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-20"
        aria-label="Chapter quick navigation"
      >
        <div className="flex flex-col gap-4">
          {[
            { num: 'intro', label: 'Introduction' },
            { num: '01', label: 'Philosophy' },
            { num: '02', label: 'Mission' },
            { num: '03', label: 'Focus Areas' },
            { num: '04', label: 'Approach' },
            { num: '05', label: 'Future Vision' }
          ].map(({ num, label }) => (
            <Link
              key={num}
              href={num === 'intro' ? '/' : `/chapter-${num}`}
              className={`nav-dot focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50 ${
                chapterNumber === num 
                  ? 'active' 
                  : 'inactive'
              }`}
              aria-label={`${label} (Chapter ${num})`}
              aria-current={chapterNumber === num ? 'page' : undefined}
            />
          ))}
        </div>
      </nav>
    </div>
  );
}