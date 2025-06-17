import TitleGeneralized from "../TitleGeneralized/TitleGeneralized";

// Subcomponente que representa cada evento del timeline
const ScheduleItem = ({ time, title, description, isRight }) => {
  return (
    <div
      className={`
        flex flex-col md:flex-row 
        ${isRight ? "md:flex-row-reverse" : ""} 
        items-start md:items-center gap-6 py-6
      `}
    >
      {/* Columna para mostrar la hora */}
      <div className="md:w-1/2 text-center md:text-left">
        <p className="text-xl font-mono text-textSecondaryHackeps">{time}</p>
      </div>

      {/* Columna para el título y descripción del evento */}
      <div className="md:w-1/2">
        <h3 className="text-lg font-bold text-textSecondaryHackeps">{title}</h3>
        <p className="text-sm text-gray-700 mt-1">{description}</p>
      </div>
    </div>
  );
};

// Componente principal que renderiza la lista completa del timeline
const Schedule = (props) => {
  // Mapear cada evento recibido y decidir si va a la izquierda o derecha
  const renderedEvents = props.events.map((event, index) => (
    <ScheduleItem
      key={index}
      time={event.time}
      title={event.title}
      description={event.description}
      isRight={index % 2 !== 0} // alterna: true para impar (derecha), false para par (izquierda)
    />
  ));

  return (
    <div className="bg-secondaryHackeps px-6 py-12">
      {/* Título general del timeline */}
      <TitleGeneralized underline href="#horari">
        Horari
      </TitleGeneralized>

      {/* Lista de eventos */}
      <div className="mt-12 space-y-12">
        {renderedEvents}
      </div>
    </div>
  );
};

export default Schedule;
