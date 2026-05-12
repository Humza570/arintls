"use client";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";

const footerLinks = {
  Company: [
    { label:"Our Story", href:"/about#story" },
    { label:"Mission & Vision", href:"/about#mission" },
    { label:"Our Advantages", href:"/about#advantages" },
    { label:"Careers", href:"/careers" },
  ],
  Services: [
    { label:"Market Development", href:"/services#development" },
    { label:"Market Entry", href:"/services#entry" },
    { label:"Market Presence", href:"/services#presence" },
    { label:"Market Expansion", href:"/services#expansion" },
  ],
  "Connect": [
    { label:"News & Insights", href:"/news" },
    { label:"Events & Webinars", href:"/news#events" },
    { label:"LinkedIn", href:"#" },
    { label:"Contact Us", href:"/contact" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ background:"var(--ink)", color:"rgba(250,250,248,0.6)" }}>

      {/* Main */}
      <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"80px clamp(24px,5vw,80px) 0" }}>
        <div style={{
          display:"grid", gridTemplateColumns:"1.4fr 1fr 1fr 1fr",
          gap:"60px", paddingBottom:"60px",
          borderBottom:"1px solid rgba(250,250,248,0.08)",
        }}>
          {/* Brand */}
          <div>
            <div style={{ marginBottom:"16px" }}>
              <span style={{ fontFamily:"'Playfair Display',serif",fontWeight:700,fontSize:"24px",letterSpacing:"0.06em",color:"#FAFAF8" }}>
                ARIN<span style={{ color:"var(--gold)" }}>TLS</span>
              </span>
            </div>
            <p style={{ fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"13px",fontWeight:300,lineHeight:1.75,color:"rgba(250,250,248,0.4)",marginBottom:"28px",maxWidth:"260px" }}>
              Specialised market entry firm helping academic institutions and global
              businesses expand across Asia and Pakistan.
            </p>
            <a href="mailto:hello@arintls.com" style={{
              display:"flex",alignItems:"center",gap:"8px",
              fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"13px",fontWeight:400,
              color:"rgba(250,250,248,0.55)",textDecoration:"none",transition:"color 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "var(--gold-lt)"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(250,250,248,0.55)"}
            >
              <Mail size={13} style={{ color:"var(--gold)" }}/> hello@arintls.com
            </a>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([cat, links]) => (
            <div key={cat}>
              <p style={{ fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"9px",fontWeight:700,letterSpacing:"0.28em",textTransform:"uppercase",color:"var(--gold)",marginBottom:"20px" }}>
                {cat}
              </p>
              <ul style={{ listStyle:"none",display:"flex",flexDirection:"column",gap:"10px" }}>
                {links.map(link => (
                  <li key={link.href}>
                    <Link href={link.href} style={{
                      fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"13px",fontWeight:300,
                      color:"rgba(250,250,248,0.4)",textDecoration:"none",transition:"color 0.2s",
                    }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "rgba(250,250,248,0.85)"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(250,250,248,0.4)"}
                    >{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          display:"flex",justifyContent:"space-between",alignItems:"center",
          padding:"20px 0 32px", flexWrap:"wrap", gap:"12px",
        }}>
          <p style={{ fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"11px",fontWeight:300,color:"rgba(250,250,248,0.25)" }}>
            © 2025 ARINTLS. All rights reserved.
          </p>
          <div style={{ display:"flex",gap:"24px" }}>
            {["Privacy Policy","Terms of Use"].map(t => (
              <Link key={t} href="#" style={{
                fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"10px",fontWeight:500,
                letterSpacing:"0.15em",textTransform:"uppercase",
                color:"rgba(250,250,248,0.25)",textDecoration:"none",transition:"color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "rgba(250,250,248,0.6)"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(250,250,248,0.25)"}
              >{t}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
