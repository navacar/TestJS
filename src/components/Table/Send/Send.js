import React from 'react';
import './Send.css';

const Send = () => (
    <button className="Send">
            <div className="sendImg">
                <img className="sendArc" src="/icons/SendArc.png" />
                <img className="sendArrow" src="/icons/SendArrow.png" />
            </div>
            <div className="sendText">
                Send
            </div>
    </button>
)

export default Send;