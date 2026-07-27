import React from "react";
import hackersImg from "src/imgs/hackers_group.jpg";
import techImg from "src/assets/img/techmeetings.jpg";
import makerImg from "src/assets/img/workgroups.jpg";

const events = [
  {
    id: "hackeps",
    badge: "Anual · Novembre",
    badgeColor: "#FF7430",
    title: "HackEPS",
    subtitle: "L'hackathon flagship de LleidaHack",
    description:
      "24 hores de codi, creativitat i col·laboració. Més de 150 participants d'arreu del món s'uneixen per resoldre reptes tecnològics reals en l'Escola Politècnica Superior.",
    image: hackersImg,
    tags: ["Hackathon", "24h", "150+ participants"],
    ctaLabel: "Visita hackeps.dev",
    ctaHref: "https://hackeps.dev",
    external: true,
    accent: "#FF7430",
  },
  {
    id: "techmeetings",
    badge: "Mensual",
    badgeColor: "#6366f1",
    title: "TechMeetings",
    subtitle: "Xerrades tècniques i workshops",
    description:
      "Sessions mensuals on professionals i estudiants comparteixen coneixements sobre les últimes tecnologies, eines i metodologies del sector.",
    image: techImg,
    tags: ["Networking", "Workshops", "Open to all"],
    ctaLabel: "Saber més",
    ctaHref: "/contacte",
    external: false,
    accent: "#6366f1",
  },
  {
    id: "firamaker",
    badge: "Anual · Primavera",
    badgeColor: "#10b981",
    title: "Fira Maker",
    subtitle: "En col·laboració amb Makers Lleida",
    description:
      "La fira maker anual de la ciutat de Lleida on projectes de hardware, impressió 3D, electrònica i robòtica prenen vida davant del públic.",
    image: makerImg,
    tags: ["Maker", "Hardware", "Comunitat"],
    ctaLabel: "Saber més",
    ctaHref: "/contacte",
    external: false,
    accent: "#10b981",
  },
];

const EventsPreviewSection = () => {
  return (
    <section id="events" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <span
            className="text-sm font-semibold uppercase tracking-widest block mb-3"
            style={{ color: "#FF7430" }}
          >
            El que fem
          </span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2
              className="text-4xl md:text-5xl font-extrabold tracking-tight"
              style={{ color: "#232323" }}
            >
              Els nostres
              <br />
              <span className="gradient-text">esdeveniments</span>
            </h2>
            <p
              className="text-base md:text-lg max-w-sm md:text-right leading-relaxed"
              style={{ color: "#757575" }}
            >
              Organitzem events únics que connecten estudiants, professionals i
              la comunitat tech de Lleida.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((ev, i) => (
            <article
              key={ev.id}
              className="event-card rounded-2xl overflow-hidden bg-white flex flex-col"
              style={{
                border: "1px solid #f0f0f0",
                boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                animationDelay: `${i * 0.15}s`,
              }}
            >
              {/* Image */}
              <div
                className="relative overflow-hidden"
                style={{ height: "200px" }}
              >
                <img
                  src={ev.image}
                  alt={ev.title}
                  className="w-full h-full object-cover transition-transform duration-500"
                  style={{ transform: "scale(1)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
                {/* Overlay gradient */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)`,
                  }}
                />
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full text-white uppercase tracking-wide"
                    style={{ background: ev.badgeColor }}
                  >
                    {ev.badge}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                <h3
                  className="text-2xl font-bold mb-1"
                  style={{ color: "#232323" }}
                >
                  {ev.title}
                </h3>
                <p
                  className="text-sm font-medium mb-3"
                  style={{ color: ev.accent }}
                >
                  {ev.subtitle}
                </p>
                <p
                  className="text-sm leading-relaxed flex-1 mb-5"
                  style={{ color: "#6b7280" }}
                >
                  {ev.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {ev.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full font-medium"
                      style={{
                        background: `${ev.accent}15`,
                        color: ev.accent,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                {ev.external ? (
                  <a
                    href={ev.ctaHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm no-underline transition-all duration-200"
                    style={{ background: ev.accent, color: "white" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.opacity = "0.88")
                    }
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                  >
                    {ev.ctaLabel}
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
                  </a>
                ) : (
                  <a
                    href={ev.ctaHref}
                    className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm no-underline transition-all duration-200"
                    style={{
                      background: `${ev.accent}15`,
                      color: ev.accent,
                      border: `1.5px solid ${ev.accent}30`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = ev.accent;
                      e.currentTarget.style.color = "white";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = `${ev.accent}15`;
                      e.currentTarget.style.color = ev.accent;
                    }}
                  >
                    {ev.ctaLabel}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsPreviewSection;
