import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Calendar from "./containers/Calendar";
import Header from "./components/Header";
import Writer from "./containers/Writer";
import { connect } from "react-redux";
import { getCurrentMonth, getPreviousMonth, getNextMonth } from "./redux/actions/calendar";
import "./css/App.scss";


class App extends Component {

  componentDidMount() {
    let d = new Date();
    // let month = d.toLocaleString('default', { month: 'long'});
    let month = d.getMonth();
    this.props.getCurrentMonth(month);
  }

  render() {
    return (
      <Router>
        <div id="app">
            <Header 
              getCurrentMonth={this.props.getCurrentMonth} 
              getPreviousMonth={this.props.getPreviousMonth} 
              getNextMonth={this.props.getNextMonth}
              currentMonth={this.props.month} 
            />
            <Switch>
            <Route exact path="/:month" render={props => <Calendar {...props} currentMonth={this.props.month}/> } /> 
            <Route exact path="/writer/:id" render={props => <Writer {...props} />}/>
            </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  debugger;
  return({
    month: state.calendar.month
  })
}

export default connect(mapStateToProps, { getCurrentMonth, getPreviousMonth, getNextMonth })(App);
