import React from "react";

const Colaborations = () => {
    return(
        <div>
            <div>
                <h2 className="text-primaryLanding mt-12 ml-12 text-5xl tracking-tight">Col·laboracions</h2>
            </div>

            <div className="flex flex-row gap-x-12 m-12">

                <div>
                    <h3 className="text-black font-bold tracking-tight mb-7 text-3xl">Consell d’estudiants</h3>
                    <p className="text-black font-normal tracking-tight text-xl">Lleidahack col·labora amb altres associacions d'estudiants de la UdL, com el Consell d'Estudiants.</p>
                </div>

                <div>
                    <h3 className="text-black font-bold tracking-tight mb-7 text-3xl">Makers Lleida</h3>
                    <p className="text-black tracking-tight text-xl">Lleidahack treballa conjuntament amb l'associació Makers Lleida per organitzar la Fira Maker, que es celebra anualment a la ciutat.</p>
                </div>  

                <div>
                    <h3 className="text-black font-bold tracking-tight mb-7 text-3xl">First Lego League </h3>
                    <p className="text-black tracking-tight text-xl">Lleidahack dona suport a l'Escola Politècnica Superior en l'organització de la competició First Lego League.</p>
                </div>

            </div>
        </div>
    )
}

export default Colaborations;