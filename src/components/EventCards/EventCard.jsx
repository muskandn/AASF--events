import React from 'react';
import './EventCard.css';

const EventCard = ({ image, heading, content }) => {
  return (
    <div className='new-event-card'>
      <div className='event-image-container'>
        <img className='event-image' src={image} alt='' />
      </div>
      <div className='event-details-container'>
        <div className='event-details-header'>{heading}</div>

        <div className='event-details'>{content}</div>
      </div>
    </div>
  );
};

export default EventCard;
