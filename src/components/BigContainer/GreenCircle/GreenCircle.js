import React from 'react';
import './GreenCircle.css';

const GreenCircle = () => {

    let Percent = "43.20%"
    let Number = "30.73 MB / 34.65 MB"

    return (
        <div className="greenCircleContainer">
            <div className="greenCurrency">
                RAM
            </div>
            <div className="greenCircleContent">
                <img className="greenCircleImg" src="/icons/GreenCircle.png" />
                <div className="greenPercent">
                    {Percent}
                </div>
                <div className="greenNumber">
                    {Number}
                </div>
            </div>

        </div>
    )
}

export default GreenCircle;