import React from 'react';
import './Header.css';
import CbsRight from './CbsRight/CbsRight';
import CbsLeft from './CbsLeft/CbsLeft';

const Header = () => (
    <div className="Header">
        <CbsRight />
        <CbsLeft />
    </div>
)

export default Header;