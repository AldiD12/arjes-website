import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { Footer } from '@/components/Footer';
import { Inquire } from '@/components/Inquire';
import { SITE_URL } from '@/lib/site';

import sharedStyles from '../private-albania-tours/page.module.css';
import detailStyles from './page.module.css';

const PAGE_PATH = '/de/albanien-rundreise-7-tage';
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const META_DESCRIPTION =
  'Albanien-Rundreise in 7 Tagen: Tirana, Berat, Gjirokastra und Riviera. Individuell mit deutschsprachigem Guide, Fahrer oder Mietwagen geplant.';

const itinerary = [
  {
    day: 'Tag 01',
    title: 'Ankommen und Tirana verstehen',
    route: 'Flughafen Tirana → Stadtzentrum',
    drive: 'ca. 30–45 Min. Transfer',
    overnight: 'Tirana',
    body: 'Nach der Ankunft beginnt die Reise nicht mit einer langen Autofahrt. Sie kommen in Ruhe an und lernen Tirana zu Fuß kennen: Skanderbeg-Platz, Et’hem-Bey-Moschee, Blloku und die Spuren der jüngeren Geschichte.',
    note: 'Bei später Ankunft verschieben wir den Stadtrundgang auf Tag 7 und starten am nächsten Morgen direkt nach Berat.',
    image: '/photos/durres-amphitheatre.jpeg',
    alt: 'Antike Steinbögen in Albanien',
  },
  {
    day: 'Tag 02',
    title: 'Von der Hauptstadt in die Stadt der tausend Fenster',
    route: 'Tirana → Berat',
    drive: 'ca. 2 Std. reine Fahrt',
    overnight: 'Berat',
    body: 'Am Vormittag geht es nach Berat. Statt nur ein Foto von Mangalem zu machen, bleibt Zeit für die bewohnte Burg, kleine Kirchen, osmanische Viertel und einen Abend am Osum.',
    note: 'Mit Guide verbinden wir Baugeschichte und Religion mit dem heutigen Leben auf der Burg. Als Selbstfahrer erhalten Sie eine Route mit sinnvoller Park- und Ankunftsplanung.',
    image: '/photos/berat.jpeg',
    alt: 'Traditionelle Häuser im historischen Berat',
  },
  {
    day: 'Tag 03',
    title: 'Langsam nach Süden',
    route: 'Berat → Gjirokastra',
    drive: 'ca. 2,5–3 Std. ohne längere Stopps',
    overnight: 'Gjirokastra',
    body: 'Die Fahrt nach Gjirokastra ist Teil der Reise. Je nach Interesse halten wir in einem Dorf, bei einem Produzenten oder an einem landschaftlich passenden Punkt, statt wahllos mehrere Sehenswürdigkeiten einzubauen.',
    note: 'In Gjirokastra gehören die Festung, die Steinhäuser und die steilen Altstadtgassen zusammen. Gute Schuhe sind hier hilfreicher als ein voller Zeitplan.',
    image: '/photos/gjirokaster-pov.jpeg',
    alt: 'Blick über die Steindächer von Gjirokastra',
  },
  {
    day: 'Tag 04',
    title: 'Antike Geschichte und die erste Küstenstraße',
    route: 'Gjirokastra → Butrint → Riviera',
    drive: 'ca. 3–4 Std. reine Fahrt',
    overnight: 'Himara oder Umgebung',
    body: 'Heute ist der längste Tag. Butrint lohnt sich für Reisende mit Interesse an Geschichte; danach führt die Route an die Ionische Küste. Wer lieber langsamer reist, lässt Butrint weg und erreicht die Riviera früher.',
    note: 'Butrint ist eine Wahl, kein Pflichtkästchen. Bei großer Hitze, kleinen Kindern oder später Saison kann ein ruhigerer Küstentag die bessere Entscheidung sein.',
    image: '/photos/butrint-fortress.jpeg',
    alt: 'Historische Festungsmauern in Butrint',
  },
  {
    day: 'Tag 05',
    title: 'Ein Tag ohne Koffer',
    route: 'Albanische Riviera',
    drive: 'nur kurze lokale Strecken',
    overnight: 'Himara oder Umgebung',
    body: 'Nach mehreren Reisetagen bleibt das Hotel gleich. Strand, Boot, Küstendorf, kleiner Spaziergang oder einfach ein langes Mittagessen: Der Tag bekommt nur einen Schwerpunkt.',
    note: 'Im Juli und August wählen wir Standort und Tageszeit besonders sorgfältig. In der Nebensaison prüfen wir, welche Küstenbetriebe tatsächlich geöffnet sind.',
    image: '/photos/zvernec.jpeg',
    alt: 'Holzsteg über eine Lagune im Süden Albaniens',
  },
  {
    day: 'Tag 06',
    title: 'Über den Llogara-Pass zurück nach Tirana',
    route: 'Riviera → Llogara → Tirana',
    drive: 'ca. 3,5–4,5 Std. ohne längere Stopps',
    overnight: 'Tirana',
    body: 'Die Küstenstraße und der Llogara-Pass bilden den landschaftlichen Abschluss. Wir planen genügend Zeitpuffer ein, denn Verkehr und Fotostopps machen diesen Tag weniger berechenbar als die Kilometerzahl vermuten lässt.',
    note: 'Bei frühem Rückflug am nächsten Tag ist die letzte Nacht in Tirana oder Flughafennähe sinnvoller als eine zusätzliche Küstennacht.',
    image: '/photos/vjosa.jpeg',
    alt: 'Flusslandschaft in Südalbanien',
  },
  {
    day: 'Tag 07',
    title: 'Tirana, Dajti oder direkte Abreise',
    route: 'Tirana → Flughafen',
    drive: 'abhängig von Flugzeit und Verkehr',
    overnight: 'Abreise',
    body: 'Ein später Flug lässt Raum für Bunk’Art I, die Dajti-Seilbahn, einen Marktbesuch oder das, was an Tag 1 nicht mehr gepasst hat. Bei frühem Abflug bleibt der Morgen bewusst frei.',
    note: 'Wir bauen den letzten Tag um Ihre tatsächliche Flugzeit. Eine theoretisch perfekte Route hilft nichts, wenn sie am Abreisetag Stress erzeugt.',
    image: '/photos/bektashi.jpeg',
    alt: 'Kulturelles Detail in Tirana',
  },
];

