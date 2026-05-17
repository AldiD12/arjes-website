import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import './CollectionPage.css';

const collections = {
  'coastal-riviera': {
    title: 'Coastal Riviera Collection',
    subtitle: 'Sun, Sea & Stone Villages',
    description: 'The Albanian Riviera stretches from Vlora to Ksamil along the Ionian coast — over 100 kilometers of turquoise water, hidden beaches, and cliffside villages that most of the Mediterranean forgot. This is where crystal-clear coves sit below old stone houses, where fishing boats still land the day\'s catch on the beach, and where a seafood dinner costs less than a cocktail in Santorini.',
    longDescription: 'Unlike the Croatian or Greek coasts, the Albanian Riviera remains largely undiscovered by international tourism. Villages like Dhërmi, Himara, and Palasë have kept their character — narrow lanes, family taverns, and beaches that are empty even in July if you know where to look. The drive over Llogara Pass (1,027 meters above sea level) is one of Europe\'s most dramatic coastal roads, dropping from alpine forest straight down to the Ionian.',
    highlights: [
      'Swim at Gjipe Beach — accessible only by boat or a 30-minute cliffside trail',
      'Drive the Llogara Pass with panoramic views of the entire Riviera',
      'Visit Zvërnec Island monastery sitting in the middle of a lagoon',
      'Eat fresh grilled octopus at family-run restaurants where the owner is also the fisherman',
      'Walk through Porto Palermo\'s Ottoman-era castle jutting into the sea',
      'Watch the sunset from Dhërmi with Corfu visible on the horizon'
    ],
    bestFor: 'Couples, honeymooners, families with older children, photographers, and anyone who wants the Mediterranean experience without the crowds.',
    bestTime: 'Late May to mid-June for fewer crowds and warm water, or September for golden light and the beaches to yourself.',
    tours: [
      { slug: 'albanian-riviera-escape', title: 'Albanian Riviera Private Escape', days: 4, price: '€1,450', description: 'The full Riviera experience from Vlora to Ksamil — Llogara Pass, hidden beaches by private boat, Porto Palermo Castle, and Ksamil islands.' },
      { slug: 'unesco-heritage-route', title: 'UNESCO Heritage Route', days: 3, price: '€890', description: 'Combine coastal beauty with ancient history — Berat, Gjirokastër, and Butrint National Park along the southern coast.' },
    ],
    relatedArticle: { slug: 'best-time-to-visit', title: 'Best Time to Visit the Albanian Riviera' }
  },
  'alpine-adventures': {
    title: 'Alpine Adventures Collection',
    subtitle: 'Mountains, Valleys & Traditional Life',
    description: 'The Albanian Alps — known locally as the "Accursed Mountains" — are one of Europe\'s last wild frontiers. Theth and Valbona are connected by a legendary 13-kilometer hiking trail that crosses a 1,795-meter pass, with views that rival anything in the Swiss Alps at a fraction of the cost and crowds.',
    longDescription: 'These mountains have been isolated for centuries, and that isolation preserved something rare: a way of life that hasn\'t fundamentally changed. Stone guesthouses still welcome hikers with home-cooked meals and homemade raki. Shepherds move their flocks by season across alpine meadows. The Blue Eye of Theth — a natural spring of impossibly clear water — is a two-hour walk from the nearest road. Getting here is an adventure in itself: the Koman Lake ferry, often called Europe\'s most scenic boat ride, winds through narrow gorges flanked by steep mountains for 2.5 hours.',
    highlights: [
      'Hike the famous Valbona-to-Theth trail across the 1,795m pass',
      'Ride the Koman Lake ferry through dramatic mountain gorges',
      'Stay in traditional stone guesthouses with home-cooked mountain cuisine',
      'Visit the Blue Eye of Theth — a crystal-clear natural spring',
      'See the historic Lock-in Tower, a remnant of Albania\'s ancient code of law',
      'Wake up to views of 2,500-meter peaks from your guesthouse window'
    ],
    bestFor: 'Hikers, adventure seekers, nature photographers, and travelers who want to experience Europe\'s most authentic mountain culture.',
    bestTime: 'June to September for hiking. July and August are warmest, but trails can be busy. Late June and September offer the best balance.',
    tours: [
      { slug: 'valbona-theth-crossing', title: 'Valbona to Theth: The Great Crossing', days: 3, price: '€980', description: 'The definitive Albanian Alps experience — Koman Lake ferry, Valbona valley, the legendary crossing to Theth, and Blue Eye spring.' },
      { slug: 'theth-blue-eye-expedition', title: 'Theth & Blue Eye Expedition', days: 2, price: '€650', description: 'A shorter mountain escape — 4x4 drive through the Accursed Mountains, Blue Eye hike, and a night in a traditional guesthouse.' },
    ],
    relatedArticle: { slug: 'theth-vs-valbona', title: 'Theth vs Valbona: Which to Choose?' }
  },
  'culture-history': {
    title: 'Culture & History Collection',
    subtitle: 'Ancient Civilizations & Ottoman Heritage',
    description: 'Albania sits at a crossroads of civilizations — Illyrian, Greek, Roman, Byzantine, Ottoman, and communist. Within a single day\'s drive you can visit a 2,500-year-old Greek colony, a medieval Byzantine church with original frescoes, an Ottoman stone city frozen in time, and a Cold War bunker built into a mountainside. No other country in the Mediterranean packs this much history into this small a space.',
    longDescription: 'The southern route is the richest: Berat (the "City of a Thousand Windows," a UNESCO site since 2008) leads to the wild Vjosa Valley — Europe\'s last free-flowing river — then to Përmet for Albania\'s best traditional cooking, onward to Gjirokastër (UNESCO since 2005, the birthplace of writer Ismail Kadare and dictator Enver Hoxha), and finally to the ancient ruins of Apollonia and Butrint. Voskopojë, once the cultural capital of the Balkans with a population larger than Athens, is now a hauntingly beautiful ghost town with Byzantine churches still standing in overgrown meadows.',
    highlights: [
      'Walk through Berat Castle, continuously inhabited for 2,400 years',
      'See Onufri\'s medieval frescoes — the Albanian Riviera\'s answer to the Sistine Chapel',
      'Take a cooking class in Përmet, learning to make byrek, tavë kosi, and petulla',
      'Explore Gjirokastër\'s Ottoman stone houses and the imposing castle above the city',
      'Visit Apollonia, an ancient Greek colony founded in 588 BC',
      'Discover Butrint — layers of Greek, Roman, Byzantine, and Venetian civilization'
    ],
    bestFor: 'History enthusiasts, food lovers, culture travelers, and anyone who prefers depth over beaches.',
    bestTime: 'April to June and September to November. The shoulder months are perfect for culture — pleasant temperatures, no crowds, and local life in full swing.',
    tours: [
      { slug: 'cultural-immersion-south', title: 'Southern Albania Cultural Immersion', days: 5, price: '€1,890', description: 'The deepest cultural journey — Apollonia, Berat, Përmet cooking class, thermal springs, Gjirokastër, and the ghost town of Voskopojë.' },
      { slug: 'unesco-heritage-route', title: 'UNESCO Heritage Route', days: 3, price: '€890', description: 'The essential heritage tour — Berat, Gjirokastër, and Butrint, Albania\'s three most important historical sites.' },
    ],
    relatedArticle: { slug: 'is-albania-safe', title: 'Is Albania Safe for Travelers?' }
  }
};

