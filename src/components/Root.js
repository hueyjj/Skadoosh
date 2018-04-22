import React, { Component } from 'react';

import "../styles/Root.css";

import Counter from "../components/Counter";

class Root extends Component {
  render() {
    const { counter } = this.props;
    const { increment, decrement } = this.props;

    return (
      <div className="root">
        <Counter counter={counter} />

        <button
          id="add-button"
          onClick={increment}
        >
          +
        </button>

        <button
          id="sub-button"
          onClick={decrement}
        >
          -
        </button>
      </div>
    );
  }
}

export default Root;
