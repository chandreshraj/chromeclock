import React, { Component } from "react";
import "../style.css";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date(), date: new Date() };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ time: new Date(), date: new Date() });
    }, 1000);
  }

  componentWillMount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className="clock">
        <div className="datestamp">{this.state.date.toDateString()}</div>
        <div className="timer">{this.state.time.toLocaleTimeString()}</div>
      </div>
    );
  }
}

export default Clock;
