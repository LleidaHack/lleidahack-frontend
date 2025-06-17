import ScheduleItemLeft from "./ScheduleItemLeft";
import ScheduleItemRight from "./ScheduleItemRight";
import TitleGeneralized from "../TitleGeneralized/TitleGeneralized";

const Schedule = ({ events }) => {
  return (
    <body className="bg-secondaryHackeps">
      <div className="relative px-6 md:px-16 py-12 max-w-6xl mx-auto">
        {/* Título */}
        <TitleGeneralized underline href="#horari">
          Horari
        </TitleGeneralized>

        {/* Lista de eventos */}
        <div className="mt-12 space-y-12 relative z-10">
          {events.map((event, index) =>
            index % 2 === 0 ? (
              <ScheduleItemLeft
                key={index}
                time={event.time}
                title={event.title}
                description={event.description}
              />
            ) : (
              <ScheduleItemRight
                key={index}
                time={event.time}
                title={event.title}
                description={event.description}
              />
            )
          )}
        </div>
      </div>
    </body>
  );
};

export default Schedule;
