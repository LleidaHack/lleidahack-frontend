import React, { useEffect, useState } from "react";
import ButtonLleidahack from "src/components/buttons/ButtonLleidahack";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import PopupBody from "src/components/emergentPopup/PopupBody";
import ParticipantManager from "src/components/lleidahacker/ParticipantManager/ParticipantManager";
import { getEventById, getEventStatus } from "src/services/EventService";

const EventDetail = () => {
  // Get eventId from URL params
  const navigate = useNavigate();
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [img, setImg] = useState(null);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [popUpOpen, setPopUpOpen] = useState(false);
  const [showParticipants, setShowParticipants] = useState(true);

  useEffect(() => {
    // Simulate fetching event data
    const fetchEvent = async () => {
      const fetchedEvent = await getEventById(eventId);
      const eventStatus = await getEventStatus(eventId);
      fetchedEvent.status = eventStatus.groups;
      fetchedEvent.registeredUsers = eventStatus.registratedUsers;
      fetchedEvent.participants = eventStatus.participatingUsers;
      fetchedEvent.acceptedAndConfirmedUsers = eventStatus.acceptedAndConfirmedUsers;
      setEvent(fetchedEvent);
      setImg(fetchedEvent.image);
      setTitle(fetchedEvent.name);
      setDescription(fetchedEvent.description);
      console.log(fetchedEvent);
    };

    fetchEvent();
  }, [eventId]);

  function openPopup() {
    // Aquí puedes abrir el popup para crear un nuevo evento
    // Por ejemplo, usando un estado para controlar la visibilidad del popup
    console.log("Open event creation popup");
    setPopUpOpen(!popUpOpen);
  }

  return (
    <div>
      <div className="flex flex-col h-screen">
        <div className="header-events bg-background-patron px-16 min-h-0 bg-cover bg-no-repeat bg-center py-12 flex-none h-auto">
          <div className="header-events__content flex flex-row items-center">
            <img
              src={img}
              alt="Event"
              className="w-24 h-24 object-cover rounded-lg mr-6"
            />
            <h1 className="header-events__title text-4xl ">{title}</h1>
          </div>
          <div className="flex justify-end w-full"></div>
        </div>
        <div className="content px-16 py-3 overflow-y-auto mb-20">
          <div className="descripcio">
            <h2 className="text-3xl font-bold mb-4">
              Descripció de l'esdeveniment
            </h2>
            <p>{description}</p>
          </div>
          <div className="detalls-esdeveniment  grid grid-cols-* grid-rows-4 gap-x-auto gap-y-2 mt-12">
            <h2 className="text-3xl font-bold mb-4 col-span-3">
              Detalls de l'esdeveniment
            </h2>
            <p>
              <strong>Ubicació:</strong> {event?.location}
            </p>

            <p>
              <strong>Max.Participants:</strong> {event?.max_participants}
            </p>

            <p>
              <strong>Registered Users:</strong> {event?.registeredUsers}
            </p>

            <p>
              <strong>Participants:</strong> {event?.participants}
            </p>
            
            <p>
              <strong>Groups:</strong> {event?.groups}
            </p>

            <p>
              <strong>Accepted and Confirmed Users:</strong>{" "}
              {event?.acceptedAndConfirmedUsers}
            </p>
            <p>
              <strong>Max.sponsors:</strong>
              {event?.max_sponsors}
            </p>

            <p>
              <strong>Preu:</strong> {event?.price} €
            </p>

          </div>
          <div className="participants my-8">
            <h2 className="text-3xl font-bold mb-4">Participants</h2>
            <ButtonLleidahack
              primary
              white
              onClick={() => setShowParticipants(!showParticipants)}
            >
              {showParticipants ? "Ocultar Participants" : "Mostrar Participants"}
            </ButtonLleidahack>
            {showParticipants && (
              <div className="w-full px-4 py-5">
                <ParticipantManager
                  eventId={eventId}
                />
              </div>
            )}
          </div>
        </div>
        <div className="fixed bottom-12 right-12 flex flex-col items-center space-y-4 z-50">
          <ButtonLleidahack roundedLanding onClick={() => openPopup()}>
            <span role="img" aria-label="gear">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0a1.724 1.724 0 002.573.982c.797-.46 1.757.388 1.518 1.25a1.724 1.724 0 002.062 2.062c.862-.239 1.71.721 1.25 1.518a1.724 1.724 0 00.982 2.573c.921.3.921 1.603 0 1.902a1.724 1.724 0 00-.982 2.573c.46.797-.388 1.757-1.25 1.518a1.724 1.724 0 00-2.062 2.062c.239.862-.721 1.71-1.518 1.25a1.724 1.724 0 00-2.573.982c-.3.921-1.603.921-1.902 0a1.724 1.724 0 00-2.573-.982c-.797.46-1.757-.388-1.518-1.25a1.724 1.724 0 00-2.062-2.062c-.862.239-1.71-.721-1.25-1.518a1.724 1.724 0 00-.982-2.573c-.921-.3-.921-1.603 0-1.902a1.724 1.724 0 00.982-2.573c-.46-.797.388-1.757 1.25-1.518a1.724 1.724 0 002.062-2.062c-.239-.862.721-1.71 1.518-1.25.797.46 1.757-.388 2.573-.982z"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="3"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                />
              </svg>
            </span>
          </ButtonLleidahack>
        </div>
        <PopupBody
          crossColor="gray-300"
          isOpen={popUpOpen}
          onClose={() => setPopUpOpen(false)}
          children={
            <div className="pb-8">
              <h1 className="text-2xl font-bold mb-4">Editar esdeveniment</h1>
              {/* Aquí puedes agregar un formulario para editar el evento */}
              <p>Formulario de edición de evento</p>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default EventDetail;
