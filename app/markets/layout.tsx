import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Market Analysis | NextHomeLabs',
    template: '%s | NextHomeLabs Market Analysis'
  },
  description: 'Explore comprehensive market analysis of AI, blockchain, and machine learning technologies. Stay informed about industry trends, market size, and adoption rates.',
  keywords: ['AI Market Analysis', 'Blockchain Market Trends', 'Machine Learning Growth', 'Technology Market Research', 'NextHomeLabs Markets'],
  openGraph: {
    title: 'Market Analysis | NextHomeLabs',
    description: 'Explore comprehensive market analysis of AI, blockchain, and machine learning technologies.',
    images: [
      {
        url: 'https://nexthomelabs.com/images/market-analysis-og.jpg',
        width: 1200,
        height: 630,
        alt: 'NextHomeLabs Market Analysis',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Market Analysis | NextHomeLabs',
    description: 'Explore comprehensive market analysis of AI, blockchain, and machine learning technologies.',
    images: ['https://nexthomelabs.com/images/market-analysis-twitter.jpg'],
  },
};

export default function MarketLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
