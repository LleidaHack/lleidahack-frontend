import React from "react";
import groupImg from "src/imgs/foto_grupal_colonies.jpg";

const AboutUsHome = () => {
  return (
    <section className="py-24 px-6" style={{ background: "#fafafa" }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          {/* Image side */}
          <div className="md:w-1/2 relative">
            <div
              className="rounded-2xl overflow-hidden shadow-2xl"
              style={{ aspectRatio: "4/3" }}
            >
              <img
                src={groupImg}
                alt="Equip LleidaHack"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating accent card */}
            <div
              className="absolute -bottom-6 -right-6 hidden md:flex items-center gap-3 px-5 py-4 rounded-2xl shadow-xl"
              style={{ background: "#FF7430" }}
            >
              <div className="text-white">
                <div className="text-2xl font-extrabold leading-none">+10</div>
                <div className="text-xs opacity-80 mt-0.5 uppercase tracking-wide">
                  anys actius
                </div>
              </div>
              <div
                className="w-px self-stretch opacity-30"
                style={{ background: "white" }}
              />
              <div className="text-white">
                <div className="text-2xl font-extrabold leading-none">UdL</div>
                <div className="text-xs opacity-80 mt-0.5 uppercase tracking-wide">
                  Lleida
                </div>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="md:w-1/2">
            <span
              className="text-sm font-semibold uppercase tracking-widest block mb-3"
              style={{ color: "#FF7430" }}
            >
              Sobre nosaltres
            </span>
            <h2
              className="font-extrabold tracking-tight mb-6"
              style={{
                fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
                color: "#232323",
                lineHeight: "1.2",
              }}
            >
              Estudiant avui,
              <br />
              <span className="gradient-text">construint el futur</span>
            </h2>

            <p
              className="text-lg leading-relaxed mb-6"
              style={{ color: "#555" }}
            >
              LleidaHack és una associació d'estudiants de la Universitat de
              Lleida que des del 2016 promou l'aprenentatge i l'ús de les noves
              tecnologies.
            </p>

            <p
              className="text-base leading-relaxed mb-10"
              style={{ color: "#777" }}
            >
              Organitzem events, workshops i hackathons on la comunitat
              tecnològica de Lleida es reuneix per aprendre, col·laborar i
              créixer. Més de 30 membres actius conformen avui l'associació.
            </p>

            {/* Pillars */}
            <div className="flex flex-col gap-4">
              {[
                {
                  icon: "🚀",
                  title: "Innovació",
                  desc: "Impulsem projectes tecnològics reals",
                },
                {
                  icon: "🤝",
                  title: "Comunitat",
                  desc: "Connectem estudiants i professionals",
                },
                {
                  icon: "📚",
                  title: "Aprenentatge",
                  desc: "Formació pràctica i contínua",
                },
              ].map((p) => (
                <div key={p.title} className="flex items-center gap-4">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                    style={{ background: "rgba(255,116,48,0.1)" }}
                  >
                    {p.icon}
                  </div>
                  <div>
                    <div
                      className="font-semibold text-sm"
                      style={{ color: "#232323" }}
                    >
                      {p.title}
                    </div>
                    <div className="text-sm" style={{ color: "#888" }}>
                      {p.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="/lleidahack/qui-som"
              className="inline-flex items-center gap-2 mt-10 font-semibold text-sm no-underline transition-colors duration-200 group"
              style={{ color: "#FF7430" }}
            >
              Coneix l'equip
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsHome;
