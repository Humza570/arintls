'use client';

import { useEffect } from 'react';

const steps = [
  { num: '01', title: 'Discovery', body: 'We begin every engagement with a rigorous discovery phase — understanding your institution or business, your objectives, your constraints, and what success truly looks like.' },
  { num: '02', title: 'Intelligence', body: 'Before any strategy is set, we conduct primary and secondary market research — delivering analysis that is specific, actionable, and honest, even when the findings are uncomfortable.' },
  { num: '03', title: 'Strategy', body: 'We develop a tailored market entry strategy with clear milestones, resource requirements, risk mitigation, and decision-points — no generic templates, no copy-paste consulting.' },
  { num: '04', title: 'Execution', body: 'Our teams take full ownership of implementation. We do not hand over a document and walk away — we stay embedded until the strategy is operational and performing.' },
  { num: '05', title: 'Optimisation', body: 'Markets change. We continuously monitor performance, adjust tactics, and provide transparent reporting so you always know where you stand and where we are heading.' },
];

export default function HowWeWork() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('animate-in')),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.hw-fade').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section style={{ background: 'var(--cream)', padding: '120px 5%' }}>
      <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '80px', alignItems: 'start' }}>
          {/* Left sticky header */}
          <div style={{ position: 'sticky', top: '120px' }}>
            <div className="hw-fade" style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px', opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}>
              <div style={{ width: '40px', height: '1px', background: 'var(--gold)' }} />
              <span style={{ fontFamily: 'var(--font-syne)', fontSize: '11px', letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase' }}>Our Process</span>
            </div>
            <h2 className="hw-fade" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(40px, 4vw, 60px)', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.1, marginBottom: '24px', opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s' }}>
              How We<br /><span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Work</span>
            </h2>
            <p className="hw-fade" style={{ fontFamily: 'var(--font-dm)', fontSize: '15px', lineHeight: 1.8, color: 'rgba(15,15,25,0.55)', opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s' }}>
              A disciplined, five-phase engagement model that ensures every client receives the same standard of rigour, transparency, and follow-through.
            </p>
          </div>

          {/* Right steps */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {steps.map((step, i) => (
              <div key={step.num} className="hw-fade" style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '32px', padding: '48px 0', borderBottom: i < steps.length - 1 ? '1px solid rgba(197,160,85,0.2)' : 'none', opacity: 0, transform: 'translateY(24px)', transition: `opacity 0.6s ease ${0.1 * i}s, transform 0.6s ease ${0.1 * i}s` }}>
                <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: '40px', fontWeight: 700, color: 'rgba(197,160,85,0.35)', lineHeight: 1, paddingTop: '4px' }}>{step.num}</div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-syne)', fontSize: '18px', fontWeight: 600, color: 'var(--ink)', marginBottom: '14px', letterSpacing: '0.02em' }}>{step.title}</h3>
                  <p style={{ fontFamily: 'var(--font-dm)', fontSize: '15px', lineHeight: 1.85, color: 'rgba(15,15,25,0.58)' }}>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`.animate-in { opacity: 1 !important; transform: translateY(0) !important; }`}</style>
    </section>
  );
}
