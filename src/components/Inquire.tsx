'use client';
import React from 'react';

export function Inquire() {
  return (
    <section className="inquire" id="inquire">
      <div className="inquire-bg" style={{ backgroundImage: 'url(/photos/berat-bridge.jpeg)' }} />
      <div className="inquire-scrim" />
      <div className="inquire-body">
        <div className="mono section-kicker light">— 08 &nbsp;·&nbsp; Start a conversation</div>
        <h2 className="inquire-title display">
          Tell me what <em>you&rsquo;re curious about.</em>
        </h2>
        <p className="inquire-lede">
          I answer every message myself, usually within a day. No forms longer than
          this one.
        </p>

        <form className="inquire-form" onSubmit={e => e.preventDefault()}>
          <div className="inquire-row">
            <label>
              <span className="mono">Name</span>
              <input type="text" placeholder="Your name" />
            </label>
            <label>
              <span className="mono">Email</span>
              <input type="email" placeholder="you@example.com" />
            </label>
          </div>
          <div className="inquire-row">
            <label>
              <span className="mono">Rough dates</span>
              <input type="text" placeholder="E.g. first two weeks of June" />
            </label>
            <label>
              <span className="mono">Group size</span>
              <input type="text" placeholder="2 adults, 1 teenager" />
            </label>
          </div>
          <label className="inquire-full">
            <span className="mono">Tell me a little</span>
            <textarea rows={4}
              placeholder="Even one sentence is enough. Somewhere you've seen a photo of, something you want to avoid, a food you love."
            />
          </label>
          <div className="inquire-submit">
            <button type="submit" className="btn btn-dark">
              <span>Send</span>
              <span className="btn-arr">→</span>
            </button>
            <span className="mono inquire-note">
              Or email me directly — <a href="mailto:arjes@arjes.al">arjes@arjes.al</a>
            </span>
          </div>
        </form>
      </div>
    </section>
  );
}
