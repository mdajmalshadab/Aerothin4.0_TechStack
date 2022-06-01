import React from 'react';
import Feature from '../../Components/feature/feature';
import './features.css';

const featuresData = [
  {
    title: 'Build multi-platform applications',
    text: 'Develop a cross platform application such as windows, IOS, macOS etc by choosing your desired template settings',
  },
  {
    title: 'User Friendly Interface',
    text: 'Be it professional or a beginner developer, no one likes a bad UI. We have made responsive, to the point user interface to interact with.',
  },
  {
    title: 'Your template is just few clicks away',
    text: 'We have made this platform keeping in mind all kind of developers, you just need to select your favourite frameworks and click on download button to get started.',
  },

  {
    title: 'Free of cost. No hidden charges',
    text: 'And all those features and benefits are free of cost, you just need to sign up and download your template, this platform is absolutely free for all kinds of developers. So what are you waiting for?',
  },
];

const Features = () => {
  return (
    <div className='ts__features section__padding' id='features'>
      <div className='ts__features-heading'>
        <h1 className='gradient__text'>
          The Future is Now and You Just Need To Realize It. We have
          made your first step easier. Dive into it and start
          developing.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className='ts__features-container'>
        {featuresData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
