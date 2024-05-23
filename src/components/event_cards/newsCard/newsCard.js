import React from "react";
import "src/components/event_cards/newsCard/newsCard.css";

const NewsCard = ({ title, image }) => {
  return (
    <div className="flex max-w-[328px] max-h-[128px] shadow">
      <img
        src={image}
        className="mt-[16px] ml-[16px] h-[96px] max-h-[96px] w-[140px] object-cover"
      ></img>
      <p className="h-[96px] mt-[16px] ml-[12px] text-[16px] leading-[23.7px] font-space-mono font-normal tracking-[-0.02em]">
        {title}
      </p>
    </div>
  );
};

export default NewsCard;
