import React from "react";
import { Link } from "react-router-dom";
import "../css/Day.scss";

function renderDays(props) {
  if (props.dayOfWeek === "empty") {
    return <div className="day no-access"></div>
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

