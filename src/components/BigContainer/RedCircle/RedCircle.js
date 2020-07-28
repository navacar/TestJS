import React from 'react';
import './RedCircle.css';
import RedCircleFront from './RedCircleFron/RedCircleFront';

const RedCircle = () => {

    let Percent = "76.20%"
    let Number = "∞ µs / ∞ µs"

    return (
        <div className="redCircle">
            <div className="redCurrency">
                CPU
            </div>
            <div className="redCircleContent">
                <div>
                    <img className="redCircleImg" src="/icons/Circle.png" />
                    <RedCircleFront />
                </div>
                
                <div className="redPercent">
                    {Percent}
                </div>
                <div className="redNumber">
                    {Number}
                </div>
            </div>
        </div>
    )
}

export default RedCircle;