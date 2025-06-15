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
  
  // Navigation handlers - keeping only home/escape shortcuts
  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    // Don't interfere with form inputs or when modifiers are pressed
    if (event.target instanceof HTMLInputElement || 
        event.target instanceof HTMLTextAreaElement ||
        event.ctrlKey || event.metaKey || event.altKey) {
      return;
    }
    
    switch (event.key) {
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
  }, [router]);
  
  // Scroll navigation handler
  const handleWheel = useCallback((event: WheelEvent) => {
    event.preventDefault();
    
    if (event.deltaY > 0) {
      // Scrolling down - go to next chapter
      if (nextChapter) {
        router.push(nextChapter);
      }
    } else if (event.deltaY < 0) {
      // Scrolling up - go to previous chapter
      if (prevChapter) {
        router.push(prevChapter);
      }
    }
  }, [router, nextChapter, prevChapter]);
  
  // Set up navigation event listeners
  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    document.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      document.removeEventListener('wheel', handleWheel);
    };
  }, [handleKeyPress, handleWheel]);
  
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
          { num: 'intro', label: '00', href: '/' },
          { num: '01', label: '01', href: '/chapter-01' },
          { num: '02', label: '02', href: '/chapter-02' },
          { num: '03', label: '03', href: '/chapter-03' },
          { num: '04', label: '04', href: '/chapter-04' },
          { num: '05', label: '05', href: '/chapter-05' }
        ].map(({ num, label, href }) => (
          <Link
            key={num}
            href={href}
            className={`text-xs mb-6 cursor-pointer transition-colors ${
              chapterNumber === num 
                ? 'text-gray-800 font-medium' 
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            {label}
          </Link>
        ))}
      </div>
      
      {/* Main content area with subtle background */}
      <div className="flex-1 bg-gray-25 relative flex flex-row">
        
        {/* Content column */}
        <div className="w-1/2 p-16 flex flex-col justify-center">
          <main 
            id="main-content"
            className="max-w-md"
            tabIndex={-1}
          >
            {/* Chapter number in content */}
            <div className="text-gray-400 text-sm mb-8">
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

    </div>
  );
}