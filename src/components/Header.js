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
                <button>Left</button>
                <button>Right</button>
            </div>
        </header>
    )
}