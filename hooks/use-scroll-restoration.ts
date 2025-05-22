"use client";

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export function useScrollRestoration() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Store scroll position before navigating away
    const handleBeforeNavigate = () => {
      const scrollPosition = window.scrollY;
      sessionStorage.setItem(
        `scrollPosition-${pathname}${searchParams}`,
        scrollPosition.toString()
      );
    };

    // Restore scroll position when returning
    const restoreScrollPosition = () => {
      const savedPosition = sessionStorage.getItem(
        `scrollPosition-${pathname}${searchParams}`
      );
      if (savedPosition) {
        // Add a small delay to ensure the DOM is ready
        setTimeout(() => {
          window.scrollTo({
            top: parseInt(savedPosition),
            behavior: 'instant'
          });
          // Clear the stored position after restoration
          sessionStorage.removeItem(`scrollPosition-${pathname}${searchParams}`);
        }, 100);
      }
    };

    // Add event listeners
    window.addEventListener('beforeunload', handleBeforeNavigate);
    window.addEventListener('popstate', restoreScrollPosition);

    // Initial scroll restoration
    if (window.performance && window.performance.navigation.type === window.performance.navigation.TYPE_BACK_FORWARD) {
      restoreScrollPosition();
    }

    return () => {
      window.removeEventListener('beforeunload', handleBeforeNavigate);
      window.removeEventListener('popstate', restoreScrollPosition);
    };
  }, [pathname, searchParams]);
}