import React from "react";
import "src/components/event_cards/eventCard_two/eventCard_two.css";

const eventCard_two = () => {
  return (
    <div class="eventCardTwo shadow">
        <img src="/src/components/event_cards/defaultImage.jpg" class="defaultImageCardTwo"></img>
        <p class="eventTitleCardTwo eventTitle">Event Title</p>
        <p class="eventDateCardTwo font textBase">Event Date</p>
        <p class="eventPlaceCardTwo font textBase">Event Place</p>
    </div>
  );
};

export default eventCard_two;