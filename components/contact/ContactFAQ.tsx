'use client';
import { useEffect, useState } from 'react';

const faqs = [
  { q: 'How long does a typical market entry engagement take?', a: 'It depends on scope. A feasibility study and strategy phase typically takes 6–10 weeks. Full market entry implementation — including legal setup, partner identification, and first operational milestones — generally runs 6–12 months. We provide a detailed timeline at the outset of every engagement.' },
  { q: 'Do you work with institutions outside the UK and Australia?', a: 'Absolutely. While UK and Australian universities make up the largest portion of our education portfolio, we work with institutions across North America, Europe, the Middle East, and Southeast Asia. Our criteria for partnership is institutional quality and student outcomes, not geography.' },
  { q: 'What is the minimum engagement size you work with?', a: 'We do not have a hard minimum, but our model works best for organisations serious about long-term market presence. We are not the right fit for one-off projects or exploratory visits with no commitment to follow-through.' },
  { q: 'Can you assist with regulatory compliance if we are already operating in Pakistan?', a: 'Yes. Ongoing compliance support is a core part of our retained advisory service. Many clients engage us after initial market entry to manage the evolving regulatory landscape, renew licensing, and navigate new requirements.' },
  { q: 'How is ARINTLS different from other international education consultancies?', a: 'Three things set us apart: depth of local knowledge accumulated over a decade on the ground; a commitment to execution rather than advisory alone; and the dual capability to serve both educational institutions and corporate clients — which gives us a uniquely broad view of the markets we serve.' },
];

export default function ContactFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver((e) => e.forEach((x) => x.isIntersecting && x.target.classList.add('animate-in')), { threshold: 0.08 });
    document.querySelectorAll('.faq-fade').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section style={{ background: 'var(--cream)', padding: '120px 5%' }}>
      <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '80px', alignItems: 'start' }}>
          {/* Left */}
          <div style={{ position: 'sticky', top: '120px' }}>
            <div className="faq-fade" style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px', opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}>
              <div style={{ width: '40px', height: '1px', background: 'var(--gold)' }} />
              <span style={{ fontFamily: 'var(--font-syne)', fontSize: '11px', letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase' }}>FAQ</span>
            </div>
            <h2 className="faq-fade" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.1, marginBottom: '20px', opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s' }}>
              Common<br /><span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Questions</span>
            </h2>
            <p className="faq-fade" style={{ fontFamily: 'var(--font-dm)', fontSize: '15px', lineHeight: 1.8, color: 'rgba(15,15,25,0.55)', opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s' }}>
              If your question is not covered here, please reach out directly — we respond to all enquiries within one business day.
            </p>
          </div>

          {/* Right - accordion */}
          <div className="faq-fade" style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderBottom: '1px solid rgba(197,160,85,0.2)' }}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '28px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: '24px' }}
                >
                  <span style={{ fontFamily: 'var(--font-syne)', fontSize: '14px', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.4, letterSpacing: '0.02em' }}>{faq.q}</span>
                  <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: '28px', color: 'var(--gold)', lineHeight: 1, flexShrink: 0, transition: 'transform 0.3s ease', transform: open === i ? 'rotate(45deg)' : 'rotate(0)' }}>+</span>
                </button>
                <div style={{ maxHeight: open === i ? '300px' : '0', overflow: 'hidden', transition: 'max-height 0.4s ease' }}>
                  <p style={{ fontFamily: 'var(--font-dm)', fontSize: '15px', lineHeight: 1.85, color: 'rgba(15,15,25,0.6)', paddingBottom: '28px' }}>{faq.a}</p>
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
