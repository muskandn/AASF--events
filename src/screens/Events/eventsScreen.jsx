import React, { useState, useEffect } from 'react';
import NewEventCard from '../../components/newEventCard/NewEventCard';
import EventCard from '../../components/EventCards/EventCard';
import EventPageData from './eventData.json';
import flagshipeventData from './flagshipeventData.json';
import EventHeader from '../../components/EventHeader/EventHeader';
import './eventsScreen.css';

const CardsPerPage = 4;

function EventsScreen() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const totalPages = Math.ceil(EventPageData.length / CardsPerPage);

  const startIndex = (currentPage - 1) * CardsPerPage;
  const endIndex =
    startIndex + (isMobile ? CardsPerPage : EventPageData.length);
  const visibleCards = EventPageData.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <EventHeader />
      <div className='flagship-events-container'>
        <div className='flagship-events-main-container'>
          <div className='flagship-events-text-container'>Flagship Events</div>
          <div className='flagship-events'>
            {flagshipeventData.map((card) => (
              <NewEventCard
                key={card.key}
                image={card.image}
                heading={card.heading}
                tags={card.tag}
                content={card.content}
              />
            ))}
          </div>
        </div>
      </div>
      <div
        className={`events-container ${
          isMobile ? 'event-container-mobile' : ''
        }`}
      >
        <div className='events-main-container'>
          <div className='events-text-container'>Events</div>
          <div className='events'>
            {visibleCards.map((card) => (
              <EventCard
                key={card.key}
                image={card.image}
                heading={card.heading}
                content={card.content}
              />
            ))}
          </div>
          {isMobile && (
            <div className='pagination'>
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={currentPage === index + 1 ? 'active' : ''}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default EventsScreen;
