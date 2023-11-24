import React from "react";

function Month({ index }) {

    const monthNames = {
        '01': 'Янв.',
        '02': 'Фев.',
        '03': 'Март',
        '04': 'Апр.',
        '05': 'Май',
        '06': 'Июнь',
        '07': 'Июль',
        '08': 'Авг.',
        '09': 'Сен.',
        '10': 'Окт.',
        '11': 'Нояб.',
        '12': 'Дек.'
    };



    const monthName = monthNames[index];

    return (
        <div className="timeline-months-month">
            {monthName}
        </div>
    );
}
export default Month