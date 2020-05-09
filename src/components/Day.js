import React from "react";
import { Link } from "react-router-dom";
import "../css/Day.scss";

function filterPosts(props, id) {
  if(id) {
    return props.posts.filter(p => p.month.dayId === id)
  }
}

function renderPosts(props, id) {
  if(filterPosts(props, id)) {
    return filterPosts(props, id).map(p => {
      return <span>{p.title}</span>
    })
  }
}

function renderDays(props) {
  let today = new Date();
  let todayName = today.toLocaleString(window.navigator, {weekday: 'long'}).toLowerCase().slice(0,3);
  let todayNum = today.getDate();
  let todayMonth = today.getMonth();

  if (props.dayOfWeek === "empty") {
    return <div className="day no-access"></div>
  } else if ((todayName === props.dayOfWeek) && (props.calendarId === todayNum) && (props.monthId.monthId === todayMonth )) {
    return (
      <>
        <Link to={{ pathname: `/writer/${props.id}`, month: props}}>
          <div className="day today">
            {props.calendarId}<br />
            {renderPosts(props, props.calendarId)}
          </div>
        </Link>
      </>
    )
  } else {
    return (
      <>
        <Link to={{ pathname: `/writer/${props.id}`, month: props}}>
          <div className="day">
            {props.calendarId}<br />
            {renderPosts(props, props.calendarId)}
          </div>
        </Link>
      </>
    )
  }
}

export default function Day(props) {
  return (renderDays(props))
}

