import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Add a function to create ripple effect
export function createRipple(event: React.MouseEvent<HTMLElement>) {
  const button = event.currentTarget;
  
  // Create a ripple element
  const ripple = document.createElement('span');
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;
  
  // Position the ripple element
  ripple.style.width = ripple.style.height = `${diameter}px`;
  ripple.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
  ripple.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
  ripple.classList.add('ripple');
  
  // Remove any existing ripples
  const existingRipple = button.querySelector('.ripple');
  if (existingRipple) {
    existingRipple.remove();
  }
  
  // Add the ripple to the button
  button.appendChild(ripple);
  
  // Remove the ripple after the animation completes
  setTimeout(() => {
    ripple.remove();
  }, 600);
}

// Add a function to detect scroll and trigger animations
export function initScrollAnimations() {
  if (typeof window !== 'undefined') {
    const scrollElements = document.querySelectorAll('.scroll-reveal');
    
    const elementInView = (el: Element, dividend = 1) => {
      const elementTop = el.getBoundingClientRect().top;
      return (
        elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
      );
    };

    const displayScrollElement = (element: Element) => {
      element.classList.add('visible');
    };

    const handleScrollAnimation = () => {
      scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
          displayScrollElement(el);
        }
      });
    };

    window.addEventListener('scroll', handleScrollAnimation);
    handleScrollAnimation();

    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
    };
  }
}

// Get image placeholder color based on hex or team member
export function getPlaceholderColor(color: string | number) {
  // If it's a number (team member index), return one of our predefined colors
  if (typeof color === 'number') {
    const colors = [
      'rgb(6, 182, 212)', // cyan-500
      'rgb(16, 185, 129)', // emerald-500
      'rgb(139, 92, 246)', // violet-500
      'rgb(245, 158, 11)', // amber-500
      'rgb(244, 63, 94)', // rose-500
    ];
    return colors[color % colors.length];
  }
  
  // Otherwise, use the provided hex color
  return color;
}