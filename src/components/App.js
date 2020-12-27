import React, { Component } from "react";
import Quotes from "./Quotes";
import Clock from "./Clock";
import "../style.css";

class App extends Component {
  render() {
    let quotesText = '"Have a Great Day"';
    return (
      <div className="clock-page">
        <Clock clock="ClockData"></Clock>
        <Quotes quotes={quotesText}></Quotes>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
      </div>
    );
  }
}

export default App;
