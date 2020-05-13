import React from "react";
import { Link } from 'react-router-dom';

export default function SlideMenu() {
    return (
        <div style={{ visibility: "hidden" }}id="slideMenu">
            <span id="home"><Link to={{ pathname: '/'}}>Home</Link></span>
            Slide Menu
        </div>
    )
}