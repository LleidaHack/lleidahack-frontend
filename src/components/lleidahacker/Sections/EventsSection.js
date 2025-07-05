import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import InputSearch from "src/components/landing/InputSearch/InputSearch";
import FiltersComponent from "src/components/landing/FiltersComponent/FiltersComponent";
import ButtonLleidahack from "src/components/buttons/ButtonLleidahack";
import PopupBody from "src/components/emergentPopup/PopupBody";
import EventCreatorForm from "src/components/lleidahacker/EventCreatorForm/EventCreatorForm";

const EventsSection = () => {
  const navigate = useNavigate();
  const [openFilters, setOpenFilters] = useState(false);
  const [openNewEvent, setOpenNewEvent] = useState(false);
  const [resultsSearch, setResultsSearch] = useState([
    {
      primaryCategory: "Hackeps",
      eventsList: [
        {
          id: 1,
          title: "Hackeps 2017",
          description: "Hackeps 2017 esdeveniment de programació",
          creationDate: "2017-01-01",
          img: "https://www.eps.udl.cat/export/sites/Eps/HackEPS.png",
        },
        {
          id: 2,
          title: "Hackeps 2018",
          description: "Hackeps 2018 esdeveniment de programació",
          creationDate: "2018-01-01",
          img: "https://www.eps.udl.cat/export/sites/Eps/hackeps2018.PNG",
        },
        {
          id: 3,
          title: "Hackeps 2019",
          description: "Hackeps 2019 esdeveniment de programació",
          creationDate: "2019-01-01",
          img: "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_photos/000/857/884/datas/full_width.png",
        },
        {
          id: 4,
          title: "Hackeps 2020",
          description: "Hackeps 2020 esdeveniment de programació",
          creationDate: "2020-01-01",
          img: "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/001/270/735/datas/original.png",
        },
        {
          id: 5,
          title: "Hackeps 2021",
          description: "Hackeps 2021 esdeveniment de programació",
          creationDate: "2021-01-01",
          img: "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_photos/001/753/724/datas/full_width.jpg",
        },
        {
          id: 6,
          title: "Hackeps 2022",
          description: "Hackeps 2022 esdeveniment de programació",
          creationDate: "2022-01-01",
          img: "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/002/249/569/datas/original.png",
        },
        {
          id: 7,
          title: "Hackeps 2023",
          description: "Hackeps 2023 esdeveniment de programació",
          creationDate: "2023-10-01",
          img: "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/002/637/629/datas/original.png",
        },
        {
          id: 8,
          title: "Hackeps 2024",
          description: "Hackeps 2024 esdeveniment de programació",
          creationDate: "2024-01-01",
          img: "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/003/106/152/datas/original.jpg",
        },
      ],
    },
  ]);

  function newEventPopUp() {
    setOpenNewEvent(!openNewEvent);
  }

  function searchPopUp() {
    setOpenFilters(!openFilters);
  }

  return (
    <div>
      <div className="flex flex-col h-screen">
        <div className="header-events bg-background-patron px-16 min-h-0 bg-cover bg-no-repeat bg-center py-12 flex-none h-auto">
          <div className="header-events__content ">
            <h1 className="header-events__title text-4xl ">Esdeveniments</h1>
          </div>
          <div className="flex justify-end w-full"></div>
        </div>

        {/* Contenedor principal para las tarjetas, con flex-1 para que ocupe el espacio restante */}
        <div
          className={`flex flex-col ${resultsSearch.length === 0 ? "justify-center" : ""} items-center flex-1 h-full py-16 px-56 w-full scrollable overflow-y-auto`}
        >
          <h2 className={`${resultsSearch.length === 0 ? "" : "hidden "}`}>
            No s'han trobat resultats
          </h2>

          <div
            className={`resultBox ${resultsSearch.length === 0 ? "hidden" : ""} `}
          >
            {resultsSearch.map((category, catIdx) => (
              <div key={catIdx} className="mb-8 w-full">
                <h2 className="text-2xl font-bold mb-4">
                  {category.primaryCategory}
                </h2>
                <div className="grid grid-cols-4 gap-4">
                  {category.eventsList.map((event, eventIdx) => (
                    <div
                      key={eventIdx}
                      className="resultItem bg-white p-4 rounded shadow mb-4 w-full cursor-pointer hover:shadow-lg transition-shadow duration-300"
                      onClick={() => {navigate(`/events/${event.id}`);}}
                    >
                      <img
                        src={event.img}
                        alt={event.title}
                        className="w-full h-32 object-cover rounded mb-2"
                      />
                      <h3 className="text-xl font-semibold">{event.title}</h3>
                      <p className="text-gray-600">{event.description}</p>
                      <p className="text-gray-400 text-sm mt-2">
                        {event.creationDate}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* bottons inferiors */}
      <div className="fixed bottom-12 right-12 flex flex-col items-center space-y-4 z-50">
        <ButtonLleidahack roundedLanding onClick={() => newEventPopUp()}>
          +
        </ButtonLleidahack>

        <ButtonLleidahack roundedLanding onClick={() => searchPopUp()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <circle
              cx="11"
              cy="11"
              r="7"
              stroke="currentColor"
              strokeWidth="2"
            />
            <line
              x1="16.5"
              y1="16.5"
              x2="21"
              y2="21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </ButtonLleidahack>
      </div>

      <PopupBody
        crossColor="gray-300"
        isOpen={openFilters}
        onClose={() => setOpenFilters(false)}
        children={
          <div className="pb-8">
            <h1 className="text-2xl font-bold mb-4">
              Busqueda d'esdeveniments
            </h1>
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
        }
      />
      <PopupBody
        crossColor="gray-300"
        isOpen={openNewEvent}
        onClose={() => setOpenNewEvent(false)}
        children={
          <div>
            <h2 className="text-2xl font-bold mb-4">Crear nou esdeveniment</h2>
            <EventCreatorForm />
          </div>
        }
      />
    </div>
  );
};

export default EventsSection;
