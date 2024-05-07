import React from "react";
import "src/components/event_cards/eventCard_one/eventCard_one.css";

const eventCard_one = () => {
  return (
    <div class="eventCardOne shadow">
      <img
        src="/src/components/event_cards/defaultImage.jpg"
        class="defaultImageCardOne"
      ></img>
      <p class="eventTitleCardOne eventTitle">Event Title</p>
      <p class="eventDescriptionCardOne font textBase">Event Description</p>
      <p class="eventDateCardOne font textBase">Event Date</p>
    </div>
  );
};

export default eventCard_one;
