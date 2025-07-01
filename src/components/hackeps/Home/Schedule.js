import timonImg from "../../../assets/TIMON.png";
import TitleGeneralized from "../TitleGeneralized/TitleGeneralized";

// Componente para la imagen del timón
const TimonIcon = () => (
  <div className="md:w-24 h-full hidden md:block">
    <img
      src={timonImg}
      className="w-full h-full object-contain"
      alt="Ícono timón"
    />
  </div>
);

const ScheduleItem = ({ time, title, description, align = "right" }) => {
  const isRight = align === "right";

const alignmentClass = isRight ? "text-right" : "text-left";
  return (
    <article
      className={`flex flex-col md:flex-row gap-4 py-6 md:items-center ${
        isRight ? "" : "justify-end"
      }`}
    >
      {/* Ícono (timón) a la izquierda si align es left */}
      {!isRight && <TimonIcon />}

      {/* Caja: time + title */}
      <div className="md:w-1/2 space-y-2 ">
        <div className="grid grid-cols-3 w-full">
            <>
              <time
                dateTime={time}
                className={`${alignmentClass} text-xl font-mono text-textSecondaryHackeps`}
              >
                {time}
              </time>
              <h3 className={`${alignmentClass} text-2xl font-semibold col-span-2`}>
                {title}
              </h3>
            </>
          
        </div>

        {description && (
          <p
            className={`${alignmentClass} text-textSecondaryHackeps`}
          >
            {description}
          </p>
        )}
      </div>

      {/* Ícono (timón) a la derecha si align es right */}
      {isRight && <TimonIcon />}
    </article>
  );
};

const Schedule = ({ events }) => {
  return (
    <div className="bg-secondaryHackeps">
      <div className="relative px-6 md:px-16 py-12 max-w-6xl mx-auto">
        {/* Título */}
        <TitleGeneralized underline href="#horari">
          Horari
        </TitleGeneralized>

        {/* Lista de eventos */}
        <div className="mt-12 space-y-12 relative z-10">
          {events.map((event, index) => (
            <ScheduleItem
              key={index}
              time={event.time}
              title={event.title}
              description={event.description}
              align={index % 2 === 0 ? "right" : "left"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
