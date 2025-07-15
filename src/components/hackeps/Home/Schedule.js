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

  const alignmentClass = isRight ? "text-left" : "text-right";
  return (
    <article
      className={`flex flex-col md:flex-row gap-4 py-6 md:items-center ${
        isRight ? "" : "justify-end"
      }`}
    >
      {/* Ícono (timón) a la izquierda si align es left */}
      {!isRight && <TimonIcon />}

      {/* Caja: time + title i Caja description */}
      <div className=" md:w-1/2 space-y-2 ">
        {/* Caja: time + title */}
        <div
          className={`flex  ${isRight ? "items-start" : "items-end"} md:gap-7 md:flex-row flex-col w-full`}
        >
          <>
            <time
              dateTime={time}
              className={`${alignmentClass} text-xl font-mono text-textSecondaryHackeps`}
            >
              {time}
            </time>

            <h2
              className={`md:text-2xl text-lg font-semibold w-fit m-0 p-0 ${alignmentClass} md:text-left`}
            >
              {title}
            </h2>
          </>
        </div>

        {description && (
          <p
            className={`${alignmentClass}  text-textSecondaryHackeps md:items-left md:text-base text-sm`}
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
