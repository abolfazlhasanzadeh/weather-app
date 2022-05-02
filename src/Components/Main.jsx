import React, { useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import axios from "axios"
import Deg from './Deg'
import Week from './Week'
import Loading from './Loading'

export default function Main() {
    const [apiData, setApiData] = useState([]);

    const [city, setCity] = useState('amol');
    const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=79c3ffd1c5594f85b9c94909220203&q=${city}&days=5&aqi=no&alerts=no`;
   
    const date = new Date()
    const hours = date.getHours();
    useEffect(() => {
        axios
        .get(apiUrl)
            .then((res) => setApiData(res.data))

    }, []);

    return (
        
        <div className="container">
            {apiData.length==0 ? <Loading />
                :             
                <>
                    <Sidebar
                    temp={apiData.forecast.forecastday[0].hour[hours].temp_c}
                    weather={apiData.current.condition.text}
                    country={apiData.location.country}
                    name={apiData.location.name}
                    />
                    <div className="info-side">
                        <Deg
                        cloudy={apiData.current.cloud}
                        humidity={apiData.current.humidity} 
                        speed={apiData.current.wind_kph}/>
                        <Week
                        icontwo={apiData.forecast.forecastday[1].hour[hours].condition.icon}
                        temptwo={apiData.forecast.forecastday[1].hour[hours].temp_c}
                        icontree={apiData.forecast.forecastday[2].hour[hours].condition.icon}
                        temptree={apiData.forecast.forecastday[2].hour[hours].temp_c}
                        icon ={apiData.forecast.forecastday[0].hour[hours].condition.icon}
                        temp={apiData.forecast.forecastday[0].hour[hours].temp_c} />
                        <div className="location-container">
                            <button className="location-button"> <i data-feather="map-pin"></i><span>Change location</span></button>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}
