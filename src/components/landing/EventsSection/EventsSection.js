import React from "react";
import EventCard_five from "src/components/event_cards/eventCard_five/eventCard_five";
import EventCard_four from "src/components/event_cards/eventCard_four/eventCard_four";
import "src/components/landing/EventsSection/EventsSection.css";

import background from "src/components/event_cards/defaultImage.jpg";
import hack from "src/components/event_cards/Hack2023.jpg";

const EventSection = () => {
  return (
    <div className="mobile ampli max-w-[67.5rem] max-h-[34rem]">
      <div className="max-w-[65.5rem] max-h-[3rem] bg-black mt-4 ml-4 ">
        <p className="text-white font-space-mono font-bold tracking-[-0.02em] text-[2rem] leading-[2.962rem] ml-4">
          ESDEVENIMENTS
        </p>
      </div>

      <div className="flex ml-4 col">
        <div className="scale-100">
          <EventCard_five
            title="HackEPS 2023"
            description="Lleidahack celebra la 7a edició de la HackEPS, la hackató més gran de les terres de ponent."
            image={hack}
          />
        </div>

        <div className="adjust h-32 w-56">
          <div className="a">
            <div className="ml-4 mr-4 min-w-[43%]">
              <EventCard_four
                image={background}
                title="Event Title"
              ></EventCard_four>
            </div>
            <div className="ml-4 mr-4  min-w-[43%] wakawaka">
              <EventCard_four
                image={background}
                title="Event Title"
              ></EventCard_four>
            </div>
          </div>
          <div className="ml-4 mr-4 mt-4">
            <EventCard_four
              image={background}
              title="Event Title"
            ></EventCard_four>
          </div>
          <p className="text-[#ff742f] font-space-mono font-normal tracking-[-0.02em] text-[1rem] mt-[0.313rem] leading-[1.481rem] ml-4">
            Veure més...
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventSection;
