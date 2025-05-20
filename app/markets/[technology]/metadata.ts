import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Technology Market Analysis | NextHomeLabs',
    template: '%s Market Analysis | NextHomeLabs'
  },
  description: 'Explore detailed market analysis of emerging technologies including AI, blockchain, and machine learning. Get insights on market size, adoption rates, and future trends.',
  keywords: [
    'Technology Market Analysis',
    'AI Market Trends',
    'Blockchain Growth',
    'Machine Learning Adoption',
    'Market Research',
    'Technology Insights',
    'NextHomeLabs Markets'
  ],
  openGraph: {
    type: 'website',
    title: 'Technology Market Analysis | NextHomeLabs',
    description: 'Explore detailed market analysis of emerging technologies including AI, blockchain, and machine learning.',
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
    title: 'Technology Market Analysis | NextHomeLabs',
    description: 'Explore detailed market analysis of emerging technologies including AI, blockchain, and machine learning.',
    images: ['https://nexthomelabs.com/images/market-analysis-twitter.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
