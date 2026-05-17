'use client';
import { useEffect } from 'react';

const universities = [
  { name: 'University of Hertfordshire', country: 'United Kingdom', focus: 'Business, Engineering, Health Sciences', since: '2016' },
  { name: 'Coventry University', country: 'United Kingdom', focus: 'Engineering, Computing, Business', since: '2015' },
  { name: 'Middlesex University London', country: 'United Kingdom', focus: 'Arts, Business, Science', since: '2018' },
  { name: 'RMIT University', country: 'Australia', focus: 'Design, Technology, Business', since: '2017' },
  { name: 'Griffith University', country: 'Australia', focus: 'Health, Environment, Law', since: '2019' },
  { name: 'Limkokwing University', country: 'Malaysia', focus: 'Creative Arts, Design, IT', since: '2014' },
  { name: 'University of Wollongong in Dubai', country: 'UAE', focus: 'Business, Engineering, IT', since: '2020' },
  { name: 'Canadian University Dubai', country: 'UAE', focus: 'Business, Architecture, Engineering', since: '2021' },
];

export default function UniversityPartners() {
  useEffect(() => {
    const obs = new IntersectionObserver((e) => e.forEach((x) => x.isIntersecting && x.target.classList.add('animate-in')), { threshold: 0.08 });
    document.querySelectorAll('.up-fade').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section style={{ background: 'var(--cream)', padding: '120px 5%', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '64px', flexWrap: 'wrap', gap: '32px' }}>
          <div>
            <div className="up-fade" style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px', opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}>
              <div style={{ width: '40px', height: '1px', background: 'var(--gold)' }} />
              <span style={{ fontFamily: 'var(--font-syne)', fontSize: '11px', letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase' }}>Academic Partners</span>
            </div>
            <h2 className="up-fade" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.08, opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s' }}>
              University<br /><span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Partners</span>
            </h2>
          </div>
          <p className="up-fade" style={{ fontFamily: 'var(--font-dm)', fontSize: '15px', lineHeight: 1.8, color: 'rgba(15,15,25,0.55)', maxWidth: '380px', opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s' }}>
            A selective portfolio of accredited universities across the UK, Australia, Malaysia, and the UAE — each chosen for academic quality, student outcomes, and market relevance.
          </p>
        </div>

        {/* Table-style list */}
        <div style={{ border: '1px solid rgba(197,160,85,0.2)' }}>
          {/* Header row */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1.5fr 0.8fr', gap: '0', background: 'rgba(197,160,85,0.08)', padding: '16px 32px', borderBottom: '1px solid rgba(197,160,85,0.2)' }}>
            {['Institution', 'Country', 'Areas of Study', 'Partner Since'].map((h) => (
              <span key={h} style={{ fontFamily: 'var(--font-syne)', fontSize: '10px', letterSpacing: '0.2em', color: 'var(--gold)', textTransform: 'uppercase' }}>{h}</span>
            ))}
          </div>
          {universities.map((u, i) => (
            <div key={u.name} className="up-fade uni-row" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1.5fr 0.8fr', gap: '0', padding: '24px 32px', borderBottom: i < universities.length - 1 ? '1px solid rgba(197,160,85,0.1)' : 'none', opacity: 0, transform: 'translateY(16px)', transition: `opacity 0.5s ease ${0.06 * i}s, transform 0.5s ease ${0.06 * i}s`, cursor: 'default' }}>
              <span style={{ fontFamily: 'var(--font-syne)', fontSize: '14px', fontWeight: 600, color: 'var(--ink)' }}>{u.name}</span>
              <span style={{ fontFamily: 'var(--font-dm)', fontSize: '14px', color: 'rgba(15,15,25,0.55)' }}>{u.country}</span>
              <span style={{ fontFamily: 'var(--font-dm)', fontSize: '14px', color: 'rgba(15,15,25,0.55)' }}>{u.focus}</span>
              <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: '18px', fontWeight: 600, color: 'var(--gold)' }}>{u.since}</span>
            </div>
          ))}
        </div>
      </div>
      <style>{`.animate-in { opacity: 1 !important; transform: translateY(0) !important; } .uni-row:hover { background: rgba(197,160,85,0.04); }`}</style>
    </section>
  );
}
