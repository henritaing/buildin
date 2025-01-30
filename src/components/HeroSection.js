import React, { useState } from 'react';
import { Button } from './Button';
import './HeroSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faPlayCircle, faTimes } from '@fortawesome/free-solid-svg-icons';



function HeroSection() {
    const [showForm, setShowForm] = useState(false); // State to manage form visibility

    const toggleForm = () => {
    setShowForm(!showForm); // Toggle the visibility of the form
    };

    return (
        <div className='hero-container'>
            <h1>Un week-end pour repousser<br></br>
             ses limites</h1>
            <div className="hero-btns">
                <Button 
                className="btns" 
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                onClick = {toggleForm}
                >
                    Register
                </Button>
                <Button 
                className="btns" 
                buttonStyle='btn--outline'
                buttonSize='btn--large'>
                    Watch the trailer <FontAwesomeIcon className ="faPlayCircle" icon= {faPlayCircle} />
                </Button>
            </div>

        {showForm && (
            <div className="popup-form">
                <div className="popup-form-content">
                    <FontAwesomeIcon 
                    className="close-icon" 
                    icon={faTimes} 
                    onClick={toggleForm} 
                    />
                    <h2>Registration Form</h2>
                    <form>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" placeholder="Your full name" required />
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" placeholder="Your email address" required />
                    <label htmlFor="job">Your job/domain of studies:</label>
                    <input type="job" id="job" placeholder="Your job/domain of studies" required />
                    <label htmlFor="description">A few words that characterize you? </label>
                    <input type="description" id="description" placeholder="A few words that characterize you?" required />
                    <button type="submit">Register</button>
                    </form>
                </div>
            </div>
        )}

        </div>
    )
}

export default HeroSection;