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
  link1,
  link2,
  data,
  setList,
}) => {
  return (
    <div>
      <Customheader img={img} text={text}></Customheader>
      <CondiontalRender condition={SearchBarCondition}>
        <CustomSearchBar
          url1={url1}
          url2={url2}
          link1={link1}
          link2={link2}
          data={data}
          setList={setList}
        />
      </CondiontalRender>
    </div>
  );
};

export default CustomheaderComponent;
