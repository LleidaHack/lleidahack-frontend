import React from "react";

const EventCard1 = ({ imageSrc, title, description, date }) => {
    return (
        <div className="event-card1 flex flex-column mb-2 border shadow hover h-94">
            <div className="max-h-48 overflow-hidden">
                <img src={imageSrc} alt="" className='object-cover w-full h-full '/>
            </div>
            <div className="px-4 ">
                <h3 className="event-card font-bold text-base leading-9	">{title}</h3>
                <p className="event-card1__description font-normal  leading-8">{description}</p>
                <p className="event-card1__date text-graycolor leading-8">{date}</p>
            </div>
        </div>
    );
};

export default EventCard1;