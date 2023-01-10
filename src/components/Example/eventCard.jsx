import React from 'react';
import './eventCard.css';
import VenueLogo from '../../assets/svgIcons/venueLogo';
import DateLogo from '../../assets/svgIcons/dateLogo';

function EventCard({
  image,
  heading,
  tag,
  content,
  date1,
  date2,
  venue1,
  venue2,
}) {
  return (
    <div className='event-card-container'>
      <div className='event-card-container-head'>
        <div className='event-card-image'>
          <img src={image} alt='abhishar' />
        </div>
        <div className='event-card-head-content'>
          <div className='event-card-heading primary-font'>{heading}</div>
          <div className='event-card-version'>{tag}</div>
          <div className='event-card-text secondary-font'>
            {content} <br />
            <br />
          </div>
        </div>
      </div>
      <div className='event-card-content'>
        <div className='event-card-info'>
          <div className='event-card-info-icon'>
            <DateLogo />
          </div>
          <div className='event-card-info-text'>
            <div className='secondary-font event-card-info-text-top '>
              {date1}
            </div>
            <div className='secondary-font event-card-info-text-bottom'>
              {date2}
            </div>
          </div>
        </div>
        <div className='event-card-info'>
          <div className='event-card-info-icon'>
            <VenueLogo />
          </div>
          <div className='event-card-info-text'>
            <div className='secondary-font event-card-info-text-top'>
              {venue1}
            </div>
            <div className='secondary-font event-card-info-text-bottom'>
              {venue2}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
