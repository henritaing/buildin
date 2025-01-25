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
                    <Link to='/Questions'>Questions</Link>
                </div>
            </div>
            <div className='footer-link-wrapper'>
                <div class='footer-link-items'>
                    <h2>Nos réseaux</h2>
                    <Link to='/'>Instagram</Link>
                    <Link to='/'>LinkedIn</Link>
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