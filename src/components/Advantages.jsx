import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Advantages.css';

const Advantages = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const advantages = [
    {
      number: "01",
      label: "THE SAVOIR-FAIRE",
      title: "Curated Excellence",
      description: "Every route, stay, and guide is personally tested. We select only the properties that embody the true spirit of the Mediterranean—effortless, warm, and stunning."
    },
    {
      number: "02",
      label: "THE ACCESS",
      title: "Hidden Corridors",
      description: "We hold keys to the Balkans' most guarded secrets. Private vineyards, unmarked beaches accessible only by boat, and culinary experiences reserved for family."
    },
    {
      number: "03",
      label: "THE PROTOCOL",
      title: "Seamless Flow",
      description: "Your journey is monitored by our operations center. Anticipatory service ensures your path remains clear, letting you soak in the sun without a worry."
    }
  ];

  return (
    <section className="advantages-editorial" ref={ref}>
      <div className="advantages-container">
        <motion.div 
          className="advantages-header-editorial"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="advantages-title-editorial">
            The Mediterranean<br/>Method
          </h2>
          <div className="advantages-divider"></div>
          <p className="advantages-subtitle-editorial">
            Slow living.<br/>
            Authentic connection.<br/>
            Timeless style.
          </p>
        </motion.div>
        
        <div className="advantages-grid">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.number}
              className="advantage-card"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: 0.2 + (index * 0.1) }}
            >
              <span className="advantage-number-editorial">{advantage.number} // {advantage.label}</span>
              <h3 className="advantage-title-editorial">{advantage.title}</h3>
              <p className="advantage-description-editorial">{advantage.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
