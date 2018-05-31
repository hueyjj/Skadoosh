import React from 'react';
import { connect } from 'react-redux';

import Review from '../components/main/Review';

import {
  fetchReviews,
  fetchCreateReview,
} from "../actions/ApiActions";

const ReviewContainer = props => <Review {...props} />;

const mapStateToProps = (state) => {
  const { review } = state;

  return {
    review,
  }
};

const mapDispatchToProps = {
  fetchReviews,
  fetchCreateReview,
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewContainer);