import React from "react";
import "src/components/eventCards/EventCardOne/EventCardOne.css";
import background from "src/components/eventCards/defaultImage.jpg";

const EventCardOne = ({ title, description, date, image }) => {
  return (
    <div className="max-w-[19.5rem] max-h-[23.5rem] shadow">
      <img
        src={image}
        className="object-cover w-[19.5rem] max-h-[33.875rem] h-[11.75rem]"
      ></img>

      <p className=" ml-4 mt-2 text-[1.5rem] leading-[2.221rem] font-space-mono font-bold tracking-[-0.02em]">
        {title}
      </p>
      <p className=" ml-4 h-[5.125rem] mt-2 text-[1.25rem] leading-[1.851rem] font-space-mono font-normal tracking-[-0.02em]">
        {description}
      </p>
      <p className="text-[#959595] mb-2 ml-4 mt-4 h-[1.875rem] text-[1.25rem] leading-[1.851rem] font-space-mono font-normal tracking-[-0.02em]">
        {date}
      </p>
    </div>
  );
};

export default EventCardOne;
