import React from 'react';
import { connect } from 'react-redux';

import RequirementChart from '../components/Main/RequirementChart';

const RequirementChartContainer = props => <RequirementChart {...props} />;

const mapStateToProps = (state) => {
//   const { } = state;

  return {
  }
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(RequirementChartContainer);