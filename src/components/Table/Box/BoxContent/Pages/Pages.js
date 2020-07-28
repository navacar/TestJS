import React from 'react';
import './Pages.css';
import { NavLink } from 'react-router-dom';
import { propertiesChange} from './Engine';

const Pages = () => {
    let left = "<"
    let right = ">"
    let pagesArray = [1, 2, 3, 4, 5, 6, 7]
    var pageNumber = 1

    let firstNumber = () => {
        propertiesChange("1", "0.5", "0.5", "0.5", "0.5", "bold", "normal", "normal", "normal", "normal")
        pageNumber = 1
    }

    let secondNumber = () => {
        propertiesChange("0.5", "1", "0.5", "0.5", "0.5", "normal", "bold", "normal", "normal", "normal")
        pageNumber = 2
    }

    let thirdNumber = () => {
        propertiesChange("0.5", "0.5", "1", "0.5", "0.5", "normal", "normal", "bold", "normal", "normal")
        pageNumber = 3
    }

    let fouthNumber = () => {
        propertiesChange("0.5", "0.5", "0.5", "1", "0.5", "normal", "normal", "normal", "bold", "normal")
        pageNumber = 4
    }

    let fifthNumber = () => {
        propertiesChange("0.5", "0.5", "0.5", "0.5", "1", "normal", "normal", "normal", "normal", "bold")
        pageNumber = 5
    }

    let leftClick = () => {
        if(pageNumber == 2)
            firstNumber()
        if(pageNumber == 3)
            secondNumber()
        if(pageNumber == 4)
            thirdNumber()        
        if(pageNumber == 5)
            fouthNumber()
    }
    
    let rightClick = () => {
        if(pageNumber == 4)
            fifthNumber()  
        if(pageNumber == 3)
            fouthNumber() 
        if(pageNumber == 2)
            thirdNumber()
        if(pageNumber == 1)
            secondNumber()     
    }

    return (
        <nav className="Pages">
            <div className="Left">
                <NavLink to={window.location.pathname} onClick={leftClick}>{left}</NavLink>
            </div>
            <div className="firstNumber">
                <NavLink to={window.location.pathname} onClick={firstNumber}>{pagesArray[0]}</NavLink>
            </div>
            <div className="secondNumber">
                <NavLink to={window.location.pathname} onClick={secondNumber}>{pagesArray[1]}</NavLink>
            </div>
            <div className="thirdNumber">
                <NavLink to={window.location.pathname} onClick={thirdNumber}>{pagesArray[2]}</NavLink>
            </div>
            <div className="fouthNumber" >
                <NavLink to={window.location.pathname} onClick={fouthNumber}>{pagesArray[3]}</NavLink>
            </div>
            <div className="fifthNumber">
                <NavLink to={window.location.pathname} onClick={fifthNumber}>{pagesArray[4]}</NavLink>
            </div>
            <div className="Right">
                <NavLink to={window.location.pathname} onClick={rightClick}>{right}</NavLink>
            </div>

        </nav>
    )
}

export default Pages;