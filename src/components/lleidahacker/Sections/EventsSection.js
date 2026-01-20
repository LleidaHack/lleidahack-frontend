import React, { useState, useEffect } from "react";
import EventDetail from "./EventDetail";
import { useNavigate } from "react-router-dom";
import { getEvents } from "src/services/EventService";

const EventsSection = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Simula la obtenció de dades d'esdeveniments des d'una API o base de dades
    const fetchEvents = async () => {
      const generateData = async () => {
        const allEvents = await getEvents();
        const data = Array.isArray(allEvents)
          ? allEvents.map((event) => ({
              id: event.id,
              name: event.name,
              image:
                event.image !== "" && event.image !== null
                  ? event.image
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFKgvarWlqKjAQnDri0VqZC2XlyuOl_L8HVQ&s",
              type: event.type || "hackeps",
            }))
          : [];

        setEvents(data || []);
      };
      await generateData();
    };

    fetchEvents();
  }, []);
  const groupedEvents = events.reduce((acc, event) => {
    if (!acc[event.type]) {
      acc[event.type] = [];
    }
    acc[event.type].push(event);
    return acc;
  }, {});

  const navigate = useNavigate();

  const [selectedType, setSelectedType] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 6;

  const filteredEvents =
    selectedType === "all"
      ? events
      : events.filter((event) => event.type === selectedType);

  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);
  const paginatedEvents = filteredEvents.slice(
    (currentPage - 1) * eventsPerPage,
    currentPage * eventsPerPage,
  );

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <div className="header-events bg-background-patron px-16 min-h-0 bg-cover bg-no-repeat bg-center py-12 flex-none h-40">
        <div className="header-events__content ">
          <h1 className="header-events__title text-4xl ">Grups de Treball</h1>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center  p-4">
        <div className="w-full p-4">
          <div className="mb-4">
            <label htmlFor="typeFilter" className="mr-2 font-medium">
              Filtrar tipus d'esdeveniment:
            </label>
            <select
              id="typeFilter"
              value={selectedType}
              onChange={(e) => {
                setSelectedType(e.target.value);
                setCurrentPage(1); // Reset to first page when filter changes
              }}
              className="border border-gray-300 rounded px-2 py-1"
            >
              <option value="all">All</option>
              {Object.keys(groupedEvents).map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 p-2">
            {paginatedEvents.map((event, index) => (
              <div
                key={index}
                className="border border-gray-300 p-3 text-center rounded-lg shadow-sm transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer"
                onClick={() => navigate(`/event/${event.id}`)}
              >
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-auto object-cover rounded-t-lg"
                />
                <h3
                  className="mt-1 text-md font-medium truncate"
                  style={{ maxWidth: "100%" }}
                >
                  {event.name}
                </h3>
                <div className="mt-1 px-2 py-1 bg-gray-100 rounded-full inline-block text-sm text-gray-600">
                  {event.type}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center mt-4">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 mx-1 border rounded disabled:opacity-50"
            >
              Anterior
            </button>
            <span className="px-3 py-1">
              {currentPage} / {totalPages}
            </span>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-3 py-1 mx-1 border rounded disabled:opacity-50"
            >
              Següent
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsSection;
