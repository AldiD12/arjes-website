'use client';
import React, { useState } from 'react';
import { useTranslation } from '@/contexts/TranslationContext';

const FAQS = [
  {
    q: 'How far in advance should I book?',
    a: 'For high summer (June–September), three to six months is comfortable. For the shoulder seasons (April–May, October), six weeks is usually enough. Last-minute trips sometimes work — write to me and I’ll tell you honestly.'
  },
  {
    q: 'What does "private" actually mean?',
    a: 'It means the only other people on the trip are the people you bring with you. No strangers, no shared transfers, no fixed group sizes. Whether you’re solo or a group of twelve, the itinerary is yours.'
  },
  {
    q: 'What’s included in the price?',
    a: 'My guiding, private driver and vehicle, all accommodation (in the guesthouses and small hotels I’ve vetted personally), breakfasts, and a handful of signature dinners. Flights, visas, travel insurance, and lunches on the road are not included.'
  },
  {
    q: 'Can I change the itinerary mid-trip?',
    a: 'Yes. That’s half the point. If you fall in love with a village and want another night, or the weather turns and we need to flip two days around, we do. Everything I book has flexibility built in.'
  },
  {
    q: 'Do you work outside Albania?',
    a: 'Regularly. Cross-border trips into Kosovo, North Macedonia, and occasionally Montenegro are popular — especially Prizren, Ohrid, and the Accursed Mountains, which straddle the border.'
  },
  {
    q: 'Is Albania safe? Easy? Comfortable?',
    a: 'Safe: yes, genuinely. Easy: easier than you’d think, harder than Italy. Comfortable: the guesthouses I use are all en-suite, most with a view; the roads to the north are slow and winding. I won’t sugarcoat anything — ask me directly.'
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number>(0);
  const t = useTranslation();
  const faqList = t.faq?.list || FAQS;
  return (
    <section className="faq" id="faq">
      <div className="faq-head">
        <div className="mono section-kicker">{t.faq?.kicker || '— 07 · Asked & answered'}</div>
        <h2 className="faq-title display">
          {t.faq?.title1 || 'The things'} <em>{t.faq?.title2 || 'people ask first.'}</em>
        </h2>
      </div>
      <ul className="faq-list">
        {faqList.map((f: any, i: number) => (
          <li key={i} className={`faq-item ${open === i ? 'is-open' : ''}`}>
            <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
              <span className="mono faq-n">{String(i + 1).padStart(2, '0')}</span>
              <span className="faq-q-text">{f.q}</span>
              <span className="faq-toggle">{open === i ? '–' : '+'}</span>
            </button>
            <div className="faq-a-wrap">
              <div className="faq-a">{f.a}</div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
