import React from "react";
import "src/components/event_cards/newsCard/newsCard.css";

const NewsCard = ({title, image}) => {
  return (
    <div className="w-[328px] h-[128px] min-w-[328px] min-h-[128px] shadow">
      <img
        src={image}
        className="max-h-[96px] max-w-[140px] mt-[16px] ml-[16px] absolute imageFitScreen"
      ></img>
      <p className="h-[96px] min-w-[144px] min-h-[96px] mt-[16px] ml-[168px] text-[16px] leading-[23.7px] absolute font-space-mono font-normal tracking-[-0.02em]">{title}</p>
    </div>
  );
};

export default NewsCard;
