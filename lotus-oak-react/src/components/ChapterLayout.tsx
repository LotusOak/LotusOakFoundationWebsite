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
    <div className="fixed inset-0 flex bg-background" role="main">
      {/* Skip to content link for screen readers */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-accent focus:text-background focus:px-4 focus:py-2 focus:rounded"
      >
        Skip to content
      </a>
      
      {/* Vertical numbering system - Rick Rubin style */}
      <div className="w-16 bg-gray-50 flex flex-col items-center pt-8">
        {[
          { num: 'intro', label: '00' },
          { num: '01', label: '01' },
          { num: '02', label: '02' },
          { num: '03', label: '03' },
          { num: '04', label: '04' },
          { num: '05', label: '05' }
        ].map(({ num, label }) => (
          <div
            key={num}
            className={`text-xs text-gray-400 mb-6 ${
              chapterNumber === num 
                ? 'text-gray-800 font-medium' 
                : ''
            }`}
          >
            {label}
          </div>
        ))}
      </div>
      
      {/* Main content area with subtle background */}
      <div className="flex-1 bg-gray-25 relative flex">
        
        {/* Content column */}
        <div className="w-1/2 p-16 flex flex-col justify-center">
          <main 
            id="main-content"
            className="space-y-8"
            tabIndex={-1}
          >
            {/* Chapter number in content */}
            <div className="text-gray-400 text-sm">
              {chapterNumber === 'intro' ? '00' : chapterNumber}
            </div>
            
            {/* Content */}
            <div className="space-y-6">
              {children}
            </div>
          </main>
        </div>

        {/* Animation column */}
        <div className="w-1/2 flex items-center justify-center">
          <div aria-hidden="true" role="presentation">
            {animation}
          </div>
        </div>
      </div>

      {/* Minimal navigation at bottom */}
      <nav className="absolute bottom-8 left-20 right-8 z-10" aria-label="Chapter navigation">
        <div className="flex justify-between items-center text-xs text-gray-400">
          {prevChapter ? (
            <Link 
              href={prevChapter} 
              className="hover:text-gray-600 transition-colors"
            >
              ←
            </Link>
          ) : (
            <div />
          )}
          
          {nextChapter ? (
            <Link 
              href={nextChapter} 
              className="hover:text-gray-600 transition-colors"
            >
              →
            </Link>
          ) : (
            <div />
          )}
        </div>
      </nav>
    </div>
  );
}