import React from 'react';
import './RightText.css';
import HiddenBox from './HiddenBox/HiddenBox';

const RightText = () => {
    let accountName = "Account name"
    let hoverText = document.getElementsByClassName('accountName');
    var root = document.querySelector(':root');
    
    let onMouseOverEvent = () => {
        root.style.setProperty('--hiddenBoxOpacity', '1');
        root.style.setProperty('--hiddenBoxVisibility', 'visible');

    }
        
    return (
        <div onMouseOver={onMouseOverEvent} >
            <div className="accountName">
                {accountName}
            </div>
            <HiddenBox />
        </div>
    )
}

export default RightText;