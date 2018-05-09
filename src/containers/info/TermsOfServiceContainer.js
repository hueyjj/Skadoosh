import React from 'react';
import { connect } from 'react-redux';

import TermsOfService from '../../components/TermsOfService';

const TermsOfServiceContainer = props => <TermsOfService {...props} />;

const mapStateToProps = (state) => {
  return {
  }
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(TermsOfServiceContainer);