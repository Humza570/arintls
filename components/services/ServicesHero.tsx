'use client';

import { useEffect } from 'react';

export default function ServicesHero() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('animate-in')),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.sh-fade').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        background: 'var(--ink)',
        overflow: 'hidden',
        paddingTop: '120px',
      }}
    >
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `radial-gradient(ellipse 70% 60% at 70% 50%, rgba(197,160,85,0.08) 0%, transparent 70%)`,
      }} />
      <div style={{
        position: 'absolute', right: '-2%', top: '50%', transform: 'translateY(-50%)',
        fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(100px, 16vw, 240px)',
        fontWeight: 700, color: 'rgba(197,160,85,0.04)', lineHeight: 1, userSelect: 'none',
      }}>SERVE</div>

      <div style={{ position: 'relative', zIndex: 2, maxWidth: '1300px', margin: '0 auto', padding: '80px 5%', width: '100%' }}>
        <div className="sh-fade" style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '40px', opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}>
          <div style={{ width: '40px', height: '1px', background: 'var(--gold)' }} />
          <span style={{ fontFamily: 'var(--font-syne)', fontSize: '11px', letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase' }}>What We Do</span>
        </div>
        <h1 className="sh-fade" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(52px, 7vw, 96px)', fontWeight: 600, color: 'var(--cream)', lineHeight: 1.05, maxWidth: '820px', marginBottom: '36px', opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s' }}>
          Services Engineered for{' '}<span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Real-World</span>{' '}Market Entry
        </h1>
        <p className="sh-fade" style={{ fontFamily: 'var(--font-dm)', fontSize: '17px', lineHeight: 1.8, color: 'rgba(240,232,215,0.6)', maxWidth: '580px', opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s' }}>
          Two distinct practice areas, one unified methodology. Whether you are an institution expanding student reach or an enterprise entering a new economy, ARINTLS provides the full spectrum of support — from intelligence to implementation.
        </p>
      </div>
      <style>{`.animate-in { opacity: 1 !important; transform: translateY(0) !important; }`}</style>
    </section>
  );
}
