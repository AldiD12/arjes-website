import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';
import './PlanYourTripPage.css';

const PlanYourTripPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    dates: '',
    groupSize: '',
    interests: [],
    budget: '',
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const totalSteps = 4;

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleInterestToggle = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('https://formspree.io/f/mjglaqlj', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: 'Plan Your Trip form',
          interests: formData.interests.join(', ')
        })
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        alert('Something went wrong. Please try again or contact us via WhatsApp.');
      }
    } catch {
      alert('Connection error. Please try again or contact us via WhatsApp.');
    }
  };

  if (submitted) {
    return (
      <div className="plan-trip-page">
        <div className="success-container">
          <motion.div
            className="success-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="success-icon">✓</span>
            <h1 className="success-title">Request Received</h1>
            <p className="success-message">
              Thank you for your interest. Arjes is reviewing your request and will send a custom proposal within 24 hours.
            </p>
            <a href="/" className="success-cta">Return to Home</a>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="plan-trip-page">
      <SEO
        title="Plan Your Trip to Albania"
        description="Design your private Albanian adventure. Tell us your dates, interests, and group size — Arjes will craft a bespoke itinerary within 24 hours."
        path="/plan-your-trip"
      />
      <div className="plan-trip-container">
        <div className="plan-trip-header">
          <h1 className="plan-trip-title">Plan Your Journey</h1>
          <p className="plan-trip-subtitle">
            Tell us about your dream Albanian adventure
          </p>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${(step / totalSteps) * 100}%` }}
            ></div>
          </div>
          <p className="step-indicator">Step {step} of {totalSteps}</p>
        </div>

        <form className="plan-trip-form" onSubmit={handleSubmit}>
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                className="form-step"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="step-title">When are you traveling?</h2>
                <div className="form-group">
                  <label className="form-label">Travel Dates</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="e.g., July 10-17, 2026"
                    value={formData.dates}
                    onChange={(e) => setFormData({...formData, dates: e.target.value})}
                    required
                  />
                  <p className="form-hint">Flexible dates? Just give us an approximate timeframe</p>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                className="form-step"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="step-title">How many travelers?</h2>
                <div className="form-group">
                  <div className="option-grid">
                    {['Solo', '2 People', '3-4 People', '5-8 People', '9+ People'].map((size) => (
                      <button
                        key={size}
                        type="button"
                        className={`option-button ${formData.groupSize === size ? 'active' : ''}`}
                        onClick={() => setFormData({...formData, groupSize: size})}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                className="form-step"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="step-title">What interests you?</h2>
                <p className="step-subtitle">Select all that apply</p>
                <div className="form-group">
                  <div className="interest-grid">
                    {[
                      { id: 'history', label: 'History & Culture', icon: '🏛️' },
                      { id: 'beach', label: 'Beach & Coast', icon: '🏖️' },
                      { id: 'mountains', label: 'Mountains & Hiking', icon: '⛰️' },
                      { id: 'food', label: 'Food & Wine', icon: '🍷' },
                      { id: 'adventure', label: 'Adventure Sports', icon: '🚵' },
                      { id: 'photography', label: 'Photography', icon: '📸' }
                    ].map((interest) => (
                      <button
                        key={interest.id}
                        type="button"
                        className={`interest-button ${formData.interests.includes(interest.id) ? 'active' : ''}`}
                        onClick={() => handleInterestToggle(interest.id)}
                      >
                        <span className="interest-icon">{interest.icon}</span>
                        <span className="interest-label">{interest.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                key="step4"
                className="form-step"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="step-title">Your contact details</h2>
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-input"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    className="form-input"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Budget Level (Optional)</label>
                  <select
                    className="form-select"
                    value={formData.budget}
                    onChange={(e) => setFormData({...formData, budget: e.target.value})}
                  >
                    <option value="">Select budget range</option>
                    <option value="standard">Standard (€500-1000/person)</option>
                    <option value="premium">Premium (€1000-2000/person)</option>
                    <option value="luxury">Luxury (€2000+/person)</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Additional Details</label>
                  <textarea
                    className="form-textarea"
                    rows="4"
                    placeholder="Tell us more about your ideal trip..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="form-actions">
            {step > 1 && (
              <button type="button" className="btn-secondary" onClick={handleBack}>
                Back
              </button>
            )}
            {step < totalSteps ? (
              <button type="button" className="btn-primary" onClick={handleNext}>
                Continue
              </button>
            ) : (
              <button type="submit" className="btn-primary">
                Submit Request
              </button>
            )}
          </div>
        </form>
      </div>

      <div className="plan-trip-info">
        <div className="info-section">
          <h2 className="info-title">How It Works</h2>
          <div className="info-steps">
            <div className="info-step">
              <span className="step-num">01</span>
              <h3>Tell Us Your Vision</h3>
              <p>Fill out the form above with your dates, group size, interests, and any must-see destinations. The more detail, the better your proposal will be.</p>
            </div>
            <div className="info-step">
              <span className="step-num">02</span>
              <h3>Receive Your Custom Proposal</h3>
              <p>Within 24 hours, Arjes will send you a detailed day-by-day itinerary with accommodation options, driving routes, activities, and transparent pricing. No obligation, no pressure.</p>
            </div>
            <div className="info-step">
              <span className="step-num">03</span>
              <h3>Refine & Confirm</h3>
              <p>We'll adjust the itinerary until it's exactly right. Swap a beach day for a mountain hike, add a cooking class, extend by a day — it's your trip. Once confirmed, a 30% deposit secures your dates.</p>
            </div>
          </div>
        </div>

        <div className="info-section">
          <h2 className="info-title">What's Typically Included</h2>
          <div className="included-summary">
            <p>Every Arjes tour includes private transport (Mercedes V-Class or 4x4 Land Cruiser depending on terrain), a licensed English-speaking guide, hand-picked accommodation in boutique hotels or traditional guesthouses, daily breakfast, all entrance fees, and bottled water throughout. Lunch and dinner are at your discretion — we'll recommend the best spots, but you choose where and when to eat.</p>
          </div>
        </div>

        <div className="info-section">
          <h2 className="info-title">Common Questions</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h3>How far in advance should I book?</h3>
              <p>We take a limited number of clients per season. For July and August, booking 4-6 weeks ahead is recommended. For June or September, 2-3 weeks is usually fine. Last-minute requests are possible if we have availability.</p>
            </div>
            <div className="faq-item">
              <h3>Can I combine coast and mountains?</h3>
              <p>Absolutely — in fact, the best Albania trips do exactly that. A typical 7-day itinerary might include 3 days on the Riviera and 3 days in the Alps with a cultural stop in between. We'll design the route so driving days feel like part of the experience, not wasted time.</p>
            </div>
            <div className="faq-item">
              <h3>What about solo travelers?</h3>
              <p>Many of our clients travel solo. Pricing is per-tour rather than per-person, so a solo trip costs the same as a couple's trip. It's one of the advantages of private touring — you get the full experience regardless of group size.</p>
            </div>
            <div className="faq-item">
              <h3>Is Albania safe?</h3>
              <p>Yes. Albania is one of the safest countries in southern Europe for tourists. We've written a detailed guide on this — <a href="/journal/is-albania-safe">read our honest safety assessment</a>.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanYourTripPage;
