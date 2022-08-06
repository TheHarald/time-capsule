import React from 'react';
import Items from '../Items/Items';
import "./timecapsule.css"

function TimeCapsule(props) {
    return (
        
        <div>
            <div className={`capsule ${props.className}`}>
            </div>
            <div className="capsule-items">
                <Items item={"folder"}/>
                <Items item={"heart"}/>
                <Items item={"smile"}/>
                <Items item={"news"}/>
                <Items item={"list"}/>
            </div>
        </div>
    );
}

export default TimeCapsule;