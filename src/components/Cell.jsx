import React, {useState} from "react";

function Cell({ currentMonth, dayOfWeek, contributions, ordinalDay, onClick, year }) {

    const [isHighlighted, setHighlighted] = useState(false);

    const dayNamesFull = {
        'Пн': 'Понедельник',
        'Вт': 'Вторник',
        'Ср': 'Среда',
        'Чт': 'Четверг',
        'Пт': 'Пятница',
        'Сб': 'Суббота',
        'Вс': 'Воскресенье',
    };
    const monthNamesFull = {
        '1': 'Январь',
        '2': 'Февраль',
        '3': 'Март',
        '4': 'Апрель',
        '5': 'Май',
        '6': 'Июнь',
        '7': 'Июль',
        '8': 'Август',
        '9': 'Сентябрь',
        '10': 'Октябрь',
        '11': 'Ноябрь',
        '12': 'Декабрь',
    };

    const handleCellClick = () => {
        setHighlighted(!isHighlighted);
        onClick && onClick({ currentMonth, dayOfWeek, contributions});
    };
    const month = monthNamesFull[currentMonth]
    const weekDay = dayNamesFull[dayOfWeek]

    const contributionsFunction = () => {
        if (contributions > 0 && contributions < 10){
            return "#acd5f2"
        }else if (contributions > 9 && contributions < 19){
            return  "#7fa8c9"
        }else if (contributions > 19 && contributions < 30){
            return "#527ba0"
        }else if (contributions > 29){
            return  "#254e77"
        }
        return "#ededed"
    }

    return (
        <div
            style={{background : contributionsFunction()}}
            className={`timeline-cells-cell ${isHighlighted ? 'highlighted' : ''}`}
            onClick={handleCellClick}
        >
            {isHighlighted && (
                <div className="timeline-highlighted">
                    <p className="timeline-highlighted-contributions">{contributions} contributions</p>
                    <div className="timeline-highlighted-block">
                        <p className="timeline-highlighted-info">{weekDay},</p>
                        <p className="timeline-highlighted-info">{month} {ordinalDay}</p>
                        <p className="timeline-highlighted-info">{year}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cell