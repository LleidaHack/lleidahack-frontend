import React from "react";
import "src/components/event_cards/eventCard_five/eventCard_five.css";

const EventCard_five = ({ title, description, image }) => {
  return (
    <div class="max-w-[52.5rem] max-h-[28rem] shadow">
      <div
        className="max-w-[52.5rem] max-h-[28rem] z-20"
        style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
      >
        <div className="max-w-[52.5rem] h-[28rem] gradient">
          <div className="h-1"></div>
          <p className="text-white ml-4 max-w-[50.5rem] mt-[18rem] mb-[0rem] text-[3rem] leading-[4.443rem] font-space-mono font-normal tracking-[-0.02em]">
            {title}
          </p>
          <p className="text-white ml-4 max-w-[50.5rem] h-[4.563rem] mb-[0rem] text-[1.5rem] leading-[2.221rem] font-space-mono font-normal tracking-[-0.02em]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventCard_five;
