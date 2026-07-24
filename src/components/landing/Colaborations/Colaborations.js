import React from "react";

const collaborators = [
  {
    name: "Consell d'Estudiants UdL",
    desc: "Treballem conjuntament per representar els interessos dels estudiants de la Universitat de Lleida.",
    emoji: "🎓",
    color: "#3b82f6",
  },
  {
    name: "Makers Lleida",
    desc: "Co-organitzadors de la Fira Maker anual, un espai de creació i innovació obert a tota la comunitat.",
    emoji: "🔧",
    color: "#10b981",
  },
  {
    name: "First Lego League",
    desc: "Donem suport a l'EPS en l'organització d'aquesta competició de robòtica per a joves estudiants.",
    emoji: "🤖",
    color: "#f59e0b",
  },
];

const Colaborations = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="text-sm font-semibold uppercase tracking-widest block mb-3"
            style={{ color: "#FF7430" }}
          >
            Treballem junts
          </span>
          <h2
            className="text-4xl md:text-5xl font-extrabold tracking-tight"
            style={{ color: "#232323" }}
          >
            Col·laboradors
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collaborators.map((c) => (
            <div
              key={c.name}
              className="rounded-2xl p-8 transition-all duration-300 group"
              style={{
                background: "white",
                border: "1px solid #f0f0f0",
                boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 20px 50px rgba(0,0,0,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.05)";
              }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5"
                style={{ background: `${c.color}15` }}
              >
                {c.emoji}
              </div>
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: "#232323" }}
              >
                {c.name}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#777" }}>
                {c.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom text */}
        <p className="text-center mt-12 text-base" style={{ color: "#aaa" }}>
          Vols col·laborar amb LleidaHack?{" "}
          <a
            href="/lleidahack/contacte"
            className="no-underline font-semibold transition-colors duration-200"
            style={{ color: "#FF7430" }}
          >
            Contacta'ns →
          </a>
        </p>
      </div>
    </section>
  );
};

export default Colaborations;
