import React from 'react';
import "./card.css"

function Card(props) {
    return (
        <article className="card">
            {props.children}
        </article>
    );
}

export default Card;