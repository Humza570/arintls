'use client';
import { useEffect, useState } from 'react';

const articles = [
  {
    category: 'Market Intelligence',
    date: 'April 2025',
    title: 'Pakistan\'s Higher Education Sector: What International Universities Need to Know in 2025',
    excerpt: 'With over 1.2 million students enrolled in higher education and a rapidly growing middle class, Pakistan represents one of the most underserved international student markets globally. We examine what the numbers actually mean for institutions considering entry.',
    readTime: '8 min read',
    featured: true,
  },
  {
    category: 'Regulatory Update',
    date: 'March 2025',
    title: 'HEC\'s New Framework for Foreign University Collaboration: A Practical Guide',
    excerpt: 'The Higher Education Commission has updated its guidelines for international academic partnerships. We break down what has changed and what institutions need to do to remain compliant.',
    readTime: '6 min read',
    featured: false,
  },
  {
    category: 'Strategic Perspective',
    date: 'March 2025',
    title: 'Why Southeast Asian Students Are Choosing Pakistan as a Study Destination',
    excerpt: 'A counterintuitive trend is emerging: students from Malaysia, Indonesia, and beyond are selecting Pakistani universities. The reasons reveal important opportunities for institutions already operating here.',
    readTime: '5 min read',
    featured: false,
  },
  {
    category: 'Business Intelligence',
    date: 'February 2025',
    title: 'The Real Cost of Market Entry in Pakistan: What Companies Get Wrong',
    excerpt: 'Most market entry budgets are wrong — not by a little, but systematically. We examine the most common financial and operational miscalculations made by international companies and how to avoid them.',
    readTime: '7 min read',
    featured: false,
  },
  {
    category: 'ARINTLS News',
    date: 'February 2025',
    title: 'ARINTLS Expands Partnership Network Across Southeast Asia',
    excerpt: 'We are pleased to announce the formalisation of partner agreements with three leading consultancies in Malaysia, Indonesia, and Vietnam — expanding our student pipeline capacity significantly.',
    readTime: '3 min read',
    featured: false,
  },
  {
    category: 'Market Intelligence',
    date: 'January 2025',
    title: 'Investment Climate Pakistan 2025: Sectors to Watch for International Business',
    excerpt: 'Following a period of macroeconomic stabilisation, Pakistan is attracting renewed interest from international investors. We identify five sectors with the most compelling market entry opportunities.',
    readTime: '9 min read',
    featured: false,
  },
  {
    category: 'Strategic Perspective',
    date: 'January 2025',
    title: 'The Articulation Agreement Advantage: How Smart Universities Build Lasting Pipelines',
    excerpt: 'Universities that invest in formal articulation agreements with local colleges consistently outperform those relying on direct recruitment alone. The data from our portfolio is unambiguous.',
    readTime: '6 min read',
    featured: false,
  },
  {
    category: 'Regulatory Update',
    date: 'December 2024',
    title: 'SECP Company Registration in 2025: What Has Changed and Why It Matters',
    excerpt: 'Pakistan\'s Securities and Exchange Commission has streamlined several registration processes. We detail the practical implications for international companies planning to incorporate.',
    readTime: '5 min read',
    featured: false,
  },
];

const categories = ['All', 'Market Intelligence', 'Regulatory Update', 'Strategic Perspective', 'Business Intelligence', 'ARINTLS News'];

