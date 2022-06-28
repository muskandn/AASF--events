import React from "react";
import "./customHeader.css";
import FallBackHeaderBG from "../../assets/Images/FallbackHeaderBG.png";

const Customheader = ({ img, text }) => {
  return (
    <div>
      <div className="customHeaderContainer flex-centre">
        <div className="customHeader__image">
          <img src={img ? img : FallBackHeaderBG} alt="" border="0"></img>
        </div>
        <div className="customHeader__text">{text}</div>
      </div>
    </div>
  );
};

export default Customheader;
