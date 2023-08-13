import React from 'react';
import './NewEventCard.css';

function NewEventCard({ image, heading, tags, content }) {
  return (
    <div className='flagship-event-card'>
      <div className='flagship-event-image-container'>
        <img className='flagship-event-image' src={image} alt='' />
      </div>
      <div className='flagship-event-details-container'>
        <div className='flagship-event-details-header'>{heading}</div>
        <div className='flagship-event-type-container'>
          {Array.isArray(tags) ? (
            tags.map((tag) => (
              <div
                className={
                  tag === 'Technical'
                    ? 'flagship-event-type'
                    : tag === 'Literary'
                      ? 'flagship-event-type-2'
                      : tag === 'Managerial'
                        ? 'flagship-event-type-3'
                        : ''
                }
                key={tag}
              >
                {tag}
              </div>
            ))
          ) : (
            <div className='flagship-event-type'>{tags}</div>
          )}
        </div>
        <div className='flagship-event-details'>{content}</div>
      </div>
    </div>
  );
}

export default NewEventCard;
