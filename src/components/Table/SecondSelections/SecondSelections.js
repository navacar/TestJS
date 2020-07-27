import React from 'react';
import './SecondSelections.css';
import { NavLink } from 'react-router-dom';

const SecondSelections = () => {
    var root = document.querySelector(':root');
    
    let onClickSecondAll = () =>{
        root.style.setProperty('--secondLeft', '0px');
        root.style.setProperty('--secondWidth', '18px');
        root.style.setProperty('--visability', 'visible');
        root.style.setProperty('--secondAllOpacity', '1');
        root.style.setProperty('--CBSOpacity', '0.3');
        root.style.setProperty('--CBSHOpacity', '0.3');
    }

    let onClickCBS = () => {
        root.style.setProperty('--secondLeft', '42px');
        root.style.setProperty('--secondWidth', '28px');
        root.style.setProperty('--visability', 'visible');
        root.style.setProperty('--secondAllOpacity', '0.3');
        root.style.setProperty('--CBSOpacity', '1');
        root.style.setProperty('--CBSHOpacity', '0.3');
    }

    let onClickCBSH = () => {
        root.style.setProperty('--secondLeft', '94px');
        root.style.setProperty('--secondWidth', '38px');
        root.style.setProperty('--visability', 'visible');
        root.style.setProperty('--secondAllOpacity', '0.3');
        root.style.setProperty('--CBSOpacity', '0.3');
        root.style.setProperty('--CBSHOpacity', '1');
    }

    return (
            <div className="secondSelections">
                <div className="secondAll">
                    <NavLink to="secondAll" onClick={onClickSecondAll}>All</NavLink>
                </div>
                <div className="CBS">
                    <NavLink to="CBS" onClick={onClickCBS}>CBS</NavLink>
                </div>
                <div className="CBSH">
                    <NavLink to="CBSH" onClick={onClickCBSH}>CBSH</NavLink>
                </div>
                <div className="secondRissinka">

                </div>
            </div>
    )
}

export default SecondSelections;