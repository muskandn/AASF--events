import React from 'react';
import './customSearchbar.css';

const CustomSearchBar = ({ url1, url2, url3, link1, link2, link3 }) => {
  return (
    <div className='SearchBar flex-centre'>
      <div className='customSearchbarContainer'>
        <div className='customSearchbarContainer__search_wrap customSearchbarContainer__search_wrap_4'>
          <div className='customSearchbarContainer__searchboxTags'>
            <span className='SearchBar secondary-font flex-centre'>
              <a href={url1} target='_blank' rel='noreferrer'>
                {link1}&nbsp;
              </a>
              <a href={url2} target='_blank' rel='noreferrer'>
                {link2}&nbsp;
              </a>
              <a href={url3} target='_blank' rel='noreferrer'>
                {link3}&nbsp;
              </a>
            </span>
          </div>
          <div className='customSearchbarContainer__search_box'>
            <div className='customSearchbarContainer_btn'>
              <i className='fas fa-search'></i>
            </div>
            <input type='text' className='input' placeholder='search...' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomSearchBar;
