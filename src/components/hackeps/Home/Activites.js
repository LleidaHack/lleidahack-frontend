import React from "react";
import TitleGeneralized from "../TitleGeneralized/TitleGeneralized";
import ampolla from "src/assets/mapa-botella.png";
import banderaCreu from "src/assets/bandera.png";

const ActivitiesSection = () => {
  return (
    <div className="bg-secondaryHackeps w-full h-auto px-20 py-10 items-center flex flex-col">
      <div className="bg-background-events py-16 bg-contain bg-no-repeat w-full bg-center h-[50rem] flex flex-col items-center ">
        <TitleGeneralized padTop="0" underline>
          Activitats
        </TitleGeneralized>

        <div className="bg-illa bg-no-repeat bg-contain bg-center w-full min-h-[33rem]  flex flex-col items-center justify-center">
          Activitat 1: Hackathon
        </div>

        <img
          src={banderaCreu}
          alt="Bandera Creu Roja"
          className="h-[15rem] transfor translate-y-[-15rem] translate-x-[10rem] "
        />

        <img
          src={ampolla}
          alt="Botella del tresor"
          className="h-96 transform translate-y-[-25rem] translate-x-[-25rem] "
        />
      </div>
    </div>
  );
};

export default ActivitiesSection;
