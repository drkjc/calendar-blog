import React from "react";
import { Link } from "react-router-dom";
import "../css/Day.scss";

function renderDays(props) {
  let today = new Date();
  let todayName = today.toLocaleString(window.navigator, {weekday: 'long'}).toLowerCase().slice(0,3);
  let todayNum = today.getDate();
  let todayMonth = today.getMonth();

  if (props.dayOfWeek === "empty") {
    return <div className="day no-access"></div>
  } else if ((todayName === props.dayOfWeek) && (props.calendarId === todayNum) && (props.monthId === todayMonth )) {
    return (
      <Link to={{ pathname: `/writer/${props.id}`}}>
        <div className="day today">{props.calendarId}</div>
      </Link>
    )
  } else {
    return (
      <Link to={{ pathname: `/writer/${props.id}`}}>
        <div className="day">{props.calendarId}</div>
      </Link>
    )
  }
}

export default function Day(props) {
  return (renderDays(props))
}

