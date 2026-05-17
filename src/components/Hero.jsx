import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import heroImage from './guide-photos/pov-zvernec.jpeg';
import './Hero.css';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <header className="hero-editorial">
      <div className="hero-background">
        <div className="hero-grain"></div>
        <img
          src={heroImage}
          alt="Panoramic view of the Albanian Riviera coastline with turquoise Ionian waters and lush green hillsides"
          className="hero-image-bg"
          loading="eager"
          width="1920"
          height="1080"
        />
        <div className="hero-gradient"></div>
      </div>
      
      <div className="hero-status-badge">
        <span className="status-dot"></span>
        <span className="status-text">Live Status: Exploring the Riviera</span>
      </div>
      
      <div className="hero-content-editorial">
        <motion.div 
          className="hero-main"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1 className="hero-title-editorial">
            <span className="title-line-1">ALBANIA</span>
            <span className="title-line-2">REVEALED</span>
            <span className="title-line-3">MEDITERRANEAN SOUL</span>
          </h1>
        </motion.div>
        
        <motion.div 
          className="hero-sidebar"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p className="hero-description-editorial">
            The Adriatic as it was meant to be seen.<br/>
            Sun, salt, and untold stories.
          </p>
          <a href="#contact" className="hero-cta-editorial">
            <span>Design Your Private Itinerary</span>
            <span className="cta-arrow">→</span>
          </a>
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;
