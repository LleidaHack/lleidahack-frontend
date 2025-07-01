import timonImg from "../../../assets/TIMON.png";

const ScheduleItem = ({ time, title, description, align = "right" }) => {
  const isRight = align === "right";

  return (
    <article
      className={`flex flex-col md:flex-row gap-4 py-6 md:items-center ${
        isRight ? "" : "justify-end"
      }`}
    >
      {/* Ícono (timón) */}
      {isRight ? null : (
        <div className="md:w-24 h-full">
          <img
            src={timonImg}
            className="hidden md:block w-full h-full object-contain"
            alt="Ícono timón"
          />
        </div>
      )}

      {/* Caja: time + title */}
      <div className="md:w-1/2 space-y-2">
        <div className="grid grid-cols-3 w-full">
          {isRight ? (
            <>
              <time
                dateTime={time}
                className="text-right text-xl font-mono text-textSecondaryHackeps"
              >
                {time}
              </time>
              <h3 className="text-right text-2xl font-semibold col-span-2">
                {title}
              </h3>
            </>
          ) : (
            <>
              <h3 className="text-left text-2xl font-semibold col-span-2">
                {title}
              </h3>
              <time
                dateTime={time}
                className="text-left text-xl font-mono text-textSecondaryHackeps"
              >
                {time}
              </time>
            </>
          )}
        </div>

        {description && (
          <p
            className={`${
              isRight ? "text-right" : "text-left"
            } text-textSecondaryHackeps`}
          >
            {description}
          </p>
        )}
      </div>

      {/* Ícono (timón) */}
      {isRight && (
        <div className="md:w-24 h-full">
          <img
            src={timonImg}
            className="hidden md:block w-full h-full object-contain"
            alt="Ícono timón"
          />
        </div>
      )}
    </article>
  );
};

export default ScheduleItem;
