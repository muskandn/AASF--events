import React from "react";
import "./customSearchbar.css";

const CustomSearchBar = () => {
  return (
    <div className="SearchBar">
      <div className="customSearchbarContainer">
        <div className="customSearchbarContainer__search_wrap customSearchbarContainer__search_wrap_4">
          <div className="customSearchbarContainer__searchboxTags">
            <span className="SearchBar">
              <a href="#">Link_1</a>
              <a href="#">Link_2</a>
              <a href="#">Link_3</a>
            </span>
          </div>
          <div className="customSearchbarContainer__search_box">
            <div className="customSearchbarContainer_btn">
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
