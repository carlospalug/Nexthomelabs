import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export function useScrollRestoration() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Store scroll position before leaving the page
    const handleBeforeUnload = () => {
      const scrollPosition = window.scrollY;
      sessionStorage.setItem(
        `scrollPosition-${pathname}${searchParams}`,
        scrollPosition.toString()
      );
    };

    // Function to handle back/forward navigation
    const handlePopState = () => {
      // Add a small delay to ensure all content has loaded
      setTimeout(restoreScrollPosition, 100);
    };

    // Restore scroll position when returning
    const restoreScrollPosition = () => {
      const savedPosition = sessionStorage.getItem(
        `scrollPosition-${pathname}${searchParams}`
      );
      
      if (savedPosition) {
        window.scrollTo({
          top: parseInt(savedPosition),
          behavior: 'auto' // Use 'auto' instead of 'smooth' for instant scrolling
        });
        
        // Don't remove the position from storage yet, as the page might still be loading
        setTimeout(() => {
          sessionStorage.removeItem(`scrollPosition-${pathname}${searchParams}`);
        }, 1000);
      }
    };

    // Save position on link clicks
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && !link.getAttribute('href')?.startsWith('#') && 
          !link.getAttribute('target') && link.getAttribute('href') !== pathname) {
        // Store position when navigating away
        const scrollPosition = window.scrollY;
        sessionStorage.setItem(
          `scrollPosition-${pathname}${searchParams}`,
          scrollPosition.toString()
        );
      }
    };

    // Save on research section item clicks
    const handleResearchClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('.research-section') || 
          pathname.includes('/research') || 
          target.closest('[data-section="research"]')) {
        const scrollPosition = window.scrollY;
        sessionStorage.setItem(
          `scrollPosition-${pathname}${searchParams}`,
          scrollPosition.toString()
        );
      }
    };

    // Add event listeners
    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('popstate', handlePopState);
    document.addEventListener('click', handleLinkClick);
    document.addEventListener('click', handleResearchClick);
    
    // Initial restoration on mount
    restoreScrollPosition();

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('popstate', handlePopState);
      document.removeEventListener('click', handleLinkClick);
      document.removeEventListener('click', handleResearchClick);
    };
  }, [pathname, searchParams]);
}