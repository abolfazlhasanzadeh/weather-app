import React from 'react'

export default function Week({ temp, icon, icontwo, icontree ,temptwo ,temptree}) {
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const d = new Date("July 21, 1983 01:15:00");
    let day = d.getDay()
    
    return (
        <div className="week-container">
            <ul className="week-list">
                <li className="active"><img src={icon} alt="" /><span className="day-name">{day ===0 ? weekday[6] :weekday[day-1]}</span><span className="day-temp">{temp}°C</span></li>
                <li><img src={icontwo} alt="" /><span className="day-name">{weekday[day]}</span><span className="day-temp">{temptwo}°C</span></li>
                <li><img src={icontree} alt="" /><span className="day-name">{day ===6 ? weekday[0] :weekday[day+1]}</span><span className="day-temp">{temptree}°C</span></li>
                <div className="clear"></div>
            </ul>
        </div>
    )
}
