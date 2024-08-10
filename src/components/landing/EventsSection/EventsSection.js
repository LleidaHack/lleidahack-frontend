import React from "react";
import EventCard_five from "src/components/event_cards/eventCard_five/eventCard_five";
import EventCard_four from "src/components/event_cards/eventCard_four/eventCard_four";

import background from "src/components/event_cards/defaultImage.jpg";
import hack from "src/components/event_cards/Hack2023.jpg";

const EventSection = () => {
  return (
    <div className="max-[740px]:mr-4 max-[740px]:ml-4 max-[740px]:mb-[17.813rem] max-h-[34rem] w-full">
      <div className="max-h-[3rem] bg-black  ">
        <p className="text-white font-space-mono font-bold tracking-[-0.02em] text-[2rem] leading-[2.962rem] ml-4">
          ESDEVENIMENTS
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="w-5/6	">
          <EventCard_five
            title="HackEPS 2023"
            description="Lleidahack celebra la 7a edició de la HackEPS, la hackató més gran de les terres de ponent."
            image={hack}
          />
        </div>

        <div className="max-[740px]:ml-[-1rem] max-[740px]:mt-2 max-[740px]:w-auto max-[740px]:h-auto h-32 w-2/12		">
          <div className="max-[740px]:flex">
            <div className="">
              <EventCard_four
                image={background}
                title="Event Title"
              ></EventCard_four>
            </div>
            <div className="max-[740px]:mt-0">
              <EventCard_four
                image={background}
                title="Event Title"
              ></EventCard_four>
            </div>
          </div>
          <div className="">
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
