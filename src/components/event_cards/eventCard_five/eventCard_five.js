import React from "react";
import "src/components/event_cards/eventCard_five/eventCard_five.css";

const EventCard_five = ({ title, description, image }) => {
  return (
    <div class="max-w-[840px] max-h-[448px] shadow">
      <div className="max-w-[840px] max-h-[448px] z-20" style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}> 
        <div className="max-w-[840px] h-[448px] gradient">
          <div className="h-1"></div>
          <p className="text-white ml-4 max-w-[808px] mt-[288px] mb-[0px] text-[48px] leading-[71.09px] font-space-mono font-normal tracking-[-0.02em]">
            {title}
          </p>
          <p className="text-white ml-4 max-w-[808px] h-[73px] mb-[0px] text-[24px] leading-[35.54px] font-space-mono font-normal tracking-[-0.02em]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventCard_five;
