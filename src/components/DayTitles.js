import React from 'react'
import '../css/DayTitles.scss'

export default function DayTitles() {
    return(
        <div id="dayTitles">
            <div className="flexContainer">
                <span className="dayOfWeek" id="sunday">Sunday</span>
                <span className="dayOfWeek" id="monday">Monday</span>
                <span className="dayOfWeek" id="tuesday">Tuesday</span>
                <span className="dayOfWeek" id="wednesday">Wednesday</span>
                <span className="dayOfWeek" id="thursday">Thursday</span>
                <span className="dayOfWeek" id="friday">Friday</span>
                <span className="dayOfWeek" id="saturday">Saturday</span>
            </div>
        </div>
    )
}