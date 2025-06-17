import ScheduleItem from "./ScheduleItem";
import TitleGeneralized from "../TitleGeneralized/TitleGeneralized";

const Schedule = ({ events }) => {
  return (
    <body className="bg-secondaryHackeps">
    <div className="relative px-6 md:px-16 py-12 max-w-4xl mx-auto">
      
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
            isRight={index % 2 !== 0}
          />
        ))}
      </div>
    </div>
    </body>
  );
};

export default Schedule;