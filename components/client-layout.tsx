"use client";

import { useEffect } from 'react';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Function to restore scroll position
    const restoreScrollPosition = () => {
      const savedPosition = sessionStorage.getItem(`scrollPosition-${pathname}`);
      if (savedPosition) {
        // Add a small delay to ensure the DOM is ready
        setTimeout(() => {
          window.scrollTo({
            top: parseInt(savedPosition),
            behavior: 'instant'
          });
          // Clear the stored position after restoration
          sessionStorage.removeItem(`scrollPosition-${pathname}`);
        }, 100);
      }
    };

    // Handle navigation events
    const handleRouteChange = () => {
      if (window.performance && window.performance.navigation.type === window.performance.navigation.TYPE_BACK_FORWARD) {
        restoreScrollPosition();
      }
    };

    // Listen for route changes
    window.addEventListener('popstate', handleRouteChange);
    
    // Initial check for back/forward navigation
    if (window.performance && window.performance.navigation.type === window.performance.navigation.TYPE_BACK_FORWARD) {
      restoreScrollPosition();
    }

    // Prevent unwanted touch behaviors
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    };

    // Prevent overscroll/bounce
    document.body.style.overscrollBehavior = 'none';
    
    // Add event listeners
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      window.removeEventListener('touchmove', handleTouchMove);
      document.body.style.overscrollBehavior = '';
    };
  }, [pathname]);

  return <>{children}</>;
}
