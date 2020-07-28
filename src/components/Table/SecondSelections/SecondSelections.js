import React from 'react';
import './SecondSelections.css';
import { NavLink } from 'react-router-dom';

const SecondSelections = () => {
    var root = document.querySelector(':root');
    
    let onClickEvent = (left, width, allOpacity, CBSOpacity, CBSHOpacity) => {
        root.style.setProperty('--secondLeft', left);
        root.style.setProperty('--secondWidth', width);      
        root.style.setProperty('--secondAllOpacity', allOpacity);
        root.style.setProperty('--CBSOpacity', CBSOpacity);
        root.style.setProperty('--CBSHOpacity', CBSHOpacity);
    }
    
    let onClickSecondAll = () =>{

        onClickEvent('0px', '18px', '1', '0.3', '0.3')
    }

    let onClickCBS = () => {
        onClickEvent('42px', '28px', '0.3', '1', '0.3')
    }

    let onClickCBSH = () => {
        onClickEvent('94px', '38px', '0.3', '0.3', '1')
    }

    return (
            <div className="secondSelections">
                <div className="secondAll">
                    <NavLink to={window.location.pathname} onClick={onClickSecondAll}>All</NavLink>
                </div>
                <div className="CBS">
                    <NavLink to={window.location.pathname} onClick={onClickCBS}>CBS</NavLink>
                </div>
                <div className="CBSH">
                    <NavLink to={window.location.pathname} onClick={onClickCBSH}>CBSH</NavLink>
                </div>
                <div className="secondRissinka">

                </div>
            </div>
    )
}

export default SecondSelections;