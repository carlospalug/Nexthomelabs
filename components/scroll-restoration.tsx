"use client";

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export function ScrollRestoration() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Store scroll position before leaving the page
      const handleBeforeUnload = () => {
        const scrollPosition = window.scrollY;
        sessionStorage.setItem(
          `scrollPosition-${pathname}${searchParams}`,
          scrollPosition.toString()
        );
      };

      // Restore scroll position when returning to the page
      const restoreScrollPosition = () => {
        const savedPosition = sessionStorage.getItem(
          `scrollPosition-${pathname}${searchParams}`
        );
        if (savedPosition) {
          window.scrollTo(0, parseInt(savedPosition));
          // Clear the stored position after restoration
          sessionStorage.removeItem(`scrollPosition-${pathname}${searchParams}`);
        }
      };

      window.addEventListener('beforeunload', handleBeforeUnload);
      // Use requestAnimationFrame to ensure DOM is ready
      requestAnimationFrame(restoreScrollPosition);

      return () => {
        window.removeEventListener('beforeunload', handleBeforeUnload);
      };
    }
  }, [pathname, searchParams]);

  return null;
}
