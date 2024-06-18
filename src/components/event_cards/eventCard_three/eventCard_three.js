import React from "react";
import "src/components/event_cards/eventCard_three/eventCard_three.css";

const EventCard_three = ({ title, description, image }) => {
  return (
    <div className="max-w-[85.75rem] max-h-[42.375rem] shadow">
      <img
        src={image}
        className="w-[85.75rem] h-[33.875rem] object-cover max-h-[33.875rem]"
      ></img>

      <div className="max-h-[8.5rem] max-w-[85.75rem]">
        <p className="mt-[1rem] mb-[0rem] ml-4 text-[1.5rem] leading-[2.221rem] font-space-mono font-bold tracking-[-0.02em]">
          {title}
        </p>
        <p className="mt-[0.5rem] ml-4 h-[3.688rem] text-[1.25rem] leading-[1.851rem] font-space-mono font-normal tracking-[-0.02em]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default EventCard_three;
