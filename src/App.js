import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Calendar from "./containers/Calendar";
import Header from "./components/Header";
import Writer from "./containers/Writer";
import { connect } from "react-redux";
import { getCurrentMonth } from "./redux/actions/calendar";
import "./css/App.scss";


class App extends Component {

  componentDidMount() {
    let d = new Date();
    let month = d.getMonth();
    let year = d.getFullYear();
    this.props.getCurrentMonth(month, year);
  }

  render() {
    return (
      <Router>
        <div id="app">
          <Switch>
            <Header exact path="/" currentMonth={this.props.month} />
            <Route exact path="/:month" render={props => <Calendar {...props}  currentMonth={this.props} /> } /> 
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
    monthId: state.calendar.monthId,
    year: state.calendar.year,
    loading: state.calendar.loading
  })
}

export default connect(mapStateToProps, { getCurrentMonth })(App);
