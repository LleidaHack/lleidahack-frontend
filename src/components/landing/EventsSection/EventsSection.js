import { React, useEffect, useState } from "react";
import EventCardFive from "src/components/eventCards/EventCardFive/EventCardFive";
import EventCardFour from "src/components/eventCards/EventCardFour/EventCardFour";

import background from "src/components/eventCards/defaultImage.jpg";
import hack from "src/components/eventCards/Hack2023.jpg";

const EventSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!isMobile) {
    return (
      <div className="max-[740px]:mr-4 max-[740px]:ml-4 max-[740px]:mb-[17.813rem] max-h-[34rem] w-full">
        <div className="max-h-[3rem] bg-black  ">
          <p className="text-white font-space-mono font-bold tracking-[-0.02em] text-[2rem] leading-[2.962rem] ml-4">
            ESDEVENIMENTS
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="w-5/6	">
            <EventCardFive
              title="HackEPS 2024"
              description="Lleidahack celebra la 8a edició de la HackEPS, la hackató més gran de les terres de ponent."
              image={hack}
            />
          </div>

          <div className="max-[740px]:ml-[-1rem] max-[740px]:mt-2 max-[740px]:w-auto max-[740px]:h-auto h-32 w-2/12		">
            <div className="max-[740px]:flex">
              <div className="">
                <EventCardFour
                  image={background}
                  title="Event Title"
                ></EventCardFour>
              </div>
              <div className="max-[740px]:mt-0">
                <EventCardFour
                  image={background}
                  title="Event Title"
                ></EventCardFour>
              </div>
            </div>
            <div className="">
              <EventCardFour
                image={background}
                title="Event Title"
              ></EventCardFour>
            </div>
            <p className="text-[#ff742f] font-space-mono font-normal tracking-[-0.02em] text-[1rem] mt-[0.313rem] leading-[1.481rem] ml-4">
              Veure més...
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col">
        <div className="bg-black mb-3">
          <p className="text-white font-space-mono font-bold tracking-[-0.02em] text-[2rem] leading-[2.962rem] ml-4">
            ESDEVENIMENTS
          </p>
        </div>
        <div className="mb-3 ">
          <EventCardFive
            title="HackEPS 2024"
            description="Lleidahack celebra la 8a edició de la HackEPS, la hackató més gran de les terres de ponent."
            image={hack}
          />
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex flex-row gap-2 bg-transparent">
            <EventCardFour image={background} title="Event Title" />
            <EventCardFour image={background} title="Event Title" />
          </div>
          <div className="flex flex-row gap-2">
            <EventCardFour image={background} title="Event Title" />
            <EventCardFour image={background} title="Event Title" />
          </div>
          <p className="text-[#ff742f] font-space-mono font-normal tracking-[-0.02em] text-[1rem] mt-[0.313rem] leading-[1.481rem] ml-4">
            Veure més...
          </p>
        </div>
      </div>
    );
  }
};

export default EventSection;
