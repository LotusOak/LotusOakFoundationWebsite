'use client';

import { ReactNode, useEffect, useState } from 'react';

interface FadeInStaggerProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function FadeInStagger({ 
  children, 
  delay = 0, 
  className = '' 
}: FadeInStaggerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  
  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    
    if (mediaQuery.matches) {
      // Skip animation if reduced motion is preferred
      setIsVisible(true);
      return;
    }
    
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }
  
  return (
    <div 
      className={`transition-all duration-800 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-4'
      } ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionProperty: 'opacity, transform',
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      {children}
    </div>
  );
}