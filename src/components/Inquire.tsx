'use client';
import React, { useState } from 'react';

export function Inquire() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    
    const form = e.currentTarget;
    const data = new FormData(form);
    
    try {
      const response = await fetch("https://formspree.io/f/mjglaqlj", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

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

        {status === "success" ? (
          <div className="inquire-success" style={{ padding: '2rem 0', color: 'white' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Message sent successfully!</h3>
            <p>Thanks for reaching out. I'll get back to you as soon as possible.</p>
            <button 
              onClick={() => setStatus("idle")}
              className="btn btn-dark"
              style={{ marginTop: '1.5rem' }}
            >
              Send another message
            </button>
          </div>
        ) : (
          <form className="inquire-form" onSubmit={handleSubmit}>
            <div className="inquire-row">
              <label>
                <span className="mono">Name</span>
                <input type="text" name="name" placeholder="Your name" required />
              </label>
              <label>
                <span className="mono">Email</span>
                <input type="email" name="email" placeholder="you@example.com" required />
              </label>
            </div>
            <div className="inquire-row">
              <label>
                <span className="mono">Rough dates</span>
                <input type="text" name="dates" placeholder="E.g. first two weeks of June" />
              </label>
              <label>
                <span className="mono">Group size</span>
                <input type="text" name="group_size" placeholder="2 adults, 1 teenager" />
              </label>
            </div>
            <label className="inquire-full">
              <span className="mono">Tell me a little</span>
              <textarea name="message" rows={4} required
                placeholder="Even one sentence is enough. Somewhere you've seen a photo of, something you want to avoid, a food you love."
              />
            </label>
            
            {status === "error" && (
              <p style={{ color: '#ff6b6b', marginBottom: '1rem' }}>Oops! There was a problem submitting your form. Please try again or email me directly.</p>
            )}

            <div className="inquire-submit">
              <button type="submit" className="btn btn-dark" disabled={status === "submitting"}>
                <span>{status === "submitting" ? "Sending..." : "Send"}</span>
                <span className="btn-arr">→</span>
              </button>
              <span className="mono inquire-note">
                Or email me directly — <a href="mailto:arjes@arjes.al">arjes@arjes.al</a>
              </span>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
