import React from 'react';
import './TableLine.css';

const TableLine = (props) => {



    return (

        <div className="tableLine">
            <img src={props.Rank} className="lineRank" />
            <div className="lineData">
                {props.Data}
                <span className="lineTime">
                    {props.Time}
                </span>
            </div>
            <img src={props.Avatar} className="lineAvatar" />
            <div className="lineName">
                {props.Name}
            </div>
            <div className="lineBalance">
                {props.Balance}
            </div>
            <div className="lineCurrency">
                {props.Currency}
            </div>
            <div className="lineBorder">

            </div>
        </div>

    )
}

export default TableLine;