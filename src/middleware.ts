import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['en', 'de'];
const defaultLocale = 'en';

function getLocale(request: NextRequest) {
  const acceptLanguage = request.headers.get('accept-language');
  if (acceptLanguage) {
    if (acceptLanguage.includes('de')) {
      return 'de';
    }
  }
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Check if there is any supported locale in the pathname
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  
  // e.g. incoming request is /
  // The new URL is now /en or /de
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next) and public folder files
    '/((?!_next|photos|uploads|screenshots|favicon.ico|api).*)',
  ],
};
