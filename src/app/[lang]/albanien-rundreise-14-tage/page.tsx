import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { Footer } from '@/components/Footer';
import { Inquire } from '@/components/Inquire';
import { SITE_URL } from '@/lib/site';

import detailStyles from '../albanien-rundreise-7-tage/page.module.css';
import sharedStyles from '../private-albania-tours/page.module.css';

const PAGE_PATH = '/de/albanien-rundreise-14-tage';
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const META_DESCRIPTION =
  'Albanien-Rundreise in 14 Tagen: Koman, Valbona, Theth, Berat, Gjirokastra und Riviera. Individuell mit Guide, Fahrer oder Mietwagen.';

const itinerary = [
  {
    day: 'Tag 01',
    title: 'Ankommen und Tirana verstehen',
    route: 'Flughafen Tirana → Stadtzentrum',
    drive: 'ca. 30–45 Min. Transfer',
    overnight: 'Tirana',
    body: 'Die Reise beginnt ohne lange Weiterfahrt. Nach dem Transfer lernen Sie Tirana zu Fuß kennen: Skanderbeg-Platz, Et’hem-Bey-Moschee, Blloku und die Spuren der jüngeren Geschichte. Bei später Ankunft bleibt es bei einem ruhigen Abend.',
    note: 'Der Mietwagen wird für diese aktive Nordroute nicht zwingend am Flughafen übernommen. Ein Transfer nach Shkodra kann die Logistik für Fähre und Bergtage deutlich vereinfachen.',
    image: '/photos/bektashi.jpeg',
    alt: 'Kulturelles Detail in Tirana',
  },
  {
    day: 'Tag 02',
    title: 'Shkodra als Tor zu den Albanischen Alpen',
    route: 'Tirana → Shkodra',
    drive: 'ca. 2–2,5 Std. reine Fahrt',
    overnight: 'Shkodra',
    body: 'Nach der Fahrt nach Norden bleiben Zeit für Shkodra, die Rozafa-Festung und einen Abend in Shiroka am See. Gleichzeitig bereiten wir Gepäck, Transfers und den frühen Start für die Bergstrecke vor.',
    note: 'Was in den Alpen nicht gebraucht wird, kann in Shkodra bleiben. Das ist praktischer, als große Koffer über Fähren, Transfers und einen Bergpass zu bewegen.',
    image: '/photos/shiroke.jpeg',
    alt: 'Blick auf Shiroka und den Shkodra-See',
  },
  {
    day: 'Tag 03',
    title: 'Über den Koman-See ins Valbona-Tal',
    route: 'Shkodra → Koman → Fierza → Valbona',
    drive: 'früher Transfer · Fähre · Weiterfahrt',
    overnight: 'Valbona',
    body: 'Heute ist die Anreise selbst das Erlebnis. Ein früher Transfer führt zum Koman-See, danach geht es per Fähre durch die Berglandschaft und mit einem abgestimmten Anschluss weiter nach Valbona.',
    note: 'Fahrplan, Anleger, Anschluss und Gepäck werden für Ihr konkretes Datum geprüft. Diese Etappe wird nicht aus einem alten Online-Fahrplan übernommen.',
    image: '/photos/valbone.jpeg',
    alt: 'Wandergruppe auf einem Bergweg im Valbona-Tal',
  },
  {
    day: 'Tag 04',
    title: 'Ein voller Tag im Valbona-Tal',
    route: 'Valbona und Umgebung',
    drive: 'nur kurze lokale Transfers',
    overnight: 'Valbona',
    body: 'Die zweite Nacht gibt dem Tal einen eigenen Tag. Je nach Kondition wählen wir einen Spaziergang, eine mittlere Wanderung oder eine anspruchsvollere Bergtour. Der Tag dient zugleich als vernünftiger Puffer vor der Überquerung.',
    note: 'Die Wanderung wird an Fitness, Wetter und Untergrund angepasst. Ein großer Gipfeltag direkt vor dem Valbona-Pass ist nicht für jede Gruppe die beste Vorbereitung.',
    image: '/photos/valbone.jpeg',
    alt: 'Wandergruppe im Valbona-Tal in den Albanischen Alpen',
  },
  {
    day: 'Tag 05',
    title: 'Zu Fuß über den Valbona-Pass nach Theth',
    route: 'Valbona → Valbona-Pass → Theth',
    drive: 'ganztägige anspruchsvolle Bergwanderung',
    overnight: 'Theth',
    body: 'Die aktive Sommerversion verbindet Valbona und Theth zu Fuß. Es ist ein voller Bergtag mit deutlichen Höhenmetern, langem Abstieg und wechselnden Bedingungen—kein Spaziergang zwischen zwei Hotels.',
    note: 'Wir prüfen Kondition, Saison und Wetter und organisieren auf Wunsch Bergbegleitung sowie separaten Gepäcktransport. Wer nicht sicher und ausdauernd wandert, erhält eine andere Nordroute.',
    image: '/photos/theth.jpeg',
    alt: 'Wasserfall und Berglandschaft bei Theth',
  },
  {
    day: 'Tag 06',
    title: 'Theth ohne sofortige Weiterfahrt',
    route: 'Theth und Umgebung',
    drive: 'zu Fuß oder kurze lokale Strecke',
    overnight: 'Theth',
    body: 'Kirche, Dorf, Grunas-Wasserfall oder eine weitere Wanderung: Nach der Passüberquerung wird nur ein passender Schwerpunkt gewählt. Wer Erholung braucht, darf diesen Tag auch langsam verbringen.',
    note: 'Das Blue Eye von Theth ist eine eigene längere Unternehmung und nicht automatisch Zusatzprogramm. Wir entscheiden nach Energie, Wetter und dem Vortag.',
    image: '/photos/theth.jpeg',
    alt: 'Reisegruppe am Wasserfall bei Theth in den Albanischen Alpen',
  },
  {
    day: 'Tag 07',
    title: 'Zurück nach Shkodra und wieder leicht reisen',
    route: 'Theth → Shkodra',
    drive: 'ca. 2,5–3 Std. ohne längere Stopps',
    overnight: 'Shkodra',
    body: 'Nach den Bergtagen führt die Straße zurück nach Shkodra. Sie übernehmen zurückgelassenes Gepäck, ruhen sich aus und wechseln am nächsten Tag wieder in den klassischen Rundreise-Rhythmus.',
    note: 'Dieser Puffer trennt Alpen und Südrunde. Eine direkte Fahrt von Theth bis Berat würde zwar einen Hotelwechsel sparen, aber einen unnötig langen Reisetag erzeugen.',
    image: '/photos/shiroke.jpeg',
    alt: 'Shiroka am Shkodra-See in Nordalbanien',
  },
  {
    day: 'Tag 08',
    title: 'Vom Norden in die Stadt der tausend Fenster',
    route: 'Shkodra → Berat',
    drive: 'ca. 3,5–4,5 Std. ohne längere Stopps',
    overnight: 'Berat',
    body: 'Die längste Verbindung zwischen Nord- und Südrunde endet in Berat. Für den Abend reichen ein Spaziergang durch Mangalem und Gorica und ein Essen am Osum. Die große Besichtigung wartet bis morgen.',
    note: 'Verkehr rund um Tirana kann die Fahrzeit verändern. Deshalb versprechen wir auf dieser Etappe keine zusätzliche große Sehenswürdigkeit.',
    image: '/photos/berat-bridge.jpeg',
    alt: 'Historische Brücke und Altstadt von Berat',
  },
  {
    day: 'Tag 09',
    title: 'Berat bekommt einen ganzen Tag',
    route: 'Berat und Umgebung',
    drive: 'nur kurze lokale Strecken',
    overnight: 'Berat',
    body: 'Burg, kleine Kirchen, osmanische Viertel und heutiges Leben werden nicht zwischen zwei Fahrten gequetscht. Je nach Interesse ergänzen wir ein Weingut, ein Dorf oder einen kulinarischen Baustein.',
    note: 'Osum-Canyon und Apollonia sind mögliche Alternativen, aber nicht beides zusätzlich zum vollen Stadtprogramm. Ein Schwerpunkt macht diesen Tag besser.',
    image: '/photos/berat.jpeg',
    alt: 'Traditionelle Häuser im historischen Berat',
  },
  {
    day: 'Tag 10',
    title: 'Über Land nach Gjirokastra',
    route: 'Berat → Gjirokastra',
    drive: 'ca. 2,5–3 Std. reine Fahrt',
    overnight: 'Gjirokastra',
    body: 'Nach einer überschaubaren Fahrt bleibt der Nachmittag für Festung, Basar und die steilen Altstadtgassen. Mit Guide werden Architektur und Geschichte zum Einstieg in Familienleben und Gegenwart.',
    note: 'Wer familiäre Wurzeln in Albanien hat, kann diesen Tag für ein Dorf, ein Treffen oder eine Recherche verändern. Dann wird das klassische Programm bewusst kürzer.',
    image: '/photos/gjirokaster-castle.jpeg',
    alt: 'Festung und Dächer von Gjirokastra',
  },
  {
    day: 'Tag 11',
    title: 'Butrint und der Weg an die Ionische Küste',
    route: 'Gjirokastra → Butrint → Riviera',
    drive: 'ca. 3–4 Std. reine Fahrt',
    overnight: 'Himara oder Umgebung',
    body: 'Butrint verbindet antike Geschichte mit Landschaft, bevor die Reise an der Riviera ankommt. Nach sechs aktiven Nordtagen und historischen Städten beginnt jetzt der ruhigere Abschluss.',
    note: 'Bei großer Hitze, kleinen Kindern oder Erschöpfung ist Butrint eine Wahl, kein Pflichtkästchen. Dann fahren wir früher zur Küste.',
    image: '/photos/butrint-fortress.jpeg',
    alt: 'Historische Festungsmauern in Butrint',
  },
  {
    day: 'Tag 12',
    title: 'Ein voller Küstentag ohne Koffer',
    route: 'Albanische Riviera',
    drive: 'nur kurze lokale Strecken',
    overnight: 'Himara oder Umgebung',
    body: 'Strand, Boot, Küstendorf oder ein langes Mittagessen: Der Tag bekommt nur einen Schwerpunkt. Nach der Alpenrunde ist ein wirklich freier Tag mehr wert als drei weitere Stopps.',
    note: 'Im Juli und August wählen wir Standort und Tageszeit besonders sorgfältig. In der Nebensaison prüfen wir, welche Küstenbetriebe tatsächlich geöffnet sind.',
    image: '/photos/zvernec.jpeg',
    alt: 'Holzsteg über eine Lagune an der albanischen Küste',
  },
  {
    day: 'Tag 13',
    title: 'Über Llogara zurück nach Tirana',
    route: 'Riviera → Llogara → Tirana',
    drive: 'ca. 3,5–4,5 Std. ohne längere Stopps',
    overnight: 'Tirana',
    body: 'Küstenstraße und Llogara-Pass bilden den landschaftlichen Abschluss. Ein großzügiger Puffer lässt Raum für Aussichtspunkte und Mittagessen und schützt gleichzeitig die letzte Nacht vor dem Rückflug.',
    note: 'Bei sehr spätem Rückflug kann eine zusätzliche Küstennacht möglich sein. Bei frühem Flug bleibt Tirana oder Flughafennähe klar die bessere Entscheidung.',
    image: '/photos/vjosa.jpeg',
    alt: 'Weite Fluss- und Berglandschaft in Albanien',
  },
  {
    day: 'Tag 14',
    title: 'Tirana, Dajti oder entspannte Abreise',
    route: 'Tirana → Flughafen',
    drive: 'abhängig von Flugzeit und Verkehr',
    overnight: 'Abreise',
    body: 'Bei einem späten Flug bleibt Zeit für Bunk’Art I, die Dajti-Seilbahn, einen Marktbesuch oder das Tirana-Programm, das an Tag 1 nicht mehr gepasst hat. Bei frühem Abflug bleibt der Morgen frei.',
    note: 'Transfers, Gepäck und die tatsächliche Flugzeit bestimmen den letzten Tag. Eine theoretisch perfekte Zwei-Wochen-Route sollte nicht mit Stress enden.',
    image: '/photos/durres-amphitheatre.jpeg',
    alt: 'Historische Steinbögen in Albanien',
  },
];

