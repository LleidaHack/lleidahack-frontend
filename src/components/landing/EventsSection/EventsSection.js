import React from "react";
import EventCard_five from "src/components/event_cards/eventCard_five/eventCard_five";
import EventCard_four from "src/components/event_cards/eventCard_four/eventCard_four";

import background from "src/components/event_cards/defaultImage.jpg";
import hack from "src/components/event_cards/Hack2023.jpg";

const EventSection = () => {
  return (
    <div className="max-w-[1080px] max-h-[544px]">
      <div className="max-w-[1048px] max-h-[48px] bg-black mt-4 ml-4 ">
        <p className="text-white font-space-mono font-bold tracking-[-0.02em] text-[32px] leading-[47.39px] ml-4">
          EVENTS
        </p>
      </div>


      <div className="flex ml-4">
        <EventCard_five
          title="HackEPS 2023"
          description="Lleidahack celebra la 7a edició de la HackEPS, la hackató més gran de les terres de ponent."
          image={hack}
        />

        <div className="max-w-[224px] max-h-[128px] h-[128px] w-[224px]">
          <div className=" ml-4 mr-4">
            <EventCard_four
              image={background}
              title="Event Title"
            ></EventCard_four>
          </div>
          <div className="ml-4 mt-[16px] mr-4">
            <EventCard_four
              image={background}
              title="Event Title"
            ></EventCard_four>
          </div>
          <div className="ml-[16px] mt-[16px] mr-[16px]">
            <EventCard_four
              image={background}
              title="Event Title"
            ></EventCard_four>
          </div>
          <p className="text-[#ff742f] font-space-mono font-normal tracking-[-0.02em] text-[16px] mt-[5px] leading-[23.7px] ml-[16px]">
          Veure més...
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventSection;
