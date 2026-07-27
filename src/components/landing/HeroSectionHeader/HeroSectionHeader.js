import React, { useEffect, useState } from "react";
import logo from "src/assets/img/logo_text_llh.svg";
import heroImg from "src/imgs/hackers_group.jpg";

const HeroSectionHeader = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImg})`, transform: "scale(1.05)" }}
      />

      {/* Gradient overlay: dark left, orange right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(20,20,20,0.92) 0%, rgba(35,35,35,0.80) 50%, rgba(255,116,48,0.55) 100%)",
        }}
      />

      {/* Decorative orange circle blur */}
      <div
        className="absolute -bottom-32 -right-32 rounded-full opacity-20"
        style={{
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, #FF7430 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-start justify-center min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 max-w-6xl mx-auto"
        style={{ paddingBottom: "200px", paddingTop: "96px" }}
      >
        <div
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease-out",
          }}
        >
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-sm font-medium"
            style={{
              background: "rgba(255,116,48,0.2)",
              border: "1px solid rgba(255,116,48,0.4)",
              color: "#FF9A6C",
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: "#FF7430" }}
            />
            Associació d'estudiants · Universitat de Lleida · Des del 2016
          </div>

          {/* Logo */}
          <img src={logo} alt="LleidaHack" className="h-12 md:h-16 mb-6" />

          {/* Headline */}
          <h1
            className="text-white font-extrabold leading-tight mb-6"
            style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", maxWidth: "700px" }}
          >
            La comunitat
            <br />
            <span className="gradient-text">tecnològica</span>
            <br />
            de Lleida
          </h1>

          {/* Subtext */}
          <p
            className="mb-10 leading-relaxed"
            style={{
              color: "rgba(255,255,255,0.75)",
              fontSize: "1.1rem",
              maxWidth: "520px",
            }}
          >
            Impulsem l'aprenentatge, la innovació i els events tecnològics des
            de l'Escola Politècnica Superior. Any rere any construïm el futur
            digital de Lleida.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#events"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white no-underline transition-all duration-200 hover:shadow-lg"
              style={{
                background: "#FF7430",
                boxShadow: "0 4px 20px rgba(255,116,48,0.4)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#e55010";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#FF7430";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Descobreix els events
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>

            <a
              href="/contacte"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold no-underline transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "1.5px solid rgba(255,255,255,0.3)",
                color: "white",
                backdropFilter: "blur(8px)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.2)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Contacta'ns
            </a>
          </div>
        </div>

        {/* Stats strip inside hero */}
        <div
          className="absolute bottom-0 left-0 right-0 px-6 md:px-16 lg:px-24 py-6"
          style={{
            background: "rgba(0,0,0,0.5)",
            backdropFilter: "blur(12px)",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            opacity: loaded ? 1 : 0,
            transition: "opacity 1.2s ease-out 0.4s",
          }}
        >
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
            {[
              { value: "2016", label: "Any de fundació" },
              { value: "+30", label: "Membres actius" },
              { value: "+10", label: "Edicions HackEPS" },
              { value: "+250", label: "Participants anuals" },
            ].map((s) => (
              <div key={s.label}>
                <div className="stat-number">{s.value}</div>
                <div
                  className="text-xs md:text-sm mt-1 uppercase tracking-widest"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-28 right-10 hidden md:flex flex-col items-center gap-2 scroll-indicator">
        <span
          className="text-xs tracking-widest"
          style={{ color: "rgba(255,255,255,0.4)", writingMode: "vertical-rl" }}
        >
          scroll
        </span>
        <div
          className="w-px h-12"
          style={{ background: "rgba(255,116,48,0.5)" }}
        />
      </div>
    </div>
  );
};

export default HeroSectionHeader;
