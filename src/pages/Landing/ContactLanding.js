import Navbar from "src/components/landing/Navbar/Navbar";
import Footer from "src/components/landing/Footer/Footer";
import ContactForm from "src/components/landing/ContactSections/ContactForm";

/* Info sidebar */
const ContactInfo = () => (
  <div className="flex flex-col gap-6">
    {/* Header text */}
    <div>
      <span
        className="text-sm font-semibold uppercase tracking-widest block mb-3"
        style={{ color: "#FF7430" }}
      >
        Contacta'ns
      </span>
      <h1
        className="font-extrabold tracking-tight mb-4"
        style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", color: "#232323", lineHeight: 1.2 }}
      >
        Parlem!
      </h1>
      <p className="text-base leading-relaxed" style={{ color: "#666" }}>
        Tens alguna pregunta, vols col·laborar o simplement vols saber més sobre
        LleidaHack? Escriu-nos i et respondrem el més aviat possible.
      </p>
    </div>

    {/* Contact items */}
    <div className="flex flex-col gap-4 mt-2">
      {[
        {
          icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF7430" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          ),
          label: "Correu electrònic",
          value: "info@lleidahack.dev",
          href: "mailto:info@lleidahack.dev",
        },
        {
          icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF7430" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          ),
          label: "Ubicació",
          value: "Escola Politècnica Superior, Lleida",
          href: "https://maps.google.com/?q=Escola+Politècnica+Superior+Lleida",
        },
        {
          icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF7430" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
          ),
          label: "Temps de resposta",
          value: "Normalment en menys de 48h",
          href: null,
        },
      ].map((item) => (
        <div
          key={item.label}
          className="flex items-start gap-4 p-4 rounded-2xl"
          style={{ background: "white", border: "1px solid #f0f0f0", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}
        >
          <div
            className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: "rgba(255,116,48,0.1)" }}
          >
            {item.icon}
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider mb-0.5" style={{ color: "#aaa" }}>
              {item.label}
            </p>
            {item.href ? (
              <a
                href={item.href}
                className="text-sm font-medium no-underline transition-colors duration-200"
                style={{ color: "#232323" }}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              >
                {item.value}
              </a>
            ) : (
              <p className="text-sm font-medium" style={{ color: "#232323" }}>{item.value}</p>
            )}
          </div>
        </div>
      ))}
    </div>

    {/* Social links */}
    <div
      className="rounded-2xl p-5"
      style={{ background: "#232323" }}
    >
      <p className="text-xs font-medium uppercase tracking-wider mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>
        Segueix-nos
      </p>
      <div className="flex gap-3">
        {[
          { label: "LinkedIn", href: "https://es.linkedin.com/company/lleidahack",
            svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg> },
          { label: "Instagram", href: "https://www.instagram.com/LleidaHack/?hl=es",
            svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
          { label: "Twitter/X", href: "https://twitter.com/lleidahack",
            svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
        ].map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            aria-label={s.label}
            className="w-10 h-10 rounded-xl flex items-center justify-center no-underline transition-all duration-200"
            style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.7)" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#FF7430"; e.currentTarget.style.color = "white"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "rgba(255,255,255,0.7)"; }}
          >
            {s.svg}
          </a>
        ))}
      </div>
    </div>
  </div>
);

const ContactLanding = () => {
  return (
    <div id="ContactLanding" style={{ minHeight: "100vh", background: "#fafafa" }}>
      <Navbar />

      {/* Page hero */}
      <div
        className="relative pt-32 pb-16 px-6 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #232323 0%, #1a1a1a 100%)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 80% 50%, rgba(255,116,48,0.18) 0%, transparent 60%)" }}
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <span
            className="text-sm font-semibold uppercase tracking-widest block mb-4"
            style={{ color: "#FF7430" }}
          >
            LleidaHack
          </span>
          <h2
            className="font-extrabold text-white tracking-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", lineHeight: 1.15 }}
          >
            Contacte
          </h2>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

          {/* Left: info */}
          <div className="w-full lg:w-2/5 lg:sticky lg:top-28">
            <ContactInfo />
          </div>

          {/* Right: form */}
          <div className="w-full lg:w-3/5">
            <div
              className="rounded-2xl p-6 sm:p-10"
              style={{
                background: "white",
                border: "1px solid #f0f0f0",
                boxShadow: "0 8px 40px rgba(0,0,0,0.07)",
              }}
            >
              <h2
                className="text-xl font-bold mb-1"
                style={{ color: "#232323" }}
              >
                Envia'ns un missatge
              </h2>
              <p className="text-sm mb-8" style={{ color: "#9ca3af" }}>
                Tots els camps marcats amb{" "}
                <span style={{ color: "#FF7430" }}>*</span>{" "}
                són obligatoris.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactLanding;
