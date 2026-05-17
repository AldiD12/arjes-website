import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import SEO from '../components/SEO';
import beratImg from '../components/guide-photos/Berat.jpeg';
import gjirokastraImg from '../components/guide-photos/KalajaGjirokastres.jpeg';
import zvernecImg from '../components/guide-photos/pov-zvernec.jpeg';
import valboneImg from '../components/guide-photos/Valbone-Group.jpeg';
import gjirokasterCityImg from '../components/guide-photos/Gjirokaster.jpeg';
import './TourDetailPage.css';

// Tour data — replace with API/CMS later
const tours = {
  'unesco-heritage-route': {
    title: 'The UNESCO Heritage Route',
    subtitle: '3 Days of Ancient History',
    duration: '3 Days / 2 Nights',
    difficulty: 'Easy',
    vehicle: 'Mercedes V-Class',
    price: '€890',
    priceNote: 'per couple',
    heroImage: beratImg,
    heroAlt: 'Berat, the City of a Thousand Windows — UNESCO World Heritage Site in Albania with white Ottoman houses stacked on the hillside',
    description: 'Journey through Albania\'s most treasured UNESCO World Heritage sites. From the Ottoman architecture of Berat to the ancient ruins of Butrint, experience centuries of history with your private guide.',
    highlights: [
      'Private guided tours of Berat and Gjirokastër',
      'Exclusive access to Butrint Archaeological Park',
      'Traditional Albanian lunch in a family home',
      'Sunset views from Gjirokastër Castle'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Berat - The City of a Thousand Windows',
        activities: [
          'Morning departure from Tirana',
          'Guided tour of Berat Castle and Onufri Museum',
          'Traditional lunch at Mangalemi Quarter',
          'Evening walk through the old bazaar',
          'Overnight at boutique hotel in Berat'
        ]
      },
      {
        day: 2,
        title: 'Gjirokastër - The Stone City',
        activities: [
          'Scenic drive through the Vjosa Valley',
          'Explore Gjirokastër Castle and Arms Museum',
          'Visit to a traditional stone house',
          'Dinner at local tavern',
          'Overnight in Gjirokastër'
        ]
      },
      {
        day: 3,
        title: 'Butrint & Return',
        activities: [
          'Morning visit to Butrint Archaeological Park',
          'Lunch by the Ionian coast',
          'Return to Tirana via coastal route',
          'Arrival evening'
        ]
      }
    ],
    included: [
      'Private Mercedes V-Class with professional driver',
      'All fuel and tolls',
      '2 nights accommodation (4-star boutique hotels)',
      'Daily breakfast',
      'All museum and site entrance fees',
      'Licensed English-speaking guide',
      'Bottled water throughout'
    ],
    notIncluded: [
      'Lunch and dinner (except where specified)',
      'Personal expenses',
      'Travel insurance'
    ]
  },
  'theth-blue-eye-expedition': {
    title: 'Private Theth & Blue Eye Expedition',
    subtitle: '2 Days in the Albanian Alps',
    duration: '2 Days / 1 Night',
    difficulty: 'Moderate',
    vehicle: '4x4 Land Cruiser',
    price: '€650',
    priceNote: 'per couple',
    heroImage: gjirokastraImg,
    heroAlt: 'Gjirokastër Castle overlooking the Albanian Alps — starting point for the Theth and Blue Eye expedition',
    description: 'Escape to the pristine Albanian Alps. This private expedition takes you deep into Theth National Park, where stone towers meet crystal-clear mountain streams.',
    highlights: [
      'Private 4x4 transport through mountain roads',
      'Hike to the Blue Eye natural spring',
      'Stay in traditional guesthouse',
      'Visit the iconic Lock-in Tower'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Journey to Theth Valley',
        activities: [
          'Early morning departure from Tirana',
          '4x4 drive through Accursed Mountains',
          'Arrival and lunch in Theth village',
          'Afternoon hike to Blue Eye spring',
          'Traditional dinner and overnight in guesthouse'
        ]
      },
      {
        day: 2,
        title: 'Theth Exploration & Return',
        activities: [
          'Morning visit to Lock-in Tower',
          'Walk through the village',
          'Lunch with local family',
          'Return journey to Tirana',
          'Evening arrival'
        ]
      }
    ],
    included: [
      'Private 4x4 Land Cruiser with driver',
      'All fuel and mountain road fees',
      '1 night in traditional guesthouse',
      'All meals (breakfast, lunch, dinner)',
      'Licensed mountain guide',
      'Hiking equipment if needed'
    ],
    notIncluded: [
      'Personal hiking gear',
      'Travel insurance',
      'Tips for guides'
    ]
  },
  'albanian-riviera-escape': {
    title: 'Albanian Riviera Private Escape',
    subtitle: '4 Days Along the Ionian Coast',
    duration: '4 Days / 3 Nights',
    difficulty: 'Easy',
    vehicle: 'Mercedes V-Class',
    price: '€1,450',
    priceNote: 'per couple',
    heroImage: zvernecImg,
    heroAlt: 'View from Zvërnec Island monastery looking across the turquoise Albanian Riviera coastline',
    description: 'Drive the stunning Albanian Riviera from Vlora to Ksamil. Hidden beaches, cliffside villages, fresh seafood, and sunsets over the Ionian Sea — this is the Mediterranean before the crowds found it.',
    highlights: [
      'Drive over the dramatic Llogara Pass with panoramic views',
      'Private boat trip to hidden beaches near Palasë',
      'Seafood dinner at a family-run restaurant in Himara',
      'Free afternoon at Ksamil beaches with views of Corfu'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Vlora & Zvërnec Island',
        activities: [
          'Morning departure from Tirana',
          'Visit Zvërnec Monastery on its island setting',
          'Lunch at Vlora waterfront',
          'Afternoon at the Marmiroi beach',
          'Check in to boutique hotel in Dhërmi'
        ]
      },
      {
        day: 2,
        title: 'Dhërmi & Hidden Beaches',
        activities: [
          'Morning drive over Llogara Pass (1,027m)',
          'Private boat from Dhërmi to Gjipe Beach',
          'Lunch at a cliffside restaurant',
          'Afternoon swimming and relaxation',
          'Sunset drinks at Dhërmi beach bar'
        ]
      },
      {
        day: 3,
        title: 'Himara to Saranda',
        activities: [
          'Morning walk through old Himara village',
          'Coastal drive through Porto Palermo',
          'Visit Porto Palermo Castle',
          'Arrive in Saranda, free afternoon',
          'Dinner at traditional tavern'
        ]
      },
      {
        day: 4,
        title: 'Ksamil & Return',
        activities: [
          'Morning at Ksamil islands and beaches',
          'Optional visit to Butrint (UNESCO site)',
          'Seafood lunch by the water',
          'Return drive to Tirana via inland route',
          'Evening arrival'
        ]
      }
    ],
    included: [
      'Private Mercedes V-Class with professional driver',
      'All fuel and tolls',
      '3 nights accommodation (boutique coastal hotels)',
      'Daily breakfast',
      'Private boat trip (Day 2)',
      'Licensed English-speaking guide',
      'Bottled water throughout'
    ],
    notIncluded: [
      'Lunch and dinner (except where specified)',
      'Beach club entrance fees',
      'Personal expenses and tips',
      'Travel insurance'
    ]
  },
  'valbona-theth-crossing': {
    title: 'Valbona to Theth: The Great Albanian Alps Crossing',
    subtitle: '3 Days of Mountain Adventure',
    duration: '3 Days / 2 Nights',
    difficulty: 'Challenging',
    vehicle: '4x4 Land Cruiser + Ferry',
    price: '€980',
    priceNote: 'per couple',
    heroImage: valboneImg,
    heroAlt: 'Hikers in Valbona Valley with dramatic Albanian Alps peaks rising behind them on the famous crossing trail',
    description: 'The definitive Albanian Alps experience. Ferry across the fjord-like Koman Lake, stay in Valbona, hike the legendary pass to Theth, and return through the Accursed Mountains. This is the trek that puts Albania on the adventure map.',
    highlights: [
      'Koman Lake ferry — often called Europe\'s most scenic boat ride',
      'Hike the famous Valbona-Theth trail (13km, 1,795m pass)',
      'Two nights in authentic mountain guesthouses',
      'Home-cooked mountain cuisine and fresh raki'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Koman Lake Ferry to Valbona',
        activities: [
          'Early departure from Shkodra to Koman',
          'Board the ferry for the 2.5-hour crossing',
          'Scenic journey through dramatic lake gorges',
          'Arrive in Fierza, drive to Valbona valley',
          'Afternoon acclimatization walk',
          'Traditional dinner and overnight in guesthouse'
        ]
      },
      {
        day: 2,
        title: 'The Great Crossing — Valbona to Theth',
        activities: [
          'Early breakfast and trail briefing',
          'Begin the Valbona-Theth hike (6-8 hours)',
          'Ascend to Valbona Pass at 1,795m',
          'Descend into Theth valley',
          'Arrival and rest at Theth guesthouse',
          'Celebratory dinner with your hosts'
        ]
      },
      {
        day: 3,
        title: 'Theth Exploration & Return',
        activities: [
          'Morning hike to the Blue Eye spring',
          'Visit the Lock-in Tower',
          'Lunch in Theth village',
          '4x4 drive back to Shkodra',
          'Late afternoon arrival'
        ]
      }
    ],
    included: [
      'Private 4x4 transport throughout',
      'Koman Lake ferry tickets',
      '2 nights in traditional guesthouses',
      'All meals (breakfast, lunch pack, dinner)',
      'Licensed mountain guide for the crossing',
      'Luggage transfer between guesthouses',
      'Emergency satellite communicator'
    ],
    notIncluded: [
      'Personal hiking gear and boots',
      'Travel insurance (required)',
      'Tips for guides and guesthouse hosts',
      'Drinks beyond water'
    ]
  },
  'cultural-immersion-south': {
    title: 'Southern Albania Cultural Immersion',
    subtitle: '5 Days of History, Food & Hidden Villages',
    duration: '5 Days / 4 Nights',
    difficulty: 'Easy',
    vehicle: 'Mercedes V-Class',
    price: '€1,890',
    priceNote: 'per couple',
    heroImage: gjirokasterCityImg,
    heroAlt: 'The stone rooftops of Gjirokastër old town — gateway to southern Albania cultural immersion tours',
    description: 'Go beyond the surface. This journey takes you through southern Albania\'s most fascinating cultural layers — from ancient Apollonia to Ottoman Gjirokastër, through the Vjosa valley to hidden Aromanian villages. Meet artisans, join family meals, and discover a side of Albania most visitors never see.',
    highlights: [
      'Private tour of Apollonia archaeological park',
      'Cooking class with a local family in Përmet',
      'Visit to the Bënja thermal springs',
      'Explore abandoned Aromanian village of Voskopojë'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Tirana to Berat via Apollonia',
        activities: [
          'Morning departure from Tirana',
          'Visit Apollonia Archaeological Park',
          'Lunch at local restaurant near Fier',
          'Arrive in Berat — City of a Thousand Windows',
          'Evening walk through Mangalemi quarter',
          'Overnight in Berat boutique hotel'
        ]
      },
      {
        day: 2,
        title: 'Berat — UNESCO World Heritage',
        activities: [
          'Morning guided tour of Berat Castle',
          'Visit the Onufri Museum (medieval Albanian art)',
          'Traditional lunch in the old bazaar',
          'Afternoon visit to Gorica quarter',
          'Free time to photograph the iconic riverside',
          'Dinner with wine from local Çobo winery'
        ]
      },
      {
        day: 3,
        title: 'The Vjosa Valley to Përmet',
        activities: [
          'Drive through the wild Vjosa River valley',
          'Stop at Bënja thermal springs for a soak',
          'Arrive in Përmet — Albania\'s culinary capital',
          'Afternoon cooking class: byrek, tavë kosi, petulla',
          'Dinner featuring your own creations plus local raki'
        ]
      },
      {
        day: 4,
        title: 'Gjirokastër — The Stone City',
        activities: [
          'Drive to Gjirokastër through mountain scenery',
          'Explore Gjirokastër Castle and Arms Museum',
          'Visit a traditional Ottoman stone house',
          'Lunch at Kujtimi restaurant',
          'Afternoon free to explore the bazaar',
          'Optional: visit Antigonea ruins nearby'
        ]
      },
      {
        day: 5,
        title: 'Voskopojë & Return',
        activities: [
          'Morning drive to Voskopojë — once the cultural capital of the Balkans',
          'Visit Byzantine churches with original frescoes',
          'Walk through the eerily beautiful abandoned quarter',
          'Lunch at mountain tavern',
          'Return to Tirana via Korçë',
          'Evening arrival'
        ]
      }
    ],
    included: [
      'Private Mercedes V-Class with professional driver',
      'All fuel and tolls',
      '4 nights accommodation (boutique hotels)',
      'Daily breakfast',
      'Cooking class with ingredients',
      'All museum and site entrance fees',
      'Licensed English-speaking guide',
      'Bottled water throughout'
    ],
    notIncluded: [
      'Lunch and dinner (except where specified)',
      'Wine and drinks',
      'Personal expenses and tips',
      'Travel insurance'
    ]
  }
};

