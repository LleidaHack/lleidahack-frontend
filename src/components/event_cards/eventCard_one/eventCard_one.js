import React from "react";
import "src/components/event_cards/eventCard_one/eventCard_one.css";
import background from "src/components/event_cards/defaultImage.jpg";

const EventCard_one = ({ title, description, date, image }) => {
  return (
    <div className="max-w-[312px] max-h-[376px] shadow">
      <img
        src={image}
        className="object-cover w-[312px] max-h-[33.875rem] h-[188px]"
      ></img>

      <p className=" ml-4 mt-[8px] text-[24px] leading-[35.54px] font-space-mono font-bold tracking-[-0.02em]">
        {title}
      </p>
      <p className=" ml-4 h-[82px] mt-[8px] text-[20px] leading-[29.62px] font-space-mono font-normal tracking-[-0.02em]">
        {description}
      </p>
      <p className="text-[#959595] mb-[8px] ml-4 mt-[16px] h-[30px] text-[20px] leading-[29.62px] font-space-mono font-normal tracking-[-0.02em]">
        {date}
      </p>
    </div>
  );
};

export default EventCard_one;
