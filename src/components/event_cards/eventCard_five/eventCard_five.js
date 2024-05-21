import React from "react";
import "src/components/event_cards/eventCard_five/eventCard_five.css";

const EventCard_five = ({title, description, image}) => {
  return (
    <div class="w-[840px] h-[448px] min-w-[840px] min-h-[448px] absolute shadow">
      <img
        src= {image}
        className="absolute object-cover"
      ></img>
      <div className="w-[840px] h-[448px] min-w-[840px] min-h-[448px] absolute gradient">
      </div>
      <p className="text-white mt-[289px] ml-4 w-[808px] h-[71px] min-w-[808px] min-h-[71px] text-4xl leading-[71.09px] absolute font-space-mono font-normal tracking-[-0.02em]">{title}</p>
      <p className="text-white mt-[360px] ml-4 w-[808px] h-[72px] min-w-[808px] min-h-[72px] text-2xl leading-[35.54px] absolute font-space-mono font-normal tracking-[-0.02em]">{description}</p>
    </div>
  );
};

export default EventCard_five;
