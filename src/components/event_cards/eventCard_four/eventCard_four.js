import React from "react";
import "src/components/event_cards/eventCard_four/eventCard_four.css";

const EventCard_four = ({ title, image }) => {
  return (
    <div className="shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 max-w-[192px] max-h-[128px]">
      <div
        className="max-w-[192px] max-h-[128px]"
        style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
      >
        <div className="max-w-[192px] max-h-[128px] h-[128px] gradient">
          <div className="h-1"></div>
          <p className="text-white mt-[92px] ml-2 h-6 text-base leading-[23.7px] font-space-mono font-normal tracking-[-0.02em]">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventCard_four;
