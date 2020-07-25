import React from 'react';
import './BlueCircle.css';

const BlueCircle = () => {
    let Percent = "100.00%"
    let Number = "∞ µs / ∞ µs"

    return (
        <div className="blueCircle">
            <div className="blueCurrency">
                NET
            </div>
            <div className="blueCircleContent">
                <img className="blueCircleImg" src="/icons/BlueCircle.png" />
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