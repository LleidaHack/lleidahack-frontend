import React from "react";
import NewsVerticalDisplay from "src/components/landing/NewsVerticalDisplay/NewsVerticalDisplay";
import EventSection from "src/components/landing/EventsSection/EventsSection";

const NewsAndEventsSection = () => {

    return (
        <div className="flex flex-row mx-12 gap-4">
            <div className="w-5/6">
                <EventSection />
            </div>
            <div className="w-1/6">
                <NewsVerticalDisplay />
            </div>
        </div>

    );
};

export default NewsAndEventsSection;