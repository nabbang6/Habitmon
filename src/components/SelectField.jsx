import React from "react";
import "./SelectField.css";

function SelectField({ label, options }) {
    return (
        <label className="SelectField">
        {label}
        <select className="custom-select">
            {options.map((option, index) => (
            <option key={index} value={option}>{option}</option>
            ))}
        </select>
        </label>
    );
}

export default SelectField;
