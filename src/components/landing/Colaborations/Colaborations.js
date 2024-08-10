import React from "react";

const Colaborations = () => {
  return (
    <div>
      <div>
        <h2 className="text-primaryLanding mt-12 ml-3 md:ml-12 text-4xl md:text-5xl tracking-tight">
          Col·laboracions
        </h2>
      </div>
      <div className="md:m-9">
        <div className="flex flex-col md:flex-row gap-x-12 m-3 md:m-12">
          <div className="md:mb-0 mb-3">
            <h3 className="text-black font-bold tracking-tight mb-2 md:mb-7 text-3xl">
              Consell d’estudiants
            </h3>
            <p className="text-black font-normal tracking-tight text-base mdtext-xl">
              Lleidahack col·labora amb altres associacions d'estudiants de la
              UdL, com el Consell d'Estudiants.
            </p>
          </div>

          <div className="md:mb-0 mb-3">
            <h3 className="text-black font-bold tracking-tight mb-2 md:mb-7 text-3xl">
              Makers Lleida
            </h3>
            <p className="text-black tracking-tight text-base mdtext-xl">
              Lleidahack treballa conjuntament amb l'associació Makers Lleida
              per organitzar la Fira Maker, que es celebra anualment a la
              ciutat.
            </p>
          </div>

          <div className="md:mb-0 mb-3">
            <h3 className="text-black font-bold tracking-tight mb-2 md:mb-7 text-3xl">
              First Lego League{" "}
            </h3>
            <p className="text-black tracking-tight text-base mdtext-xl">
              Lleidahack dona suport a l'Escola Politècnica Superior en
              l'organització de la competició First Lego League.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Colaborations;
