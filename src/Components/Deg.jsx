import React from 'react'

export default function Deg({humidity , speed, cloudy}) {
    return (
        <div className="today-info-container">
            <div className="today-info">
                <div className="precipitation"> <span className="title">cloudy</span><span className="value">{cloudy} %</span>
                    <div className="clear"></div>
                </div>
                <div className="humidity"> <span className="title">HUMIDITY</span><span className="value">{humidity} %</span>
                    <div className="clear"></div>
                </div>
                <div className="wind"> <span className="title">WIND</span><span className="value">{speed}km/h</span>
                    <div className="clear"></div>
                </div>
            </div>
        </div>
    )
}
