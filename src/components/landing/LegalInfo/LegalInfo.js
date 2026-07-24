import React from "react";

const sections = [
  {
    title: "Política de privadesa",
    content: `La present Política de Privadesa estableix els termes en què LleidaHack usa i protegeix la informació que és proporcionada pels seus usuaris al moment d'utilitzar el seu lloc web. Aquesta companyia està compromesa amb la seguretat de les dades dels seus usuaris. Quan li demanem omplir els camps d'informació personal amb la qual vostè pugui ser identificat, ho fem assegurant que només s'emprarà d'acord amb els termes d'aquest document. No obstant això, aquesta Política de Privadesa pot canviar amb el temps o ser actualitzada pel que li recomanem i emfatitzem revisar contínuament aquesta pàgina per a assegurar-se que està d'acord amb aquests canvis.`,
  },
  {
    title: "Informació que és recollida",
    content: `El nostre lloc web podrà recollir informació personal per exemple: Nom, informació de contacte com la seva adreça de correu electrònic i informació demogràfica.`,
  },
  {
    title: "Ús de la informació recollida",
    content: `El nostre lloc web fa servir la informació amb la finalitat de proporcionar el millor servei possible, particularment per a mantenir un registre d'usuaris, de comandes en cas que aplicació, i millorar els nostres productes i serveis. És possible que siguin enviats correus electrònics periòdicament a través del nostre lloc amb ofertes especials, nous productes i una altra informació publicitària que considerem rellevant per a vostè o que pugui brindar-li algun benefici, aquests correus electrònics seran enviats a l'adreça que vostè proporcioni i podran ser cancel·lats en qualsevol moment. LleidaHack està altament compromès per a complir amb el compromís de mantenir la seva informació segura. Usem els sistemes més avançats i els actualitzem constantment per a assegurar-nos que no existeixi cap accés no autoritzat.`,
  },
  {
    title: "Política de Cookies",
    content: `Una cookie es refereix a un fitxer que és enviat amb la finalitat de sol·licitar permís per a emmagatzemar-se en el seu ordinador, en acceptar aquest fitxer es crea i la cookie serveix llavors per a tenir informació respecte al trànsit web, i també facilita les futures visites a una web recurrent. Una altra funció que tenen les cookies és que amb elles les webs poden reconèixer-te individualment i, per tant, brindar-te el millor servei personalitzat del seu web. El nostre lloc web empra les cookies per a poder identificar les pàgines que són visitades i la seva freqüència. Aquesta informació és usada únicament per a anàlisi estadística i després la informació s'elimina de manera permanent. Vostè pot eliminar les cookies en qualsevol moment des del seu ordinador.`,
  },
  {
    title: "Enllaços a tercers",
    content: `Aquest lloc web pot contenir enllaços a altres llocs que poguessin ser del seu interès. Una vegada que vostè faci clic en aquests enllaços i abandoni la nostra pàgina, ja no tenim control sobre el lloc al qual és redirigit i, per tant, no som responsables dels termes o privacitat ni de la protecció de les seves dades en aquests altres llocs tercers. Aquests llocs estan subjectes a les seves pròpies polítiques de privadesa per la qual cosa és recomanable que els consulti per a confirmar que vostè està d'acord amb aquestes.`,
  },
  {
    title: "Control de la seva informació personal",
    content: `En qualsevol moment vostè pot restringir la recopilació o l'ús de la informació personal que és proporcionada al nostre lloc web. Cada vegada que se li sol·liciti emplenar un formulari, com el d'alta d'usuari, pot marcar o desmarcar l'opció de rebre informació per correu electrònic. En cas que hagi marcat l'opció de rebre el nostre butlletí o publicitat vostè pot cancel·lar-la en qualsevol moment. Aquesta companyia no vendrà, cedirà ni distribuirà la informació personal que és recopilada sense el seu consentiment, tret que sigui requerit per un jutge amb un ordre judicial. LleidaHack es reserva el dret de canviar els termes de la present Política de Privacitat en qualsevol moment.`,
  },
];

const LegalInfo = () => {
  return (
    <div style={{ minHeight: "100vh", background: "#fafafa" }}>
      {/* Hero */}
      <div
        className="relative pt-32 pb-16 px-4 sm:px-6 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #232323 0%, #1a1a1a 100%)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 80% 50%, rgba(255,116,48,0.18) 0%, transparent 60%)" }}
        />
        <div className="max-w-4xl mx-auto relative z-10">
          <span
            className="text-sm font-semibold uppercase tracking-widest block mb-4"
            style={{ color: "#FF7430" }}
          >
            LleidaHack
          </span>
          <h1
            className="font-extrabold text-white tracking-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", lineHeight: 1.15 }}
          >
            Informació legal
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="flex flex-col gap-12">
          {sections.map((s, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 sm:p-8"
              style={{
                background: "white",
                border: "1px solid #f0f0f0",
                boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
              }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-white"
                  style={{ background: "#FF7430" }}
                >
                  {i + 1}
                </div>
                <h2
                  className="font-bold leading-tight"
                  style={{ color: "#232323", fontSize: "clamp(1.1rem, 2vw, 1.3rem)" }}
                >
                  {s.title}
                </h2>
              </div>
              <p
                className="text-sm sm:text-base leading-relaxed text-justify"
                style={{ color: "#555", paddingLeft: "3rem" }}
              >
                {s.content}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-10 text-center">
          <p className="text-sm" style={{ color: "#aaa" }}>
            Per qualsevol dubte, pots contactar amb nosaltres a{" "}
            <a href="mailto:info@lleidahack.dev" className="no-underline font-medium" style={{ color: "#FF7430" }}>
              info@lleidahack.dev
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LegalInfo;
