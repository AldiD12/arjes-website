import type { MetadataRoute } from 'next';
import { seoLandingPages } from '@/lib/seo-pages';
import { SITE_URL, languageAlternates, locales, defaultLocale } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-08-13');

  const homePages: MetadataRoute.Sitemap = locales.map((locale) => ({
    url: `${SITE_URL}/${locale}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: locale === defaultLocale ? 1 : 0.9,
    alternates: { languages: languageAlternates },
  }));

  const newLandingPages: MetadataRoute.Sitemap = seoLandingPages.map((page) => ({
    url: `${SITE_URL}/${page.locale}/${page.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  return [
    ...homePages,
    {
      url: `${SITE_URL}/en/private-albania-tours`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/de/albanien-rundreise`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/de/albanien-rundreise-7-tage`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/de/albanien-rundreise-10-tage`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/de/albanien-rundreise-14-tage`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    ...newLandingPages,
  ];
}
