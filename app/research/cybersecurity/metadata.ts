import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI for Cybersecurity Research | NextHomeLabs',
  description: 'Explore how NextHomeLabs leverages AI to revolutionize cybersecurity. Learn about our advanced threat detection, prevention, and response solutions.',
  keywords: [
    'AI Cybersecurity',
    'Threat Detection',
    'Security AI',
    'Machine Learning Security',
    'Cyber Defense',
    'African Cybersecurity',
    'NextHomeLabs Research',
    'Automated Security',
    'Threat Prevention',
    'AI Security Solutions'
  ],
  openGraph: {
    type: 'website',
    title: 'AI for Cybersecurity Research | NextHomeLabs',
    description: 'Explore how NextHomeLabs leverages AI to revolutionize cybersecurity. Learn about our advanced threat detection and prevention solutions.',
    images: [
      {
        url: 'https://nexthomelabs.com/images/ai-cybersecurity-og.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Cybersecurity Research at NextHomeLabs',
      },
    ],
    siteName: 'NextHomeLabs',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI for Cybersecurity Research | NextHomeLabs',
    description: 'Explore how NextHomeLabs leverages AI to revolutionize cybersecurity. Learn about our advanced threat detection and prevention solutions.',
    images: ['https://nexthomelabs.com/images/ai-cybersecurity-twitter.jpg'],
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
