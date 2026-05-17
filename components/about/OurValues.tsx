'use client';

import { useEffect } from 'react';

const values = [
  {
    number: '01',
    title: 'Strategic Integrity',
    body: 'We advise our clients as we would advise ourselves. No recommendation is made without rigorous due diligence, honest assessment, and a clear view of long-term consequences.',
  },
  {
    number: '02',
    title: 'Deep Local Intelligence',
    body: 'Our edge is context. Decades of on-the-ground presence means we understand regulatory nuance, cultural dynamics, and relationship networks that no remote advisor ever could.',
  },
  {
    number: '03',
    title: 'Execution Over Advice',
    body: 'Consulting that stays on paper is worthless. We embed ourselves in our clients\' operations, seeing every initiative through to measurable outcomes — not just the roadmap.',
  },
  {
    number: '04',
    title: 'Long-Term Partnership',
    body: 'We do not optimise for engagement length; we optimise for client success. Our relationships are built to last because our reputation depends on what our clients achieve.',
  },
  {
    number: '05',
    title: 'Excellence Without Exception',
    body: 'Every deliverable, every communication, every interaction carries the ARINTLS standard. We hold ourselves accountable to a level of quality that matches the ambitions of the institutions we serve.',
  },
  {
    number: '06',
    title: 'Global Mindset, Regional Mastery',
    body: 'We think in global frameworks but act with regional precision. This duality — being genuinely international while being genuinely local — is what sets us apart.',
  },
];

export default function OurValues() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('animate-in')),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.val-fade').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      style={{
        background: 'var(--cream)',
        padding: '120px 5%',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '80px' }}>
          <div
            className="val-fade"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '32px',
              opacity: 0,
              transform: 'translateY(24px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease',
            }}
          >
            <div style={{ width: '40px', height: '1px', background: 'var(--gold)' }} />
            <span style={{ fontFamily: 'var(--font-syne)', fontSize: '11px', letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase' }}>
              What We Stand For
            </span>
          </div>
          <h2
            className="val-fade"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(44px, 5vw, 72px)',
              fontWeight: 600,
              color: 'var(--ink)',
              lineHeight: 1.08,
              maxWidth: '600px',
              opacity: 0,
              transform: 'translateY(24px)',
              transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s',
            }}
          >
            Principles That{' '}
            <span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Never Waver</span>
          </h2>
        </div>

        {/* Values Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2px',
            background: 'rgba(197,160,85,0.15)',
          }}
        >
          {values.map((v, i) => (
            <div
              key={v.number}
              className="val-fade value-card"
              style={{
                background: 'var(--cream)',
                padding: '48px 40px',
                opacity: 0,
                transform: 'translateY(24px)',
                transition: `opacity 0.6s ease ${0.08 * i}s, transform 0.6s ease ${0.08 * i}s`,
                cursor: 'default',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: '56px',
                  fontWeight: 700,
                  color: 'rgba(197,160,85,0.15)',
                  lineHeight: 1,
                  marginBottom: '20px',
                }}
              >
                {v.number}
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-syne)',
                  fontSize: '15px',
                  fontWeight: 600,
                  color: 'var(--ink)',
                  letterSpacing: '0.04em',
                  marginBottom: '16px',
                }}
              >
                {v.title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-dm)',
                  fontSize: '14.5px',
                  lineHeight: 1.8,
                  color: 'rgba(15,15,25,0.6)',
                }}
              >
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .animate-in { opacity: 1 !important; transform: translateY(0) !important; }
        .value-card { transition: background 0.3s ease !important; }
        .value-card:hover { background: rgba(197,160,85,0.06) !important; }
        @media (max-width: 900px) {
          .val-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .val-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
