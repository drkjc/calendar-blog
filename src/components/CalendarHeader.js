import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.scss';

export default function CalendarHeader(props) {
    console.log(props, 'cal header')
    return (
        <header>
            <span id="home"><Link to={{ pathname: '/'}}>Home</Link></span>
            <h1>{props.currentMonth} | {props.year}</h1>
            <div id="nav-buttons">
                <button onClick={event => props.getPreviousMonth(props.currentMonthId)}>Left</button>
                <button onClick={event => props.getNextMonth(props.currentMonthId)}>Right</button>
            </div>
        </header>
    )
}