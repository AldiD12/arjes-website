import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import './JournalArticlePage.css';

const articles = {
  'is-albania-safe': {
    title: 'Is Albania Safe for Travelers in 2025?',
    subtitle: 'A local guide\'s honest take on safety, scams, and what to actually worry about',
    date: 'March 2025',
    dateISO: '2025-03-15',
    readTime: '6 min read',
    sections: [
      {
        heading: 'The Short Answer',
        content: 'Yes — Albania is one of the safest countries in southern Europe for tourists. Violent crime against visitors is extremely rare, and Albanians have a deep cultural tradition of hospitality toward guests (called "besa" — a sacred code of honor). You are far more likely to be invited into someone\'s home for coffee than to encounter any trouble.'
      },
      {
        heading: 'What About Petty Crime?',
        content: 'Like any tourist destination, pickpocketing can happen in crowded areas — particularly in Tirana\'s Blloku district during summer nights or at busy markets. Use the same common sense you would in Barcelona or Rome: keep your phone in your front pocket, don\'t flash expensive jewelry, and you\'ll be fine. Outside of Tirana, petty crime is almost non-existent. In mountain villages like Theth or Valbona, locals will often leave their doors unlocked.'
      },
      {
        heading: 'Driving in Albania',
        content: 'This is the one area where caution is genuinely warranted. Albanian driving culture can be... adventurous. Mountain roads, especially to places like Theth or the Kelmendi valley, are narrow and unpaved. Overtaking on blind corners is unfortunately common. This is exactly why I recommend a private driver who knows the roads — it removes the single biggest actual risk of traveling here.'
      },
      {
        heading: 'The Riviera vs. The Mountains',
        content: 'The Albanian Riviera (Dhërmi, Himara, Ksamil) is well-established for tourism and feels very safe. Infrastructure is modern, restaurants are excellent, and there\'s a good mix of locals and international visitors. The Albanian Alps (Theth, Valbona) are safe but more remote — mobile signal can be patchy, medical facilities are basic, and weather changes fast. A guide isn\'t just nice to have in the mountains, it\'s genuinely practical.'
      },
      {
        heading: 'What About the "Reputation"?',
        content: 'Albania\'s reputation from the 1990s has nothing to do with the country today. That\'s like judging modern Berlin by the 1940s. The Albania you\'ll visit has craft coffee shops in converted Ottoman houses, wine bars serving indigenous Shesh i Zi varietals, and coastal hotels that rival anything in Greece — often at a third of the price. The gap between perception and reality is actually part of what makes Albania exciting right now: you get a Mediterranean experience that hasn\'t been diluted by mass tourism.'
      },
      {
        heading: 'My Advice',
        content: 'Travel with an open mind and basic awareness. Learn a few Albanian phrases (locals absolutely love it). Carry some cash as cards aren\'t accepted everywhere outside Tirana. And if you want to explore beyond the Riviera — into the real Albania, the mountain guesthouses, the hidden Byzantine churches, the villages where the old ways still hold — go with someone who knows the terrain and the people. That\'s where the magic is.'
      }
    ]
  },
  'best-time-to-visit': {
    title: 'Best Time to Visit the Albanian Riviera',
    subtitle: 'Month-by-month breakdown from someone who lives here',
    date: 'February 2025',
    dateISO: '2025-02-10',
    readTime: '5 min read',
    sections: [
      {
        heading: 'The Sweet Spot: Late May to Mid-June',
        content: 'This is my personal favorite and the window I recommend to most clients. The water is warm enough for swimming (22-24°C), the beaches aren\'t crowded yet, wildflowers are still blooming in the hills above Dhërmi, and hotel prices haven\'t peaked. You\'ll share Gjipe beach with maybe a dozen people instead of hundreds. Restaurants have their full summer menus running but you can still get a table without booking ahead.'
      },
      {
        heading: 'Peak Season: July to Mid-August',
        content: 'The Riviera gets genuinely busy in July and August, especially with Albanian and Kosovar families on holiday. Ksamil becomes packed, Saranda traffic is heavy, and prices peak. The upside? The water temperature is perfect (26-28°C), every beach bar and restaurant is open, and the atmosphere is electric. If you come during peak, I steer clients toward the less-known spots — Palasë, Lukova, Borsh — where even in August you can find stretches of coast that feel private.'
      },
      {
        heading: 'The Secret Season: September',
        content: 'September is the Albanian Riviera\'s best-kept secret. The sea retains its summer warmth, the crowds have thinned dramatically, and the light turns golden in a way that photographers dream about. Hotel prices drop 30-40%. The figs and grapes are at peak ripeness. Local families are back at work, so you get the beaches mostly to yourself. I\'ve had clients sit on Dhërmi beach in late September with no one else in sight — just the Ionian stretching out to Corfu on the horizon.'
      },
      {
        heading: 'Shoulder Months: April and October',
        content: 'April is beautiful for hiking the coastal trails above the Riviera — Llogara Pass is stunning with spring wildflowers — but the water is still cold (16-18°C) and some beach restaurants won\'t have opened yet. October is similar in reverse: great for walking and culture, but swimming days are numbered. Both months are excellent if your trip combines coast with inland destinations like Gjirokastër, Berat, or the Vjosa Valley.'
      },
      {
        heading: 'Winter: November to March',
        content: 'The Riviera largely shuts down for winter. Most hotels and restaurants close. But Albania doesn\'t — Tirana has a thriving café and arts scene year-round, Berat and Gjirokastër are atmospheric in the rain, and the thermal baths at Bënja (near Përmet) are at their best when it\'s cold outside. Winter is for the culture-first traveler, not the beach-seeker.'
      },
      {
        heading: 'Bottom Line',
        content: 'For the best all-around experience: come in late May, June, or September. You get the warmth without the crowds, the best prices, and the version of the Riviera that reminds me why I fell in love with this coastline in the first place.'
      }
    ]
  },
  'theth-vs-valbona': {
    title: 'Theth vs Valbona: Which Albanian Alps Destination Should You Choose?',
    subtitle: 'An honest comparison of Albania\'s two iconic mountain valleys',
    date: 'January 2025',
    dateISO: '2025-01-20',
    readTime: '7 min read',
    sections: [
      {
        heading: 'The Quick Answer',
        content: 'If you have time for only one, choose Theth for dramatic scenery and easier logistics, or Valbona for wilder remoteness and a more traditional Alpine experience. If you have 3+ days, do both and connect them via the famous Valbona-Theth trail — one of the best day hikes in Europe.'
      },
      {
        heading: 'Theth: The Accessible Alpine Village',
        content: 'Theth sits at the end of a winding mountain road from Shkodra (about 3 hours by 4x4). It\'s a proper village with a cluster of traditional stone guesthouses, a famous lock-in tower (Kulla e Ngujimit), and a beautiful church. The star attraction is the Blue Eye (Syri i Kaltër) — a mesmerizing natural pool of impossibly clear turquoise water, a 2-hour hike from the village. Theth has better infrastructure: more guesthouse options, a few small shops, and more reliable mobile signal. It\'s the more "comfortable" Alpine experience.'
      },
      {
        heading: 'Valbona: The Wild Heart of the Alps',
        content: 'Valbona feels more remote and untouched. You typically reach it via a stunning ferry crossing on Koman Lake (an experience in itself — think Norwegian fjords but warmer), followed by a drive through the valley. Guesthouses are more spread out along the valley floor, surrounded by towering peaks. The hiking here feels bigger and wilder — the trail up to the Valbona Pass offers some of the most jaw-dropping mountain scenery in the Balkans. Valbona is for people who want to feel genuinely away from everything.'
      },
      {
        heading: 'The Valbona–Theth Trail',
        content: 'This is the marquee hike of Albania and it deserves its reputation. It\'s roughly 13 km, crossing the Valbona Pass at 1,795m, and takes 6-8 hours depending on your pace. The trail is well-marked but demanding — you need decent fitness and proper hiking boots. Most people hike Valbona to Theth (slightly easier direction) and arrange luggage transfer. I always accompany clients on this trail because conditions can change rapidly at altitude and the route finding after rain requires local knowledge.'
      },
      {
        heading: 'Accommodation',
        content: 'Both valleys offer traditional guesthouses (bujtina) rather than hotels. Expect simple, clean rooms with shared bathrooms, incredible home-cooked food (the highlight for many visitors), and genuine warmth from host families. Theth has more options and a couple of slightly more upscale places. Valbona\'s guesthouses are more rustic but the food — mountain lamb, fresh cheese, homemade raki — is extraordinary.'
      },
      {
        heading: 'When to Go',
        content: 'June through September. July and August are warmest and busiest (though "busy" in the Albanian Alps means you might see 30 hikers on the trail instead of 10). June and September are cooler but gloriously quiet. The trail and pass are typically snow-free from mid-June to early October, though this varies by year. I check conditions before every trip and adjust routes accordingly.'
      },
      {
        heading: 'My Recommendation',
        content: 'For a 2-day trip with limited time: choose Theth. It\'s easier to reach, the Blue Eye is a guaranteed wow moment, and the guesthouses are comfortable. For 3-4 days: do both. Take the Koman Lake ferry to Valbona, hike the pass to Theth, explore for a day, then drive back to Shkodra. It\'s the definitive Albanian Alps experience and one of the trips I\'m most proud to guide.'
      }
    ]
  }
};

