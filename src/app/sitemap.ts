import type { MetadataRoute } from 'next';
import { SITE_URL, languageAlternates, locales, defaultLocale } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return locales.map((locale) => ({
    url: `${SITE_URL}/${locale}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: locale === defaultLocale ? 1 : 0.9,
    alternates: { languages: languageAlternates },
  }));
}
