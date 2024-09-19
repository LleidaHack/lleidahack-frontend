import React from "react";
import "src/components/eventCards/EventCardFour/EventCardFour.css";

const EventCardFour = ({ title, image }) => {
  return (
    <div className="bg-transparent shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 w-full max-h-32 w-48">
      <div
        className="max-h-32 "
        style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
      >
        <div className="max-h-32 h-32 gradient">
          <p className="text-[0.0000001px]">.</p>
          <p className="text-white mt-24 ml-2 h-6 text-base leading-[1.481rem] font-space-mono font-normal tracking-[-0.02em]">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventCardFour;
