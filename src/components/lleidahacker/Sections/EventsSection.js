import React, {useState, useEffect} from "react";
import InputSearch from "src/components/landing/InputSearch/InputSearch";
import FiltersComponent from "src/components/landing/FiltersComponent/FiltersComponent";
import ButtonLleidahack from "src/components/buttons/ButtonLleidahack";

const EventsSection = () => {
  const [resultsSearch, setResultsSearch] = useState([
    {primaryCategory: "Hackeps", eventsList:[
      {title: "Hackeps 2017", description: "Hackeps 2017 esdeveniment de programació", creationDate: "2017-01-01", img: "https://www.eps.udl.cat/export/sites/Eps/HackEPS.png"},
      {title: "Hackeps 2018", description: "Hackeps 2018 esdeveniment de programació", creationDate: "2018-01-01", img: "https://www.eps.udl.cat/export/sites/Eps/hackeps2018.PNG"},
      {title: "Hackeps 2019", description: "Hackeps 2019 esdeveniment de programació", creationDate: "2019-01-01", img: "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_photos/000/857/884/datas/full_width.png"},
      {title: "Hackeps 2020", description: "Hackeps 2020 esdeveniment de programació", creationDate: "2020-01-01", img: "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/001/270/735/datas/original.png"},
      {title: "Hackeps 2021", description: "Hackeps 2021 esdeveniment de programació", creationDate: "2021-01-01", img: "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_photos/001/753/724/datas/full_width.jpg"},
      {title: "Hackeps 2022", description: "Hackeps 2022 esdeveniment de programació", creationDate: "2022-01-01", img: "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/002/249/569/datas/original.png"},
      {title: "Hackeps 2023", description: "Hackeps 2023 esdeveniment de programació", creationDate: "2023-10-01", img: "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/002/637/629/datas/original.png"},
      {title: "Hackeps 2024", description: "Hackeps 2024 esdeveniment de programació", creationDate: "2024-01-01", img: "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/003/106/152/datas/original.jpg"},
    ]},

  ]);
  return (
    <div>
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
        <div className={`flex flex-col ${resultsSearch.length === 0 ? "justify-center" : ""} items-center flex-1 h-full py-16 px-56 w-full scrollable overflow-y-auto`}>
          <h2 className={`${resultsSearch.length === 0 ? "" : "hidden "}`}>No s'han trobat resultats</h2>
          
          <div className={`resultBox ${resultsSearch.length === 0 ? "hidden" : ""} `}>
            {resultsSearch.map((category, catIdx) => (
              <div key={catIdx} className="mb-8 w-full">
                <h2 className="text-2xl font-bold mb-4">{category.primaryCategory}</h2>
                <div className="grid grid-cols-4 gap-4">
                  {category.eventsList.map((event, eventIdx) => (
                    <div key={eventIdx} className="resultItem bg-white p-4 rounded shadow mb-4 w-full">
                      <img src={event.img} alt={event.title} className="w-full h-32 object-cover rounded mb-2" />
                      <h3 className="text-xl font-semibold">{event.title}</h3>
                      <p className="text-gray-600">{event.description}</p>
                      <p className="text-gray-400 text-sm mt-2">{event.creationDate}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


export default EventsSection;