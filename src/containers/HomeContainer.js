import React from 'react';
import { connect } from 'react-redux';

import Home from '../components/Home';

const HomeContainer = props => <Home {...props} />;

const mapStateToProps = (state) => {
//   const { } = state;

  return {
  }
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);