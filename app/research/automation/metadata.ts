import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Automation Research | NextHomeLabs',
  description: 'Discover how NextHomeLabs is revolutionizing industries through AI automation. Learn about our innovative solutions for process automation, efficiency, and digital transformation.',
  keywords: [
    'AI Automation',
    'Intelligent Automation',
    'Process Automation',
    'RPA',
    'Machine Learning',
    'African AI',
    'NextHomeLabs Research',
    'Digital Transformation',
    'Business Automation',
    'Smart Automation'
  ],
  openGraph: {
    type: 'website',
    title: 'AI Automation Research | NextHomeLabs',
    description: 'Discover how NextHomeLabs is revolutionizing industries through AI automation. Learn about our innovative solutions for process automation and efficiency.',
    images: [
      {
        url: 'https://nexthomelabs.com/images/ai-automation-og.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Automation Research at NextHomeLabs',
      },
    ],
    siteName: 'NextHomeLabs',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Automation Research | NextHomeLabs',
    description: 'Discover how NextHomeLabs is revolutionizing industries through AI automation. Learn about our innovative solutions for process automation and efficiency.',
    images: ['https://nexthomelabs.com/images/ai-automation-twitter.jpg'],
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
