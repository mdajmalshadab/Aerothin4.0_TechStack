import React from 'react';
import './working.css';

import sites from '../../Assets/sites.png';

const Working = () => {
  return (
    <div className='ts__working section__padding' id='working'>
      <div className='ts__working-image'>
        <img src={sites} alt='sites' />
      </div>
      <div className='ts__working-content'>
        <h1 className='gradient__text'>
          What is the working principle behind the framework
          integration?
        </h1>
        <p>
          We have already integrated the front-end client to the back-end server of the template that will be supported on all kinds of devices (Windows, macOS, Linux). Necessary packagegs will be downloaded automatically with one simple command using docker (will be included with the template). No more hassle to connect different frameworks manually we have covered all this for you
        </p>
      </div>
    </div>
  );
};

export default Working;
