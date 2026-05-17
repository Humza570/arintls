'use client';
import { useEffect } from 'react';

const corporateClients = [
  { name: 'Sector: Technology', desc: 'Market entry strategy and local partnership structuring for a European SaaS company entering the Pakistani enterprise market.' },
  { name: 'Sector: Healthcare', desc: 'Regulatory navigation and distribution partner identification for a multinational pharmaceutical company.' },
  { name: 'Sector: Financial Services', desc: 'Compliance mapping and government relations for a fintech company seeking a PSP licence in Pakistan.' },
  { name: 'Sector: FMCG', desc: 'Full market entry implementation including legal entity, channel partner network, and initial retail distribution.' },
  { name: 'Sector: EdTech', desc: 'Pakistan market entry for an international online learning platform — regulatory compliance, local partnerships, and marketing localisation.' },
  { name: 'Sector: Logistics', desc: 'Joint venture facilitation and operational setup for a regional logistics company expanding into South Asia.' },
];

const testimonials = [
  { quote: 'ARINTLS did not just advise us — they became part of our team. Their ability to navigate the regulatory landscape while building genuine commercial relationships was extraordinary. We would not have achieved our Pakistan market presence without them.', name: 'Director of International Operations', company: 'European Technology Company' },
  { quote: 'Within eight months of engaging ARINTLS, we had established a legal entity, secured two distribution partners, and enrolled our first cohort of Pakistani students. The speed and quality of execution was unlike anything we had experienced with other consultants.', name: 'Head of Global Partnerships', company: 'UK University' },
  { quote: 'The intelligence ARINTLS provided before we committed to market entry genuinely changed our strategy in ways that saved us significant capital. Their honesty, even when the picture was not what we wanted to hear, is what sets them apart.', name: 'CEO', company: 'Regional Healthcare Group' },
];

export default function CorporateClients() {
  useEffect(() => {
    const obs = new IntersectionObserver((e) => e.forEach((x) => x.isIntersecting && x.target.classList.add('animate-in')), { threshold: 0.08 });
    document.querySelectorAll('.cc-fade').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* Corporate Clients */}
      <section style={{ background: '#0f0f19', padding: '120px 5%', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `radial-gradient(ellipse 50% 60% at 20% 40%, rgba(197,160,85,0.05) 0%, transparent 70%)`, pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1300px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '72px', flexWrap: 'wrap', gap: '32px' }}>
            <div>
              <div className="cc-fade" style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px', opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}>
                <div style={{ width: '40px', height: '1px', background: 'var(--gold)' }} />
                <span style={{ fontFamily: 'var(--font-syne)', fontSize: '11px', letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase' }}>Corporate Clients</span>
              </div>
              <h2 className="cc-fade" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 600, color: 'var(--cream)', lineHeight: 1.08, opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s' }}>
                Businesses We Have<br /><span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Taken to Market</span>
              </h2>
            </div>
            <p className="cc-fade" style={{ fontFamily: 'var(--font-dm)', fontSize: '15px', lineHeight: 1.8, color: 'rgba(240,232,215,0.5)', maxWidth: '380px', opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s' }}>
              Select engagements from our corporate practice — shared without identifying details to protect client confidentiality.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'rgba(197,160,85,0.12)' }}>
            {corporateClients.map((c, i) => (
              <div key={c.name} className="cc-fade" style={{ background: '#0f0f19', padding: '40px 32px', opacity: 0, transform: 'translateY(20px)', transition: `opacity 0.5s ease ${0.08 * i}s, transform 0.5s ease ${0.08 * i}s` }}>
                <div style={{ fontFamily: 'var(--font-syne)', fontSize: '10px', letterSpacing: '0.22em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '16px' }}>{c.name}</div>
                <p style={{ fontFamily: 'var(--font-dm)', fontSize: '14px', lineHeight: 1.8, color: 'rgba(240,232,215,0.5)' }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ background: 'var(--ink)', padding: '120px 5%', borderTop: '1px solid rgba(197,160,85,0.1)' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
          <div className="cc-fade" style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px', opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}>
            <div style={{ width: '40px', height: '1px', background: 'var(--gold)' }} />
            <span style={{ fontFamily: 'var(--font-syne)', fontSize: '11px', letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase' }}>Client Voices</span>
          </div>
          <h2 className="cc-fade" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 600, color: 'var(--cream)', lineHeight: 1.08, marginBottom: '72px', opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s' }}>
            What Our Clients<br /><span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Say</span>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            {testimonials.map((t, i) => (
              <div key={i} className="cc-fade" style={{ border: '1px solid rgba(197,160,85,0.15)', padding: '48px 36px', position: 'relative', opacity: 0, transform: 'translateY(24px)', transition: `opacity 0.6s ease ${0.12 * i}s, transform 0.6s ease ${0.12 * i}s` }}>
                <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: '80px', color: 'rgba(197,160,85,0.15)', lineHeight: 0.6, marginBottom: '24px', userSelect: 'none' }}>"</div>
                <p style={{ fontFamily: 'var(--font-dm)', fontSize: '15px', lineHeight: 1.85, color: 'rgba(240,232,215,0.65)', marginBottom: '36px', fontStyle: 'italic' }}>{t.quote}</p>
                <div style={{ borderTop: '1px solid rgba(197,160,85,0.2)', paddingTop: '24px' }}>
                  <div style={{ fontFamily: 'var(--font-syne)', fontSize: '13px', fontWeight: 600, color: 'var(--cream)', marginBottom: '4px' }}>{t.name}</div>
                  <div style={{ fontFamily: 'var(--font-dm)', fontSize: '12px', color: 'var(--gold)' }}>{t.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`.animate-in { opacity: 1 !important; transform: translateY(0) !important; }`}</style>
      </section>
    </>
  );
}
