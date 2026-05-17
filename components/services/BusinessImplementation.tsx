'use client';

import { useEffect } from 'react';

const businessServices = [
  { num: '01', title: 'Market Intelligence & Opportunity Assessment', body: 'Rigorous, primary-research-driven analysis of market size, competitor landscape, regulatory environment, and consumer behaviour — giving leadership the confidence to commit.' },
  { num: '02', title: 'Legal Entity Setup & Regulatory Navigation', body: 'Company incorporation, sector-specific licensing, SECP registration, BOI facilitation, and all regulatory touchpoints — handled end-to-end by a team that knows the system.' },
  { num: '03', title: 'Commercial Partnership & Distribution', body: 'We identify, evaluate, and structure relationships with local distributors, agents, resellers, and joint-venture partners — ensuring alignment, accountability, and long-term value.' },
  { num: '04', title: 'Government & Institutional Relations', body: 'High-stakes market entries require high-level relationships. We facilitate introductions and ongoing engagement with ministries, regulatory bodies, and strategic institutions.' },
  { num: '05', title: 'Talent Acquisition & HR Setup', body: 'From executive search to labour law compliance and payroll setup — we help you build and formalise the local team your operation needs from day one.' },
  { num: '06', title: 'Ongoing Market Management', body: 'Market entry is not a single event. We provide retained advisory and operational support to help you adapt, grow, and defend your position as markets evolve.' },
];

export default function BusinessImplementation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('animate-in')),
      { threshold: 0.08 }
    );
    document.querySelectorAll('.bi-fade').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section style={{ background: '#0f0f19', padding: '120px 5%', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `radial-gradient(ellipse 60% 50% at 80% 60%, rgba(197,160,85,0.06) 0%, transparent 70%)`, pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1300px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '80px', marginBottom: '80px', alignItems: 'end' }}>
          <div>
            <div className="bi-fade" style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px', opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}>
              <div style={{ width: '40px', height: '1px', background: 'var(--gold)' }} />
              <span style={{ fontFamily: 'var(--font-syne)', fontSize: '11px', letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase' }}>Practice Area 02</span>
            </div>
            <h2 className="bi-fade" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(40px, 5vw, 68px)', fontWeight: 600, color: 'var(--cream)', lineHeight: 1.08, opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s' }}>
              Business<br /><span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Implementation</span>
            </h2>
          </div>
          <p className="bi-fade" style={{ fontFamily: 'var(--font-dm)', fontSize: '16px', lineHeight: 1.85, color: 'rgba(240,232,215,0.55)', alignSelf: 'end', opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s' }}>
            For international corporations ready to establish or scale operations in Pakistan and South Asia, we provide the full operational infrastructure of market entry — from legal setup and regulatory compliance through to commercial partnerships and team building.
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'rgba(197,160,85,0.12)' }}>
          {businessServices.map((s, i) => (
            <div key={s.num} className="bi-fade bi-card" style={{ background: '#0f0f19', padding: '44px 36px', opacity: 0, transform: 'translateY(24px)', transition: `opacity 0.6s ease ${0.07 * i}s, transform 0.6s ease ${0.07 * i}s`, position: 'relative', overflow: 'hidden', borderLeft: '1px solid rgba(197,160,85,0.08)' }}>
              <div className="bi-bar" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'var(--gold)', transform: 'scaleX(0)', transformOrigin: 'left', transition: 'transform 0.4s ease' }} />
              <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: '48px', fontWeight: 700, color: 'rgba(197,160,85,0.12)', lineHeight: 1, marginBottom: '20px' }}>{s.num}</div>
              <h3 style={{ fontFamily: 'var(--font-syne)', fontSize: '14px', fontWeight: 600, color: 'var(--cream)', letterSpacing: '0.04em', marginBottom: '14px', lineHeight: 1.4 }}>{s.title}</h3>
              <p style={{ fontFamily: 'var(--font-dm)', fontSize: '14px', lineHeight: 1.8, color: 'rgba(240,232,215,0.45)' }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`.animate-in { opacity: 1 !important; transform: translateY(0) !important; } .bi-card:hover .bi-bar { transform: scaleX(1) !important; }`}</style>
    </section>
  );
}
