import React from 'react';


const Weeks = ({ index }) => {

    const DaysWeekShot = {
        0: 'Пн',
        2: 'Ср',
        4: 'Пт',
    }


    return (
        <div className="timeline-weekdays-weekday">{DaysWeekShot[index]}</div>
    );
}

export default Weeks;