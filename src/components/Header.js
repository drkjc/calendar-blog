import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.scss';

export default function Header() {
    return (
        <header>
            <span id="home"><Link to="/">Calendar</Link></span>
            <div id="nav-buttons">
                <button>Left</button>
                <button>Right</button>
            </div>
        </header>
    )
}