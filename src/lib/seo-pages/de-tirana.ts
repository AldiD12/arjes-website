import type { SeoLandingPage } from './types';

export const deTiranaPage: SeoLandingPage = {
  locale: 'de',
  slug: 'stadtfuehrung-tirana-deutsch',
  metaTitle: 'Stadtführung Tirana auf Deutsch | Privat mit Arjes',
  metaDescription: 'Private Stadtführung durch Tirana auf Deutsch: 2–3 Stunden zu Fuß, mit Geschichte, Blloku und ehrlichen Einblicken in den Alltag Albaniens.',
  ogTitle: 'Tirana auf Deutsch: eine private Stadtführung mit Zeit für Fragen',
  breadcrumb: 'Stadtführung Tirana auf Deutsch',
  serviceName: 'Private Stadtführung durch Tirana auf Deutsch',
  serviceTypes: ['Deutschsprachige Stadtführung Tirana', 'Private Tirana Walking Tour', 'Tirana Tour für Gruppen'],
  audience: 'Deutschsprachige Paare, Familien, Freundeskreise und kleine Gruppen',
  nav: {
    options: 'Touren',
    ideas: 'Route',
    details: 'Im Detail',
    questions: 'Fragen',
  },
  headerCta: 'Termin anfragen',
  hero: {
    eyebrow: 'Privat · deutschsprachig · zu Fuß',
    title: 'Tirana verstehen, nicht nur abhaken.',
    lede: 'Eine private Stadtführung auf Deutsch durch das politische Zentrum, den alten Basar und Blloku. Wir sprechen über Diktatur und Aufbruch, aber genauso über Mieten, Arbeit, Familie und das Leben in der Stadt heute.',
    primaryCta: 'Stadtführung anfragen',
    secondaryCta: 'Touren vergleichen',
    facts: ['Meist 2–3 Stunden', 'Start im Zentrum oder am Hotel', 'Privat für Ihre Gruppe'],
    image: '/photos/bektashi.jpeg',
    imageAlt: 'Religiöses Gebäude im Großraum Tirana unter blauem Himmel',
    imageCaption: 'Tirana · eine Stadt vieler Glaubenswege',
    note: 'Die beste Tour ist ein Gespräch mit Route. Fragen sind kein Umweg, sondern der eigentliche Grund für einen privaten Guide.',
  },
  promise: {
    label: 'Worum es auf dieser Tour geht',
    title: 'Die Gebäude sind der Anfang. Interessant wird, was dazwischen liegt.',
    body: 'Am Skanderbeg-Platz lassen sich Osmanisches Reich, Königreich, Kommunismus und Gegenwart auf wenigen hundert Metern lesen. Doch Tirana erklärt sich nicht allein über Jahreszahlen. Wir zeigen, wie diese Geschichte bis heute in Wohnungen, Cafés, Religion, Politik und Familiengesprächen weiterlebt.',
  },
  options: {
    label: 'Vier sinnvolle Varianten',
    title: 'So viel Tirana, wie zu Ihrem Tag passt.',
    intro: 'Die Route wird vorab festgelegt, bleibt unterwegs aber beweglich. Öffnungszeiten, Hitze, Gehgeschwindigkeit und die Interessen Ihrer Gruppe entscheiden mit.',
    cards: [
      {
        number: '01',
        title: 'Der konzentrierte Einstieg',
        meta: '2 Stunden · Zentrum und Blloku',
        body: 'Gut für den Ankunftstag: Skanderbeg-Platz, Et’hem-Bey-Moschee, zentrale Regierungsachse, Pyramide und ein erster Blick in Blloku. Kompakt, aber nicht gehetzt.',
      },
      {
        number: '02',
        title: 'Die klassische Stadtrunde',
        meta: '3 Stunden · unser meistempfohlener Rahmen',
        body: 'Mehr Zeit für den Neuen Basar, den Umgang mit der kommunistischen Vergangenheit und die Veränderungen seit den 1990er-Jahren. Dazu eine Pause, wenn die Gruppe sie braucht.',
      },
      {
        number: '03',
        title: 'Tirana mit Bunk’Art 2',
        meta: 'Halber Tag · Stadt plus Museum',
        body: 'Eine Stadtführung mit anschließendem oder integriertem Museumsbesuch. Sinnvoll, wenn Sie tiefer einsteigen möchten; für eine reine Zweistundentour wäre das Museum zu viel.',
      },
      {
        number: '04',
        title: 'Für Ihre eigene Gruppe',
        meta: 'Familie · Kollegium · Freundeskreis',
        body: 'Bei zwölf Personen braucht eine Tour andere Stopps als bei einem Paar. Wir achten auf Hörbarkeit, Pausen, unterschiedliche Vorkenntnisse und einen Treffpunkt, der für alle funktioniert.',
      },
    ],
  },
  ideas: {
    label: 'Eine mögliche Route',
    title: 'Drei Kapitel, eine Stadt.',
    intro: 'Das ist kein Minutentakt. Es ist eine klare Dramaturgie, die wir an Ihr Hotel, die Tageszeit und aktuelle Zugänglichkeit anpassen.',
    cards: [
      {
        eyebrow: 'Kapitel 01 · Macht und Glaube',
        title: 'Skanderbeg-Platz',
        line: 'Nationalmuseum · Moschee · Uhrturm · Oper',
        body: 'Hier beginnt die große Erzählung: Wer Albanien regierte, wie nationale Identität entstand und weshalb religiöse Gebäude mitten im politischen Zentrum eine besondere Geschichte haben.',
        image: '/photos/bektashi.jpeg',
        alt: 'Religiöse Architektur in Tirana',
        href: '#inquire',
        cta: 'Route für meine Gruppe anfragen',
      },
      {
        eyebrow: 'Kapitel 02 · Kontrolle und Erinnerung',
        title: 'Bunker und Boulevard',
        line: 'Bunk’Art 2 · Regierungsviertel · Pyramide',
        body: 'Wir sprechen über die Diktatur ohne sie zur Kulisse zu machen: Über Überwachung, Isolation, persönliche Erinnerung und die Frage, wie eine junge Gesellschaft heute damit umgeht.',
        image: '/photos/durres-amphitheatre.jpeg',
        alt: 'Historisches Mauerwerk in Albanien',
        href: '/de/deutschsprachiger-reiseleiter-albanien',
        cta: 'Deutschsprachige Begleitung im Land',
      },
      {
        eyebrow: 'Kapitel 03 · Das Tirana von heute',
        title: 'Blloku und Alltag',
        line: 'Hoxha-Villa · Cafés · neue Architektur',
        body: 'Das frühere Sperrgebiet ist heute Ausgehviertel und Immobilienmarkt. Ein guter Ort, um über Einkommen, Abwanderung, Rückkehrer, Stadtentwicklung und darüber zu reden, was die Menschen an Albanien lieben.',
        image: '/photos/berat-bridge.jpeg',
        alt: 'Fußgängerbrücke über den Osum vor den historischen Vierteln von Berat',
        href: '/de/albanien-rundreise',
        cta: 'Mehr als Tirana planen',
      },
    ],
  },
  details: {
    label: 'Was vorab geklärt wird',
    title: 'Damit aus zwei Stunden keine organisatorische Übung wird.',
    intro: 'Eine kurze Abstimmung reicht. Danach wissen beide Seiten, wo die Tour beginnt, was realistisch hineinpasst und wer Sie erwartet.',
    items: [
      {
        title: 'Treffpunkt',
        body: 'Bei einem zentralen Hotel holen wir Sie nach Absprache ab. Sonst ist der Skanderbeg-Platz meist der einfachste Ausgangspunkt. Für Gruppen nennen wir einen eindeutigen Punkt statt „irgendwo am Platz“.',
      },
      {
        title: 'Sprache und Guide',
        body: 'Arjes führt ausgewählte Termine selbst. Wenn sie nicht verfügbar ist, schlagen wir einen vertrauten deutschsprachigen Guide vor. Sie erfahren vor der Bestätigung, wer die Tour übernimmt.',
      },
      {
        title: 'Museen und Eintritte',
        body: 'Ein Museumsbesuch verändert Dauer und Rhythmus deutlich. Wir sagen vorab, was in Ihrer Zeit sinnvoll ist und ob Tickets separat zu zahlen sind. Öffnungszeiten prüfen wir für den konkreten Termin.',
      },
      {
        title: 'Tempo und Zugänglichkeit',
        body: 'Die Innenstadt ist gut zu Fuß zu erkunden, aber Bordsteine, Hitze und Menschenmengen können anstrengend sein. Sagen Sie uns, wenn jemand wenig laufen kann oder regelmäßige Sitzpausen braucht.',
      },
      {
        title: 'Inhalte, die Sie wirklich interessieren',
        body: 'Alltag im Jugendamt, Stadtplanung, Religion, kommunistische Geschichte oder das heutige Bildungssystem: Geben Sie uns ein Stichwort. Dann bereiten wir die Tour für Ihre Gruppe vor.',
      },
    ],
  },
  reality: {
    label: 'Wer führt Sie?',
    title: 'Persönlich geplant, ehrlich besetzt.',
    paragraphs: [
      'Arjes ist lizenzierte nationale Reiseleiterin und lebt in Tirana. Ausgewählte Wochenenden, Nachmittage und kurze Stadtführungen übernimmt sie persönlich.',
      'Ihr Kalender soll aber nicht darüber entscheiden, ob Ihre Reise funktioniert. Für andere Termine schlägt sie einen vertrauten deutschsprachigen Guide vor und bleibt Ansprechpartnerin. Name und Rolle stehen fest, bevor Sie buchen.',
    ],
    image: '/photos/shiroke.jpeg',
    imageAlt: 'Arjes mit einer Reisegruppe an einem See in Albanien',
    facts: [
      { term: 'Sprachen', detail: 'Deutsch · Englisch · Albanisch · Türkisch' },
      { term: 'Geeignet für', detail: 'Paare · Familien · Kollegien · kleine private Gruppen' },
    ],
    linkHref: '/de/deutschsprachiger-reiseleiter-albanien',
    linkLabel: 'So funktioniert die Guide-Auswahl',
  },
  process: {
    label: 'So buchen Sie',
    title: 'Vier kurze Schritte bis zum Treffpunkt.',
    steps: [
      { number: '01', title: 'Termin senden', meta: '', body: 'Nennen Sie Datum, ungefähre Uhrzeit, Gruppengröße und Ihr Hotel.' },
      { number: '02', title: 'Schwerpunkt wählen', meta: '', body: 'Sagen Sie, ob Alltag, Geschichte, Architektur, Politik oder ein Museum besonders wichtig ist.' },
      { number: '03', title: 'Guide und Preis erhalten', meta: '', body: 'Wir bestätigen Verfügbarkeit, vorgeschlagenen Guide, Dauer, Treffpunkt und den Preis für Ihre Gruppe.' },
      { number: '04', title: 'Tirana zu Fuß erleben', meta: '', body: 'Sie treffen den vereinbarten Guide und haben eine private Tour ohne fremde Teilnehmer.' },
    ],
  },
  pricing: {
    label: 'Preis für die Gruppe',
    title: 'Eine private Führung wird nach dem tatsächlichen Auftrag kalkuliert.',
    body: 'Zwei Personen für zwei Stunden und zwölf Personen mit Museumsbesuch brauchen keinen künstlichen Einheitspreis. Sie erhalten einen Gesamtpreis für die vereinbarte Leistung; bei Eintritten steht klar dabei, ob diese enthalten sind oder vor Ort bezahlt werden.',
    factorsLabel: 'Für das Angebot brauchen wir',
    factors: ['Datum und gewünschte Startzeit', 'Anzahl und ungefähres Alter der Gäste', 'zwei, drei oder mehr Stunden', 'gewünschte Museumsbesuche', 'besondere Anforderungen an Tempo oder Treffpunkt'],
    promise: 'Keine fremden Teilnehmer, keine überraschende Guide-Änderung und keine Eintritte, die erst am Treffpunkt auftauchen.',
    cta: 'Preis für meine Gruppe anfragen',
  },
  faq: {
    label: 'Praktische Fragen',
    title: 'Was Gäste vor einer Tirana-Tour wissen möchten.',
    intro: 'Wenn Ihre Frage hier nicht steht, schreiben Sie sie in die Anfrage. Gerade die ungewöhnlichen Fragen machen private Touren interessant.',
    items: [
      {
        question: 'Wie lange sollte eine Stadtführung in Tirana dauern?',
        answer: 'Für einen guten ersten Eindruck empfehlen wir etwa drei Stunden. Zwei Stunden funktionieren als kompakte Einführung. Mit Bunk’Art 2 oder längeren Gesprächen sollten Sie einen halben Tag einplanen, damit der Museumsbesuch nicht die ganze Stadtführung verdrängt.',
      },
      {
        question: 'Kann die Tour am Skanderbeg-Platz oder an unserem Hotel starten?',
        answer: 'Ja. Der Skanderbeg-Platz ist der einfachste Treffpunkt. Liegt Ihr Hotel im oder nahe dem Zentrum, kann der Guide Sie nach Absprache auch dort abholen. Bei weiter entfernten Hotels empfehlen wir einen zentralen Treffpunkt.',
      },
      {
        question: 'Ist Bunk’Art 2 in der Tour enthalten?',
        answer: 'Nur wenn wir das ausdrücklich vereinbaren. Die Außenstation und historische Einordnung lassen sich gut in eine Stadtführung integrieren. Für den vollständigen Museumsbesuch brauchen Sie zusätzliche Zeit; Eintritt und aktuelle Öffnung werden für Ihren Termin geklärt.',
      },
      {
        question: 'Eignet sich die Tour für eine Gruppe von zwölf Personen?',
        answer: 'Ja. Wir wählen Stopps, an denen alle gut hören können, und passen Tempo sowie Pausen an. Bitte nennen Sie uns die Gruppengröße direkt bei der Anfrage, damit wir den passenden Guide und Ablauf vorschlagen.',
      },
      {
        question: 'Kann man bei der Tour auch etwas über den Alltag in Albanien erfahren?',
        answer: 'Unbedingt. Viele Gäste kennen vor der Reise vor allem die kommunistische Vergangenheit oder die Küste. Wir sprechen auch über Arbeit, Wohnen, Familie, Religion, Migration, Verkehr und darüber, wie sich Tirana im täglichen Leben verändert.',
      },
      {
        question: 'Führt Arjes die Tour persönlich?',
        answer: 'Wenn Termin und Kalender passen, ja. Arjes übernimmt ausgewählte Nachmittage, Wochenenden und kurze Stadtführungen. Andernfalls schlägt sie einen vertrauten deutschsprachigen Guide vor. Sie wissen vor der Buchung, wer vorgesehen ist.',
      },
      {
        question: 'Kann man Dajti und Bunk’Art 1 am nächsten Tag selbst besuchen?',
        answer: 'Ja, das lässt sich gut als eigener Ausflug planen. Seilbahn, Transfers und Öffnungszeiten können sich ändern, deshalb geben wir für Ihr konkretes Datum aktuelle Hinweise, statt eine pauschale Aussage für jede Saison zu machen.',
      },
    ],
  },
  preInquiry: {
    label: 'Der einfachste Anfang',
    title: 'Schicken Sie Datum, Uhrzeit und Gruppengröße.',
    body: 'Dazu ein Satz über das, was Sie wirklich wissen möchten. Wir antworten mit Verfügbarkeit, Guide-Vorschlag, sinnvoller Dauer und einem klaren Gruppenpreis.',
  },
};
