import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { CommercialLandingPage } from '@/components/seo/CommercialLandingPage';
import { getSeoLandingPage, seoLandingPages } from '@/lib/seo-pages';
import { SITE_URL } from '@/lib/site';

type PageParams = {
  lang: string;
  slug: string;
};

export function generateStaticParams({ params }: { params: { lang: string } }) {
  return seoLandingPages
    .filter((page) => page.locale === params.lang)
    .map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const page = getSeoLandingPage(lang, slug);

  if (!page) {
    notFound();
  }

  const pageUrl = `${SITE_URL}/${page.locale}/${page.slug}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: pageUrl,
      languages: {
        [page.locale]: pageUrl,
        'x-default': pageUrl,
      },
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: 'website',
      siteName: 'Arjes',
      url: pageUrl,
      locale: page.locale === 'de' ? 'de_DE' : 'en_GB',
      title: page.ogTitle,
      description: page.metaDescription,
      images: [{ url: page.hero.image, alt: page.hero.imageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.ogTitle,
      description: page.metaDescription,
      images: [page.hero.image],
    },
  };
}

export default async function SeoLandingPageRoute({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { lang, slug } = await params;
  const page = getSeoLandingPage(lang, slug);

  if (!page) {
    notFound();
  }

  return <CommercialLandingPage page={page} />;
}
