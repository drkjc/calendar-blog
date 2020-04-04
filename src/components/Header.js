import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.scss';

export default function Header() {
    return (
        <header>
            <span>Hello</span><br />
            <span><Link to="/">Calendar</Link></span>
        </header>
    )
}