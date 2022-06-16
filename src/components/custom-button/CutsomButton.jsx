import React from 'react';
import './customButton.css';

const CustomButton = (props) => {
  return (
    <div className='ab'>
      <p
        onClick={() => props.CustomButtom__onClickFunction()}
        className='customButton heading-font'
      >
        {props.customButton__text}
      </p>
    </div>
  );
};

export default CustomButton;
