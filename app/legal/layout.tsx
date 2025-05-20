// Update the layout to handle hydration properly
import { Suspense } from 'react';

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4">
        <Suspense fallback={
          <div className="min-h-screen bg-black flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-[#00E6E6] border-t-transparent rounded-full animate-spin" />
          </div>
        }>
          {children}
        </Suspense>
      </div>
    </div>
  );
}
