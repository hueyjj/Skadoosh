import React from 'react';
import { connect } from 'react-redux';

import Review from '../components/main/Review';

const ReviewContainer = props => <Review {...props} />;

const mapStateToProps = (state) => {
//   const { } = state;

  return {
  }
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewContainer);