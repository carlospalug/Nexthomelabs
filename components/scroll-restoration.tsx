"use client";

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export function ScrollRestoration() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Special handling for research section
      const isResearchPage = pathname?.includes('/research');

      // Function to restore scroll position
      const restoreScrollPosition = () => {
        // Construct the storage key
        const storageKey = `scrollPosition-${pathname}${searchParams}`;
        const savedPosition = sessionStorage.getItem(storageKey);

        if (savedPosition) {
          // For research pages, use a longer delay to ensure content is loaded
          const delay = isResearchPage ? 300 : 100;
          
          setTimeout(() => {
            window.scrollTo({
              top: parseInt(savedPosition),
              behavior: 'auto' // Use 'auto' instead of 'smooth' for instant scrolling
            });
            
            // Remove the stored position after restoration
            // For research pages, wait longer before removing
            setTimeout(() => {
              sessionStorage.removeItem(storageKey);
            }, isResearchPage ? 1000 : 500);
          }, delay);
        }
      };

      // Enhanced popstate handler for back/forward navigation
      const handlePopState = () => {
        restoreScrollPosition();
      };
      
      // Handle clicks on research section links
      const handleResearchClicks = () => {
        const researchLinks = document.querySelectorAll('a[href^="/research"]');
        
        researchLinks.forEach(link => {
          link.addEventListener('click', () => {
            const scrollPosition = window.scrollY;
            sessionStorage.setItem(
              `scrollPosition-${pathname}${searchParams}`,
              scrollPosition.toString()
            );
          });
        });
      };
      
      // Attempt to restore scroll position on initial load
      if (window.performance && 
          window.performance.navigation.type === window.performance.navigation.TYPE_BACK_FORWARD) {
        restoreScrollPosition();
      }
      
      // Set up event listeners
      window.addEventListener('popstate', handlePopState);
      
      // Run once to set up research link handlers
      handleResearchClicks();
      
      // Set up mutation observer to handle dynamically loaded research links
      const observer = new MutationObserver(mutations => {
        for (const mutation of mutations) {
          if (mutation.type === 'childList') {
            handleResearchClicks();
          }
        }
      });
      
      observer.observe(document.body, { 
        childList: true, 
        subtree: true 
      });
      
      return () => {
        window.removeEventListener('popstate', handlePopState);
        observer.disconnect();
      };
    }
  }, [pathname, searchParams]);

  return null;
}