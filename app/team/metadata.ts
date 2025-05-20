import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Team | NextHomeLabs',
  description: 'Meet the innovative minds behind NextHomeLabs. Our team comprises experts in AI, blockchain, and technology solutions, dedicated to driving technological advancements in Africa.',
  keywords: [
    'NextHomeLabs Team',
    'AI Experts Africa',
    'Blockchain Specialists',
    'Technology Innovators',
    'Uganda Tech Team',
    'AI Development Africa',
    'Meet the Team',
    'Tech Leadership',
    'African Tech Experts'
  ],
  openGraph: {
    type: 'website',
    url: 'https://nexthomelabs.com/team',
    title: 'Team | NextHomeLabs',
    description: 'Meet the innovative minds behind NextHomeLabs. Our team comprises experts in AI, blockchain, and technology solutions, dedicated to driving technological advancements in Africa.',
    images: [
      {
        url: 'https://nexthomelabs.com/team/team-og-image.jpg', // Replace with a specific image for the team page
        width: 1200,
        height: 630,
        alt: 'NextHomeLabs Team',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Team | NextHomeLabs',
    description: 'Meet the innovative minds behind NextHomeLabs. Our team comprises experts in AI, blockchain, and technology solutions, dedicated to driving technological advancements in Africa.',
    images: ['https://nexthomelabs.com/team/team-twitter-card.jpg'], // Replace with a specific image for the team page
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
  alternates: {
    canonical: 'https://nexthomelabs.com/team',
  },
};
