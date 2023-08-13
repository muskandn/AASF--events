import React, { useState, useEffect } from 'react';
//import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import oratoryL from '../../assets/Images/Oratory.png';
import oratoryS from '../../assets/Images/Oratory02.png';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './EventHeader.css';

const EventHeader = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    // <div className='event-header'>
    <Carousel
      autoPlay
      infiniteLoop
      showArrows={false}
      interval={3000}
      showStatus={false}
      showIndicators={false}
    >
      <div>
        <div className='event-header-container'>
          <div className='eventFirst'>
            <h1>Oratory</h1>
          </div>
          <div className='eventSecond'>
            <h1>Literary</h1>
          </div>
          <div className='eventThird'>
            <h1>Managerial</h1>
          </div>
          <div className='imageDiv'>
            <div className='eventForth active'>
              <h1>Technical</h1>
            </div>
            <div className='eventPic'>
              {/* <ImageComponent screenWidth={screenWidth} /> */}
              <img src={screenWidth > 600 ? oratoryL : oratoryS} alt='' />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className='event-header-container'>
          <div className='eventFirst'>
            <h1>Oratory</h1>
          </div>
          <div className='eventSecond'>
            <h1>Literary</h1>
          </div>
          <div className='imageDiv'>
            <div className='eventThird active'>
              <h1>Managerial</h1>
            </div>
            <div className='eventPic'>
              <img src={screenWidth > 600 ? oratoryL : oratoryS} alt='' />
            </div>
          </div>
          <div className='eventForth'>
            <h1>Technical</h1>
          </div>
        </div>
      </div>

      <div>
        <div className='event-header-container'>
          <div className='eventFirst'>
            <h1>Oratory</h1>
          </div>
          <div className='imageDiv'>
            <div className='eventSecond active'>
              <h1>Literary</h1>
            </div>

            <div className='eventPic'>
              <img src={screenWidth > 600 ? oratoryL : oratoryS} alt='' />
            </div>
          </div>

          <div className='eventThird'>
            <h1>Managerial</h1>
          </div>
          <div className='eventForth'>
            <h1>Technical</h1>
          </div>
        </div>
      </div>

      <div>
        <div className='event-header-container'>
          <div className='imageDiv'>
            <div className='eventFirst active'>
              <h1>Oratory</h1>
            </div>
            <div className='eventPic'>
              <img src={screenWidth > 600 ? oratoryL : oratoryS} alt='' />
            </div>
          </div>

          <div className='eventSecond'>
            <h1>Literary</h1>
          </div>
          <div className='eventThird'>
            <h1>Managerial</h1>
          </div>
          <div className='eventForth'>
            <h1>Technical</h1>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default EventHeader;
