import React from 'react';
import './Blue.css';

const Blue = () =>{
    let mainBalance = 142.1382
    let currency = "CBSCH"

    return (
        <div className="blueContainer">
            <div className="blueBalance">
                {mainBalance} <span>{currency}</span>
            </div>
            <img className="blueLogo" src="/icons/blueLogo.png" />
                
        

        </div>
    )
}

export default Blue;