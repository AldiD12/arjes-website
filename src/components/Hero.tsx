'use client';
import React, { useState, useEffect } from 'react';
import { useTranslation } from '@/contexts/TranslationContext';

const HERO_PHOTOS = [
  { key: 'berat',        label: 'Berat, Mangalem quarter' },
  { key: 'gjirokaster-pov',  label: 'Gjirokastër from the citadel' },
  { key: 'zvernec',      label: 'Zvërnec Island causeway' },
  { key: 'theth',        label: 'Waterfalls above Theth' },
  { key: 'vjosa',        label: 'The Vjosa, Europe’s last wild river' },
  { key: 'butrint-fortress', label: 'Butrint fortress' },
  { key: 'karavasta',    label: 'Karavasta Lagoon' },
].map(p => ({ ...p, src: `/photos/${p.key}.jpeg` }));

export function Hero({ photoKey = 'theth', onPhotoChange }: { photoKey?: string, onPhotoChange?: (key: string) => void }) {
  const t = useTranslation();
  const photo = HERO_PHOTOS.find(p => p.key === photoKey) || HERO_PHOTOS[0];
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(false);
    const img = new Image();
    img.onload = () => setLoaded(true);
    img.src = photo.src;
  }, [photo.src]);

  return (
    <header className="hero" id="top">
      <div className={`hero-photo ${loaded ? 'is-loaded' : ''}`}
           style={{ backgroundImage: `url(${photo.src})` }} />
      <div className="hero-scrim" />

      {/* Top meta bar */}
      <div className="hero-top">
        <div className="hero-top-l mono">
          {t.hero?.topL || 'Licensed guide · Tirana & the Albanian territories'}
        </div>
        <div className="hero-top-r mono">
          <span className="dot" /> {t.hero?.topR || 'Taking inquiries for summer & autumn 2026'}
        </div>
      </div>

      {/* Main title block */}
      <div className="hero-body">
        <div className="hero-intro mono">{t.hero?.intro || '— Private guiding, since 2013'}</div>
        <h1 className="hero-title">
          <span className="hero-title-l1">{t.hero?.titleL1 || 'Albania,'}</span>
          <span className="hero-title-l2"><em>{t.hero?.titleL2 || 'at walking pace.'}</em></span>
        </h1>
        <p className="hero-lede">
          {t.hero?.lede || "I'm Arjes. I show travellers the Albania I grew up with — from an afternoon on foot through Tirana to a fortnight across the country. Small groups. No clipboards. Time to sit down."}
        </p>

        <div className="hero-ctas">
          <a href="#journeys" className="btn btn-dark">
            <span>{t.hero?.ctaJourneys || 'See the journeys'}</span>
            <span className="btn-arr">→</span>
          </a>
          <a href="#inquire" className="btn btn-ghost">
            {t.hero?.ctaInquire || 'Plan your own'}
          </a>
        </div>
      </div>

      {/* Caption */}
      <div className="hero-caption">
        <span className="mono hero-caption-num">01</span>
        <span className="hero-caption-text">{photo.label}</span>
      </div>

      {/* Scroll cue */}
      <div className="hero-scroll mono">
        <span>{t.hero?.scroll || 'Scroll'}</span>
        <span className="hero-scroll-line" />
      </div>
    </header>
  );
}
