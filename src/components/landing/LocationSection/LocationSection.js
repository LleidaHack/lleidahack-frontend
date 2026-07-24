import React from "react";

const LocationSection = () => {
  return (
    <section className="py-24 px-6" style={{ background: "#fafafa" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <span
            className="text-sm font-semibold uppercase tracking-widest block mb-3"
            style={{ color: "#FF7430" }}
          >
            On som?
          </span>
          <h2
            className="text-4xl md:text-5xl font-extrabold tracking-tight"
            style={{ color: "#232323" }}
          >
            Basats a <span className="gradient-text">Lleida</span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-10 items-stretch">
          {/* Info cards */}
          <div className="md:w-2/5 flex flex-col gap-5">
            {/* Address card */}
            <div
              className="rounded-2xl p-6 flex gap-4 items-start"
              style={{
                background: "white",
                border: "1px solid #f0f0f0",
                boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
              }}
            >
              <div
                className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(255,116,48,0.12)" }}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FF7430"
                  strokeWidth="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <div
                  className="font-bold text-base mb-1"
                  style={{ color: "#232323" }}
                >
                  Escola Politècnica Superior
                </div>
                <div
                  className="text-sm leading-relaxed"
                  style={{ color: "#777" }}
                >
                  Carrer de Jaume II, 69
                  <br />
                  25001 Lleida, Catalunya
                </div>
              </div>
            </div>

            {/* University card */}
            <div
              className="rounded-2xl p-6 flex gap-4 items-start"
              style={{
                background: "white",
                border: "1px solid #f0f0f0",
                boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
              }}
            >
              <div
                className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(255,116,48,0.12)" }}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FF7430"
                  strokeWidth="2"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <div>
                <div
                  className="font-bold text-base mb-1"
                  style={{ color: "#232323" }}
                >
                  Universitat de Lleida
                </div>
                <div
                  className="text-sm leading-relaxed"
                  style={{ color: "#777" }}
                >
                  Associació vinculada a l'EPS · UdL
                  <br />
                  Integrada per estudiants de grau i màster
                </div>
              </div>
            </div>

            {/* Contact card */}
            <div
              className="rounded-2xl p-6 flex gap-4 items-start"
              style={{
                background: "white",
                border: "1px solid #f0f0f0",
                boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
              }}
            >
              <div
                className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(255,116,48,0.12)" }}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FF7430"
                  strokeWidth="2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <div
                  className="font-bold text-base mb-1"
                  style={{ color: "#232323" }}
                >
                  Contacte
                </div>
                <a
                  href="mailto:info@lleidahack.dev"
                  className="text-sm no-underline transition-colors duration-200"
                  style={{ color: "#FF7430" }}
                >
                  info@lleidahack.dev
                </a>
              </div>
            </div>

            {/* Social links */}
            <div className="rounded-2xl p-6" style={{ background: "#232323" }}>
              <div
                className="text-sm font-semibold mb-4"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                Segueix-nos
              </div>
              <div className="flex gap-4">
                {[
                  {
                    label: "LinkedIn",
                    href: "https://es.linkedin.com/company/lleidahack",
                    svg: (
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    ),
                  },
                  {
                    label: "Instagram",
                    href: "https://www.instagram.com/LleidaHack/?hl=es",
                    svg: (
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          ry="5"
                        />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    ),
                  },
                  {
                    label: "Twitter/X",
                    href: "https://twitter.com/lleidahack",
                    svg: (
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    ),
                  },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 rounded-xl flex items-center justify-center no-underline transition-all duration-200"
                    style={{
                      background: "rgba(255,255,255,0.1)",
                      color: "rgba(255,255,255,0.7)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#FF7430";
                      e.currentTarget.style.color = "white";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background =
                        "rgba(255,255,255,0.1)";
                      e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                    }}
                  >
                    {s.svg}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="md:w-3/5 w-full">
            <div
              className="w-full rounded-2xl overflow-hidden shadow-xl"
              style={{
                minHeight: "300px",
                height: "clamp(300px, 50vw, 450px)",
                border: "1px solid #f0f0f0",
              }}
            >
              <iframe
                title="Escola Politècnica Superior - Universitat de Lleida"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2982.1234567890!2d0.6260!3d41.6149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd13fffe7f5d6c69%3A0x4b5e5ee4b4b4b4b4!2sEscola%20Polit%C3%A8cnica%20Superior%20-%20Universitat%20de%20Lleida!5e0!3m2!1sca!2ses!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, display: "block", minHeight: "300px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
