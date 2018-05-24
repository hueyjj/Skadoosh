import React from 'react';
import { connect } from 'react-redux';

import Search from '../components/main/Search';

import { fetchCourse } from "../actions/ApiActions";

const SearchContainer = props => <Search {...props} />;

const mapStateToProps = (state) => {
//   const { } = state;

  return {
  }
};

const mapDispatchToProps = {
  fetchCourse,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);