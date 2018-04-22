import React, { Component } from 'react';

import "../styles/Counter.css";

class Counter extends Component {
  render() {
    const { counter } = this.props;

    return (
      <div className="counter-container">
        {counter.count}
      </div>
    );
  }
}

export default Counter;