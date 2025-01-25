import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="../../images/buildinlogo.png" alt="Logo" />
        </Link>
        <div className="nav-items">
          <div className="nav-item">
            <Link to="/Questions" className="nav-links">
              Questions
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
