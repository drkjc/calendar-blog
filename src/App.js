import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Calendar from "./containers/Calendar";
import Header from "./components/Header";
import Writer from "./containers/Writer";
import { connect } from "react-redux";
import { getCurrentMonth } from "./redux/actions/calendar";
import "./css/App.scss";


class App extends Component {


  // get todays date when app first loads
  componentDidMount() {
    let d = new Date();
    let month = d.getMonth();
    let year = d.getFullYear();
    // getCurrentMonth returns current month name, array position, and current year to be used in calendar link
    this.props.getCurrentMonth(month, year);
  }

  render() {
    return (
      <Router>
        <div id="app">
          <Switch>
            <Header exact path="/" currentYear={this.props.year} />
            <Route exact path="/:year" render={props => <Calendar {...props}  currentMonth={this.props} /> } /> 
            <Route exact path="/writer/:id" render={props => <Writer {...props} />}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  // state returned from GET_CURRENT_MONTH reducer switch
  return({
    monthId: state.calendar.monthId,
    year: state.calendar.year,
    loading: state.calendar.loading
  })
}

export default connect(mapStateToProps, { getCurrentMonth })(App);
