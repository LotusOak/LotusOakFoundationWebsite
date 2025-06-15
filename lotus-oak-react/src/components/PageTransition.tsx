'use client';

import { ReactNode, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [displayChildren, setDisplayChildren] = useState(children);
  
  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      // Skip transition animation
      setDisplayChildren(children);
      setIsVisible(true);
      return;
    }
    
    // Start fade out
    setIsVisible(false);
    
    const timer = setTimeout(() => {
      // Update content
      setDisplayChildren(children);
      // Start fade in
      setIsVisible(true);
    }, 150); // Half of transition duration
    
    return () => clearTimeout(timer);
  }, [pathname, children]);
  
  return (
    <div 
      className={`transition-opacity duration-300 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        transitionProperty: 'opacity',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      {displayChildren}
    </div>
  );
}