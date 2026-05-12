"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutStrip() {
  return (
    <section style={{ background: "var(--navy)", padding: "120px clamp(24px,5vw,80px)", position: "relative", overflow: "hidden" }}>

      {/* Decorative geometric lines */}
      <div style={{ position:"absolute",top:0,right:0,bottom:0,width:"50%",pointerEvents:"none",opacity:0.04 }}>
        {[0,1,2,3,4].map(i => (
          <div key={i} style={{
            position:"absolute",
            top:`${i*25}%`, left:`${i*10}%`,
            right:0, height:"1px",
            background:"linear-gradient(to right, transparent, #FAFAF8)",
          }}/>
        ))}
      </div>

      <div style={{ maxWidth:"1280px", margin:"0 auto" }}>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"100px", alignItems:"center" }}>

          {/* Left */}
          <div>
            <p className="label-light" style={{ marginBottom:"16px" }}>Our Story</p>
            <h2 className="display" style={{ fontSize:"clamp(34px,4.5vw,60px)", color:"#FAFAF8", marginBottom:"28px" }}>
              Born From a Vision<br/>
              to <em style={{ color:"var(--gold-lt)" }}>Bridge Worlds</em>
            </h2>

            <p style={{ fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"15px",fontWeight:300,lineHeight:1.85,color:"rgba(250,250,248,0.55)",marginBottom:"18px" }}>
              ARINTLS emerged from the convergence of two proven forces — Asia's
              leading higher education market entry expertise and Pakistan's most
              trusted business implementation network.
            </p>
            <p style={{ fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"15px",fontWeight:300,lineHeight:1.85,color:"rgba(250,250,248,0.55)",marginBottom:"40px" }}>
              Together, we offer something neither could alone: complete,
              end-to-end market entry across the entire South Asian region —
              with the trust, accountability, and local knowledge to make it count.
            </p>

            <Link href="/about" className="btn-primary" style={{ display:"inline-flex" }}>
              Read Our Story <ArrowRight size={14}/>
            </Link>
          </div>

          {/* Right */}
          <div style={{ display:"flex", flexDirection:"column", gap:"24px" }}>

            {/* Quote */}
            <div style={{
              border:"1px solid rgba(250,250,248,0.1)",
              padding:"36px",
              background:"rgba(250,250,248,0.03)",
              backdropFilter:"blur(10px)",
              position:"relative",
            }}>
              <div style={{ position:"absolute",top:0,left:0,right:0,height:"2px",background:"linear-gradient(90deg,var(--gold),transparent)" }}/>
              <p style={{
                fontFamily:"'Instrument Serif',serif",
                fontStyle:"italic",fontSize:"18px",lineHeight:1.7,
                color:"rgba(250,250,248,0.7)",marginBottom:"24px",
              }}>
                "We are a young, dynamic company with one ambition — to become the
                most trusted market entry partner for global academic institutions
                expanding into South Asia."
              </p>
              <div style={{ display:"flex",alignItems:"center",gap:"12px" }}>
                <div style={{ width:"38px",height:"38px",borderRadius:"50%",background:"var(--gold)",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Playfair Display',serif",fontWeight:700,fontSize:"15px",color:"var(--navy)" }}>F</div>
                <div>
                  <p style={{ fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"12px",fontWeight:600,color:"rgba(250,250,248,0.85)",letterSpacing:"0.05em" }}>Founder & Director</p>
                  <p style={{ fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"11px",fontWeight:300,color:"rgba(250,250,248,0.4)" }}>ARINTLS</p>
                </div>
              </div>
            </div>

            {/* Stats 2x2 */}
            <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",border:"1px solid rgba(250,250,248,0.1)" }}>
              {[
                {v:"2018",l:"Founded"},
                {v:"2",l:"Countries"},
                {v:"30+",l:"Team Members"},
                {v:"4",l:"City Offices"},
              ].map((item,i) => (
                <div key={item.l} style={{
                  padding:"24px",
                  borderRight: i%2===0 ? "1px solid rgba(250,250,248,0.08)" : "none",
                  borderBottom: i<2 ? "1px solid rgba(250,250,248,0.08)" : "none",
                  textAlign:"center",
                }}>
                  <p style={{ fontFamily:"'Playfair Display',serif",fontSize:"clamp(28px,3vw,38px)",fontWeight:400,color:"#FAFAF8",lineHeight:1,marginBottom:"6px" }}>{item.v}</p>
                  <p style={{ fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"9px",fontWeight:600,letterSpacing:"0.22em",textTransform:"uppercase",color:"rgba(250,250,248,0.3)" }}>{item.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
