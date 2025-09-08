import React from "react";
import "src/components/hackeps/LoadSection/LoadSection.css";
import pato1 from "src/assets/pato-pirata 1@4x.png";
import pato2 from "src/assets/pato-pirata 2@4x.png";
import pato3 from "src/assets/pato-sirena@4x.png";
import ola from "src/assets/ola pero ola de ola no de hola.png";

const LoadSection = () => {
  return (
    <div className="w-full h-screen flex flex-col bg-primaryHackeps overflow-x-hidden">
      
      <div className="w-full h-[55vh] bg-backgroundDuck bg-cover bg-center flex flex-row items-end justify-between">
        
        <div className="flex flex-row gap-24 transform translate-y-1/3 w-1/2 translate-x-48">
          <img src={pato2} alt="Pato parche" className="w-16 h-auto" />
          <img src={pato3} alt="Pato sirena" className="w-16 h-auto" />
          <img src={pato1} alt="Pato gorro" className="w-16 h-auto" />
        </div>
        
        <div className="flex justify-start transform translate-y-[61%] w-1/2">
          <img src={ola} alt="Ola de mar" className="w-4/6 h-auto ola-movement" />
        </div>
        
      </div>
             
      <div className="w-full h-[45vh] bg-backgroundSea flex items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <div className="text-yellow-900 text-2xl font-medium">Loading</div>
          <div className="w-80 h-2 bg-gray-300 rounded-full overflow-hidden">
            <div className="h-full bg-progressBarColor rounded-full loading-bar-fill"></div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default LoadSection;