'use client';

import { useEffect } from 'react';

const milestones = [
  {
    year: '2012',
    title: 'The Founding Vision',
    body: 'ARINTLS was born from a simple frustration: world-class institutions and global enterprises lacked a trusted, on-the-ground partner to navigate South Asian markets with credibility and precision.',
  },
  {
    year: '2015',
    title: 'Education Market Entry',
    body: 'We formalised our higher education practice, becoming the region\'s first consultancy to offer full-cycle university market entry — from regulatory licensing to on-campus recruitment drives.',
  },
  {
    year: '2018',
    title: 'Business Implementation Practice',
    body: 'Expanded into corporate market entry, helping multinational companies establish presence, navigate compliance, and build commercial partnerships across Pakistan and beyond.',
  },
  {
    year: '2022',
    title: 'Regional Scale',
    body: 'With offices in Lahore and Karachi and partner networks in Southeast Asia, ARINTLS now serves institutions and corporations across six high-growth markets.',
  },
  {
    year: 'Today',
    title: 'Accelerating the Future',
    body: 'Over 40 partner institutions, thousands of student placements, and dozens of successful market entries later — we continue to set the standard for what international consultancy should look like.',
  },
];

export default function OurStory() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('animate-in')),
      { threshold: 0.15 }
    );
    document.querySelectorAll('.story-fade').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      style={{
        background: 'var(--ink)',
        padding: '120px 5%',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle grid pattern */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `linear-gradient(rgba(197,160,85,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(197,160,85,0.03) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1300px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', marginBottom: '100px', alignItems: 'end' }}>
          <div>
            <div
              className="story-fade"
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
                Our Story
              </span>
            </div>
            <h2
              className="story-fade"
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(44px, 5vw, 72px)',
                fontWeight: 600,
                color: 'var(--cream)',
                lineHeight: 1.08,
                opacity: 0,
                transform: 'translateY(24px)',
                transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s',
              }}
            >
              A Decade of Building{' '}
              <span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Bridges</span>
            </h2>
          </div>
          <p
            className="story-fade"
            style={{
              fontFamily: 'var(--font-dm)',
              fontSize: '16px',
              lineHeight: 1.85,
              color: 'rgba(240,232,215,0.6)',
              opacity: 0,
              transform: 'translateY(24px)',
              transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s',
              alignSelf: 'end',
            }}
          >
            Our journey is one of relentless commitment to a single idea: that international expansion, done right, changes lives — for students, for businesses, and for the communities they enter.
          </p>
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <div
            style={{
              position: 'absolute',
              left: '120px',
              top: 0,
              bottom: 0,
              width: '1px',
              background: 'linear-gradient(to bottom, rgba(197,160,85,0.5), rgba(197,160,85,0.1))',
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {milestones.map((m, i) => (
              <div
                key={m.year}
                className="story-fade"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '120px 1fr',
                  gap: '60px',
                  paddingBottom: i < milestones.length - 1 ? '64px' : 0,
                  opacity: 0,
                  transform: 'translateY(24px)',
                  transition: `opacity 0.7s ease ${0.1 * i}s, transform 0.7s ease ${0.1 * i}s`,
                }}
              >
                {/* Year */}
                <div style={{ textAlign: 'right', paddingTop: '4px', position: 'relative' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-cormorant)',
                      fontSize: '22px',
                      fontWeight: 700,
                      color: 'var(--gold)',
                    }}
                  >
                    {m.year}
                  </span>
                  {/* Dot */}
                  <div
                    style={{
                      position: 'absolute',
                      right: '-8px',
                      top: '12px',
                      width: '7px',
                      height: '7px',
                      borderRadius: '50%',
                      background: 'var(--gold)',
                      transform: 'translateX(50%)',
                      boxShadow: '0 0 12px rgba(197,160,85,0.5)',
                    }}
                  />
                </div>

                {/* Content */}
                <div style={{ paddingLeft: '40px' }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-syne)',
                      fontSize: '16px',
                      fontWeight: 600,
                      color: 'var(--cream)',
                      marginBottom: '12px',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {m.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-dm)',
                      fontSize: '15px',
                      lineHeight: 1.8,
                      color: 'rgba(240,232,215,0.55)',
                    }}
                  >
                    {m.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .animate-in { opacity: 1 !important; transform: translateY(0) !important; }
        @media (max-width: 768px) {
          .story-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
