import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blockchain Applications Research | NextHomeLabs',
  description: 'Explore real-world blockchain applications with NextHomeLabs. Learn how we\'re implementing blockchain solutions across industries in Africa.',
  keywords: [
    'Blockchain Applications',
    'DeFi',
    'Smart Contracts',
    'Supply Chain',
    'Digital Identity',
    'African Blockchain',
    'NextHomeLabs Research',
    'Enterprise Blockchain',
    'Blockchain Solutions',
    'Blockchain Innovation'
  ],
  openGraph: {
    type: 'website',
    title: 'Blockchain Applications Research | NextHomeLabs',
    description: 'Explore real-world blockchain applications with NextHomeLabs. Learn how we\'re implementing blockchain solutions across industries.',
    images: [
      {
        url: 'https://nexthomelabs.com/images/blockchain-applications-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Blockchain Applications Research at NextHomeLabs',
      },
    ],
    siteName: 'NextHomeLabs',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blockchain Applications Research | NextHomeLabs',
    description: 'Explore real-world blockchain applications with NextHomeLabs. Learn how we\'re implementing blockchain solutions across industries.',
    images: ['https://nexthomelabs.com/images/blockchain-applications-twitter.jpg'],
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
