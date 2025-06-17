import "../../../assets/TIMON.png";

const ScheduleItem = ({ time, title, description, isRight }) => {
  const rowClass = isRight ? "md:flex-row-reverse" : "md:flex-row";
  const clamOffset = isRight ? "md:translate-x-4" : "md:-translate-x-4";

  return (
    <article
      className={`flex flex-col ${rowClass} items-start md:items-center gap-6 py-6`}
    >
      {/* Hora */}
      <div className="md:w-1/2 text-center md:text-left">
        <time
          className="text-xl font-mono text-textSecondaryHackeps"
          dateTime={time}
        >
          {time}
        </time>
      </div>

      {/* Espacio foto icono*/}
      <div
        className={`
          hidden md:flex items-center justify-center
          md:w-[clamp(60px,5vw,100px)] h-full 
          ${clamOffset}
        `}
      >
        <img src="../../../assets/TIMON.png" className="h-12 w-12" />
      </div>

      {/* Contenido */}
      <div className="md:w-1/2">
        <h3 className="text-lg font-bold text-textSecondaryHackeps">
          {title}
        </h3>
        <p className="text-sm text-gray-700 mt-1">{description}</p>
      </div>
    </article>
  );
};

export default ScheduleItem;
