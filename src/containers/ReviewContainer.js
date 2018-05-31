import React from 'react';
import { connect } from 'react-redux';

import Review from '../components/main/Review';

const ReviewContainer = props => <Review {...props} />;

const mapStateToProps = (state) => {
  const { review } = state;

  return {
    review,
  }
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewContainer);