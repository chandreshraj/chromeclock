import React, { Component } from "react";

class Quotes extends Component {
  state = {
    quotesText: "Have a Great Day",
  };
  async componentDidMount() {
    const url = "https://type.fit/api/quotes";
    const response = await fetch(url);
    let Quotes = [];
    Quotes = await response.json();
    const data = Quotes[Math.floor(Math.random() * Quotes.length)];
    this.setState({ quotesText: data.text });
  }
  render() {
    return <h4>{this.state.quotesText}</h4>;
  }
}

export default Quotes;
