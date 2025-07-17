import React from "react";
import TitleGeneralized from "../TitleGeneralized/TitleGeneralized";

const ActivitiesSection = () => {
    return <div className="bg-secondaryHackeps w-full h-auto">
        <div className="bg-background-events w-full h-full flex flex-col">
            <TitleGeneralized padTop="0" underline>
                Activitats
            </TitleGeneralized>
            <img 
                src="/src/assets/illa.png" 
                alt="Illa Activitats" 
                className="w-full h-auto object-cover" 
            />
            <img 
                src="/src/assets/mapa-botella.png" 
                alt="Botella del tresor" 
                className="w-full h-auto object-cover"
            />
        </div>
    </div>;
};

export default ActivitiesSection;