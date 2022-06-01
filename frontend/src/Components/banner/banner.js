import React from 'react';
import { Link } from 'react-router-dom';
import './banner.css';

const Banner = () => {
  function ScrollUp() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  return (
    <div className='ts__banner'>
      <div className='ts__banner-content'>
        <a href='#navbar'>Head to the top of the page</a>

        <h3>
          Get started now and be more productive and efficient in your
          development projects.
        </h3>
      </div>
      <div className='ts__banner-btn'>
        <Link to='/templates'>
          {' '}
          <button onClick={ScrollUp} type='button'>
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
