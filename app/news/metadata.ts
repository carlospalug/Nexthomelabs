import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News & Updates | NextHomeLabs',
  description: 'Stay informed about the latest developments in AI technology, blockchain innovations, and NextHomeLabs solutions. Read our latest news and updates.',
  keywords: [
    'AI News',
    'Technology Updates',
    'NextHomeLabs News',
    'African Tech News',
    'AI Innovation News',
    'Blockchain Updates',
    'Tech Industry News'
  ],
  openGraph: {
    title: 'News & Updates | NextHomeLabs',
    description: 'Stay informed about the latest developments in AI technology and NextHomeLabs solutions.',
    images: [
      {
        url: 'https://nexthomelabs.com/images/news-og.jpg',
        width: 1200,
        height: 630,
        alt: 'NextHomeLabs News & Updates',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'News & Updates | NextHomeLabs',
    description: 'Stay informed about the latest developments in AI technology and NextHomeLabs solutions.',
    images: ['https://nexthomelabs.com/images/news-twitter.jpg'],
  },
};
