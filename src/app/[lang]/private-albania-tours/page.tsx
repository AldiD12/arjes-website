import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { Footer } from '@/components/Footer';
import { Inquire } from '@/components/Inquire';
import { SITE_URL } from '@/lib/site';

import styles from './page.module.css';

const PAGE_PATH = '/en/private-albania-tours';
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const META_DESCRIPTION =
  'Plan a private Albania tour with a licensed local guide, private driver or self-drive handover. Flexible routes for couples, families and small groups.';

const travelStyles = [
  {
    number: '01',
    title: 'With Arjes personally',
    bestFor: 'Tirana, short afternoons and selected weekends',
    body: 'The most personal option when dates and route fit Arjes’s guiding calendar. Availability is deliberately limited, so we will always be clear before you plan around it.',
  },
  {
    number: '02',
    title: 'With a trusted local guide',
    bestFor: 'Other dates, languages and regions',
    body: 'Arjes matches your group with a licensed colleague who suits the route and the way you like to travel. You know who is proposed before you confirm.',
  },
  {
    number: '03',
    title: 'Guide and private driver',
    bestFor: 'Easy multi-day travel without driving yourself',
    body: 'A guide brings the places to life while a dedicated driver handles the road. This works especially well for families, groups and routes with several stops.',
  },
  {
    number: '04',
    title: 'Guided start, self-drive finish',
    bestFor: 'Confidence first, independence afterwards',
    body: 'Begin with local guidance, then collect a rental car in an agreed town and continue with a route designed around your pace, interests and departure airport.',
  },
];

const routeShapes = [
  {
    eyebrow: '3–4 days',
    title: 'Tirana and one region',
    route: 'Tirana · Berat or Krujë · local countryside',
    body: 'A compact introduction with time for the capital, one historic town and the everyday Albania between the headline sights.',
    image: '/photos/berat.jpeg',
    alt: 'Historic hillside houses in Berat, Albania',
  },
  {
    eyebrow: '7 days',
    title: 'The classic first journey',
    route: 'Tirana · Berat · Gjirokastër · Riviera',
    body: 'A balanced week of history, food, landscape and coast. Travel fully guided, with a driver, or hand over to a rental car part-way through.',
    image: '/photos/gjirokaster-pov.jpeg',
    alt: 'Stone rooftops of Gjirokastër, Albania',
  },
  {
    eyebrow: '10–14 days',
    title: 'Albania from north to south',
    route: 'Alps · central Albania · southern coast',
    body: 'A slower route with room for mountain valleys, family-run stays, historic cities and days that are not organised down to the minute.',
    image: '/photos/theth.jpeg',
    alt: 'Mountain landscape near Theth in northern Albania',
  },
];

const coordination = [
  ['Route and pace', 'A realistic day-by-day plan built around your dates, interests, ages and energy—not a copied group itinerary.'],
  ['Guides and drivers', 'The right local guide, private driver or combination for each part of the route, with names shared before confirmation.'],
  ['Rental-car handover', 'Help coordinating where to collect the car, where to return it and how the guided and independent parts connect.'],
  ['Stays and local stops', 'Honest hotel and guesthouse recommendations, plus the restaurants, viewpoints and small stops that make the route feel local.'],
  ['Airport and trip logistics', 'Arrival transfers, practical timing and one local contact when several moving parts need to work together.'],
] as const;

const quoteFactors = [
  'your dates and group size',
  'the number of guided days',
  'guide only, driver only, or both',
  'vehicle size and distance',
  'which services you want coordinated',
];

