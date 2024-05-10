

import React from 'react';

const EventCard3 = ({ imageSrc, title, description }) => {
    return (
        <div className="event-card3 flex flex-column mb-2">
            <div className="event-card3__image max-h-96 overflow-hidden">
                <img src={imageSrc} alt="" className='w-full object-cover' />
            </div>
            <div className="event-card3__content px-4">
                <h3 className="event-card3__title">{title}</h3>
                <p className="event-card3__description">{description}</p>
            </div>
        </div>
    );
};

export default EventCard3;