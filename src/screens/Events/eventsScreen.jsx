import React from 'react';
import EventCard from '../../components/Example/eventCard';
import CustomheaderComponent from '../../components/CustomHeaderComponent/CustomheaderComponent';
import EventPageData from './eventData.json';
import './eventsScreen.css';

function EventsScreen() {
  return (
    <div>
      <CustomheaderComponent
        img='https://res.cloudinary.com/dzerj4bzd/image/upload/v1673372425/AASF%20Website/eventpagebg_rgzlrh.png'
        text='Events'
      />
      <div className='eventpage-card-container'>
        {EventPageData.map((card) => (
          <EventCard
            key={card.key}
            image={card.image}
            heading={card.heading}
            tag={card.tag}
            content={card.content}
            date1={card.date1}
            date2={card.date2}
            venue1={card.venue1}
            venue2={card.venue2}
          />
        ))}
      </div>
    </div>
  );
}

export default EventsScreen;
