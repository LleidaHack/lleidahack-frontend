

import React from 'react';

const EventCard3 = ({ imageSrc, title, description }) => {
    return (
        <div className="event-card3 flex flex-column mb-2 border shadow hover">
            <div className="event-card3__image bg-white h-128 items-center justify-center">
                <img src={imageSrc} alt="" className='object-cover'/>
            </div>
            <div className="event-card3__content px-4">
                <h3 className="event-card3__title">{title}</h3>
                <p className="event-card3__description">{description}</p>
            </div>
        </div>
    );
};

export default EventCard3;