import React from 'react';
import './Table.css';
import FirstSelections from './FirstSelections/FirstSelections';
import SecondSelections from './SecondSelections/SecondSelections';
import Send from './Send/Send';

const Table = () => {



    return(
        <div className="Table">
            <div className="Transactions">
                Transactions
            </div>
            <FirstSelections />
            <SecondSelections />
            {/* <Send /> */}
        </div>
    )
}

export default Table;
