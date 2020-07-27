import React from 'react';
import './Receive.css';

const Receive = () => (
    <button className="Receive">
            <div className="receiveImg">
                <img className="receiveArc" src="/icons/ReceiveArc.png" />
                <img className="receiveArrow" src="/icons/ReceiveArrow.png" />
            </div>
            <div className="receiveText">
                Receive
            </div>
    </button>
)

export default Receive;