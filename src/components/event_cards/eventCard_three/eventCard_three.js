import React from "react";
import "src/components/event_cards/eventCard_three/eventCard_three.css";
import background from "src/components/event_cards/defaultImage.jpg"

const eventCard_three = (title, description) => {
  return (
    <div className="eventCardThree shadow">
      <img
        src={background}
        className="absolute imageFitScreen"
      ></img>
      <p className="eventTitleCardThree eventTitle">{title}</p>
      <p className="eventDescriptionCardThree font textBase">{description}</p>
    </div>
  );
};

export default eventCard_three;
