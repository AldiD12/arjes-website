'use client';
import React from 'react';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand display">
          <span>Arjes.</span>
          <span className="footer-brand-sub mono">Private guide, Albania</span>
        </div>
        <div className="footer-cols">
          <div>
            <div className="mono footer-h">Journeys</div>
            <a href="#journeys">Day trips</a>
            <a href="#journeys">Weekends</a>
            <a href="#journeys">Week-long</a>
            <a href="#journeys">Fortnight</a>
            <a href="#journeys">Custom</a>
          </div>
          <div>
            <div className="mono footer-h">The guide</div>
            <a href="#about">About</a>
            <a href="#how">How it works</a>
            <a href="#faq">FAQ</a>
            <a href="#journal">Journal</a>
          </div>
          <div>
            <div className="mono footer-h">Reach me</div>
            <a href="mailto:arjes@arjes.al">arjes@arjes.al</a>
            <a href="tel:+355698545440">+355 69 854 5440</a>
            <a href="#">Instagram</a>
            <a href="https://wa.me/355698545440">Signal / WhatsApp</a>
          </div>
          <div>
            <div className="mono footer-h">Credentials</div>
            <span className="footer-cred">Licensed National Tourism Guide</span>
            <span className="footer-cred">Republic of Albania</span>
            <span className="footer-cred">Reg. 2013</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom mono">
        <span>© 2026 Arjes</span>
        <span className="footer-motto">Small country · long conversations</span>
        <span>Tirana → wherever</span>
      </div>
    </footer>
  );
}
