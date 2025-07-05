import React from "react";
import InputSearch from "src/components/landing/InputSearch/InputSearch";
import FiltersComponent from "src/components/landing/FiltersComponent/FiltersComponent";
import ButtonLleidahack from "src/components/buttons/ButtonLleidahack";

const EventsSection = () => {
  return <div>
    <div className="flex flex-col h-screen">
      <div className="header-events bg-background-patron px-16 min-h-0 bg-cover bg-no-repeat bg-center py-12 flex-none h-auto">
        <div className="header-events__content ">
          <h1 className="header-events__title text-4xl ">Esdeveniments</h1>
        </div>
        <div className="flex justify-end w-full">
          
            <ButtonLleidahack primary white className="px-12 text-white px-4 py-2 rounded shadow ml-auto">
              + Nou Esdeveniment
            </ButtonLleidahack>
          

        </div>
        <div className="searcher_div my-6">
          <InputSearch
            placeholder={"Cerca esdeveniments"}
            searchtype={"events"}
          />
        </div>
        <div className="filters_div pt-3">
          <FiltersComponent />
        </div>
      </div>

      {/* Contenedor principal para las tarjetas, con flex-1 para que ocupe el espacio restante */}
      


    </div>
  </div>;
};


export default EventsSection;