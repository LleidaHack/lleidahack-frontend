import React, { useEffect, useState } from "react";
import ButtonLleidahack from "src/components/buttons/ButtonLleidahack";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const EventDetail = () => {
  // Get eventId from URL params
  const navigate = useNavigate();
  const { eventId: eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [img, setImg] = useState(null);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [popUpOpen, setPopUpOpen] = useState(false);

  useEffect(() => {
    // Simulate fetching event data
    const fetchedEvent = {
      id: 1,
      title: "Hackeps 2023",
      description: "Hackeps 2023 esdeveniment de programació",
      creationDate: "2023-10-01",
      img: "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/002/637/629/datas/original.png",
    };

    setEvent(fetchedEvent);
    setImg(fetchedEvent.img);
    setTitle(fetchedEvent.title);
    setDescription(fetchedEvent.description);
  }, []);

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
        <div className="content px-16 py-3">
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
              <strong>Data de creació:</strong> {event?.creationDate}
            </p>
            <p>
              <strong>Ubicació:</strong> {event?.location}
            </p>
            <p>
              <strong>Durada:</strong> {event?.duration}
            </p>
            <p>
              <strong>Max Participants:</strong> {event?.maxParticipants}
            </p>
            <p>
              <strong>Participants:</strong> {event?.participants}
            </p>
            <p>
              <strong>Max sponsors</strong>
              {event?.maxSponsors}
            </p>
            <p>
              <strong>Sponsors:</strong> {event?.sponsors}
            </p>
            <p>
              <strong>Data Inici inscripcions:</strong> {event?.joindDate}
            </p>
            <p>
              <strong>Data Fi inscripcions:</strong> {event?.endJoinDate}
            </p>
          </div>
          <div className="participants mt-8">
            <h2 className="text-3xl font-bold mb-4">Participants</h2>
            <ButtonLleidahack
              primary
              white
              onClick={() => navigate(`/events/${eventId}/participants`)}
            >
              Gestionar participants
            </ButtonLleidahack>
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
      </div>
    </div>
  );
};

export default EventDetail;
