import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getLanguageFromLocation, SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE, COUNTRY_LANGUAGE_MAP } from './lib/location';

// Define content domain configurations
const DOMAIN_CONFIG = {
  'nexthomelabs.com': {
    title: 'NextHomeLabs | Leading African AI & Blockchain Innovation Hub',
    description: 'Africa\'s premier AI and blockchain innovation hub, transforming industries with cutting-edge technology solutions.',
    region: 'Africa',
    location: 'Made in Africa'
  },
  'nexthomelabs.ug': {
    title: 'NextHomeLabs Uganda | Leading Ugandan AI & Blockchain Innovation Hub',
    description: 'Uganda\'s premier AI and blockchain innovation hub, transforming industries with cutting-edge technology solutions.',
    region: 'Uganda',
    location: 'Made in Uganda'
  },
  'localhost': {
    title: 'NextHomeLabs | Development',
    description: 'NextHomeLabs development environment',
    region: 'Development',
    location: 'Local Development'
  }
};

// List of allowed domains
const ALLOWED_DOMAINS = [...Object.keys(DOMAIN_CONFIG), 'localhost:3000'];
const PRIMARY_DOMAIN = 'nexthomelabs.com';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone(); // Clone URL object to modify
  const hostname = request.headers.get('host') || '';
  const domain = hostname.split(':')[0]; // Remove port if present
  
  // Skip middleware for API routes and static files
  if (
    url.pathname.startsWith('/api') ||
    url.pathname.startsWith('/_next') || 
    url.pathname.startsWith('/static') ||
    url.pathname.includes('.')
  ) {
    return NextResponse.next();
  }
  
  // Skip middleware for static export
  if (process.env.NEXT_EXPORT) {
    return NextResponse.next();
  }
  
  // Handle language routing
  // Detect accepted languages from the Accept-Language header
  const acceptLanguageHeader = request.headers.get('accept-language') || '';
  const userLanguages = acceptLanguageHeader.split(',').map(lang => lang.split(';')[0].split('-')[0]);
  
  // Detect country from GeoIP (Vercel provides this, or use a fallback)
  const country = request.geo?.country || '';
  
  // Extract the current language from the URL path if it exists
  const pathname = url.pathname;
  const pathnameSegments = pathname.split('/').filter(Boolean);
  const currentLang = pathnameSegments[0];
  
  // Check if the first segment is a supported language
  const isLanguageInPath = SUPPORTED_LANGUAGES.includes(currentLang);
  
  // If it's not already in the path, determine the language to use
  if (!isLanguageInPath) {
    // Check for language cookie first
    const languageCookie = request.cookies.get('NEXT_LOCALE')?.value;
    if (languageCookie && SUPPORTED_LANGUAGES.includes(languageCookie)) {
      // Don't redirect, just pass the language in headers
      const response = NextResponse.next();
      response.headers.set('x-detected-language', languageCookie);
      return response;
    }
    
    // Priority: 1. Country based mapping
    let detectedLanguage = country && COUNTRY_LANGUAGE_MAP[country] ? COUNTRY_LANGUAGE_MAP[country] : '';
    
    // 2. Browser preference that we support
    if (!detectedLanguage) {
      const preferredLanguage = userLanguages.find(lang => SUPPORTED_LANGUAGES.includes(lang));
      if (preferredLanguage) {
        detectedLanguage = preferredLanguage;
      }
    }
    
    // 3. Default language
    if (!detectedLanguage || !SUPPORTED_LANGUAGES.includes(detectedLanguage)) {
      detectedLanguage = DEFAULT_LANGUAGE;
    }
    
    // Pass the detected language in headers instead of redirecting
    const response = NextResponse.next();
    response.headers.set('x-detected-language', detectedLanguage);
    return response;
  }
  
  // Domain handling
  // Check if the domain is allowed
  if (!ALLOWED_DOMAINS.includes(domain) && !hostname.includes('localhost')) {
    return NextResponse.redirect(`https://${PRIMARY_DOMAIN}${url.pathname}${url.search}`);
  }
  
  // Get domain-specific configuration
  const config = DOMAIN_CONFIG[domain as keyof typeof DOMAIN_CONFIG] || DOMAIN_CONFIG['localhost'];
  
  // Clone the response
  const response = NextResponse.next();
  
  // Add custom headers for domain-specific content
  response.headers.set('x-site-region', config.region);
  response.headers.set('x-site-location', config.location);
  response.headers.set('x-site-title', config.title);
  response.headers.set('x-site-description', config.description);
  
  // Add detected language to headers
  if (isLanguageInPath) {
    response.headers.set('x-detected-language', currentLang);
  }
  
  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next|_static|_vercel|[\\w-]+\\.\\w+).*)',
  ],
};