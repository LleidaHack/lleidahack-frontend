import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import TitleGeneralized from "../TitleGeneralized/TitleGeneralized";

const Schedule = (props) => {
  const rendered_events = props.events.map((event) => {
    return (
      <VerticalTimelineElement
        key={event.time}
        date={event.time}
        iconClassName="bg-primaryHackeps shadow-none"
        textClassName="bg-transparent shadow-none"
      >
        <h3 className="text-textSecondaryHackeps underline underline-offset-4 pb-4">
          {event.title}
        </h3>
      </VerticalTimelineElement>
    );
  });

  return (
    <div className="bg-secondaryHackeps">
      <TitleGeneralized underline href="#horari">
        Horari
      </TitleGeneralized>
      <VerticalTimeline lineColor="#0e3a29">{rendered_events}</VerticalTimeline>
    </div>
  );
};

export default Schedule;
