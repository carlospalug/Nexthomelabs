import { Suspense } from 'react';
import { MarketAnalysisClient } from './market-analysis-client';

export const dynamicParams = false;

export function generateStaticParams() {
  return [
    { technology: 'blockchain' },
    { technology: 'ai' },
    { technology: 'ai-agents' },
    { technology: 'machine-learning' }
  ];
}

export default function MarketAnalysis() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-[#00E6E6] border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <MarketAnalysisClient />
    </Suspense>
  );
}
