import React from "react";
import "src/components/event_cards/eventCard_two/eventCard_two.css";

const EventCard_two = ({ title, date, place, image }) => {
  return (
    <div className="flex max-w-[26.5rem] max-h-[10rem] shadow">
      <img
        src={image}
        className="object-cover h-[10rem] max-h-[10rem] w-[10rem]"
      ></img>

      <div>
        <p className="ml-[0.938rem] mt-[1rem] h-[2.25rem] text-[1.5rem] leading-[2.221rem] font-space-mono font-bold tracking-[-0.02em]">
          {title}
        </p>
        <p className="ml-[0.938rem] mt-[0.5rem] text-[#959595] h-[1.875rem] text-[1.25rem] leading-[1.851rem] font-space-mono font-normal tracking-[-0.02em]">
          {date}
        </p>
        <p className="ml-[0.938rem] mt-[0.5rem] h-[1.875rem] text-[1.25rem] leading-[1.851rem] font-space-mono font-normal tracking-[-0.02em]">
          {place}
        </p>
      </div>
    </div>
  );
};

export default EventCard_two;
