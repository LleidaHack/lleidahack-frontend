import timonImg from "../../../assets/TIMON.png";

const ScheduleItem = ({ time, title, description, isRight }) => {
  const rowClass = isRight ? "md:flex-row-reverse" : "md:flex-row";
  const clamOffset = isRight ? "md:translate-x-4" : "md:-translate-x-4";

  return (
    <article
      className={`flex flex-col ${rowClass} items-center gap-6 py-6 md:items-start`}
    >
      {/* Contenido: Hora + título + descripción */}
      <div className="md:w-1/2 text-center md:text-left space-y-2">
        {/* Hora */}
        {/* <time className="text-xl font-mono font-bold text-textSecondaryHackeps" dateTime={time}> */}
        <time dateTime={time}>
          {time}
        </time>

        {/* Descripción 
         className="text-lg  text-textSecondaryHackeps"
        */}
        <h3>{title}</h3>
        <p>{description}</p> {/* Descripción opcional */}
      </div>

      {/* Ícono (timon) */}
      <div
        className={`
          md:w-[clamp(80px,8vw,140px)] h-full 
          ${clamOffset}
        `}
      >
        <img
          src={timonImg}
          className="w-full h-full object-contain"
          alt="Ícono timón"
        />
      </div>
    </article>
  );
};

export default ScheduleItem;
