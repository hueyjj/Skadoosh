import React from 'react';
import { connect } from 'react-redux';

import Search from '../components/Main/Search';

const SearchContainer = props => <Search {...props} />;

const mapStateToProps = (state) => {
//   const { } = state;

  return {
  }
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);