import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Ethics & Bias Research | NextHomeLabs',
  description: 'Explore NextHomeLabs\' groundbreaking research in AI ethics and bias mitigation. Learn how we\'re building fair, transparent, and accountable AI systems for a better future.',
  keywords: [
    'AI Ethics',
    'Bias in AI',
    'Ethical AI Development',
    'AI Fairness',
    'AI Transparency',
    'Responsible AI',
    'AI Accountability',
    'African AI Ethics',
    'NextHomeLabs Research'
  ],
  openGraph: {
    type: 'website',
    title: 'AI Ethics & Bias Research | NextHomeLabs',
    description: 'Explore NextHomeLabs\' groundbreaking research in AI ethics and bias mitigation. Learn how we\'re building fair, transparent, and accountable AI systems.',
    images: [
      {
        url: 'https://nexthomelabs.com/images/ai-ethics-og.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Ethics Research at NextHomeLabs',
      },
    ],
    siteName: 'NextHomeLabs',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Ethics & Bias Research | NextHomeLabs',
    description: 'Explore NextHomeLabs\' groundbreaking research in AI ethics and bias mitigation. Learn how we\'re building fair, transparent, and accountable AI systems.',
    images: ['https://nexthomelabs.com/images/ai-ethics-twitter.jpg'],
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
