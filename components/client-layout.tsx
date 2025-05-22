'use client'

import React, { useEffect } from 'react';
import { useScrollRestoration } from '@/hooks/use-scroll-restoration';

interface ClientLayoutProps {
  children: React.ReactNode;
  defaultLanguage: string; // Changed from detectedLanguage to defaultLanguage to match app/layout.tsx
}

export function ClientLayout({ children, defaultLanguage }: ClientLayoutProps) {
  // Use our scroll restoration hook
  useScrollRestoration();
  
  // Set up HTML lang attribute
  useEffect(() => {
    // Set HTML lang attribute if not already set
    if (typeof document !== 'undefined') {
      if (!document.documentElement.lang || document.documentElement.lang === '') {
        document.documentElement.lang = defaultLanguage;
      }
    }
  }, [defaultLanguage]);
  
  return (
    <>
      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>
      {/* Add id to main content for skip link */}
      <main id="main-content">
        {children}
      </main>
    </>
  )
}