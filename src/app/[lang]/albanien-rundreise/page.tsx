import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { Footer } from '@/components/Footer';
import { Inquire } from '@/components/Inquire';
import { SITE_URL } from '@/lib/site';

import styles from '../private-albania-tours/page.module.css';

const PAGE_PATH = '/de/albanien-rundreise';
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const META_DESCRIPTION =
  'Individuelle Albanien-Rundreise mit deutschsprachigem Guide, privatem Fahrer oder Mietwagen. Flexible Routen für 7, 10 oder 14 Tage, vor Ort geplant.';

const travelStyles = [
  {
    number: '01',
    title: 'Deutschsprachig geführt',
    bestFor: 'Kontext, Gespräche und ein entspanntes Reisetempo',
    body: 'Ein deutschsprachiger Guide begleitet Ihre Gruppe durchgehend oder nur an ausgewählten Orten. Sie erleben nicht nur Sehenswürdigkeiten, sondern verstehen auch den Alltag dahinter.',
  },
  {
    number: '02',
    title: 'Guide und privater Fahrer',
    bestFor: 'Komfortable Rundreisen ohne selbst zu fahren',
    body: 'Der Fahrer konzentriert sich auf die Straße, der Guide auf Sie. Diese Variante eignet sich besonders für Familien, kleine Gruppen und Routen mit mehreren Stationen.',
  },
  {
    number: '03',
    title: 'Individuell mit Mietwagen',
    bestFor: 'Selbstfahrer, die Freiheit mit guter Planung verbinden möchten',
    body: 'Sie fahren selbst, aber nicht planlos: mit einer realistischen Route, passenden Übernachtungsorten und Hilfe bei der Mietwagenübergabe.',
  },
  {
    number: '04',
    title: 'Geführter Start, frei weiter',
    bestFor: 'Sicherheit am Anfang, Unabhängigkeit danach',
    body: 'Beginnen Sie in Tirana oder im Landesinneren mit Guide und Fahrer. Später übernehmen Sie den Mietwagen und setzen die Rundreise auf eigene Faust fort.',
  },
];

const routeShapes = [
  {
    eyebrow: '7 Tage · kompakt',
    title: 'Die klassische erste Runde',
    route: 'Tirana · Berat · Gjirokastra · Riviera',
    body: 'Eine Woche reicht für einen starken ersten Eindruck, wenn die Route klar bleibt. Kultur, Geschichte und Küste passen hinein—der Norden bleibt für die nächste Reise.',
    image: '/photos/berat.jpeg',
    alt: 'Historische Häuser am Hang von Berat in Albanien',
    href: '/de/albanien-rundreise-7-tage',
    cta: '7-Tage-Route im Detail',
  },
  {
    eyebrow: '10 Tage · ausgewogen',
    title: 'Mehr Albanien, weniger Eile',
    route: 'Tirana · Shkodra · Berat · Gjirokastra · Riviera',
    body: 'Drei zusätzliche Tage schaffen Raum für den Norden, langsamere Fahrtage und Erlebnisse zwischen den bekannten Orten. Für viele ist das die beste erste Rundreise.',
    image: '/photos/gjirokaster-pov.jpeg',
    alt: 'Blick über die Steindächer von Gjirokastra in Albanien',
    href: '/de/albanien-rundreise-10-tage',
    cta: '10-Tage-Route im Detail',
  },
  {
    eyebrow: '14 Tage · von Nord nach Süd',
    title: 'Das Land in seiner ganzen Vielfalt',
    route: 'Koman · Valbona · Theth · Berat · Gjirokastra · Riviera',
    body: 'Zwei Wochen verbinden die Alpen als echte Etappe mit historischen Städten und Meer. Fähre, Gepäck, Bergwanderung und Transfers werden als zusammenhängender Nordblock geplant.',
    image: '/photos/theth.jpeg',
    alt: 'Reisegruppe an einem Wasserfall bei Theth in Nordalbanien',
    href: '/de/albanien-rundreise-14-tage',
    cta: '14-Tage-Route im Detail',
  },
];

