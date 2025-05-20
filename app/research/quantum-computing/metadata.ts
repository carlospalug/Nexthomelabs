import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quantum Computing & AI Research | NextHomeLabs',
  description: 'Explore NextHomeLabs\' groundbreaking research in quantum computing and artificial intelligence. Learn how we\'re combining these technologies to revolutionize computation.',
  keywords: [
    'Quantum Computing',
    'Quantum AI',
    'Quantum Machine Learning',
    'Quantum Algorithms',
    'Quantum Research',
    'AI Innovation',
    'NextHomeLabs Research',
    'African Quantum Computing',
    'Quantum Technology',
    'Future of Computing'
  ],
  openGraph: {
    type: 'website',
    title: 'Quantum Computing & AI Research | NextHomeLabs',
    description: 'Explore NextHomeLabs\' groundbreaking research in quantum computing and artificial intelligence. Learn how we\'re combining these technologies to revolutionize computation.',
    images: [
      {
        url: 'https://nexthomelabs.com/images/quantum-computing-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Quantum Computing Research at NextHomeLabs',
      },
    ],
    siteName: 'NextHomeLabs',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quantum Computing & AI Research | NextHomeLabs',
    description: 'Explore NextHomeLabs\' groundbreaking research in quantum computing and artificial intelligence. Learn how we\'re combining these technologies to revolutionize computation.',
    images: ['https://nexthomelabs.com/images/quantum-computing-twitter.jpg'],
    creator: '@NextHomeLabs',
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
