import React from "react";
import "src/components/event_cards/eventCard_four/eventCard_four.css";
import background from "src/components/event_cards/defaultImage.jpg";

const EventCard_four = ({title}) => {
  return (
    <div className="eventCardFour shadow">
      <img
        src= {background}
        className="absolute imageFitScreen"
      ></img>
      <div className="eventGradientCardFour gradient"></div>
      <p className="eventTitleCardFour font">{title}</p>
    </div>
  );
};

export default EventCard_four;
