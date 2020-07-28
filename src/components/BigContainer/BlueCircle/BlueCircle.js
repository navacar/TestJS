import React from 'react';
import './BlueCircle.css';
import BlueCircleFront from './BlueCircleFron/BlueCircleFront';

const BlueCircle = () => {
    let Percent = "100.00%"
    let Number = "∞ µs / ∞ µs"

    return (
        <div className="blueCircle">
            <div className="blueCurrency">
                NET
            </div>
            <div className="blueCircleContent">
                <div>
                    <img className="blueCircleImg" src="/icons/Circle.png" />    
                    <BlueCircleFront />
                </div>
                <div className="bluePercent">
                    {Percent}
                </div>
                <div className="blueNumber">
                    {Number}
                </div>
            </div>
        </div>
    )
}

export default BlueCircle;