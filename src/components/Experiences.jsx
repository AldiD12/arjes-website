import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import coastalImg from './guide-photos/pov-zvernec.jpeg';
import mountainImg from './guide-photos/KalajaGjirokastres.jpeg';
import './Experiences.css';

const Experiences = () => {
  const { t } = useTranslation();

  const divisions = [
    {
      key: 'coastal',
      title: 'The Riviera',
      subtitle: 'Secluded coves & Stone villas',
      label: 'Coastal Collection',
      image: coastalImg,
      alt: 'Albanian Riviera coastline with turquoise Ionian Sea waters and traditional stone villages along the shore',
      link: '/collections/coastal-riviera'
    },
    {
      key: 'mountain',
      title: 'The Alps',
      subtitle: 'High passes & Traditional Guesthouses',
      label: 'Alpine Collection',
      image: mountainImg,
      alt: 'Gjirokastër Castle perched above the historic stone city in the Albanian Alps with mountain panorama',
      link: '/collections/alpine-adventures'
    }
  ];

  return (
    <section className="experiences-editorial" id="experiences">
      <div className="experiences-split">
        {divisions.map((division, index) => (
          <motion.div
            key={division.key}
            className="division-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <img
              src={division.image}
              alt={division.alt}
              className="division-background"
              loading="lazy"
              width="960"
              height="960"
            />
            <div className="division-overlay"></div>
            
            <div className="division-label">
              <span>{division.label}</span>
            </div>
            
            <div className="division-content">
              <h3 className="division-title">{division.title}</h3>
              <p className="division-subtitle">{division.subtitle}</p>
              <Link to={division.link} className="division-link">
                Explore {division.key === 'coastal' ? 'Coast' : 'Mountains'} <span className="link-arrow">↗</span>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experiences;
