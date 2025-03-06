import React from "react";
import "./Button.css";

function Button({ text, onClick, disabled, type }) {
    return (
        <button 
            className={`button ${type} ${disabled ? "disabled" : ""}`} 
            onClick={onClick} 
            disabled={disabled}
        >
            {text}
        </button>
    );
}

export default Button;
