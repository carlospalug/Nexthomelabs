import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blockchain Basics Research | NextHomeLabs',
  description: 'Explore the fundamentals of blockchain technology with NextHomeLabs. Learn about decentralization, smart contracts, and how blockchain is revolutionizing industries across Africa.',
  keywords: [
    'Blockchain Basics',
    'Blockchain Technology',
    'Decentralization',
    'Smart Contracts',
    'Distributed Ledger',
    'Blockchain in Africa',
    'NextHomeLabs Research',
    'Blockchain Innovation',
    'Blockchain Solutions',
    'African Blockchain'
  ],
  openGraph: {
    type: 'website',
    title: 'Blockchain Basics Research | NextHomeLabs',
    description: 'Explore the fundamentals of blockchain technology with NextHomeLabs. Learn about decentralization, smart contracts, and blockchain innovation.',
    images: [
      {
        url: 'https://nexthomelabs.com/images/blockchain-basics-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Blockchain Research at NextHomeLabs',
      },
    ],
    siteName: 'NextHomeLabs',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blockchain Basics Research | NextHomeLabs',
    description: 'Explore the fundamentals of blockchain technology with NextHomeLabs. Learn about decentralization, smart contracts, and blockchain innovation.',
    images: ['https://nexthomelabs.com/images/blockchain-basics-twitter.jpg'],
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
