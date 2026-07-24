import lleidaHackLogo from "../../../icons/imagotip_lleidahack_blanc.png";

const Footer = () => {
  return (
    <div
      className="w-full px-6 md:px-10 py-8"
      style={{ background: "#FF7430" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <a href="/lleidahack" className="flex-shrink-0">
          <img src={lleidaHackLogo} alt="LleidaHack" className="h-12 w-auto" />
        </a>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
          <a
            href="/lleidahack/legalinfo"
            className="no-underline font-medium transition-colors duration-200"
            style={{ color: "rgba(255,255,255,0.85)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "rgba(255,255,255,0.85)")
            }
          >
            Informació legal
          </a>
          <a
            href="/lleidahack/contacte"
            className="no-underline font-medium transition-colors duration-200"
            style={{ color: "rgba(255,255,255,0.85)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "rgba(255,255,255,0.85)")
            }
          >
            Contacte
          </a>
          <a
            href="/lleidahack/qui-som"
            className="no-underline font-medium transition-colors duration-200"
            style={{ color: "rgba(255,255,255,0.85)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "rgba(255,255,255,0.85)")
            }
          >
            Qui som?
          </a>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-4">
          <span
            className="text-sm hidden md:block"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            Segueix-nos
          </span>
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
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
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
              className="w-9 h-9 rounded-lg flex items-center justify-center no-underline transition-all duration-200"
              style={{ background: "rgba(255,255,255,0.15)", color: "white" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "rgba(255,255,255,0.3)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "rgba(255,255,255,0.15)")
              }
            >
              {s.svg}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="max-w-6xl mx-auto mt-6 pt-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.2)",
          color: "rgba(255,255,255,0.6)",
        }}
      >
        <span>
          © {new Date().getFullYear()} LleidaHack · Associació d'estudiants de
          la UdL
        </span>
        <span>Lleida, Catalunya 🇪🇸</span>
      </div>
    </div>
  );
};

export default Footer;
