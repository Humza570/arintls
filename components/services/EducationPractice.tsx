'use client';

import { useEffect } from 'react';

const educationServices = [
  { num: '01', title: 'Market Feasibility & Entry Strategy', body: 'Before committing resources, understand exactly what you are entering. We deliver granular intelligence on regulatory landscape, competitive positioning, student demand, and optimal market sequencing.' },
  { num: '02', title: 'Regulatory Licensing & Compliance', body: 'Navigating HEC, provincial education authorities, and accreditation frameworks requires expertise and relationships. We manage the full licensing process — reducing timelines and eliminating compliance risk.' },
  { num: '03', title: 'Student Recruitment & Pipeline Management', body: 'From campus fairs to digital funnels, we build, manage, and optimise full-cycle student recruitment pipelines that deliver qualified applicants at scale and predictable cost-per-enrolment.' },
  { num: '04', title: 'Agent & Channel Partner Network', body: 'Access our curated network of vetted counsellors and agents across Pakistan and South Asia, with performance-based structures that align incentives and protect your institutional brand.' },
  { num: '05', title: 'Pathway & Articulation Programme Design', body: 'We design and negotiate formal articulation agreements between local institutions and your programmes, creating sustainable pipelines of motivated, pre-qualified students.' },
  { num: '06', title: 'Brand Positioning & Marketing', body: 'In markets where reputation is everything, we build the local brand equity your institution needs — through targeted digital, events, PR, and thought leadership campaigns.' },
];

export default function EducationPractice() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('animate-in')),
      { threshold: 0.08 }
    );
    document.querySelectorAll('.ep-fade').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section style={{ background: 'var(--cream)', padding: '120px 5%', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px', background: 'linear-gradient(to bottom, var(--gold), transparent)' }} />

      <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '80px', marginBottom: '80px', alignItems: 'end' }}>
          <div>
            <div className="ep-fade" style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px', opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}>
              <div style={{ width: '40px', height: '1px', background: 'var(--gold)' }} />
              <span style={{ fontFamily: 'var(--font-syne)', fontSize: '11px', letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase' }}>Practice Area 01</span>
            </div>
            <h2 className="ep-fade" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(40px, 5vw, 68px)', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.08, opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s' }}>
              Education<br /><span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Market Entry</span>
            </h2>
          </div>
          <p className="ep-fade" style={{ fontFamily: 'var(--font-dm)', fontSize: '16px', lineHeight: 1.85, color: 'rgba(15,15,25,0.6)', alignSelf: 'end', opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s' }}>
            We help universities, colleges, and training providers expand into South and Southeast Asian markets with confidence. Our education practice spans every phase of the market entry journey — from initial feasibility through to sustainable, high-volume recruitment.
          </p>
        </div>

        {/* Services grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px', background: 'rgba(197,160,85,0.15)' }}>
          {educationServices.map((s, i) => (
            <div key={s.num} className="ep-fade svc-card" style={{ background: 'var(--cream)', padding: '44px 36px', opacity: 0, transform: 'translateY(24px)', transition: `opacity 0.6s ease ${0.07 * i}s, transform 0.6s ease ${0.07 * i}s`, position: 'relative', overflow: 'hidden' }}>
              <div className="svc-bar" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: 'var(--gold)', transform: 'scaleX(0)', transformOrigin: 'left', transition: 'transform 0.4s ease' }} />
              <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: '48px', fontWeight: 700, color: 'rgba(197,160,85,0.18)', lineHeight: 1, marginBottom: '20px' }}>{s.num}</div>
              <h3 style={{ fontFamily: 'var(--font-syne)', fontSize: '14px', fontWeight: 600, color: 'var(--ink)', letterSpacing: '0.04em', marginBottom: '14px', lineHeight: 1.4 }}>{s.title}</h3>
              <p style={{ fontFamily: 'var(--font-dm)', fontSize: '14px', lineHeight: 1.8, color: 'rgba(15,15,25,0.58)' }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`.animate-in { opacity: 1 !important; transform: translateY(0) !important; } .svc-card:hover .svc-bar { transform: scaleX(1) !important; }`}</style>
    </section>
  );
}
