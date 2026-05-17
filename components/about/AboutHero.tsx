'use client';

import { useEffect, useRef } from 'react';

export default function AboutHero() {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        background: 'var(--ink)',
        overflow: 'hidden',
        paddingTop: '120px',
      }}
    >
      {/* Background texture */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            radial-gradient(ellipse 80% 60% at 60% 40%, rgba(197,160,85,0.07) 0%, transparent 70%),
            radial-gradient(ellipse 40% 40% at 10% 80%, rgba(197,160,85,0.05) 0%, transparent 60%)
          `,
        }}
      />

      {/* Decorative vertical line */}
      <div
        style={{
          position: 'absolute',
          left: '8%',
          top: 0,
          bottom: 0,
          width: '1px',
          background: 'linear-gradient(to bottom, transparent, rgba(197,160,85,0.3), transparent)',
        }}
      />

      {/* Large background text */}
      <div
        style={{
          position: 'absolute',
          right: '-2%',
          top: '50%',
          transform: 'translateY(-50%)',
          fontFamily: 'var(--font-cormorant)',
          fontSize: 'clamp(120px, 18vw, 260px)',
          fontWeight: 700,
          color: 'rgba(197,160,85,0.04)',
          lineHeight: 1,
          userSelect: 'none',
          letterSpacing: '-0.02em',
        }}
      >
        WHO
      </div>

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1300px',
          margin: '0 auto',
          padding: '80px 5%',
          width: '100%',
        }}
      >
        {/* Eyebrow */}
        <div
          className="fade-up"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '40px',
            opacity: 0,
            transform: 'translateY(30px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <div style={{ width: '40px', height: '1px', background: 'var(--gold)' }} />
          <span
            style={{
              fontFamily: 'var(--font-syne)',
              fontSize: '11px',
              letterSpacing: '0.25em',
              color: 'var(--gold)',
              textTransform: 'uppercase',
            }}
          >
            About ARINTLS
          </span>
        </div>

        {/* Headline */}
        <h1
          className="fade-up"
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(52px, 7vw, 96px)',
            fontWeight: 600,
            color: 'var(--cream)',
            lineHeight: 1.05,
            maxWidth: '800px',
            marginBottom: '40px',
            opacity: 0,
            transform: 'translateY(30px)',
            transition: 'opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s',
          }}
        >
          Where Global{' '}
          <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Strategy</span>
          {' '}Meets Local{' '}
          <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Mastery</span>
        </h1>

        {/* Sub paragraph */}
        <p
          className="fade-up"
          style={{
            fontFamily: 'var(--font-dm)',
            fontSize: '17px',
            lineHeight: 1.8,
            color: 'rgba(240,232,215,0.65)',
            maxWidth: '580px',
            marginBottom: '60px',
            opacity: 0,
            transform: 'translateY(30px)',
            transition: 'opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s',
          }}
        >
          ARINTLS is a premier international consultancy bridging world-class institutions and global enterprises with the high-growth markets of South and Southeast Asia. We do not merely advise — we implement, embed, and deliver.
        </p>

        {/* Stat row */}
        <div
          className="fade-up"
          style={{
            display: 'flex',
            gap: '48px',
            flexWrap: 'wrap',
            opacity: 0,
            transform: 'translateY(30px)',
            transition: 'opacity 0.7s ease 0.45s, transform 0.7s ease 0.45s',
          }}
        >
          {[
            { num: '12+', label: 'Years of Practice' },
            { num: '40+', label: 'Partner Institutions' },
            { num: '6', label: 'Markets Covered' },
          ].map((stat) => (
            <div key={stat.num} style={{ borderLeft: '1px solid rgba(197,160,85,0.3)', paddingLeft: '24px' }}>
              <div
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: '48px',
                  fontWeight: 700,
                  color: 'var(--gold)',
                  lineHeight: 1,
                  marginBottom: '6px',
                }}
              >
                {stat.num}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-syne)',
                  fontSize: '11px',
                  letterSpacing: '0.15em',
                  color: 'rgba(240,232,215,0.5)',
                  textTransform: 'uppercase',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .animate-in { opacity: 1 !important; transform: translateY(0) !important; }
      `}</style>
    </section>
  );
}
