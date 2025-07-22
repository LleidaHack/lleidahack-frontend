import React from "react";
import TitleGeneralized from "../TitleGeneralized/TitleGeneralized";
import illaMarro from "src/assets/illa.png"
import ampolla from "src/assets/mapa-botella.png"

const ActivitiesSection = () => {
    return (
    <div className="bg-secondaryHackeps w-full h-auto px-20 py-10 items-center flex flex-col">
        <div className="bg-background-events py-16 bg-contain bg-no-repeat w-full bg-center h-[50rem] flex flex-col items-center ">
            <TitleGeneralized padTop="0" underline>
                Activitats
            </TitleGeneralized>
            <img 
                src={illaMarro} 
                alt="Illa Activitats" 
                className=" h-[32rem]" 
            />
            <img 
                src={ampolla}
                alt="Botella del tresor" 
                className="h-96 transform translate-y-[-10rem] translate-x-[-23rem] "
            />
        </div>
    </div>
    );
};

export default ActivitiesSection;