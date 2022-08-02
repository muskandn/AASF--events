import React from 'react';
// import Construction from '../../components/construction/construction';
import Abhisharcard from '../../components/abhisharCards/abhisharcard';
import CustomheaderComponent from '../../components/CustomHeaderComponent/CustomheaderComponent';
import { Fade } from 'react-reveal';
import Tilt from 'react-parallax-tilt';
import { AbhisharCard } from './abhisharData';
import './abhisharScreen.css';

function AbhisharScreen() {
  return (
    <div>
      {/* Trying Abhishar card
      
      <Abhisharcard
        image='https://res.cloudinary.com/dzerj4bzd/image/upload/v1655749782/AASF%20Website/abihsharcard-image_reivd1.png'
        heading='A Jog Down 
the Sports Lane'
        version='11.0'
        text='Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industryLorem Ipsum is simply dummy text of the printing and typesetting industry.'
      /> */}

      <CustomheaderComponent
        img='https://res.cloudinary.com/dzerj4bzd/image/upload/v1659433799/AASF%20Website/book_mjmmsx.png'
        text='Abhishar'
        SearchBarCondition='true'
      />
      <div className='abhisharpage-section'>
        <Fade left>
          <div className='abhisharpage-content-box'>
            <div className='abhisharpage-headings heading-font'>
              ABOUT
              <br />
              ABHISHAR
            </div>
            <div className='abhisharpage-text secondary-font'>
              “Abhishar”, the annual magazine of AASF, means companionship and
              has evolved from the names of our late AASF members- Abhinav
              Saxena and Tushar Sharma -two indispensable work engines of AASF.
            </div>
          </div>
        </Fade>
        <Fade right>
          <Tilt trackOnWindow='true' tiltMaxAngleX={10} tiltMaxAngleY={10}>
            <div className='abhisharpage-image'>
              <img
                alt='abhishar'
                src='https://res.cloudinary.com/dzerj4bzd/image/upload/v1654114321/AASF%20Website/homepage-abhishar_ugkdqk.png'
              ></img>
            </div>
          </Tilt>
        </Fade>
      </div>
      <div className='abhisharpage-card-container'>
        {AbhisharCard.map((card) => {
          <Abhisharcard
            key={card.version}
            image={card.image}
            heading={card.heading}
            version={card.version}
            text={card.text}
          />;
        })}
        {/* <Abhisharcard
        image='https://res.cloudinary.com/dzerj4bzd/image/upload/v1655749782/AASF%20Website/abihsharcard-image_reivd1.png'
        heading='A Jog Down the Sports Lane'
        version='11.0'
        text='Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industryLorem Ipsum is simply dummy text of the printing and typesetting industry.'
      /> */}
      </div>
    </div>
  );
}

export default AbhisharScreen;
