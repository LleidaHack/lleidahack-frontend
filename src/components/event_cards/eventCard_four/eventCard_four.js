import React from "react";
import "src/components/event_cards/eventCard_four/eventCard_four.css";

const EventCard_four = ({ title, image }) => {
  return (
    <div className="shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 max-w-48 max-h-32">
      <div
        className="max-w-48 max-h-32"
        style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
      >
        <div className="max-w-48 max-h-32 h-32 gradient">
          <p className="text-[0.0000001px]">.</p>
          <p className="text-white mt-24 ml-2 h-6 text-base leading-[1.481rem] font-space-mono font-normal tracking-[-0.02em]">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventCard_four;
