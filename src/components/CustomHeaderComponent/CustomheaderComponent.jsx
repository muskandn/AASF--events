import React from "react";
import CondiontalRender from "../condtionalRender/ConditionalRender";
import Customheader from "../CustomHeader/Customheader";
import CustomSearchBar from "../CustomSearchBar/CustomSearchBar";

const CustomheaderComponent = ({ img, text, SearchBarCondition }) => {
  return (
    <div>
      <Customheader img={img} text={text}></Customheader>
      <CondiontalRender
        condition={SearchBarCondition}
        children={<CustomSearchBar />}
      ></CondiontalRender>
    </div>
  );
};

export default CustomheaderComponent;
