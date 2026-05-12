"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const clients = [
  "University of Bradford","Falmouth University","University of Reading",
  "University of Otago","St. Mary's University","University of Vaasa",
  "JMC Academy","Education New Zealand","Domus Academy","IES Abroad",
  "University of Bradford","Falmouth University","University of Reading",
  "University of Otago","St. Mary's University","University of Vaasa",
  "JMC Academy","Education New Zealand","Domus Academy","IES Abroad",
];

const testimonials = [
  {
    quote: "ARINTLS gave us a credible, sustainable presence in India within months. Their transparency and accountability set them apart from every other partner we've worked with.",
    name: "Director of International Relations",
    org: "UK University Partner",
    initial: "D",
  },
  {
    quote: "The dedicated team model means we always have people on the ground who truly represent our institution's values. The results have exceeded our expectations.",
    name: "Head of Global Recruitment",
    org: "New Zealand University Partner",
    initial: "H",
  },
];

export default function ClientsSection() {
  return (
    <section style={{ background: "var(--white)", padding: "120px clamp(24px,5vw,80px)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: "56px" }}>
          <p className="label" style={{ marginBottom: "16px" }}>Trusted By</p>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "20px" }}>
            <h2 className="display" style={{ fontSize: "clamp(34px,4vw,56px)", color: "var(--navy)" }}>
              Our University<br/><em style={{ color: "var(--teal)" }}>Partners</em>
            </h2>
            <Link href="/clients" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              fontFamily: "'Plus Jakarta Sans',sans-serif",
              fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase",
              color: "var(--teal)", textDecoration: "none",
              borderBottom: "1px solid rgba(11,79,108,0.3)", paddingBottom: "3px",
            }}>
              All Clients <ArrowRight size={12}/>
            </Link>
          </div>
        </div>

        {/* Marquee */}
        <div style={{
          overflow: "hidden",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          padding: "22px 0", marginBottom: "80px",
          position: "relative",
        }}>
          <div style={{ position:"absolute",left:0,top:0,bottom:0,width:"80px",background:"linear-gradient(to right,var(--white),transparent)",zIndex:2,pointerEvents:"none" }}/>
          <div style={{ position:"absolute",right:0,top:0,bottom:0,width:"80px",background:"linear-gradient(to left,var(--white),transparent)",zIndex:2,pointerEvents:"none" }}/>
          <div style={{ display:"flex", width:"max-content", animation:"marquee 28s linear infinite" }}>
            {clients.map((c, i) => (
              <div key={i} style={{ display:"inline-flex", alignItems:"center", gap:"20px", padding:"0 28px", whiteSpace:"nowrap" }}>
                <span style={{
                  fontFamily:"'Playfair Display',serif", fontSize:"18px", fontWeight:400,
                  color:"rgba(15,25,35,0.3)",
                }}>{c}</span>
                <span style={{ width:"5px",height:"5px",borderRadius:"50%",background:"var(--gold)",opacity:0.5,flexShrink:0 }}/>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials + stat */}
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 340px", gap:"32px", alignItems:"start" }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{
              padding:"36px 32px",
              border:"1.5px solid var(--border)",
              background:"var(--off)",
              position:"relative",
            }}>
              <div style={{
                position:"absolute", top:0, left:0, right:0, height:"2px",
                background: i === 0 ? "var(--teal)" : "var(--gold)",
              }}/>
              <p style={{
                fontFamily:"'Instrument Serif',serif",
                fontStyle:"italic", fontSize:"17px", lineHeight:1.7,
                color:"var(--slate)", marginBottom:"28px",
              }}>
                "{t.quote}"
              </p>
              <div style={{ display:"flex", alignItems:"center", gap:"12px" }}>
                <div style={{
                  width:"36px",height:"36px",borderRadius:"50%",
                  background:"var(--teal)",
                  display:"flex",alignItems:"center",justifyContent:"center",
                  fontFamily:"'Plus Jakarta Sans',sans-serif",
                  fontWeight:700,fontSize:"14px",color:"#FAFAF8",
                }}>
                  {t.initial}
                </div>
                <div>
                  <p style={{ fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"12px",fontWeight:600,color:"var(--navy)" }}>{t.name}</p>
                  <p style={{ fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"11px",fontWeight:300,color:"var(--slate)" }}>{t.org}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Big stat */}
          <div style={{
            padding:"36px 32px",
            background:"var(--navy)",
            display:"flex",flexDirection:"column",justifyContent:"space-between",
            minHeight:"240px",
            position:"relative",overflow:"hidden",
          }}>
            <div style={{
              position:"absolute",top:"-40px",right:"-40px",
              width:"200px",height:"200px",borderRadius:"50%",
              background:"rgba(11,79,108,0.6)",filter:"blur(50px)",pointerEvents:"none",
            }}/>
            <div>
              <p style={{
                fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"9px",fontWeight:700,
                letterSpacing:"0.25em",textTransform:"uppercase",
                color:"rgba(184,137,42,0.85)",marginBottom:"8px",
              }}>Global Reach</p>
              <p style={{
                fontFamily:"'Playfair Display',serif",
                fontSize:"clamp(52px,6vw,80px)",fontWeight:400,
                color:"#FAFAF8",lineHeight:1,
              }}>20<span style={{color:"var(--gold-lt)"}}>+</span></p>
              <p style={{
                fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"12px",fontWeight:500,
                letterSpacing:"0.1em",textTransform:"uppercase",
                color:"rgba(250,250,248,0.45)",marginTop:"6px",
              }}>University Partners Globally</p>
            </div>
            <Link href="/clients" style={{
              display:"inline-flex",alignItems:"center",gap:"8px",
              fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"11px",fontWeight:600,
              letterSpacing:"0.12em",textTransform:"uppercase",
              color:"var(--gold-lt)",textDecoration:"none",
              borderBottom:"1px solid rgba(212,168,75,0.35)",paddingBottom:"3px",
              width:"fit-content",
            }}>
              View All <ArrowRight size={11}/>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
