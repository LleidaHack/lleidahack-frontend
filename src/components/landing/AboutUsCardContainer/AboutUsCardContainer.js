import React from "react";
import AboutUsLleidaHackerCard from "../AboutUsLleidaHackerCard/AboutUsLleidaHackerCard";
import { getLleidaHackerGroupById } from "src/services/LleidaHackerGroupService";

const juntaMembers = [getLleidaHackerGroupById(1)];
const CapsEquips = [getLleidaHackerGroupById(2)];
/* const Developers = [getLleidaHackerGroupById(3)];
const Contactes = [getLleidaHackerGroupById(4)];
const Marketing = [getLleidaHackerGroupById(5)];
const Techmeeting = [getLleidaHackerGroupById(6)];
parlar amb marketing de com ordenar això */

const AboutUsCardContainer = () => {
    return(
        <div>
            <div className="flex flex-col mt-10 w-full text-center justify-center">
                <div className=" center align-center flex justify-center">
                    <div className="w-6/12 border-2 border-primaryLanding rounded-lg" />
                </div>

                <div className="junta mt-10">
                    <h1 className="font-bold text-5xl">JUNTA </h1>
                    <div className="flex flex-row flex-wrap gap-4 justify-center mt-10 mb-10">
                        {juntaMembers.map((lleidahacker) => (
                            <AboutUsLleidaHackerCard key={lleidahacker.name} bgcolor={"primaryLanding"}  image={lleidahacker.image} name={lleidahacker.name} github={lleidahacker.github} linkedIn={lleidahacker.linkedIn} role={lleidahacker.role}/>
                        ))}
                    </div>
                </div>

                <div className="caps mt-10">
                    <h1 className="font-bold text-5xl">CAPS D'EQUIP </h1>
                    <div className="flex flex-row flex-wrap gap-4 justify-center mt-10 mb-10">
                        {CapsEquips.map((lleidahacker) => (
                            <AboutUsLleidaHackerCard key={lleidahacker.name} bgcolor={"primaryLanding"} image={lleidahacker.image} name={lleidahacker.name} github={lleidahacker.github} linkedIn={lleidahacker.linkedIn} role={lleidahacker.role}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsCardContainer;