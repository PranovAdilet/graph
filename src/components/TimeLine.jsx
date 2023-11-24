import Cell from "./Cell";
import Month from "./Month";
import Weeks from "./Weeks";
import React from "react";

function Timeline({ dataArray, handleCellClick, monthsWithDays }) {

    const DayNames = {
        0: 'Пн',
        1: 'Вт',
        2: 'Ср',
        3: 'Чт',
        4: 'Пт',
        5: 'Сб',
        6: 'Вс',

    };

    let cells = [];

    const months = Object.keys(monthsWithDays);
    const today = new Date();
    const startMonth = 9;
    const startYear = 2022;
    let startDay = 26;

    for (let year = startYear; year <= today.getFullYear(); year++) {

        const startMonthOfYear = year === startYear ? startMonth : 0;
        const endMonth = year === today.getFullYear() ? today.getMonth() : 11;

        for (let month = startMonthOfYear; month <= endMonth; month++) {

            let day = month === startMonthOfYear && month !== 0 ? startDay : 1;

            const endDateTime = new Date(year, month + 1, 0);

            if (endDateTime > today) {
                endDateTime.setDate(today.getDate());
            }

            const firstDayOfWeek = (year === 2022 && (month === 9 || month === 10 || month === 11)) ? 4 : 4;

            while (day <= endDateTime.getDate()) {
                const currentDate = new Date(year, month, day);
                const dayOfWeek = (currentDate.getDay() + firstDayOfWeek) % 7;
                const dateString = currentDate.toISOString().split('T')[0];
                const contributions = dataArray.find((data) => data.date === dateString);

                cells.push(
                    <Cell
                        key={`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`}
                        currentMonth={currentDate.getMonth() + 1}
                        dayOfWeek={DayNames[dayOfWeek]}
                        date={dateString}
                        contributions={contributions ? contributions.contributions : 0}
                        ordinalDay={currentDate.getDate()}
                        onClick={handleCellClick}
                        year={currentDate.getFullYear()}
                    />
                );

                day++;
            }
        }
    }

    return (
        <div className="timeline">
            <div className="timeline-months">
                {months.map((month) => (
                    <Month index={month} key={month} />
                ))}
            </div>
            <div className="timeline-body">
                <div className="timeline-weekdays">
                    {Array.from(new Array(7)).map((_, index) => (
                        <Weeks index={index} key={`weekday-${index}`} />
                    ))}
                </div>
                <div className="timeline-cells">{cells}</div>
            </div>
            <div className="graph-bottom">
                <p className="graph-bottom-text">Меньше</p>
                <div className="graph-bottom-block">
                    <div style={{background: "#ededed"}} className="timeline-cells-cell"/>
                    <div style={{background:"acd5f2"}} className="timeline-cells-cell"/>
                    <div style={{background: "#7fa8c9"}} className="timeline-cells-cell"/>
                    <div style={{background: "#527ba0"}} className="timeline-cells-cell"/>
                    <div style={{background: "#254e77"}} className="timeline-cells-cell"/>
                </div>
                <p className="graph-bottom-text">Больше</p>
            </div>
        </div>
    );
}

export default Timeline