const TourDetailPage = () => {
  const { slug } = useParams();
  const tour = tours[slug];
  const [openDay, setOpenDay] = useState(null);

  if (!tour) {
    return <div className="tour-not-found">Tour not found</div>;
  }

  const tourSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": tour.title,
    "description": tour.description,
    "touristType": "Couples, Small Groups, Solo Travelers",
    "itinerary": {
      "@type": "ItemList",
      "itemListElement": tour.itinerary.map((day, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": `Day ${day.day}: ${day.title}`
      }))
    },
    "offers": {
      "@type": "Offer",
      "price": tour.price.replace('€', '').replace(',', ''),
      "priceCurrency": "EUR",
      "availability": "https://schema.org/LimitedAvailability"
    },
    "provider": {
      "@type": "TravelAgency",
      "name": "Arjes — Private Albania Guide",
      "url": "https://arjes.al"
    }
  };

  return (
    <div className="tour-detail-page">
      <SEO
        title={tour.title}
        description={`${tour.subtitle} — ${tour.description.slice(0, 140)}...`}
        path={`/tours/${slug}`}
        type="product"
        schema={tourSchema}
      />
      {/* Hero Section */}
      <section className="tour-hero">
        <div className="tour-hero-image">
          <img
            src={tour.heroImage}
            alt={tour.heroAlt}
            className="tour-hero-img"
            loading="eager"
            width="1920"
            height="800"
          />
          <div className="tour-hero-overlay"></div>
        </div>
        <div className="tour-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="tour-title">{tour.title}</h1>
            <p className="tour-subtitle">{tour.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* At a Glance Bar */}
      <section className="tour-glance">
        <div className="glance-item">
          <span className="glance-icon">⏱</span>
          <div>
            <p className="glance-label">Duration</p>
            <p className="glance-value">{tour.duration}</p>
          </div>
        </div>
        <div className="glance-item">
          <span className="glance-icon">⛰</span>
          <div>
            <p className="glance-label">Difficulty</p>
            <p className="glance-value">{tour.difficulty}</p>
          </div>
        </div>
        <div className="glance-item">
          <span className="glance-icon">🚗</span>
          <div>
            <p className="glance-label">Vehicle</p>
            <p className="glance-value">{tour.vehicle}</p>
          </div>
        </div>
        <div className="glance-item glance-price">
          <div>
            <p className="glance-label">Starting from</p>
            <p className="glance-value-price">{tour.price} <span>{tour.priceNote}</span></p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="tour-content-wrapper">
        <div className="tour-main-content">
          {/* Description */}
          <section className="tour-section">
            <h2 className="section-title">Overview</h2>
            <p className="tour-description">{tour.description}</p>
            
            <div className="tour-highlights">
              <h3 className="highlights-title">Highlights</h3>
              <ul className="highlights-list">
                {tour.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* Itinerary */}
          <section className="tour-section">
            <h2 className="section-title">Detailed Itinerary</h2>
            <div className="itinerary-accordion">
              {tour.itinerary.map((day, index) => (
                <div key={index} className="accordion-item">
                  <button
                    className={`accordion-header ${openDay === index ? 'active' : ''}`}
                    onClick={() => setOpenDay(openDay === index ? null : index)}
                  >
                    <span className="day-number">Day {day.day}</span>
                    <span className="day-title">{day.title}</span>
                    <span className="accordion-icon">{openDay === index ? '−' : '+'}</span>
                  </button>
                  {openDay === index && (
                    <motion.div
                      className="accordion-content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <ul className="activities-list">
                        {day.activities.map((activity, actIndex) => (
                          <li key={actIndex}>{activity}</li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* What's Included */}
          <section className="tour-section">
            <h2 className="section-title">What's Included</h2>
            <div className="included-grid">
              <div className="included-column">
                <h3 className="included-title">✓ Included</h3>
                <ul className="included-list">
                  {tour.included.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="included-column">
                <h3 className="included-title">✗ Not Included</h3>
                <ul className="not-included-list">
                  {tour.notIncluded.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* Sticky Sidebar */}
        <aside className="tour-sidebar">
          <div className="booking-card">
            <div className="booking-price">
              <span className="price-label">From</span>
              <span className="price-amount">{tour.price}</span>
              <span className="price-note">{tour.priceNote}</span>
            </div>
            <a href="/plan-your-trip" className="booking-cta">
              Check Availability
            </a>
            <p className="booking-note">
              Custom itineraries available. Contact us for group rates.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default TourDetailPage;
