import type { Locale } from '@/lib/site';

export type PageCard = {
  number: string;
  title: string;
  meta: string;
  body: string;
};

export type ImageCard = {
  eyebrow: string;
  title: string;
  line: string;
  body: string;
  image: string;
  alt: string;
  href: string;
  cta: string;
};

export type DetailItem = {
  title: string;
  body: string;
};

export type Fact = {
  term: string;
  detail: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export type SeoLandingPage = {
  locale: Locale;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  breadcrumb: string;
  serviceName: string;
  serviceTypes: string[];
  audience: string;
  nav: {
    options: string;
    ideas: string;
    details: string;
    questions: string;
  };
  headerCta: string;
  hero: {
    eyebrow: string;
    title: string;
    lede: string;
    primaryCta: string;
    secondaryCta: string;
    facts: string[];
    image: string;
    imageAlt: string;
    imageCaption: string;
    note: string;
  };
  promise: {
    label: string;
    title: string;
    body: string;
  };
  options: {
    label: string;
    title: string;
    intro: string;
    cards: PageCard[];
  };
  ideas: {
    label: string;
    title: string;
    intro: string;
    cards: ImageCard[];
  };
  details: {
    label: string;
    title: string;
    intro: string;
    items: DetailItem[];
  };
  reality: {
    label: string;
    title: string;
    paragraphs: string[];
    image: string;
    imageAlt: string;
    facts: Fact[];
    linkHref: string;
    linkLabel: string;
  };
  process: {
    label: string;
    title: string;
    steps: PageCard[];
  };
  pricing: {
    label: string;
    title: string;
    body: string;
    factorsLabel: string;
    factors: string[];
    promise: string;
    cta: string;
  };
  faq: {
    label: string;
    title: string;
    intro: string;
    items: Faq[];
  };
  preInquiry: {
    label: string;
    title: string;
    body: string;
  };
};
