import { React, useEffect, useState } from "react";
import ButtonLleidahack from "src/components/buttons/ButtonLleidahack";

const FiltersComponent = ({ categoryType }) => {
  const [onMobile, setOnMobile] = useState(false);
  if (categoryType == "events") {
    //Configurar los filtros de los eventos
  } else if (categoryType == "news") {
    //Configurar los filtros de las noticias
  }

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setOnMobile(true);
    } else {
      setOnMobile(false);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setOnMobile(true);
      } else {
        setOnMobile(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!onMobile) {
    return (
      <div className="filters-component flex flex-row shadow h-20">
        <div className="filter-button basis-1/3 bg-white w-32 py-2 px-4 border-x">
          <div className="filter-button__content flex flex-column">
            <p className="text-grayColor mb-0"> CATEGORIA</p>
            <div className="2nd_content flex flex-row justify-between">
              <p className="extra mb-0">Totes les categories</p>
              <div className="align-middle self-center h-auto">
                <svg
                  width="18"
                  height="10"
                  viewBox="0 0 18 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 1L9.16327 9L17 1" stroke="black" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="filter-button basis-1/3 bg-white w-32 py-2 px-4 border-x">
          <div className="filter-button__content flex flex-column">
            <p className="text-grayColor mb-0"> TIPUS</p>
            <div className="2nd_content flex flex-row justify-between">
              <p className="extra mb-0">Tots els tipus</p>
              <div className="align-middle self-center h-auto">
                <svg
                  width="18"
                  height="10"
                  viewBox="0 0 18 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 1L9.16327 9L17 1" stroke="black" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="filter-button basis-1/3 bg-white w-32 py-2 px-4 border-x">
          <div className="filter-button__content flex flex-column">
            <p className="text-grayColor mb-0"> Dates</p>
            <div className="2nd_content flex flex-row justify-between">
              <p className="extra mb-0">Totes les dates</p>
              <div className="align-middle self-center h-auto">
                <svg
                  width="18"
                  height="10"
                  viewBox="0 0 18 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 1L9.16327 9L17 1" stroke="black" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-row justify-between">
        <div className="filter-button ">
          <ButtonLleidahack primary white className="px-12">
            <i className="fa-solid fa-filter"></i> Filtrar
          </ButtonLleidahack>
        </div>
        <div className="filter-button ">
          <ButtonLleidahack primary white className="px-12">
            <i className="fa-solid fa-bars-staggered"></i> Ordenar
          </ButtonLleidahack>
        </div>
      </div>
    );
  }
};

export default FiltersComponent;
