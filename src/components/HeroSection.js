import React from 'react';
import '../App.css'
import { Button } from './Button';
import './HeroSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>Qu'attendez-vous ?</h1>
            <div className="hero-btns">
                <Button 
                className="btns" 
                buttonStyle='btn--outline'
                buttonSize='btn--large'>
                    Inscrivez-vous
                </Button>
                <Button 
                className="btns" 
                buttonStyle='btn--outline'
                buttonSize='btn--large'>
                    Regardez le trailer <FontAwesomeIcon className ="faPlayCircle" icon= {faPlayCircle} />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection;