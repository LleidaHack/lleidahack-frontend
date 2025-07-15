import React from "react";
import "src/components/hackeps/LoadSection/LoadSection.css";
import pato1 from "src/assets/pato-pirata 1@4x.png";
import pato2 from "src/assets/pato-pirata 2@4x.png";
import pato3 from "src/assets/pato-sirena@4x.png";

const LoadSection = () => {
  return (
    <div className="w-full h-screen flex flex-col bg-primaryHackeps">
      {/* FONS AMB BACKGROUND + ÀNECS */}
      <div className="w-full h-[45%] bg-backgroundDuck bg-cover bg-center flex items-end justify-center">
        <div className="flex gap-8 pb-6">
          <img src={pato1} alt="Pato gorro" className="w-12 h-auto" />
          <img src={pato2} alt="Pato parche" className="w-12 h-auto" />
          <img src={pato3} alt="Pato sirena" className="w-12 h-auto" />
        </div>
      </div>

      {/* MAR — Només color blau de moment */}
      <div className="w-full h-[30%] bg-backgroundSea rounded-t-[60%]">
      </div>
    </div>
  );
};

export default LoadSection;