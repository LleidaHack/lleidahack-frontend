import React from "react";
import "src/components/event_cards/eventCard_three/eventCard_three.css";

const EventCard_three = ({ title, description, image }) => {
  return (
    <div className="w-[1312px] h-[678px] min-w-[1312px] min-h-[678px] absolute shadow">
      <img src={image} className="absolute object-fill max-h-[542px]"></img>
      <p className="mt-[555px] ml-4 w-[1280px] h-[36px] min-w-[1280px] min-h-[36px] text-2xl leading-[35.54px] absolute font-space-mono font-bold tracking-[-0.02em]">
        {title}
      </p>
      <p className="mt-[602px] ml-4 w-[1280px] h-[59px] min-w-[1280px] min-h-[59px] text-base leading-[29.62px] font-space-mono font-normal tracking-[-0.02em]">
        {description}
      </p>
    </div>
  );
};

export default EventCard_three;
