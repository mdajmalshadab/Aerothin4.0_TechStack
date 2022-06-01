import React, { useState } from 'react';
import Navbar from '../../../../Components/navbar/navbar';
// import Preview from '../../Component/preview/preview';
import './templates.css';
import angularLogo from '../../../../Assets/angular-logo.png';
import reactLogo from '../../../../Assets/react-logo.png';
import vueLogo from '../../../../Assets/vue-logo.png';
import flaskLogo from '../../../../Assets/flask-logo.png';
import fastAPILogo from '../../../../Assets/fast-api.png';
import expressLogo from '../../../../Assets/express-logo.png';
import addIcon from '../../../../Assets/add-icon.png';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import Footer from '../../../../Containers/footer/footer';

import templateImages from './templatesImage';

const axios = require('axios');

function Templates() {
  const [feTitle, setfeTitle] = useState('Front-End Frameworks');
  const [beTitle, setbeTitle] = useState('Back-End Frameworks');
  const [feImage, setfeImage] = useState(addIcon);
  const [beImage, setbeImage] = useState(addIcon);

  function Preview(image) {
    return (
      <div className='ts__preview'>
        <div className='ts__preview-image'>
          <img
            className={
              image.image.substring(14, 22) === 'add-icon'
                ? 'ts__preview-image_add'
                : 'ts__preview-image_rest'
            }
            src={image.image}
            alt='template-preview'
          />
        </div>
      </div>
    );
  }

  function handleFETitle(e) {
    setfeTitle(e);

    // Require Implementation
    const name = e.toLowerCase() + 'Img';
    if (name === 'vueImg' || name === 'angularImg') {
      setfeImage(templateImages['default']);
      return;
    }
    setfeImage(templateImages[name]);
  }
  function handleBETitle(e) {
    setbeTitle(e);
    const name = e.toLowerCase() + 'Img';
    setbeImage(templateImages[name]);
  }
   function activateLasers(){
    axios.get('https://jgwdrnm81k.execute-api.ap-south-1.amazonaws.com/stage1?feTitle=React&beTitle=Fastapi', {
      params: {feTitle: feTitle,
      beTitle: beTitle}
    })
    .then(function (response) {
      console.log(response);
      window.open(response.data.url);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  return (
    <div className='ts__template'>
      <Navbar />
      <div className='ts__template_heading'>
        <h1 className='gradient__text-2'>Select your frameworks</h1>
        <p>
          Now you are few clicks away from your templates. You just
          need to choose your desired front-end and back-end
          frameworks one by one from the dropdown, and then click on
          download button. Yes! it is that simple.
        </p>
        <p>
          After all these minimum specs already configured for you.
          you just need to start editing and altering your code in
          order to build your project.
        </p>
        <h2 className='gradient__text-2'>Preview</h2>
        <p>This is how your template will look like</p>
      </div>
      <div className='ts__template-main'>
        {/* Front End Option  */}

        <div className='ts__template-upper'>
          <div className='ts__template-preview'>
            <Preview image={feImage} />
          </div>
          <div className='ts__template-options'>
            <h2 className='gradient__text'>
              Choose your Front-End <span>framework</span>
            </h2>
            <div className='ts__template-options_logo'>
              <img src={angularLogo} alt='angular-Logo' />
              <img src={reactLogo} alt='react-logo' />
              <img src={vueLogo} alt='vue-logo' />
            </div>

            <div className='ts__template-options_dropdown'>
              <DropdownButton
                id='dropdown-basic-button'
                title={feTitle}
                onSelect={handleFETitle}
              >
                <Dropdown.Item eventKey='Angular'>
                  Angular
                </Dropdown.Item>
                <Dropdown.Item eventKey='React'>React</Dropdown.Item>
                <Dropdown.Item eventKey='Vue'>Vue</Dropdown.Item>
              </DropdownButton>
            </div>
          </div>
        </div>

        {/* Backend Option  */}
        <div className='ts__template-lower'>
          <div className='ts__template-preview'>
            <Preview image={beImage} />
          </div>
          <div className='ts__template-options'>
            <h2 className='gradient__text'>
              Choose your Back-End framework
            </h2>
            <div className='ts__template-options_logo'>
              <img src={flaskLogo} alt='django-logo' />
              <img src={expressLogo} alt='express-logo' />
              <img src={fastAPILogo} alt='fastAPI-logo' />
            </div>

            <div className='ts__template-options_dropdown'>
              <DropdownButton
                id='dropdown-basic-button'
                title={beTitle}
                onSelect={handleBETitle}
              >
                <Dropdown.Item eventKey='Flask'>Flask</Dropdown.Item>
                <Dropdown.Item eventKey='Express'>
                  Express
                </Dropdown.Item>
                <Dropdown.Item eventKey='FastAPI'>
                  FastAPI
                </Dropdown.Item>
              </DropdownButton>
            </div>
          </div>
        </div>

        <button onClick={activateLasers} className='ts__template-download'>
          Download Template
        </button>
    

      </div>
      <Footer />
    </div>
  );
}

export default Templates;
