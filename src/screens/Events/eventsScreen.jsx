import React from 'react';
import EventCard from '../../components/Example/eventCard';
import CustomheaderComponent from '../../components/CustomHeaderComponent/CustomheaderComponent';
import EventPageData from './eventData.json';
import './eventsScreen.css';

function EventsScreen() {
  return (
    <div>
      <CustomheaderComponent
        img='https://res.cloudinary.com/dzerj4bzd/image/upload/v1659433799/AASF%20Website/book_mjmmsx.png'
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
            date={card.date}
            venue={card.venue}
          />
        ))}
      </div>
    </div>
  );
}

export default EventsScreen;
