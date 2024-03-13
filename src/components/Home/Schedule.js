import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "src/components/Home/Schedule.css";
import TitleGeneralized from "../TitleGeneralized/TitleGeneralized";

const Schedule = (props) => {
  const rendered_events = props.events.map((event) => {
    return (
      <VerticalTimelineElement key={event.time} date={event.time}>
        <h3 className="vertical-timeline-element-title">{event.title}</h3>
      </VerticalTimelineElement>
    );
  });

  return (
    <div className="dark-background">
      <TitleGeneralized underline={true} href="#horari">
        Horari
      </TitleGeneralized>
      <VerticalTimeline>{rendered_events}</VerticalTimeline>
    </div>
  );
};

export default Schedule;
