import React from "react";
import "src/components/event_cards/eventCard_five/eventCard_five.css";

const EventCard_five = ({title, description, image}) => {
  return (
    <div class="eventCardFive shadow">
      <img
        src= {image}
        className="absolute imageFitScreen"
      ></img>
      <div className="eventGradientCardFive gradient">
      </div>
      <p className="eventTitleCardFive font">{title}</p>
      <p className="eventDescriptionCardFive font">{description}</p>
    </div>
  );
};

export default EventCard_five;
