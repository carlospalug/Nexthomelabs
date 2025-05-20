import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Future of AI Research | NextHomeLabs',
  description: 'Explore the future of artificial intelligence with NextHomeLabs. Learn about emerging AI trends, innovations, and how we\'re shaping the next generation of AI technology.',
  keywords: [
    'Future of AI',
    'AI Innovation',
    'Artificial Intelligence',
    'AI Trends',
    'Machine Learning Future',
    'African AI',
    'NextHomeLabs Research',
    'AI Development',
    'AI Technology',
    'AI Advancement'
  ],
  openGraph: {
    type: 'website',
    title: 'Future of AI Research | NextHomeLabs',
    description: 'Explore the future of artificial intelligence with NextHomeLabs. Learn about emerging AI trends and innovations.',
    images: [
      {
        url: 'https://nexthomelabs.com/images/future-ai-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Future of AI Research at NextHomeLabs',
      },
    ],
    siteName: 'NextHomeLabs',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Future of AI Research | NextHomeLabs',
    description: 'Explore the future of artificial intelligence with NextHomeLabs. Learn about emerging AI trends and innovations.',
    images: ['https://nexthomelabs.com/images/future-ai-twitter.jpg'],
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
