import React from 'react';
import './GreenCircle.css';
import GreenCircleFront from './GreenCircleFron/GreenCircleFront';

const GreenCircle = () => {

    let Percent = "43.20%"
    let Number = "30.73 MB / 34.65 MB"

    return (
        <div className="greenCircleContainer">
            <div className="greenCurrency">
                RAM
            </div>
            <div className="greenCircleContent">
                <div>
                    <img className="greenCircleImg" src="/icons/Circle.png" />  
                    <GreenCircleFront />
                </div>
                
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