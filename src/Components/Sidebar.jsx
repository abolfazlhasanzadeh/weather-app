import React from 'react'

export default function Sidebar({ temp, weather, country, name }) {

    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const d = new Date();
    let day = weekday[d.getDay()];
    var time = d.getHours() + ":"+ d.getMinutes()

    return (
        <div className="weather-side">
            <div className="weather-gradient"></div>
            <div className="date-container">
                <h2 className="date-dayname">{day}</h2><span className="date-day">{time}</span><i className="fa fa-location" data-feather="map-pin"></i><span className="location">{name} ,{country}</span>
            </div>
            <div className="weather-container"><i className="weather-icon" data-feather="sun"></i>
                <h1 className="weather-temp">{temp}°C</h1>
                <h3 className="weather-desc">{weather}</h3>
            </div>
        </div>
    )
}
