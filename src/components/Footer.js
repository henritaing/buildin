import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>A propos</h2>
            <Link to='/sign-up'>Nous rejoindre</Link>
            <Link to='/'>Témoignages</Link>
            <Link to='/'>Carrières</Link>
            <Link to='/'>Conditions de service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact</h2>
            <Link to='/'>Nous contacter</Link>
            <Link to='/'>Nos sponsors</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Nos réseaux</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>LinkedIn</Link>
            <Link to='/'>Youtube</Link>
          </div>
        </div>
    </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <medium class='website-rights'>BUILDIN © 2025</medium>
        </div>
      </section>
    </div>
  );
}

export default Footer;