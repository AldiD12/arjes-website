import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import './Navigation.css';

const Navigation = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  return (
    <nav className="navigation" role="navigation" aria-label="Main navigation">
      <div className="nav-brand">
        <Link to="/" className="nav-logo">Arjes.</Link>
      </div>

      <button
        className={`hamburger ${isMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isMenuOpen}
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/our-standard" className="nav-link">
          The Standard
          <span className="nav-underline"></span>
        </Link>
        <Link to="/collections/coastal-riviera" className="nav-link">
          Collections
          <span className="nav-underline"></span>
        </Link>
        <Link to="/journal" className="nav-link">
          Journal
          <span className="nav-underline"></span>
        </Link>
        <Link to="/plan-your-trip" className="nav-link nav-link-cta">
          Plan Trip
          <span className="nav-underline"></span>
        </Link>
      </div>

      <div className="nav-meta">
        <div className="nav-status">
          <span>TEMP: 26°C DHERMI</span>
          <span>LOC: IONIAN COAST</span>
        </div>
        <LanguageSwitcher />
      </div>
    </nav>
  );
};

export default Navigation;
