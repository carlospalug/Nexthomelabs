"use client";

import { useEffect, useRef } from 'react';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { initScrollAnimations } from '@/lib/utils';

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const animationsInitialized = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Initialize scroll animations
    if (!animationsInitialized.current) {
      initScrollAnimations();
      animationsInitialized.current = true;
    }

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
    
    // Add smooth navigation transitions
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.href && anchor.href.startsWith(window.location.origin) && !anchor.hasAttribute('target')) {
        // Store current scroll position
        sessionStorage.setItem(
          `scrollPosition-${pathname}${searchParams}`,
          window.scrollY.toString()
        );
      }
    };

    document.addEventListener('click', handleLinkClick);
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      window.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('click', handleLinkClick);
      document.body.style.overscrollBehavior = '';
    };
  }, [pathname, searchParams]);

  return <>{children}</>;
}