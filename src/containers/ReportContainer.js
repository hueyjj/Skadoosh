import React from 'react';
import { connect } from 'react-redux';

import Report from '../components/main/Report';

const ReportContainer = props => <Report {...props} />;

const mapStateToProps = (state) => {
//   const { } = state;

  return {
  }
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(ReportContainer);