import React from "react";
import "src/components/event_cards/eventCard_three/eventCard_three.css";

const eventCard_three = () => {
  return (
    <div class="eventCardThree shadow">
      <img
        src="/src/components/event_cards/defaultImage.jpg"
        class="defaultImageCardThree"
      ></img>
      <p class="eventTitleCardThree eventTitle">Event Title</p>
      <p class="eventDescriptionCardThree font textBase">Event Description</p>
    </div>
  );
};

export default eventCard_three;
