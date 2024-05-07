import React from "react";
import "src/components/event_cards/eventCard_five/eventCard_five.css";

const eventCard_five = () => {
  return (
    <div class="eventCardFive shadow">
      <img
        src="/src/components/event_cards/defaultImage.jpg"
        class="eventCardFive"
      ></img>
      <div class="eventGradientCardFive gradient"></div>
      <p class="eventTitleCardFive font">Event Title</p>
      <p class="eventDescriptionCardFive font">Event Description</p>
    </div>
  );
};

export default eventCard_five;