const alpineVersions = [
  {
    number: '01',
    title: 'Die aktive Alpenrunde',
    bestFor: 'Koman, Valbona-Pass und Theth',
    body: 'Die Route auf dieser Seite: Fähre, zwei Nächte in Valbona, anspruchsvolle Passwanderung und zwei Nächte in Theth. Nur bei passender Saison und Kondition.',
  },
  {
    number: '02',
    title: 'Berge ohne Pass',
    bestFor: 'Aussichten ohne ganztägige Überquerung',
    body: 'Shkodra und Theth bleiben, Valbona entfällt oder wird separat erreicht. So erleben Familien und Nichtwanderer den Norden mit weniger Gepäcklogistik.',
  },
  {
    number: '03',
    title: 'Die Route außerhalb der Bergsaison',
    bestFor: 'Winter, früher Frühling und später Herbst',
    body: 'Korça, Përmet, Kulinarik und Alltagskultur ersetzen die hohe Alpenrunde. Das ist eine eigene gute Reise—keine notdürftig gekürzte Sommerversion.',
  },
];

const travelModes = [
  {
    number: '01',
    title: 'Privat begleitet',
    bestFor: 'Durchgehender Kontext und wenig Logistik',
    body: 'Ein deutschsprachiger Guide begleitet die gesamte Reise oder die wichtigsten Abschnitte. Fahrer, Bergbegleitung und lokale Transfers werden passend kombiniert.',
  },
  {
    number: '02',
    title: 'Selbstfahrer plus Nordmodul',
    bestFor: 'Unabhängiger Süden, organisierte Alpen',
    body: 'Der Mietwagen bleibt in Shkodra oder beginnt erst nach den Bergen. Fähre, Anschlüsse, Gepäck und Bergtage werden als eigenes Modul koordiniert.',
  },
  {
    number: '03',
    title: 'Geführt starten, frei weiter',
    bestFor: 'Unterstützung dort, wo sie zählt',
    body: 'Reisen Sie durch Tirana und den Norden begleitet. Nach der Rückkehr nach Shkodra oder in Berat übernehmen Sie den Mietwagen für Städte und Küste.',
  },
];

