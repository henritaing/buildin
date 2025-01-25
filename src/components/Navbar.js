import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

   
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <img src="../../images/buildinlogo.png" alt="Logo" />
                </Link>

                    <div className="menu-icon" onClick={handleClick}>
                        <FontAwesomeIcon icon={click ? faTimes : faBars} />
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                      
        
                        <li className="nav-item">
                            <Link to="/Questions" className="nav-links" onClick={closeMobileMenu}>
                                FAQ
                            </Link>
                        </li>
                       
                        <li className="nav-item">
                            <Link to="/Nous_rejoindre" className="nav-links" onClick={closeMobileMenu}>
                                Nous rejoindre
                            </Link>
                        </li>
                       
                    </ul>

                 </div>
            </nav>
        </>
    );
}

export default Navbar;
