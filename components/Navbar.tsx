"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "About Us", href: "/about", children: [
    { label: "Our Story", href: "/about#story" },
    { label: "Mission & Vision", href: "/about#mission" },
    { label: "Our Advantages", href: "/about#advantages" },
  ]},
  { label: "Services", href: "/services", children: [
    { label: "Market Development", href: "/services#development" },
    { label: "Market Entry", href: "/services#entry" },
    { label: "Market Presence", href: "/services#presence" },
    { label: "Market Expansion", href: "/services#expansion" },
  ]},
  { label: "Clients", href: "/clients" },
  { label: "News & Insights", href: "/news" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string|null>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Hero is dark (navy) so nav text is always light on home until scrolled
  const darkNav = scrolled || !isHome;

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        height: "76px",
        display: "flex", alignItems: "center",
        padding: "0 clamp(20px,5vw,72px)",
        transition: "all 0.4s ease",
        background: darkNav ? "rgba(250,250,248,0.97)" : "transparent",
        backdropFilter: darkNav ? "blur(16px)" : "none",
        borderBottom: darkNav ? "1px solid rgba(15,25,35,0.08)" : "1px solid transparent",
        boxShadow: darkNav ? "0 1px 20px rgba(15,25,35,0.06)" : "none",
      }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration:"none", marginRight:"auto" }}>
          <div style={{ display:"flex", flexDirection:"column", gap:1 }}>
            <span style={{
              fontFamily:"'Playfair Display',serif", fontWeight:700,
              fontSize:"22px", letterSpacing:"0.06em",
              color: darkNav ? "var(--navy)" : "#FAFAF8",
              transition:"color 0.4s",
            }}>
              ARIN<span style={{ color:"var(--gold)" }}>TLS</span>
            </span>
            <span style={{
              fontFamily:"'Plus Jakarta Sans',sans-serif",
              fontSize:"8px", fontWeight:600, letterSpacing:"0.28em",
              textTransform:"uppercase",
              color: darkNav ? "var(--slate)" : "rgba(250,250,248,0.55)",
              transition:"color 0.4s",
            }}>
              Global Market Entry
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex" style={{ alignItems:"center", gap:"32px" }}>
          {navLinks.map(link => (
            <div key={link.href} style={{ position:"relative" }}
              onMouseEnter={() => link.children && setDropdown(link.label)}
              onMouseLeave={() => setDropdown(null)}
            >
              <Link href={link.href} style={{
                fontFamily:"'Plus Jakarta Sans',sans-serif",
                fontSize:"13px", fontWeight:500,
                color: darkNav
                  ? (pathname.startsWith(link.href) ? "var(--teal)" : "var(--slate)")
                  : (pathname.startsWith(link.href) ? "var(--gold-lt)" : "rgba(250,250,248,0.8)"),
                textDecoration:"none",
                display:"flex", alignItems:"center", gap:4,
                transition:"color 0.2s",
                paddingBottom:"4px",
                borderBottom: pathname.startsWith(link.href)
                  ? `1px solid ${darkNav ? "var(--teal)" : "var(--gold-lt)"}`
                  : "1px solid transparent",
              }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = darkNav ? "var(--navy)" : "#fff"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = darkNav
                ? (pathname.startsWith(link.href) ? "var(--teal)" : "var(--slate)")
                : (pathname.startsWith(link.href) ? "var(--gold-lt)" : "rgba(250,250,248,0.8)")}
              >
                {link.label}
                {link.children && <ChevronDown size={11} style={{ opacity:0.5 }} />}
              </Link>

              {link.children && dropdown === link.label && (
                <div style={{
                  position:"absolute", top:"calc(100%+14px)", left:"-12px",
                  background:"#FAFAF8",
                  border:"1px solid var(--border)",
                  boxShadow:"0 16px 48px rgba(15,25,35,0.12)",
                  minWidth:"200px", padding:"6px 0",
                  zIndex:100,
                }}>
                  <div style={{ position:"absolute", top:0, left:0, right:0, height:"2px", background:"var(--teal)" }} />
                  {link.children.map(c => (
                    <Link key={c.href} href={c.href} style={{
                      display:"block", padding:"10px 18px",
                      fontFamily:"'Plus Jakarta Sans',sans-serif",
                      fontSize:"12px", fontWeight:500,
                      color:"var(--slate)", textDecoration:"none",
                      transition:"all 0.2s",
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.color = "var(--teal)";
                      (e.currentTarget as HTMLElement).style.background = "rgba(11,79,108,0.04)";
                      (e.currentTarget as HTMLElement).style.paddingLeft = "24px";
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.color = "var(--slate)";
                      (e.currentTarget as HTMLElement).style.background = "transparent";
                      (e.currentTarget as HTMLElement).style.paddingLeft = "18px";
                    }}
                    >{c.label}</Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link href="/contact" className="btn-primary" style={{ marginLeft:"8px", padding:"10px 22px", fontSize:"12px" }}>
            Get Started
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}
          style={{ background:"none", border:"none", cursor:"pointer",
            color: darkNav ? "var(--navy)" : "#FAFAF8", padding:4 }}>
          {mobileOpen ? <X size={22}/> : <Menu size={22}/>}
        </button>
      </nav>

      {/* Mobile menu */}
      <div style={{
        position:"fixed", inset:0, zIndex:999,
        background:"var(--navy)",
        padding:"96px 36px 48px",
        display:"flex", flexDirection:"column", gap:"4px",
        transform: mobileOpen ? "translateX(0)" : "translateX(100%)",
        transition:"transform 0.4s cubic-bezier(0.16,1,0.3,1)",
      }}>
        {[...navLinks, { label:"Contact Us", href:"/contact", children:undefined }].map((link, i) => (
          <Link key={link.href} href={link.href} style={{
            fontFamily:"'Playfair Display',serif",
            fontSize:"clamp(26px,5vw,36px)", fontWeight:400,
            color:"rgba(250,250,248,0.85)",
            textDecoration:"none",
            borderBottom:"1px solid rgba(250,250,248,0.08)",
            paddingBottom:"20px", paddingTop:"16px",
            transition:"color 0.2s",
            animationDelay:`${i*60}ms`,
          }}
          onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "var(--gold-lt)"}
          onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(250,250,248,0.85)"}
          >{link.label}</Link>
        ))}
        <p style={{ marginTop:"auto", fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:"12px", color:"rgba(250,250,248,0.35)", letterSpacing:"0.1em" }}>
          hello@arintls.com
        </p>
      </div>
    </>
  );
}
