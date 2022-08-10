import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Schedule.css';


const Schedule = () => {

  return (
      <div style={{'backgroundColor': '#202225'}}>
    <VerticalTimeline>
  <VerticalTimelineElement date="10h"
  >
    <h3 className="vertical-timeline-element-title">Example</h3>
    <p className="vertical-timeline-element-description">
      Example Example Example Example Example Example ExampleExample Example
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement date="11h">
    <h3 className="vertical-timeline-element-title">Example</h3>
    <p className="vertical-timeline-element-description">
      Example Example Example Example Example Example ExampleExample Example
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement date="12h">
    <h3 className="vertical-timeline-element-title">Example</h3>
    <p className="vertical-timeline-element-description">
      Example Example Example Example Example Example ExampleExample Example
    </p>
  </VerticalTimelineElement>


</VerticalTimeline>
        </div>
  );
}

export default Schedule
