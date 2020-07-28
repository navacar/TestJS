import React from 'react';
import './BlueCircleFront.css';

const BlueCircleFront = () => {
    var Percent = 100.00;
    var StringPercent = String(Percent)
    var strokeDasharray = ", 100"

    return (
        <svg viewBox="0 0 36 36" class="blue-circular-chart">
            <path class="blue-circle"
                stroke-dasharray={StringPercent + strokeDasharray}
                d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
            />
        </svg>
    )

}

export default BlueCircleFront