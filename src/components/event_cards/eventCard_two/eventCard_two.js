import React from "react";
import "src/components/event_cards/eventCard_two/eventCard_two.css";

const EventCard_two = ({ title, date, place, image }) => {
  return (
    <div className="flex max-w-[424px] max-h-[160px] shadow">
      <img src={image} className="object-cover h-[160px] max-h-[160px] w-[160px]"></img>

      <div>
        <p className="ml-[15px] mt-[16px] h-[36px] text-[24px] leading-[35.54px] font-space-mono font-bold tracking-[-0.02em]">
          {title}
        </p>
        <p className="ml-[15px] mt-[8px] text-[#959595] h-[30px] text-[20px] leading-[29.62px] font-space-mono font-normal tracking-[-0.02em]">
          {date}
        </p>
        <p className="ml-[15px] mt-[8px] h-[30px] text-[20px] leading-[29.62px] font-space-mono font-normal tracking-[-0.02em]">
          {place}
        </p>
      </div>
    </div>
  );
};

export default EventCard_two;
