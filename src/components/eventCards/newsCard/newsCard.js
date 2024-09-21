import React from "react";
import "src/components/eventCards/newsCard/newsCard.css";

const NewsCard = ({ title, image }) => {
  return (
    <div className="flex max-w-[20.5rem] max-h-32 shadow">
      <img
        src={image}
        className="mt-4 ml-4 h-24 max-h-24 w-[8.75rem] object-cover"
      ></img>
      <p className="h-24 mt-4 ml-3 text-[1rem] leading-[1.481rem] font-space-mono font-normal tracking-[-0.02em]">
        {title}
      </p>
    </div>
  );
};

export default NewsCard;
