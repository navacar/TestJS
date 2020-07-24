import React from 'react';
import './Logo.css';

const Logo = () => {

    let accountName = "Long account name"
    let makeAccounts = "makeaccounts"
    return (
        <div>
            <div className="logo">
                <img src="/icons/Frame_158.png" />
            </div>
            <div className="Frame_159">
                <div className="logoUpText">
                    <p> <span> by </span>{makeAccounts} <span>2 hours ago</span></p>
                </div>
                <img className="upImage" src="/icons/logoUp.png" />
                <div className="logoDownText">
                    {accountName}
                </div>
                <img className="downImage" src="/icons/logoDown.png" />
            </div>
        </div>
    )
}

export default Logo;