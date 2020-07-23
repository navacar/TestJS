import React from 'react';
import './NavContainer.css';

const NavContainer = () => (

    <div className="navContainer">
        <div className="navLine">
        <div className="Wallet">
            <img src="/icons/Wallet.png" />
            <text>Wallet</text>
        </div>
        <div className="Staked">
            <img src="/icons/Staked.png" />
            <text>Staked</text>
        </div>
        <div className="Ambasadors">
            <img src="/icons/Ambasadors.png" />
            <text>Ambasadors</text>
        </div>
        <div className="Followers">
            <img src="/icons/Followers.png" />
            <text>Followers</text>
        </div>
        </div>
    </div>

)

export default NavContainer;