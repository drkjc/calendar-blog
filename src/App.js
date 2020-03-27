import React, { Component } from "react";
import Day from "./components/Day";
import Header from "./components/Header";
import "./css/App.css";

class App extends Component {

  renderCalendar = () => {
    let days = [];
    for(let i = 1; i < 31; i++) {
      days.push(<Day id={i} />)
    }
    return days;
  }

  render() {
    return (
      <div id="app">
        <Header />
        <div className="grid-container">
         {this.renderCalendar()}
        </div>
      </div>
    );
  }
}

export default App;
