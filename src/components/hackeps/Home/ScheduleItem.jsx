import timonImg from "../../../assets/TIMON.png";


const ScheduleItem = ({ time, title, description, isRight }) => {
  const rowClass = isRight ? "md:flex-row-reverse" : "md:flex-row";
  const clamOffset = isRight ? "md:translate-x-4" : "md:-translate-x-4";

  return (
    <article
      className={`flex flex-col ${rowClass} items-center gap-6 py-6 md:items-start`}
    >
      {/* Contenido: Hora + título + descripción */}
      <div  className="md:w-1/2 text-center md:text-left space-y-2">
       {/* Hora */}
        <time
          className="text-xl font-mono font-bold text-textSecondaryHackeps"
          dateTime={time}
        >
          {time}
        </time>

        {/*
        
          <div
            className={`
              w-[80px] border-t border-textSecondaryHackeps my-2 
              ${isRight ? 'ml-0' : 'ml-auto'}
            `}
          />
          
        */}


        {/* Descripción 
         className="text-lg  text-textSecondaryHackeps"
        */}
        <h3>
          {title} 
        </h3>
        <p>{description}</p>
      </div>

      {/* Ícono (timon) */}
      <div
        className={`
          hidden md:flex items-center justify-center
          md:w-[clamp(60px,5vw,100px)] h-full 
          ${clamOffset}
        `}
      >
        <img src={timonImg} />
      </div>
    </article>
  );
};


export default ScheduleItem;