const travelModes = [
  {
    number: '01',
    title: 'Als Selbstfahrer',
    bestFor: 'Freiheit und ein klarer Reiseplan',
    body: 'Sie übernehmen den Mietwagen am Flughafen oder nach dem Tirana-Aufenthalt. Wir planen Route, Übernachtungsorte, sinnvolle Stopps und die Fahrzeugübergabe.',
  },
  {
    number: '02',
    title: 'Mit Fahrer und Guide',
    bestFor: 'Mehr Kontext, weniger Logistik',
    body: 'Ein privater Fahrer übernimmt die Straße; ein deutschsprachiger Guide begleitet alle Tage oder die kulturell wichtigsten Etappen.',
  },
  {
    number: '03',
    title: 'Als Kombination',
    bestFor: 'Geführter Anfang, unabhängige Küste',
    body: 'Starten Sie mit Guide und Fahrer in Tirana, Berat und Gjirokastra. Danach übernehmen Sie einen Mietwagen und gestalten die Küstentage selbst.',
  },
];

const routeAdjustments = [
  ['Späte Ankunft', 'Die erste Nacht bleibt in Tirana. Der Stadtrundgang rückt an Tag 7 oder wird kürzer, ohne Berat nur halb zu erleben.'],
  ['Familien mit Kindern', 'Weniger Altstadtprogramm, ein längerer Küstenaufenthalt und Pausen, die nicht erst beginnen, wenn alle erschöpft sind.'],
  ['Mehr Geschichte', 'Butrint bleibt gesetzt; Stadtführungen in Berat und Gjirokastra werden vertieft, während der Strandtag einfacher wird.'],
  ['Mehr Meer', 'Butrint oder ein Stadtbaustein fällt weg. Dafür bleiben zwei volle Tage an einem sorgfältig gewählten Küstenort.'],
  ['Reise im Winter', 'Die Riviera wird kürzer oder ersetzt. Tirana, Berat, Gjirokastra, Korça, Essen und Alltagskultur tragen die Route.'],
] as const;

const quoteFactors = [
  'Ihre genauen Flugzeiten',
  'Gruppengröße und gewünschtes Fahrzeug',
  'Selbstfahrer, Guide, Fahrer oder Kombination',
  'Anzahl der deutschsprachig geführten Tage',
  'Unterkünfte und Leistungen, die wir koordinieren',
];

