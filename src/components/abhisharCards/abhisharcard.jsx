import React from 'react';
import './abhisharcard.css';
function Abhisharcard({ image, heading, version, text }) {
  return (
    <div className='abhishar-card-container'>
      <div className='abhishar-card-image'>
        <img src={image} alt='abhishar' />
      </div>
      <div className='abhishar-card-content'>
        <div className='abhishar-card-heading primary-font'>{heading}</div>
        <div className='abhishar-card-version'>ABHISHAR V{version}</div>
        <div className='abhishar-card-text secondary-font'>{text}</div>
      </div>
    </div>
  );
}

export default Abhisharcard;
