'use client';
import React from 'react';
import { useTranslation } from '@/contexts/TranslationContext';

export function Footer() {
  const t = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand display">
          <span>Arjes.</span>
          <span className="footer-brand-sub mono">{t.footer?.privateGuide || 'Private guide, Albania'}</span>
        </div>
        <div className="footer-cols">
          <div>
            <div className="mono footer-h">{t.footer?.journeys || 'Journeys'}</div>
            <a href="#journeys">{t.footer?.dayTrips || 'Day trips'}</a>
            <a href="#journeys">{t.footer?.weekends || 'Weekends'}</a>
            <a href="#journeys">{t.footer?.weekLong || 'Week-long'}</a>
            <a href="#journeys">{t.footer?.fortnight || 'Fortnight'}</a>
            <a href="#journeys">{t.footer?.custom || 'Custom'}</a>
          </div>
          <div>
            <div className="mono footer-h">{t.footer?.theGuide || 'The guide'}</div>
            <a href="#about">{t.footer?.about || 'About'}</a>
            <a href="#how">{t.footer?.howItWorks || 'How it works'}</a>
            <a href="#faq">{t.footer?.faq || 'FAQ'}</a>
            <a href="#journal">{t.footer?.journal || 'Journal'}</a>
          </div>
          <div>
            <div className="mono footer-h">{t.footer?.reachMe || 'Reach me'}</div>
            <a href="mailto:arjes@arjes.al">arjes@arjes.al</a>
            <a href="tel:+355698545440">+355 69 854 5440</a>
            <a href="#">Instagram</a>
            <a href="https://wa.me/355698545440">Signal / WhatsApp</a>
          </div>
          <div>
            <div className="mono footer-h">{t.footer?.credentials || 'Credentials'}</div>
            <span className="footer-cred">{t.footer?.licensedGuide || 'Licensed National Tourism Guide'}</span>
            <span className="footer-cred">{t.footer?.republic || 'Republic of Albania'}</span>
            <span className="footer-cred">{t.footer?.reg || 'Reg. 2013'}</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom mono">
        <span>© 2026 Arjes</span>
        <span className="footer-motto">{t.footer?.motto || 'Small country · long conversations'}</span>
        <span>{t.footer?.route || 'Tirana → wherever'}</span>
      </div>
    </footer>
  );
}
