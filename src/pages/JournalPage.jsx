import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const articles = [
  {
    slug: 'is-albania-safe',
    title: 'Is Albania Safe for Travelers in 2025?',
    excerpt: 'A local guide breaks down safety, petty crime, driving conditions, and the difference between Albania\'s reputation and reality. The honest answer from someone who lives here.',
    date: 'March 2025',
    readTime: '6 min read',
    category: 'Safety & Practical'
  },
  {
    slug: 'best-time-to-visit',
    title: 'Best Time to Visit the Albanian Riviera',
    excerpt: 'Month-by-month breakdown of weather, crowds, prices, and water temperature along the Ionian coast. September is the secret weapon most visitors don\'t know about.',
    date: 'February 2025',
    readTime: '5 min read',
    category: 'Planning'
  },
  {
    slug: 'theth-vs-valbona',
    title: 'Theth vs Valbona: Which Albanian Alps Destination?',
    excerpt: 'Both valleys are stunning, but they offer very different experiences. Here\'s how to decide which one fits your trip — or why you should do the crossing between both.',
    date: 'January 2025',
    readTime: '7 min read',
    category: 'Destinations'
  }
];

const journalSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Arjes Travel Journal — Albania Travel Guides",
  "description": "Expert Albania travel guides, tips, and destination insights from a licensed local guide. Safety advice, best times to visit, itinerary planning, and insider knowledge.",
  "url": "https://arjes.al/journal",
  "publisher": {
    "@type": "Organization",
    "name": "Arjes — Private Albania Guide",
    "url": "https://arjes.al"
  },
  "blogPost": articles.map(a => ({
    "@type": "BlogPosting",
    "headline": a.title,
    "description": a.excerpt,
    "url": `https://arjes.al/journal/${a.slug}`,
    "author": {
      "@type": "Person",
      "name": "Arjes",
      "jobTitle": "Licensed Albanian Tour Guide"
    }
  }))
};

const JournalPage = () => {
  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh', background: 'var(--cream)', padding: '120px 3rem 4rem' }}>
      <SEO
        title="Travel Journal — Albania Guides & Tips"
        description="Expert Albania travel guides from a licensed local guide. Is Albania safe? Best time to visit the Riviera? Theth vs Valbona? Get insider answers before you book."
        path="/journal"
        schema={journalSchema}
      />
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          style={{ textAlign: 'center', marginBottom: '4rem' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 style={{ fontFamily: 'var(--font-masthead)', fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: '1rem' }}>
            Travel Journal
          </h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.7, maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
            Practical guides, honest advice, and local knowledge to help you plan your Albanian adventure. Written by Arjes, a licensed guide based in Tirana.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem' }}>
          {articles.map((article, index) => (
            <motion.article
              key={article.slug}
              style={{ background: 'white', padding: '2.5rem', border: '1px solid rgba(0,0,0,0.1)' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.5 }}>
                <span>{article.category}</span>
                <span>·</span>
                <span>{article.readTime}</span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-masthead)', fontSize: '1.75rem', marginBottom: '1rem', lineHeight: 1.2 }}>
                {article.title}
              </h2>
              <p style={{ opacity: 0.7, marginBottom: '1.5rem', lineHeight: 1.6 }}>{article.excerpt}</p>
              <Link
                to={`/journal/${article.slug}`}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: '#c2410c',
                  borderBottom: '1px solid #c2410c',
                  paddingBottom: '0.25rem'
                }}
              >
                Read Article →
              </Link>
            </motion.article>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '4rem', padding: '3rem', background: 'white', border: '1px solid rgba(0,0,0,0.1)' }}>
          <h2 style={{ fontFamily: 'var(--font-masthead)', fontSize: '1.5rem', marginBottom: '0.75rem' }}>
            Have a specific question about Albania?
          </h2>
          <p style={{ opacity: 0.7, marginBottom: '1.5rem', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.6 }}>
            I write about what travelers actually want to know. Get in touch and your question might become the next article.
          </p>
          <Link
            to="/plan-your-trip"
            style={{
              display: 'inline-block',
              padding: '0.875rem 2rem',
              background: '#1e3a8a',
              color: 'white',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '0.15em'
            }}
          >
            Ask Arjes →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JournalPage;
