import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { Footer } from '@/components/Footer';
import { Inquire } from '@/components/Inquire';
import { SITE_URL } from '@/lib/site';

import detailStyles from '../albanien-rundreise-7-tage/page.module.css';
import sharedStyles from '../private-albania-tours/page.module.css';

const PAGE_PATH = '/de/albanien-rundreise-10-tage';
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const META_DESCRIPTION =
  'Albanien-Rundreise in 10 Tagen: Tirana, Shkodra, Berat, Gjirokastra und Riviera. Individuell mit Guide, Fahrer oder Mietwagen geplant.';

const itinerary = [
  {
    day: 'Tag 01',
    title: 'Ankommen und Tirana verstehen',
    route: 'Flughafen Tirana → Stadtzentrum',
    drive: 'ca. 30–45 Min. Transfer',
    overnight: 'Tirana',
    body: 'Der erste Tag bleibt bewusst leicht. Nach dem Transfer lernen Sie Tirana zu Fuß kennen: Skanderbeg-Platz, Et’hem-Bey-Moschee, Blloku und die Spuren der jüngeren Geschichte. Bei später Ankunft beginnt die Reise einfach mit einem gemeinsamen Abendessen.',
    note: 'Die Flugzeit entscheidet über den Umfang. Was heute nicht passt, bekommt an Tag 10 einen sinnvollen Platz, statt den Ankunftstag zu überladen.',
    image: '/photos/bektashi.jpeg',
    alt: 'Kulturelles Detail in Tirana',
  },
  {
    day: 'Tag 02',
    title: 'Von Tirana an den See von Shkodra',
    route: 'Tirana → Shkodra',
    drive: 'ca. 2–2,5 Std. reine Fahrt',
    overnight: 'Shkodra',
    body: 'Shkodra öffnet die Tür zum Norden, ohne sofort einen komplizierten Bergtransfer zu verlangen. Nach der Ankunft bleiben Zeit für die Stadt, die Rozafa-Festung und—je nach Licht und Wetter—einen ruhigen Abend in Shiroka am See.',
    note: 'Kruja kann bei früher Abfahrt als Zwischenstopp passen. Wenn Sie erst spät loskommen, lassen wir es weg, damit Shkodra nicht nur zum Schlafplatz wird.',
    image: '/photos/shiroke.jpeg',
    alt: 'Blick auf Shiroka und den Shkodra-See',
  },
  {
    day: 'Tag 03',
    title: 'Ein Nordtag, der zu Jahreszeit und Energie passt',
    route: 'Shkodra · Theth oder See und Umland',
    drive: 'von kurzen Strecken bis zu einem langen Tagesausflug',
    overnight: 'Shkodra',
    body: 'Sie wählen zwischen zwei ehrlichen Varianten: einem langen, saisonabhängigen Tagesausflug Richtung Theth oder einem langsameren Tag mit Shkodra, Rozafa, See und ländlichem Umland. Das Hotel bleibt in beiden Fällen gleich.',
    note: 'Theth ist kein Pflichtpunkt. Wetter, Straßenlage, gewünschte Wanderung und Gruppendynamik entscheiden. Für Koman, Valbona und mehrere Nächte in den Alpen planen wir mindestens 14 Tage.',
    image: '/photos/theth.jpeg',
    alt: 'Wasserfall und Berglandschaft bei Theth in Nordalbanien',
  },
  {
    day: 'Tag 04',
    title: 'Vom Norden in die Stadt der tausend Fenster',
    route: 'Shkodra → Berat',
    drive: 'ca. 3,5–4,5 Std. ohne längere Stopps',
    overnight: 'Berat',
    body: 'Heute verbindet die Route Nord- und Südalbanien. Nach der längeren Fahrt reicht der Nachmittag für einen ersten Spaziergang durch Mangalem und Gorica und einen entspannten Abend am Osum.',
    note: 'Verkehr rund um Tirana kann die Fahrzeit verändern. Deshalb planen wir an diesem Tag keine zweite große Besichtigung als festes Versprechen ein.',
    image: '/photos/berat-bridge.jpeg',
    alt: 'Historische Brücke und Altstadt von Berat',
  },
  {
    day: 'Tag 05',
    title: 'Berat nicht nur fotografieren, sondern erleben',
    route: 'Berat und Umgebung',
    drive: 'nur kurze lokale Strecken',
    overnight: 'Berat',
    body: 'Die zweite Nacht macht aus Berat mehr als einen Zwischenstopp. Burg, kleine Kirchen, osmanische Viertel und heutiges Leben bekommen Zeit. Je nach Interesse ergänzen wir ein Weingut, ein Dorf oder einen kulinarischen Baustein.',
    note: 'Osum-Canyon oder Apollonia können Alternativen sein, aber nicht zusätzlich zu allem anderen. Wir wählen einen Schwerpunkt, der zur Saison und zu Ihrer Gruppe passt.',
    image: '/photos/berat.jpeg',
    alt: 'Traditionelle Häuser im historischen Berat',
  },
  {
    day: 'Tag 06',
    title: 'Über Land nach Gjirokastra',
    route: 'Berat → Gjirokastra',
    drive: 'ca. 2,5–3 Std. reine Fahrt',
    overnight: 'Gjirokastra',
    body: 'Die Fahrt nach Gjirokastra bleibt überschaubar. So ist am Nachmittag Zeit für Festung, Basar und die steilen Altstadtgassen. Mit Guide werden die Steinhäuser zum Einstieg in Familiengeschichte, Alltag und die verschiedenen Epochen der Stadt.',
    note: 'Wer einen familiären Bezug zu Albanien hat, kann diesen Tag für ein Dorf, ein Treffen oder eine Recherche anpassen. Dann wird das klassische Besichtigungsprogramm bewusst kürzer.',
    image: '/photos/gjirokaster-pov.jpeg',
    alt: 'Blick über die Steindächer von Gjirokastra',
  },
  {
    day: 'Tag 07',
    title: 'Butrint und der Weg an die Ionische Küste',
    route: 'Gjirokastra → Butrint → Riviera',
    drive: 'ca. 3–4 Std. reine Fahrt',
    overnight: 'Himara oder Umgebung',
    body: 'Butrint verbindet antike Geschichte mit einer besonderen Landschaft. Danach geht es an die Riviera. Wer mit kleinen Kindern reist, große Hitze vermeiden möchte oder mehr Meer braucht, fährt früher zur Küste und lässt Butrint weg.',
    note: 'Dies ist der dichteste Tag im Süden. Eintrittszeit, Verkehr und Unterkunftslage werden vorab aufeinander abgestimmt, damit die Ankunft nicht erst spät am Abend erfolgt.',
    image: '/photos/butrint-fortress.jpeg',
    alt: 'Historische Festungsmauern in Butrint',
  },
  {
    day: 'Tag 08',
    title: 'Ein voller Tag ohne Koffer',
    route: 'Albanische Riviera',
    drive: 'nur kurze lokale Strecken',
    overnight: 'Himara oder Umgebung',
    body: 'Strand, Boot, Küstendorf, kurzer Spaziergang oder ein langes Mittagessen: Dieser Tag bekommt nur einen Schwerpunkt. Im Hochsommer sind frühe Starts und ein gut gewählter Standort wichtiger als möglichst viele Buchten.',
    note: 'In der Nebensaison prüfen wir, welche Restaurants, Boote und kleine Hotels tatsächlich geöffnet sind. Die Küste funktioniert dann anders, aber nicht automatisch schlechter.',
    image: '/photos/zvernec.jpeg',
    alt: 'Holzsteg über eine Lagune an der albanischen Küste',
  },
  {
    day: 'Tag 09',
    title: 'Über Llogara zurück nach Tirana',
    route: 'Riviera → Llogara → Tirana',
    drive: 'ca. 3,5–4,5 Std. ohne längere Stopps',
    overnight: 'Tirana',
    body: 'Die Küstenstraße und der Llogara-Pass bilden den landschaftlichen Abschluss der Runde. Mit großzügigem Puffer bleibt Raum für Aussichtspunkte und Mittagessen, ohne die letzte Nacht vor dem Flug an der Küste zu riskieren.',
    note: 'Bei sehr spätem Rückflug an Tag 10 kann eine zusätzliche Küstennacht möglich sein. Bei frühem Flug bleibt Tirana oder Flughafennähe die vernünftigere Wahl.',
    image: '/photos/vjosa.jpeg',
    alt: 'Weite Fluss- und Berglandschaft in Albanien',
  },
  {
    day: 'Tag 10',
    title: 'Tirana, Dajti oder entspannte Abreise',
    route: 'Tirana → Flughafen',
    drive: 'abhängig von Flugzeit und Verkehr',
    overnight: 'Abreise',
    body: 'Bei einem späten Flug bleibt Zeit für Bunk’Art I, die Dajti-Seilbahn, einen Marktbesuch oder das Tirana-Programm, das an Tag 1 nicht mehr gepasst hat. Bei frühem Abflug bleibt der Morgen ohne künstliches Pflichtprogramm.',
    note: 'Der letzte Tag wird erst nach Ihrer Flugzeit geplant. Transfers, Gepäck und Verkehr haben Vorrang vor einer letzten Sehenswürdigkeit auf dem Papier.',
    image: '/photos/durres-amphitheatre.jpeg',
    alt: 'Historische Steinbögen in Albanien',
  },
];

