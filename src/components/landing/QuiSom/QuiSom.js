import React from "react";
import juntaImg from "src/assets/img/junta.jpg";
import technicalImg from "src/assets/img/techmeetings.jpg";
import groupImg from "src/imgs/foto_grupal_colonies.jpg";

const stats = [
  { value: "2016", label: "Any de fundació" },
  { value: "+30", label: "Membres actius" },
  { value: "+10", label: "Editions HackEPS" },
  { value: "+250", label: "Participants anuals" },
];

const values = [
  {
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2L2 7L12 12L22 7L12 2Z"
          stroke="#FF7430"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 17L12 22L22 17"
          stroke="#FF7430"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 12L12 17L22 12"
          stroke="#FF7430"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Aprenentatge continu",
    desc: "Fomentem l'adquisició de nous coneixements tecnològics a través de workshops, hackathons i projectes col·laboratius.",
  },
  {
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
          stroke="#FF7430"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="9"
          cy="7"
          r="4"
          stroke="#FF7430"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13"
          stroke="#FF7430"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45768C17.623 10.1593 16.8604 10.6597 16 10.88"
          stroke="#FF7430"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Comunitat i col·laboració",
    desc: "Som una família d'estudiants que es donen suport mútuament i col·laboren amb altres associacions i empreses del sector.",
  },
  {
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
          stroke="#FF7430"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Innovació i creativitat",
    desc: "Impulsar la innovació tecnològica és el nostre motor, creant espais on la creativitat i la resolució de problemes reals prenen protagonisme.",
  },
  {
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          stroke="#FF7430"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 12H22"
          stroke="#FF7430"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z"
          stroke="#FF7430"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Impacte local i global",
    desc: "Des de Lleida, connectem estudiants amb el món tecnològic global, portant la HackEPS participants d'arreu d'Espanya i Europa.",
  },
];

const teamSections = [
  {
    title: "Junta directiva",
    desc: "L'equip que coordina i dóna forma a tots els projectes de l'associació, assegurant que la nostra missió es compleixi any rere any.",
    img: juntaImg,
    reverse: false,
  },
  {
    title: "Equip tècnic",
    desc: "Desenvolupadors, dissenyadors i entusiastes de la tecnologia que fan possible les plataformes, els esdeveniments i els reptes tècnics de la HackEPS.",
    img: technicalImg,
    reverse: true,
  },
];

const QuiSom = () => {
  return (
    <div className="w-full">
      {/* Hero banner */}
      <div
        className="relative flex items-center justify-center overflow-hidden"
        style={{
          minHeight: "340px",
          background: "linear-gradient(135deg, #FF7430 0%, #232323 100%)",
          paddingTop: "80px",
        }}
      >
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #fff 1px, transparent 1px), radial-gradient(circle at 80% 20%, #fff 1px, transparent 1px), radial-gradient(circle at 60% 80%, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative z-10 text-center px-6 py-12">
          <h1
            className="text-white font-bold tracking-tight mb-4"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              fontFamily: "'Inter', 'system-ui', sans-serif",
            }}
          >
            Qui som?
          </h1>
          <p
            className="max-w-2xl mx-auto leading-relaxed"
            style={{
              color: "rgba(255,255,255,0.85)",
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
            }}
          >
            Una associació d'estudiants que treballa per impulsar la tecnologia
            des de Lleida.
          </p>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-secondaryLanding py-10 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center">
              <span
                className="text-4xl md:text-5xl font-bold"
                style={{ color: "#FF7430" }}
              >
                {s.value}
              </span>
              <span className="text-CTALanding text-sm md:text-base mt-2 tracking-wide uppercase">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Missió */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <span
              className="text-sm font-semibold uppercase tracking-widest mb-3 block"
              style={{ color: "#FF7430" }}
            >
              La nostra missió
            </span>
            <h2
              className="text-4xl font-bold text-secondaryLanding mb-6 tracking-tight"
              style={{ lineHeight: "1.2" }}
            >
              Connectar estudiants amb el futur tecnològic
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              LleidaHack és una associació d'estudiants de la Universitat de
              Lleida fundada l'any 2016, amb la missió de promoure
              l'aprenentatge i l'ús de les noves tecnologies entre la comunitat
              universitària.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Any rere any, organitzem la{" "}
              <strong className="text-secondaryLanding">HackEPS</strong>,
              l'esdeveniment informàtic més gran de les terres de ponent, que
              aplega més de 150 participants d'arreu del món per resoldre reptes
              tecnològics reals en 24 hores.
            </p>
          </div>
          <div className="md:w-1/2 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={groupImg}
              alt="Grup LleidaHack"
              className="w-full h-72 md:h-80 object-cover"
            />
          </div>
        </div>
      </div>

      {/* Valors */}
      <div className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span
              className="text-sm font-semibold uppercase tracking-widest mb-3 block"
              style={{ color: "#FF7430" }}
            >
              El que ens defineix
            </span>
            <h2 className="text-4xl font-bold text-secondaryLanding tracking-tight">
              Els nostres valors
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex gap-4"
              >
                <div className="flex-shrink-0 mt-1">{v.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-secondaryLanding mb-2">
                    {v.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Equip */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-14">
          <span
            className="text-sm font-semibold uppercase tracking-widest mb-3 block"
            style={{ color: "#FF7430" }}
          >
            Les persones darrere
          </span>
          <h2 className="text-4xl font-bold text-secondaryLanding tracking-tight">
            El nostre equip
          </h2>
        </div>
        <div className="flex flex-col gap-12">
          {teamSections.map((section, i) => (
            <div
              key={i}
              className={`flex flex-col ${section.reverse ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-center`}
            >
              <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={section.img}
                  alt={section.title}
                  className="w-full object-cover"
                  style={{ height: "clamp(200px, 30vw, 288px)" }}
                />
              </div>
              <div className="w-full md:w-1/2">
                <h3
                  className="font-bold mb-4 tracking-tight"
                  style={{
                    color: "#FF7430",
                    fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  }}
                >
                  {section.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {section.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div
        className="py-16 px-6 text-center"
        style={{
          background: "linear-gradient(135deg, #FF7430 0%, #e55010 100%)",
        }}
      >
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
          Vols formar part de LleidaHack?
        </h2>
        <p
          className="text-white text-lg mb-8"
          style={{ color: "rgba(255,255,255,0.9)" }}
        >
          Ens encantaria comptar amb tu. Contacta'ns i t'expliquem com unir-te.
        </p>
        <a
          href="/contacte"
          className="inline-block bg-white text-primaryLanding font-bold px-8 py-4 rounded-xl text-lg hover:bg-gray-100 transition-colors duration-300 no-underline"
          style={{ color: "#FF7430" }}
        >
          Contacta'ns
        </a>
      </div>
    </div>
  );
};

export default QuiSom;
