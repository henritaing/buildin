import React, { useState } from 'react';
import { Button } from './Button';
import './HeroSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faPlayCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import { API } from 'aws-amplify';

function HeroSection() {
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        job: '',
        description: ''
    });

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await API.post('FormSubmissionsAPI', '/items', {
                body: formData
            });
            alert('Form submitted successfully!');
            setShowForm(false);
            // Reset form
            setFormData({
                name: '',
                email: '',
                job: '',
                description: ''
            });
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Failed to submit the form. Please try again.');
        }
    };
    
    return (
        <div className='hero-container'>
            <h1>Join us at our next hackathon <br></br>
            to build the future</h1>
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
                    <form onSubmit={handleSubmit}>
                            <label htmlFor="name">Name:</label>
                            <input 
                                type="text" 
                                id="name" 
                                value={formData.name} 
                                onChange={handleInputChange} 
                                placeholder="Your full name" 
                                required 
                            />
                            <label htmlFor="email">Email:</label>
                            <input 
                                type="email" 
                                id="email" 
                                value={formData.email} 
                                onChange={handleInputChange} 
                                placeholder="Your email address" 
                                required 
                            />
                            <label htmlFor="job">Your job/domain of studies:</label>
                            <input 
                                type="text" 
                                id="job" 
                                value={formData.job} 
                                onChange={handleInputChange} 
                                placeholder="Your job/domain of studies" 
                                required 
                            />
                            <label htmlFor="description">A few words that characterize you?</label>
                            <input 
                                type="text" 
                                id="description" 
                                value={formData.description} 
                                onChange={handleInputChange} 
                                placeholder="A few words that characterize you?" 
                                required 
                            />
                            <button type="submit">Register</button>
                    </form>
                </div>
            </div>
        )}

        </div>
    )
}

export default HeroSection;