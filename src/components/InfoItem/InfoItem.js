import React from 'react';
import InfoImage from './InfoImage';
import "./infoitem.css"

function InfoItem({image,title,text}) {
    return (
        <article className="info-item">
            <InfoImage image={image}/>
            <h3 className="info-title">{title}</h3>
            <p className="info-text">{text}</p>
            
        </article>
    );
}

export default InfoItem;