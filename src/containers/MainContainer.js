
import React from 'react';
import { connect } from 'react-redux';

import Main from '../components/main/Main';

const MainContainer = props => <Main {...props} />;

const mapStateToProps = (state) => {
//   const { } = state;

  return {
  }
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);