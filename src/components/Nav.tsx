'use client';
import React, { useState, useEffect } from 'react';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  
  return (
    <nav className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
      <a href="#top" className="nav-brand">
        <span className="nav-mark">A</span>
        <span className="nav-wordmark">Arjes</span>
      </a>
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#journeys">Journeys</a>
        <a href="#how">How it works</a>
        <a href="#journal">Journal</a>
        <a href="#faq">FAQ</a>
        <a href="tel:+355698545440">+355 69 854 5440</a>
      </div>
      <a href="#inquire" className="nav-cta">
        <span>Plan a trip</span>
        <span className="nav-cta-arr">→</span>
      </a>
    </nav>
  );
}
