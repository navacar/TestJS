import React from 'react';
import './HiddenBox.css';

const HiddenBox = () => {
    let hiddenAccountName = "Account Name"
    let hiddenText = "120sjgb86a9afafs216cfd3..."
    var root = document.querySelector(':root');
    let onMouseOutEvent = () => {
        root.style.setProperty('--hiddenBoxOpacity', '0');
        root.style.setProperty('--hiddenBoxVisibility', 'hidden');
    } 
    return(
        <div onMouseOut={onMouseOutEvent} className="hiddenBox">
            <div className="hiddenAccountName">
                {hiddenAccountName}
            </div>
            <div className="hiddenText">
                {hiddenText}
            </div>
            <img className="hiddenImg" src="/icons/logoDown.png" />
            <div className="hiddenBorder" />
            <div className="hiddenKey">
                <div className="hiddenKeyText">
                    Set key
                </div>
                <img className="hiddenKeyImg" src="/icons/hiddenKey.png"/>
            </div>
            <div className="hiddenPinCode">
                <div className="hiddenPinText">
                    Set pin-code
                </div>
                <img className="hiddenPinImg" src="/icons/hiddenPin.png"/>
            </div>
            <div className="hiddenLogOut">
                <div className="hiddenLogText">
                    Log out
                </div>
                <img className="hiddenLogImg" src="/icons/hiddenLog.png"/>
            </div>
        </div>
    )
}

export default HiddenBox