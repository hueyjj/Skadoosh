import React from 'react';
import { connect } from 'react-redux';

import Faq from '../../components/Faq';

const FaqContainer = props => <Faq {...props} />;

const mapStateToProps = (state) => {
  return {
  }
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(FaqContainer);
