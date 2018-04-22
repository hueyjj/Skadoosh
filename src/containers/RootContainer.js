import React from 'react';
import { connect } from 'react-redux';

import Root from '../components/Root';

import { increment, decrement } from "../actions/CounterActions";

const RootContainer = props => <Root {...props} />;

const mapStateToProps = (state) => {
  const { counter } = state;

  return {
    counter,
  }
};

const mapDispatchToProps = {
  increment,
  decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);
