import React from "react";
import { Link } from "react-router-dom";
import "../css/Day.scss";

// checks what day, month, and year the post was created
function confirmDate(p, id, props) {
  return (
    p.month.dayId === id &&
    p.month.monthName === props.monthId.month &&
    p.month.year === props.monthId.year
  )
}

function displaySlideMenu() {

  let menu = document.getElementById("slideMenu")

  if(menu.style.visibility === "hidden") {
      menu.style.visibility = "visible";
      menu.classList.add("visible");
  } else {
      menu.style.visibility = "hidden";
      menu.classList.remove("visible")
  }
}


function filterPosts(props, id) {
  if(id) {
    let numPosts = props.posts.filter(p => confirmDate(p, id, props));
    if(numPosts.length === 0) {
      return
    } else {
      return <span onClick={displaySlideMenu}>{numPosts.length} post{numPosts.length > 1 ? "s" : ""}</span>
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
          <h1>{props.calendarId}</h1>
          <Link to={{ pathname: `/writer/${props.id}`, month: props}}>
            Create a post
          </Link>
          {filterPosts(props, props.calendarId)}
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className="day" >
          <h1>{props.calendarId}</h1>
          <Link to={{ pathname: `/writer/${props.id}`, month: props}}>
            Create a post
          </Link>
          {filterPosts(props, props.calendarId)}
        </div>
      </>
    )
  }
}

export default function Day(props) {
  return (renderDays(props))
}

