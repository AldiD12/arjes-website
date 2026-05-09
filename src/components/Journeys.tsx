'use client';
import React from 'react';
import { useReveal } from '@/hooks/useReveal';
import Image from 'next/image';

const JOURNEYS = [
  {
    n: '01',
    kind: 'Day',
    duration: 'Half day · 4 hrs',
    title: 'Tirana, on foot',
    blurb: 'The capital as it actually lives — from the Old Bazaar through Blloku, with stops for byrek, a communist-era bunker and the best coffee in the city.',
    from: '€120 / group',
    photo: '/photos/durres-amphitheatre.jpeg',
    tag: 'Most booked'
  },
  {
    n: '02',
    kind: 'Weekend',
    duration: '3 days · 2 nights',
    title: 'The South in a long weekend',
    blurb: 'Gjirokastër, Butrint, and a slow drive down the Ionian coast. For travellers with limited time who want the three things Albania does best.',
    from: '€680 / person',
    photo: '/photos/gjirokaster-pov.jpeg',
    tag: null
  },
  {
    n: '03',
    kind: 'Week',
    duration: '7 days · 6 nights',
    title: 'Coast &amp; Riviera',
    blurb: 'Saranda to Vlorë along the old road — swimming at Gjipe and Jale, dinner in a village that still doesn&apos;t take cards, a night in Berat on the way home.',
    from: '€1,780 / person',
    photo: '/photos/zvernec.jpeg',
    tag: 'Flagship'
  },
  {
    n: '04',
    kind: 'Week',
    duration: '7 days · 6 nights',
    title: 'The Accursed Mountains',
    blurb: 'Tirana up through Shkodër, the ferry across Koman, and three days on foot between Valbonë and Theth. For travellers who want the hard version.',
    from: '€1,920 / person',
    photo: '/photos/theth.jpeg',
    tag: null
  },
  {
    n: '05',
    kind: 'Fortnight',
    duration: '14 days · 13 nights',
    title: 'Albania, end to end',
    blurb: 'North to south, mountains to sea. The trip I take my own friends on. Fifteen places, six guesthouses, one long table.',
    from: '€3,450 / person',
    photo: '/photos/berat.jpeg',
    tag: 'Signature'
  },
  {
    n: '06',
    kind: 'Custom',
    duration: 'Built to you',
    title: 'Something else entirely',
    blurb: 'Weddings, food-led trips, photography assignments, cross-border into Kosovo or North Macedonia. Write to me and we&apos;ll design it together.',
    from: 'On request',
    photo: '/photos/prizren.jpeg',
    tag: null
  },
];

export function Journeys() {
  const [ref, shown] = useReveal();
  return (
    <section className="journeys" id="journeys" ref={ref}>
      <div className="journeys-head">
        <div className="mono section-kicker">— 03 &nbsp;·&nbsp; Journeys</div>
        <h2 className="journeys-title display">
          From an afternoon <em>to a fortnight.</em>
        </h2>
        <p className="journeys-sub">
          Every trip is private — just you, your people, and me. No fixed departures,
          no coach groups. Below are the trips I&apos;m asked for most; everything is
          adjustable.
        </p>
      </div>

      <ul className={`journeys-list ${shown ? 'is-shown' : ''}`}>
        {JOURNEYS.map((j, i) => (
          <li className="journey" key={j.n} style={{ transitionDelay: `${i * 60}ms` }}>
            <a href="#inquire" className="journey-link">
              <div className="journey-photo">
                <img src={j.photo} alt="" />
                {j.tag && <span className="journey-tag mono">{j.tag}</span>}
              </div>
              <div className="journey-meta">
                <div className="journey-meta-l">
                  <span className="mono journey-n">{j.n}</span>
                  <span className="mono journey-kind">{j.kind} · {j.duration}</span>
                </div>
                <span className="mono journey-from">From {j.from}</span>
              </div>
              <h3 className="journey-title display"
                  dangerouslySetInnerHTML={{__html: j.title}} />
              <p className="journey-blurb"
                 dangerouslySetInnerHTML={{__html: j.blurb}} />
              <span className="journey-cta mono">
                Read the itinerary <span className="arr">→</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function HowItWorks() {
  const steps = [
    { n: '01', t: 'Write to me', d: 'One sentence or three paragraphs — both fine. Tell me dates, group size, what you’re curious about. I answer within 24 hours.' },
    { n: '02', t: 'We sketch it together', d: 'A short video call or long email thread. I send a rough day-by-day, photos of the places, honest trade-offs. We iterate until it feels right.' },
    { n: '03', t: 'Soft hold, then confirm', d: 'I soft-hold guesthouses and drivers while you decide. A 20% deposit confirms; the rest is due four weeks out. No hidden fees, ever.' },
    { n: '04', t: 'I meet you at the airport', d: 'From the moment you land, I’m your single point of contact. Driver, guesthouses, restaurant tables, emergencies at 2am — all me.' },
  ];
  return (
    <section className="how" id="how">
      <div className="how-head">
        <div className="mono section-kicker">— 04 &nbsp;·&nbsp; How it works</div>
        <h2 className="how-title display">Four steps. <em>No middleman.</em></h2>
      </div>
      <ol className="how-steps">
        {steps.map(s => (
          <li className="how-step" key={s.n}>
            <div className="how-step-n mono">{s.n}</div>
            <h3 className="how-step-t display">{s.t}</h3>
            <p className="how-step-d">{s.d}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
