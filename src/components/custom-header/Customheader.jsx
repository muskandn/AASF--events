import React from 'react';
import './customHeader.css';

const Customheader = (props) => {
  return (
    <div>
      <div className='customHeaderContainer'>
        <div className='customHeader__image'>
          <img src={props.img} alt='' border='0'></img>
        </div>
        <div className='customHeader__text'>{props.text}</div>
      </div>
    </div>
  );
};

export default Customheader;
