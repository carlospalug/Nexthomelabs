import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { ClientLayout } from "@/components/client-layout";
import { BackToTopButton } from '@/components/BackToTopButton';
import { ScrollRestoration } from '@/components/scroll-restoration';
import { LanguageProvider } from '@/lib/language-context';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

// Move JSON-LD to a separate constant to avoid hydration issues
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "NextHomeLabs",
  "alternateName": ["Next Home Labs", "NHL Tech", "NextLabs Africa"],
  "url": "https://nexthomelabs.com",
  "logo": "https://i.ibb.co/HNHDVZS/nhl934-e559d97359102662b413-1.png",
  "sameAs": [
    "https://twitter.com/NextHomeLabs",
    "https://linkedin.com/company/nexthomelabs",
    "https://github.com/nexthomelabs"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "UG",
    "addressLocality": "Kampala"
  },
  "description": "Africa's premier AI and blockchain innovation hub, transforming industries with cutting-edge technology solutions.",
  "areaServed": "Africa",
  "knowsAbout": [
    "Artificial Intelligence",
    "Blockchain Technology",
    "Machine Learning",
    "Enterprise Solutions",
    "Digital Transformation"
  ]
};

export function generateMetadata(): Metadata {
  // Use static default values instead of headers()
  const region = 'Africa';
  const location = 'Made in Africa';
  const title = 'NextHomeLabs | Leading African AI & Blockchain Innovation Hub';
  const description = 'Africa\'s premier AI and blockchain innovation hub, transforming industries with cutting-edge technology solutions.';
  const detectedLanguage = 'en';
  
  const metadataBase = new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://nexthomelabs.com');
  
  // Build language alternates
  const languages = ['en', 'fr', 'sw', 'lg'];
  const alternates: Record<string, string> = {};
  
  languages.forEach(lang => {
    if (lang === 'en') {
      alternates[lang] = `${metadataBase}`;
    } else {
      alternates[lang] = `${metadataBase}/${lang}`;
    }
  });
  
  return {
    metadataBase,
    title: {
      default: title,
      template: '%s | NextHomeLabs'
    },
    description,
    keywords: [
      'AI in Africa',
      'Blockchain Solutions',
      'Web Development Uganda',
      'Enterprise Systems',
      'CentGPT',
      'African Tech Innovation',
      region + ' Technology',
      location
    ],
    authors: [{ name: 'NextHomeLabs Team' }],
    openGraph: {
      type: 'website',
      siteName: 'NextHomeLabs',
      locale: detectedLanguage,
      url: metadataBase.toString(),
      title: title,
      description: description,
      images: [
        {
          url: 'https://i.ibb.co/HNHDVZS/nhl934-e559d97359102662b413-1.png',
          width: 1200,
          height: 630,
          alt: 'NextHomeLabs - Innovation at Your Fingertips',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@NextHomeLabs',
      creator: '@NextHomeLabs',
      title: title,
      description: description,
      images: ['https://i.ibb.co/HNHDVZS/nhl934-e559d97359102662b413-1.png'],
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'googled478c25ec6571d47',
    },
    alternates: {
      canonical: metadataBase.toString(),
      languages: alternates
    },
    manifest: '/site.webmanifest',
    appleWebApp: {
      title: 'NextHomeLabs',
      statusBarStyle: 'black-translucent',
      startupImage: [
        {
          url: '/apple-splash-2048-2732.jpg',
          media: '(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)'
        }
      ],
      capable: true,
    },
    viewport: {
      width: 'device-width',
      initialScale: 1,
      maximumScale: 5,
      minimumScale: 1,
    },
    themeColor: '#000000',
    formatDetection: {
      telephone: true,
      date: true,
      address: true,
      email: true,
      url: true,
    }
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Use a static default language
  const defaultLanguage = 'en';
  
  return (
    <html lang={defaultLanguage} suppressHydrationWarning>
      <head>
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="canonical" href="https://nexthomelabs.com" />
        
        {/* Favicon and App Icons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#00E6E6" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Regional Meta Tags */}
        <meta name="geo.region" content="UG" />
        <meta name="geo.placename" content="Kampala" />
        <meta name="geo.position" content="0.347596;32.582520" />
        <meta name="ICBM" content="0.347596, 32.582520" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="news_keywords" content="African Technology, AI Africa, Blockchain Africa, Innovation Hub, Uganda Tech" />
        <meta name="application-name" content="NextHomeLabs" />
        
        {/* Language alternates */}
        <link rel="alternate" hrefLang="en" href="https://nexthomelabs.com" />
        <link rel="alternate" hrefLang="fr" href="https://nexthomelabs.com/fr" />
        <link rel="alternate" hrefLang="sw" href="https://nexthomelabs.com/sw" />
        <link rel="alternate" hrefLang="lg" href="https://nexthomelabs.com/lg" />
        <link rel="alternate" hrefLang="x-default" href="https://nexthomelabs.com" />
      </head>
      <body className={`${inter.className} overflow-x-hidden`} suppressHydrationWarning>
        <Script
          id="schema-org"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="register-sw"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').then(
                    function(registration) {
                      console.log('ServiceWorker registration successful');
                    },
                    function(err) {
                      console.log('ServiceWorker registration failed: ', err);
                    }
                  );
                });
              }
            `,
          }}
        />
        <LanguageProvider>
          <ClientLayout defaultLanguage={defaultLanguage}>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem={false}
              storageKey="nexthome-theme"
            >
              <ScrollRestoration />
              {children}
              <BackToTopButton />
            </ThemeProvider>
          </ClientLayout>
        </LanguageProvider>
      </body>
    </html>
  );
}