const planningFactors = [
  ['Reisetempo', 'Wie viele Standortwechsel fühlen sich nach Urlaub an? Wir planen Fahrzeiten und Pausen ehrlich und streichen lieber einen Ort, als jeden Tag zu überladen.'],
  ['Jahreszeit', 'Eine gute Route im Mai sieht anders aus als im August oder Januar. Berge, Küste, Hitze und saisonale Öffnungszeiten werden von Anfang an berücksichtigt.'],
  ['Interessen', 'Geschichte, Essen, Natur, Familiengeschichte oder Strand: Die Route erhält einen Schwerpunkt, statt alles nur kurz abzuhaken.'],
  ['Die richtige Begleitung', 'Arjes persönlich, ein deutschsprachiger Kollege, privater Fahrer, lokale Guides oder Mietwagen—jede Etappe bekommt nur so viel Unterstützung, wie sie braucht.'],
  ['Unterkünfte und Übergaben', 'Wir empfehlen passende Hotels und Gästehäuser und koordinieren auf Wunsch Flughafentransfer, Fahrer und Mietwagenübergabe entlang der Route.'],
] as const;

const seasons = [
  {
    number: '01',
    title: 'April bis Juni',
    bestFor: 'Städte, Natur und angenehme Rundreisetage',
    body: 'Frühling eignet sich sehr gut für klassische Rundreisen. In den hohen Alpen kann die Saison später beginnen als im restlichen Land.',
  },
  {
    number: '02',
    title: 'Juli und August',
    bestFor: 'Küste, lange Abende und frühe Tagesstarts',
    body: 'Die Riviera ist lebendig und heiß. Wir planen Besichtigungen früher, vermeiden unnötige Küstenwechsel und reservieren wichtige Leistungen rechtzeitig.',
  },
  {
    number: '03',
    title: 'September und Oktober',
    bestFor: 'Meer, Kultur und ruhigeres Reisen',
    body: 'Für viele Rundreisen ist der Herbst ideal: warmes Licht, oft noch Badewetter und weniger Hochsaisonbetrieb als im August.',
  },
  {
    number: '04',
    title: 'November bis März',
    bestFor: 'Tirana, historische Städte, Essen und Alltag',
    body: 'Auch im Winter lohnt sich Albanien. Die Route wird kompakter und kulturorientierter; abgelegene Berg- oder Küstenabschnitte werden nicht erzwungen.',
  },
];

const quoteFactors = [
  'Reisedaten und Gruppengröße',
  '7, 10, 14 Tage oder eine andere Dauer',
  'Guide, Fahrer, Mietwagen oder Kombination',
  'Fahrzeuggröße, Strecke und Transfers',
  'welche Leistungen wir koordinieren sollen',
];

