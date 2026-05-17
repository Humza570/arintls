'use client';
import { useEffect, useState } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver((e) => e.forEach((x) => x.isIntersecting && x.target.classList.add('animate-in')), { threshold: 0.1 });
    document.querySelectorAll('.nl-fade').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section style={{ background: 'var(--ink)', padding: '100px 5%', position: 'relative', overflow: 'hidden', borderTop: '1px solid rgba(197,160,85,0.1)' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `radial-gradient(ellipse 60% 80% at 50% 50%, rgba(197,160,85,0.06) 0%, transparent 70%)`, pointerEvents: 'none' }} />

      <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div className="nl-fade" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '32px', opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}>
          <div style={{ width: '40px', height: '1px', background: 'var(--gold)' }} />
          <span style={{ fontFamily: 'var(--font-syne)', fontSize: '11px', letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase' }}>Stay Informed</span>
          <div style={{ width: '40px', height: '1px', background: 'var(--gold)' }} />
        </div>
        <h2 className="nl-fade" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 600, color: 'var(--cream)', lineHeight: 1.1, marginBottom: '20px', opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s' }}>
          Market Intelligence,{' '}<span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Delivered</span>
        </h2>
        <p className="nl-fade" style={{ fontFamily: 'var(--font-dm)', fontSize: '16px', lineHeight: 1.8, color: 'rgba(240,232,215,0.55)', marginBottom: '48px', opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s' }}>
          Receive our monthly briefing on South Asian education markets and business entry opportunities — no filler, no padding, just intelligence that matters.
        </p>

        {!submitted ? (
          <div className="nl-fade" style={{ display: 'flex', gap: '0', maxWidth: '480px', margin: '0 auto', opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s' }}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              style={{ flex: 1, padding: '16px 24px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(197,160,85,0.3)', borderRight: 'none', color: 'var(--cream)', fontFamily: 'var(--font-dm)', fontSize: '14px', outline: 'none' }}
            />
            <button
              onClick={() => email && setSubmitted(true)}
              style={{ padding: '16px 28px', background: 'var(--gold)', border: 'none', color: 'var(--ink)', fontFamily: 'var(--font-syne)', fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', cursor: 'pointer', fontWeight: 600, whiteSpace: 'nowrap' }}
            >
              Subscribe
            </button>
          </div>
        ) : (
          <div className="nl-fade" style={{ padding: '20px 32px', border: '1px solid rgba(197,160,85,0.3)', display: 'inline-block', opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.5s ease, transform 0.5s ease' }}>
            <span style={{ fontFamily: 'var(--font-syne)', fontSize: '13px', letterSpacing: '0.12em', color: 'var(--gold)' }}>Thank you — you will receive your first briefing shortly.</span>
          </div>
        )}
      </div>
      <style>{`.animate-in { opacity: 1 !important; transform: translateY(0) !important; }`}</style>
    </section>
  );
}
