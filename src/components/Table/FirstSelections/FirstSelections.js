import React from 'react';
import './FirstSelections.css';
import { NavLink } from 'react-router-dom';

const FirstSelections = () => {
    var root = document.querySelector(':root');
    let onClickEvent = (left, width) => {
        root.style.setProperty('--left', left);
        root.style.setProperty('--width', width);
    }
    
    let onClickAll = () =>{
        onClickEvent('0px', "18px")
    }

    let onClickInn = () => {
        onClickEvent('42px', "22px")
    }

    let onClickOut = () => {
        onClickEvent('88px', '26px')

    }
    return (
            <nav className="firstSelections">
                <div className="firstAll">
                    <NavLink to="/All/" onClick={onClickAll} activeClassName='active'>All</NavLink>
                </div>
                <div className="Inn">
                    <NavLink onClick={onClickInn} to="/Inn/" activeClassName='active'>Inn</NavLink>
                </div>
                <div className="Out">
                    <NavLink onClick={onClickOut} to="/Out/" activeClassName='active'>Out</NavLink>
                </div>
                <div className="Rissinka">

                </div>
            </nav>
    )
}

export default FirstSelections;