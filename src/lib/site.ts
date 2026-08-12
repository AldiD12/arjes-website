export const SITE_URL = 'https://arjesguide.com';

export const locales = ['en', 'de'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export function resolveLocale(lang: string): Locale {
  return (locales as readonly string[]).includes(lang) ? (lang as Locale) : defaultLocale;
}

/** hreflang map shared by the sitemap and every page's <head>. */
export const languageAlternates = {
  en: `${SITE_URL}/en`,
  de: `${SITE_URL}/de`,
  'x-default': `${SITE_URL}/en`,
};

export const seo: Record<Locale, { title: string; description: string; ogLocale: string }> = {
  en: {
    title: 'Arjes — Private Albania Tours, Guides & Custom Journeys',
    description:
      'Private Albania journeys planned locally with trusted licensed guides, drivers and rental-car partners. Tirana tours, self-drive planning and custom multi-day trips.',
    ogLocale: 'en_GB',
  },
  de: {
    title: 'Arjes — Private Albanien-Rundreisen, Guides & Fahrer',
    description:
      'Private Albanien-Rundreisen, vor Ort geplant mit lizenzierten Guides, Fahrern und Mietwagenpartnern. Stadtführungen in Tirana, Selbstfahrerplanung und individuelle Reisen.',
    ogLocale: 'de_DE',
  },
};