const northernChoices = [
  {
    number: '01',
    title: 'Shkodra langsam',
    bestFor: 'Kultur, See und wenig Fahrzeit',
    body: 'Rozafa, Stadtleben, Shiroka und Umland ergeben einen vollständigen Nordtag. Diese Variante funktioniert ganzjährig am verlässlichsten.',
  },
  {
    number: '02',
    title: 'Theth als Tagesausflug',
    bestFor: 'Ein erster Blick in die Albanischen Alpen',
    body: 'Saisonal und bei passender Gruppe ist ein langer Tagesausflug möglich. Er bringt Berglandschaft, aber keine tiefe Alpenreise.',
  },
  {
    number: '03',
    title: 'Die Alpen richtig',
    bestFor: 'Koman, Valbona, Theth und Wanderungen',
    body: 'Dafür verlängern wir auf 14 Tage oder ersetzen den Süden. Transfers, Fähre, Wetter und mehrere Übernachtungen brauchen eigenen Raum.',
  },
];

const travelModes = [
  {
    number: '01',
    title: 'Als Selbstfahrer',
    bestFor: 'Freiheit mit einer belastbaren Route',
    body: 'Sie fahren selbst und erhalten eine realistische Etappenplanung, passende Übernachtungsorte, Hinweise zu Übergaben und auf Wunsch lokale Führungen.',
  },
  {
    number: '02',
    title: 'Mit Fahrer und Guide',
    bestFor: 'Mehr Kontext, weniger Logistik',
    body: 'Ein privater Fahrer übernimmt die Strecke. Ein deutschsprachiger Guide begleitet durchgehend oder an den kulturell wichtigsten Tagen.',
  },
  {
    number: '03',
    title: 'Als Kombination',
    bestFor: 'Geführter Start, später unabhängig',
    body: 'Starten Sie mit Guide und Fahrer im Norden und Landesinneren. An einem vereinbarten Ort übernehmen Sie den Mietwagen für die Küste.',
  },
];

const routeAdjustments = [
  ['Späte Ankunft oder früher Rückflug', 'Tirana wird kompakter, die erste oder letzte Nacht bleibt aber bestehen. So gerät die gesamte Runde nicht wegen zweier Flugzeiten unter Druck.'],
  ['Familien mit Kindern', 'Der ruhigere Shkodra-Tag ersetzt Theth, Butrint wird optional und die Riviera bekommt verlässlich Zeit ohne Hotelwechsel.'],
  ['Mehr Berge', 'Theth erhält eine Übernachtung und die Küste wird kürzer—oder wir wechseln direkt auf eine 14-Tage-Route mit echter Nordetappe.'],
  ['Mehr Meer', 'Ein Kulturtag oder Shkodra fällt weg. Dafür bleiben drei bis vier Nächte an einem Küstenort, statt jeden Strand nur kurz zu sehen.'],
  ['Reise im Winter', 'Shkodra bleibt möglich, Theth wird nicht versprochen und die Riviera kann durch Korça, Përmet, Kulinarik und Alltagskultur ersetzt werden.'],
] as const;

const quoteFactors = [
  'Ihre genauen Flugzeiten und Reisedaten',
  'Gruppengröße, Kinder und gewünschtes Fahrzeug',
  'Selbstfahrer, Guide, Fahrer oder Kombination',
  'Shkodra langsam oder saisonaler Theth-Ausflug',
  'Unterkünfte und Leistungen, die wir koordinieren',
];

