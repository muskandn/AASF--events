import React from 'react';
import CondiontalRender from '../condtionalRender/ConditionalRender';
import Customheader from '../CustomHeader/Customheader';
import CustomSearchBar from '../CustomSearchBar/CustomSearchBar';

const CustomheaderComponent = ({
  img,
  text,
  SearchBarCondition,
  url1,
  url2,
  url3,
  link1,
  link2,
  link3,
}) => {
  return (
    <div>
      <Customheader img={img} text={text}></Customheader>
      <CondiontalRender condition={SearchBarCondition}>
        <CustomSearchBar
          url1={url1}
          url2={url2}
          url3={url3}
          link1={link1}
          link2={link2}
          link3={link3}
        />
      </CondiontalRender>
    </div>
  );
};

export default CustomheaderComponent;
