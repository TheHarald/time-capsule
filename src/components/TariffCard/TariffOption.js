import React from 'react';
import "./tariffcard.css"


function TariffOption({icon, title}) {
    return (
        <div className="option-container">
            {icon}
            <p  className="option-title">{title}</p>
        </div>
    );
}

export default TariffOption;