const routeAdjustments = [
  ['Ohne Passwanderung', 'Valbona und Theth werden nicht künstlich über eine lange Straßenverbindung zusammengedrückt. Wir wählen eine Bergbasis und geben den frei werdenden Tagen einen klaren Zweck.'],
  ['Familien mit Kindern', 'Koman kann bleiben, die anspruchsvolle Überquerung entfällt. Kürzere Wanderungen, zwei Nächte in Theth und mehr Küstenzeit ergeben die bessere Familienreise.'],
  ['Mehr Meer', 'Ein Bergtal oder ein Kulturtag fällt weg. Dafür bleiben drei oder vier Nächte an einem Küstenort, statt mehrere Strände täglich abzufahren.'],
  ['Mehr Geschichte und Alltag', 'Berat und Gjirokastra werden vertieft; Tirana, Korça oder Përmet können einen zusätzlichen Tag erhalten. Der Strandanteil wird kompakter.'],
  ['Außerhalb der Sommersaison', 'Fähre, Pass und Bergunterkünfte werden nicht pauschal versprochen. Eine Kultur- und Genussroute im Landesinneren ersetzt den empfindlichen Nordblock.'],
] as const;

const quoteFactors = [
  'Ihre genauen Flugzeiten und Reisedaten',
  'Gruppengröße, Alter und Wandererfahrung',
  'aktive Passroute oder Nordroute ohne Überquerung',
  'Guide, Fahrer, Mietwagen und gewünschte Übergaben',
  'Bergbegleitung, Gepäcktransport und weitere Leistungen',
];