export default function NewsGrid() {
  const [active, setActive] = useState('All');

  useEffect(() => {
    const obs = new IntersectionObserver((e) => e.forEach((x) => x.isIntersecting && x.target.classList.add('animate-in')), { threshold: 0.08 });
    document.querySelectorAll('.ng-fade').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const filtered = active === 'All' ? articles : articles.filter((a) => a.category === active);
  const featured = filtered.find((a) => a.featured) || filtered[0];
  const rest = filtered.filter((a) => a !== featured);

  return (
    <section style={{ background: 'var(--cream)', padding: '100px 5% 120px' }}>
      <div style={{ maxWidth: '1300px', margin: '0 auto' }}>

        {/* Filter tabs */}
        <div className="ng-fade" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '72px', opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                fontFamily: 'var(--font-syne)', fontSize: '11px', letterSpacing: '0.18em',
                textTransform: 'uppercase', padding: '10px 20px', border: 'none', cursor: 'pointer',
                background: active === cat ? 'var(--ink)' : 'transparent',
                color: active === cat ? 'var(--gold)' : 'rgba(15,15,25,0.45)',
                borderBottom: active === cat ? '1px solid var(--gold)' : '1px solid rgba(197,160,85,0.2)',
                transition: 'all 0.25s ease',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured article */}
        {featured && (
          <div className="ng-fade" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0', marginBottom: '3px', background: 'var(--ink)', opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s', cursor: 'pointer' }}>
            {/* Image placeholder */}
            <div style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, rgba(197,160,85,0.1) 100%)', minHeight: '380px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, backgroundImage: `radial-gradient(ellipse 60% 60% at 60% 40%, rgba(197,160,85,0.12) 0%, transparent 70%)` }} />
              <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: '120px', fontWeight: 700, color: 'rgba(197,160,85,0.08)', userSelect: 'none', position: 'relative' }}>01</span>
            </div>
            {/* Content */}
            <div style={{ padding: '56px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '24px' }}>
                <span style={{ fontFamily: 'var(--font-syne)', fontSize: '10px', letterSpacing: '0.2em', color: 'var(--gold)', textTransform: 'uppercase', background: 'rgba(197,160,85,0.12)', padding: '5px 12px' }}>{featured.category}</span>
                <span style={{ fontFamily: 'var(--font-dm)', fontSize: '13px', color: 'rgba(240,232,215,0.4)' }}>{featured.date}</span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(28px, 3vw, 44px)', fontWeight: 600, color: 'var(--cream)', lineHeight: 1.15, marginBottom: '20px' }}>{featured.title}</h2>
              <p style={{ fontFamily: 'var(--font-dm)', fontSize: '15px', lineHeight: 1.8, color: 'rgba(240,232,215,0.55)', marginBottom: '36px' }}>{featured.excerpt}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontFamily: 'var(--font-syne)', fontSize: '12px', letterSpacing: '0.15em', color: 'var(--gold)', textTransform: 'uppercase' }}>Read Article</span>
                <div style={{ width: '32px', height: '1px', background: 'var(--gold)' }} />
                <span style={{ fontFamily: 'var(--font-dm)', fontSize: '12px', color: 'rgba(240,232,215,0.35)' }}>{featured.readTime}</span>
              </div>
            </div>
          </div>
        )}

        {/* Rest of articles */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3px', background: 'rgba(197,160,85,0.12)' }}>
          {rest.map((a, i) => (
            <div key={a.title} className="ng-fade art-card" style={{ background: 'var(--cream)', padding: '40px 32px', cursor: 'pointer', opacity: 0, transform: 'translateY(20px)', transition: `opacity 0.5s ease ${0.07 * i}s, transform 0.5s ease ${0.07 * i}s`, position: 'relative', overflow: 'hidden' }}>
              <div className="art-line" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'var(--gold)', transform: 'scaleX(0)', transformOrigin: 'left', transition: 'transform 0.35s ease' }} />
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap' }}>
                <span style={{ fontFamily: 'var(--font-syne)', fontSize: '9px', letterSpacing: '0.2em', color: 'var(--gold)', textTransform: 'uppercase', background: 'rgba(197,160,85,0.1)', padding: '4px 10px' }}>{a.category}</span>
                <span style={{ fontFamily: 'var(--font-dm)', fontSize: '12px', color: 'rgba(15,15,25,0.4)' }}>{a.date}</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '24px', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.2, marginBottom: '14px' }}>{a.title}</h3>
              <p style={{ fontFamily: 'var(--font-dm)', fontSize: '13.5px', lineHeight: 1.75, color: 'rgba(15,15,25,0.52)', marginBottom: '28px' }}>{a.excerpt}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontFamily: 'var(--font-syne)', fontSize: '10px', letterSpacing: '0.15em', color: 'var(--gold)', textTransform: 'uppercase' }}>Read</span>
                <div style={{ width: '24px', height: '1px', background: 'var(--gold)' }} />
                <span style={{ fontFamily: 'var(--font-dm)', fontSize: '11px', color: 'rgba(15,15,25,0.35)' }}>{a.readTime}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`.animate-in { opacity: 1 !important; transform: translateY(0) !important; } .art-card:hover .art-line { transform: scaleX(1) !important; }`}</style>
    </section>
  );
}
