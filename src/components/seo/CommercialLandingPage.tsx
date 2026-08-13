import Image from 'next/image';
import Link from 'next/link';

import { Footer } from '@/components/Footer';
import { Inquire } from '@/components/Inquire';
import type { SeoLandingPage } from '@/lib/seo-pages/types';
import { SITE_URL } from '@/lib/site';

import styles from '@/app/[lang]/private-albania-tours/page.module.css';

function jsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}

function CardLink({ href, children }: { href: string; children: React.ReactNode }) {
  if (href.startsWith('/')) {
    return <Link href={href}>{children}</Link>;
  }

  return <a href={href}>{children}</a>;
}

export function CommercialLandingPage({ page }: { page: SeoLandingPage }) {
  const homeHref = `/${page.locale}`;
  const pageUrl = `${SITE_URL}/${page.locale}/${page.slug}`;
  const isGerman = page.locale === 'de';
  const homeLabel = isGerman ? 'Startseite' : 'Home';

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: page.serviceName,
    description: page.metaDescription,
    url: pageUrl,
    serviceType: page.serviceTypes,
    areaServed: {
      '@type': 'Country',
      name: 'Albania',
    },
    provider: {
      '@type': 'Organization',
      name: 'Arjes',
      url: `${SITE_URL}${homeHref}`,
      founder: {
        '@type': 'Person',
        name: 'Arjes',
        jobTitle: 'Licensed National Tourism Guide',
        knowsLanguage: ['Albanian', 'English', 'German', 'Turkish'],
      },
    },
    audience: {
      '@type': 'Audience',
      audienceType: page.audience,
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: homeLabel,
        item: `${SITE_URL}${homeHref}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: page.breadcrumb,
        item: pageUrl,
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faq.items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema) }} />

      <header className={styles.siteHeader}>
        <Link className={styles.brand} href={homeHref} aria-label={homeLabel}>
          <span className={styles.brandMark}>A</span>
          <span className={styles.wordmark}>Arjes.</span>
        </Link>
        <nav className={styles.pageNav} aria-label={isGerman ? 'Auf dieser Seite' : 'On this page'}>
          <a href="#options">{page.nav.options}</a>
          <a href="#ideas">{page.nav.ideas}</a>
          <a href="#details">{page.nav.details}</a>
          <a href="#questions">{page.nav.questions}</a>
        </nav>
        <a className={styles.headerCta} href="#inquire">
          {page.headerCta} <span aria-hidden="true">→</span>
        </a>
      </header>

      <main id="top">
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <div className={styles.breadcrumbs} aria-label={isGerman ? 'Brotkrümelnavigation' : 'Breadcrumb'}>
              <Link href={homeHref}>{homeLabel}</Link>
              <span aria-hidden="true">/</span>
              <span>{page.breadcrumb}</span>
            </div>
            <p className={styles.eyebrow}>{page.hero.eyebrow}</p>
            <h1>{page.hero.title}</h1>
            <p className={styles.heroLede}>{page.hero.lede}</p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#inquire">
                {page.hero.primaryCta} <span aria-hidden="true">→</span>
              </a>
              <a className={styles.textLink} href="#options">{page.hero.secondaryCta}</a>
            </div>
            <ul className={styles.heroFacts} aria-label={isGerman ? 'Eckdaten' : 'Key facts'}>
              {page.hero.facts.map((fact) => <li key={fact}>{fact}</li>)}
            </ul>
          </div>

          <div className={styles.heroVisual}>
            <Image
              src={page.hero.image}
              alt={page.hero.imageAlt}
              fill
              priority
              sizes="(max-width: 820px) 100vw, 46vw"
              className={styles.heroImage}
            />
            <div className={styles.imageScrim} />
            <p className={styles.imageCaption}>{page.hero.imageCaption}</p>
            <div className={styles.heroNote}>
              <span className={styles.noteNumber}>01</span>
              <p>{page.hero.note}</p>
            </div>
          </div>
        </section>

        <section className={styles.promise} aria-labelledby={`${page.slug}-promise`}>
          <p className={styles.sectionLabel}>{page.promise.label}</p>
          <div className={styles.promiseCopy}>
            <h2 id={`${page.slug}-promise`}>{page.promise.title}</h2>
            <p>{page.promise.body}</p>
          </div>
        </section>

        <section className={styles.travelStyles} id="options" aria-labelledby={`${page.slug}-options`}>
          <div className={styles.sectionHeading}>
            <p className={styles.sectionLabel}>{page.options.label}</p>
            <h2 id={`${page.slug}-options`}>{page.options.title}</h2>
            <p>{page.options.intro}</p>
          </div>
          <div className={styles.styleGrid}>
            {page.options.cards.map((card) => (
              <article className={styles.styleCard} key={card.number}>
                <span className={styles.cardNumber}>{card.number}</span>
                <h3>{card.title}</h3>
                <p className={styles.bestFor}>{card.meta}</p>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.routeIdeas} id="ideas" aria-labelledby={`${page.slug}-ideas`}>
          <div className={styles.sectionHeadingRow}>
            <div>
              <p className={styles.sectionLabel}>{page.ideas.label}</p>
              <h2 id={`${page.slug}-ideas`}>{page.ideas.title}</h2>
            </div>
            <p>{page.ideas.intro}</p>
          </div>
          <div className={styles.routeGrid}>
            {page.ideas.cards.map((card) => (
              <article className={styles.routeCard} key={card.title}>
                <div className={styles.routeImageWrap}>
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(max-width: 760px) 100vw, 33vw"
                    className={styles.routeImage}
                  />
                </div>
                <p className={styles.routeDuration}>{card.eyebrow}</p>
                <h3>{card.title}</h3>
                <p className={styles.routeLine}>{card.line}</p>
                <p>{card.body}</p>
                <CardLink href={card.href}>{card.cta} <span aria-hidden="true">→</span></CardLink>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.coordination} id="details" aria-labelledby={`${page.slug}-details`}>
          <div className={styles.coordinationIntro}>
            <p className={styles.sectionLabel}>{page.details.label}</p>
            <h2 id={`${page.slug}-details`}>{page.details.title}</h2>
            <p>{page.details.intro}</p>
          </div>
          <ol className={styles.coordinationList}>
            {page.details.items.map((item, index) => (
              <li key={item.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.arjesSection} aria-labelledby={`${page.slug}-reality`}>
          <div className={styles.arjesImageWrap}>
            <Image
              src={page.reality.image}
              alt={page.reality.imageAlt}
              fill
              sizes="(max-width: 820px) 100vw, 42vw"
              className={styles.arjesImage}
            />
          </div>
          <div className={styles.arjesCopy}>
            <p className={styles.sectionLabel}>{page.reality.label}</p>
            <h2 id={`${page.slug}-reality`}>{page.reality.title}</h2>
            {page.reality.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <dl className={styles.guideFacts}>
              {page.reality.facts.map((fact) => (
                <div key={fact.term}>
                  <dt>{fact.term}</dt>
                  <dd>{fact.detail}</dd>
                </div>
              ))}
            </dl>
            <Link className={styles.textLink} href={page.reality.linkHref}>
              {page.reality.linkLabel} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        <section className={styles.process} aria-labelledby={`${page.slug}-process`}>
          <div className={styles.sectionHeading}>
            <p className={styles.sectionLabel}>{page.process.label}</p>
            <h2 id={`${page.slug}-process`}>{page.process.title}</h2>
          </div>
          <ol className={styles.processGrid}>
            {page.process.steps.map((step) => (
              <li key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.pricing} aria-labelledby={`${page.slug}-pricing`}>
          <div>
            <p className={styles.sectionLabel}>{page.pricing.label}</p>
            <h2 id={`${page.slug}-pricing`}>{page.pricing.title}</h2>
          </div>
          <div className={styles.pricingBody}>
            <p>{page.pricing.body}</p>
            <p className={styles.quoteIntro}>{page.pricing.factorsLabel}</p>
            <ul>
              {page.pricing.factors.map((factor) => <li key={factor}>{factor}</li>)}
            </ul>
            <p className={styles.pricingPromise}>{page.pricing.promise}</p>
            <a className={styles.primaryButton} href="#inquire">
              {page.pricing.cta} <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>

        <section className={styles.faq} id="questions" aria-labelledby={`${page.slug}-faq`}>
          <div className={styles.faqIntro}>
            <p className={styles.sectionLabel}>{page.faq.label}</p>
            <h2 id={`${page.slug}-faq`}>{page.faq.title}</h2>
            <p>{page.faq.intro}</p>
          </div>
          <div className={styles.faqList}>
            {page.faq.items.map((item, index) => (
              <details key={item.question} open={index === 0}>
                <summary>
                  <span>{item.question}</span>
                  <span className={styles.faqIcon} aria-hidden="true">+</span>
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className={styles.preInquiry} aria-labelledby={`${page.slug}-inquiry`}>
          <p className={styles.sectionLabel}>{page.preInquiry.label}</p>
          <h2 id={`${page.slug}-inquiry`}>{page.preInquiry.title}</h2>
          <p>{page.preInquiry.body}</p>
        </section>

        <Inquire />
      </main>
      <Footer homeHref={homeHref} />
    </>
  );
}
