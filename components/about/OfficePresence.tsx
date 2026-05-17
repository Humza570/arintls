'use client';

import { useEffect } from 'react';

const offices = [
  {
    city: 'Lahore',
    country: 'Pakistan',
    type: 'Headquarters',
    address: 'DHA Phase 5, Lahore, Punjab',
    email: 'lahore@arintls.com',
    phone: '+92 42 XXXX XXXX',
  },
  {
    city: 'Karachi',
    country: 'Pakistan',
    type: 'Regional Office',
    address: 'Clifton Block 8, Karachi, Sindh',
    email: 'karachi@arintls.com',
    phone: '+92 21 XXXX XXXX',
  },
  {
    city: 'Kuala Lumpur',
    country: 'Malaysia',
    type: 'Partner Office',
    address: 'KLCC, Kuala Lumpur',
    email: 'asia@arintls.com',
    phone: '+60 3 XXXX XXXX',
  },
];

export default function OfficePresence() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('animate-in')),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.office-fade').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      style={{
        background: 'var(--cream)',
        padding: '120px 5%',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', marginBottom: '80px', alignItems: 'end' }}>
          <div>
            <div
              className="office-fade"
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
                Global Presence
              </span>
            </div>
            <h2
              className="office-fade"
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(44px, 5vw, 72px)',
                fontWeight: 600,
                color: 'var(--ink)',
                lineHeight: 1.08,
                opacity: 0,
                transform: 'translateY(24px)',
                transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s',
              }}
            >
              Where We{' '}
              <span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Operate</span>
            </h2>
          </div>
          <p
            className="office-fade"
            style={{
              fontFamily: 'var(--font-dm)',
              fontSize: '16px',
              lineHeight: 1.85,
              color: 'rgba(15,15,25,0.6)',
              opacity: 0,
              transform: 'translateY(24px)',
              transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s',
              alignSelf: 'end',
            }}
          >
            Physical presence matters in the markets we serve. Our offices are not symbolic — they are operational hubs where our teams live, work, and maintain the relationships that make everything possible.
          </p>
        </div>

        {/* Offices */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px', background: 'rgba(197,160,85,0.15)' }}>
          {offices.map((office, i) => (
            <div
              key={office.city}
              className="office-fade"
              style={{
                background: 'var(--cream)',
                padding: '56px 48px',
                opacity: 0,
                transform: 'translateY(24px)',
                transition: `opacity 0.6s ease ${0.12 * i}s, transform 0.6s ease ${0.12 * i}s`,
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-syne)',
                  fontSize: '10px',
                  letterSpacing: '0.25em',
                  color: 'var(--gold)',
                  textTransform: 'uppercase',
                  marginBottom: '16px',
                }}
              >
                {office.type}
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: '52px',
                  fontWeight: 700,
                  color: 'var(--ink)',
                  lineHeight: 1,
                  marginBottom: '4px',
                }}
              >
                {office.city}
              </h3>
              <div
                style={{
                  fontFamily: 'var(--font-dm)',
                  fontSize: '14px',
                  color: 'rgba(15,15,25,0.45)',
                  marginBottom: '40px',
                }}
              >
                {office.country}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <div style={{ width: '4px', minWidth: '4px', height: '4px', borderRadius: '50%', background: 'var(--gold)', marginTop: '8px' }} />
                  <span style={{ fontFamily: 'var(--font-dm)', fontSize: '14px', color: 'rgba(15,15,25,0.6)', lineHeight: 1.6 }}>{office.address}</span>
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <div style={{ width: '4px', minWidth: '4px', height: '4px', borderRadius: '50%', background: 'var(--gold)', marginTop: '8px' }} />
                  <span style={{ fontFamily: 'var(--font-dm)', fontSize: '14px', color: 'rgba(15,15,25,0.6)' }}>{office.email}</span>
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <div style={{ width: '4px', minWidth: '4px', height: '4px', borderRadius: '50%', background: 'var(--gold)', marginTop: '8px' }} />
                  <span style={{ fontFamily: 'var(--font-dm)', fontSize: '14px', color: 'rgba(15,15,25,0.6)' }}>{office.phone}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .animate-in { opacity: 1 !important; transform: translateY(0) !important; }
      `}</style>
    </section>
  );
}
