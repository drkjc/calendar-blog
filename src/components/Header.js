import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.scss';

export default function Header(props) {
    console.log(props, 'header')
    return (
        <header>
            <span id="home"><Link to={{ pathname: `/${props.currentMonth}`, currentMonth: props.currentMonth }}>Calendar</Link></span>
            <h1>{props.currentMonth}</h1>
            <div id="nav-buttons">
                <button onClick={event => props.getPreviousMonth(props.currentMonth)}>Left</button>
                <button onClick={event => props.getNextMonth(props.currentMonth)}>Right</button>
            </div>
        </header>
    )
}