import React from "react";

const AboutUsHome = () => {
    return(
        <div>
            <div>
                <h2 className="text-primaryLanding mt-12 ml-12 text-5xl tracking-tight">Sobre Nosaltres</h2>
            </div>

            <div className="flex flex-row gap-x-12 m-12">

                <div>
                    <h3 className="text-black font-bold tracking-tight mb-7 text-3xl">Des del 2018</h3>
                    <p className="text-black tracking-tight text-xl">En els últims 8 anys, Lleidahack ha promogut l’ús de noves tecnologies, organitzant diversos esdeveniments relacionats amb el món de la<p>informàtica i la tecnologia.</p></p>
                </div>

                <div>
                    <h3 className="text-black font-bold tracking-tight mb-7 text-3xl">Més de 30 membres</h3>
                    <p className="text-black tracking-tight text-xl">Actualment, l’associació compta amb més de 30 membres, principalment estudiants de l’Escola Politècnica Superior de la Universitat de Lleida.</p>
                </div>  

                <div>
                    <h3 className="text-black font-bold tracking-tight mb-7 text-3xl">Passió per aprendre</h3>
                    <p className="text-black tracking-tight text-xl">L’objectiu de Lleidahack és fomentar l’aprenentatge i l’experimentació de les noves tecnologies entre els estudiants.</p>
                </div>

            </div>
        </div>


    )

}

export default AboutUsHome;