const faqs = [
  {
    question: 'Reichen 10 Tage für eine Albanien-Rundreise?',
    answer:
      'Ja. Zehn Tage reichen für Tirana, Shkodra, Berat, Gjirokastra und zwei Nächte an der Riviera, wenn der Norden kompakt bleibt. Für Koman, Valbona, Theth und den Süden zusammen empfehlen wir mindestens 14 Tage.',
  },
  {
    question: 'Sind mit 10 Tagen auch 9 Nächte gemeint?',
    answer:
      'Diese Beispielroute rechnet mit zehn Reisetagen und neun Nächten. Sie funktioniert am besten bei Ankunft bis zum frühen Nachmittag an Tag 1 und einem Rückflug nach Mittag an Tag 10. Andere Flugzeiten verändern Anfang und Ende.',
  },
  {
    question: 'Kann man Theth in die 10-Tage-Route einbauen?',
    answer:
      'Als saisonaler Tagesausflug ab Shkodra kann Theth passen. Wetter, gewünschte Wanderung und Gruppendynamik müssen stimmen. Für mehrere Nächte in den Alpen oder die Verbindung mit Koman und Valbona sollte die Reise länger sein.',
  },
  {
    question: 'Warum sind Koman und Valbona nicht Teil dieser Route?',
    answer:
      'Fähre, Transfers und Bergübernachtungen brauchen mehrere Tage und sind keine kurzen Stopps. Zusammen mit Berat, Gjirokastra und Riviera würde die Reise zu einer Folge langer Fahrtage. In 14 Tagen lässt sich diese Verbindung sauber planen.',
  },
  {
    question: 'Ist die Rundreise mit dem Mietwagen machbar?',
    answer:
      'Ja, die Grundroute ist als Selbstfahrer planbar. Für einzelne Bergabschnitte kann ein lokaler Transfer sinnvoller sein. Wir berücksichtigen Fahrzeug, Parken, Unterkunftslage, Jahreszeit und eine mögliche Mietwagenübergabe unterwegs.',
  },
  {
    question: 'Brauchen wir einen Fahrer und einen Guide?',
    answer:
      'Nicht zwingend. Der Fahrer übernimmt die Straße, der Guide vermittelt Geschichte und Alltag. Sie können beide für die gesamte Reise buchen, nur einzelne deutschsprachige Führungen ergänzen oder nach einigen Tagen auf einen Mietwagen wechseln.',
  },
  {
    question: 'Kann Arjes die gesamte Rundreise persönlich begleiten?',
    answer:
      'Arjes begleitet ausgewählte Wochenenden, Tirana-Termine und Reiseabschnitte persönlich. Für längere Routen schlägt sie je nach Datum vertraute lizenzierte deutschsprachige Guides und Fahrer vor. Vor der Zusage wissen Sie, wer vorgesehen ist.',
  },
  {
    question: 'Wie viel Zeit verbringen wir im Auto?',
    answer:
      'An fünf Tagen gibt es relevante Fahrstrecken. Die längsten Verbindungen sind Shkodra nach Berat sowie Riviera nach Tirana. Dazwischen liegen drei Standorte mit jeweils zwei Nächten, damit nicht jeder Tag ein Umzugstag wird.',
  },
  {
    question: 'Was kostet eine private 10-tägige Albanien-Rundreise?',
    answer:
      'Der Preis hängt stark von Gruppengröße, Fahrzeug, Anzahl der geführten Tage, Unterkünften und Reiseart ab. Selbstfahrer, Kombinationsreise und zehn Tage mit privatem Fahrer und Guide sind unterschiedliche Produkte. Nach Ihren Eckdaten erhalten Sie ein transparentes Angebot.',
  },
  {
    question: 'Wann ist die beste Reisezeit für diese Route?',
    answer:
      'Mai, Juni, September und Anfang Oktober verbinden meist angenehme Rundreisetemperaturen mit einer funktionierenden Küstensaison. Juli und August brauchen frühere Starts. Im Winter ersetzen wir Bergversprechen und einzelne Küstenbausteine durch eine passende Kulturroute.',
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
    title: 'Albanien Rundreise 10 Tage: Route & Planung | Arjes',
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
      title: 'Albanien-Rundreise in 10 Tagen | Arjes',
      description: META_DESCRIPTION,
      images: [
        {
          url: '/photos/shiroke.jpeg',
          width: 1600,
          height: 900,
          alt: 'Shiroka und der Shkodra-See im Norden Albaniens',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Albanien-Rundreise in 10 Tagen | Arjes',
      description: META_DESCRIPTION,
      images: ['/photos/shiroke.jpeg'],
    },
  };
}

export default async function AlbanienRundreiseZehnTagePage({
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
    name: 'Individuelle Albanien-Rundreise in 10 Tagen',
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
      '10-tägige Albanien-Rundreise',
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
        name: 'Albanien Rundreise 10 Tage',
        item: PAGE_URL,
      },
    ],
  };

  const itineraryJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Route für eine 10-tägige Albanien-Rundreise',
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
          <a href="#norden">Der Norden</a>
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
              <span>10 Tage</span>
            </div>
            <p className={sharedStyles.eyebrow}>10 Tage · 9 Nächte · Nord und Süd</p>
            <h1>Albanien-Rundreise in 10 Tagen: mehr Vielfalt, ohne alles hineinzupressen.</h1>
            <p className={sharedStyles.heroLede}>
              Tirana, Shkodra, Berat, Gjirokastra und die Riviera—als Selbstfahrer, mit privatem Fahrer und deutschsprachigem Guide oder als Kombination. Eine ausgewogene erste Runde mit drei ruhigen Doppelübernachtungen.
            </p>
            <div className={sharedStyles.heroActions}>
              <a className={sharedStyles.primaryButton} href="#inquire">
                10-Tage-Reise anfragen <span aria-hidden="true">→</span>
              </a>
              <a className={sharedStyles.textLink} href="#reiseplan">
                Reiseplan ansehen
              </a>
            </div>
            <ul className={sharedStyles.heroFacts} aria-label="Eckdaten der Route">
              <li>10 Tage · 9 Nächte</li>
              <li>5 Übernachtungsorte</li>
              <li>3 Standorte mit je 2 Nächten</li>
            </ul>
          </div>

          <div className={sharedStyles.heroVisual}>
            <Image
              src="/photos/shiroke.jpeg"
              alt="Shiroka am Shkodra-See im Norden Albaniens"
              fill
              priority
              sizes="(max-width: 820px) 100vw, 46vw"
              className={sharedStyles.heroImage}
            />
            <div className={sharedStyles.imageScrim} />
            <p className={sharedStyles.imageCaption}>Shkodra-See · der ruhige Einstieg in den Norden</p>
            <div className={sharedStyles.heroNote}>
              <span className={sharedStyles.noteNumber}>10</span>
              <p>Zehn Tage reichen für Shkodra und den Süden. Für die Alpen als echte Etappe empfehlen wir 14.</p>
            </div>
          </div>
        </section>

        <section className={sharedStyles.promise} aria-labelledby="ten-days-title">
          <p className={sharedStyles.sectionLabel}>Die wichtigste Entscheidung</p>
          <div className={sharedStyles.promiseCopy}>
            <h2 id="ten-days-title">Zehn Tage schaffen mehr Raum. Aber noch keine zwei vollständigen Reisen.</h2>
            <p>
              Shkodra bringt den Norden sinnvoll in die klassische Südroute. Koman, Valbona und Theth als mehrtägige Alpenetappe bleiben bewusst draußen. So bekommen Berat und die Riviera je zwei Nächte, statt dass jeder zusätzliche Ort einen neuen Koffer- und Fahrtag erzeugt.
            </p>
          </div>
        </section>

        <section className={detailStyles.routeSummary} id="route" aria-labelledby="route-title">
          <div className={detailStyles.routeSummaryHead}>
            <p className={sharedStyles.sectionLabel}>Die Route auf einen Blick</p>
            <h2 id="route-title">Tirana → Shkodra → Berat → Gjirokastra → Riviera → Tirana</h2>
            <p>
              Geplant für eine Ankunft bis zum frühen Nachmittag an Tag 1 und einen Rückflug nach Mittag an Tag 10. Fahrzeiten sind Richtwerte; Ihre Flüge und die Saison entscheiden über die Feinplanung.
            </p>
          </div>
          <ol className={detailStyles.routeRibbon}>
            <li><span>01</span><strong>Tirana</strong><small>1 Nacht</small></li>
            <li><span>02–03</span><strong>Shkodra</strong><small>2 Nächte</small></li>
            <li><span>04–05</span><strong>Berat</strong><small>2 Nächte</small></li>
            <li><span>06</span><strong>Gjirokastra</strong><small>1 Nacht</small></li>
            <li><span>07–08</span><strong>Riviera</strong><small>2 Nächte</small></li>
            <li><span>09–10</span><strong>Tirana</strong><small>1 Nacht · Abreise</small></li>
          </ol>
          <div className={detailStyles.summaryActions}>
            <a className={sharedStyles.primaryButton} href="#inquire">Route an meine Flüge anpassen <span aria-hidden="true">→</span></a>
            <Link className={sharedStyles.textLink} href="/de/albanien-rundreise-7-tage">Kompakte 7-Tage-Route</Link>
            <Link className={sharedStyles.textLink} href="/de/albanien-rundreise-14-tage">14 Tage mit echter Alpenetappe</Link>
          </div>
        </section>

        <section className={detailStyles.itinerary} id="reiseplan" aria-labelledby="itinerary-title">
          <div className={detailStyles.itineraryIntro}>
            <p className={sharedStyles.sectionLabel}>Tag für Tag</p>
            <h2 id="itinerary-title">Nord und Süd verbunden, ohne jeden Tag weiterzuziehen.</h2>
            <p>
              Die Zeiten nennen reine Fahrt ohne lange Stopps. Verkehr, Saison und Unterkunft verändern sie. An drei Orten bleiben Sie deshalb bewusst zwei Nächte.
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

        <section className={sharedStyles.travelStyles} id="norden" aria-labelledby="north-title">
          <div className={sharedStyles.sectionHeading}>
            <p className={sharedStyles.sectionLabel}>Was „der Norden“ in zehn Tagen bedeutet</p>
            <h2 id="north-title">Shkodra fest einplanen. Theth passend entscheiden.</h2>
            <p>Eine gute Route unterscheidet zwischen einem ersten Alpeneindruck und einer vollständigen Bergreise.</p>
          </div>
          <div className={detailStyles.threeColumnGrid}>
            {northernChoices.map((choice) => (
              <article className={sharedStyles.styleCard} key={choice.number}>
                <span className={sharedStyles.cardNumber}>{choice.number}</span>
                <h3>{choice.title}</h3>
                <p className={sharedStyles.bestFor}>{choice.bestFor}</p>
                <p>{choice.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={sharedStyles.coordination} aria-labelledby="adjust-title">
          <div className={sharedStyles.coordinationIntro}>
            <p className={sharedStyles.sectionLabel}>Wie die Route sich verändert</p>
            <h2 id="adjust-title">Zehn Tage müssen zu Ihrer Gruppe passen, nicht zu einer Vorlage.</h2>
            <p>Flüge, Kinder, Jahreszeit und Interessen verändern die Route stärker als eine Liste zusätzlicher Stopps.</p>
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

        <section className={sharedStyles.travelStyles} id="reiseart" aria-labelledby="mode-title">
          <div className={sharedStyles.sectionHeading}>
            <p className={sharedStyles.sectionLabel}>Drei Wege für dieselbe Route</p>
            <h2 id="mode-title">Selbst fahren, begleitet reisen oder unterwegs wechseln.</h2>
            <p>Die Route bleibt ähnlich. Verantwortung, Preis und persönlicher Kontext verändern sich deutlich.</p>
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

        <section className={detailStyles.realityCheck} aria-labelledby="fit-title">
          <div className={detailStyles.realityCopy}>
            <p className={sharedStyles.sectionLabel}>Passt diese Route zu Ihnen?</p>
            <h2 id="fit-title">Eine starke erste Rundreise. Keine vollständige Landesdurchquerung.</h2>
          </div>
          <div className={detailStyles.fitColumns}>
            <div>
              <h3>Diese Route passt, wenn Sie …</h3>
              <ul>
                <li>zum ersten Mal nach Albanien reisen</li>
                <li>Norden, historische Städte und Küste verbinden möchten</li>
                <li>drei Doppelübernachtungen schätzen</li>
                <li>Theth als Option und nicht als Pflichtpunkt sehen</li>
              </ul>
            </div>
            <div>
              <h3>Wir würden anders planen, wenn Sie …</h3>
              <ul>
                <li>Koman, Valbona und mehrere Wanderungen möchten</li>
                <li>vier oder mehr volle Strandtage brauchen</li>
                <li>höchstens zweimal das Hotel wechseln möchten</li>
                <li>im tiefen Winter eine Sommerrunde erwarten</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={sharedStyles.process} aria-labelledby="process-title">
          <div className={sharedStyles.sectionHeading}>
            <p className={sharedStyles.sectionLabel}>Von der Route zum Angebot</p>
            <h2 id="process-title">Vier Schritte zu Ihren zehn Tagen.</h2>
          </div>
          <ol className={sharedStyles.processGrid}>
            <li><span>01</span><h3>Flüge und Gruppe senden</h3><p>Ankunft, Abflug, Personen, Alter der Kinder und besondere Anforderungen.</p></li>
            <li><span>02</span><h3>Reiseart wählen</h3><p>Selbstfahrer, Guide und Fahrer oder eine Kombination mit klarer Übergabe.</p></li>
            <li><span>03</span><h3>Nordtag entscheiden</h3><p>Shkodra langsam, saisonaler Theth-Ausflug oder eine längere Alpenroute.</p></li>
            <li><span>04</span><h3>Klares Angebot erhalten</h3><p>Mit Rollen, Leistungen, direkten Partnerkosten und dem nächsten praktischen Schritt.</p></li>
          </ol>
        </section>

        <section className={sharedStyles.pricing} aria-labelledby="price-title">
          <div>
            <p className={sharedStyles.sectionLabel}>Preis nach Reiseart</p>
            <h2 id="price-title">Zehn Tage Selbstfahrer sind nicht dasselbe Produkt wie zehn Tage privat begleitet.</h2>
          </div>
          <div className={sharedStyles.pricingBody}>
            <p>
              Bei einer Selbstfahrerreise zahlen Sie vor allem für Planung und ausgewählte Bausteine. Eine vollständig begleitete Reise umfasst Guide, Fahrzeug und Fahrer. Bei der Kombination wechseln Leistung und Verantwortung unterwegs.
            </p>
            <p className={sharedStyles.quoteIntro}>Für ein belastbares Angebot brauchen wir:</p>
            <ul>
              {quoteFactors.map((factor) => <li key={factor}>{factor}</li>)}
            </ul>
            <p className={sharedStyles.pricingPromise}>
              Sie sehen vor der Zusage, was enthalten ist, was Sie an uns zahlen und welche Hotels, Mietwagenfirmen oder lokalen Partner Sie direkt bezahlen.
            </p>
            <a className={sharedStyles.primaryButton} href="#inquire">Angebot für 10 Tage anfragen <span aria-hidden="true">→</span></a>
          </div>
        </section>

        <section className={sharedStyles.faq} id="fragen" aria-labelledby="faq-title">
          <div className={sharedStyles.faqIntro}>
            <p className={sharedStyles.sectionLabel}>Häufige Fragen</p>
            <h2 id="faq-title">Was vor einer 10-tägigen Rundreise wichtig ist.</h2>
            <p>Die wichtigste Information fehlt noch? Schreiben Sie uns Ihre Flugzeiten und was Ihnen wichtiger ist: Berge, Kultur oder Meer.</p>
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
          <p className={sharedStyles.sectionLabel}>Machen wir die Route konkret</p>
          <h2 id="inquiry-title">Senden Sie Ihre Flüge. Wir sagen ehrlich, was in zehn Tagen funktioniert.</h2>
          <p>Ein Satz reicht: Reisedaten, Personen, gewünschte Reiseart und ob der Norden oder die Küste mehr Raum bekommen soll.</p>
        </section>

        <Inquire />
      </main>
      <Footer homeHref="/de" />
    </>
  );
}
