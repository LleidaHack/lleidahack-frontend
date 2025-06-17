import timonImg from "../../../assets/TIMON.png";

const ScheduleItem = ({ time, title, description }) => {
  return (
    <article className="flex flex-col md:flex-row  gap-4 py-6 md:items-center justify-end">
      {/* Ícono (timón) */}
      <div className="md:w-24 h-full center ">
        <img
          src={timonImg}
          className="w-full h-full object-contain"
          alt="Ícono timón"
        />
      </div>

      {/* Caja: time + title */}
      <div className="md:w-1/2 space-y-2">
        <div className="grid grid-cols-3 w-full">
          {/* Título a la derecha */}
          <h3 className="text-left text-2xl font-semibold col-span-2">
            {title}
          </h3>
          {/* Hora a la izquierda */}
          <time dateTime={time} className="text-left text-xl font-mono text-textSecondaryHackeps ">
            {time}
          </time>
        </div>

        {/* Descripción (opcional) */}
        {description && (
          <p className="text-left text-textSecondaryHackeps">
            {description}
          </p>
        )}
      </div>

      
    </article>
  );
};

export default ScheduleItem;
