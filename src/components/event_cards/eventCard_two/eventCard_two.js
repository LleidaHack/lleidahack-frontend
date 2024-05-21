import React from "react";
import "src/components/event_cards/eventCard_two/eventCard_two.css";

const EventCard_two = ({title, date, place, image}) => {
  return (
    <div className="w-[424px] h-[160px] min-w-[424px] min-h-[160px] shadow">
      <img
        src= {image}
        className="absolute object-fill max-w-[160px]"
      ></img>
      <p className="mt-[16px] ml-[176px] h-[36px] min-w-[157px] min-h-[36px] text-2xl leading-[35.54px] absolute font-space-mono font-bold tracking-[-0.02em]">{title}</p>
      <p className="mt-[60px] text-[#959595] ml-[176px] h-[30px] min-w-[119px] min-h-[30px] text-base leading-[29.62px] absolute font-space-mono font-normal tracking-[-0.02em]">{date}</p>
      <p className="mt-[98px] ml-[176px] h-[30px] min-w-[131px] min-h-[30px] text-base leading-[29.62px] absolute font-space-mono font-normal tracking-[-0.02em]">{place}</p>
    </div>
  );
};

export default EventCard_two;
