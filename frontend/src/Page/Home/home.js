import React from 'react';
import Frameworks from '../../Components/frameworks/frameworks';
import WhatTechStack from '../../Containers/whatTechStack/whatTechStack';
import Features from '../../Containers/Features/features';
import Working from '../../Containers/working/working';
import Banner from '../../Components/banner/banner';
import Footer from '../../Containers/footer/footer';

import Header from '../../Containers/header/header';
import Navbar from '../../Components/navbar/navbar';

function Home() {
  return (
    <div>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>

      <div>
        <Frameworks />
        <WhatTechStack />
        <Features />
        <Working />
        <Banner />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
