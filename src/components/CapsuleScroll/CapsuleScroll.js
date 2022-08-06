import React, { useEffect } from 'react';
import "./capsulescroll.css"

function CapsuleScroll({position, count}) {
    return (
        <div className="scroll-item-container">
            <input className="scroll-item" type="radio"name="capsule-scroll"></input>
            <input className="scroll-item" type="radio"name="capsule-scroll"></input>
            <input className="scroll-item" type="radio"name="capsule-scroll"></input>
            <input className="scroll-item" type="radio"name="capsule-scroll"></input>
        </div>
    );
}

export default CapsuleScroll;