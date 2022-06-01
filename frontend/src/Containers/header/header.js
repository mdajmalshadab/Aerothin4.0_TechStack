import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import desktop from '../../Assets/desktop.png';

const Header = () => {
  return (
    <div className='ts__header section__padding' id='home'>
      <div className='ts__header-content'>
        <h1 className='gradient__text'>
          Let's build something amazing with Tech Stack free templates
        </h1>

        <p>
          A developer platform for building all kinds of web, mobile
          and desktop applications across different frameworks.
        </p>
        <div className='ts__header-content__input'>
          <Link to='/templates'>
            <button type='button'>Get Started</button>
          </Link>
        </div>
      </div>
      <div className='ts__header-image'>
        <img src={desktop} alt='desktop' />
      </div>
    </div>
  );
};

export default Header;
