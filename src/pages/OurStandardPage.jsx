import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import './OurStandardPage.css';

const OurStandardPage = () => {
  const standards = [
    {
      number: '01',
      title: 'Licensed & Insured',
      description: 'Arjes holds a national tour guide license issued by the Albanian Ministry of Tourism. All vehicles are commercially insured and drivers are professionally certified. Your safety isn\'t an afterthought — it\'s the foundation.'
    },
    {
      number: '02',
      title: 'Private, Never Shared',
      description: 'Every tour is exclusively yours. No strangers joining your group, no compromise on schedule, no waiting for others. Your guide, your driver, your pace. We take a limited number of clients each season to keep it this way.'
    },
    {
      number: '03',
      title: 'Premium Fleet',
      description: 'Coastal and cultural tours use a Mercedes V-Class — comfortable for long drives with climate control and ample space. Mountain expeditions use a Toyota Land Cruiser 4x4, built to handle Albania\'s most remote roads with confidence.'
    },
    {
      number: '04',
      title: 'Curated Accommodation',
      description: 'We partner with hand-picked boutique hotels and traditional guesthouses. No generic chain hotels. In the cities, expect restored Ottoman houses and design-forward boutiques. In the mountains, the best family-run guesthouses with extraordinary home cooking.'
    },
    {
      number: '05',
      title: 'Local Knowledge',
      description: 'Born and raised in Albania, speaking the language, knowing the back roads, the family restaurants, the hidden churches. This isn\'t something you can replicate with a guidebook or Google Maps. It\'s the difference between visiting Albania and understanding it.'
    },
    {
      number: '06',
      title: 'Flexible Itineraries',
      description: 'Every plan we create is a starting point. Want to spend an extra hour at that beach? Skip the museum and find a vineyard instead? Stumbled onto a village festival? We adapt in real time. The best travel moments are unscripted.'
    }
  ];

  return (
    <div className="standard-page">
      <SEO
        title="Our Standard — What Sets Arjes Apart"
        description="Licensed guide, private Mercedes fleet, curated boutique hotels, and deep local knowledge. Learn what makes an Arjes tour different from the rest."
        path="/our-standard"
      />

      <section className="standard-hero">
        <motion.div
          className="standard-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="standard-label">The Standard</span>
          <h1 className="standard-title">We Don't Do Average</h1>
          <p className="standard-subtitle">
            Every detail is intentional. From the vehicle you ride in to the guesthouse pillow you sleep on — here's what we promise and how we deliver.
          </p>
        </motion.div>
      </section>

      <section className="standard-grid">
        {standards.map((item, index) => (
          <motion.div
            key={item.number}
            className="standard-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <span className="standard-number">{item.number}</span>
            <h3 className="standard-item-title">{item.title}</h3>
            <p className="standard-item-desc">{item.description}</p>
          </motion.div>
        ))}
      </section>

      <section className="standard-cta">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="cta-title">Ready to Experience the Difference?</h2>
          <p className="cta-text">Tell us about your ideal Albanian adventure and we'll craft something unforgettable.</p>
          <Link to="/plan-your-trip" className="cta-link">Plan Your Trip →</Link>
        </motion.div>
      </section>
    </div>
  );
};

export default OurStandardPage;
