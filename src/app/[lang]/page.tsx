'use client';
import React, { useState, useEffect } from 'react';
import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Journeys, HowItWorks } from '@/components/Journeys';
import { Testimonials, MapSection } from '@/components/MapAndQuotes';
import { FAQ } from '@/components/FAQ';
import { Inquire } from '@/components/Inquire';
import { Footer } from '@/components/Footer';
import { TweaksPanel } from '@/components/TweaksPanel';

const HERO_PHOTOS = [
  { key: 'berat',        label: 'Berat, Mangalem quarter' },
  { key: 'gjirokaster-pov',  label: 'Gjirokastër from the citadel' },
  { key: 'zvernec',      label: 'Zvërnec Island causeway' },
  { key: 'theth',        label: 'Waterfalls above Theth' },
  { key: 'vjosa',        label: 'The Vjosa, Europe’s last wild river' },
  { key: 'butrint-fortress', label: 'Butrint fortress' },
  { key: 'karavasta',    label: 'Karavasta Lagoon' },
].map(p => ({ ...p, src: `/photos/${p.key}.jpeg` }));

const DEFAULTS = {
  "heroPhoto": "theth"
};

export default function Home() {
  const [editMode, setEditMode] = useState(false);
  const [photoKey, setPhotoKey] = useState(DEFAULTS.heroPhoto);

  useEffect(() => {
    const onMsg = (e: MessageEvent) => {
      const d = e.data || {};
      if (d.type === '__activate_edit_mode') setEditMode(true);
      if (d.type === '__deactivate_edit_mode') setEditMode(false);
    };
    window.addEventListener('message', onMsg);
    
    if (window.parent && window.parent !== window) {
      window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    }
    
    return () => window.removeEventListener('message', onMsg);
  }, []);

  const setPhoto = (key: string) => {
    setPhotoKey(key);
    if (window.parent && window.parent !== window) {
      window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { heroPhoto: key } }, '*');
    }
  };

  return (
    <>
      <Nav />
      <main>
        <Hero photoKey={photoKey} onPhotoChange={setPhoto} />
        <About />
        <Journeys />
        <HowItWorks />
        <Testimonials />
        <MapSection />
        <FAQ />
        <Inquire />
      </main>
      <Footer />
      <TweaksPanel editMode={editMode} photoKey={photoKey} onPhotoChange={setPhoto} photos={HERO_PHOTOS} />
    </>
  );
}
