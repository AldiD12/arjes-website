'use client';
import React from 'react';

const QUOTES = [
  {
    q: 'Arjes changed how we travel. She knows the country the way you know your own neighbourhood, and she introduced us to it like a friend would.',
    n: 'Clara & Jan',
    p: 'Berlin · 10 days, Coast & Alps',
  },
  {
    q: 'We’ve done private guides in nine countries. This was the most personal, least packaged trip we’ve ever taken. Albania was almost beside the point.',
    n: 'The Ransoms',
    p: 'New York · 14 days, end-to-end',
  },
  {
    q: 'Booked an afternoon in Tirana, stayed in touch for two years, came back for a fortnight. There’s a reason.',
    n: 'Meltem A.',
    p: 'İstanbul · multiple trips',
  },
];

export function Testimonials() {
  return (
    <section className="quotes">
      <div className="quotes-head">
        <div className="mono section-kicker">— 05 &nbsp;·&nbsp; What guests say</div>
      </div>
      <div className="quotes-grid">
        {QUOTES.map((t, i) => (
          <figure className="quote" key={i}>
            <span className="quote-mark display">&ldquo;</span>
            <blockquote className="quote-body">{t.q}</blockquote>
            <figcaption className="quote-cap">
              <span className="quote-n display">{t.n}</span>
              <span className="mono quote-p">{t.p}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

/* -------- map -------- */
const PLACES = [
  { id:'shkoder', name:'Shkodër', x: 44, y: 10 },
  { id:'theth',   name:'Theth',   x: 52, y: 14 },
  { id:'valbone', name:'Valbonë', x: 62, y: 12 },
  { id:'tirana',  name:'Tirana',  x: 46, y: 32 },
  { id:'durres',  name:'Durrës',  x: 38, y: 36 },
  { id:'kruje',   name:'Krujë',   x: 48, y: 26 },
  { id:'berat',   name:'Berat',   x: 48, y: 46 },
  { id:'apollonia', name:'Apollonia', x: 38, y: 48 },
  { id:'vjosa',   name:'Vjosa',   x: 52, y: 58 },
  { id:'gjirokaster', name:'Gjirokastër', x: 56, y: 66 },
  { id:'sarande', name:'Sarandë', x: 50, y: 82 },
  { id:'butrint', name:'Butrint', x: 52, y: 88 },
  { id:'ohrid',   name:'Ohrid',   x: 72, y: 42 },
  { id:'voskopoje', name:'Voskopojë', x: 66, y: 52 },
  { id:'korce',   name:'Korçë',   x: 70, y: 54 },
];

export function MapSection() {
  const [hover, setHover] = React.useState<string | null>(null);
  return (
    <section className="map" id="map">
      <div className="map-grid">
        <div className="map-col-l">
          <div className="mono section-kicker">— 06 &nbsp;·&nbsp; The country</div>
          <h2 className="map-title display">
            A small country, <em>many journeys.</em>
          </h2>
          <p className="map-body">
            Albania is roughly the size of Maryland — you can drive its length in
            a day. But the difference between the Alps in the north and the Greek
            border in the south is the difference between two countries. Places
            I return to, again and again:
          </p>
          <ul className="map-places mono">
            {PLACES.map(p => (
              <li key={p.id}
                  className={hover === p.id ? 'is-hover' : ''}
                  onMouseEnter={() => setHover(p.id)}
                  onMouseLeave={() => setHover(null)}>
                <span className="map-place-dot" />
                <span>{p.name}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="map-col-r">
          <div className="map-canvas">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="map-svg">
              {/* Stylised Albania outline (abstract, not literal) */}
              <path
                d="M 42 6 L 58 8 L 66 14 L 64 22 L 58 28 L 56 36 L 60 42 L 54 48 L 58 56 L 54 62 L 58 70 L 52 78 L 54 86 L 48 92 L 42 88 L 38 80 L 42 72 L 36 66 L 40 58 L 36 50 L 40 42 L 34 36 L 38 28 L 34 22 L 40 14 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.3"
                opacity="0.35"
              />
              {/* hairline graticule */}
              {[20,40,60,80].map(v => (
                <g key={v}>
                  <line x1="0" y1={v} x2="100" y2={v} stroke="currentColor" strokeWidth="0.1" opacity="0.1" />
                  <line x1={v} y1="0" x2={v} y2="100" stroke="currentColor" strokeWidth="0.1" opacity="0.1" />
                </g>
              ))}
              {PLACES.map(p => (
                <g key={p.id}
                   className={`map-pin ${hover === p.id ? 'is-hover' : ''}`}
                   onMouseEnter={() => setHover(p.id)}
                   onMouseLeave={() => setHover(null)}
                   transform={`translate(${p.x} ${p.y})`}>
                  <circle r="0.8" className="map-pin-dot" />
                  <circle r="2.4" className="map-pin-halo" />
                  <text x="2.6" y="0.8" className="map-pin-label">{p.name}</text>
                </g>
              ))}
            </svg>
            <div className="map-compass mono">
              <span>N</span>
              <span className="map-compass-line" />
              <span className="map-coords">41.3°N · 20.1°E</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