const faqs = [
  {
    question: 'Wie viele Tage sollte eine Albanien-Rundreise dauern?',
    answer:
      'Sieben Tage eignen sich für Tirana, Berat, Gjirokastra und einen Teil der Küste. Zehn Tage geben der Route deutlich mehr Ruhe. Mit 14 Tagen lassen sich auch der Norden und die Albanischen Alpen sinnvoll integrieren.',
  },
  {
    question: 'Reichen 7 Tage für eine Rundreise durch Albanien?',
    answer:
      'Ja, wenn Sie sich auf eine Regionenkombination konzentrieren. Wir würden in einer Woche nicht gleichzeitig die Alpen, den tiefen Süden und mehrere Strandorte einplanen. Eine kompakte Südroute liefert den besseren ersten Eindruck.',
  },
  {
    question: 'Was ist besser: 10 oder 14 Tage?',
    answer:
      'Zehn Tage sind ideal für eine ausgewogene erste Rundreise mit Norden oder Süden als zusätzlichem Schwerpunkt. Vierzehn Tage passen besser, wenn Sie Berge und Küste verbinden, mehrere Nächte an einem Ort bleiben oder zwischendurch freie Tage möchten.',
  },
  {
    question: 'Gibt es deutschsprachige Guides in Albanien?',
    answer:
      'Ja. Arjes führt ausgewählte Termine persönlich auf Deutsch. Für andere Termine, längere Routen oder bestimmte Regionen arbeitet sie mit vertrauten lizenzierten deutschsprachigen Kolleginnen und Kollegen. Vor der Buchung erfahren Sie, wer vorgesehen ist.',
  },
  {
    question: 'Können wir Albanien als Selbstfahrer mit dem Mietwagen bereisen?',
    answer:
      'Ja. Viele klassische Orte sind mit dem Mietwagen gut erreichbar. Entscheidend sind eine realistische Tagesplanung, passende Übernachtungsorte, Parkmöglichkeiten und eine Route, die Fahrzeug und Jahreszeit berücksichtigt. Für einzelne Bergabschnitte kann ein lokaler Transfer sinnvoller sein.',
  },
  {
    question: 'Können wir Guide, Fahrer und Mietwagen kombinieren?',
    answer:
      'Ja. Sie können zum Beispiel die ersten Tage mit Guide und Fahrer reisen, den Mietwagen später in Korça, Përmet oder einem anderen vereinbarten Ort übernehmen und unabhängig bis Tirana weiterfahren.',
  },
  {
    question: 'Was kostet eine individuelle Albanien-Rundreise?',
    answer:
      'Der Preis hängt von Dauer, Gruppengröße, Fahrzeug, Anzahl der geführten Tage und den gewünschten Leistungen ab. Deshalb nennen wir keine künstliche Pauschale. Sie erhalten ein transparentes Angebot, das enthaltene Leistungen und direkt bezahlte Kosten trennt.',
  },
  {
    question: 'Kann man Rundreise und Badeurlaub verbinden?',
    answer:
      'Ja. Für eine sinnvolle Kombination empfehlen wir meist mindestens zehn Tage. Dann bleiben zwei oder drei Nächte an einem Küstenort möglich, ohne dass der Rest der Reise nur aus Fahrten besteht.',
  },
  {
    question: 'Ist eine Albanien-Rundreise auch im Winter möglich?',
    answer:
      'Ja, besonders mit Tirana, Berat, Gjirokastra, Korça, Kulinarik und Alltagskultur. Bergstraßen, Fähren und saisonale Küstenbetriebe können eingeschränkt sein. Wir bauen deshalb eine echte Winterroute statt einer verkürzten Sommerreise.',
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;

  if (lang !== 'de') {
    notFound();
  }

  return {
    metadataBase: new URL(SITE_URL),
    title: 'Albanien Rundreise individuell planen | Arjes',
    description: META_DESCRIPTION,
    alternates: {
      canonical: PAGE_URL,
      languages: {
        de: PAGE_URL,
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
      locale: 'de_DE',
      title: 'Ihre individuelle Albanien-Rundreise | Arjes',
      description: META_DESCRIPTION,
      images: [
        {
          url: '/photos/zvernec.jpeg',
          width: 4000,
          height: 3000,
          alt: 'Holzsteg zur Insel Zvërnec in Albanien',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Ihre individuelle Albanien-Rundreise | Arjes',
      description: META_DESCRIPTION,
      images: ['/photos/zvernec.jpeg'],
    },
  };
}

export default async function AlbanienRundreisePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (lang !== 'de') {
    notFound();
  }

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Individuelle Albanien-Rundreisen',
    description: META_DESCRIPTION,
    url: PAGE_URL,
    areaServed: {
      '@type': 'Country',
      name: 'Albanien',
    },
    provider: {
      '@type': 'Person',
      name: 'Arjes',
      url: `${SITE_URL}/de`,
      jobTitle: 'Lizenzierte nationale Reiseleiterin',
      knowsLanguage: ['Deutsch', 'Englisch', 'Albanisch', 'Türkisch'],
    },
    audience: {
      '@type': 'Audience',
      audienceType: 'Paare, Familien, Freunde und kleine private Gruppen',
    },
    serviceType: [
      'Individuelle Albanien-Rundreise',
      'Deutschsprachige Reiseleitung',
      'Privater Fahrer',
      'Mietwagen- und Selbstfahrerplanung',
    ],
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Startseite',
        item: `${SITE_URL}/de`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Albanien Rundreise',
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
        <Link className={styles.brand} href="/de" aria-label="Arjes Startseite">
          <span className={styles.brandMark}>A</span>
          <span className={styles.wordmark}>Arjes.</span>
        </Link>
        <nav className={styles.pageNav} aria-label="Auf dieser Seite">
          <a href="#reisearten">Reisearten</a>
          <a href="#routen">7, 10 oder 14 Tage</a>
          <a href="#ablauf">Ablauf</a>
          <a href="#fragen">Fragen</a>
        </nav>
        <a className={styles.headerCta} href="#inquire">
          Reise planen <span aria-hidden="true">→</span>
        </a>
      </header>

      <main id="top">
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <div className={styles.breadcrumbs} aria-label="Brotkrümelnavigation">
              <Link href="/de">Startseite</Link>
              <span aria-hidden="true">/</span>
              <span>Albanien Rundreise</span>
            </div>
            <p className={styles.eyebrow}>Individuell · privat · vor Ort geplant</p>
            <h1>Albanien-Rundreise, individuell für Sie geplant.</h1>
            <p className={styles.heroLede}>
              Mit deutschsprachigem Guide, privatem Fahrer, Mietwagen—oder als Kombination. Für Paare, Familien, Freunde und kleine Gruppen, die Albanien in ihrem eigenen Tempo erleben möchten.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#inquire">
                Rundreise anfragen <span aria-hidden="true">→</span>
              </a>
              <a className={styles.textLink} href="#routen">
                7, 10 und 14 Tage vergleichen
              </a>
            </div>
            <ul className={styles.heroFacts} aria-label="Wichtige Merkmale">
              <li>Nur Ihre Gruppe</li>
              <li>Deutschsprachige Reiseleitung</li>
              <li>Guide, Fahrer oder Mietwagen</li>
            </ul>
          </div>

          <div className={styles.heroVisual}>
            <Image
              src="/photos/zvernec.jpeg"
              alt="Holzsteg zur Insel Zvërnec im Süden Albaniens"
              fill
              priority
              sizes="(max-width: 820px) 100vw, 46vw"
              className={styles.heroImage}
            />
            <div className={styles.imageScrim} />
            <p className={styles.imageCaption}>Zvërnec · Südalbanien</p>
            <div className={styles.heroNote}>
              <span className={styles.noteNumber}>01</span>
              <p>Keine Busreise. Kein fester Abfahrtstermin. Eine Route, die zu Ihnen passt.</p>
            </div>
          </div>
        </section>

        <section className={styles.promise} aria-labelledby="individual-title">
          <p className={styles.sectionLabel}>Was individuell wirklich bedeutet</p>
          <div className={styles.promiseCopy}>
            <h2 id="individual-title">Nicht möglichst viele Orte. Sondern die richtige Reise.</h2>
            <p>
              Manche möchten alles erklärt bekommen. Andere brauchen nur einen guten Start und fahren dann selbst weiter. Wir entscheiden zuerst über Tempo, Begleitung und Jahreszeit—und erst danach über die genaue Strecke.
            </p>
          </div>
        </section>

        <section className={styles.travelStyles} id="reisearten" aria-labelledby="reisearten-title">
          <div className={styles.sectionHeading}>
            <p className={styles.sectionLabel}>Vier Arten zu reisen</p>
            <h2 id="reisearten-title">So viel Begleitung wie nötig. So viel Freiheit wie möglich.</h2>
            <p>Die Varianten können für die gesamte Rundreise gelten oder innerhalb einer Reise kombiniert werden.</p>
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

        <section className={styles.routeIdeas} id="routen" aria-labelledby="routen-title">
          <div className={styles.sectionHeadingRow}>
            <div>
              <p className={styles.sectionLabel}>7, 10 oder 14 Tage</p>
              <h2 id="routen-title">Welche Albanien-Rundreise passt zu Ihrer Zeit?</h2>
            </div>
            <p>
              Diese Routen sind sinnvolle Ausgangspunkte, keine starren Programme. Flüge, Saison, Interessen und die gewünschte Zahl an Hotelwechseln bestimmen die endgültige Strecke.
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
                <a href={route.href}>{route.cta} <span aria-hidden="true">→</span></a>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.coordination} aria-labelledby="planung-title">
          <div className={styles.coordinationIntro}>
            <p className={styles.sectionLabel}>Wie Ihre Route entsteht</p>
            <h2 id="planung-title">Die wichtigen Entscheidungen kommen vor den Hotelnamen.</h2>
            <p>
              Eine gute Rundreise funktioniert als Ganzes: nicht nur auf einer Karte, sondern auch im Fahrzeug, bei der Ankunft und an einem heißen Augustnachmittag.
            </p>
          </div>
          <ol className={styles.coordinationList}>
            {planningFactors.map(([title, body], index) => (
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

        <section className={styles.arjesSection} aria-labelledby="guide-title">
          <div className={styles.arjesImageWrap}>
            <Image
              src="/photos/berat-bridge.jpeg"
              alt="Blick über die historische Stadt Berat in Albanien"
              fill
              sizes="(max-width: 820px) 100vw, 42vw"
              className={styles.arjesImage}
            />
          </div>
          <div className={styles.arjesCopy}>
            <p className={styles.sectionLabel}>Deutschsprachige Begleitung</p>
            <h2 id="guide-title">Persönlich geplant, ohne von einem Kalender abhängig zu sein.</h2>
            <p>
              Arjes ist lizenzierte nationale Reiseleiterin in Tirana und begleitet ausgewählte Stadtführungen, Nachmittage und Wochenendreisen persönlich auf Deutsch. Für längere Rundreisen und andere Termine arbeitet sie mit vertrauten lizenzierten deutschsprachigen Guides und sorgfältigen Fahrern.
            </p>
            <p>
              Vor Ihrer Zusage wissen Sie, wer vorgesehen ist, welche Rolle diese Person übernimmt und bei welchen Teilen Arjes Ihre Ansprechpartnerin bleibt. Es gibt keine überraschende Umbesetzung nach Ihrer Ankunft.
            </p>
            <dl className={styles.guideFacts}>
              <div>
                <dt>Sprachen</dt>
                <dd>Deutsch · Englisch · Türkisch · Albanisch</dd>
              </div>
              <div>
                <dt>Geeignet für</dt>
                <dd>Paare · Familien · Freunde · kleine private Gruppen</dd>
              </div>
            </dl>
            <Link className={styles.textLink} href="/de#about">
              Arjes und den Ansatz kennenlernen <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        <section className={styles.process} aria-labelledby="saison-title">
          <div className={styles.sectionHeading}>
            <p className={styles.sectionLabel}>Albanien zu jeder Jahreszeit</p>
            <h2 id="saison-title">Die beste Route richtet sich nach Ihrem Monat.</h2>
          </div>
          <ol className={styles.processGrid}>
            {seasons.map((season) => (
              <li key={season.number}>
                <span>{season.number}</span>
                <h3>{season.title}</h3>
                <p className={styles.bestFor}>{season.bestFor}</p>
                <p>{season.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.process} id="ablauf" aria-labelledby="ablauf-title">
          <div className={styles.sectionHeading}>
            <p className={styles.sectionLabel}>So funktioniert die Planung</p>
            <h2 id="ablauf-title">Von der ersten Idee zu einer klaren Rundreise.</h2>
          </div>
          <ol className={styles.processGrid}>
            <li>
              <span>01</span>
              <h3>Sie senden die Eckdaten</h3>
              <p>Reisedaten, Gruppengröße, Flüge falls bekannt und alles, was bequem oder besonders wichtig sein muss.</p>
            </li>
            <li>
              <span>02</span>
              <h3>Wir empfehlen Route und Reiseart</h3>
              <p>7, 10 oder 14 Tage, Guide, Fahrer, Mietwagen oder eine sinnvolle Kombination daraus.</p>
            </li>
            <li>
              <span>03</span>
              <h3>Sie erhalten ein klares Angebot</h3>
              <p>Mit Ablauf, Rollen, enthaltenen Leistungen und Kosten, die Sie direkt an lokale Partner zahlen.</p>
            </li>
            <li>
              <span>04</span>
              <h3>Sie reisen mit Kontakt vor Ort</h3>
              <p>Der vereinbarte Guide oder Fahrer erwartet Sie, und Sie behalten während der Reise eine lokale Ansprechperson.</p>
            </li>
          </ol>
        </section>

        <section className={styles.pricing} aria-labelledby="preis-title">
          <div>
            <p className={styles.sectionLabel}>Transparente Preise statt Lockangebot</p>
            <h2 id="preis-title">Der Preis folgt der Reise—nicht umgekehrt.</h2>
          </div>
          <div className={styles.pricingBody}>
            <p>
              Eine Mietwagenroute für zwei Personen ist etwas anderes als eine deutschsprachig geführte Rundreise für zwölf Kolleginnen und Kollegen. Deshalb kalkulieren wir erst, wenn Dauer, Gruppe und gewünschte Begleitung klar sind.
            </p>
            <p className={styles.quoteIntro}>Die wichtigsten Preisfaktoren:</p>
            <ul>
              {quoteFactors.map((factor) => (
                <li key={factor}>{factor}</li>
              ))}
            </ul>
            <p className={styles.pricingPromise}>
              Im Angebot steht klar, was enthalten ist, was Sie an uns zahlen und welche Hotels, Mietwagenfirmen oder anderen lokalen Partner Sie direkt bezahlen.
            </p>
            <a className={styles.primaryButton} href="#inquire">
              Individuelles Angebot anfragen <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>

        <section className={styles.faq} id="fragen" aria-labelledby="faq-title">
          <div className={styles.faqIntro}>
            <p className={styles.sectionLabel}>Häufige Fragen</p>
            <h2 id="faq-title">Was vor einer Albanien-Rundreise wichtig ist.</h2>
            <p>Sie wissen noch nicht, welche Reiseart passt? Senden Sie uns einfach die ungeordnete Version Ihrer Idee.</p>
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

        <section className={styles.preInquiry} aria-labelledby="anfrage-title">
          <p className={styles.sectionLabel}>Beginnen Sie mit dem, was schon feststeht</p>
          <h2 id="anfrage-title">Reisedaten, Personen, eine Idee. Den Rest planen wir gemeinsam.</h2>
          <p>Sagen Sie uns, wann Sie ankommen, wie lange Sie bleiben und ob Sie geführt, gefahren, selbstständig oder gemischt reisen möchten.</p>
        </section>

        <Inquire />
      </main>
      <Footer homeHref="/de" />
    </>
  );
}
