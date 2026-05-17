'use client';
import { useEffect, useState } from 'react';

const offices = [
  {
    city: 'Lahore',
    label: 'Headquarters',
    address: 'DHA Phase 5, Lahore, Punjab, Pakistan',
    phone: '+92 42 XXXX XXXX',
    email: 'lahore@arintls.com',
  },
  {
    city: 'Karachi',
    label: 'Regional Office',
    address: 'Clifton Block 8, Karachi, Sindh, Pakistan',
    phone: '+92 21 XXXX XXXX',
    email: 'karachi@arintls.com',
  },
  {
    city: 'Kuala Lumpur',
    label: 'Partner Office',
    address: 'KLCC, Kuala Lumpur, Malaysia',
    phone: '+60 3 XXXX XXXX',
    email: 'asia@arintls.com',
  },
];

const enquiryTypes = [
  'Education Market Entry',
  'Business Implementation',
  'Partnership Enquiry',
  'Media & Press',
  'General Enquiry',
];

type FormState = {
  name: string;
  organisation: string;
  email: string;
  phone: string;
  type: string;
  message: string;
};

export default function ContactMain() {
  const [form, setForm] = useState<FormState>({ name: '', organisation: '', email: '', phone: '', type: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver((e) => e.forEach((x) => x.isIntersecting && x.target.classList.add('animate-in')), { threshold: 0.08 });
    document.querySelectorAll('.cm-fade').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const handleChange = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = () => {
    if (form.name && form.email && form.message) setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '14px 18px', background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(197,160,85,0.2)', color: 'var(--cream)',
    fontFamily: 'var(--font-dm)', fontSize: '14px', outline: 'none',
    boxSizing: 'border-box', transition: 'border-color 0.25s ease',
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: 'var(--font-syne)', fontSize: '10px', letterSpacing: '0.2em',
    color: 'rgba(240,232,215,0.45)', textTransform: 'uppercase', display: 'block', marginBottom: '8px',
  };

  return (
    <section style={{ background: 'var(--ink)', padding: '0 5% 120px' }}>
      <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '80px', alignItems: 'start' }}>

          {/* Form */}
          <div className="cm-fade" style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.7s ease, transform 0.7s ease', paddingTop: '80px' }}>
            <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 600, color: 'var(--cream)', lineHeight: 1.1, marginBottom: '40px' }}>
              Send Us a<br /><span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Message</span>
            </h2>

            {!submitted ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={labelStyle}>Full Name *</label>
                    <input type="text" value={form.name} onChange={handleChange('name')} placeholder="Your name" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Organisation</label>
                    <input type="text" value={form.organisation} onChange={handleChange('organisation')} placeholder="Your institution or company" style={inputStyle} />
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={labelStyle}>Email Address *</label>
                    <input type="email" value={form.email} onChange={handleChange('email')} placeholder="your@email.com" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Phone Number</label>
                    <input type="tel" value={form.phone} onChange={handleChange('phone')} placeholder="+1 000 000 0000" style={inputStyle} />
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Nature of Enquiry</label>
                  <select value={form.type} onChange={handleChange('type')} style={{ ...inputStyle, appearance: 'none' }}>
                    <option value="" style={{ background: '#0f0f19' }}>Select an option</option>
                    {enquiryTypes.map((t) => <option key={t} value={t} style={{ background: '#0f0f19' }}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Your Message *</label>
                  <textarea value={form.message} onChange={handleChange('message')} placeholder="Tell us about your objectives and how we can help..." rows={6} style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.7 }} />
                </div>
                <button
                  onClick={handleSubmit}
                  style={{ alignSelf: 'flex-start', padding: '16px 48px', background: 'var(--gold)', border: 'none', color: 'var(--ink)', fontFamily: 'var(--font-syne)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', cursor: 'pointer', fontWeight: 700, marginTop: '8px', transition: 'opacity 0.2s ease' }}
                >
                  Send Message
                </button>
              </div>
            ) : (
              <div style={{ border: '1px solid rgba(197,160,85,0.3)', padding: '48px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: '64px', color: 'var(--gold)', lineHeight: 1, marginBottom: '20px' }}>✓</div>
                <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '32px', fontWeight: 600, color: 'var(--cream)', marginBottom: '12px' }}>Message Received</h3>
                <p style={{ fontFamily: 'var(--font-dm)', fontSize: '15px', lineHeight: 1.8, color: 'rgba(240,232,215,0.55)' }}>
                  Thank you for reaching out. A member of the ARINTLS team will respond within one business day.
                </p>
              </div>
            )}
          </div>

          {/* Office info */}
          <div className="cm-fade" style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s', paddingTop: '80px' }}>
            <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 600, color: 'var(--cream)', lineHeight: 1.1, marginBottom: '40px' }}>
              Our<br /><span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Offices</span>
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', marginBottom: '60px' }}>
              {offices.map((office) => (
                <div key={office.city} style={{ background: 'rgba(197,160,85,0.04)', border: '1px solid rgba(197,160,85,0.12)', padding: '32px 28px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                    <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '28px', fontWeight: 700, color: 'var(--cream)', lineHeight: 1 }}>{office.city}</h3>
                    <span style={{ fontFamily: 'var(--font-syne)', fontSize: '9px', letterSpacing: '0.2em', color: 'var(--gold)', textTransform: 'uppercase', background: 'rgba(197,160,85,0.1)', padding: '4px 10px' }}>{office.label}</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {[office.address, office.phone, office.email].map((detail, i) => (
                      <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                        <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--gold)', marginTop: '7px', flexShrink: 0 }} />
                        <span style={{ fontFamily: 'var(--font-dm)', fontSize: '13.5px', color: 'rgba(240,232,215,0.5)', lineHeight: 1.6 }}>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* General email */}
            <div style={{ borderTop: '1px solid rgba(197,160,85,0.15)', paddingTop: '40px' }}>
              <div style={{ fontFamily: 'var(--font-syne)', fontSize: '10px', letterSpacing: '0.22em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '12px' }}>General Enquiries</div>
              <a href="mailto:info@arintls.com" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '28px', fontWeight: 600, color: 'var(--cream)', textDecoration: 'none', letterSpacing: '0.01em' }}>info@arintls.com</a>

              <div style={{ marginTop: '32px', fontFamily: 'var(--font-syne)', fontSize: '10px', letterSpacing: '0.22em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '12px' }}>Follow ARINTLS</div>
              <div style={{ display: 'flex', gap: '16px' }}>
                {['LinkedIn', 'Twitter', 'Instagram'].map((s) => (
                  <a key={s} href="#" style={{ fontFamily: 'var(--font-dm)', fontSize: '13px', color: 'rgba(240,232,215,0.45)', textDecoration: 'none', transition: 'color 0.2s ease' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(240,232,215,0.45)')}
                  >{s}</a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`.animate-in { opacity: 1 !important; transform: translateY(0) !important; }`}</style>
    </section>
  );
}
