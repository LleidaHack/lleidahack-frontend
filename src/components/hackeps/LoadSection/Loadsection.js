import React from "react";
import "src/components/hackeps/LoadSection/LoadSection.css";
import pato1 from "src/assets/pato-pirata 1@4x.png";
import pato2 from "src/assets/pato-pirata 2@4x.png";
import pato3 from "src/assets/pato-sirena@4x.png";
import ola from "src/assets/ola pero ola de ola no de hola.png";

const LoadSection = () => {
  return (
    <div className="w-full h-screen flex flex-col bg-primaryHackeps relative">
      
      {/* Cel amb els patos */}
      <div className="w-full h-[55vh] bg-backgroundDuck bg-cover bg-center flex flex-row items-end justify-center relative">
        <div className="flex flex-row gap-16 md:gap-24 transform translate-y-1/3 z-30">
          <img src={pato2} alt="Pato parche" className="w-12 md:w-16 h-auto duck-bounce-1" />
          <img src={pato3} alt="Pato sirena" className="w-12 md:w-16 h-auto duck-bounce-2" />
          <img src={pato1} alt="Pato gorro" className="w-12 md:w-16 h-auto duck-bounce-3" />
        </div>
      </div>

      {/* Mar amb loading bar */}
      <div className="w-full h-[45vh] bg-backgroundSea flex flex-col items-center justify-start z-20 relative">
        {/* Ola responsive */}
        <div className="w-full flex justify-center -mt-9 md:-mt-24 z-10 overflow-hidden">
          <img src={ola} alt="Ola de mar" className="w-full md:w-5/6 h-auto ola-movement" />
        </div>
        
        <div className="flex flex-col items-center gap-2 z-30 relative px-4">
          <div className="text-yellow-900 text-lg md:text-2xl font-medium">Loading</div>
          <div className="w-60 md:w-80 h-2 bg-gray-300 rounded-full overflow-hidden">
            <div className="h-full bg-progressBarColor rounded-full loading-bar-fill"></div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default LoadSection;