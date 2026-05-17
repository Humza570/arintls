'use client';
import { useEffect } from 'react';

export default function ContactHero() {
  useEffect(() => {
    const obs = new IntersectionObserver((e) => e.forEach((x) => x.isIntersecting && x.target.classList.add('animate-in')), { threshold: 0.1 });
    document.querySelectorAll('.cth-fade').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section style={{ position: 'relative', minHeight: '60vh', display: 'flex', alignItems: 'center', background: 'var(--ink)', overflow: 'hidden', paddingTop: '120px' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `radial-gradient(ellipse 70% 60% at 40% 60%, rgba(197,160,85,0.08) 0%, transparent 70%)` }} />
      <div style={{ position: 'absolute', right: '-2%', top: '50%', transform: 'translateY(-50%)', fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(100px, 15vw, 200px)', fontWeight: 700, color: 'rgba(197,160,85,0.04)', lineHeight: 1, userSelect: 'none' }}>CONNECT</div>

      <div style={{ position: 'relative', zIndex: 2, maxWidth: '1300px', margin: '0 auto', padding: '80px 5%', width: '100%' }}>
        <div className="cth-fade" style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '40px', opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}>
          <div style={{ width: '40px', height: '1px', background: 'var(--gold)' }} />
          <span style={{ fontFamily: 'var(--font-syne)', fontSize: '11px', letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase' }}>Get In Touch</span>
        </div>
        <h1 className="cth-fade" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(52px, 7vw, 96px)', fontWeight: 600, color: 'var(--cream)', lineHeight: 1.05, maxWidth: '800px', marginBottom: '36px', opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s' }}>
          Let's Begin a{' '}<span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Conversation</span>
        </h1>
        <p className="cth-fade" style={{ fontFamily: 'var(--font-dm)', fontSize: '17px', lineHeight: 1.8, color: 'rgba(240,232,215,0.6)', maxWidth: '540px', opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s' }}>
          Whether you are exploring a market entry, seeking a strategic partner, or simply want to understand what ARINTLS can do for your organisation — we are here.
        </p>
      </div>
      <style>{`.animate-in { opacity: 1 !important; transform: translateY(0) !important; }`}</style>
    </section>
  );
}
