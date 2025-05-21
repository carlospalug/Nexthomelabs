'use client'

import React from 'react'

interface ClientLayoutProps {
  children: React.ReactNode;
  defaultLanguage: string; // Changed from detectedLanguage to defaultLanguage to match app/layout.tsx
}

export function ClientLayout({ children, defaultLanguage }: ClientLayoutProps) {
  // Now we have the defaultLanguage as a prop, matching how it's passed in layout.tsx
  return (
    <>
      {children}
    </>
  )
}