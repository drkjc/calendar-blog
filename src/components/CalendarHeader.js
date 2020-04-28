import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.scss';

const MONTHS = [
    'January', 
    'February', 
    'March', 
    'April',
    'May', 
    'June', 
    'July', 
    'August', 
    'September', 
    'October', 
    'November', 
    'December'
    ]

function lastMonth(monthId) {
    if(monthId === 0) {
        return MONTHS[11]
    } else {
        return MONTHS[monthId - 1]
    }
}

function nextMonth(monthId) {
    if(monthId === 11) {
        return MONTHS[0]
    } else {
        return MONTHS[monthId + 1]
    }
}

export default function CalendarHeader(props) {
    return (
        <header>
            <span id="home"><Link to={{ pathname: '/'}}>Home</Link></span>
            <h1>{props.currentMonth} | {props.year}</h1>
            <div id="nav-buttons">
                <button onClick={event => props.getPreviousMonth(props.currentMonthId, props.year)}>{lastMonth(props.currentMonthId)}</button>
                <button onClick={event => props.getNextMonth(props.currentMonthId, props.year)}>{nextMonth(props.currentMonthId)}</button>
            </div>
        </header>
    )
}