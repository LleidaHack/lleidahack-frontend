import React from "react";
import NewsVerticalDisplay from "src/components/landing/NewsVerticalDisplay/NewsVerticalDisplay";
import EventSection from "src/components/landing/EventsSection/EventsSection";

const NewsAndEventsSection = () => {

    return (
        <div className="flex flex-col mdflex-row mx-3 md:mx-12 md:gap-4 gap-5">
            <div className="md:w-5/6">
                <EventSection />
            </div>
            <div className="md:w-1/6">
                <NewsVerticalDisplay />
            </div>
        </div>

    );
};

export default NewsAndEventsSection;