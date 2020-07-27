import React from 'react';
import './BoxContent.css';
import TableLine from './TableLine/TableLine';

const BoxContent = () => {

    let TableData = [
        {Rank: "/icons/Inn.png", Data: "26 apr 2020", Time: "• 14:16", Avatar: "/icons/Avatar.png", Name: "cbshuobipool", Balance: "+8.1213", Currency: "CBS" },
        {Rank: "/icons/Inn.png", Data: "26 apr 2020", Time: "• 14:16", Avatar: "/icons/Avatar.png", Name: "cbshuobipool", Balance: "+8.1213", Currency: "CBS" },
        {Rank: "/icons/Inn.png", Data: "26 apr 2020", Time: "• 14:16", Avatar: "/icons/Avatar.png", Name: "cbshuobipool", Balance: "+8.1213", Currency: "CBS" },
        {Rank: "/icons/Inn.png", Data: "26 apr 2020", Time: "• 14:16", Avatar: "/icons/Avatar.png", Name: "cbshuobipool", Balance: "+8.1213", Currency: "CBS" },
        {Rank: "/icons/Inn.png", Data: "26 apr 2020", Time: "• 14:16", Avatar: "/icons/Avatar.png", Name: "cbshuobipool", Balance: "+8.1213", Currency: "CBS" },
        {Rank: "/icons/Inn.png", Data: "26 apr 2020", Time: "• 14:16", Avatar: "/icons/Avatar.png", Name: "cbshuobipool", Balance: "+8.1213", Currency: "CBS" },
        {Rank: "/icons/Inn.png", Data: "26 apr 2020", Time: "• 14:16", Avatar: "/icons/Avatar.png", Name: "cbshuobipool", Balance: "+8.1213", Currency: "CBS" },
        {Rank: "/icons/Inn.png", Data: "26 apr 2020", Time: "• 14:16", Avatar: "/icons/Avatar.png", Name: "cbshuobipool", Balance: "+8.1213", Currency: "CBS" },
        {Rank: "/icons/Inn.png", Data: "26 apr 2020", Time: "• 14:16", Avatar: "/icons/Avatar.png", Name: "cbshuobipool", Balance: "+8.1213", Currency: "CBS" },
        {Rank: "/icons/Inn.png", Data: "26 apr 2020", Time: "• 14:16", Avatar: "/icons/Avatar.png", Name: "cbshuobipool", Balance: "+8.1213", Currency: "CBS" },
        {Rank: "/icons/Inn.png", Data: "26 apr 2020", Time: "• 14:16", Avatar: "/icons/Avatar.png", Name: "cbshuobipool", Balance: "+8.1213", Currency: "CBS" },
        {Rank: "/icons/Inn.png", Data: "26 apr 2020", Time: "• 14:16", Avatar: "/icons/Avatar.png", Name: "cbshuobipool", Balance: "+8.1213", Currency: "CBS" },
        {Rank: "/icons/Inn.png", Data: "26 apr 2020", Time: "• 14:16", Avatar: "/icons/Avatar.png", Name: "cbshuobipool", Balance: "+8.1213", Currency: "CBS" },
        {Rank: "/icons/Inn.png", Data: "26 apr 2020", Time: "• 14:16", Avatar: "/icons/Avatar.png", Name: "cbshuobipool", Balance: "+8.1213", Currency: "CBS" },
        {Rank: "/icons/Inn.png", Data: "26 apr 2020", Time: "• 14:16", Avatar: "/icons/Avatar.png", Name: "cbshuobipool", Balance: "+8.1213", Currency: "CBS" },
        {Rank: "/icons/Inn.png", Data: "26 apr 2020", Time: "• 14:16", Avatar: "/icons/Avatar.png", Name: "cbshuobipool", Balance: "+8.1213", Currency: "CBS" },
        {Rank: "/icons/Inn.png", Data: "26 apr 2020", Time: "• 14:16", Avatar: "/icons/Avatar.png", Name: "cbshuobipool", Balance: "+8.1213", Currency: "CBS" },
        {Rank: "/icons/Inn.png", Data: "26 apr 2020", Time: "• 14:16", Avatar: "/icons/Avatar.png", Name: "cbshuobipool", Balance: "+8.1213", Currency: "CBS" },
        {Rank: "/icons/Inn.png", Data: "26 apr 2020", Time: "• 14:16", Avatar: "/icons/Avatar.png", Name: "cbshuobipool", Balance: "+8.1213", Currency: "CBS" },
        {Rank: "/icons/Inn.png", Data: "26 apr 2020", Time: "• 14:16", Avatar: "/icons/Avatar.png", Name: "cbshuobipool", Balance: "+8.1213", Currency: "CBS" },
        
    ]

    let TableElements = TableData.map(table =><TableLine
        Rank={table.Rank}
        Data={table.Data}
        Time={table.Time}
        Avatar={table.Avatar}
        Name={table.Name}
        Balance={table.Balance}
        Currency={table.Currency}

    />)

    return(
    <div className="boxContent">
        <div className="textFont">
            <div className="Rank">
                Rank
            </div>
            <div className="Data">
                Date • Time
            </div>
            <div className="Name">
                Name
            </div>
            <div className="Balance">
                Balance
            </div>
        </div>
        <div className="tableElements">
            {TableElements}
        </div>
    </div>
)}
export default BoxContent;