import React, { Component } from 'react';
import CalendarDays from './calendar-days';
import './calendar.css'

export default class Calendar extends Component {
  constructor() {
    super();

    this.weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    this.months = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'];

    this.state = {
      currentDay: new Date()
    }
  }

  changeCurrentMonth = (newMonth) => {
    const currentDay = new Date(this.state.currentDay.getFullYear(), newMonth, 1);
    this.setState({ currentDay });
  };


  changeCurrentDay = (day) => {
    this.setState({ currentDay: new Date(day.year, day.month, day.number) });
  }

  nextDay = () => {
    this.setState({ currentDay: new Date(this.state.currentDay.setDate(this.state.currentDay.getDate() + 1)) });
  }

  previousDay = () => {
    this.setState({ currentDay: new Date(this.state.currentDay.setDate(this.state.currentDay.getDate() - 1)) });
  }

  previousMonth = () => {
    this.setState({ currentDay: new Date(this.state.currentDay.setDate(this.state.currentDay.getDate() - 1)) });
  }
  render() {
    return (
      <div className="calendar">
        <div className="calendar-header">
          <div className="title">

          <details className="dropdown">
            <summary className="m-1 btn text-xl">{this.months[this.state.currentDay.getMonth()]} {this.state.currentDay.getFullYear()}</summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            {this.months.map((month, index) => (
                  <li key={index} onClick={() => this.changeCurrentMonth(index)}>
                    <a>{month}</a>
                  </li>
                ))}
            </ul>
            </details>
            
          </div>
          <div className="tools">
            <button onClick={this.previousDay}>
            <span style={{fontSize:"20px"}}>←</span>
            </button>
            <p>{this.months[this.state.currentDay.getMonth()]} {this.state.currentDay.getDate()}</p>
            <button onClick={this.nextDay}>
            <span style={{fontSize:"20px"}}>→</span>
            </button>

          </div>
        </div>
        <div className="calendar-body">
          <div className="table-header">
            {
              this.weekdays.map((weekday) => {
                return <div className="weekday"><p>{weekday}</p></div>
              })
            }
          </div>
          <CalendarDays day={this.state.currentDay} changeCurrentDay={this.changeCurrentDay} />
        </div>
      </div>
    )
  }
}
