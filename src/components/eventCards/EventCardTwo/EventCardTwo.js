import React from "react";
import "src/components/eventCards/EventCardTwo/EventCardTwo.css";

const EventCardTwo = ({ title, date, place, image }) => {
  return (
    <div className="flex max-w-[26.5rem] max-h-40 shadow">
      <img src={image} className="object-cover h-40 max-h-40 w-40"></img>

      <div>
        <p className="ml-[0.938rem] mt-4 h-9 text-[1.5rem] leading-[2.221rem] font-space-mono font-bold tracking-[-0.02em]">
          {title}
        </p>
        <p className="ml-[0.938rem] mt-2 text-[#959595] h-[1.875rem] text-[1.25rem] leading-[1.851rem] font-space-mono font-normal tracking-[-0.02em]">
          {date}
        </p>
        <p className="ml-[0.938rem] mt-2 h-[1.875rem] text-[1.25rem] leading-[1.851rem] font-space-mono font-normal tracking-[-0.02em]">
          {place}
        </p>
      </div>
    </div>
  );
};

export default EventCardTwo;
