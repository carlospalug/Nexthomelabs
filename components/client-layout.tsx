'use client'

import React from 'react'

interface ClientLayoutProps {
  children: React.ReactNode;
  detectedLanguage: string;
}

export function ClientLayout({ children, detectedLanguage }: ClientLayoutProps) {
  // Now we have the detectedLanguage as a prop, not from headers()
  return (
    <>
      {children}
    </>
  )
}