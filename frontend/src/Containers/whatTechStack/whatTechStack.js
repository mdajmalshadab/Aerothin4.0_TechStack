import React from 'react';
import Feature from '../../Components/feature/feature';
import './whatTechStack.css';

const WhatTechStack = () => {
  return (
    <div className='ts__whatTechStack section__margin' id='wts'>
      <div className='ts__whatTechStack-feature'>
        <Feature
          title='What is Tech Stack?'
          text='Tech Stack is a framework for building modern, multi-platform, natively compiled iOS, Android, macOS, and Windows apps by combining various front-end and back-end technologies. It is a framework that help developers to kick-start their development with integrated back-end and frond-end templates'
        />
      </div>
      <div className='ts__whatTechStack-heading'>
        <h1 className='gradient__text'>
          How does it benefits your development?
        </h1>
      </div>
      <div className='ts__whatTechStack-container'>
        <Feature
          title='Front-End'
          text='It provides a fully customizable templates of your favourite front-end framework to start with. Download the template on your local machine and start coding'
        />
        <Feature
          title='Back-End'
          text='It provides a fully customizable templates of your favourite back-end framework to start with. No need to install different libraries and dependencies, you can get here all in one.'
        />
        <Feature
          title='Full-Stack'
          text='Why worry for front-end and back-end integration, we got that covered for you as well. just select you favourite frameworks, rest we will do it for you.'
        />
      </div>
    </div>
  );
};

export default WhatTechStack;
