import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Domain configurations
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
  const url = request.nextUrl;
  const hostname = request.headers.get('host') || '';
  const domain = hostname.split(':')[0]; // Remove port if present

  // Skip middleware for static export
  if (process.env.NEXT_EXPORT) {
    return NextResponse.next();
  }

  // Skip middleware for localhost
  if (hostname.includes('localhost')) {
    const response = NextResponse.next();
    const config = DOMAIN_CONFIG['localhost'];
    
    // Add custom headers for local development
    response.headers.set('x-site-region', config.region);
    response.headers.set('x-site-location', config.location);
    response.headers.set('x-site-title', config.title);
    response.headers.set('x-site-description', config.description);
    
    return response;
  }

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

  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next|_static|_vercel|[\\w-]+\\.\\w+).*)',
  ],
};
