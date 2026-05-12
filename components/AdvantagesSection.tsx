"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const advantages = [
  { icon:"🎓", title:"Exclusively Education", desc:"A decade of focus on international higher education market entry. We speak the language of universities, agents, and students." },
  { icon:"📊", title:"Transparent & Accountable", desc:"Open pricing, monthly reporting, no hidden costs. You always know exactly what your investment achieves on the ground." },
  { icon:"👥", title:"Dedicated Teams Per Partner", desc:"Each client receives a dedicated in-country team, hired to match your brand ethos and institutional requirements." },
  { icon:"📈", title:"Performance-Oriented", desc:"Our model is aligned with your success. We work toward your specific growth targets, not generic benchmarks." },
  { icon:"🌏", title:"Deep Local Networks", desc:"From recruitment agents to government bodies — our on-the-ground relationships open doors others cannot." },
  { icon:"⚡", title:"Flexible Engagement", desc:"No long-term lock-ins. Open salary structures, flexible contracts, and a commitment to building something that lasts." },
];

export default function AdvantagesSection() {
  return (
    <section style={{ background: "var(--off)", padding: "120px clamp(24px,5vw,80px)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* Header row */}
        <div style={{
          display: "grid", gridTemplateColumns: "340px 1fr",
          gap: "80px", alignItems: "center",
          marginBottom: "72px",
        }}>
          <div>
            <p className="label" style={{ marginBottom: "16px" }}>Our Advantages</p>
            <h2 className="display" style={{ fontSize: "clamp(34px,4vw,52px)", color: "var(--navy)", lineHeight: 1.1 }}>
              Why Choose<br/><em style={{ color: "var(--teal)" }}>ARINTLS</em>
            </h2>
          </div>
          <div style={{
            borderLeft: "3px solid var(--teal)",
            paddingLeft: "32px",
          }}>
            <p style={{
              fontFamily: "'Plus Jakarta Sans',sans-serif",
              fontSize: "17px", fontWeight: 300, lineHeight: 1.8,
              color: "var(--slate)",
            }}>
              We built ARINTLS on the belief that global institutions deserve a partner
              that is as invested in their success as they are — transparent, expert,
              and relentlessly performance-focused.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "0",
          border: "1px solid var(--border)",
          background: "var(--border)",
        }}>
          {advantages.map((a, i) => (
            <div key={a.title} style={{
              background: "var(--white)",
              padding: "40px 36px",
              margin: "1px",
              transition: "all 0.3s ease",
              cursor: "default",
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "var(--navy)";
              el.style.transform = "scale(1.01)";
              el.style.zIndex = "2";
              el.style.position = "relative";
              const icon = el.querySelector(".adv-icon") as HTMLElement;
              const title = el.querySelector(".adv-title") as HTMLElement;
              const desc = el.querySelector(".adv-desc") as HTMLElement;
              if (icon) icon.style.background = "rgba(184,137,42,0.15)";
              if (title) title.style.color = "#FAFAF8";
              if (desc) desc.style.color = "rgba(250,250,248,0.5)";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "var(--white)";
              el.style.transform = "scale(1)";
              el.style.zIndex = "1";
              const icon = el.querySelector(".adv-icon") as HTMLElement;
              const title = el.querySelector(".adv-title") as HTMLElement;
              const desc = el.querySelector(".adv-desc") as HTMLElement;
              if (icon) icon.style.background = "rgba(11,79,108,0.07)";
              if (title) title.style.color = "var(--navy)";
              if (desc) desc.style.color = "var(--slate)";
            }}
            >
              <div className="adv-icon" style={{
                width: "48px", height: "48px",
                background: "rgba(11,79,108,0.07)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "22px", marginBottom: "20px",
                transition: "background 0.3s",
              }}>
                {a.icon}
              </div>
              <h3 className="adv-title" style={{
                fontFamily: "'Plus Jakarta Sans',sans-serif",
                fontSize: "14px", fontWeight: 700,
                letterSpacing: "0.02em",
                color: "var(--navy)", marginBottom: "12px",
                transition: "color 0.3s",
              }}>{a.title}</h3>
              <p className="adv-desc" style={{
                fontFamily: "'Plus Jakarta Sans',sans-serif",
                fontSize: "13px", fontWeight: 300, lineHeight: 1.75,
                color: "var(--slate)", transition: "color 0.3s",
              }}>{a.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ marginTop: "48px", textAlign: "center" }}>
          <Link href="/about#advantages" style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            fontFamily: "'Plus Jakarta Sans',sans-serif",
            fontSize: "12px", fontWeight: 600,
            letterSpacing: "0.1em", textTransform: "uppercase",
            color: "var(--teal)", textDecoration: "none",
            borderBottom: "1px solid rgba(11,79,108,0.3)",
            paddingBottom: "3px",
          }}>
            More About Us <ArrowRight size={12}/>
          </Link>
        </div>
      </div>
    </section>
  );
}
