'use client';

import { useEffect } from 'react';

const team = [
  {
    initials: 'AK',
    name: 'Arif Khan',
    title: 'Founder & Managing Director',
    bio: 'With over two decades navigating international education markets across Asia, Arif established ARINTLS on the conviction that execution matters more than strategy alone. He has personally facilitated partnerships with over 30 universities across the UK, Australia, and North America.',
  },
  {
    initials: 'SR',
    name: 'Sana Raza',
    title: 'Director, Education Practice',
    bio: 'Sana leads our higher education division, overseeing student recruitment pipelines, institutional compliance, and regional market development. Her network spans admissions offices across three continents.',
  },
  {
    initials: 'TM',
    name: 'Tariq Mahmood',
    title: 'Director, Business Implementation',
    bio: 'Tariq brings 15 years of corporate advisory experience, specialising in regulatory market entry, joint ventures, and commercial partnership structuring for multinationals entering South Asian markets.',
  },
  {
    initials: 'NI',
    name: 'Nadia Iqbal',
    title: 'Head of Client Relations',
    bio: 'Nadia is the connective tissue between ARINTLS and our clients — ensuring that every engagement begins with clarity, proceeds with precision, and concludes with outcomes that exceed expectations.',
  },
];

export default function LeadershipTeam() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('animate-in')),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.team-fade').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      style={{
        background: '#0f0f19',
        padding: '120px 5%',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background accent */}
      <div
        style={{
          position: 'absolute',
          left: '-300px',
          bottom: '-200px',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(197,160,85,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1300px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '80px', flexWrap: 'wrap', gap: '32px' }}>
          <div>
            <div
              className="team-fade"
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
                Leadership
              </span>
            </div>
            <h2
              className="team-fade"
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
              The People Behind{' '}
              <span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>ARINTLS</span>
            </h2>
          </div>
          <p
            className="team-fade"
            style={{
              fontFamily: 'var(--font-dm)',
              fontSize: '15px',
              lineHeight: 1.8,
              color: 'rgba(240,232,215,0.5)',
              maxWidth: '360px',
              opacity: 0,
              transform: 'translateY(24px)',
              transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s',
            }}
          >
            A small, senior team with disproportionate impact — each member carrying deep domain expertise and personal accountability for every client outcome.
          </p>
        </div>

        {/* Team Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
          }}
        >
          {team.map((member, i) => (
            <div
              key={member.name}
              className="team-fade team-card"
              style={{
                border: '1px solid rgba(197,160,85,0.15)',
                padding: '40px 32px',
                opacity: 0,
                transform: 'translateY(24px)',
                transition: `opacity 0.6s ease ${0.1 * i}s, transform 0.6s ease ${0.1 * i}s`,
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Top accent line */}
              <div
                className="card-accent"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: 'var(--gold)',
                  transform: 'scaleX(0)',
                  transformOrigin: 'left',
                  transition: 'transform 0.4s ease',
                }}
              />

              {/* Avatar */}
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  border: '1px solid rgba(197,160,85,0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '28px',
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: '22px',
                  fontWeight: 600,
                  color: 'var(--gold)',
                  background: 'rgba(197,160,85,0.06)',
                }}
              >
                {member.initials}
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-syne)',
                  fontSize: '16px',
                  fontWeight: 600,
                  color: 'var(--cream)',
                  marginBottom: '6px',
                  letterSpacing: '0.02em',
                }}
              >
                {member.name}
              </h3>
              <div
                style={{
                  fontFamily: 'var(--font-syne)',
                  fontSize: '10px',
                  letterSpacing: '0.18em',
                  color: 'var(--gold)',
                  textTransform: 'uppercase',
                  marginBottom: '20px',
                }}
              >
                {member.title}
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-dm)',
                  fontSize: '14px',
                  lineHeight: 1.8,
                  color: 'rgba(240,232,215,0.5)',
                }}
              >
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .animate-in { opacity: 1 !important; transform: translateY(0) !important; }
        .team-card:hover .card-accent { transform: scaleX(1) !important; }
        .team-card { transition: border-color 0.3s ease !important; }
        .team-card:hover { border-color: rgba(197,160,85,0.35) !important; }
        @media (max-width: 900px) {
          .team-card { /* handled inline */ }
        }
      `}</style>
    </section>
  );
}
