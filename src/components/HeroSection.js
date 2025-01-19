import React, { useState } from 'react';
import '../App.css'
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
            <h1>Un week-end <br></br>
            pour repousser ses limites</h1>
            <div className="hero-btns">
                <Button 
                className="btns" 
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                onClick = {toggleForm}
                >
                    Inscrivez-vous
                </Button>
                <Button 
                className="btns" 
                buttonStyle='btn--outline'
                buttonSize='btn--large'>
                    Regardez le trailer <FontAwesomeIcon className ="faPlayCircle" icon= {faPlayCircle} />
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
                    <h2>Formulaire d'inscription</h2>
                    <form>
                    <label htmlFor="name">Nom :</label>
                    <input type="text" id="name" placeholder="Votre nom" required />
                    <label htmlFor="email">Email :</label>
                    <input type="email" id="email" placeholder="Votre email" required />
                    <label htmlFor="métier">Votre métier ou domaine d'activité/d'études :</label>
                    <input type="métier" id="métier" placeholder="Votre métier ou domaine d'activité/d'études" required />
                    <label htmlFor="description">Quelques mots sur vous, pour vous décrire ? </label>
                    <input type="description" id="description" placeholder="Quelques mots sur vous, pour vous décrire ?" required />
                    <button type="submit">S'inscrire</button>
                    </form>
                </div>
            </div>
        )}

        </div>
    )
}

export default HeroSection;