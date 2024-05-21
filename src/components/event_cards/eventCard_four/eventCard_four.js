import React from "react";
import "src/components/event_cards/eventCard_four/eventCard_four.css";

const EventCard_four = ({ title, image }) => {
  return (
    <div className="shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 w-[192px] h-[128px] min-w-[192px] min-h-[128px] absolute">
      <img src={image} className="absolute object-cover"></img>
      <div className="w-[192px] h-[96px] min-w-[192px] min-h-[96px] mt-8 absolute gradient"></div>
      <p className="text-white mt-24 ml-2 h-6 min-w-[105px] min-h-6 text-base leading-[23.7px] absolute font-space-mono font-normal tracking-[-0.02em]">
        {title}
      </p>
    </div>
  );
};

export default EventCard_four;
