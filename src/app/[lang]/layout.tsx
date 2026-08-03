import type { Metadata } from "next";
import { getDictionary } from "@/dictionaries";
import { TranslationProvider } from "@/contexts/TranslationContext";
import { SITE_URL, languageAlternates, resolveLocale, seo } from "@/lib/site";

import "../globals.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }> | { lang: string };
}): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);
  const locale = resolveLocale(resolvedParams.lang);
  const { title, description, ogLocale } = seo[locale];

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}/${locale}`,
      languages: languageAlternates,
    },
    openGraph: {
      type: "website",
      siteName: "Arjes",
      url: `${SITE_URL}/${locale}`,
      locale: ogLocale,
      title,
      description,
      images: [{ url: "/photos/berat-bridge.jpeg", width: 1200, height: 630, alt: "Berat, Albania" }],
    },
  };
}

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'de' }]
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }> | { lang: string };
}>) {
  const resolvedParams = await Promise.resolve(params);
  const locale = resolveLocale(resolvedParams.lang);
  const dict = await getDictionary(locale);

  return (
    <html lang={locale}>
      <body>
        <TranslationProvider dictionary={dict}>
          {children}
        </TranslationProvider>
      </body>
    </html>
  );
}