const JournalArticlePage = () => {
  const { slug } = useParams();
  const article = articles[slug];

  if (!article) {
    return (
      <div className="journal-article-page">
        <div className="article-not-found">
          <h1>Article not found</h1>
          <Link to="/journal" className="back-link">← Back to Journal</Link>
        </div>
      </div>
    );
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.subtitle,
    "author": {
      "@type": "Person",
      "name": "Arjes",
      "jobTitle": "Licensed Albanian Tour Guide"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Arjes — Private Albania Guide",
      "url": "https://arjes.al"
    },
    "datePublished": article.dateISO,
    "mainEntityOfPage": `https://arjes.al/journal/${slug}`
  };

  return (
    <div className="journal-article-page">
      <SEO
        title={article.title}
        description={article.subtitle}
        path={`/journal/${slug}`}
        type="article"
        schema={articleSchema}
      />

      <article className="article-container">
        <header className="article-header">
          <Link to="/journal" className="back-link">← Journal</Link>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="article-meta">
              <span>{article.date}</span>
              <span className="meta-dot">·</span>
              <span>{article.readTime}</span>
            </div>
            <h1 className="article-title">{article.title}</h1>
            <p className="article-subtitle">{article.subtitle}</p>
          </motion.div>
        </header>

        <div className="article-body">
          {article.sections.map((section, index) => (
            <motion.section
              key={index}
              className="article-section"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="section-heading">{section.heading}</h2>
              <p className="section-text">{section.content}</p>
            </motion.section>
          ))}
        </div>

        <footer className="article-footer">
          <div className="article-cta">
            <h3>Ready to experience Albania for yourself?</h3>
            <p>I'd love to help you plan an unforgettable trip.</p>
            <Link to="/plan-your-trip" className="cta-button">Plan Your Trip →</Link>
          </div>
          <div className="article-author">
            <div className="author-info">
              <p className="author-name">Arjes</p>
              <p className="author-title">Licensed Private Guide · Tirana, Albania</p>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default JournalArticlePage;
