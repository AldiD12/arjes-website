import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './CTA.css';

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="cta" ref={ref}>
      <motion.button
        className="cta-button"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
        whileHover={{ backgroundColor: 'white', color: 'var(--ink)' }}
        whileTap={{ scale: 0.98 }}
      >
        <span>Initiate Journey</span>
        <span className="material-symbols-outlined">arrow_forward</span>
      </motion.button>
    </section>
  );
};

export default CTA;