import React, { Component } from 'react';
import Day from '../components/Day';
import DayTitles from "../components/DayTitles"
import '../css/Calendar.scss'

export default class Calendar extends Component {

  getDaysArray = (year, month) => {
    const monthIndex = month - 1
    const names = Object.freeze(
       [ 'sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat' ]);
    const date = new Date(year, monthIndex, 1);
    const result = [];
    while (date.getMonth() === monthIndex) {
      result.push(`${date.getDate()}-${names[date.getDay()]}`);
      date.setDate(date.getDate() + 1);
    }
    return result;
  }

    renderCalendar = () => {
        let d = new Date();
        let month = this.getDaysArray(d.getFullYear(), d.getMonth());
        //debugger;
        let days = [];
        for(let i = 1; i < month.length; i++) {
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