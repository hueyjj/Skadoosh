import React from 'react';
import { connect } from 'react-redux';

import Login from '../components/Login';
import {
  fetchLogin
} from "../actions/AuthActions";

const LoginContainer = props => <Login {...props} />;

const mapStateToProps = (state) => {
  //   const { } = state;

  return {
  }
};

const mapDispatchToProps = {
  fetchLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);