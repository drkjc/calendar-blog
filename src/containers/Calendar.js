import React, { Component } from 'react';
import CalendarHeader from '../components/CalendarHeader';
import SlideMenu from '../components/SlideMenu';
import Day from '../components/Day';
import DayTitles from "../components/DayTitles"
import uuid from 'react-uuid';
import { connect } from "react-redux";
import { getCurrentMonth, getPreviousMonth, getNextMonth } from "../redux/actions/calendar";
import '../css/Calendar.scss'

class Calendar extends Component {

  // componentDidMount() {
  //   this.props.getCurrentMonth(this.props.currentMonth.monthId, this.props.year)
  //   this.setState({currentYear: this.props.year})
  // }

  componentDidUpdate(prevProps) {
    // get new month and push to calendar route
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
    // creates empty days to fill out front of calendar array
    return "empty,".repeat(n).split(",").filter(i => i !== "")
  }

  pushEmpties = (month) => {
    // month argument contains two arrays, one for empties, one for calendar days
    // flatten that array and push empties to the end so array is 42 elements long
    month = month.flat();
    while (month.length < 42) {
      month.push("empty")
    }
    
    return month;
  }

  daySwitch = (day, result) => {
    // depending on the first day of the month add empty days to beginning of array to fill calendar
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
    // set reusable month index
    const monthIndex = month
    // freeze weekday names abbreviation array so it's unalterable
    const names = Object.freeze([ 'sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat' ]);
    // get current date 
    const date = new Date(year, monthIndex, 1);
    // create result array
    const result = [];

    // while the current month is the same as the month index
    while (date.getMonth() === monthIndex) {
      // date.getDate() returns 1 the first time
      // names[date.getDay()] returns the weekday abbreviation for the first of the month
      // push first of month string into result array 
      result.push(`${date.getDate()}-${names[date.getDay()]}`);
      // get the next day and loop again
      date.setDate(date.getDate() + 1);
    }
    // get first day num and day abbrev. string from result array
    let firstElement = result[0];
    // get just the day abbrevation, no number
    let day = this.getDayAbbreviation(firstElement)
    // call daySwitch function and depending on what day of the week the first of the month is create empty days to fill the calendar
    // unshift the empty days to the front of the result array
    let startDate = this.daySwitch(day, result);
    // call pushEmpties function and push empty days to end of the daysOfMonth array returned from daySwitch
    const daysOfMonth = this.pushEmpties(startDate);
 
    return daysOfMonth;
  }

  handleLoading = () => {
    if (this.props.loading) {
      return <div>Loading...</div>
    } else {
      // call getDaysArray with the current year and month array index
      let month = this.getDaysArray(this.props.year, this.props.monthId);
      // create empty days array that we'll use to create Day components
      const days = [];
      
      let i = 1;
      month.forEach(day => {
        // for each day in the month get the day abbreviation
        let dayOfWeek = this.getDayAbbreviation(day);
        // if the day of the month is empty create a Day component that passes empty as props
        if (dayOfWeek === "empty") {
          days.push(
            <Day key={uuid()} id={uuid()} dayOfWeek={dayOfWeek} month={this.props} />
          )
        // if day isn't empty create a Day component and pass monthId and posts down as props
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
        <SlideMenu />
        <DayTitles />
        <div className="grid-container">{this.handleLoading()}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return({
    posts: state.writer.posts,
    month: state.calendar.month,
    monthId: state.calendar.monthId, 
    year: state.calendar.year,
    loading: state.calendar.loading
  })
}

export default connect(mapStateToProps, { getCurrentMonth, getPreviousMonth, getNextMonth })(Calendar);