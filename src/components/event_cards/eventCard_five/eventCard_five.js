import React from "react";
import "src/components/event_cards/eventCard_five/eventCard_five.css";

const EventCard_five = ({ title, description, image }) => {
  return (
    <div class="shadow">
      <div
        className="w-full z-20"
        style={{ backgroundImage: `url(${image})`, backgroundSize: "cover", width: "100%", height: "100%" }}
      >
         <div className="gradient"> 
          <p className="text-sm md:text-[0.0000001px]">.</p>
          <p className="mb-2 md:mb-0 max-[420px]:truncate text-white ml-4 max-w-[50.5rem] md:mt-[18.063rem]  text-[3rem] md:leading-[4.443rem] font-medium	 tracking-[-0.02em] text-xl md:text-4xl">
            {title}
          </p>
          <div className="overflow-hidden text-ellipsis ">
            <p className="text-white ml-4 max-w-[50.5rem] h-[4.563rem] mb-0 text-[1.5rem] md:leading-[2.221rem] md:tracking-[-0.02em] text-base md:text-2xl line-clamp-3 mb-3 md:mb-0">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard_five;