const faqs = [
  {
    question: 'What does a private Albania tour mean?',
    answer:
      'The trip is for your group only. There are no strangers added to your vehicle or itinerary, and the pace, route and level of support can be adjusted around you.',
  },
  {
    question: 'Will Arjes guide us personally?',
    answer:
      'Arjes personally leads selected Tirana tours, short afternoons and weekend journeys. For other dates, languages or longer routes, she proposes a trusted licensed colleague and remains your local point of contact. You will know who is proposed before you book.',
  },
  {
    question: 'Can you arrange a guide and driver for several days?',
    answer:
      'Yes. A private driver and guide can travel with you for part or all of the route. We can also design a lighter arrangement, such as a driver on transfer days and local guides only where they add the most value.',
  },
  {
    question: 'Can we start with a guide and continue in a rental car?',
    answer:
      'Yes. This is one of the most useful options for a longer trip. We can plan the guided first days, coordinate a rental-car handover in a suitable town, and design the independent part so it connects naturally with your return flight.',
  },
  {
    question: 'Can you help with hotels and guesthouses?',
    answer:
      'Yes. We recommend places that suit the route, comfort level and parking needs, and can help coordinate the plan. Your proposal will state clearly what we arrange and which local suppliers you pay directly.',
  },
  {
    question: 'How much does a private tour cost?',
    answer:
      'There is no honest single price before we know the group, dates, route and travel style. A guide-only day is different from a multi-day journey with a vehicle and driver. We send an itemised proposal so you can see what each part costs and simplify it if needed.',
  },
  {
    question: 'Is Albania worth visiting outside summer?',
    answer:
      'Yes, especially for Tirana, historic cities, food and culture. Winter weather and seasonal closures can affect mountain and coastal routes, so we design the journey around what works well at your actual dates rather than forcing a summer itinerary into winter.',
  },
  {
    question: 'How far ahead should we enquire?',
    answer:
      'For June to September, three to six months gives the best choice of guides, vehicles and stays. Outside peak summer, six weeks is often workable. Last-minute trips are still worth asking about.',
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;

  if (lang !== 'en') {
    notFound();
  }

  return {
    metadataBase: new URL(SITE_URL),
    title: 'Private Albania Tours, Guides & Drivers | Arjes',
    description: META_DESCRIPTION,
    alternates: {
      canonical: PAGE_URL,
      languages: {
        en: PAGE_URL,
        'x-default': PAGE_URL,
      },
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: 'website',
      siteName: 'Arjes',
      url: PAGE_URL,
      locale: 'en_GB',
      title: 'Private Albania Tours, Planned Locally | Arjes',
      description: META_DESCRIPTION,
      images: [
        {
          url: '/photos/zvernec.jpeg',
          width: 4000,
          height: 3000,
          alt: 'The wooden causeway to Zvërnec Island in Albania',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Private Albania Tours, Planned Locally | Arjes',
      description: META_DESCRIPTION,
      images: ['/photos/zvernec.jpeg'],
    },
  };
}

export default async function PrivateAlbaniaToursPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (lang !== 'en') {
    notFound();
  }

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Private Albania Tours',
    description: META_DESCRIPTION,
    url: PAGE_URL,
    areaServed: {
      '@type': 'Country',
      name: 'Albania',
    },
    provider: {
      '@type': 'Person',
      name: 'Arjes',
      url: `${SITE_URL}/en`,
      jobTitle: 'Licensed National Tourism Guide',
      knowsLanguage: ['Albanian', 'English', 'German', 'Turkish'],
    },
    audience: {
      '@type': 'Audience',
      audienceType: 'Couples, families and small private groups',
    },
    serviceType: [
      'Private guided tours',
      'Custom Albania itinerary planning',
      'Private driver coordination',
      'Guided and self-drive journeys',
    ],
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${SITE_URL}/en`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Private Albania Tours',
        item: PAGE_URL,
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <header className={styles.siteHeader}>
        <Link className={styles.brand} href="/en" aria-label="Arjes home">
          <span className={styles.brandMark}>A</span>
          <span className={styles.wordmark}>Arjes.</span>
        </Link>
        <nav className={styles.pageNav} aria-label="On this page">
          <a href="#travel-styles">Ways to travel</a>
          <a href="#route-ideas">Route ideas</a>
          <a href="#how-it-works">How it works</a>
          <a href="#questions">Questions</a>
        </nav>
        <a className={styles.headerCta} href="#inquire">
          Plan your trip <span aria-hidden="true">→</span>
        </a>
      </header>

      <main id="top">
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <div className={styles.breadcrumbs} aria-label="Breadcrumb">
              <Link href="/en">Home</Link>
              <span aria-hidden="true">/</span>
              <span>Private Albania tours</span>
            </div>
            <p className={styles.eyebrow}>Private travel · planned in Albania</p>
            <h1>Private Albania tours, shaped around how you want to travel.</h1>
            <p className={styles.heroLede}>
              Travel with Arjes, another trusted local guide, a private driver—or begin with guidance and continue independently. One local plan, built around your people rather than a fixed departure.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#inquire">
                Start planning <span aria-hidden="true">→</span>
              </a>
              <a className={styles.textLink} href="#travel-styles">
                Compare the four ways
              </a>
            </div>
            <ul className={styles.heroFacts} aria-label="Key facts">
              <li>Private to your group</li>
              <li>Guided, driven or self-drive</li>
              <li>One local point of contact</li>
            </ul>
          </div>

          <div className={styles.heroVisual}>
            <Image
              src="/photos/zvernec.jpeg"
              alt="The wooden causeway to Zvërnec Island in Albania"
              fill
              priority
              sizes="(max-width: 820px) 100vw, 46vw"
              className={styles.heroImage}
            />
            <div className={styles.imageScrim} />
            <p className={styles.imageCaption}>Zvërnec Island · southern Albania</p>
            <div className={styles.heroNote}>
              <span className={styles.noteNumber}>01</span>
              <p>Not a seat on someone else’s tour. A journey built for your dates, pace and priorities.</p>
            </div>
          </div>
        </section>

        <section className={styles.promise} aria-labelledby="private-means-title">
          <p className={styles.sectionLabel}>What private should mean</p>
          <div className={styles.promiseCopy}>
            <h2 id="private-means-title">The trip changes for you—not the other way around.</h2>
            <p>
              Maybe you want context and conversation every day. Maybe you only need help for the first five nights. Maybe one person wants history while another needs a slower pace. We start with those realities, then choose the route, people and transport that make them work.
            </p>
          </div>
        </section>

        <section className={styles.travelStyles} id="travel-styles" aria-labelledby="travel-styles-title">
          <div className={styles.sectionHeading}>
            <p className={styles.sectionLabel}>Four ways to travel</p>
            <h2 id="travel-styles-title">Choose the support you need. Keep the freedom you want.</h2>
            <p>These options can stand alone or be combined in one journey.</p>
          </div>
          <div className={styles.styleGrid}>
            {travelStyles.map((travelStyle) => (
              <article className={styles.styleCard} key={travelStyle.number}>
                <span className={styles.cardNumber}>{travelStyle.number}</span>
                <h3>{travelStyle.title}</h3>
                <p className={styles.bestFor}>{travelStyle.bestFor}</p>
                <p>{travelStyle.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.routeIdeas} id="route-ideas" aria-labelledby="route-ideas-title">
          <div className={styles.sectionHeadingRow}>
            <div>
              <p className={styles.sectionLabel}>Starting points, not packages</p>
              <h2 id="route-ideas-title">Three useful shapes for a first Albania trip.</h2>
            </div>
            <p>
              Every route below changes with the season, your flights and the amount of moving you enjoy. They show what can fit without pretending one itinerary suits everyone.
            </p>
          </div>
          <div className={styles.routeGrid}>
            {routeShapes.map((route) => (
              <article className={styles.routeCard} key={route.eyebrow}>
                <div className={styles.routeImageWrap}>
                  <Image
                    src={route.image}
                    alt={route.alt}
                    fill
                    sizes="(max-width: 760px) 100vw, 33vw"
                    className={styles.routeImage}
                  />
                </div>
                <p className={styles.routeDuration}>{route.eyebrow}</p>
                <h3>{route.title}</h3>
                <p className={styles.routeLine}>{route.route}</p>
                <p>{route.body}</p>
                <a href="#inquire">Shape this around us <span aria-hidden="true">→</span></a>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.coordination} aria-labelledby="coordination-title">
          <div className={styles.coordinationIntro}>
            <p className={styles.sectionLabel}>What we can coordinate</p>
            <h2 id="coordination-title">One journey, without you chasing five different people.</h2>
            <p>
              Choose only what helps. We can plan a complete private journey or solve one complicated handover inside a mostly independent trip.
            </p>
          </div>
          <ol className={styles.coordinationList}>
            {coordination.map(([title, body], index) => (
              <li key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.arjesSection} aria-labelledby="who-guides-title">
          <div className={styles.arjesImageWrap}>
            <Image
              src="/photos/berat-bridge.jpeg"
              alt="View across the historic city of Berat in Albania"
              fill
              sizes="(max-width: 820px) 100vw, 42vw"
              className={styles.arjesImage}
            />
          </div>
          <div className={styles.arjesCopy}>
            <p className={styles.sectionLabel}>Who guides your trip?</p>
            <h2 id="who-guides-title">Personal does not have to mean limited by one calendar.</h2>
            <p>
              Arjes is a licensed national tourism guide based in Tirana. She personally leads selected city tours, afternoons and weekends. For longer routes, other dates or a different language, she brings in a trusted licensed guide or driver from her local network.
            </p>
            <p>
              The important part is transparency: before you confirm, you know who is proposed, what their role is and where Arjes remains involved. There are no surprise substitutions after you arrive.
            </p>
            <dl className={styles.guideFacts}>
              <div>
                <dt>Languages</dt>
                <dd>English · German · Turkish · Albanian</dd>
              </div>
              <div>
                <dt>Best suited to</dt>
                <dd>Couples · families · friends · small private groups</dd>
              </div>
            </dl>
            <Link className={styles.textLink} href="/en#about">
              Meet Arjes and the approach <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        <section className={styles.process} id="how-it-works" aria-labelledby="process-title">
          <div className={styles.sectionHeading}>
            <p className={styles.sectionLabel}>How it works</p>
            <h2 id="process-title">From a rough idea to a clear plan.</h2>
          </div>
          <ol className={styles.processGrid}>
            <li>
              <span>01</span>
              <h3>Tell us the real brief</h3>
              <p>Dates, group, flights if booked, what excites you and anything that needs to be easy.</p>
            </li>
            <li>
              <span>02</span>
              <h3>We shape the route</h3>
              <p>We recommend the right pace and mix of Arjes, local guide, private driver and self-drive time.</p>
            </li>
            <li>
              <span>03</span>
              <h3>You receive a clear proposal</h3>
              <p>It states who does what, what is included, what you pay us and what you pay directly.</p>
            </li>
            <li>
              <span>04</span>
              <h3>Travel with local support</h3>
              <p>Meet the agreed guide or driver and keep one local point of contact as the journey unfolds.</p>
            </li>
          </ol>
        </section>

        <section className={styles.pricing} aria-labelledby="pricing-title">
          <div>
            <p className={styles.sectionLabel}>Pricing without invented packages</p>
            <h2 id="pricing-title">A useful quote starts with the way you want to travel.</h2>
          </div>
          <div className={styles.pricingBody}>
            <p>
              A couple hiring a guide for Tirana should not be quoted like twelve colleagues travelling with a vehicle. A five-day guided start should not cost like three fully escorted weeks. That is why we quote after a short brief.
            </p>
            <p className={styles.quoteIntro}>The main price factors are:</p>
            <ul>
              {quoteFactors.map((factor) => (
                <li key={factor}>{factor}</li>
              ))}
            </ul>
            <p className={styles.pricingPromise}>
              Your proposal separates included services from expenses paid directly to hotels, rental companies or other local suppliers.
            </p>
            <a className={styles.primaryButton} href="#inquire">
              Ask for a tailored quote <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>

        <section className={styles.faq} id="questions" aria-labelledby="faq-title">
          <div className={styles.faqIntro}>
            <p className={styles.sectionLabel}>Practical questions</p>
            <h2 id="faq-title">What travellers usually need to know first.</h2>
            <p>Still unsure what kind of help you need? Send the messy version. That is enough to start.</p>
          </div>
          <div className={styles.faqList}>
            {faqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary>
                  <span>{faq.question}</span>
                  <span className={styles.faqIcon} aria-hidden="true">+</span>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className={styles.preInquiry} aria-labelledby="pre-inquiry-title">
          <p className={styles.sectionLabel}>Start with what you know</p>
          <h2 id="pre-inquiry-title">Dates, people, one idea. We can work out the rest.</h2>
          <p>Tell us where you land, how long you have and whether you want to be guided, driven, independent—or a little of each.</p>
        </section>

        <Inquire />
      </main>
      <Footer homeHref="/en" />
    </>
  );
}
