import React, { Component } from 'react';
import Day from '../components/Day';
import DayTitles from "../components/DayTitles"
import '../css/Calendar.scss'

export default class Calendar extends Component {

    renderCalendar = () => {
        let days = [];
        for(let i = 1; i < 36; i++) {
          days.push(
            <Day key={i} id={i}/>
          )
        }
        
        return days;
      }
    
    render() {
        return (
          <div>
            <DayTitles />
            <div className="grid-container">{this.renderCalendar()}</div>
          </div>
        )
    }
}