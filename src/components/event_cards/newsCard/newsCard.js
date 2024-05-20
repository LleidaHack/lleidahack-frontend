import React from "react";
import "src/components/event_cards/newsCard/newsCard.css";
import background from "src/components/event_cards/defaultImage.jpg"

const newsCard = (title) => {
  return (
    <div className="newsCard shadow">
      <img
        src={background}
        className="absolute imageFitScreen"
      ></img>
      <p className="titleNewsCard font">{title}</p>
    </div>
  );
};

export default newsCard;
