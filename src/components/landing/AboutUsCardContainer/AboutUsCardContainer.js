import React from "react";
import AboutUsLleidaHackerCard from "../AboutUsLleidaHackerCard/AboutUsLleidaHackerCard";
import { getLleidaHackerGroupById } from "src/services/LleidaHackerGroupService";

const juntaMembers = [getLleidaHackerGroupById(1)];
const CapsEquips = [getLleidaHackerGroupById(2)];
const Contactes = [getLleidaHackerGroupById(4)];
const Developers = [getLleidaHackerGroupById(3)];
const Marketing = [getLleidaHackerGroupById(5)];
const Techmeetings = [getLleidaHackerGroupById(6)];

const isSmall = true;

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
                            <AboutUsLleidaHackerCard key={lleidahacker.id} bgcolor={"primaryLanding"}  image={lleidahacker.image} name={lleidahacker.name} github={lleidahacker.github} linkedIn={lleidahacker.linkedIn} role={lleidahacker.role}/>
                        ))}
                        <AboutUsLleidaHackerCard bgcolor={"primaryLanding"} name="Òscar van de Crommert Rodoreda" github="//github.com/naimsg16" linkedIn="linkedin.com" role="President" />
                        <AboutUsLleidaHackerCard bgcolor={"primaryLanding"} name="Naïm Saadi Gallego" github="//github.com/naimsg16" linkedIn="linkedin.com" role="Secretari" />
                    </div>
                </div>

                <div className="caps mt-10">
                    <h1 className="font-bold text-5xl">CAPS D'EQUIP </h1>
                    <div className="flex flex-row flex-wrap gap-4 justify-center mt-10 mb-10">
                        {CapsEquips.map((lleidahacker) => (
                            <AboutUsLleidaHackerCard key={lleidahacker.id} bgcolor={"primaryLanding"} image={lleidahacker.image} name={lleidahacker.name} github={lleidahacker.github} linkedIn={lleidahacker.linkedIn} role={lleidahacker.role}/>
                        ))}
                        <AboutUsLleidaHackerCard bgcolor={"primaryLanding"} name="Naïm Saadi Gallego" github="//github.com/naimsg16" linkedIn="linkedin.com" role="Secretari" />
                        <AboutUsLleidaHackerCard bgcolor={"primaryLanding"} name="Naïm Saadi Gallego" github="//github.com/naimsg16" linkedIn="linkedin.com" role="Secretari" />
                        <AboutUsLleidaHackerCard bgcolor={"primaryLanding"} name="Naïm Saadi Gallego" github="//github.com/naimsg16" linkedIn="linkedin.com" role="Secretari" />
                        <AboutUsLleidaHackerCard bgcolor={"primaryLanding"} name="Naïm Saadi Gallego" github="//github.com/naimsg16" linkedIn="linkedin.com" role="Secretari" />
                        <AboutUsLleidaHackerCard bgcolor={"primaryLanding"} name="Naïm Saadi Gallego" github="//github.com/naimsg16" linkedIn="linkedin.com" role="Secretari" />
                    </div>
                </div>

                <div className="membres mt-10">
                    <h1 className="font-bold text-5xl">MEMBRES </h1>
                    <div className="flex flex-row flex-wrap gap-2 justify-center mt-10 mb-10 ">
                    <AboutUsLleidaHackerCard bgcolor={"primaryLanding"} small name="Naïm Saadi Gallego" github="//github.com/naimsg16" linkedIn="linkedin.com" role="Secretari" />
                        <AboutUsLleidaHackerCard bgcolor={"primaryLanding"} small name="Naïm Saadi Gallego" github="//github.com/naimsg16" linkedIn="linkedin.com" role="Secretari" />
                        <AboutUsLleidaHackerCard bgcolor={"primaryLanding"} small name="Naïm Saadi Gallego" github="//github.com/naimsg16" linkedIn="linkedin.com" role="Secretari" />
                        <AboutUsLleidaHackerCard bgcolor={"primaryLanding"} small name="Naïm Saadi Gallego" github="//github.com/naimsg16" linkedIn="linkedin.com" role="Secretari" />
                        <AboutUsLleidaHackerCard bgcolor={"primaryLanding"} small name="Naïm Saadi Gallego" github="//github.com/naimsg16" linkedIn="linkedin.com" role="Secretari" />
                        {Contactes.map((lleidahacker) => (
                            <AboutUsLleidaHackerCard key={lleidahacker.id} small bgcolor={"primaryLanding"} image={lleidahacker.image} name={lleidahacker.name} github={lleidahacker.github} linkedIn={lleidahacker.linkedIn} role={lleidahacker.role}/>
                        ))}
                        {Developers.map((lleidahacker) => (
                            <AboutUsLleidaHackerCard key={lleidahacker.id} small bgcolor={"primaryLanding"} image={lleidahacker.image} name={lleidahacker.name} github={lleidahacker.github} linkedIn={lleidahacker.linkedIn} role={lleidahacker.role}/>
                        ))}
                        {Marketing.map((lleidahacker) => (
                            <AboutUsLleidaHackerCard key={lleidahacker.id} small bgcolor={"primaryLanding"} image={lleidahacker.image} name={lleidahacker.name} github={lleidahacker.github} linkedIn={lleidahacker.linkedIn} role={lleidahacker.role}/>
                        ))}
                        {Techmeetings.map((lleidahacker) => (
                            <AboutUsLleidaHackerCard key={lleidahacker.id} small bgcolor={"primaryLanding"} image={lleidahacker.image} name={lleidahacker.name} github={lleidahacker.github} linkedIn={lleidahacker.linkedIn} role={lleidahacker.role}/>
                        ))}
                        {Techmeetings.map((lleidahacker) => (
                            <AboutUsLleidaHackerCard key={lleidahacker.id} small bgcolor={"primaryLanding"} image={lleidahacker.image} name={lleidahacker.name} github={lleidahacker.github} linkedIn={lleidahacker.linkedIn} role={lleidahacker.role}/>
                        ))}
                        {Techmeetings.map((lleidahacker) => (
                            <AboutUsLleidaHackerCard key={lleidahacker.id} small bgcolor={"primaryLanding"} image={lleidahacker.image} name={lleidahacker.name} github={lleidahacker.github} linkedIn={lleidahacker.linkedIn} role={lleidahacker.role}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsCardContainer;