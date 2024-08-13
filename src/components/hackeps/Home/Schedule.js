import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "src/components/hackeps/Home/Schedule.css";
import TitleGeneralized from "../TitleGeneralized/TitleGeneralized";
import {colors} from "src/colors";

const Schedule = (props) => {
  const rendered_events = props.events.map((event) => {
    return (
      <VerticalTimelineElement key={event.time} date={event.time} iconClassName="bg-primaryHackeps shadow-none" textClassName="bg-transparent shadow-none">
        <h3 className="text-textSecondaryHackeps underline underline-offset-4 pb-4">{event.title}</h3>
      </VerticalTimelineElement>
    );
  });

  return (
    <div className="dark-background">
      <TitleGeneralized underline={true} href="#horari">
        Horari
      </TitleGeneralized>
      <VerticalTimeline lineColor={colors.primaryHackeps}>{rendered_events}</VerticalTimeline>
    </div>
  );
};

export default Schedule;
