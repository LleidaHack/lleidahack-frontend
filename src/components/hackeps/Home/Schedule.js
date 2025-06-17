import ScheduleItem from "./ScheduleItem";
import TitleGeneralized from "../TitleGeneralized/TitleGeneralized";

const Schedule = ({ events }) => {
  return (
    <div className="relative bg-secondaryHackeps px-6 py-12">

      {/* Línea vertical central del timeline */}
      

      {/* Título */}
      <TitleGeneralized underline href="#horari">
        Horari
      </TitleGeneralized>

      {/* Lista de eventos */}
      <div className="mt-12 space-y-12 relative z-10">
        {events.map((event, index) => (
          <ScheduleItem
            key={event.id ?? index} // usa id si está, sino el índice
            time={event.time}
            title={event.title}
            description={event.description}
            isRight={index % 2 !== 0}
          />
        ))}
      </div>
    </div>
  );
};

export default Schedule;