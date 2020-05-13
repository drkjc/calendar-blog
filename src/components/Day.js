import React from "react";
import { Link } from "react-router-dom";
import "../css/Day.scss";

function filterPosts(props, id) {
  if(id) {
    // debugger;
    let numPosts = props.posts.filter(p => p.month.dayId === id)
    console.log(numPosts, 'filter posts')
    if(numPosts.length === 0) {
      return
    } else {
      return <span>{numPosts.length} post{numPosts.length > 1 ? "s" : ""}</span>
    }
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
        <div className="day today">
          <Link to={{ pathname: `/writer/${props.id}`, month: props}}>
            Create a post
          </Link>
          {props.calendarId}
          {filterPosts(props, props.calendarId)}
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className="day">
          <Link to={{ pathname: `/writer/${props.id}`, month: props}}>
            Create a post
          </Link>
          {props.calendarId}
          {filterPosts(props, props.calendarId)}
        </div>
      </>
    )
  }
}

export default function Day(props) {
  return (renderDays(props))
}

