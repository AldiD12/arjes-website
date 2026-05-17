import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="footer-editorial">
      <div className="footer-content">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">Arjes.</Link>
          <p className="footer-tagline">Your Private Guide to the Real Albania</p>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h4 className="footer-heading">Explore</h4>
            <Link to="/collections/coastal-riviera">Coastal Riviera</Link>
            <Link to="/collections/alpine-adventures">Alpine Adventures</Link>
            <Link to="/collections/culture-history">Culture & History</Link>
          </div>
          <div className="footer-column">
            <h4 className="footer-heading">Learn</h4>
            <Link to="/journal">Travel Journal</Link>
            <Link to="/our-standard">Our Standard</Link>
            <Link to="/plan-your-trip">Plan Your Trip</Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-text">© {year} Arjes. All rights reserved. Licensed Tour Guide — Tirana, Albania</p>
      </div>
    </footer>
  );
};

export default Footer;
