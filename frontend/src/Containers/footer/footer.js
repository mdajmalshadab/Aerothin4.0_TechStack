import React from 'react';
import './footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import tsLogo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div className='ts__footer section__padding' id='footer'>
      <div className='ts__footer-links'>
        <div className='ts__footer-links_logo'>
          <h2>TECH STACK</h2>
          <p>All Rights Reserved</p>
        </div>
        <div className='ts__footer-links_div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>

        <div className='ts__footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>

        <div className='ts__footer-links_div'>
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@tech-stack.net</p>
        </div>
      </div>

      <div className='ts__footer-social'>
        <FacebookIcon className='ts__footer-social-icon' />
        <InstagramIcon className='ts__footer-social-icon' />
        <TwitterIcon className='ts__footer-social-icon' />
        <LinkedInIcon className='ts__footer-social-icon' />
      </div>

      <div className='ts__footer-copyright'>
        <p>© 2022 Tech Stack. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
