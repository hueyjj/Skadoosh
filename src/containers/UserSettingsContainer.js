import React from 'react';
import { connect } from 'react-redux';

import UserSettings from '../components/main/UserSettings';

const UserSettingsContainer = props => <UserSettings {...props} />;

const mapStateToProps = (state) => {
//   const { } = state;

  return {
  }
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(UserSettingsContainer);