import React from "react";
import "src/components/event_cards/newsCard/newsCard.css";

const NewsCard = ({ title, image }) => {
  return (
    <div className="flex max-w-[20.5rem] max-h-[8rem] shadow">
      <img
        src={image}
        className="mt-[1rem] ml-[1rem] h-[6rem] max-h-[6rem] w-[8.75rem] object-cover"
      ></img>
      <p className="h-[6rem] mt-[1rem] ml-[0.75rem] text-[1rem] leading-[1.481rem] font-space-mono font-normal tracking-[-0.02em]">
        {title}
      </p>
    </div>
  );
};

export default NewsCard;
