import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Day from "./components/Day";
import Header from "./components/Header";
import DayTitles from "./components/DayTitles"
import Writer from "./components/Writer"
import "./css/App.scss";

class App extends Component {

  renderCalendar = () => {
    let days = [];
    for(let i = 1; i < 31; i++) {
      days.push(
        <Day key={i} id={i}/>
      )
    }
    
    return days;
  }

  render() {
    return (
      <Router>
        <div id="app">
            <Header />
            <DayTitles />
            <div className="grid-container">
              {this.renderCalendar()}
            </div>

            <Switch>
              <Route exact path="/writer/:id" render={props => <Writer {...props} />}/>
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
