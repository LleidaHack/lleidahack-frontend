import logoLleidaHack from "../../../icons/isotip_lleidahack_blanc.png";
import logoTextLleidaHack from "../../../assets/img/logo_text_llh.svg";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Tanca el menú al canviar de ruta
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    {
      label: "HackEPS",
      href: "https://hackeps.dev",
      external: true,
      highlight: true,
    },
    { label: "Contacte", href: "/contacte", external: false },
    { label: "Qui som?", href: "/qui-som", external: false },
  ];

  const isActive = (href) =>
    location.pathname === href.replace("/lleidahack", "");

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "navbar-scrolled shadow-2xl" : "bg-transparent"
      }`}
      style={
        !scrolled
          ? { background: "rgba(35,35,35,0.6)", backdropFilter: "blur(8px)" }
          : {}
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="/lleidahack"
            className="flex items-center gap-3 flex-shrink-0"
          >
            <img
              src={logoLleidaHack}
              alt="LleidaHack logo"
              className="h-9 w-9"
            />
            <img
              src={logoTextLleidaHack}
              alt="LleidaHack"
              className="h-6 hidden sm:block"
            />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 no-underline"
                  style={{
                    background: "#FF7430",
                    color: "white",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#e55010")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "#FF7430")
                  }
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  {link.label}
                </a>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 no-underline relative group ${
                    isActive(link.href)
                      ? "text-white font-bold"
                      : "text-white opacity-80 hover:opacity-100"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-orange-400 transition-all duration-300 ${
                      isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                    style={{ backgroundColor: "#FF7430" }}
                  />
                </a>
              ),
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-64" : "max-h-0"}`}
        style={{
          background: "rgba(35,35,35,0.98)",
          backdropFilter: "blur(16px)",
        }}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 w-fit px-4 py-2 rounded-full text-sm font-semibold no-underline"
                style={{ background: "#FF7430", color: "white" }}
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                {link.label}
              </a>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className={`text-base font-medium no-underline transition-colors duration-200 ${
                  isActive(link.href) ? "font-bold" : "opacity-80"
                }`}
                style={{ color: isActive(link.href) ? "#FF7430" : "white" }}
              >
                {link.label}
              </a>
            ),
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
