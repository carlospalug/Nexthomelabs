"use client";

import { useEffect, useRef, useState } from 'react';

export function useRippleEffect() {
  return (event: React.MouseEvent<HTMLElement>) => {
    const button = event.currentTarget;
    
    // Create a ripple element
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    
    // Position the circle element
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
    circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
    circle.className = 'ripple';
    
    // Remove existing ripples
    const existingRipple = button.getElementsByClassName('ripple')[0];
    if (existingRipple) {
      existingRipple.remove();
    }
    
    // Add the ripple to the button
    button.appendChild(circle);
    
    // Remove the ripple after animation completes
    setTimeout(() => {
      if (circle && circle.parentElement === button) {
        circle.remove();
      }
    }, 600);
  };
}

export function useScrollReveal() {
  useEffect(() => {
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
    // Trigger once on initial load
    handleScrollAnimation();

    return () => window.removeEventListener('scroll', handleScrollAnimation);
  }, []);
}

export function useHoverAnimation() {
  const [isHovered, setIsHovered] = useState(false);
  
  const props = {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
    className: `transition-transform duration-200 ${isHovered ? 'scale-105' : ''}`
  };
  
  return { isHovered, hoverProps: props };
}