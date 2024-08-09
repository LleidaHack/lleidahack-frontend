import React from "react";

const AboutUsHome = () => {
  return (
    <div className="w-full text-ellipsis	">
      <div>
        <h2 className="text-primaryLanding mt-12 ml-3 md:ml-12 text-5xl tracking-tight">
          Sobre Nosaltres
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-x-12 m-3 md:m-12">
        <div className="md:mb-0 mb-3">
          <h3 className="text-black font-bold tracking-tight mb-2 md:mb-7 text-3xl">
            Des del 2018
          </h3>
          <p className="text-black tracking-tight text-base md:text-xl">
            En els últims 8 anys, Lleidahack ha promogut l’ús de noves
            tecnologies, organitzant diversos esdeveniments relacionats amb el
            món de la<p>informàtica i la tecnologia.</p>
          </p>
        </div>

        <div className="md:mb-0 mb-3">
          <h3 className="text-black font-bold tracking-tight mb-2 md:mb-7 text-3xl">
            Més de 30 membres
          </h3>
          <p className="text-black tracking-tight text-base md:text-xl">
            Actualment, l’associació compta amb més de 30 membres, principalment
            estudiants de l’Escola Politècnica Superior de la Universitat de
            Lleida.
          </p>
        </div>

        <div className="md:mb-0 mb-3">
          <h3 className="text-black font-bold tracking-tight mb-2 md:mb-7 text-3xl">
            Passió per aprendre
          </h3>
          <p className="text-black tracking-tight text-base md:text-xl">
            L’objectiu de Lleidahack és fomentar l’aprenentatge i
            l’experimentació de les noves tecnologies entre els estudiants.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsHome;
