import React from 'react';
import { connect } from 'react-redux';

import PrivacyPolicy from '../../components/PrivacyPolicy';

const PrivacyPolicyContainer = props => <PrivacyPolicy {...props} />;

const mapStateToProps = (state) => {
  return {
  }
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(PrivacyPolicyContainer);