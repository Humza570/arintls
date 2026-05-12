"use client";
import Link from "next/link";
import { ArrowRight, TrendingUp, Globe, Users, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Globe,
    number: "01",
    title: "Market Development",
    subtitle: "Test The Market Before You Enter",
    desc: "Bespoke research, stakeholder introductions, and strategy design for institutions with limited knowledge of South Asian markets.",
    tags: ["Market Research", "Stakeholder Mapping", "Strategy Design"],
    href: "/services#development",
  },
  {
    icon: TrendingUp,
    number: "02",
    title: "Market Entry",
    subtitle: "Strategic Advice Based On Experience",
    desc: "End-to-end support executing your market entry plan — from staff recruitment and training to legal compliance and roadmap development.",
    tags: ["Staff Recruitment", "Legal & Compliance", "Road Map"],
    href: "/services#entry",
  },
  {
    icon: Users,
    number: "03",
    title: "Market Presence",
    subtitle: "Everything You Need To Operate",
    desc: "Dedicated office space, in-country team management, stakeholder relations, and monthly reporting so you can focus on growth.",
    tags: ["Office Space", "Team Management", "Monthly Reporting"],
    href: "/services#presence",
  },
  {
    icon: BarChart3,
    number: "04",
    title: "Market Expansion",
    subtitle: "Analyse, Improve & Scale",
    desc: "For institutions already operating — we help review performance, reduce costs, and scale existing structures for improved ROI.",
    tags: ["ROI Analysis", "Cost Reduction", "Scale Strategy"],
    href: "/services#expansion",
  },
];

export default function ServicesSection() {
  return (
    <section style={{
      background: "var(--white)",
      padding: "120px clamp(24px,5vw,80px)",
    }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: "60px", alignItems: "flex-end",
          marginBottom: "64px",
          paddingBottom: "48px",
          borderBottom: "1px solid var(--border)",
        }}>
          <div>
            <p className="label" style={{ marginBottom: "16px" }}>What We Do</p>
            <h2 className="display" style={{ fontSize: "clamp(36px,4.5vw,60px)", color: "var(--navy)" }}>
              Four Stages of<br/>
              <em style={{ color: "var(--teal)" }}>Sustainable Growth</em>
            </h2>
          </div>
          <div>
            <p style={{
              fontFamily: "'Plus Jakarta Sans',sans-serif",
              fontSize: "15px", fontWeight: 300, lineHeight: 1.8,
              color: "var(--slate)", marginBottom: "24px",
            }}>
              Our services follow the natural progression of any successful market
              expansion — from initial research through to full in-country operations
              and beyond.
            </p>
            <Link href="/services" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              fontFamily: "'Plus Jakarta Sans',sans-serif",
              fontSize: "12px", fontWeight: 600,
              letterSpacing: "0.08em", textTransform: "uppercase",
              color: "var(--teal)", textDecoration: "none",
              borderBottom: "1px solid var(--teal)", paddingBottom: "3px",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = "0.7"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = "1"}
            >
              View All Services <ArrowRight size={12}/>
            </Link>
          </div>
        </div>

        {/* Service cards grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "0",
          border: "1px solid var(--border)",
        }}>
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Link key={s.number} href={s.href} style={{
                display: "block", textDecoration: "none",
                padding: "48px 44px",
                borderRight: i % 2 === 0 ? "1px solid var(--border)" : "none",
                borderBottom: i < 2 ? "1px solid var(--border)" : "none",
                background: "#FAFAF8",
                position: "relative", overflow: "hidden",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "var(--navy)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "#FAFAF8";
              }}
              className="service-card-link"
              >
                {/* Hover overlay for text recolor — done via CSS class approach with inline fallback */}
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0,
                  height: "3px",
                  background: "linear-gradient(90deg, var(--teal), var(--gold))",
                  transform: "scaleX(0)", transformOrigin: "left",
                  transition: "transform 0.4s ease",
                }} className="card-top-line"/>

                {/* Number bg */}
                <div style={{
                  position: "absolute", top: "20px", right: "28px",
                  fontFamily: "'Playfair Display',serif",
                  fontSize: "100px", fontWeight: 700,
                  color: "rgba(11,79,108,0.05)",
                  lineHeight: 1, userSelect: "none",
                  transition: "color 0.3s",
                }}>
                  {s.number}
                </div>

                <div style={{
                  width: "44px", height: "44px",
                  background: "rgba(11,79,108,0.08)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: "24px",
                  transition: "background 0.3s",
                }}>
                  <Icon size={20} color="var(--teal)" strokeWidth={1.5}/>
                </div>

                <p style={{
                  fontFamily: "'Plus Jakarta Sans',sans-serif",
                  fontSize: "9px", fontWeight: 700,
                  letterSpacing: "0.25em", textTransform: "uppercase",
                  color: "var(--gold)", marginBottom: "10px",
                }}>
                  Stage {s.number}
                </p>

                <h3 style={{
                  fontFamily: "'Playfair Display',serif",
                  fontSize: "clamp(22px,2vw,28px)", fontWeight: 400,
                  color: "var(--navy)", marginBottom: "6px",
                  transition: "color 0.3s",
                }}>
                  {s.title}
                </h3>
                <p style={{
                  fontFamily: "'Plus Jakarta Sans',sans-serif",
                  fontStyle: "italic", fontSize: "13px", fontWeight: 300,
                  color: "var(--teal)", marginBottom: "20px",
                  transition: "color 0.3s",
                }}>
                  {s.subtitle}
                </p>

                <div style={{ height: "1px", background: "var(--border)", marginBottom: "20px" }}/>

                <p style={{
                  fontFamily: "'Plus Jakarta Sans',sans-serif",
                  fontSize: "14px", fontWeight: 300, lineHeight: 1.75,
                  color: "var(--slate)", marginBottom: "28px",
                  transition: "color 0.3s",
                }}>
                  {s.desc}
                </p>

                {/* Tags */}
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "32px" }}>
                  {s.tags.map(t => (
                    <span key={t} style={{
                      fontFamily: "'Plus Jakarta Sans',sans-serif",
                      fontSize: "10px", fontWeight: 600,
                      letterSpacing: "0.12em", textTransform: "uppercase",
                      color: "var(--teal)",
                      border: "1px solid rgba(11,79,108,0.2)",
                      padding: "4px 10px",
                      background: "rgba(11,79,108,0.04)",
                      transition: "all 0.3s",
                    }}>
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{
                  display: "flex", alignItems: "center", gap: "8px",
                  fontFamily: "'Plus Jakarta Sans',sans-serif",
                  fontSize: "11px", fontWeight: 600,
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  color: "var(--teal)", transition: "color 0.3s",
                }}>
                  Learn More <ArrowRight size={12}/>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <style>{`
        .service-card-link:hover .card-top-line { transform: scaleX(1) !important; }
        .service-card-link:hover h3 { color: #FAFAF8 !important; }
        .service-card-link:hover p { color: rgba(250,250,248,0.55) !important; }
        .service-card-link:hover .card-top-line + div { color: rgba(11,79,108,0.15) !important; }
        .service-card-link:hover span { border-color: rgba(250,250,248,0.15) !important; background: rgba(250,250,248,0.05) !important; color: var(--gold-lt) !important; }
        .service-card-link:hover > div:last-child { color: var(--gold-lt) !important; }
      `}</style>
    </section>
  );
}
