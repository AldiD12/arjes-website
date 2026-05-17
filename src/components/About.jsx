import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import portraitImg from './guide-photos/Berat.jpeg';
import './About.css';

const About = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="about-section" id="about" ref={ref}>
      <div className="about-container">
        <motion.div 
          className="about-image-wrapper"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="about-image-container">
            <img src={portraitImg} alt="Arjes, licensed private tour guide in Albania, standing in the historic city of Berat" className="about-image" loading="lazy" width="600" height="800" />
            <div className="about-badge">
              <div className="badge-content">
                <span className="badge-icon">✓</span>
                <div>
                  <p className="badge-name">Arjes</p>
                  <p className="badge-title">National Licensed Guide</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="about-title">Meet Your Guide</h2>
          <p className="about-description">
            I'm Arjes, your personal gateway to the hidden Albania. Born by the Ionian sea and raised in the shadow of the Accursed Mountains, I bridge the gap between the raw, untouched landscapes and the sophisticated traveler. My philosophy is simple: travel should be an editorial experience, curated with the warmth of Albanian hospitality and the precision of high-end design.
          </p>
          
          <div className="about-details">
            <div className="detail-item">
              <h4 className="detail-label">Specialty</h4>
              <p className="detail-value">Cultural Immersion & Hidden History</p>
            </div>
            <div className="detail-item">
              <h4 className="detail-label">Languages</h4>
              <p className="detail-value">English, Italian, Albanian</p>
            </div>
          </div>
          
          <a href="/our-standard" className="about-link">
            Our Standard <span className="link-arrow">↗</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
