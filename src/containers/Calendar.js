import React, { Component } from 'react';
import Day from '../components/Day';
import DayTitles from "../components/DayTitles"
import uuid from 'react-uuid';
import '../css/Calendar.scss'

export default class Calendar extends Component {

  getDayAbbreviation = (day) => {
    if (day === "empty") {
      return "empty";
    } else {
      return day.split("-")[1];
    }
  }

  createEmpties = (n) => {
    return "empty,".repeat(n).split(",").filter(i => i !== "")
  }

  pushEmpties = (month) => {
    month = month.flat();
    while (month.length < 35) {
      month.push("empty")
    }
    return month;
  }

  daySwitch = (day, result) => {
    switch(day) {
      case "sun":
        break;
      case "mon":
        result.unshift("empty")
        break;
      case "tue":
        result.unshift(this.createEmpties(2))
        break;
      case "wed":
        result.unshift(this.createEmpties(3))
        break;
      case "thu":
        result.unshift(this.createEmpties(4))
        break;
      case "fri":
        result.unshift(this.createEmpties(5))
        break;
      case "sat":
        result.unshift(this.createEmpties(6))
        break;
      default: 
    }
    return result;
  }

  getDaysArray = (year, month) => {
    const monthIndex = month - 1
    const names = Object.freeze([ 'sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat' ]);
    const date = new Date(year, monthIndex, 1);
    const result = [];

    while (date.getMonth() === monthIndex) {
      result.push(`${date.getDate()}-${names[date.getDay()]}`);
      date.setDate(date.getDate() + 1);
    }

    let firstElement = result[0];
    let day = this.getDayAbbreviation(firstElement)
    let startDate = this.daySwitch(day, result);
    const daysOfMonth = this.pushEmpties(startDate);

    return daysOfMonth;
  }

  renderCalendar = () => {
    let d = new Date();
    let month = this.getDaysArray(d.getFullYear(), d.getMonth() + 1);
    const days = [];

    let i = 1;
    month.forEach(day => {
      let dayOfWeek = this.getDayAbbreviation(day);
      if (dayOfWeek === "empty") {
        days.push(
          <Day key={uuid()} id={uuid()} dayOfWeek={dayOfWeek} />
        )
      } else {
        days.push(
          <Day key={i} id={uuid()} calendarId={i} dayOfWeek={dayOfWeek}/>
        )
        i++;
      }
    });
        
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