const faqs = [
  {
    question: 'Reichen 7 Tage für eine Albanien-Rundreise?',
    answer:
      'Ja, wenn Sie sich auf Tirana, Berat, Gjirokastra und die südliche Küste konzentrieren. Für Norden, Alpen und Süden zusammen ist eine Woche zu kurz. Die Route gewinnt, wenn mindestens eine große Region bewusst wegfällt.',
  },
  {
    question: 'Sind mit 7 Tagen auch 6 Nächte gemeint?',
    answer:
      'Diese Beispielroute rechnet mit sieben Reisetagen und sechs Nächten. Sie funktioniert am besten bei Ankunft bis zum frühen Nachmittag und einem Rückflug am Nachmittag oder Abend. Andere Flugzeiten verändern Tag 1 und Tag 7.',
  },
  {
    question: 'Warum fehlen Shkodra, Theth und die Albanischen Alpen?',
    answer:
      'Weil die Verbindung von Alpen und Riviera in einer Woche zu viele lange Fahrtage und Hotelwechsel erzeugt. Für eine Nordroute ersetzen wir Berat, Gjirokastra und die Riviera komplett durch Shkodra, Koman, Valbona oder Theth.',
  },
  {
    question: 'Ist die Route mit dem Mietwagen machbar?',
    answer:
      'Ja. Die klassische Südroute ist als Selbstfahrer gut planbar. Wichtig sind passende Parkmöglichkeiten, realistische Fahrzeiten und die Entscheidung, ob einzelne Stadtführungen oder Transfers lokal ergänzt werden sollen.',
  },
  {
    question: 'Brauchen wir in Albanien einen Fahrer und einen Guide?',
    answer:
      'Nicht unbedingt. Ein Fahrer ist für entspanntes Reisen zuständig, ein Guide für Geschichte, Alltag und Gespräche. Manche Gruppen möchten beides, andere buchen nur einzelne deutschsprachige Führungen und fahren die übrige Strecke selbst.',
  },
  {
    question: 'Kann Arjes diese 7-Tage-Reise persönlich begleiten?',
    answer:
      'Arjes begleitet ausgewählte Wochenenden, Tirana-Termine und kurze Abschnitte persönlich. Für eine ganze Woche schlägt sie je nach Datum einen vertrauten lizenzierten deutschsprachigen Guide und Fahrer vor. Vor Ihrer Zusage wissen Sie, wer vorgesehen ist.',
  },
  {
    question: 'Wie viel Zeit verbringen wir im Auto?',
    answer:
      'An vier Tagen gibt es relevante Fahrstrecken. Meist liegen sie bei ungefähr zwei bis vier Stunden reiner Fahrt. Tag 4 und Tag 6 sind die längsten; deshalb bleibt Tag 5 bewusst ohne Hotelwechsel.',
  },
  {
    question: 'Kann man in einer Woche Rundreise und Strand verbinden?',
    answer:
      'Ja, aber der Strandanteil bleibt kompakt. Diese Route enthält zwei Nächte an der Riviera. Für drei oder vier echte Strandtage sollte ein Kulturort entfallen oder die Reise auf zehn Tage verlängert werden.',
  },
  {
    question: 'Was kostet eine 7-tägige private Rundreise?',
    answer:
      'Das hängt stark davon ab, ob Sie selbst fahren, nur einzelne Führungen buchen oder sieben Tage mit Guide und privatem Fahrer reisen. Nach Flugzeiten, Gruppe und Reiseart erhalten Sie ein transparentes Angebot ohne erfundene Pauschale.',
  },
  {
    question: 'Wann ist die beste Reisezeit für diese Route?',
    answer:
      'Mai, Juni, September und Anfang Oktober verbinden meist angenehme Rundreisetemperaturen mit einer funktionierenden Küstensaison. Juli und August sind möglich, erfordern aber frühere Starts und sorgfältigere Küstenplanung. Im Winter passen wir die Route deutlich an.',
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
    title: 'Albanien Rundreise 7 Tage: Route & Planung | Arjes',
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
      title: 'Albanien-Rundreise in 7 Tagen | Arjes',
      description: META_DESCRIPTION,
      images: [
        {
          url: '/photos/zvernec.jpeg',
          width: 4000,
          height: 3000,
          alt: 'Holzsteg über die Lagune bei Zvërnec in Albanien',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Albanien-Rundreise in 7 Tagen | Arjes',
      description: META_DESCRIPTION,
      images: ['/photos/zvernec.jpeg'],
    },
  };
}

export default async function AlbanienRundreiseSiebenTagePage({
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
    name: 'Individuelle Albanien-Rundreise in 7 Tagen',
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
    serviceType: [
      '7-tägige Albanien-Rundreise',
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
        item: `${SITE_URL}/de/albanien-rundreise`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Albanien Rundreise 7 Tage',
        item: PAGE_URL,
      },
    ],
  };

  const itineraryJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Route für eine 7-tägige Albanien-Rundreise',
    numberOfItems: itinerary.length,
    itemListElement: itinerary.map((day, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: day.title,
      description: day.body,
    })),
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itineraryJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <header className={sharedStyles.siteHeader}>
        <Link className={sharedStyles.brand} href="/de" aria-label="Arjes Startseite">
          <span className={sharedStyles.brandMark}>A</span>
          <span className={sharedStyles.wordmark}>Arjes.</span>
        </Link>
        <nav className={sharedStyles.pageNav} aria-label="Auf dieser Seite">
          <a href="#route">Route</a>
          <a href="#reiseplan">Tag für Tag</a>
          <a href="#reiseart">Reiseart</a>
          <a href="#fragen">Fragen</a>
        </nav>
        <a className={sharedStyles.headerCta} href="#inquire">
          Reise anfragen <span aria-hidden="true">→</span>
        </a>
      </header>

      <main id="top">
        <section className={sharedStyles.hero}>
          <div className={sharedStyles.heroCopy}>
            <div className={sharedStyles.breadcrumbs} aria-label="Brotkrümelnavigation">
              <Link href="/de">Startseite</Link>
              <span aria-hidden="true">/</span>
              <Link href="/de/albanien-rundreise">Rundreisen</Link>
              <span aria-hidden="true">/</span>
              <span>7 Tage</span>
            </div>
            <p className={sharedStyles.eyebrow}>7 Tage · 6 Nächte · südliche Runde</p>
            <h1>Albanien-Rundreise in 7 Tagen, ohne jeden Tag zu hetzen.</h1>
            <p className={sharedStyles.heroLede}>
              Tirana, Berat, Gjirokastra und die Riviera—als Selbstfahrer, mit privatem Fahrer und deutschsprachigem Guide oder als Kombination. Eine ehrliche Wochenroute mit Platz zum Ankommen.
            </p>
            <div className={sharedStyles.heroActions}>
              <a className={sharedStyles.primaryButton} href="#inquire">
                7-Tage-Reise anfragen <span aria-hidden="true">→</span>
              </a>
              <a className={sharedStyles.textLink} href="#reiseplan">
                Reiseplan ansehen
              </a>
            </div>
            <ul className={sharedStyles.heroFacts} aria-label="Eckdaten der Route">
              <li>7 Tage · 6 Nächte</li>
              <li>4 Übernachtungsorte</li>
              <li>2 Nächte an der Riviera</li>
            </ul>
          </div>

          <div className={sharedStyles.heroVisual}>
            <Image
              src="/photos/zvernec.jpeg"
              alt="Holzsteg über die Lagune bei Zvërnec in Südalbanien"
              fill
              priority
              sizes="(max-width: 820px) 100vw, 46vw"
              className={sharedStyles.heroImage}
            />
            <div className={sharedStyles.imageScrim} />
            <p className={sharedStyles.imageCaption}>Südalbanien · zwischen Kultur und Küste</p>
            <div className={sharedStyles.heroNote}>
              <span className={sharedStyles.noteNumber}>07</span>
              <p>Eine Woche funktioniert, wenn die Route entscheidet, was draußen bleibt.</p>
            </div>
          </div>
        </section>

        <section className={sharedStyles.promise} aria-labelledby="week-title">
          <p className={sharedStyles.sectionLabel}>Die wichtigste Entscheidung</p>
          <div className={sharedStyles.promiseCopy}>
            <h2 id="week-title">Der Süden oder die Alpen. Nicht beides in sieben Tagen.</h2>
            <p>
              Diese Route konzentriert sich auf Städte, Geschichte und die Ionische Küste. Shkodra, Koman, Valbona und Theth bleiben bewusst draußen. Für Berge entwerfen wir eine eigene Nordroute statt einer langen Checkliste auf Rädern.
            </p>
          </div>
        </section>

        <section className={detailStyles.routeSummary} id="route" aria-labelledby="route-title">
          <div className={detailStyles.routeSummaryHead}>
            <p className={sharedStyles.sectionLabel}>Die Route auf einen Blick</p>
            <h2 id="route-title">Tirana → Berat → Gjirokastra → Riviera → Tirana</h2>
            <p>
              Geplant für eine Ankunft bis zum frühen Nachmittag an Tag 1 und einen Rückflug nach Mittag an Tag 7. Andere Flugzeiten verändern die erste und letzte Etappe.
            </p>
          </div>
          <ol className={detailStyles.routeRibbon}>
            <li><span>01</span><strong>Tirana</strong><small>1 Nacht</small></li>
            <li><span>02</span><strong>Berat</strong><small>1 Nacht</small></li>
            <li><span>03</span><strong>Gjirokastra</strong><small>1 Nacht</small></li>
            <li><span>04–05</span><strong>Riviera</strong><small>2 Nächte</small></li>
            <li><span>06</span><strong>Tirana</strong><small>1 Nacht</small></li>
            <li><span>07</span><strong>Abreise</strong><small>flexibel</small></li>
          </ol>
          <div className={detailStyles.summaryActions}>
            <a className={sharedStyles.primaryButton} href="#inquire">Route an meine Flüge anpassen <span aria-hidden="true">→</span></a>
            <Link className={sharedStyles.textLink} href="/de/albanien-rundreise-10-tage">10-Tage-Route ansehen</Link>
            <Link className={sharedStyles.textLink} href="/de/albanien-rundreise">Andere Reisedauern vergleichen</Link>
          </div>
        </section>

        <section className={detailStyles.itinerary} id="reiseplan" aria-labelledby="itinerary-title">
          <div className={detailStyles.itineraryIntro}>
            <p className={sharedStyles.sectionLabel}>Tag für Tag</p>
            <h2 id="itinerary-title">Ein Reiseplan, der auch auf der Straße funktioniert.</h2>
            <p>
              Fahrzeiten sind Richtwerte ohne lange Stopps. Verkehr, Jahreszeit und tatsächliche Unterkunft verändern sie. Genau deshalb beginnt die Feinplanung erst mit Ihren Daten.
            </p>
          </div>
          <ol className={detailStyles.dayList}>
            {itinerary.map((day) => (
              <li className={detailStyles.day} key={day.day}>
                <div className={detailStyles.dayNumber}>{day.day}</div>
                <div className={detailStyles.dayContent}>
                  <h3>{day.title}</h3>
                  <div className={detailStyles.dayMeta}>
                    <span>{day.route}</span>
                    <span>{day.drive}</span>
                    <span>Übernachtung: {day.overnight}</span>
                  </div>
                  <p>{day.body}</p>
                  <p className={detailStyles.dayNote}>{day.note}</p>
                  <div className={detailStyles.dayImageWrap}>
                    <Image
                      src={day.image}
                      alt={day.alt}
                      fill
                      sizes="(max-width: 820px) 100vw, 62vw"
                      className={detailStyles.dayImage}
                    />
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className={sharedStyles.travelStyles} id="reiseart" aria-labelledby="mode-title">
          <div className={sharedStyles.sectionHeading}>
            <p className={sharedStyles.sectionLabel}>Drei Wege für dieselbe Route</p>
            <h2 id="mode-title">Selbst fahren, begleitet reisen oder beides verbinden.</h2>
            <p>Die Orte können gleich bleiben; Organisation, Preis und Erlebnis unterscheiden sich deutlich.</p>
          </div>
          <div className={detailStyles.threeColumnGrid}>
            {travelModes.map((mode) => (
              <article className={sharedStyles.styleCard} key={mode.number}>
                <span className={sharedStyles.cardNumber}>{mode.number}</span>
                <h3>{mode.title}</h3>
                <p className={sharedStyles.bestFor}>{mode.bestFor}</p>
                <p>{mode.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={sharedStyles.coordination} aria-labelledby="adjust-title">
          <div className={sharedStyles.coordinationIntro}>
            <p className={sharedStyles.sectionLabel}>Wie die Route sich verändert</p>
            <h2 id="adjust-title">Sieben Tage sind nicht für jede Gruppe dieselben sieben Tage.</h2>
            <p>Wir verändern nicht nur Restaurantnamen. Wir streichen, verschieben und verlängern dort, wo es für Ihre Reise einen echten Unterschied macht.</p>
          </div>
          <ol className={sharedStyles.coordinationList}>
            {routeAdjustments.map(([title, body], index) => (
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

        <section className={detailStyles.realityCheck} aria-labelledby="fit-title">
          <div className={detailStyles.realityCopy}>
            <p className={sharedStyles.sectionLabel}>Passt diese Route zu Ihnen?</p>
            <h2 id="fit-title">Gut für einen ersten Eindruck. Nicht für alles auf einmal.</h2>
          </div>
          <div className={detailStyles.fitColumns}>
            <div>
              <h3>Diese Woche passt, wenn Sie …</h3>
              <ul>
                <li>zum ersten Mal nach Albanien reisen</li>
                <li>Kultur und zwei Küstennächte verbinden möchten</li>
                <li>vier relevante Fahrtage akzeptieren</li>
                <li>bewusst auf die nördlichen Alpen verzichten</li>
              </ul>
            </div>
            <div>
              <h3>Wir würden anders planen, wenn Sie …</h3>
              <ul>
                <li>hauptsächlich wandern möchten</li>
                <li>drei oder mehr volle Strandtage brauchen</li>
                <li>sehr spät ankommen und früh abreisen</li>
                <li>höchstens zweimal das Hotel wechseln möchten</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={sharedStyles.process} aria-labelledby="process-title">
          <div className={sharedStyles.sectionHeading}>
            <p className={sharedStyles.sectionLabel}>Von der Route zum Angebot</p>
            <h2 id="process-title">Vier Schritte zu Ihrer eigenen Woche.</h2>
          </div>
          <ol className={sharedStyles.processGrid}>
            <li><span>01</span><h3>Flüge und Gruppe senden</h3><p>Ankunft, Abflug, Personen, Alter der Kinder und besondere Anforderungen.</p></li>
            <li><span>02</span><h3>Reiseart wählen</h3><p>Selbstfahrer, Guide und Fahrer oder eine Kombination mit klarer Übergabe.</p></li>
            <li><span>03</span><h3>Route feinplanen</h3><p>Stopps, Tempo, Übernachtungsorte und die eine Sache, die bewusst draußen bleibt.</p></li>
            <li><span>04</span><h3>Klares Angebot erhalten</h3><p>Mit Rollen, Leistungen, direkten Partnerkosten und dem nächsten praktischen Schritt.</p></li>
          </ol>
        </section>

        <section className={sharedStyles.pricing} aria-labelledby="price-title">
          <div>
            <p className={sharedStyles.sectionLabel}>Preis nach Reiseart</p>
            <h2 id="price-title">Eine Route. Drei sehr unterschiedliche Angebote.</h2>
          </div>
          <div className={sharedStyles.pricingBody}>
            <p>
              Selbstfahrer zahlen vor allem für Planung und gebuchte Bausteine. Eine vollständig begleitete Woche umfasst Guide, Fahrzeug und Fahrer. Die Kombinationsreise liegt dazwischen. Eine einzige Pauschale wäre deshalb irreführend.
            </p>
            <p className={sharedStyles.quoteIntro}>Für ein belastbares Angebot brauchen wir:</p>
            <ul>
              {quoteFactors.map((factor) => <li key={factor}>{factor}</li>)}
            </ul>
            <p className={sharedStyles.pricingPromise}>
              Sie sehen vor der Zusage, was enthalten ist, was Sie an uns zahlen und welche Hotels, Mietwagenfirmen oder lokalen Partner Sie direkt bezahlen.
            </p>
            <a className={sharedStyles.primaryButton} href="#inquire">Angebot für 7 Tage anfragen <span aria-hidden="true">→</span></a>
          </div>
        </section>

        <section className={sharedStyles.faq} id="fragen" aria-labelledby="faq-title">
          <div className={sharedStyles.faqIntro}>
            <p className={sharedStyles.sectionLabel}>Häufige Fragen</p>
            <h2 id="faq-title">Was vor einer einwöchigen Rundreise wichtig ist.</h2>
            <p>Die wichtigste Information fehlt noch? Schreiben Sie uns einfach Ihre Flugzeiten und Ihre größte Unsicherheit.</p>
          </div>
          <div className={sharedStyles.faqList}>
            {faqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary><span>{faq.question}</span><span className={sharedStyles.faqIcon} aria-hidden="true">+</span></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className={sharedStyles.preInquiry} aria-labelledby="inquiry-title">
          <p className={sharedStyles.sectionLabel}>Machen wir die Woche konkret</p>
          <h2 id="inquiry-title">Senden Sie Ihre Flüge. Wir sagen ehrlich, was in sieben Tagen funktioniert.</h2>
          <p>Ein Satz reicht: Reisedaten, Personen und ob Sie selbst fahren, begleitet reisen oder beides kombinieren möchten.</p>
        </section>

        <Inquire />
      </main>
      <Footer homeHref="/de" />
    </>
  );
}
