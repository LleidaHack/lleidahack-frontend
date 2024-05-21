import React from "react";
import EventCard_five from "src/components/event_cards/eventCard_five/eventCard_five";
import EventCard_four from "src/components/event_cards/eventCard_four/eventCard_four";

import background from "src/components/event_cards/defaultImage.jpg";
import hack from "src/components/event_cards/Hack2023.jpg"

const EventSection = () => {
    return (
        <div className="w-[1080px] h-[544px] min-w-[1080px] min-h-[544px]">
            <div className="w-[1048px] h-[48px] min-w-[1048px] min-h-[48px] bg-black mt-4 ml-4 absolute">
                <p className="text-white font-space-mono font-bold tracking-[-0.02em] text-[32px] leading-[47.39px] ml-4">EVENTS</p>
            </div>
            <div className="mt-20 ml-4 mb-4 absolute">
                <EventCard_five title="HackEPS 2023" description="Lleidahack celebra la 7a edició de la HackEPS, la hackató més gran de les terres de ponent." image={hack}/>
            </div>
            <div className="w-[224px] h-[448px] min-w-[224px] min-h-[448px] mt-16 ml-[856px] mb-4 absolute">
                <div className="mt-4 ml-4 mr-4">
                    <EventCard_four image={background} title="Event Title"></EventCard_four>
                </div>
                <div className="mt-40 ml-4 mr-4">
                    <EventCard_four image={background} title="Event Title"></EventCard_four>
                </div>
                <div className="mt-[304px] ml-[16px] mr-[16px]">
                    <EventCard_four image={background} title="Event Title"></EventCard_four>
                </div>
            </div>
            <p className="text-[#ff742f] font-space-mono font-normal tracking-[-0.02em] text-[16px] leading-[23.7px] mt-[504px] ml-[872px] absolute">Veure més...</p>
        </div>
    );
};

export default EventSection;