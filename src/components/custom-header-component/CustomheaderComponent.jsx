import React from "react";
import CondiontalRender from "../CondiontalRender";
import Customheader from "../custom-header/Customheader";
import CustomSearchBar from "../custom-searchbar/CustomSearchBar";

const CustomheaderComponent = ({ img, text, SearchBarCondition }) => {
  return (
    <div>
      <Customheader img={img} text={text}></Customheader>
      <CondiontalRender
        condition={SearchBarCondition}
        children={<CustomSearchBar></CustomSearchBar>}
      ></CondiontalRender>
    </div>
  );
};

export default CustomheaderComponent;
