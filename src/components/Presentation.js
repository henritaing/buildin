import React from 'react';
import '../App.css'
import './Presentation.css';



function Presentation() {
    return (
        <div className='intro-container'>
            <div className="text-container">
                <h1>Buildin, hackathons <br></br>
                    for all</h1>
                <p>Born from the love of collaboration and innovation.</p>
                <br></br>
                <p>Our hackathons bring together motivated individuals to tackle real-world challenges and to make lifelong memories.</p>
            </div>
            <div className="image-container">
                <img src="../../images/imagepresentation.png" alt = "Hackhathon" className="intro-image"></img>
            </div>
        </div>
     
    )
}

export default Presentation;