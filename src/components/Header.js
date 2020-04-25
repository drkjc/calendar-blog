import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.scss';

export default function Header(props) {
    return (
        <header>
            <span id="home"><Link to={{ pathname: `/${props.currentMonth}`}}>Calendar</Link></span>
        </header>
    )
}