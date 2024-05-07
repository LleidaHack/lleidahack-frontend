import React from "react";
import "src/components/event_cards/newsCard/newsCard.css";

const newsCard = () => {
  return (
    <div class="newsCard shadow">
      <img
        src="/src/components/event_cards/defaultImage.jpg"
        class="defaultImageNewsCard"
      ></img>
      <p class="titleNewsCard font">Title</p>
    </div>
  );
};

export default newsCard;
