import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import '../css/Header.scss';
import '../css/CalendarHeader.scss';

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

function displaySlideMenu() {

    let menu = document.getElementById("slideMenu")

    if(menu.style.visibility === "hidden") {
        menu.style.visibility = "visible";
        menu.classList.add("visible");
    } else {
        menu.style.visibility = "hidden";
        menu.classList.remove("visible")
    }
}

export default function CalendarHeader(props) {

    

    return (
        <header>
            {/* <span id="home"><Link to={{ pathname: '/'}}>Home</Link></span> */}
            <div id="hamburger-nav"  onClick={displaySlideMenu}><FontAwesomeIcon icon={faBars} /></div>
            <h1>{props.currentMonth} | {props.year}</h1>
            <div id="nav-buttons">
                <button onClick={event => props.getPreviousMonth(props.currentMonthId, props.year)}>{lastMonth(props.currentMonthId)}</button>
                <button onClick={event => props.getNextMonth(props.currentMonthId, props.year)}>{nextMonth(props.currentMonthId)}</button>
            </div>
        </header>
    )
}