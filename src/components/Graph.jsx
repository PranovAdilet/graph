import React from 'react';
import Timeline from "./TimeLine";



const Graph = ({ data }) => {

    const dataArray = Object.entries(data).map(([date, contributions]) => ({
        date,
        contributions,
    }));

    const handleCellClick = ({ currentMonth, dayOfWeek, contributions }) => {
        console.log(`Clicked on ${currentMonth}, Day: ${dayOfWeek}, Contributions: ${contributions}`);
    };

    const monthsWithDays = {
        '01': { name: 'January', days: 31 },
        '02': { name: 'February', days: 28 },
        '03': { name: 'March', days: 31 },
        '04': { name: 'April', days: 30 },
        '05': { name: 'May', days: 31 },
        '06': { name: 'June', days: 30 },
        '07': { name: 'July', days: 30 },
        '08': { name: 'August', days: 31 },
        '09': { name: 'September', days: 30 },
        '10': { name: 'October', days: 31 },
        '11': { name: 'November', days: 30 },
        '12': { name: 'December', days: 31 },
    };

    return (
        <div className="graph">
            <Timeline monthsWithDays={monthsWithDays} dataArray={dataArray} handleCellClick={handleCellClick} />

        </div>
    );
};

export default Graph;
