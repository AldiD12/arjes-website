import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Contact.css';

const WHATSAPP_NUMBER = '355698545440';
const FORMSPREE_ID = 'mjglaqlj';

const Contact = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          source: 'Homepage quick inquiry',
          message: 'New lead from homepage — requesting availability'
        })
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError('Something went wrong. Please try WhatsApp instead.');
      }
    } catch {
      setError('Connection error. Please try WhatsApp instead.');
    }
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hi Arjes! I'm interested in booking a private tour in Albania. Can you tell me about availability?"
  )}`;

  return (
    <section className="contact-editorial" id="contact">
      <div className="contact-noise"></div>

      <div className="contact-container-editorial">
        <motion.div
          className="contact-icon"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="sun-icon">☀</span>
        </motion.div>

        <motion.h2
          className="contact-title-editorial"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Ready for the Summer?
        </motion.h2>

        <motion.p
          className="contact-description-editorial"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          We accept a limited number of clients per season to ensure the highest level of personal attention. Inquire below for availability for the upcoming summer season.
        </motion.p>

        {submitted ? (
          <motion.div
            className="contact-success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="success-message">Thank you! Arjes will get back to you within 24 hours.</p>
          </motion.div>
        ) : (
          <motion.form
            className="contact-form-editorial"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <input
              type="email"
              placeholder="YOUR EMAIL ADDRESS"
              className="contact-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="contact-submit">
              Check Availability
            </button>
            {error && <p className="contact-error">{error}</p>}
          </motion.form>
        )}

        <motion.div
          className="contact-whatsapp"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <span className="or-divider">or message directly</span>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chat on WhatsApp
          </a>
        </motion.div>

        <motion.div
          className="contact-info-grid"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="info-item">
            <h4 className="info-label">Contact</h4>
            <p className="info-value">concierge@arjes.com</p>
          </div>
          <div className="info-item">
            <h4 className="info-label">Based in</h4>
            <p className="info-value">Tirana, Albania</p>
          </div>
          <div className="info-item">
            <h4 className="info-label">Social</h4>
            <a href="https://instagram.com/arjes.al" target="_blank" rel="noopener noreferrer" className="info-value info-link">Instagram</a>
          </div>
          <div className="info-item">
            <h4 className="info-label">Response</h4>
            <p className="info-value">Within 24 hours</p>
          </div>
        </motion.div>
      </div>

      <div className="contact-watermark">
        <span>Arjes</span>
      </div>
    </section>
  );
};

export default Contact;
