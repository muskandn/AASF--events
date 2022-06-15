import React from "react";
import "./customSearchbar.css";

const CustomSearchBar = () => {
  return (
    <div className="ab">
      <div className="container">
        <div className="search_wrap search_wrap_4">
          <div className="search-box__tags">
            <span className="ab">
              <a href="#">Link_1</a>
              <a href="#">Link_2</a>
              <a href="#">Link_3</a>
            </span>
          </div>
          <div className="search_box">
            <div className="btn btn_common slide-right">
              <i className="fas fa-search"></i>
            </div>
            <input type="text" className="input" placeholder="search..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomSearchBar;
