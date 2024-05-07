import React from "react";
import "src/components/event_cards/eventCard_four/eventCard_four.css";

const eventCard_four = () => {
  return (
    <div class="eventCardFour shadow">
      <img
        src="/src/components/event_cards/defaultImage.jpg"
        class="eventCardFour"
      ></img>
      <div class="eventGradientCardFour gradient"></div>
      <p class="eventTitleCardFour font">Event Title</p>
    </div>
  );
};

export default eventCard_four;
