import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Calendar from "./containers/Calendar";
import Header from "./components/Header";
import DayTitles from "./components/DayTitles"
import Writer from "./components/Writer"
import "./css/App.scss";

class App extends Component {

  render() {
    return (
      <Router>
        <div id="app">
            <Header />
            <Switch>
            <Route exact path="/" render={props => <Calendar {...props} /> } /> 
            <Route exact path="/writer/:id" render={props => <Writer {...props} />}/>
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
