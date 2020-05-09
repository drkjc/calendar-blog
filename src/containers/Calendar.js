import React, { Component } from 'react';
import CalendarHeader from '../components/CalendarHeader';
import Day from '../components/Day';
import DayTitles from "../components/DayTitles"
import uuid from 'react-uuid';
import { connect } from "react-redux";
import { getCurrentMonth, getPreviousMonth, getNextMonth } from "../redux/actions/calendar";
import '../css/Calendar.scss'

class Calendar extends Component {

  componentDidMount() {
    this.props.getCurrentMonth(this.props.currentMonth.monthId, this.props.year)
    this.setState({currentYear: this.props.year})
  }

  componentDidUpdate(prevProps) {
    if(this.props.year !== prevProps.year) {
      return this.props.history.push(`/${this.props.year}`)
    }
  }

  getDayAbbreviation = (day) => {

    if(day === undefined) {
      return;
    }

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
    while (month.length < 42) {
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

  handleLoading = () => {
    if (this.props.loading) {
      return <div>Loading...</div>
    } else {
      let month = this.getDaysArray(this.props.year, this.props.monthId + 1);
      const days = [];
      
      let i = 1;
      month.forEach(day => {
        let dayOfWeek = this.getDayAbbreviation(day);
        if (dayOfWeek === "empty") {
          days.push(
            <Day key={uuid()} id={uuid()} dayOfWeek={dayOfWeek} month={this.props} />
          )
        } else {
          days.push(
            <Day key={i} id={uuid()} calendarId={i} dayOfWeek={dayOfWeek} posts={this.props.posts} monthId={this.props}/>
          )
          i++;
        }
      });
          
      return days;
    }
  }
    
  render() {
    return (
      <div>
        <CalendarHeader 
          year={this.props.year}
          currentMonth={this.props.month} 
          currentMonthId={this.props.monthId}
          getCurrentMonth={this.props.getCurrentMonth} 
          getPreviousMonth={this.props.getPreviousMonth}
          getNextMonth={this.props.getNextMonth} 
          />
        <DayTitles />
        <div className="grid-container">{this.handleLoading()}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state, 'cal map')
  return({
    posts: state.writer.posts,
    month: state.calendar.month,
    monthId: state.calendar.monthId, 
    year: state.calendar.year,
    loading: state.calendar.loading
  })
}

export default connect(mapStateToProps, { getCurrentMonth, getPreviousMonth, getNextMonth })(Calendar);