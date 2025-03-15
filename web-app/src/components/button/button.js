import React from "react";
import "./button.css";

export const Button = ({ text, className, variant, size, icon, onClick, style, iconStyle }) => {
    return (
        <button style={style} className={`customBtn ${className} ${variant} ${size}`} onClick={onClick}>
            {icon && <span className="btnIcon" style={iconStyle}>{icon}</span>}
            {text}
        </button>
    );
};


