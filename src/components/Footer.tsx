'use client';
import React from 'react';
import { useTranslation } from '@/contexts/TranslationContext';

export function Footer({ homeHref = '' }: { homeHref?: string }) {
  const t = useTranslation();
  const homeSection = (section: string) => `${homeHref}#${section}`;
  const journeyLinks = homeHref === '/de'
    ? [
        '/de/stadtfuehrung-tirana-deutsch',
        '/de/deutschsprachiger-reiseleiter-albanien',
        '/de/albanien-rundreise-7-tage',
        '/de/albanien-rundreise-14-tage',
        '/de/albanien-rundreise',
      ]
    : homeHref === '/en'
      ? [
          '/en/tirana-private-tour',
          '/en/private-albania-tours',
          '/en/albania-itinerary-10-days',
          '/en/albania-itinerary-14-days',
          '/en/private-albania-tours',
        ]
      : Array(5).fill(homeSection('journeys'));

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
            <a href={journeyLinks[0]}>{t.footer?.dayTrips || 'Day trips'}</a>
            <a href={journeyLinks[1]}>{t.footer?.weekends || 'Weekends'}</a>
            <a href={journeyLinks[2]}>{t.footer?.weekLong || 'Week-long'}</a>
            <a href={journeyLinks[3]}>{t.footer?.fortnight || 'Fortnight'}</a>
            <a href={journeyLinks[4]}>{t.footer?.custom || 'Custom'}</a>
          </div>
          <div>
            <div className="mono footer-h">{t.footer?.theGuide || 'The guide'}</div>
            <a href={homeSection('about')}>{t.footer?.about || 'About'}</a>
            <a href={homeSection('how')}>{t.footer?.howItWorks || 'How it works'}</a>
            <a href={homeSection('faq')}>{t.footer?.faq || 'FAQ'}</a>
          </div>
          <div>
            <div className="mono footer-h">{t.footer?.reachMe || 'Reach me'}</div>
            <a href="tel:+355698545440">+355 69 854 5440</a>
            <a href="https://wa.me/355698545440">WhatsApp</a>
          </div>
          <div>
            <div className="mono footer-h">{t.footer?.credentials || 'Credentials'}</div>
            <span className="footer-cred">{t.footer?.licensedGuide || 'Licensed National Tourism Guide'}</span>
            <span className="footer-cred">{t.footer?.republic || 'Republic of Albania'}</span>
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
