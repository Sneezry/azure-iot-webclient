import React, { Component } from 'react';
import Filter from './Filter';
import Result from './Result';

class Leaderboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeRange: "Day",
      refreshResult: false
    };
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(timeRange, refreshResult) {
    this.setState({
      timeRange: timeRange,
      refreshResult: refreshResult
    });
  }

  render() {
    return (
      <div className="Leaderboard">
        <h2>Send Cloud-To-Device Message</h2>
      </div>
    );
  }
}

export default Leaderboard;
