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
    title: 'Arjes — Private Guide in Albania | Tirana, Berat & Beyond',
    description:
      'Licensed private guide in Albania. Walking tours of Tirana, multi-day journeys across the country, small groups and unhurried days. Taking inquiries for summer and autumn 2026.',
    ogLocale: 'en_GB',
  },
  de: {
    title: 'Arjes — Deutschsprachiger Reiseleiter in Albanien | Tirana & mehr',
    description:
      'Lizenzierter privater Reiseleiter in Albanien mit deutschsprachigen Touren. Stadtführungen durch Tirana, mehrtägige Reisen durch das Land, kleine Gruppen. Anfragen für Sommer und Herbst 2026.',
    ogLocale: 'de_DE',
  },
};
