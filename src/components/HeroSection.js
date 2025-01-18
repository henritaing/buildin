import React from 'react';
import '../App.css'
import { Button } from './Button';
import './HeroSection.css';

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
                buttonStyle='btn--primary'
                buttonSize='btn--large'>
                    Regardez le trailer <i className="far fa-play-circle"/>
                </Button>
            </div>
        </div>
    )
}

export default HeroSection;