import React from 'react';
import { connect } from 'react-redux';

import Signup from '../components/Signup';
import {
  fetchSignup,
} from "../actions/AuthActions";

const SignupContainer = props => <Signup {...props} />;

const mapStateToProps = (state) => {
  return {
  }
};

const mapDispatchToProps = {
  fetchSignup,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer);
