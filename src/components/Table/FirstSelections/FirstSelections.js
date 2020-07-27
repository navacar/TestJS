import React from 'react';
import './FirstSelections.css';
import { NavLink } from 'react-router-dom';

const FirstSelections = () => {
    var root = document.querySelector(':root');
    let newPath = ""
    let Path="/All/"

    let onClickEvent = () => {
        let oldPath = window.location.pathname
        let N = oldPath.length

        while(oldPath[N-1] != "/"){
            newPath = oldPath[N - 1] + newPath
            N--;
        }
    }
    
    let onClickAll = () =>{
        root.style.setProperty('--left', '0px');
        root.style.setProperty('--width', '18px');
        root.style.setProperty('--visability', 'hidden');

        onClickEvent();
        Path = "/All/" + newPath
        console.log(Path)
    }

    let onClickInn = () => {
        root.style.setProperty('--left', '42px');
        root.style.setProperty('--width', '22px');
        root.style.setProperty('--visability', 'hidden');
        
        onClickEvent();
    }

    let onClickOut = () => {
        root.style.setProperty('--left', '88px');
        root.style.setProperty('--width', '26px');
        root.style.setProperty('--visability', 'hidden');

        onClickEvent();
    }
    return (
            <nav className="firstSelections">
                <div className="firstAll">
                    <NavLink to={Path} onClick={onClickAll} activeClassName='active'>All</NavLink>
                </div>
                <div className="Inn">
                    <NavLink onClick={onClickInn} to={"/Inn/" + newPath} activeClassName='active'>Inn</NavLink>
                </div>
                <div className="Out">
                    <NavLink onClick={onClickOut} to={"/Out/" + newPath } activeClassName='active'>Out</NavLink>
                </div>
                <div className="Rissinka">

                </div>
            </nav>
    )
}

export default FirstSelections;