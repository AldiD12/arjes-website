import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import clientPhoto from './guide-photos/Gjirokaster.jpeg';
import signatureImg from './guide-photos/UraBeratit.jpeg';
import './Testimonial.css';

const Testimonial = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="testimonial" ref={ref}>
      <motion.div
        className="testimonial-card"
        initial={{ opacity: 0, rotate: 1, y: 50 }}
        animate={isInView ? { opacity: 1, rotate: 1, y: 0 } : { opacity: 0, rotate: 1, y: 50 }}
        transition={{ duration: 0.8 }}
        whileHover={{ rotate: 0 }}
      >
        <div className="testimonial-hole"></div>
        
        <div className="testimonial-header">
          <div className="testimonial-type">
            <span className="type-label">Type</span>
            <div className="type-badge">OFFICIAL STATEMENT</div>
          </div>
          <div className="testimonial-date">
            <span className="date-label">Date</span>
            <span className="date-value">14.OCT.23</span>
          </div>
        </div>
        
        <p className="testimonial-quote">
          "The logistics were flawless, but it was the soulful connection to the land that changed us. Arjes didn't just show us Albania; she translated its heartbeat."
        </p>
        
        <div className="testimonial-footer">
          <div className="client-photo">
            <img 
              alt="Client" 
              src={clientPhoto}
            />
          </div>
          <div className="client-info">
            <p className="client-name">Jonathan Davis</p>
            <p className="client-title">CEO, TECHCORP GLOBAL</p>
          </div>
          <img 
            alt="Signature" 
            className="signature" 
            src={signatureImg}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonial;