import React from 'react';
import './BigContainer.css';
import GreenCircle from './GreenCircle/GreenCircle';
import RedCircle from './RedCircle/RedCircle';
import BlueCircle from './BlueCircle/BlueCircle';

const BigContainer = () => (
    <div className="BigContainer">
        <div className="Resources">
            Resources
        </div>       
        <GreenCircle />
        <RedCircle />
        <BlueCircle />
    </div>
)

export default BigContainer;