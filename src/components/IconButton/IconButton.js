import React from 'react';
import { Link } from 'react-router-dom';
import "./iconbutton.css"
import ArrowRightLineIcon from 'remixicon-react/ArrowRightLineIcon';


function IconButton(props) {
    return (
        <div className="icon-button">
            <Link className="link" to={"/capsules"}>Больше капсул</Link>
            <ArrowRightLineIcon color="#fff"/>
            
        </div>
    );
}

export default IconButton;