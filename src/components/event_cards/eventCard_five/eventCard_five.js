import React from "react";
import "src/components/event_cards/eventCard_five/eventCard_five.css";

const EventCard_five = ({ title, description, image }) => {
  return (
    <div class="  shadow">
      <div
        className=" w-full z-20"
        style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
      >
        <div className="  gradient">
          <p className="text-[0.0000001px]">.</p>
          <p className="max-[420px]:truncate text-white ml-4 max-w-[50.5rem] mt-[18.063rem] mb-0 text-[3rem] leading-[4.443rem] font-space-mono font-normal tracking-[-0.02em]">
            {title}
          </p>
          <p className=" max-[740px]:truncate text-white ml-4 max-w-[50.5rem] h-[4.563rem] mb-0 text-[1.5rem] leading-[2.221rem] font-space-mono font-normal tracking-[-0.02em]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventCard_five;
