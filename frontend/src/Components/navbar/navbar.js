import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../Assets/all-in-one.png';

const Menu = () => (
  <>
    <p>
      <Link to='/'>Home</Link>
    </p>

    <p>
      <Link to='/templates'>Templates</Link>
    </p>
    <p>
      <a href='#features'>Blog</a>
    </p>
    <p>
      <a href='#blog'>Help</a>
    </p>
    <p>
      <a href='#footer'>Contact Us</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='ts__navbar' id='navbar'>
      <div className='ts__navbar-links'>
        <div className='ts__navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='ts__navbar-links_container'>
          <Menu />
        </div>
      </div>

      <div className='ts__navbar-menu'>
        {toggleMenu ? (
          <RiCloseLine
            color='#fff'
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color='#fff'
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className='ts__navbar-menu_container scale-up-center'>
            <div className='ts__navbar-menu_container-links'>
              <Menu />
              <div className='ts__navbar-menu_container-links-sign'>
                <p>Sign in</p>
                <button type='button'>Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
