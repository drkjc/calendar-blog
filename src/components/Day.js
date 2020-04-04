import React from "react";
import { Link } from "react-router-dom";
import "../css/Day.scss";

export default function Day(props) {
  return (
    <Link to={{ pathname: `/writer/${props.id}`}}>
      <div className="day">{props.id}</div>
    </Link>
  )
}

