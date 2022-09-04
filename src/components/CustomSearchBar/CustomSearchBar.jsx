import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './customSearchbar.css';

const CustomSearchBar = ({ url1, url2, link1, link2, data, setList }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    setList(
      data.filter((post) => {
        // search logic for Abhishar page
        let postContent = post.heading + ' ' + post.version;
        return postContent.toLowerCase().includes(query.toLowerCase());
      })
    );
  }, [query]);

  return (
    <div className='SearchBar flex-centre'>
      <div className='customSearchbarContainer flex-centre'>
        <div className='customSearchbarContainer__search_wrap customSearchbarContainer__search_wrap_4 flex-centre'>
          <div className='customSearchbarContainer__searchboxTags'>
            <span className='SearchBar secondary-font flex-centre'>
              <a href={url1} target='_blank' rel='noreferrer'>
                {link1}&nbsp;
              </a>
              <a href={url2} target='_blank' rel='noreferrer'>
                {link2}&nbsp;
              </a>
            </span>
          </div>
          <div className='customSearchbarContainer__search_box'>
            <div className='customSearchbarContainer_btn'>
              <i className='fas fa-search'></i>
            </div>
            <input
              type='text'
              className='input'
              placeholder='search...'
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomSearchBar;
