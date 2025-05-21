import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Our Team | NextHomeLabs',
    template: '%s | NextHomeLabs Team'
  },
  description: 'Meet the innovative minds behind NextHomeLabs. Our team of experts in AI, blockchain, and technology are driving innovation across Africa.',
  keywords: [
    'NextHomeLabs Team',
    'AI Experts Africa',
    'Technology Leaders',
    'African Innovation',
    'Tech Professionals Uganda',
    'NextHomeLabs Leadership'
  ],
  openGraph: {
    type: 'website',
    title: 'Our Team | NextHomeLabs',
    description: 'Meet the innovative minds behind NextHomeLabs. Our team of experts in AI, blockchain, and technology are driving innovation across Africa.',
    images: [
      {
        url: 'https://nexthomelabs.com/images/team-og.jpg',
        width: 1200,
        height: 630,
        alt: 'NextHomeLabs Team',
      },
    ],
    siteName: 'NextHomeLabs',
    locale: 'en_US',
    url: 'https://nexthomelabs.com/team',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Team | NextHomeLabs',
    description: 'Meet the innovative minds behind NextHomeLabs. Our team of experts in AI, blockchain, and technology are driving innovation across Africa.',
    images: ['https://nexthomelabs.com/images/team-twitter.jpg'],
    creator: '@NextHomeLabs',
    site: '@NextHomeLabs',
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
  verification: {
    google: 'googled478c25ec6571d47.html',
  },
  category: 'Team',
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}