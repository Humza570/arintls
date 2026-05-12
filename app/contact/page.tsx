export default function StubPage() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", paddingTop: "80px" }}>
      <div style={{ textAlign: "center" }}>
        <p style={{ fontFamily: "'Syne', sans-serif", fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "16px" }}>Coming Soon</p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(40px,6vw,80px)", fontWeight: 300, color: "var(--cream)" }}>Page Under Construction</h1>
        <p style={{ color: "var(--muted)", marginTop: "16px", fontFamily: "'DM Sans', sans-serif", fontSize: "14px" }}>This page is being built. Check back soon.</p>
      </div>
    </div>
  );
}
