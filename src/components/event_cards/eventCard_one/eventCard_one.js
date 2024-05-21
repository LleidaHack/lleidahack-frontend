import React from "react";
import "src/components/event_cards/eventCard_one/eventCard_one.css";
import background from "src/components/event_cards/defaultImage.jpg"

const EventCard_one = ({title, description, date, image}) => {
  return (
    <div className="w-[312px] h-[376px] min-w-[312px] min-h-[376px] shadow">
      <img
        src={image}
        className="absolute object-cover max-h-[188px]"
      ></img>
      <p className="mt-[196px] ml-4 h-[36px] min-w-[157px] min-h-[36px] text-2xl leading-[35.54px] absolute font-space-mono font-bold tracking-[-0.02em]">{title}</p>
      <p className="mt-[240px] ml-4 h-[82px] min-w-[280px] min-h-[82px] text-base leading-[29.62px] absolute font-space-mono font-normal tracking-[-0.02em]">{description}</p>
      <p className="text-[#959595] mt-[338px] ml-4 h-[30px] min-w-[119px] min-h-[30px] text-base leading-[29.62px] absolute font-space-mono font-normal tracking-[-0.02em]">{date}</p>
    </div>
  );
};

export default EventCard_one;
