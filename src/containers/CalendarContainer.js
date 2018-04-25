import React from 'react';
import { connect } from 'react-redux';

import Calendar from '../components/Calendar';

const CalendarContainer = props => <Calendar {...props} />;

const mapStateToProps = (state) => {
//   const { } = state;

  return {
  }
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(CalendarContainer);