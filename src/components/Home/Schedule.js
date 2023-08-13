import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import 'src/components/Home/Schedule.css';


const Schedule = (props) => {
  const rendered_events = props.events.map((event) =>
  {
    return(
        <VerticalTimelineElement key={event.time} date={event.time}>
          <h3 className="vertical-timeline-element-title">{event.title}</h3>
          <p className="vertical-timeline-element-description">
            {event.description}
          </p>
        </VerticalTimelineElement>
    );
  });

  return (
    <div className='dark-background'>
        <h1 className='text-center title-underline' href="#horari">Horari</h1>
        <VerticalTimeline>
            {rendered_events}
        </VerticalTimeline>
    </div>
  );
}

export default Schedule
