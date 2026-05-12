"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

const Globe3D = dynamic(() => import("./Globe3D"), { ssr: false });

export default function HeroSection() {
  return (
    <section style={{
      minHeight: "100vh",
      background: "var(--navy)",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Fine grid overlay */}
      <div style={{
        position:"absolute", inset:0, pointerEvents:"none",
        backgroundImage:"linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)",
        backgroundSize:"60px 60px",
      }}/>

      {/* Gradient fade bottom */}
      <div style={{
        position:"absolute", bottom:0, left:0, right:0, height:"160px",
        background:"linear-gradient(to bottom,transparent,rgba(20,35,56,0.6))",
        pointerEvents:"none", zIndex:2,
      }}/>

      {/* LEFT — text */}
      <div style={{
        display:"flex", flexDirection:"column", justifyContent:"center",
        padding:"120px clamp(28px,5vw,80px) 80px clamp(28px,5vw,80px)",
        position:"relative", zIndex:3,
      }}>
        {/* Location tags */}
        <div style={{ display:"flex", gap:"12px", flexWrap:"wrap", marginBottom:"40px", animation:"fadeUp 0.7s ease 0.1s both" }}>
          {["India", "Pakistan", "UAE"].map(loc => (
            <span key={loc} style={{
              display:"inline-flex", alignItems:"center", gap:"5px",
              fontFamily:"'Plus Jakarta Sans',sans-serif",
              fontSize:"10px", fontWeight:600, letterSpacing:"0.2em",
              textTransform:"uppercase",
              color:"rgba(184,137,42,0.85)",
              border:"1px solid rgba(184,137,42,0.25)",
              padding:"5px 12px",
              background:"rgba(184,137,42,0.06)",
            }}>
              <MapPin size={9}/> {loc}
            </span>
          ))}
        </div>

        <h1 style={{
          fontFamily:"'Playfair Display',serif", fontWeight:400,
          fontSize:"clamp(44px,5.5vw,76px)",
          lineHeight:1.05, letterSpacing:"-0.02em",
          color:"#FAFAF8",
          marginBottom:"28px",
          animation:"fadeUp 0.8s ease 0.2s both",
        }}>
          Where Global <br/>
          Ambition Meets<br/>
          <em style={{ color:"var(--gold-lt)" }}>Local Expertise</em>
        </h1>

        <p style={{
          fontFamily:"'Plus Jakarta Sans',sans-serif",
          fontSize:"clamp(14px,1.3vw,17px)", fontWeight:300, lineHeight:1.75,
          color:"rgba(250,250,248,0.6)",
          maxWidth:"420px", marginBottom:"44px",
          animation:"fadeUp 0.8s ease 0.35s both",
        }}>
          ARINTLS is a specialised market entry firm helping universities and
          businesses establish a credible, sustainable presence across South Asia.
        </p>

        <div style={{ display:"flex", gap:"14px", flexWrap:"wrap", animation:"fadeUp 0.8s ease 0.5s both" }}>
          <Link href="/services" className="btn-primary">
            Our Services <ArrowRight size={14}/>
          </Link>
          <Link href="/about" className="btn-outline-light">
            Our Story
          </Link>
        </div>

        {/* Stats row */}
        <div style={{
          display:"grid", gridTemplateColumns:"repeat(3,1fr)",
          gap:"0",
          marginTop:"60px",
          borderTop:"1px solid rgba(255,255,255,0.08)",
          paddingTop:"32px",
          animation:"fadeUp 0.8s ease 0.7s both",
        }}>
          {[
            { n:"20+", l:"University Partners" },
            { n:"7+",  l:"Years Experience" },
            { n:"4",   l:"Office Locations" },
          ].map((s,i) => (
            <div key={s.l} style={{ borderRight: i<2 ? "1px solid rgba(255,255,255,0.08)":"none", paddingRight: i<2?"20px":"0", paddingLeft: i>0?"20px":"0" }}>
              <div style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(28px,3vw,40px)", fontWeight:400, color:"#FAFAF8", lineHeight:1 }}>{s.n}</div>
              <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:"10px", fontWeight:600, letterSpacing:"0.18em", textTransform:"uppercase", color:"rgba(250,250,248,0.35)", marginTop:"6px" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT — 3D Globe */}
      <div style={{
        position:"relative", display:"flex",
        alignItems:"center", justifyContent:"center",
        padding:"76px 0 0",
        animation:"fadeIn 1.2s ease 0.3s both",
      }}>
        {/* Glow behind globe */}
        <div style={{
          position:"absolute", top:"50%", left:"50%",
          transform:"translate(-50%,-50%)",
          width:"500px", height:"500px", borderRadius:"50%",
          background:"radial-gradient(circle,rgba(11,79,108,0.35) 0%,transparent 70%)",
          filter:"blur(40px)", pointerEvents:"none",
        }}/>
        <div style={{ width:"100%", height:"100%", position:"relative", zIndex:1 }}>
          <Globe3D />
        </div>

        {/* Floating info card */}
        <div style={{
          position:"absolute", bottom:"14%", left:"-20px",
          background:"rgba(250,250,248,0.06)",
          backdropFilter:"blur(20px)",
          border:"1px solid rgba(250,250,248,0.12)",
          padding:"16px 20px", zIndex:10,
          animation:"slideLeft 0.8s ease 1.2s both",
        }}>
          <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:"9px", fontWeight:700, letterSpacing:"0.25em", textTransform:"uppercase", color:"var(--gold-lt)", marginBottom:"4px" }}>Market Presence</div>
          <div style={{ fontFamily:"'Playfair Display',serif", fontSize:"20px", fontWeight:400, color:"#FAFAF8", lineHeight:1.1 }}>South Asia<br/><em style={{fontSize:"14px", fontWeight:300, color:"rgba(250,250,248,0.5)"}}>India · Pakistan · UAE</em></div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position:"absolute", bottom:"28px", left:"50%", transform:"translateX(-50%)",
        display:"flex", flexDirection:"column", alignItems:"center", gap:"8px",
        zIndex:10, animation:"fadeIn 1s ease 1.5s both",
      }}>
        <span style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:"9px", fontWeight:600, letterSpacing:"0.25em", textTransform:"uppercase", color:"rgba(250,250,248,0.3)" }}>Scroll</span>
        <div style={{ width:"1px", height:"48px", background:"linear-gradient(to bottom,rgba(250,250,248,0.3),transparent)" }}/>
      </div>
    </section>
  );
}
