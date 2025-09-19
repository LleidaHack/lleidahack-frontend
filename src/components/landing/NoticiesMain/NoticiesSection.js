import React from "react";
import EventCard3 from "../ImageCards/EventCard3.js";
import EventCard1 from "../ImageCards/EventCard1.js";

const NoticiesSection = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mx-10 my-10">
      {Array.from({ length: 16 }).map((_, idx) => (
        <EventCard1
          key={idx}
          title="titulo"
          description="eventiwis kiwis"
          date="12/12/2023"
          imageSrc="https://via.placeholder.com/150"
        />
      ))}
    </div>
  );
};

export default NoticiesSection;
