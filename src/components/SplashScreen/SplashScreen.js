import React, { useEffect, useState } from "react";
import "./SplashScreen.css";
import logoSvg from "src/assets/logo_text_llh.svg";

export default function SplashScreen({ onFinish }) {
  const [phase, setPhase] = useState("logo"); // logo → text → subtitle → exit

  useEffect(() => {
    // Fase 1: logo llisca de dreta a centre (0ms → 1000ms)
    const t1 = setTimeout(() => setPhase("text"), 1000);
    // Fase 2: text "LleidaHack" apareix (1000ms → 1800ms)
    const t2 = setTimeout(() => setPhase("subtitle"), 1800);
    // Fase 3: subtítol apareix i es llegeix (1800ms → 5000ms)
    const t3 = setTimeout(() => setPhase("exit"), 5000);
    // Fase 4: splash fa fade-out i desapareix
    const t4 = setTimeout(() => onFinish(), 5800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onFinish]);

  return (
    <div className={`splash-root ${phase === "exit" ? "splash-exit" : ""}`}>
      {/* Paret de maons amb alternança clàssica */}
      <div className="splash-bricks" aria-hidden="true">
        {Array.from({ length: 15 }).map((_, rowIdx) => (
          <div
            key={rowIdx}
            className={`splash-brick-row${rowIdx % 2 === 1 ? " splash-brick-row--offset" : ""}`}
          >
            {Array.from({ length: 23 }).map((_, colIdx) => (
              <div key={colIdx} className="splash-brick" />
            ))}
          </div>
        ))}
      </div>

      {/* Overlay fosc suau */}
      <div className="splash-overlay" />

      {/* Contingut central */}
      <div className="splash-content">
        {/* Logo: llisca de dreta a centre */}
        <div className={`splash-logo-wrap ${phase !== "logo" ? "splash-logo-settled" : ""}`}>
          <img
            src={logoSvg}
            alt="LleidaHack logo"
            className="splash-logo"
          />
        </div>

        {/* Nom "LleidaHack" amb fade-in */}
        <h1
          className={`splash-title ${
            phase === "text" || phase === "subtitle" || phase === "exit"
              ? "splash-visible"
              : ""
          }`}
        >
          LleidaHack
        </h1>

        {/* Subtítol amb fade-in */}
        <p
          className={`splash-subtitle ${
            phase === "subtitle" || phase === "exit" ? "splash-visible" : ""
          }`}
        >
          10 anys donant suport a la comunitat tech
        </p>
      </div>
    </div>
  );
}