const CollectionPage = () => {
  const { category } = useParams();
  const collection = collections[category];

  if (!collection) {
    return (
      <div className="collection-page">
        <div className="collection-not-found">
          <h1>Collection not found</h1>
          <p>This collection doesn't exist. <Link to="/">Return to homepage</Link></p>
        </div>
      </div>
    );
  }

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": collection.title,
    "description": collection.description,
    "url": `https://arjes.al/collections/${category}`,
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": collection.tours.map((tour, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "TouristTrip",
          "name": tour.title,
          "description": tour.description,
          "url": `https://arjes.al/tours/${tour.slug}`,
          "offers": {
            "@type": "Offer",
            "price": tour.price.replace('€', '').replace(',', ''),
            "priceCurrency": "EUR"
          }
        }
      }))
    }
  };

  return (
    <div className="collection-page">
      <SEO
        title={collection.title}
        description={collection.description}
        path={`/collections/${category}`}
        schema={collectionSchema}
      />

      <section className="collection-hero">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="collection-title">{collection.title}</h1>
          <p className="collection-subtitle">{collection.subtitle}</p>
          <p className="collection-description">{collection.description}</p>
        </motion.div>
      </section>

      <section className="collection-body">
        <div className="collection-content-grid">
          <div className="collection-main">
            <p className="collection-long-desc">{collection.longDescription}</p>

            <div className="collection-highlights">
              <h2 className="section-heading">What You'll Experience</h2>
              <ul className="highlights-list">
                {collection.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>

            <div className="collection-practical">
              <div className="practical-item">
                <h3 className="practical-label">Best For</h3>
                <p>{collection.bestFor}</p>
              </div>
              <div className="practical-item">
                <h3 className="practical-label">Best Time to Go</h3>
                <p>{collection.bestTime}</p>
              </div>
            </div>
          </div>

          <aside className="collection-sidebar">
            <div className="sidebar-card">
              <h3 className="sidebar-title">Related Reading</h3>
              <Link to={`/journal/${collection.relatedArticle.slug}`} className="sidebar-link">
                {collection.relatedArticle.title} →
              </Link>
            </div>
            <div className="sidebar-card">
              <h3 className="sidebar-title">Custom Itinerary</h3>
              <p className="sidebar-text">Want something different? Every tour can be customized to your dates and interests.</p>
              <Link to="/plan-your-trip" className="sidebar-cta">Plan Your Trip →</Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="collection-tours">
        <h2 className="tours-heading">Available Tours</h2>
        <div className="tours-grid">
          {collection.tours.map((tour, index) => (
            <motion.div
              key={tour.slug}
              className="tour-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="tour-card-title">{tour.title}</h3>
              <p className="tour-card-desc">{tour.description}</p>
              <div className="tour-card-meta">
                <span>{tour.days} Days</span>
                <span>From {tour.price}</span>
              </div>
              <Link to={`/tours/${tour.slug}`} className="tour-card-link">
                View Full Itinerary →
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CollectionPage;
