import React from 'react';
import './RedCircle.css';

const RedCircle = () => {

    let Percent = "76.20%"
    let Number = "∞ µs / ∞ µs"

    return (
        <div className="redCircle">
            <div className="redCurrency">
                CPU
            </div>
            <div className="redCircleContent">
                <img className="redCircleImg" src="/icons/redCircle.png" />
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