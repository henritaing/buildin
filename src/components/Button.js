import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
  children, 
  type, 
  onClick, 
  buttonStyle, 
  buttonSize
}) => {
  // Check if the button style is valid, otherwise default to 'btn--primary'
  const checkButtonStyle = STYLES.includes(buttonStyle) 
    ? buttonStyle 
    : STYLES[0];

  // Check if the button size is valid, otherwise default to 'btn--medium'
  const checkButtonSize = SIZES.includes(buttonSize) 
    ? buttonSize 
    : SIZES[0];

  return (
    <Link to='/sign-up' className='btn-mobile'>
      <button 
        className={`btn ${checkButtonStyle} ${checkButtonSize}`} // Use backticks for interpolation
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
