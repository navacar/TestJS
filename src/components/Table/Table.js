import React from 'react';
import './Table.css';
import FirstSelections from './FirstSelections/FirstSelections';
import SecondSelections from './SecondSelections/SecondSelections';
import Send from './Send/Send';
import Receive from './Receive/Receive';
import Box from './Box/Box';

const Table = () => {



    return(
        <div className="Table">
            <div className="Transactions">
                Transactions
            </div>
            <FirstSelections />
            <SecondSelections />
            <Send />
            <Receive />
            <Box />
        </div>
    )
}

export default Table;
