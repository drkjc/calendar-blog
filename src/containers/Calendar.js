import React, { Component } from 'react';
import Day from '../components/Day';

export default class Calendar extends Component {

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
            <div className="grid-container">{this.renderCalendar()}</div>
        )
    }
}