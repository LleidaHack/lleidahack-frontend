import React from "react";
import "src/components/event_cards/eventCard_one/eventCard_one.css";
import background from "src/components/event_cards/defaultImage.jpg"

const EventCard_one = ({title, description, date}) => {
  return (
    <div className="eventCardOne shadow">
      <img
        src={background}
        className="absolute imageScreenFit"
      ></img>
      <p className="eventTitleCardOne eventTitle">{title}</p>
      <p className="eventDescriptionCardOne font textBase">{description}</p>
      <p className="eventDateCardOne font textBase">{date}</p>
    </div>
  );
};

export default EventCard_one;
