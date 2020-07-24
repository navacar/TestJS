import React from 'react';
import './Orange.css';


const Orange = () => {
    let mainBalance = 1731.1382
    let currency = "CBS"

    let unlockedBalance = 573.1355
    let lockedBalance = 1231.1423

    return (
        <div className="orangeContainer">
            <div className="orangeBalance">
                {mainBalance} <span>{currency}</span>
            </div>
            <img className="orangeLogo" src="/icons/orangeLogo.png" />
            <div className="orangeFootContainer">
                <div className="unLocked">
                    <img className="unLockedImg" src="/icons/Unlocked.png"/>
                    <div className="unLockedText">
                        {unlockedBalance}
                    </div>
                </div>
                <img className="Dot" src="/icons/Dot.png"/>
                <div className="Locked">
                    <img className="LockedImg" src="/icons/Locked.png"/>
                    <div className="LockedText">
                        {lockedBalance}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Orange;