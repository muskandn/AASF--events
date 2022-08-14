import React from 'react';
import CustomButton from '../custom-button/CutsomButton';
import './abhisharcard.css';

function Abhisharcard({ image, heading, version, text, link }) {
  const customFunction = () => {
    window.open(link, '_blank');
  };

  return (
    <div className='abhishar-card-container'>
      <div className='abhishar-card-image'>
        <img src={image} alt='abhishar' />
      </div>
      <div className='abhishar-card-content'>
        <div className='abhishar-card-heading primary-font'>{heading}</div>
        <div className='abhishar-card-version'>ABHISHAR v{version}</div>
        <div className='abhishar-card-text secondary-font'>
          {text} <br />
          <br />
        </div>
        <div className='abhishar-card-button'>
          <CustomButton
            CustomButtom__onClickFunction={customFunction}
            customButton__text='Read'
          />
        </div>
      </div>
    </div>
  );
}

export default Abhisharcard;
