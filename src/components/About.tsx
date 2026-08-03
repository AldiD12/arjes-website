'use client';
import React from 'react';
import { useReveal } from '@/hooks/useReveal';
import Image from 'next/image';
import { useTranslation } from '@/contexts/TranslationContext';

export function About() {
  const [ref, shown] = useReveal();
  const t = useTranslation();
  return (
    <section className="about" id="about" ref={ref}>
      <div className="about-grid">
        <div className="about-col-l">
          <div className="mono section-kicker">{t.about?.kicker || '— 02 · Meet Arjes'}</div>
          <h2 className="about-title">
            <span>{t.about?.title1 || 'Born in Tirana.'}</span>
            <span><em>{t.about?.title2 || 'At home'}</em>{t.about?.title3 || ' everywhere between the Ionian and the Alps.'}</span>
          </h2>

          <div className="about-body">
            <p>{t.about?.body1 || "I've been guiding full-time for over ten years — long enough to know which bakery in Gjirokastër opens before six, which shepherd in Theth makes the best raki, and which road into the Albanian Alps closes first when the weather turns."}</p>
            <p>{t.about?.body2 || "Most of my clients come for a week or two. Some come for an afternoon, just to walk through Tirana with someone who can tell them what they're actually looking at. Both are welcome."}</p>
            <p className="about-sign">{t.about?.sign || '— A.'}</p>
          </div>

          <dl className="about-facts">
            <div>
              <dt className="mono">{t.about?.factLicensedL || 'Licensed'}</dt>
              <dd>{t.about?.factLicensedR || 'National Tourism Guide, Republic of Albania'}</dd>
            </div>
            <div>
              <dt className="mono">{t.about?.factLangL || 'Languages'}</dt>
              <dd>{t.about?.factLangR || 'English · German · Türkçe · Shqip'}</dd>
            </div>
            <div>
              <dt className="mono">{t.about?.factSinceL || 'Experience'}</dt>
              <dd>{t.about?.factSinceR || 'Over a decade in the field'}</dd>
            </div>
            <div>
              <dt className="mono">{t.about?.factBasedL || 'Based in'}</dt>
              <dd>{t.about?.factBasedR || 'Tirana. On the road most of the season.'}</dd>
            </div>
          </dl>
        </div>

        <div className={`about-col-r ${shown ? 'is-shown' : ''}`}>
          <figure className="about-portrait">
            <img src="/photos/valbone.jpeg" alt="Arjes with guests in the Albanian Alps" />
            <figcaption className="mono">
              <span>{t.about?.fig01 || 'Fig. 01'}</span>
              <span>{t.about?.fig01Caption || "With guests above Valbonë, autumn '24"}</span>
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
