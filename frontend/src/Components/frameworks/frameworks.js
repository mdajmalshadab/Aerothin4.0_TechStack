import React from 'react';
import './frameworks.css';
import angularLogo from '../../Assets/angular-logo.png';
import expressLogo from '../../Assets/express-logo.png';
import reactLogo from '../../Assets/react-logo.png';
import vueLogo from '../../Assets/vue-logo.png';
import flaskLogo from '../../Assets/flask-logo.png';
import fastAPILogo from '../../Assets/fast-api.png';
import { Link } from 'react-router-dom';

const Frameworks = () => {
  return (
    <div className='ts__brand section__padding'>
      <h1 className='gradient__text'>Choose your Framework</h1>
      <div className='ts__brand-logo'>
        <div>
          <Link to='/templates'>
            <img src={angularLogo} alt='angular-Logo' />
          </Link>
        </div>
        <div>
          <Link to='/templates'>
            <img src={reactLogo} alt='react-logo' />
          </Link>
        </div>
        <div>
          <Link to='/templates'>
            <img src={vueLogo} alt='vue-logo' />
          </Link>
        </div>
        <div>
          <Link to='/templates'>
            <img src={flaskLogo} alt='django-logo' />
          </Link>
        </div>
        <div>
          <Link to='/templates'>
            <img src={expressLogo} alt='express-logo' />
          </Link>
        </div>
        <div>
          <Link to='/templates'>
            <img src={fastAPILogo} alt='fastAPI-logo' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Frameworks;
