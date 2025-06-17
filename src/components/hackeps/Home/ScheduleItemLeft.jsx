import timonImg from "../../../assets/TIMON.png";

const ScheduleItem = ({ time, title, description }) => {
  return (
    <article className="flex flex-col md:flex-row gap-4 py-6 md:items-center  ">
      
      {/* Caja: time + title */}
      <div className=" md:w-1/2 space-y-2">
        <div className="grid grid-cols-3  w-full ">
          {/* Hora a la izquierda */}
          <time dateTime={time} className="text-right text-xl font-mono text-textSecondaryHackeps ">
            {time}
          </time>

          {/* Título a la derecha */}
          <h3 className="text-right text-2xl font-semibold col-span-2">
            {title}
          </h3>
        </div>

        {/* Descripción (opcional) */}
        {description && (
          <p className="text-right text-textSecondaryHackeps">
            {description}
          </p>
        )}
      </div>

      {/* Ícono (timón) */}
      <div className="md:w-24 h-full">
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
