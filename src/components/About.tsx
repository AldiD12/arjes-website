'use client';
import React from 'react';
import { useReveal } from '@/hooks/useReveal';
import Image from 'next/image';

export function About() {
  const [ref, shown] = useReveal();
  return (
    <section className="about" id="about" ref={ref}>
      <div className="about-grid">
        <div className="about-col-l">
          <div className="mono section-kicker">— 02 &nbsp;·&nbsp; Meet Arjes</div>
          <h2 className="about-title">
            <span>Born in Tirana.</span>
            <span><em>At home</em> everywhere between</span>
            <span>the Ionian and the Alps.</span>
          </h2>

          <div className="about-body">
            <p>
              I&apos;ve been guiding full-time for over ten years — long enough to know
              which bakery in Gjirokastër opens before six, which shepherd in Theth
              makes the best raki, and which road into the Albanian Alps closes
              first when the weather turns.
            </p>
            <p>
              Most of my clients come for a week or two. Some come for an afternoon,
              just to walk through Tirana with someone who can tell them what
              they&apos;re actually looking at. Both are welcome.
            </p>
            <p className="about-sign">— A.</p>
          </div>

          <dl className="about-facts">
            <div>
              <dt className="mono">Licensed</dt>
              <dd>National Tourism Guide, Republic of Albania</dd>
            </div>
            <div>
              <dt className="mono">Languages</dt>
              <dd>English · German · Türkçe · Shqip</dd>
            </div>
            <div>
              <dt className="mono">Working since</dt>
              <dd>2013 — over a decade in the field</dd>
            </div>
            <div>
              <dt className="mono">Based in</dt>
              <dd>Tirana. On the road most of the season.</dd>
            </div>
          </dl>
        </div>

        <div className={`about-col-r ${shown ? 'is-shown' : ''}`}>
          <figure className="about-portrait">
            <img src="/photos/valbone.jpeg" alt="Arjes with guests in the Albanian Alps" />
            <figcaption className="mono">
              <span>Fig. 01</span>
              <span>With guests above Valbonë, autumn &apos;24</span>
            </figcaption>
          </figure>
          <figure className="about-portrait-sm">
            <img src="/photos/shiroke.jpeg" alt="On Lake Shkodër" />
            <figcaption className="mono">Shkodër, Shiroka</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
