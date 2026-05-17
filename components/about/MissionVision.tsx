'use client';

import { useEffect } from 'react';

export default function MissionVision() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('animate-in')),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.mv-fade').forEach((el) => observer.observe(el));
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
      {/* Decorative circle */}
      <div
        style={{
          position: 'absolute',
          right: '-200px',
          top: '-200px',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          border: '1px solid rgba(197,160,85,0.12)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          right: '-120px',
          top: '-120px',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          border: '1px solid rgba(197,160,85,0.18)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
        {/* Section label */}
        <div
          className="mv-fade"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '72px',
            opacity: 0,
            transform: 'translateY(24px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
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
            Our Foundation
          </span>
        </div>

        {/* Two column: Mission + Vision */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'start',
          }}
        >
          {/* Mission */}
          <div
            className="mv-fade"
            style={{
              opacity: 0,
              transform: 'translateY(24px)',
              transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-syne)',
                fontSize: '10px',
                letterSpacing: '0.3em',
                color: 'var(--gold)',
                textTransform: 'uppercase',
                marginBottom: '20px',
              }}
            >
              01 — Mission
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(36px, 4vw, 52px)',
                fontWeight: 600,
                color: 'var(--ink)',
                lineHeight: 1.1,
                marginBottom: '28px',
              }}
            >
              To make the world's best{' '}
              <span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>opportunities</span>{' '}
              accessible — and actionable.
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-dm)',
                fontSize: '16px',
                lineHeight: 1.85,
                color: 'rgba(15,15,25,0.65)',
              }}
            >
              We exist to remove the friction between global ambition and local reality. Whether it is a university seeking students across borders or a corporation penetrating a new economy, ARINTLS provides the intelligence, relationships, and execution capacity to make it happen — reliably and at scale.
            </p>
          </div>

          {/* Vision */}
          <div
            className="mv-fade"
            style={{
              opacity: 0,
              transform: 'translateY(24px)',
              transition: 'opacity 0.7s ease 0.25s, transform 0.7s ease 0.25s',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-syne)',
                fontSize: '10px',
                letterSpacing: '0.3em',
                color: 'var(--gold)',
                textTransform: 'uppercase',
                marginBottom: '20px',
              }}
            >
              02 — Vision
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(36px, 4vw, 52px)',
                fontWeight: 600,
                color: 'var(--ink)',
                lineHeight: 1.1,
                marginBottom: '28px',
              }}
            >
              The defining bridge between East and West in the{' '}
              <span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>knowledge economy</span>.
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-dm)',
                fontSize: '16px',
                lineHeight: 1.85,
                color: 'rgba(15,15,25,0.65)',
              }}
            >
              We envision a future where geography is never a barrier to institutional growth or business success. ARINTLS will be recognised as the premier partner for any organisation that takes international market entry seriously — not as an experiment, but as a strategic imperative.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            margin: '100px 0 0',
            height: '1px',
            background: 'linear-gradient(to right, transparent, rgba(197,160,85,0.3), transparent)',
          }}
        />
      </div>

      <style>{`
        @media (max-width: 768px) {
          .mv-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
        .animate-in { opacity: 1 !important; transform: translateY(0) !important; }
      `}</style>
    </section>
  );
}
