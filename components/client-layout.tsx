'use client'

import React from 'react'
import { useEffect } from 'react';
import { useScrollRestoration } from '@/hooks/use-scroll-restoration';

interface ClientLayoutProps {
  children: React.ReactNode;
  defaultLanguage: string; // Changed from detectedLanguage to defaultLanguage to match app/layout.tsx
}

export function ClientLayout({ children, defaultLanguage }: ClientLayoutProps) {
  // Use our scroll restoration hook
  useScrollRestoration();
  
  // Add a useEffect hook to initialize client-side functionality
  useEffect(() => {
    // Fix for any hydration issues by ensuring state is consistent
    // This runs only on the client-side after hydration
    const root = document.documentElement;
    
    // Ensure lang attribute is set
    if (!root.lang) {
      root.lang = defaultLanguage;
    }
    
    // Handle language cookie changes
    const checkLanguageCookie = () => {
      const cookies = document.cookie.split(';');
      for (const cookie of cookies) {
        const [name, value] = cookie.trim().split('=');
        if (name === 'NEXT_LOCALE' && value && value !== root.lang) {
          // If cookie doesn't match current lang, reload the page
          window.location.reload();
          return;
        }
      }
    };
    
    // Check initially and periodically
    checkLanguageCookie();
    const intervalId = setInterval(checkLanguageCookie, 5000);
    
    // Initialize focus for accessibility
    const initA11y = () => {
      // Add class to body when using keyboard navigation
      const handleFirstTab = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          document.body.classList.add('user-is-tabbing');
          window.removeEventListener('keydown', handleFirstTab);
        }
      };
      
      window.addEventListener('keydown', handleFirstTab);
    };
    
    initA11y();
    
    return () => {
      // Cleanup
      document.body.classList.remove('user-is-tabbing');
      clearInterval(intervalId);
    };
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