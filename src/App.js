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
              currentMonthId={this.props.monthId}
            />
            <Switch>
            <Route exact path="/:month" render={props => <Calendar {...props}  /> } /> 
            <Route exact path="/writer/:id" render={props => <Writer {...props} />}/>
            </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return({
    month: state.calendar.month,
    monthId: state.calendar.monthId
  })
}

export default connect(mapStateToProps, { getCurrentMonth, getPreviousMonth, getNextMonth })(App);
