import React, { useEffect, useState } from 'react';
import './toTop.css';

function ToTop() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 120);
    });
  }, []);

  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <button
        className={scroll ? 'toTopButton' : 'toTopButton hide-top-button'}
        onClick={toTop}
        title='Go to Top'
      >
        <i className='fa fa-arrow-up'></i>
      </button>
    </div>
  );
}

export default ToTop;
