import React from 'react';
import './construction.css';

function Construction() {
  return (
    <div className='construction flex-centre'>
      <div className='construction-image'>
        <img
          src='https://res.cloudinary.com/dzerj4bzd/image/upload/v1654273590/AASF%20Website/contruction-vector_htes0v.png'
          alt='construction'
        ></img>
      </div>
      <div className='construction-text'>{'<UnderProgress/>'}</div>
    </div>
  );
}

export default Construction;
