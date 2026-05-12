"use client";
import Link from "next/link";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import dynamic from "next/dynamic";

const MiniGlobe = dynamic(() => import("./MiniGlobe"), { ssr: false });

export default function CTASection() {
  return (
    <section style={{ background: "var(--off)", padding: "120px clamp(24px,5vw,80px)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* Main CTA block */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 420px",
          gap: "0",
          border: "1.5px solid var(--border)",
          overflow: "hidden",
          background: "var(--white)",
        }}>
          {/* Left text */}
          <div style={{ padding: "72px 64px", borderRight: "1.5px solid var(--border)" }}>
            <p className="label" style={{ marginBottom: "20px" }}>Ready to Start?</p>
            <h2 className="display" style={{ fontSize: "clamp(34px,4vw,56px)", color: "var(--navy)", marginBottom: "24px" }}>
              Let&apos;s Build Something<br/>
              <em style={{ color: "var(--teal)" }}>Extraordinary Together</em>
            </h2>
            <p style={{ fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"15px",fontWeight:300,lineHeight:1.8,color:"var(--slate)",maxWidth:"420px",marginBottom:"40px" }}>
              Whether you are testing a new market or looking to scale an existing
              presence — our team is ready to design a solution around your ambitions.
            </p>
            <div style={{ display:"flex",gap:"14px",flexWrap:"wrap",marginBottom:"48px" }}>
              <Link href="/contact" className="btn-primary">
                Start a Conversation <ArrowRight size={14}/>
              </Link>
              <Link href="/services" className="btn-outline-dark">
                Explore Services
              </Link>
            </div>

            {/* Contact strip */}
            <div style={{ display:"flex",gap:"36px",paddingTop:"36px",borderTop:"1px solid var(--border)",flexWrap:"wrap" }}>
              {[
                { Icon: Mail, text:"hello@arintls.com", href:"mailto:hello@arintls.com" },
                { Icon: Phone, text:"+92 300 000 0000", href:"tel:+923000000000" },
              ].map(({ Icon, text, href }) => (
                <a key={text} href={href} style={{
                  display:"flex",alignItems:"center",gap:"10px",
                  fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"13px",fontWeight:400,
                  color:"var(--slate)",textDecoration:"none",transition:"color 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "var(--teal)"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "var(--slate)"}
                >
                  <Icon size={14} color="var(--teal)"/> {text}
                </a>
              ))}
            </div>
          </div>

          {/* Right — mini globe + offices */}
          <div style={{ background:"var(--navy)", padding:"48px 40px", display:"flex", flexDirection:"column", gap:"32px" }}>
            {/* Mini 3D globe */}
            <div style={{ height:"200px", position:"relative" }}>
              <div style={{
                position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",
                width:"180px",height:"180px",
                borderRadius:"50%",
                background:"radial-gradient(circle,rgba(11,79,108,0.4) 0%,transparent 70%)",
                filter:"blur(20px)",pointerEvents:"none",
              }}/>
              <MiniGlobe />
            </div>

            {/* Offices */}
            <div>
              <p style={{ fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"9px",fontWeight:700,letterSpacing:"0.25em",textTransform:"uppercase",color:"var(--gold-lt)",marginBottom:"20px" }}>Our Offices</p>
              <div style={{ display:"flex",flexDirection:"column",gap:"16px" }}>
                {[
                  { city:"Lahore", country:"Pakistan" },
                  { city:"Karachi", country:"Pakistan" },
                  { city:"Dubai", country:"UAE" },
                  { city:"Gurugram", country:"India" },
                ].map(o => (
                  <div key={o.city} style={{ display:"flex",alignItems:"center",gap:"10px" }}>
                    <MapPin size={12} style={{ color:"var(--gold-lt)",flexShrink:0 }}/>
                    <div style={{ display:"flex",gap:"6px",alignItems:"baseline" }}>
                      <span style={{ fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"13px",fontWeight:500,color:"rgba(250,250,248,0.85)" }}>{o.city}</span>
                      <span style={{ fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"11px",fontWeight:300,color:"rgba(250,250,248,0.35)" }}>{o.country}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
