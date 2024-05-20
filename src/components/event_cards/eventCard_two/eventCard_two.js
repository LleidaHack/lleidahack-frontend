import React from "react";
import "src/components/event_cards/eventCard_two/eventCard_two.css";
import background from "src/components/event_cards/defaultImage.jpg"

const EventCard_two = () => {
  return (
    <div className="eventCardTwo shadow">
      <img
        src= {background}
        className="absolute imageFitScreen"
      ></img>
      <p className="eventTitleCardTwo eventTitle">Event Title</p>
      <p className="eventDateCardTwo font textBase">Event Date</p>
      <p className="eventPlaceCardTwo font textBase">Event Place</p>
    </div>
  );
};

export default EventCard_two;