const faqs = [
  {
    question: 'Reichen 14 Tage für eine komplette Albanien-Rundreise?',
    answer:
      'Vierzehn Tage reichen für eine starke Nord-Süd-Reise mit Koman, Valbona, Theth, Berat, Gjirokastra und Riviera. Komplett im wörtlichen Sinn ist auch diese Route nicht: Korça, Përmet, Nordost und mehrere Küstenorte bleiben bewusst draußen.',
  },
  {
    question: 'Sind mit 14 Tagen auch 13 Nächte gemeint?',
    answer:
      'Diese Beispielroute rechnet mit vierzehn Reisetagen und dreizehn Nächten. Sie funktioniert am besten bei Ankunft bis zum frühen Nachmittag an Tag 1 und Rückflug nach Mittag an Tag 14. Andere Flugzeiten verändern Anfang und Ende.',
  },
  {
    question: 'Wie anspruchsvoll ist die Wanderung von Valbona nach Theth?',
    answer:
      'Die Überquerung ist eine ganztägige Bergwanderung mit deutlichen Höhenmetern, langem Abstieg und wechselnden Bedingungen. Sie verlangt Trittsicherheit und Ausdauer. Wir prüfen Erfahrung, Wetter und Saison und empfehlen bei Bedarf eine Bergbegleitung.',
  },
  {
    question: 'Kann man Valbona und Theth auch ohne die Passwanderung besuchen?',
    answer:
      'Ja, aber nicht mit derselben eleganten Verbindung. Die Straßenroute zwischen beiden Tälern ist lang. Für Nichtwanderer planen wir meist Shkodra und Theth ausführlicher, machen Koman als eigene Etappe oder konzentrieren uns auf ein Bergtal.',
  },
  {
    question: 'Müssen Koman-Fähre und Transfers vorab gebucht werden?',
    answer:
      'Für eine abgestimmte Rundreise sollten Fähre, Zubringer, Anschluss nach Valbona und Gepäcklösung vorab koordiniert werden. Fahrpläne und Saisonbetrieb können sich ändern; deshalb prüfen wir die Verbindungen für Ihr konkretes Datum.',
  },
  {
    question: 'Was passiert in den Alpen mit dem Mietwagen und dem großen Gepäck?',
    answer:
      'Bei der aktiven Runde kann das Fahrzeug in Shkodra bleiben oder erst nach den Bergen übernommen werden. Nicht benötigtes Gepäck wird dort aufbewahrt; für die Passetappe kann ein separater Transport organisiert werden.',
  },
  {
    question: 'Brauchen wir einen Guide, einen Fahrer und einen Bergführer?',
    answer:
      'Nicht für jeden Tag alle drei. Ein Guide vermittelt Geschichte und Alltag, der Fahrer übernimmt Straßenetappen, eine Bergbegleitung ist für die alpine Sicherheit zuständig. Wir kombinieren nur die Rollen, die Ihre Route tatsächlich braucht.',
  },
  {
    question: 'Kann Arjes die gesamten zwei Wochen persönlich begleiten?',
    answer:
      'Arjes begleitet ausgewählte Termine und Reiseabschnitte persönlich. Für längere Routen stellt sie je nach Datum ein abgestimmtes Team aus vertrauten lizenzierten deutschsprachigen Guides, Fahrern und lokalen Bergpartnern zusammen. Vor Ihrer Zusage wissen Sie, wer vorgesehen ist.',
  },
  {
    question: 'Was kostet eine private 14-tägige Albanien-Rundreise?',
    answer:
      'Der Preis hängt besonders von Gruppengröße, Fahrzeug, Zahl der geführten Tage, Berglogistik, Unterkünften und Reiseart ab. Eine Selbstfahrerreise mit organisiertem Nordmodul ist ein anderes Produkt als zwei Wochen mit privatem Fahrer und Guide. Sie erhalten ein transparentes Angebot nach Ihren Eckdaten.',
  },
  {
    question: 'Wann ist die beste Reisezeit für diese Zwei-Wochen-Route?',
    answer:
      'Die vollständige Alpen- und Küstenkombination passt am ehesten in die warme Bergsaison. Ob der Pass tatsächlich geeignet ist, hängt nicht nur vom Monat, sondern von Schnee, Wetter und Untergrund ab. Außerhalb dieser Zeit planen wir eine eigenständige Route mit Shkodra, Korça, Përmet und historischen Städten.',
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
    title: 'Albanien Rundreise 14 Tage: Route & Planung | Arjes',
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
      title: 'Albanien-Rundreise in 14 Tagen | Arjes',
      description: META_DESCRIPTION,
      images: [
        {
          url: '/photos/valbone.jpeg',
          width: 1600,
          height: 1200,
          alt: 'Wandergruppe im Valbona-Tal in den Albanischen Alpen',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Albanien-Rundreise in 14 Tagen | Arjes',
      description: META_DESCRIPTION,
      images: ['/photos/valbone.jpeg'],
    },
  };
}

export default async function AlbanienRundreiseVierzehnTagePage({
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
    name: 'Individuelle Albanien-Rundreise in 14 Tagen',
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
      '14-tägige Albanien-Rundreise',
      'Deutschsprachige Reiseleitung',
      'Private Fahrer- und Transferkoordination',
      'Mietwagen- und Selbstfahrerplanung',
      'Alpen- und Gepäcklogistik',
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
        name: 'Albanien Rundreise 14 Tage',
        item: PAGE_URL,
      },
    ],
  };

  const itineraryJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Route für eine 14-tägige Albanien-Rundreise',
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
          <a href="#alpen">Alpenvarianten</a>
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
              <span>14 Tage</span>
            </div>
            <p className={sharedStyles.eyebrow}>14 Tage · 13 Nächte · Alpen bis Riviera</p>
            <h1>Albanien-Rundreise in 14 Tagen: Alpen und Riviera, mit Zeit dazwischen.</h1>
            <p className={sharedStyles.heroLede}>
              Koman, Valbona, Theth, Berat, Gjirokastra und die Ionische Küste—privat begleitet, als Selbstfahrer mit organisiertem Nordmodul oder als Kombination. Zwei Wochen für Berge, Geschichte und Meer, ohne die Logistik kleinzureden.
            </p>
            <div className={sharedStyles.heroActions}>
              <a className={sharedStyles.primaryButton} href="#inquire">
                14-Tage-Reise anfragen <span aria-hidden="true">→</span>
              </a>
              <a className={sharedStyles.textLink} href="#reiseplan">
                Reiseplan ansehen
              </a>
            </div>
            <ul className={sharedStyles.heroFacts} aria-label="Eckdaten der Route">
              <li>14 Tage · 13 Nächte</li>
              <li>7 Übernachtungsorte</li>
              <li>4 Standorte mit je 2 Nächten</li>
            </ul>
          </div>

          <div className={sharedStyles.heroVisual}>
            <Image
              src="/photos/valbone.jpeg"
              alt="Wandergruppe im Valbona-Tal in den Albanischen Alpen"
              fill
              priority
              sizes="(max-width: 820px) 100vw, 46vw"
              className={sharedStyles.heroImage}
            />
            <div className={sharedStyles.imageScrim} />
            <p className={sharedStyles.imageCaption}>Valbona · der aktive Teil der Nord-Süd-Reise</p>
            <div className={sharedStyles.heroNote}>
              <span className={sharedStyles.noteNumber}>14</span>
              <p>Zwei Wochen reichen für Alpen und Küste—wenn Wetter, Kondition und Transfers Teil der Planung sind.</p>
            </div>
          </div>
        </section>

        <section className={sharedStyles.promise} aria-labelledby="fourteen-days-title">
          <p className={sharedStyles.sectionLabel}>Die wichtigste Entscheidung</p>
          <div className={sharedStyles.promiseCopy}>
            <h2 id="fourteen-days-title">Die Alpen sind kein Tagesausflug. Deshalb bekommen sie fünf Reisetage.</h2>
            <p>
              Koman, Valbona und Theth funktionieren als zusammenhängender Nordblock mit Übernachtungen, Gepäcklösung und Wetterpuffer. Erst danach beginnt die Südroute. Wer den Valbona-Pass nicht wandern möchte, erhält eine andere Zwei-Wochen-Reise—nicht dieselbe Route mit einem schwierigen Tag weniger.
            </p>
          </div>
        </section>

        <section className={detailStyles.routeSummary} id="route" aria-labelledby="route-title">
          <div className={detailStyles.routeSummaryHead}>
            <p className={sharedStyles.sectionLabel}>Die Route auf einen Blick</p>
            <h2 id="route-title">Tirana → Shkodra → Koman → Valbona → Theth → Berat → Gjirokastra → Riviera → Tirana</h2>
            <p>
              Dies ist die aktive Version für passende Bergbedingungen. Fahrpläne, Wetter, Unterkünfte und Ihre tatsächliche Kondition werden vor der Buchung geprüft.
            </p>
          </div>
          <ol className={detailStyles.routeRibbon}>
            <li><span>01</span><strong>Tirana</strong><small>1 Nacht</small></li>
            <li><span>02 &amp; 07</span><strong>Shkodra</strong><small>2 Nächte</small></li>
            <li><span>03–04</span><strong>Valbona</strong><small>2 Nächte</small></li>
            <li><span>05–06</span><strong>Theth</strong><small>2 Nächte</small></li>
            <li><span>08–10</span><strong>Berat &amp; Gjirokastra</strong><small>3 Nächte</small></li>
            <li><span>11–14</span><strong>Riviera &amp; Tirana</strong><small>3 Nächte · Abreise</small></li>
          </ol>
          <div className={detailStyles.summaryActions}>
            <a className={sharedStyles.primaryButton} href="#inquire">Route an meine Gruppe anpassen <span aria-hidden="true">→</span></a>
            <Link className={sharedStyles.textLink} href="/de/albanien-rundreise-10-tage">Ausgewogene 10-Tage-Route</Link>
            <Link className={sharedStyles.textLink} href="/de/albanien-rundreise">Alle Reisedauern</Link>
          </div>
        </section>

        <section className={detailStyles.itinerary} id="reiseplan" aria-labelledby="itinerary-title">
          <div className={detailStyles.itineraryIntro}>
            <p className={sharedStyles.sectionLabel}>Tag für Tag</p>
            <h2 id="itinerary-title">Eine Zwei-Wochen-Route, die Übergänge genauso ernst nimmt wie Sehenswürdigkeiten.</h2>
            <p>
              Straßenzeiten sind Richtwerte ohne lange Stopps. Fähre, Bergwege und Gepäck folgen anderen Regeln als ein normaler Mietwagentag. Genau deshalb werden sie separat geplant.
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

        <section className={sharedStyles.travelStyles} id="alpen" aria-labelledby="alps-title">
          <div className={sharedStyles.sectionHeading}>
            <p className={sharedStyles.sectionLabel}>Drei ehrliche Nordvarianten</p>
            <h2 id="alps-title">Die beste Alpenroute beginnt mit der Frage, wie Sie wandern.</h2>
            <p>Kalender, Kondition und Komfortwunsch entscheiden über Valbona, Theth und den Koman-See.</p>
          </div>
          <div className={detailStyles.threeColumnGrid}>
            {alpineVersions.map((version) => (
              <article className={sharedStyles.styleCard} key={version.number}>
                <span className={sharedStyles.cardNumber}>{version.number}</span>
                <h3>{version.title}</h3>
                <p className={sharedStyles.bestFor}>{version.bestFor}</p>
                <p>{version.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={sharedStyles.coordination} aria-labelledby="adjust-title">
          <div className={sharedStyles.coordinationIntro}>
            <p className={sharedStyles.sectionLabel}>Wie die Route sich verändert</p>
            <h2 id="adjust-title">Vierzehn Tage geben Freiheit—aber nicht jeder Gruppe dieselbe Route.</h2>
            <p>Die richtige Anpassung tauscht ganze Etappen aus, statt nur einen weiteren Stopp in den Tagesplan zu drücken.</p>
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
            <p className={sharedStyles.sectionLabel}>Drei Organisationsformen</p>
            <h2 id="mode-title">Begleitung dort einsetzen, wo sie die Reise wirklich verbessert.</h2>
            <p>Gerade im Norden muss nicht dieselbe Person Fahrer, Kulturguide und Bergbegleitung zugleich sein.</p>
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
            <h2 id="fit-title">Große Vielfalt, aber kein bequemer Pauschalurlaub.</h2>
          </div>
          <div className={detailStyles.fitColumns}>
            <div>
              <h3>Diese Route passt, wenn Sie …</h3>
              <ul>
                <li>eine ganztägige Bergwanderung sicher bewältigen</li>
                <li>kleines Gepäck für mehrere Bergtage akzeptieren</li>
                <li>Alpen, Geschichte und zwei Küstennächte verbinden möchten</li>
                <li>saisonale Änderungen als Teil guter Planung verstehen</li>
              </ul>
            </div>
            <div>
              <h3>Wir würden anders planen, wenn Sie …</h3>
              <ul>
                <li>nicht trittsicher oder wenig wandererfahren sind</li>
                <li>mit sehr kleinen Kindern oder eingeschränkter Mobilität reisen</li>
                <li>vier oder mehr volle Strandtage brauchen</li>
                <li>außerhalb geeigneter Bergbedingungen reisen</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={sharedStyles.process} aria-labelledby="process-title">
          <div className={sharedStyles.sectionHeading}>
            <p className={sharedStyles.sectionLabel}>Von der Route zum Angebot</p>
            <h2 id="process-title">Vier Schritte zu Ihren zwei Wochen.</h2>
          </div>
          <ol className={sharedStyles.processGrid}>
            <li><span>01</span><h3>Flüge und Gruppe senden</h3><p>Ankunft, Abflug, Personen, Alter, Mobilität und besondere Anforderungen.</p></li>
            <li><span>02</span><h3>Wanderprofil klären</h3><p>Erfahrung, Kondition, Höhenmeter, Gepäck und Komfortwunsch im Norden.</p></li>
            <li><span>03</span><h3>Logistik verbinden</h3><p>Fähre, Transfers, Bergpartner, Mietwagenübergabe und Unterkünfte als eine Kette.</p></li>
            <li><span>04</span><h3>Klares Angebot erhalten</h3><p>Mit Rollen, Leistungen, direkten Partnerkosten und einer echten Alternativroute.</p></li>
          </ol>
        </section>

        <section className={sharedStyles.pricing} aria-labelledby="price-title">
          <div>
            <p className={sharedStyles.sectionLabel}>Preis nach Reiseart und Berglogistik</p>
            <h2 id="price-title">Zwei Wochen sind nicht einfach sieben Tage mal zwei.</h2>
          </div>
          <div className={sharedStyles.pricingBody}>
            <p>
              Fähre, Zubringer, Gepäcktransport, Bergbegleitung, Fahrzeugwechsel und mehrere Partner machen die aktive Route organisatorisch anspruchsvoller. Eine Selbstfahrerreise mit Nordmodul und eine vollständig begleitete Reise brauchen deshalb getrennte Angebote.
            </p>
            <p className={sharedStyles.quoteIntro}>Für ein belastbares Angebot brauchen wir:</p>
            <ul>
              {quoteFactors.map((factor) => <li key={factor}>{factor}</li>)}
            </ul>
            <p className={sharedStyles.pricingPromise}>
              Sie sehen vor der Zusage, was enthalten ist, wer welchen Abschnitt übernimmt und welche Hotels, Fähranbieter, Mietwagenfirmen oder lokalen Partner Sie direkt bezahlen.
            </p>
            <a className={sharedStyles.primaryButton} href="#inquire">Angebot für 14 Tage anfragen <span aria-hidden="true">→</span></a>
          </div>
        </section>

        <section className={sharedStyles.faq} id="fragen" aria-labelledby="faq-title">
          <div className={sharedStyles.faqIntro}>
            <p className={sharedStyles.sectionLabel}>Häufige Fragen</p>
            <h2 id="faq-title">Was vor einer zweiwöchigen Nord-Süd-Reise wichtig ist.</h2>
            <p>Schreiben Sie uns neben Ihren Flügen vor allem Ihre Wandererfahrung. Sie entscheidet über die gesamte Nordroute.</p>
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
          <h2 id="inquiry-title">Senden Sie Ihre Flüge und Wandererfahrung. Wir bauen daraus die richtigen zwei Wochen.</h2>
          <p>Ein Satz reicht für den Anfang: Reisedaten, Personen, gewünschte Reiseart und ob Sie den Valbona-Pass sicher wandern möchten.</p>
        </section>

        <Inquire />
      </main>
      <Footer homeHref="/de" />
    </>
  );
}
